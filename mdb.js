/*!
 * MDB5
 * Version: FREE 7.2.0
 *
 *
 * Copyright: Material Design for Bootstrap
 * https://mdbootstrap.com/
 *
 * Read the license: https://mdbootstrap.com/general/license/
 *
 *
 * Documentation: https://mdbootstrap.com/docs/standard/
 *
 * Support: https://mdbootstrap.com/support/
 *
 * Contact: contact@mdbootstrap.com
 *
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t = "undefined" != typeof globalThis ? globalThis : t || self).mdb =
          {})
      );
})(this, function (t) {
  "use strict";
  var e = Object.defineProperty,
    i = (t, i, n) => (
      ((t, i, n) => {
        i in t
          ? e(t, i, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (t[i] = n);
      })(t, "symbol" != typeof i ? i + "" : i, n),
      n
    );
  const n = (() => {
      const t = {};
      let e = 1;
      return {
        set(i, n, s) {
          void 0 === i[n] && ((i[n] = { key: n, id: e }), e++),
            (t[i[n].id] = s);
        },
        get(e, i) {
          if (!e || void 0 === e[i]) return null;
          const n = e[i];
          return n.key === i ? t[n.id] : null;
        },
        delete(e, i) {
          if (void 0 === e[i]) return;
          const n = e[i];
          n.key === i && (delete t[n.id], delete e[i]);
        },
      };
    })(),
    s = {
      setData(t, e, i) {
        n.set(t, e, i);
      },
      getData: (t, e) => n.get(t, e),
      removeData(t, e) {
        n.delete(t, e);
      },
    },
    o = (t) => {
      let e = t.getAttribute("data-mdb-target");
      if (!e || "#" === e) {
        const i = t.getAttribute("href");
        e = i && "#" !== i ? i.trim() : null;
      }
      return e;
    },
    r = (t) => {
      const e = o(t);
      return e && document.querySelector(e) ? e : null;
    },
    a = (t) => {
      const e = o(t);
      return e ? document.querySelector(e) : null;
    },
    l = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    c = (t) =>
      l(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    h = (t, e, i) => {
      Object.keys(i).forEach((n) => {
        const s = i[n],
          o = e[n],
          r =
            o && l(o)
              ? "element"
              : null == (a = o)
              ? `${a}`
              : {}.toString
                  .call(a)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var a;
        if (!new RegExp(s).test(r))
          throw new Error(
            `${t.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`
          );
      });
    },
    d = (t) => {
      if (!t) return !1;
      if (t.style && t.parentNode && t.parentNode.style) {
        const e = getComputedStyle(t),
          i = getComputedStyle(t.parentNode);
        return (
          "none" !== e.display &&
          "none" !== i.display &&
          "hidden" !== e.visibility
        );
      }
      return !1;
    },
    u = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    f = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-mdb-no-jquery") ? t : null;
    },
    p = (t) => {
      "loading" === document.readyState
        ? document.addEventListener("DOMContentLoaded", t)
        : t();
    };
  document.documentElement.dir;
  const m = (t) => document.createElement(t),
    g = f(),
    _ = /[^.]*(?=\..*)\.|.*/,
    b = /\..*/,
    v = /::\d+$/,
    y = {};
  let w = 1;
  const E = { mouseenter: "mouseover", mouseleave: "mouseout" },
    A = [
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ];
  function C(t, e) {
    return (e && `${e}::${w++}`) || t.uidEvent || w++;
  }
  function T(t) {
    const e = C(t);
    return (t.uidEvent = e), (y[e] = y[e] || {}), y[e];
  }
  function O(t, e, i = null) {
    const n = Object.keys(t);
    for (let s = 0, o = n.length; s < o; s++) {
      const o = t[n[s]];
      if (o.originalHandler === e && o.delegationSelector === i) return o;
    }
    return null;
  }
  function x(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e;
    let o = t.replace(b, "");
    const r = E[o];
    r && (o = r);
    return A.indexOf(o) > -1 || (o = t), [n, s, o];
  }
  function L(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    i || ((i = n), (n = null));
    const [o, r, a] = x(e, i, n),
      l = T(t),
      c = l[a] || (l[a] = {}),
      h = O(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = C(r, e.replace(_, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: e } = s; e && e !== this; e = e.parentNode)
                for (let r = o.length; r--; "")
                  if (o[r] === e)
                    return (
                      (s.delegateTarget = e),
                      n.oneOff && D.off(t, s.type, i),
                      i.apply(e, [s])
                    );
              return null;
            };
          })(t, i, n)
        : (function (t, e) {
            return function i(n) {
              return (
                (n.delegateTarget = t),
                i.oneOff && D.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, i);
    (u.delegationSelector = o ? i : null),
      (u.originalHandler = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function $(t, e, i, n, s) {
    const o = O(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  const D = {
    on(t, e, i, n) {
      L(t, e, i, n, !1);
    },
    one(t, e, i, n) {
      L(t, e, i, n, !0);
    },
    extend(t, e, i) {
      e.forEach((e) => {
        D.on(t, `${e.name}.bs.${i}`, (n) => {
          const s = {};
          e.parametersToCopy &&
            e.parametersToCopy.forEach((t) => {
              s[t] = n[t];
            });
          D.trigger(t, `${e.name}.mdb.${i}`, s).defaultPrevented &&
            n.preventDefault();
        });
      });
    },
    off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      const [s, o, r] = x(e, i, n),
        a = r !== e,
        l = T(t),
        c = "." === e.charAt(0);
      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void $(t, l, r, o, s ? i : null);
      }
      c &&
        Object.keys(l).forEach((i) => {
          !(function (t, e, i, n) {
            const s = e[i] || {};
            Object.keys(s).forEach((o) => {
              if (o.indexOf(n) > -1) {
                const n = s[o];
                $(t, e, i, n.originalHandler, n.delegationSelector);
              }
            });
          })(t, l, i, e.slice(1));
        });
      const h = l[r] || {};
      Object.keys(h).forEach((i) => {
        const n = i.replace(v, "");
        if (!a || e.indexOf(n) > -1) {
          const e = h[i];
          $(t, l, r, e.originalHandler, e.delegationSelector);
        }
      });
    },
    trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      const n = e.replace(b, ""),
        s = e !== n,
        o = A.indexOf(n) > -1;
      let r,
        a = !0,
        l = !0,
        c = !1,
        h = null;
      return (
        s &&
          g &&
          ((r = g.Event(e, i)),
          g(t).trigger(r),
          (a = !r.isPropagationStopped()),
          (l = !r.isImmediatePropagationStopped()),
          (c = r.isDefaultPrevented())),
        o
          ? ((h = document.createEvent("HTMLEvents")), h.initEvent(n, a, !0))
          : (h = new CustomEvent(e, { bubbles: a, cancelable: !0 })),
        void 0 !== i &&
          Object.keys(i).forEach((t) => {
            Object.defineProperty(h, t, { get: () => i[t] });
          }),
        c && h.preventDefault(),
        l && t.dispatchEvent(h),
        h.defaultPrevented && void 0 !== r && r.preventDefault(),
        h
      );
    },
  };
  function k(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function N(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  const M = {
      setDataAttribute(t, e, i) {
        t.setAttribute(`data-mdb-${N(e)}`, i);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute(`data-mdb-${N(e)}`);
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = { ...t.dataset };
        return (
          Object.keys(e)
            .filter((t) => t.startsWith("mdb"))
            .forEach((t) => {
              let i = t.replace(/^mdb/, "");
              (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                (e[i] = k(e[t]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => k(t.getAttribute(`data-mdb-${N(e)}`)),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + document.body.scrollTop,
          left: e.left + document.body.scrollLeft,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
      style(t, e) {
        Object.assign(t.style, e);
      },
      toggleClass(t, e) {
        t &&
          (t.classList.contains(e)
            ? t.classList.remove(e)
            : t.classList.add(e));
      },
      addClass(t, e) {
        t.classList.contains(e) || t.classList.add(e);
      },
      addStyle(t, e) {
        Object.keys(e).forEach((i) => {
          t.style[i] = e[i];
        });
      },
      removeClass(t, e) {
        t.classList.contains(e) && t.classList.remove(e);
      },
      hasClass: (t, e) => t.classList.contains(e),
    },
    S = {
      closest: (t, e) => t.closest(e),
      matches: (t, e) => t.matches(e),
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          this.matches(n, e) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (this.matches(i, e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
    },
    I = new Map(),
    P = {
      set(t, e, i) {
        I.has(t) || I.set(t, new Map());
        const n = I.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (I.has(t) && I.get(t).get(e)) || null,
      remove(t, e) {
        if (!I.has(t)) return;
        const i = I.get(t);
        i.delete(e), 0 === i.size && I.delete(t);
      },
    },
    j = "transitionend",
    H = (t) => (
      t &&
        window.CSS &&
        window.CSS.escape &&
        (t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)),
      t
    ),
    z = (t) => {
      t.dispatchEvent(new Event(j));
    },
    R = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    B = (t) =>
      R(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(H(t))
        : null,
    W = (t) => {
      if (!R(t) || 0 === t.getClientRects().length) return !1;
      const e =
          "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
      if (!i) return e;
      if (i !== t) {
        const e = t.closest("summary");
        if (e && e.parentNode !== i) return !1;
        if (null === e) return !1;
      }
      return e;
    },
    F = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    q = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? q(t.parentNode)
        : null;
    },
    V = () => {},
    Y = (t) => {
      t.offsetHeight;
    },
    U = () => "rtl" === document.documentElement.dir,
    K = (t, e = [], i = t) => ("function" == typeof t ? t(...e) : i),
    X = (t, e, i = !0) => {
      if (!i) return void K(t);
      const n =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(e) + 5;
      let s = !1;
      const o = ({ target: i }) => {
        i === e && ((s = !0), e.removeEventListener(j, o), K(t));
      };
      e.addEventListener(j, o),
        setTimeout(() => {
          s || z(e);
        }, n);
    },
    Q = (t, e, i, n) => {
      const s = t.length;
      let o = t.indexOf(e);
      return -1 === o
        ? !i && n
          ? t[s - 1]
          : t[0]
        : ((o += i ? 1 : -1),
          n && (o = (o + s) % s),
          t[Math.max(0, Math.min(o, s - 1))]);
    },
    G = /[^.]*(?=\..*)\.|.*/,
    Z = /\..*/,
    J = /::\d+$/,
    tt = {};
  let et = 1;
  const it = { mouseenter: "mouseover", mouseleave: "mouseout" },
    nt = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function st(t, e) {
    return (e && `${e}::${et++}`) || t.uidEvent || et++;
  }
  function ot(t) {
    const e = st(t);
    return (t.uidEvent = e), (tt[e] = tt[e] || {}), tt[e];
  }
  function rt(t, e, i = null) {
    return Object.values(t).find(
      (t) => t.callable === e && t.delegationSelector === i
    );
  }
  function at(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e || i;
    let o = dt(t);
    return nt.has(o) || (o = t), [n, s, o];
  }
  function lt(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    let [o, r, a] = at(e, i, n);
    if (e in it) {
      r = ((t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        })(r);
    }
    const l = ot(t),
      c = l[a] || (l[a] = {}),
      h = rt(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = st(r, e.replace(G, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (const a of o)
                  if (a === r)
                    return (
                      ft(s, { delegateTarget: r }),
                      n.oneOff && ut.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
            };
          })(t, i, r)
        : (function (t, e) {
            return function i(n) {
              return (
                ft(n, { delegateTarget: t }),
                i.oneOff && ut.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, r);
    (u.delegationSelector = o ? i : null),
      (u.callable = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function ct(t, e, i, n, s) {
    const o = rt(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function ht(t, e, i, n) {
    const s = e[i] || {};
    for (const [o, r] of Object.entries(s))
      o.includes(n) && ct(t, e, i, r.callable, r.delegationSelector);
  }
  function dt(t) {
    return (t = t.replace(Z, "")), it[t] || t;
  }
  const ut = {
    on(t, e, i, n) {
      lt(t, e, i, n, !1);
    },
    one(t, e, i, n) {
      lt(t, e, i, n, !0);
    },
    off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      const [s, o, r] = at(e, i, n),
        a = r !== e,
        l = ot(t),
        c = l[r] || {},
        h = e.startsWith(".");
      if (void 0 === o) {
        if (h) for (const i of Object.keys(l)) ht(t, l, i, e.slice(1));
        for (const [i, n] of Object.entries(c)) {
          const s = i.replace(J, "");
          (a && !e.includes(s)) ||
            ct(t, l, r, n.callable, n.delegationSelector);
        }
      } else {
        if (!Object.keys(c).length) return;
        ct(t, l, r, o, s ? i : null);
      }
    },
    trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      const n =
        window.jQuery && !document.body.hasAttribute("data-mdb-no-jquery")
          ? window.jQuery
          : null;
      let s = null,
        o = !0,
        r = !0,
        a = !1;
      e !== dt(e) &&
        n &&
        ((s = n.Event(e, i)),
        n(t).trigger(s),
        (o = !s.isPropagationStopped()),
        (r = !s.isImmediatePropagationStopped()),
        (a = s.isDefaultPrevented()));
      const l = ft(new Event(e, { bubbles: o, cancelable: !0 }), i);
      return (
        a && l.preventDefault(),
        r && t.dispatchEvent(l),
        l.defaultPrevented && s && s.preventDefault(),
        l
      );
    },
  };
  function ft(t, e = {}) {
    for (const [i, n] of Object.entries(e))
      try {
        t[i] = n;
      } catch {
        Object.defineProperty(t, i, { configurable: !0, get: () => n });
      }
    return t;
  }
  function pt(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch {
      return t;
    }
  }
  function mt(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  const gt = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-mdb-${mt(e)}`, i);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-mdb-${mt(e)}`);
    },
    getDataAttributes(t) {
      if (!t) return {};
      const e = {},
        i = Object.keys(t.dataset).filter(
          (t) => t.startsWith("mdb") && !t.startsWith("mdbConfig")
        );
      for (const n of i) {
        let i = n.replace(/^mdb/, "");
        (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
          (e[i] = pt(t.dataset[n]));
      }
      return e;
    },
    getDataAttribute: (t, e) => pt(t.getAttribute(`data-mdb-${mt(e)}`)),
  };
  class _t {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return t;
    }
    _mergeConfigObj(t, e) {
      const i = R(e) ? gt.getDataAttribute(e, "config") : {};
      return {
        ...this.constructor.Default,
        ...("object" == typeof i ? i : {}),
        ...(R(e) ? gt.getDataAttributes(e) : {}),
        ...("object" == typeof t ? t : {}),
      };
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const [n, s] of Object.entries(e)) {
        const e = t[n],
          o = R(e)
            ? "element"
            : null == (i = e)
            ? `${i}`
            : Object.prototype.toString
                .call(i)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase();
        if (!new RegExp(s).test(o))
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${s}".`
          );
      }
      var i;
    }
  }
  let bt = class extends _t {
    constructor(t, e) {
      super(),
        (t = B(t)) &&
          ((this._element = t),
          (this._config = this._getConfig(e)),
          P.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      P.remove(this._element, this.constructor.DATA_KEY),
        ut.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
    }
    _queueCallback(t, e, i = !0) {
      X(t, e, i);
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t, this._element)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    static getInstance(t) {
      return P.get(B(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.3.2";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`;
    }
  };
  let vt = class t extends bt {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const i = t.getOrCreateInstance(this);
        "toggle" === e && i[e]();
      });
    }
  };
  const yt = (() => {
      const t = [];
      return {
        set(e) {
          t.push(e);
        },
        get: (e) => t.includes(e),
      };
    })(),
    wt = {
      set(t) {
        yt.set(t);
      },
      get: (t) => yt.get(t),
    },
    Et = (t) => {
      if (((e = t.NAME), !wt.get(e))) {
        At(t, !0);
      }
      var e;
    },
    At = (t, e = !1) => {
      if (!t || wt.get(t.NAME)) return;
      wt.set(t.NAME);
      const i = Ct[t.NAME] || null,
        n = (null == i ? void 0 : i.isToggler) || !1;
      var s;
      (s = t),
        p(() => {
          const t = f();
          if (t) {
            const e = s.NAME,
              i = t.fn[e];
            (t.fn[e] = s.jQueryInterface),
              (t.fn[e].Constructor = s),
              (t.fn[e].noConflict = () => ((t.fn[e] = i), s.jQueryInterface));
          }
        }),
        (null == i ? void 0 : i.advanced)
          ? i.advanced(t, null == i ? void 0 : i.selector)
          : n
          ? i.callback(t, null == i ? void 0 : i.selector)
          : e ||
            S.find(null == i ? void 0 : i.selector).forEach((e) => {
              let n = t.getInstance(e);
              n ||
                ((n = new t(e)),
                (null == i ? void 0 : i.onInit) && n[i.onInit]());
            });
    };
  let Ct;
  const Tt = "button",
    Ot = `mdb.${Tt}`,
    xt = `.${Ot}`,
    Lt = `click${xt}`,
    $t = "transitionend",
    Dt = "mouseenter",
    kt = "mouseleave",
    Nt = `hide${xt}`,
    Mt = `hidden${xt}`,
    St = `show${xt}`,
    It = `shown${xt}`,
    Pt = "active",
    jt = "fixed-action-btn";
  class Ht extends vt {
    constructor(t) {
      super(t),
        (this._fn = {}),
        this._element &&
          (s.setData(this._element, Ot, this),
          this._init(),
          M.setDataAttribute(
            this._element,
            `${this.constructor.NAME}-initialized`,
            !0
          ),
          Et(this.constructor));
    }
    static get NAME() {
      return Tt;
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        let i = s.getData(this, Ot);
        const n = "object" == typeof t && t;
        if (
          (i || !/dispose/.test(t)) &&
          (i || (i = new Ht(this, n)), "string" == typeof t)
        ) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
    get _actionButton() {
      return S.findOne(
        ".fixed-action-btn:not(.smooth-scroll) > .btn-floating",
        this._element
      );
    }
    get _buttonListElements() {
      return S.find("ul .btn", this._element);
    }
    get _buttonList() {
      return S.findOne("ul", this._element);
    }
    get _isTouchDevice() {
      return "ontouchstart" in document.documentElement;
    }
    show() {
      M.hasClass(this._element, jt) &&
        (D.off(this._buttonList, $t),
        D.trigger(this._element, St),
        this._bindListOpenTransitionEnd(),
        M.addStyle(this._element, { height: `${this._fullContainerHeight}px` }),
        this._toggleVisibility(!0));
    }
    hide() {
      M.hasClass(this._element, jt) &&
        (D.off(this._buttonList, $t),
        D.trigger(this._element, Nt),
        this._bindListHideTransitionEnd(),
        this._toggleVisibility(!1));
    }
    dispose() {
      M.hasClass(this._element, jt) &&
        (D.off(this._actionButton, Lt),
        this._actionButton.removeEventListener(Dt, this._fn.mouseenter),
        this._element.removeEventListener(kt, this._fn.mouseleave)),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    _init() {
      M.hasClass(this._element, jt) &&
        (this._saveInitialHeights(),
        this._setInitialStyles(),
        this._bindInitialEvents());
    }
    _bindMouseEnter() {
      this._actionButton.addEventListener(
        Dt,
        (this._fn.mouseenter = () => {
          this._isTouchDevice || this.show();
        })
      );
    }
    _bindMouseLeave() {
      this._element.addEventListener(
        kt,
        (this._fn.mouseleave = () => {
          this.hide();
        })
      );
    }
    _bindClick() {
      D.on(this._actionButton, Lt, () => {
        M.hasClass(this._element, Pt) ? this.hide() : this.show();
      });
    }
    _bindListHideTransitionEnd() {
      D.on(this._buttonList, $t, (t) => {
        "transform" === t.propertyName &&
          (D.off(this._buttonList, $t),
          (this._element.style.height = `${this._initialContainerHeight}px`),
          D.trigger(this._element, Mt));
      });
    }
    _bindListOpenTransitionEnd() {
      D.on(this._buttonList, $t, (t) => {
        "transform" === t.propertyName &&
          (D.off(this._buttonList, $t), D.trigger(this._element, It));
      });
    }
    _toggleVisibility(t) {
      const e = t ? "addClass" : "removeClass",
        i = t ? "translate(0)" : `translateY(${this._fullContainerHeight}px)`;
      M.addStyle(this._buttonList, { transform: i }),
        this._buttonListElements &&
          this._buttonListElements.forEach((t) => M[e](t, "shown")),
        M[e](this._element, Pt);
    }
    _getHeight(t) {
      const e = window.getComputedStyle(t);
      return parseFloat(e.getPropertyValue("height"));
    }
    _saveInitialHeights() {
      (this._initialContainerHeight = this._getHeight(this._element)),
        (this._initialListHeight = this._getHeight(this._buttonList)),
        (this._fullContainerHeight =
          this._initialContainerHeight + this._initialListHeight);
    }
    _bindInitialEvents() {
      this._bindClick(), this._bindMouseEnter(), this._bindMouseLeave();
    }
    _setInitialStyles() {
      (this._buttonList.style.marginBottom = `${this._initialContainerHeight}px`),
        (this._buttonList.style.transform = `translateY(${this._fullContainerHeight}px)`),
        (this._element.style.height = `${this._initialContainerHeight}px`);
    }
  }
  const zt = (t) => {
      let e = t.getAttribute("data-mdb-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? H(i.trim()) : null);
      }
      return e;
    },
    Rt = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode.closest(e);
        for (; n; ) i.push(n), (n = n.parentNode.closest(e));
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(",");
        return this.find(e, t).filter((t) => !F(t) && W(t));
      },
      getSelectorFromElement(t) {
        const e = zt(t);
        return e && Rt.findOne(e) ? e : null;
      },
      getElementFromSelector(t) {
        const e = zt(t);
        return e ? Rt.findOne(e) : null;
      },
      getMultipleElementsFromSelector(t) {
        const e = zt(t);
        return e ? Rt.find(e) : [];
      },
    },
    Bt = "backdrop",
    Wt = "show",
    Ft = `mousedown.bs.${Bt}`,
    qt = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body",
    },
    Vt = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)",
    };
  class Yt extends _t {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    static get Default() {
      return qt;
    }
    static get DefaultType() {
      return Vt;
    }
    static get NAME() {
      return Bt;
    }
    show(t) {
      if (!this._config.isVisible) return void K(t);
      this._append();
      const e = this._getElement();
      this._config.isAnimated && Y(e),
        e.classList.add(Wt),
        this._emulateAnimation(() => {
          K(t);
        });
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(Wt),
          this._emulateAnimation(() => {
            this.dispose(), K(t);
          }))
        : K(t);
    }
    dispose() {
      this._isAppended &&
        (ut.off(this._element, Ft),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _configAfterMerge(t) {
      return (t.rootElement = B(t.rootElement)), t;
    }
    _append() {
      if (this._isAppended) return;
      const t = this._getElement();
      this._config.rootElement.append(t),
        ut.on(t, Ft, () => {
          K(this._config.clickCallback);
        }),
        (this._isAppended = !0);
    }
    _emulateAnimation(t) {
      X(t, this._getElement(), this._config.isAnimated);
    }
  }
  const Ut = (t, e = "hide") => {
      const i = `click.dismiss${t.EVENT_KEY}`,
        n = t.NAME;
      ut.on(document, i, `[data-mdb-dismiss="${n}"]`, function (i) {
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), F(this))
        )
          return;
        const s = Rt.getElementFromSelector(this) || this.closest(`.${n}`);
        t.getOrCreateInstance(s)[e]();
      });
    },
    Kt = ".bs.focustrap",
    Xt = `focusin${Kt}`,
    Qt = `keydown.tab${Kt}`,
    Gt = "backward",
    Zt = { autofocus: !0, trapElement: null },
    Jt = { autofocus: "boolean", trapElement: "element" };
  class te extends _t {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    static get Default() {
      return Zt;
    }
    static get DefaultType() {
      return Jt;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        ut.off(document, Kt),
        ut.on(document, Xt, (t) => this._handleFocusin(t)),
        ut.on(document, Qt, (t) => this._handleKeydown(t)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), ut.off(document, Kt));
    }
    _handleFocusin(t) {
      const { trapElement: e } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target))
        return;
      const i = Rt.focusableChildren(e);
      0 === i.length
        ? e.focus()
        : this._lastTabNavDirection === Gt
        ? i[i.length - 1].focus()
        : i[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? Gt : "forward");
    }
  }
  const ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    ie = ".sticky-top",
    ne = "padding-right",
    se = "margin-right";
  class oe {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, ne, (e) => e + t),
        this._setElementAttributes(ee, ne, (e) => e + t),
        this._setElementAttributes(ie, se, (e) => e - t);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, ne),
        this._resetElementAttributes(ee, ne),
        this._resetElementAttributes(ie, se);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t).getPropertyValue(e);
        t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
      });
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && gt.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = gt.getDataAttribute(t, e);
        null !== i
          ? (gt.removeDataAttribute(t, e), t.style.setProperty(e, i))
          : t.style.removeProperty(e);
      });
    }
    _applyManipulationCallback(t, e) {
      if (R(t)) e(t);
      else for (const i of Rt.find(t, this._element)) e(i);
    }
  }
  const re = ".bs.offcanvas",
    ae = "show",
    le = "showing",
    ce = "hiding",
    he = `show${re}`,
    de = `shown${re}`,
    ue = `hide${re}`,
    fe = `hidePrevented${re}`,
    pe = `hidden${re}`,
    me = `keydown.dismiss${re}`,
    ge = { backdrop: !0, keyboard: !0, scroll: !1 },
    _e = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean",
    };
  class be extends bt {
    constructor(t, e) {
      super(t, e),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get Default() {
      return ge;
    }
    static get DefaultType() {
      return _e;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown) return;
      if (ut.trigger(this._element, he, { relatedTarget: t }).defaultPrevented)
        return;
      (this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new oe().hide(),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(le);
      this._queueCallback(
        () => {
          (this._config.scroll && !this._config.backdrop) ||
            this._focustrap.activate(),
            this._element.classList.add(ae),
            this._element.classList.remove(le),
            ut.trigger(this._element, de, { relatedTarget: t });
        },
        this._element,
        !0
      );
    }
    hide() {
      if (!this._isShown) return;
      if (ut.trigger(this._element, ue).defaultPrevented) return;
      this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.add(ce),
        this._backdrop.hide();
      this._queueCallback(
        () => {
          this._element.classList.remove(ae, ce),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._config.scroll || new oe().reset(),
            ut.trigger(this._element, pe);
        },
        this._element,
        !0
      );
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new Yt({
        className: "offcanvas-backdrop",
        isVisible: t,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: t
          ? () => {
              "static" !== this._config.backdrop
                ? this.hide()
                : ut.trigger(this._element, fe);
            }
          : null,
      });
    }
    _initializeFocusTrap() {
      return new te({ trapElement: this._element });
    }
    _addEventListeners() {
      ut.on(this._element, me, (t) => {
        "Escape" === t.key &&
          (this._config.keyboard ? this.hide() : ut.trigger(this._element, fe));
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = be.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  const ve = ".bs.alert",
    ye = `close${ve}`,
    we = `closed${ve}`;
  let Ee = class t extends bt {
    static get NAME() {
      return "alert";
    }
    close() {
      if (ut.trigger(this._element, ye).defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(), ut.trigger(this._element, we), this.dispose();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const i = t.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === i[e] || e.startsWith("_") || "constructor" === e)
            throw new TypeError(`No method named "${e}"`);
          i[e](this);
        }
      });
    }
  };
  const Ae = "alert",
    Ce = [{ name: "close" }, { name: "closed" }];
  class Te extends Ee {
    constructor(t, e = {}) {
      super(t, e),
        this._init(),
        M.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        Et(this.constructor);
    }
    dispose() {
      D.off(this._element, "close.bs.alert"),
        D.off(this._element, "closed.bs.alert"),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return Ae;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      D.extend(this._element, Ce, Ae);
    }
  }
  const Oe = ".bs.swipe",
    xe = `touchstart${Oe}`,
    Le = `touchmove${Oe}`,
    $e = `touchend${Oe}`,
    De = `pointerdown${Oe}`,
    ke = `pointerup${Oe}`,
    Ne = { endCallback: null, leftCallback: null, rightCallback: null },
    Me = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)",
    };
  class Se extends _t {
    constructor(t, e) {
      super(),
        (this._element = t),
        t &&
          Se.isSupported() &&
          ((this._config = this._getConfig(e)),
          (this._deltaX = 0),
          (this._supportPointerEvents = Boolean(window.PointerEvent)),
          this._initEvents());
    }
    static get Default() {
      return Ne;
    }
    static get DefaultType() {
      return Me;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      ut.off(this._element, Oe);
    }
    _start(t) {
      this._supportPointerEvents
        ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
        : (this._deltaX = t.touches[0].clientX);
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
        (this._deltaX = t.clientX - this._deltaX),
        this._handleSwipe(),
        K(this._config.endCallback);
    }
    _move(t) {
      this._deltaX =
        t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40) return;
      const e = t / this._deltaX;
      (this._deltaX = 0),
        e && K(e > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents
        ? (ut.on(this._element, De, (t) => this._start(t)),
          ut.on(this._element, ke, (t) => this._end(t)),
          this._element.classList.add("pointer-event"))
        : (ut.on(this._element, xe, (t) => this._start(t)),
          ut.on(this._element, Le, (t) => this._move(t)),
          ut.on(this._element, $e, (t) => this._end(t)));
    }
    _eventIsPointerPenTouch(t) {
      return (
        this._supportPointerEvents &&
        ("pen" === t.pointerType || "touch" === t.pointerType)
      );
    }
    static isSupported() {
      return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0
      );
    }
  }
  const Ie = ".bs.carousel",
    Pe = "next",
    je = "prev",
    He = "left",
    ze = "right",
    Re = `slide${Ie}`,
    Be = `slid${Ie}`,
    We = `keydown${Ie}`,
    Fe = `mouseenter${Ie}`,
    qe = `mouseleave${Ie}`,
    Ve = `dragstart${Ie}`,
    Ye = "active",
    Ue = ".active",
    Ke = ".carousel-item",
    Xe = Ue + Ke,
    Qe = { ArrowLeft: ze, ArrowRight: He },
    Ge = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    Ze = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean",
    };
  let Je = class t extends bt {
    constructor(t, e) {
      super(t, e),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = Rt.findOne(
          ".carousel-indicators",
          this._element
        )),
        this._addEventListeners(),
        "carousel" === this._config.ride && this.cycle();
    }
    static get Default() {
      return Ge;
    }
    static get DefaultType() {
      return Ze;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(Pe);
    }
    nextWhenVisible() {
      !document.hidden && W(this._element) && this.next();
    }
    prev() {
      this._slide(je);
    }
    pause() {
      this._isSliding && z(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        ));
    }
    _maybeEnableCycle() {
      this._config.ride &&
        (this._isSliding
          ? ut.one(this._element, Be, () => this.cycle())
          : this.cycle());
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding)
        return void ut.one(this._element, Be, () => this.to(t));
      const i = this._getItemIndex(this._getActive());
      if (i === t) return;
      const n = t > i ? Pe : je;
      this._slide(n, e[t]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t) {
      return (t.defaultInterval = t.interval), t;
    }
    _addEventListeners() {
      this._config.keyboard &&
        ut.on(this._element, We, (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (ut.on(this._element, Fe, () => this.pause()),
          ut.on(this._element, qe, () => this._maybeEnableCycle())),
        this._config.touch &&
          Se.isSupported() &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const e of Rt.find(".carousel-item img", this._element))
        ut.on(e, Ve, (t) => t.preventDefault());
      const t = {
        leftCallback: () => this._slide(this._directionToOrder(He)),
        rightCallback: () => this._slide(this._directionToOrder(ze)),
        endCallback: () => {
          "hover" === this._config.pause &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              500 + this._config.interval
            )));
        },
      };
      this._swipeHelper = new Se(this._element, t);
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = Qe[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t);
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      const e = Rt.findOne(Ue, this._indicatorsElement);
      e.classList.remove(Ye), e.removeAttribute("aria-current");
      const i = Rt.findOne(
        `[data-mdb-slide-to="${t}"]`,
        this._indicatorsElement
      );
      i && (i.classList.add(Ye), i.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-mdb-interval"), 10);
      this._config.interval = e || this._config.defaultInterval;
    }
    _slide(t, e = null) {
      if (this._isSliding) return;
      const i = this._getActive(),
        n = t === Pe,
        s = e || Q(this._getItems(), i, n, this._config.wrap);
      if (s === i) return;
      const o = this._getItemIndex(s),
        r = (e) =>
          ut.trigger(this._element, e, {
            relatedTarget: s,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: o,
          });
      if (r(Re).defaultPrevented) return;
      if (!i || !s) return;
      const a = Boolean(this._interval);
      this.pause(),
        (this._isSliding = !0),
        this._setActiveIndicatorElement(o),
        (this._activeElement = s);
      const l = n ? "carousel-item-start" : "carousel-item-end",
        c = n ? "carousel-item-next" : "carousel-item-prev";
      s.classList.add(c), Y(s), i.classList.add(l), s.classList.add(l);
      this._queueCallback(
        () => {
          s.classList.remove(l, c),
            s.classList.add(Ye),
            i.classList.remove(Ye, c, l),
            (this._isSliding = !1),
            r(Be);
        },
        i,
        this._isAnimated()
      ),
        a && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return Rt.findOne(Xe, this._element);
    }
    _getItems() {
      return Rt.find(Ke, this._element);
    }
    _clearInterval() {
      this._interval &&
        (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(t) {
      return U() ? (t === He ? je : Pe) : t === He ? Pe : je;
    }
    _orderToDirection(t) {
      return U() ? (t === je ? He : ze) : t === je ? ze : He;
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const i = t.getOrCreateInstance(this, e);
        if ("number" != typeof e) {
          if ("string" == typeof e) {
            if (void 0 === i[e] || e.startsWith("_") || "constructor" === e)
              throw new TypeError(`No method named "${e}"`);
            i[e]();
          }
        } else i.to(e);
      });
    }
  };
  const ti = "carousel",
    ei = [
      {
        name: "slide",
        parametersToCopy: ["relatedTarget", "direction", "from", "to"],
      },
      {
        name: "slid",
        parametersToCopy: ["relatedTarget", "direction", "from", "to"],
      },
    ];
  class ii extends Je {
    constructor(t, e) {
      super(t, e),
        this._init(),
        M.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        Et(this.constructor);
    }
    dispose() {
      D.off(this._element, "slide.bs.carousel"),
        D.off(this._element, "slid.bs.carousel"),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return ti;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      D.extend(this._element, ei, ti);
    }
  }
  const ni = ".bs.modal",
    si = `hide${ni}`,
    oi = `hidePrevented${ni}`,
    ri = `hidden${ni}`,
    ai = `show${ni}`,
    li = `shown${ni}`,
    ci = `resize${ni}`,
    hi = `click.dismiss${ni}`,
    di = `mousedown.dismiss${ni}`,
    ui = `keydown.dismiss${ni}`,
    fi = "modal-open",
    pi = "show",
    mi = "modal-static",
    gi = { backdrop: !0, focus: !0, keyboard: !0 },
    _i = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean",
    };
  let bi = class t extends bt {
    constructor(t, e) {
      super(t, e),
        (this._dialog = Rt.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new oe()),
        this._addEventListeners();
    }
    static get Default() {
      return gi;
    }
    static get DefaultType() {
      return _i;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown || this._isTransitioning) return;
      ut.trigger(this._element, ai, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(fi),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(t)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      ut.trigger(this._element, si).defaultPrevented ||
        ((this._isShown = !1),
        (this._isTransitioning = !0),
        this._focustrap.deactivate(),
        this._element.classList.remove(pi),
        this._queueCallback(
          () => this._hideModal(),
          this._element,
          this._isAnimated()
        ));
    }
    dispose() {
      ut.off(window, ni),
        ut.off(this._dialog, ni),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Yt({
        isVisible:
          Boolean(this._config.backdrop) &&
          Boolean(!this._config.modalNonInvasive),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new te({ trapElement: this._element });
    }
    _showElement(t) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0);
      const e = Rt.findOne(".modal-body", this._dialog);
      e && (e.scrollTop = 0), Y(this._element), this._element.classList.add(pi);
      this._queueCallback(
        () => {
          this._config.focus && this._focustrap.activate(),
            (this._isTransitioning = !1),
            ut.trigger(this._element, li, { relatedTarget: t });
        },
        this._dialog,
        this._isAnimated()
      );
    }
    _addEventListeners() {
      ut.on(this._element, ui, (t) => {
        "Escape" === t.key &&
          (this._config.keyboard
            ? this.hide()
            : this._triggerBackdropTransition());
      }),
        ut.on(window, ci, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        ut.on(this._element, di, (t) => {
          ut.one(this._element, hi, (e) => {
            this._element === t.target &&
              this._element === e.target &&
              ("static" !== this._config.backdrop
                ? this._config.backdrop && this.hide()
                : this._triggerBackdropTransition());
          });
        });
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(fi),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            ut.trigger(this._element, ri);
        });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (ut.trigger(this._element, oi).defaultPrevented) return;
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._element.style.overflowY;
      "hidden" === e ||
        this._element.classList.contains(mi) ||
        (t || (this._element.style.overflowY = "hidden"),
        this._element.classList.add(mi),
        this._queueCallback(() => {
          this._element.classList.remove(mi),
            this._queueCallback(() => {
              this._element.style.overflowY = e;
            }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      if (i && !t) {
        const t = U() ? "paddingLeft" : "paddingRight";
        this._element.style[t] = `${e}px`;
      }
      if (!i && t) {
        const t = U() ? "paddingRight" : "paddingLeft";
        this._element.style[t] = `${e}px`;
      }
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(e, i) {
      return this.each(function () {
        const n = t.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
          n[e](i);
        }
      });
    }
  };
  const vi = "modal",
    yi = [
      { name: "show", parametersToCopy: ["relatedTarget"] },
      { name: "shown", parametersToCopy: ["relatedTarget"] },
      { name: "hide" },
      { name: "hidePrevented" },
      { name: "hidden" },
    ];
  class wi extends bi {
    constructor(t, e) {
      super(t, e),
        this._init(),
        M.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        Et(this.constructor);
    }
    dispose() {
      D.off(this._element, "show.bs.modal"),
        D.off(this._element, "shown.bs.modal"),
        D.off(this._element, "hide.bs.modal"),
        D.off(this._element, "hidden.bs.modal"),
        D.off(this._element, "hidePrevented.bs.modal"),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return vi;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      D.extend(this._element, yi, vi);
    }
  }
  var Ei = "top",
    Ai = "bottom",
    Ci = "right",
    Ti = "left",
    Oi = "auto",
    xi = [Ei, Ai, Ci, Ti],
    Li = "start",
    $i = "end",
    Di = "clippingParents",
    ki = "viewport",
    Ni = "popper",
    Mi = "reference",
    Si = xi.reduce(function (t, e) {
      return t.concat([e + "-" + Li, e + "-" + $i]);
    }, []),
    Ii = [].concat(xi, [Oi]).reduce(function (t, e) {
      return t.concat([e, e + "-" + Li, e + "-" + $i]);
    }, []),
    Pi = "beforeRead",
    ji = "read",
    Hi = "afterRead",
    zi = "beforeMain",
    Ri = "main",
    Bi = "afterMain",
    Wi = "beforeWrite",
    Fi = "write",
    qi = "afterWrite",
    Vi = [Pi, ji, Hi, zi, Ri, Bi, Wi, Fi, qi];
  function Yi(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function Ui(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function Ki(t) {
    return t instanceof Ui(t).Element || t instanceof Element;
  }
  function Xi(t) {
    return t instanceof Ui(t).HTMLElement || t instanceof HTMLElement;
  }
  function Qi(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof Ui(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const Gi = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        Xi(s) &&
          Yi(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            Xi(n) &&
              Yi(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function Zi(t) {
    return t.split("-")[0];
  }
  var Ji = Math.max,
    tn = Math.min,
    en = Math.round;
  function nn() {
    var t = navigator.userAgentData;
    return null != t && t.brands && Array.isArray(t.brands)
      ? t.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function sn() {
    return !/^((?!chrome|android).)*safari/i.test(nn());
  }
  function on(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
      s = 1,
      o = 1;
    e &&
      Xi(t) &&
      ((s = (t.offsetWidth > 0 && en(n.width) / t.offsetWidth) || 1),
      (o = (t.offsetHeight > 0 && en(n.height) / t.offsetHeight) || 1));
    var r = (Ki(t) ? Ui(t) : window).visualViewport,
      a = !sn() && i,
      l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
      c = (n.top + (a && r ? r.offsetTop : 0)) / o,
      h = n.width / s,
      d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c,
    };
  }
  function rn(t) {
    var e = on(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function an(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && Qi(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function ln(t) {
    return Ui(t).getComputedStyle(t);
  }
  function cn(t) {
    return ["table", "td", "th"].indexOf(Yi(t)) >= 0;
  }
  function hn(t) {
    return (
      (Ki(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function dn(t) {
    return "html" === Yi(t)
      ? t
      : t.assignedSlot || t.parentNode || (Qi(t) ? t.host : null) || hn(t);
  }
  function un(t) {
    return Xi(t) && "fixed" !== ln(t).position ? t.offsetParent : null;
  }
  function fn(t) {
    for (var e = Ui(t), i = un(t); i && cn(i) && "static" === ln(i).position; )
      i = un(i);
    return i &&
      ("html" === Yi(i) || ("body" === Yi(i) && "static" === ln(i).position))
      ? e
      : i ||
          (function (t) {
            var e = /firefox/i.test(nn());
            if (/Trident/i.test(nn()) && Xi(t) && "fixed" === ln(t).position)
              return null;
            var i = dn(t);
            for (
              Qi(i) && (i = i.host);
              Xi(i) && ["html", "body"].indexOf(Yi(i)) < 0;

            ) {
              var n = ln(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function pn(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function mn(t, e, i) {
    return Ji(t, tn(e, i));
  }
  function gn(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function _n(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  const bn = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = Zi(i.placement),
        l = pn(a),
        c = [Ti, Ci].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var h = (function (t, e) {
            return gn(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : _n(t, xi)
            );
          })(s.padding, i),
          d = rn(o),
          u = "y" === l ? Ei : Ti,
          f = "y" === l ? Ai : Ci,
          p =
            i.rects.reference[c] +
            i.rects.reference[l] -
            r[l] -
            i.rects.popper[c],
          m = r[l] - i.rects.reference[l],
          g = fn(o),
          _ = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
          b = p / 2 - m / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          E = mn(v, w, y),
          A = l;
        i.modifiersData[n] = (((e = {})[A] = E), (e.centerOffset = E - w), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        an(e.elements.popper, n) &&
        (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function vn(t) {
    return t.split("-")[1];
  }
  var yn = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function wn(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d = t.isFixed,
      u = r.x,
      f = void 0 === u ? 0 : u,
      p = r.y,
      m = void 0 === p ? 0 : p,
      g = "function" == typeof h ? h({ x: f, y: m }) : { x: f, y: m };
    (f = g.x), (m = g.y);
    var _ = r.hasOwnProperty("x"),
      b = r.hasOwnProperty("y"),
      v = Ti,
      y = Ei,
      w = window;
    if (c) {
      var E = fn(i),
        A = "clientHeight",
        C = "clientWidth";
      if (
        (E === Ui(i) &&
          "static" !== ln((E = hn(i))).position &&
          "absolute" === a &&
          ((A = "scrollHeight"), (C = "scrollWidth")),
        s === Ei || ((s === Ti || s === Ci) && o === $i))
      )
        (y = Ai),
          (m -=
            (d && E === w && w.visualViewport
              ? w.visualViewport.height
              : E[A]) - n.height),
          (m *= l ? 1 : -1);
      if (s === Ti || ((s === Ei || s === Ai) && o === $i))
        (v = Ci),
          (f -=
            (d && E === w && w.visualViewport ? w.visualViewport.width : E[C]) -
            n.width),
          (f *= l ? 1 : -1);
    }
    var T,
      O = Object.assign({ position: a }, c && yn),
      x =
        !0 === h
          ? (function (t, e) {
              var i = t.x,
                n = t.y,
                s = e.devicePixelRatio || 1;
              return { x: en(i * s) / s || 0, y: en(n * s) / s || 0 };
            })({ x: f, y: m }, Ui(i))
          : { x: f, y: m };
    return (
      (f = x.x),
      (m = x.y),
      l
        ? Object.assign(
            {},
            O,
            (((T = {})[y] = b ? "0" : ""),
            (T[v] = _ ? "0" : ""),
            (T.transform =
              (w.devicePixelRatio || 1) <= 1
                ? "translate(" + f + "px, " + m + "px)"
                : "translate3d(" + f + "px, " + m + "px, 0)"),
            T)
          )
        : Object.assign(
            {},
            O,
            (((e = {})[y] = b ? m + "px" : ""),
            (e[v] = _ ? f + "px" : ""),
            (e.transform = ""),
            e)
          )
    );
  }
  const En = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: Zi(e.placement),
          variation: vn(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: "fixed" === e.options.strategy,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          wn(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            wn(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var An = { passive: !0 };
  const Cn = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = Ui(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener("scroll", i.update, An);
          }),
        a && l.addEventListener("resize", i.update, An),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", i.update, An);
            }),
            a && l.removeEventListener("resize", i.update, An);
        }
      );
    },
    data: {},
  };
  var Tn = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function On(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Tn[t];
    });
  }
  var xn = { start: "end", end: "start" };
  function Ln(t) {
    return t.replace(/start|end/g, function (t) {
      return xn[t];
    });
  }
  function $n(t) {
    var e = Ui(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function Dn(t) {
    return on(hn(t)).left + $n(t).scrollLeft;
  }
  function kn(t) {
    var e = ln(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function Nn(t) {
    return ["html", "body", "#document"].indexOf(Yi(t)) >= 0
      ? t.ownerDocument.body
      : Xi(t) && kn(t)
      ? t
      : Nn(dn(t));
  }
  function Mn(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Nn(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = Ui(n),
      r = s ? [o].concat(o.visualViewport || [], kn(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Mn(dn(r)));
  }
  function Sn(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function In(t, e, i) {
    return e === ki
      ? Sn(
          (function (t, e) {
            var i = Ui(t),
              n = hn(t),
              s = i.visualViewport,
              o = n.clientWidth,
              r = n.clientHeight,
              a = 0,
              l = 0;
            if (s) {
              (o = s.width), (r = s.height);
              var c = sn();
              (c || (!c && "fixed" === e)) &&
                ((a = s.offsetLeft), (l = s.offsetTop));
            }
            return { width: o, height: r, x: a + Dn(t), y: l };
          })(t, i)
        )
      : Ki(e)
      ? (function (t, e) {
          var i = on(t, !1, "fixed" === e);
          return (
            (i.top = i.top + t.clientTop),
            (i.left = i.left + t.clientLeft),
            (i.bottom = i.top + t.clientHeight),
            (i.right = i.left + t.clientWidth),
            (i.width = t.clientWidth),
            (i.height = t.clientHeight),
            (i.x = i.left),
            (i.y = i.top),
            i
          );
        })(e, i)
      : Sn(
          (function (t) {
            var e,
              i = hn(t),
              n = $n(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = Ji(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = Ji(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + Dn(t),
              l = -n.scrollTop;
            return (
              "rtl" === ln(s || i).direction &&
                (a += Ji(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(hn(t))
        );
  }
  function Pn(t, e, i, n) {
    var s =
        "clippingParents" === e
          ? (function (t) {
              var e = Mn(dn(t)),
                i =
                  ["absolute", "fixed"].indexOf(ln(t).position) >= 0 && Xi(t)
                    ? fn(t)
                    : t;
              return Ki(i)
                ? e.filter(function (t) {
                    return Ki(t) && an(t, i) && "body" !== Yi(t);
                  })
                : [];
            })(t)
          : [].concat(e),
      o = [].concat(s, [i]),
      r = o[0],
      a = o.reduce(function (e, i) {
        var s = In(t, i, n);
        return (
          (e.top = Ji(s.top, e.top)),
          (e.right = tn(s.right, e.right)),
          (e.bottom = tn(s.bottom, e.bottom)),
          (e.left = Ji(s.left, e.left)),
          e
        );
      }, In(t, r, n));
    return (
      (a.width = a.right - a.left),
      (a.height = a.bottom - a.top),
      (a.x = a.left),
      (a.y = a.top),
      a
    );
  }
  function jn(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? Zi(s) : null,
      r = s ? vn(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case Ei:
        e = { x: a, y: i.y - n.height };
        break;
      case Ai:
        e = { x: a, y: i.y + i.height };
        break;
      case Ci:
        e = { x: i.x + i.width, y: l };
        break;
      case Ti:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var c = o ? pn(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case Li:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case $i:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function Hn(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.strategy,
      r = void 0 === o ? t.strategy : o,
      a = i.boundary,
      l = void 0 === a ? Di : a,
      c = i.rootBoundary,
      h = void 0 === c ? ki : c,
      d = i.elementContext,
      u = void 0 === d ? Ni : d,
      f = i.altBoundary,
      p = void 0 !== f && f,
      m = i.padding,
      g = void 0 === m ? 0 : m,
      _ = gn("number" != typeof g ? g : _n(g, xi)),
      b = u === Ni ? Mi : Ni,
      v = t.rects.popper,
      y = t.elements[p ? b : u],
      w = Pn(Ki(y) ? y : y.contextElement || hn(t.elements.popper), l, h, r),
      E = on(t.elements.reference),
      A = jn({ reference: E, element: v, strategy: "absolute", placement: s }),
      C = Sn(Object.assign({}, v, A)),
      T = u === Ni ? C : E,
      O = {
        top: w.top - T.top + _.top,
        bottom: T.bottom - w.bottom + _.bottom,
        left: w.left - T.left + _.left,
        right: T.right - w.right + _.right,
      },
      x = t.modifiersData.offset;
    if (u === Ni && x) {
      var L = x[s];
      Object.keys(O).forEach(function (t) {
        var e = [Ci, Ai].indexOf(t) >= 0 ? 1 : -1,
          i = [Ei, Ai].indexOf(t) >= 0 ? "y" : "x";
        O[t] += L[i] * e;
      });
    }
    return O;
  }
  const zn = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            m = i.allowedAutoPlacements,
            g = e.options.placement,
            _ = Zi(g),
            b =
              l ||
              (_ === g || !p
                ? [On(g)]
                : (function (t) {
                    if (Zi(t) === Oi) return [];
                    var e = On(t);
                    return [Ln(t), e, Ln(e)];
                  })(g)),
            v = [g].concat(b).reduce(function (t, i) {
              return t.concat(
                Zi(i) === Oi
                  ? (function (t, e) {
                      void 0 === e && (e = {});
                      var i = e,
                        n = i.placement,
                        s = i.boundary,
                        o = i.rootBoundary,
                        r = i.padding,
                        a = i.flipVariations,
                        l = i.allowedAutoPlacements,
                        c = void 0 === l ? Ii : l,
                        h = vn(n),
                        d = h
                          ? a
                            ? Si
                            : Si.filter(function (t) {
                                return vn(t) === h;
                              })
                          : xi,
                        u = d.filter(function (t) {
                          return c.indexOf(t) >= 0;
                        });
                      0 === u.length && (u = d);
                      var f = u.reduce(function (e, i) {
                        return (
                          (e[i] = Hn(t, {
                            placement: i,
                            boundary: s,
                            rootBoundary: o,
                            padding: r,
                          })[Zi(i)]),
                          e
                        );
                      }, {});
                      return Object.keys(f).sort(function (t, e) {
                        return f[t] - f[e];
                      });
                    })(e, {
                      placement: i,
                      boundary: h,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: m,
                    })
                  : i
              );
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            E = new Map(),
            A = !0,
            C = v[0],
            T = 0;
          T < v.length;
          T++
        ) {
          var O = v[T],
            x = Zi(O),
            L = vn(O) === Li,
            $ = [Ei, Ai].indexOf(x) >= 0,
            D = $ ? "width" : "height",
            k = Hn(e, {
              placement: O,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c,
            }),
            N = $ ? (L ? Ci : Ti) : L ? Ai : Ei;
          y[D] > w[D] && (N = On(N));
          var M = On(N),
            S = [];
          if (
            (o && S.push(k[x] <= 0),
            a && S.push(k[N] <= 0, k[M] <= 0),
            S.every(function (t) {
              return t;
            }))
          ) {
            (C = O), (A = !1);
            break;
          }
          E.set(O, S);
        }
        if (A)
          for (
            var I = function (t) {
                var e = v.find(function (e) {
                  var i = E.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (C = e), "break";
              },
              P = p ? 3 : 1;
            P > 0;
            P--
          ) {
            if ("break" === I(P)) break;
          }
        e.placement !== C &&
          ((e.modifiersData[n]._skip = !0), (e.placement = C), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function Rn(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function Bn(t) {
    return [Ei, Ci, Ai, Ti].some(function (e) {
      return t[e] >= 0;
    });
  }
  const Wn = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (t) {
      var e = t.state,
        i = t.name,
        n = e.rects.reference,
        s = e.rects.popper,
        o = e.modifiersData.preventOverflow,
        r = Hn(e, { elementContext: "reference" }),
        a = Hn(e, { altBoundary: !0 }),
        l = Rn(r, n),
        c = Rn(a, s, o),
        h = Bn(l),
        d = Bn(c);
      (e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d,
      }),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-reference-hidden": h,
          "data-popper-escaped": d,
        }));
    },
  };
  const Fn = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name,
        s = i.offset,
        o = void 0 === s ? [0, 0] : s,
        r = Ii.reduce(function (t, i) {
          return (
            (t[i] = (function (t, e, i) {
              var n = Zi(t),
                s = [Ti, Ei].indexOf(n) >= 0 ? -1 : 1,
                o =
                  "function" == typeof i
                    ? i(Object.assign({}, e, { placement: t }))
                    : i,
                r = o[0],
                a = o[1];
              return (
                (r = r || 0),
                (a = (a || 0) * s),
                [Ti, Ci].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
              );
            })(i, e.rects, o)),
            t
          );
        }, {}),
        a = r[e.placement],
        l = a.x,
        c = a.y;
      null != e.modifiersData.popperOffsets &&
        ((e.modifiersData.popperOffsets.x += l),
        (e.modifiersData.popperOffsets.y += c)),
        (e.modifiersData[n] = r);
    },
  };
  const qn = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function (t) {
      var e = t.state,
        i = t.name;
      e.modifiersData[i] = jn({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement,
      });
    },
    data: {},
  };
  const Vn = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name,
        s = i.mainAxis,
        o = void 0 === s || s,
        r = i.altAxis,
        a = void 0 !== r && r,
        l = i.boundary,
        c = i.rootBoundary,
        h = i.altBoundary,
        d = i.padding,
        u = i.tether,
        f = void 0 === u || u,
        p = i.tetherOffset,
        m = void 0 === p ? 0 : p,
        g = Hn(e, { boundary: l, rootBoundary: c, padding: d, altBoundary: h }),
        _ = Zi(e.placement),
        b = vn(e.placement),
        v = !b,
        y = pn(_),
        w = "x" === y ? "y" : "x",
        E = e.modifiersData.popperOffsets,
        A = e.rects.reference,
        C = e.rects.popper,
        T =
          "function" == typeof m
            ? m(Object.assign({}, e.rects, { placement: e.placement }))
            : m,
        O =
          "number" == typeof T
            ? { mainAxis: T, altAxis: T }
            : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
        x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
        L = { x: 0, y: 0 };
      if (E) {
        if (o) {
          var $,
            D = "y" === y ? Ei : Ti,
            k = "y" === y ? Ai : Ci,
            N = "y" === y ? "height" : "width",
            M = E[y],
            S = M + g[D],
            I = M - g[k],
            P = f ? -C[N] / 2 : 0,
            j = b === Li ? A[N] : C[N],
            H = b === Li ? -C[N] : -A[N],
            z = e.elements.arrow,
            R = f && z ? rn(z) : { width: 0, height: 0 },
            B = e.modifiersData["arrow#persistent"]
              ? e.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            W = B[D],
            F = B[k],
            q = mn(0, A[N], R[N]),
            V = v ? A[N] / 2 - P - q - W - O.mainAxis : j - q - W - O.mainAxis,
            Y = v ? -A[N] / 2 + P + q + F + O.mainAxis : H + q + F + O.mainAxis,
            U = e.elements.arrow && fn(e.elements.arrow),
            K = U ? ("y" === y ? U.clientTop || 0 : U.clientLeft || 0) : 0,
            X = null != ($ = null == x ? void 0 : x[y]) ? $ : 0,
            Q = M + Y - X,
            G = mn(f ? tn(S, M + V - X - K) : S, M, f ? Ji(I, Q) : I);
          (E[y] = G), (L[y] = G - M);
        }
        if (a) {
          var Z,
            J = "x" === y ? Ei : Ti,
            tt = "x" === y ? Ai : Ci,
            et = E[w],
            it = "y" === w ? "height" : "width",
            nt = et + g[J],
            st = et - g[tt],
            ot = -1 !== [Ei, Ti].indexOf(_),
            rt = null != (Z = null == x ? void 0 : x[w]) ? Z : 0,
            at = ot ? nt : et - A[it] - C[it] - rt + O.altAxis,
            lt = ot ? et + A[it] + C[it] - rt - O.altAxis : st,
            ct =
              f && ot
                ? (dt = mn(at, et, (ht = lt))) > ht
                  ? ht
                  : dt
                : mn(f ? at : nt, et, f ? lt : st);
          (E[w] = ct), (L[w] = ct - et);
        }
        var ht, dt;
        e.modifiersData[n] = L;
      }
    },
    requiresIfExists: ["offset"],
  };
  function Yn(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = Xi(e),
      r =
        Xi(e) &&
        (function (t) {
          var e = t.getBoundingClientRect(),
            i = en(e.width) / t.offsetWidth || 1,
            n = en(e.height) / t.offsetHeight || 1;
          return 1 !== i || 1 !== n;
        })(e),
      a = hn(e),
      l = on(t, r, i),
      c = { scrollLeft: 0, scrollTop: 0 },
      h = { x: 0, y: 0 };
    return (
      (o || (!o && !i)) &&
        (("body" !== Yi(e) || kn(a)) &&
          (c =
            (n = e) !== Ui(n) && Xi(n)
              ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
              : $n(n)),
        Xi(e)
          ? (((h = on(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
          : a && (h.x = Dn(a))),
      {
        x: l.left + c.scrollLeft - h.x,
        y: l.top + c.scrollTop - h.y,
        width: l.width,
        height: l.height,
      }
    );
  }
  function Un(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t);
              n && s(n);
            }
          }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t);
      }),
      n
    );
  }
  var Kn = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Xn() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function Qn(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? Kn : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Kn, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: Ki(t)
                  ? Mn(t)
                  : t.contextElement
                  ? Mn(t.contextElement)
                  : [],
                popper: Mn(e),
              });
            var r,
              c,
              u = (function (t) {
                var e = Un(t);
                return Vi.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = u.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n }),
                    r = function () {};
                  l.push(o || r);
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (Xn(e, i)) {
                (a.rects = {
                  reference: Yn(e, fn(i), "fixed" === a.options.strategy),
                  popper: rn(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!Xn(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var Gn = Qn(),
    Zn = Qn({ defaultModifiers: [Cn, qn, En, Gi] }),
    Jn = Qn({ defaultModifiers: [Cn, qn, En, Gi, Fn, zn, Vn, bn, Wn] });
  const ts = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          afterMain: Bi,
          afterRead: Hi,
          afterWrite: qi,
          applyStyles: Gi,
          arrow: bn,
          auto: Oi,
          basePlacements: xi,
          beforeMain: zi,
          beforeRead: Pi,
          beforeWrite: Wi,
          bottom: Ai,
          clippingParents: Di,
          computeStyles: En,
          createPopper: Jn,
          createPopperBase: Gn,
          createPopperLite: Zn,
          detectOverflow: Hn,
          end: $i,
          eventListeners: Cn,
          flip: zn,
          hide: Wn,
          left: Ti,
          main: Ri,
          modifierPhases: Vi,
          offset: Fn,
          placements: Ii,
          popper: Ni,
          popperGenerator: Qn,
          popperOffsets: qn,
          preventOverflow: Vn,
          read: ji,
          reference: Mi,
          right: Ci,
          start: Li,
          top: Ei,
          variationPlacements: Si,
          viewport: ki,
          write: Fi,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    es = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    is = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    ns = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
    ss = (t, e) => {
      const i = t.nodeName.toLowerCase();
      return e.includes(i)
        ? !is.has(i) || Boolean(ns.test(t.nodeValue))
        : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
    };
  const os = {
      allowList: es,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>",
    },
    rs = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string",
    },
    as = {
      entry: "(string|element|function|null)",
      selector: "(string|element)",
    };
  class ls extends _t {
    constructor(t) {
      super(), (this._config = this._getConfig(t));
    }
    static get Default() {
      return os;
    }
    static get DefaultType() {
      return rs;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content)
        .map((t) => this._resolvePossibleFunction(t))
        .filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t) {
      return (
        this._checkContent(t),
        (this._config.content = { ...this._config.content, ...t }),
        this
      );
    }
    toHtml() {
      const t = document.createElement("div");
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [n, s] of Object.entries(this._config.content))
        this._setContent(t, s, n);
      const e = t.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(" ")), e;
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content);
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t))
        super._typeCheckConfig({ selector: e, entry: i }, as);
    }
    _setContent(t, e, i) {
      const n = Rt.findOne(i, t);
      n &&
        ((e = this._resolvePossibleFunction(e))
          ? R(e)
            ? this._putElementInTemplate(B(e), n)
            : this._config.html
            ? (n.innerHTML = this._maybeSanitize(e))
            : (n.textContent = e)
          : n.remove());
    }
    _maybeSanitize(t) {
      return this._config.sanitize
        ? (function (t, e, i) {
            if (!t.length) return t;
            if (i && "function" == typeof i) return i(t);
            const n = new window.DOMParser().parseFromString(t, "text/html"),
              s = [].concat(...n.body.querySelectorAll("*"));
            for (const o of s) {
              const t = o.nodeName.toLowerCase();
              if (!Object.keys(e).includes(t)) {
                o.remove();
                continue;
              }
              const i = [].concat(...o.attributes),
                n = [].concat(e["*"] || [], e[t] || []);
              for (const e of i) ss(e, n) || o.removeAttribute(e.nodeName);
            }
            return n.body.innerHTML;
          })(t, this._config.allowList, this._config.sanitizeFn)
        : t;
    }
    _resolvePossibleFunction(t) {
      return K(t, [this]);
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) return (e.innerHTML = ""), void e.append(t);
      e.textContent = t.textContent;
    }
  }
  const cs = new Set(["sanitize", "allowList", "sanitizeFn"]),
    hs = "fade",
    ds = "show",
    us = ".modal",
    fs = "hide.bs.modal",
    ps = "hover",
    ms = "focus",
    gs = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: U() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: U() ? "right" : "left",
    },
    _s = {
      allowList: es,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 6],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus",
    },
    bs = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
    };
  let vs = class t extends bt {
    constructor(t, e) {
      if (void 0 === ts)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t, e),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle();
    }
    static get Default() {
      return _s;
    }
    static get DefaultType() {
      return bs;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled &&
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout),
        ut.off(this._element.closest(us), fs, this._hideModalHandler),
        this._element.getAttribute("data-mdb-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-mdb-original-title")
          ),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;
      const t = ut.trigger(this._element, this.constructor.eventName("show")),
        e = (
          q(this._element) || this._element.ownerDocument.documentElement
        ).contains(this._element);
      if (t.defaultPrevented || !e) return;
      this._disposePopper();
      const i = this._getTipElement();
      this._element.setAttribute("aria-describedby", i.getAttribute("id"));
      const { container: n } = this._config;
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) ||
          (n.append(i),
          ut.trigger(this._element, this.constructor.eventName("inserted"))),
        (this._popper = this._createPopper(i)),
        i.classList.add(ds),
        "ontouchstart" in document.documentElement)
      )
        for (const s of [].concat(...document.body.children))
          ut.on(s, "mouseover", V);
      this._queueCallback(
        () => {
          ut.trigger(this._element, this.constructor.eventName("shown")),
            !1 === this._isHovered && this._leave(),
            (this._isHovered = !1);
        },
        this.tip,
        this._isAnimated()
      );
    }
    hide() {
      if (!this._isShown()) return;
      if (
        ut.trigger(this._element, this.constructor.eventName("hide"))
          .defaultPrevented
      )
        return;
      if (
        (this._getTipElement().classList.remove(ds),
        "ontouchstart" in document.documentElement)
      )
        for (const t of [].concat(...document.body.children))
          ut.off(t, "mouseover", V);
      (this._activeTrigger.click = !1),
        (this._activeTrigger[ms] = !1),
        (this._activeTrigger[ps] = !1),
        (this._isHovered = null);
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            (this._isHovered || this._disposePopper(),
            this._element.removeAttribute("aria-describedby"),
            ut.trigger(this._element, this.constructor.eventName("hidden")));
        },
        this.tip,
        this._isAnimated()
      );
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
        this.tip
      );
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e) return null;
      e.classList.remove(hs, ds),
        e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = ((t) => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      })(this.constructor.NAME).toString();
      return (
        e.setAttribute("id", i), this._isAnimated() && e.classList.add(hs), e
      );
    }
    setContent(t) {
      (this._newContent = t),
        this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(t)
          : (this._templateFactory = new ls({
              ...this._config,
              content: t,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
        this._templateFactory
      );
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() };
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute("data-mdb-original-title")
      );
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      );
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(hs))
      );
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(ds);
    }
    _createPopper(t) {
      const e = K(this._config.placement, [this, t, this._element]),
        i = gs[e.toUpperCase()];
      return Jn(this._element, t, this._getPopperConfig(i));
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return K(t, [this._element]);
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (t) => {
              this._getTipElement().setAttribute(
                "data-popper-placement",
                t.state.placement
              );
            },
          },
        ],
      };
      return { ...e, ...K(this._config.popperConfig, [e]) };
    }
    _setListeners() {
      const t = this._config.trigger.split(" ");
      for (const e of t)
        if ("click" === e)
          ut.on(
            this._element,
            this.constructor.eventName("click"),
            this._config.selector,
            (t) => {
              this._initializeOnDelegatedTarget(t).toggle();
            }
          );
        else if ("manual" !== e) {
          const t =
              e === ps
                ? this.constructor.eventName("mouseenter")
                : this.constructor.eventName("focusin"),
            i =
              e === ps
                ? this.constructor.eventName("mouseleave")
                : this.constructor.eventName("focusout");
          ut.on(this._element, t, this._config.selector, (t) => {
            const e = this._initializeOnDelegatedTarget(t);
            (e._activeTrigger["focusin" === t.type ? ms : ps] = !0), e._enter();
          }),
            ut.on(this._element, i, this._config.selector, (t) => {
              const e = this._initializeOnDelegatedTarget(t);
              (e._activeTrigger["focusout" === t.type ? ms : ps] =
                e._element.contains(t.relatedTarget)),
                e._leave();
            });
        }
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        ut.on(this._element.closest(us), fs, this._hideModalHandler);
    }
    _fixTitle() {
      const t = this._element.getAttribute("title");
      t &&
        (this._element.getAttribute("aria-label") ||
          this._element.textContent.trim() ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("data-mdb-original-title", t),
        this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered
        ? (this._isHovered = !0)
        : ((this._isHovered = !0),
          this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(t) {
      const e = gt.getDataAttributes(this._element);
      for (const i of Object.keys(e)) cs.has(i) && delete e[i];
      return (
        (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return (
        (t.container = !1 === t.container ? document.body : B(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const [e, i] of Object.entries(this._config))
        this.constructor.Default[e] !== i && (t[e] = i);
      return (t.selector = !1), (t.trigger = "manual"), t;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null)),
        this.tip && (this.tip.remove(), (this.tip = null));
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const i = t.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
          i[e]();
        }
      });
    }
  };
  const ys = {
      ...vs.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
    ws = { ...vs.DefaultType, content: "(null|string|element|function)" };
  let Es = class t extends vs {
    static get Default() {
      return ys;
    }
    static get DefaultType() {
      return ws;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent(),
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const i = t.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
          i[e]();
        }
      });
    }
  };
  const As = "popover",
    Cs = [
      { name: "show" },
      { name: "shown" },
      { name: "hide" },
      { name: "hidden" },
      { name: "inserted" },
    ];
  class Ts extends Es {
    constructor(t, e) {
      super(t, e),
        this._init(),
        M.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        Et(this.constructor);
    }
    dispose() {
      D.off(this.element, "show.bs.popover"),
        D.off(this.element, "shown.bs.popover"),
        D.off(this.element, "hide.bs.popover"),
        D.off(this.element, "hidden.bs.popover"),
        D.off(this.element, "inserted.bs.popover"),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return As;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      D.extend(this._element, Cs, As);
    }
  }
  const Os = ".bs.scrollspy",
    xs = `activate${Os}`,
    Ls = `click${Os}`,
    $s = "active",
    Ds = "[href]",
    ks = ".nav-link",
    Ns = `${ks}, .nav-item > ${ks}, .list-group-item`,
    Ms = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    Ss = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array",
    };
  let Is = class t extends bt {
    constructor(t, e) {
      super(t, e),
        this._config.target &&
          ((this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement =
            "visible" === getComputedStyle(this._element).overflowY
              ? null
              : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0,
          }),
          this.refresh());
    }
    static get Default() {
      return Ms;
    }
    static get DefaultType() {
      return Ss;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(),
        this._maybeEnableSmoothScroll(),
        this._observer
          ? this._observer.disconnect()
          : (this._observer = this._getNewObserver());
      for (const t of this._observableSections.values())
        this._observer.observe(t);
    }
    dispose() {
      this._observer && this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t) {
      return (
        (t.target = B(t.target) || document.body),
        (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
        "string" == typeof t.threshold &&
          (t.threshold = t.threshold
            .split(",")
            .map((t) => Number.parseFloat(t))),
        t
      );
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (ut.off(this._config.target, Ls),
        ut.on(this._config.target, Ls, Ds, (t) => {
          const e = this._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            const i = this._rootElement || window,
              n = e.offsetTop - this._element.offsetTop;
            if (i.scrollTo)
              return void i.scrollTo({ top: n, behavior: "smooth" });
            i.scrollTop = n;
          }
        }));
    }
    _getNewObserver() {
      const t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      };
      return new IntersectionObserver((t) => this._observerCallback(t), t);
    }
    _observerCallback(t) {
      const e = (t) => this._targetLinks.get(`#${t.target.id}`),
        i = (t) => {
          (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
            this._process(e(t));
        },
        n = (this._rootElement || document.documentElement).scrollTop,
        s = n >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n;
      for (const o of t) {
        if (!o.isIntersecting) {
          (this._activeTarget = null), this._clearActiveClass(e(o));
          continue;
        }
        const t =
          o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s && t) {
          if ((i(o), !n)) return;
        } else s || t || i(o);
      }
    }
    _initializeTargetsAndObservables() {
      (this._targetLinks = new Map()), (this._observableSections = new Map());
      const t = Rt.find(Ds, this._config.target);
      for (const e of t) {
        if (!e.hash || F(e)) continue;
        const t = Rt.findOne(decodeURI(e.hash), this._element);
        W(t) &&
          (this._targetLinks.set(decodeURI(e.hash), e),
          this._observableSections.set(e.hash, t));
      }
    }
    _process(t) {
      this._activeTarget !== t &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = t),
        t.classList.add($s),
        this._activateParents(t),
        ut.trigger(this._element, xs, { relatedTarget: t }));
    }
    _activateParents(t) {
      if (t.classList.contains("dropdown-item"))
        Rt.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(
          $s
        );
      else
        for (const e of Rt.parents(t, ".nav, .list-group"))
          for (const t of Rt.prev(e, Ns)) t.classList.add($s);
    }
    _clearActiveClass(t) {
      t.classList.remove($s);
      const e = Rt.find(`${Ds}.${$s}`, t);
      for (const i of e) i.classList.remove($s);
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const i = t.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === i[e] || e.startsWith("_") || "constructor" === e)
            throw new TypeError(`No method named "${e}"`);
          i[e]();
        }
      });
    }
  };
  const Ps = "scrollspy",
    js = "activate.bs.scrollspy",
    Hs = `activate${`.${`mdb.${Ps}`}`}`,
    zs = "collapsible-scrollspy",
    Rs = "ul",
    Bs = `.${zs}`;
  class Ws extends Is {
    constructor(t, e) {
      super(t, e),
        (this._collapsibles = []),
        this._init(),
        M.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        Et(this.constructor);
    }
    dispose() {
      D.off(this._scrollElement, js),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return Ps;
    }
    _init() {
      this._bindActivateEvent(),
        this._getCollapsibles(),
        0 !== this._collapsibles.length &&
          (this._showSubsection(), this._hideSubsection());
    }
    _getHeight(t) {
      return t.offsetHeight;
    }
    _hide(t) {
      const e = S.findOne(Rs, t.parentNode);
      (e.style.overflow = "hidden"), (e.style.height = "0px");
    }
    _show(t, e) {
      t.style.height = e;
    }
    _getCollapsibles() {
      const t = S.find(Bs);
      t &&
        t.forEach((t) => {
          const e = t.parentNode,
            i = S.findOne(Rs, e),
            n = i.offsetHeight;
          this._collapsibles.push({
            element: i,
            relatedTarget: t.getAttribute("href"),
            height: `${n}px`,
          });
        });
    }
    _showSubsection() {
      S.find(".active")
        .filter((t) => M.hasClass(t, zs))
        .forEach((t) => {
          const e = S.findOne(Rs, t.parentNode),
            i = this._collapsibles.find(
              (e) => (e.relatedTarget = t.getAttribute("href"))
            ).height;
          this._show(e, i);
        });
    }
    _hideSubsection() {
      S.find(Bs)
        .filter((t) => !1 === M.hasClass(t, "active"))
        .forEach((t) => {
          this._hide(t);
        });
    }
    _bindActivateEvent() {
      D.on(this._element, js, (t) => {
        this._showSubsection(),
          this._hideSubsection(),
          D.trigger(this._element, Hs, { relatedTarget: t.relatedTarget });
      });
    }
  }
  const Fs = ".bs.tab",
    qs = `hide${Fs}`,
    Vs = `hidden${Fs}`,
    Ys = `show${Fs}`,
    Us = `shown${Fs}`,
    Ks = `keydown${Fs}`,
    Xs = "ArrowLeft",
    Qs = "ArrowRight",
    Gs = "ArrowUp",
    Zs = "ArrowDown",
    Js = "Home",
    to = "End",
    eo = "active",
    io = "fade",
    no = "show",
    so = ".dropdown-toggle",
    oo = `:not(${so})`,
    ro = `${`.nav-link${oo}, .list-group-item${oo}, [role="tab"]${oo}`}, [data-mdb-tab-initialized]`;
  let ao = class t extends bt {
    constructor(t) {
      super(t),
        (this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]'
        )),
        this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
          ut.on(this._element, Ks, (t) => this._keydown(t)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem(),
        i = e ? ut.trigger(e, qs, { relatedTarget: t }) : null;
      ut.trigger(t, Ys, { relatedTarget: e }).defaultPrevented ||
        (i && i.defaultPrevented) ||
        (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      if (!t) return;
      t.classList.add(eo), this._activate(Rt.getElementFromSelector(t));
      this._queueCallback(
        () => {
          "tab" === t.getAttribute("role")
            ? (t.removeAttribute("tabindex"),
              t.setAttribute("aria-selected", !0),
              this._toggleDropDown(t, !0),
              ut.trigger(t, Us, { relatedTarget: e }))
            : t.classList.add(no);
        },
        t,
        t.classList.contains(io)
      );
    }
    _deactivate(t, e) {
      if (!t) return;
      t.classList.remove(eo),
        t.blur(),
        this._deactivate(Rt.getElementFromSelector(t));
      this._queueCallback(
        () => {
          "tab" === t.getAttribute("role")
            ? (t.setAttribute("aria-selected", !1),
              t.setAttribute("tabindex", "-1"),
              this._toggleDropDown(t, !1),
              ut.trigger(t, Vs, { relatedTarget: e }))
            : t.classList.remove(no);
        },
        t,
        t.classList.contains(io)
      );
    }
    _keydown(e) {
      if (![Xs, Qs, Gs, Zs, Js, to].includes(e.key)) return;
      e.stopPropagation(), e.preventDefault();
      const i = this._getChildren().filter((t) => !F(t));
      let n;
      if ([Js, to].includes(e.key)) n = i[e.key === Js ? 0 : i.length - 1];
      else {
        const t = [Qs, Zs].includes(e.key);
        n = Q(i, e.target, t, !0);
      }
      n && (n.focus({ preventScroll: !0 }), t.getOrCreateInstance(n).show());
    }
    _getChildren() {
      return Rt.find(ro, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t) => this._elemIsActive(t)) || null;
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, "role", "tablist");
      for (const i of e) this._setInitialAttributesOnChild(i);
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t),
        i = this._getOuterElement(t);
      t.setAttribute("aria-selected", e),
        i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
        e || t.setAttribute("tabindex", "-1"),
        this._setAttributeIfNotExists(t, "role", "tab"),
        this._setInitialAttributesOnTargetPanel(t);
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = Rt.getElementFromSelector(t);
      e &&
        (this._setAttributeIfNotExists(e, "role", "tabpanel"),
        t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains("dropdown")) return;
      const n = (t, n) => {
        const s = Rt.findOne(t, i);
        s && s.classList.toggle(n, e);
      };
      n(so, eo), n(".dropdown-menu", no), i.setAttribute("aria-expanded", e);
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i);
    }
    _elemIsActive(t) {
      return t.classList.contains(eo);
    }
    _getInnerElement(t) {
      return t.matches(ro) ? t : Rt.findOne(ro, t);
    }
    _getOuterElement(t) {
      return t.closest(".nav-item, .list-group-item") || t;
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const i = t.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === i[e] || e.startsWith("_") || "constructor" === e)
            throw new TypeError(`No method named "${e}"`);
          i[e]();
        }
      });
    }
  };
  const lo = ".mdb.tab",
    co = "show.bs.tab",
    ho = "shown.bs.tab",
    uo = `show${lo}`,
    fo = `shown${lo}`,
    po = `hide${lo}`,
    mo = `hidden${lo}`,
    go = "active",
    _o = "fade",
    bo = "show";
  class vo extends ao {
    constructor(t) {
      super(t),
        M.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        Et(this.constructor);
    }
    dispose() {
      D.off(this._element, co),
        D.off(this._element, ho),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem();
      let i = null,
        n = null;
      e &&
        ((i = D.trigger(e, "hide.bs.tab", { relatedTarget: t })),
        (n = D.trigger(e, po, { relatedTarget: t })));
      const s = D.trigger(t, co, { relatedTarget: e }),
        o = D.trigger(t, uo, { relatedTarget: e });
      s.defaultPrevented ||
        o.defaultPrevented ||
        (i && i.defaultPrevented) ||
        (n && n.defaultPrevented) ||
        (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      if (!t) return;
      t.classList.add(go), this._activate(a(t));
      this._queueCallback(
        () => {
          "tab" === t.getAttribute("role")
            ? (t.focus(),
              t.removeAttribute("tabindex"),
              t.setAttribute("aria-selected", !0),
              this._toggleDropDown(t, !0),
              D.trigger(t, ho, { relatedTarget: e }),
              D.trigger(t, fo, { relatedTarget: e }))
            : t.classList.add(bo);
        },
        t,
        t.classList.contains(_o)
      );
    }
    _deactivate(t, e) {
      if (!t) return;
      t.classList.remove(go), t.blur(), this._deactivate(a(t));
      this._queueCallback(
        () => {
          "tab" === t.getAttribute("role")
            ? (t.setAttribute("aria-selected", !1),
              t.setAttribute("tabindex", "-1"),
              this._toggleDropDown(t, !1),
              D.trigger(t, "hidden.bs.tab", { relatedTarget: e }),
              D.trigger(t, mo, { relatedTarget: e }))
            : t.classList.remove(bo);
        },
        t,
        t.classList.contains(_o)
      );
    }
  }
  const yo = "tooltip",
    wo = [
      { name: "show" },
      { name: "shown" },
      { name: "hide" },
      { name: "hidden" },
      { name: "inserted" },
    ];
  class Eo extends vs {
    constructor(t, e) {
      super(t, e),
        this._init(),
        M.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        Et(this.constructor);
    }
    dispose() {
      D.off(this._element, "show.bs.tooltip"),
        D.off(this._element, "shown.bs.tooltip"),
        D.off(this._element, "hide.bs.tooltip"),
        D.off(this._element, "hidden.bs.tooltip"),
        D.off(this._element, "inserted.bs.tooltip"),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return yo;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      D.extend(this._element, wo, yo);
    }
  }
  const Ao = ".bs.toast",
    Co = `mouseover${Ao}`,
    To = `mouseout${Ao}`,
    Oo = `focusin${Ao}`,
    xo = `focusout${Ao}`,
    Lo = `hide${Ao}`,
    $o = `hidden${Ao}`,
    Do = `show${Ao}`,
    ko = `shown${Ao}`,
    No = "hide",
    Mo = "show",
    So = "showing",
    Io = { animation: "boolean", autohide: "boolean", delay: "number" },
    Po = { animation: !0, autohide: !0, delay: 5e3 };
  let jo = class t extends bt {
    constructor(t, e) {
      super(t, e),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get Default() {
      return Po;
    }
    static get DefaultType() {
      return Io;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      if (ut.trigger(this._element, Do).defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade");
      this._element.classList.remove(No),
        Y(this._element),
        this._element.classList.add(Mo, So),
        this._queueCallback(
          () => {
            this._element.classList.remove(So),
              ut.trigger(this._element, ko),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        );
    }
    hide() {
      if (!this.isShown()) return;
      if (ut.trigger(this._element, Lo).defaultPrevented) return;
      this._element.classList.add(So),
        this._queueCallback(
          () => {
            this._element.classList.add(No),
              this._element.classList.remove(So, Mo),
              ut.trigger(this._element, $o);
          },
          this._element,
          this._config.animation
        );
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove(Mo),
        super.dispose();
    }
    isShown() {
      return this._element.classList.contains(Mo);
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      ut.on(this._element, Co, (t) => this._onInteraction(t, !0)),
        ut.on(this._element, To, (t) => this._onInteraction(t, !1)),
        ut.on(this._element, Oo, (t) => this._onInteraction(t, !0)),
        ut.on(this._element, xo, (t) => this._onInteraction(t, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const i = t.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
          i[e](this);
        }
      });
    }
  };
  const Ho = "toast",
    zo = [
      { name: "show" },
      { name: "shown" },
      { name: "hide" },
      { name: "hidden" },
    ];
  class Ro extends jo {
    constructor(t, e) {
      super(t, e),
        this._init(),
        M.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        Et(this.constructor);
    }
    dispose() {
      D.off(this._element, "show.bs.toast"),
        D.off(this._element, "shown.bs.toast"),
        D.off(this._element, "hide.bs.toast"),
        D.off(this._element, "hidden.bs.toast"),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return Ho;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      D.extend(this._element, zo, Ho);
    }
  }
  (() => {
    var t = {
        454: (t, e, i) => {
          i.d(e, { Z: () => o });
          var n = i(645),
            s = i.n(n)()(function (t) {
              return t[1];
            });
          s.push([
            t.id,
            "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}",
            "",
          ]);
          const o = s;
        },
        645: (t) => {
          t.exports = function (t) {
            var e = [];
            return (
              (e.toString = function () {
                return this.map(function (e) {
                  var i = t(e);
                  return e[2] ? "@media ".concat(e[2], " {").concat(i, "}") : i;
                }).join("");
              }),
              (e.i = function (t, i, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                var s = {};
                if (n)
                  for (var o = 0; o < this.length; o++) {
                    var r = this[o][0];
                    null != r && (s[r] = !0);
                  }
                for (var a = 0; a < t.length; a++) {
                  var l = [].concat(t[a]);
                  (n && s[l[0]]) ||
                    (i &&
                      (l[2]
                        ? (l[2] = "".concat(i, " and ").concat(l[2]))
                        : (l[2] = i)),
                    e.push(l));
                }
              }),
              e
            );
          };
        },
        810: () => {
          !(function () {
            if ("undefined" != typeof window)
              try {
                var t = new window.CustomEvent("test", { cancelable: !0 });
                if ((t.preventDefault(), !0 !== t.defaultPrevented))
                  throw new Error("Could not prevent default");
              } catch (i) {
                var e = function (t, e) {
                  var i, n;
                  return (
                    ((e = e || {}).bubbles = !!e.bubbles),
                    (e.cancelable = !!e.cancelable),
                    (i = document.createEvent("CustomEvent")).initCustomEvent(
                      t,
                      e.bubbles,
                      e.cancelable,
                      e.detail
                    ),
                    (n = i.preventDefault),
                    (i.preventDefault = function () {
                      n.call(this);
                      try {
                        Object.defineProperty(this, "defaultPrevented", {
                          get: function () {
                            return !0;
                          },
                        });
                      } catch (t) {
                        this.defaultPrevented = !0;
                      }
                    }),
                    i
                  );
                };
                (e.prototype = window.Event.prototype),
                  (window.CustomEvent = e);
              }
          })();
        },
        379: (t, e, i) => {
          var n,
            s,
            o =
              ((s = {}),
              function (t) {
                if (void 0 === s[t]) {
                  var e = document.querySelector(t);
                  if (
                    window.HTMLIFrameElement &&
                    e instanceof window.HTMLIFrameElement
                  )
                    try {
                      e = e.contentDocument.head;
                    } catch (i) {
                      e = null;
                    }
                  s[t] = e;
                }
                return s[t];
              }),
            r = [];
          function a(t) {
            for (var e = -1, i = 0; i < r.length; i++)
              if (r[i].identifier === t) {
                e = i;
                break;
              }
            return e;
          }
          function l(t, e) {
            for (var i = {}, n = [], s = 0; s < t.length; s++) {
              var o = t[s],
                l = e.base ? o[0] + e.base : o[0],
                c = i[l] || 0,
                h = "".concat(l, " ").concat(c);
              i[l] = c + 1;
              var d = a(h),
                u = { css: o[1], media: o[2], sourceMap: o[3] };
              -1 !== d
                ? (r[d].references++, r[d].updater(u))
                : r.push({ identifier: h, updater: g(u, e), references: 1 }),
                n.push(h);
            }
            return n;
          }
          function c(t) {
            var e = document.createElement("style"),
              n = t.attributes || {};
            if (void 0 === n.nonce) {
              var s = i.nc;
              s && (n.nonce = s);
            }
            if (
              (Object.keys(n).forEach(function (t) {
                e.setAttribute(t, n[t]);
              }),
              "function" == typeof t.insert)
            )
              t.insert(e);
            else {
              var r = o(t.insert || "head");
              if (!r)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                );
              r.appendChild(e);
            }
            return e;
          }
          var h,
            d =
              ((h = []),
              function (t, e) {
                return (h[t] = e), h.filter(Boolean).join("\n");
              });
          function u(t, e, i, n) {
            var s = i
              ? ""
              : n.media
              ? "@media ".concat(n.media, " {").concat(n.css, "}")
              : n.css;
            if (t.styleSheet) t.styleSheet.cssText = d(e, s);
            else {
              var o = document.createTextNode(s),
                r = t.childNodes;
              r[e] && t.removeChild(r[e]),
                r.length ? t.insertBefore(o, r[e]) : t.appendChild(o);
            }
          }
          function f(t, e, i) {
            var n = i.css,
              s = i.media,
              o = i.sourceMap;
            if (
              (s ? t.setAttribute("media", s) : t.removeAttribute("media"),
              o &&
                "undefined" != typeof btoa &&
                (n +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                    " */"
                  )),
              t.styleSheet)
            )
              t.styleSheet.cssText = n;
            else {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(n));
            }
          }
          var p = null,
            m = 0;
          function g(t, e) {
            var i, n, s;
            if (e.singleton) {
              var o = m++;
              (i = p || (p = c(e))),
                (n = u.bind(null, i, o, !1)),
                (s = u.bind(null, i, o, !0));
            } else
              (i = c(e)),
                (n = f.bind(null, i, e)),
                (s = function () {
                  !(function (t) {
                    if (null === t.parentNode) return !1;
                    t.parentNode.removeChild(t);
                  })(i);
                });
            return (
              n(t),
              function (e) {
                if (e) {
                  if (
                    e.css === t.css &&
                    e.media === t.media &&
                    e.sourceMap === t.sourceMap
                  )
                    return;
                  n((t = e));
                } else s();
              }
            );
          }
          t.exports = function (t, e) {
            (e = e || {}).singleton ||
              "boolean" == typeof e.singleton ||
              (e.singleton =
                (void 0 === n &&
                  (n = Boolean(
                    window && document && document.all && !window.atob
                  )),
                n));
            var i = l((t = t || []), e);
            return function (t) {
              if (
                ((t = t || []),
                "[object Array]" === Object.prototype.toString.call(t))
              ) {
                for (var n = 0; n < i.length; n++) {
                  var s = a(i[n]);
                  r[s].references--;
                }
                for (var o = l(t, e), c = 0; c < i.length; c++) {
                  var h = a(i[c]);
                  0 === r[h].references && (r[h].updater(), r.splice(h, 1));
                }
                i = o;
              }
            };
          };
        },
      },
      e = {};
    function i(n) {
      var s = e[n];
      if (void 0 !== s) return s.exports;
      var o = (e[n] = { id: n, exports: {} });
      return t[n](o, o.exports, i), o.exports;
    }
    (i.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return i.d(e, { a: e }), e;
    }),
      (i.d = (t, e) => {
        for (var n in e)
          i.o(e, n) &&
            !i.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
      }),
      (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (() => {
        var t = i(379),
          e = i.n(t),
          n = i(454);
        function s(t) {
          if (!t.hasAttribute("autocompleted")) {
            t.setAttribute("autocompleted", "");
            var e = new window.CustomEvent("onautocomplete", {
              bubbles: !0,
              cancelable: !0,
              detail: null,
            });
            t.dispatchEvent(e) || (t.value = "");
          }
        }
        function o(t) {
          t.hasAttribute("autocompleted") &&
            (t.removeAttribute("autocompleted"),
            t.dispatchEvent(
              new window.CustomEvent("onautocomplete", {
                bubbles: !0,
                cancelable: !1,
                detail: null,
              })
            ));
        }
        e()(n.Z, { insert: "head", singleton: !1 }),
          n.Z.locals,
          i(810),
          document.addEventListener(
            "animationstart",
            function (t) {
              "onautofillstart" === t.animationName ? s(t.target) : o(t.target);
            },
            !0
          ),
          document.addEventListener(
            "input",
            function (t) {
              "insertReplacementText" !== t.inputType && "data" in t
                ? o(t.target)
                : s(t.target);
            },
            !0
          );
      })();
  })();
  class Bo {
    constructor(t) {
      (t = c(t)) &&
        ((this._element = t),
        s.setData(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      s.removeData(this._element, this.constructor.DATA_KEY),
        D.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    static getInstance(t) {
      return s.getData(c(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `mdb.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const Wo = "active",
    Fo = "form-notch",
    qo = "form-notch-leading",
    Vo = "form-notch-middle",
    Yo = `.${Fo}`,
    Uo = `.${qo}`,
    Ko = `.${Vo}`;
  class Xo extends Bo {
    constructor(t) {
      super(t),
        (this._label = null),
        (this._labelWidth = 0),
        (this._labelMarginLeft = 0),
        (this._notchLeading = null),
        (this._notchMiddle = null),
        (this._notchTrailing = null),
        (this._initiated = !1),
        (this._helper = null),
        (this._counter = !1),
        (this._counterElement = null),
        (this._maxLength = 0),
        (this._leadingIcon = null),
        this._element &&
          (this.init(),
          M.setDataAttribute(
            this._element,
            `${this.constructor.NAME}-initialized`,
            !0
          ),
          Et(this.constructor));
    }
    static get NAME() {
      return "input";
    }
    get input() {
      return (
        S.findOne("input", this._element) ||
        S.findOne("textarea", this._element)
      );
    }
    init() {
      this._initiated ||
        (this._getLabelData(),
        this._applyDivs(),
        this._applyNotch(),
        this._activate(),
        this._getHelper(),
        this._getCounter(),
        (this._initiated = !0));
    }
    update() {
      this._getLabelData(),
        this._getNotchData(),
        this._applyNotch(),
        this._activate(),
        this._getHelper(),
        this._getCounter();
    }
    forceActive() {
      M.addClass(this.input, Wo);
    }
    forceInactive() {
      M.removeClass(this.input, Wo);
    }
    dispose() {
      this._removeBorder(),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    _getLabelData() {
      (this._label = S.findOne("label", this._element)),
        null === this._label
          ? this._showPlaceholder()
          : (this._getLabelWidth(),
            this._getLabelPositionInInputGroup(),
            this._toggleDefaultDatePlaceholder());
    }
    _getHelper() {
      this._helper = S.findOne(".form-helper", this._element);
    }
    _getCounter() {
      (this._counter = M.getDataAttribute(this.input, "showcounter")),
        this._counter &&
          ((this._maxLength = this.input.maxLength), this._showCounter());
    }
    _showCounter() {
      if (S.find(".form-counter", this._element).length > 0) return;
      (this._counterElement = document.createElement("div")),
        M.addClass(this._counterElement, "form-counter");
      const t = this.input.value.length;
      (this._counterElement.innerHTML = `${t} / ${this._maxLength}`),
        this._helper.appendChild(this._counterElement),
        this._bindCounter();
    }
    _bindCounter() {
      D.on(this.input, "input", () => {
        const t = this.input.value.length;
        this._counterElement.innerHTML = `${t} / ${this._maxLength}`;
      });
    }
    _toggleDefaultDatePlaceholder(t = this.input) {
      if (!("date" === t.getAttribute("type"))) return;
      document.activeElement === t || t.value
        ? (t.style.opacity = 1)
        : (t.style.opacity = 0);
    }
    _showPlaceholder() {
      M.addClass(this.input, "placeholder-active");
    }
    _getNotchData() {
      (this._notchMiddle = S.findOne(Ko, this._element)),
        (this._notchLeading = S.findOne(Uo, this._element));
    }
    _getLabelWidth() {
      this._labelWidth = 0.8 * this._label.clientWidth + 8;
    }
    _getLabelPositionInInputGroup() {
      if (
        ((this._labelMarginLeft = 0),
        !this._element.classList.contains("input-group"))
      )
        return;
      const t = this.input,
        e = S.prev(t, ".input-group-text")[0];
      this._labelMarginLeft = void 0 === e ? 0 : e.offsetWidth - 1;
    }
    _applyDivs() {
      const t = S.find(Yo, this._element),
        e = m("div");
      M.addClass(e, Fo),
        (this._notchLeading = m("div")),
        M.addClass(this._notchLeading, qo),
        (this._notchMiddle = m("div")),
        M.addClass(this._notchMiddle, Vo),
        (this._notchTrailing = m("div")),
        M.addClass(this._notchTrailing, "form-notch-trailing"),
        t.length >= 1 ||
          (e.append(this._notchLeading),
          e.append(this._notchMiddle),
          e.append(this._notchTrailing),
          this._element.append(e));
    }
    _applyNotch() {
      (this._notchMiddle.style.width = `${this._labelWidth}px`),
        (this._notchLeading.style.width = `${this._labelMarginLeft + 9}px`),
        null !== this._label &&
          (this._label.style.marginLeft = `${this._labelMarginLeft}px`);
    }
    _removeBorder() {
      const t = S.findOne(Yo, this._element);
      t && t.remove();
    }
    _activate(t) {
      p(() => {
        this._getElements(t);
        const e = t ? t.target : this.input;
        "" !== e.value && M.addClass(e, Wo),
          this._toggleDefaultDatePlaceholder(e);
      });
    }
    _getElements(t) {
      if (
        (t &&
          ((this._element = t.target.parentNode),
          (this._label = S.findOne("label", this._element))),
        t && this._label)
      ) {
        const e = this._labelWidth;
        this._getLabelData(),
          e !== this._labelWidth &&
            ((this._notchMiddle = S.findOne(
              ".form-notch-middle",
              t.target.parentNode
            )),
            (this._notchLeading = S.findOne(Uo, t.target.parentNode)),
            this._applyNotch());
      }
    }
    _deactivate(t) {
      const e = t ? t.target : this.input;
      "" === e.value && e.classList.remove(Wo),
        this._toggleDefaultDatePlaceholder(e);
    }
    static activate(t) {
      return function (e) {
        t._activate(e);
      };
    }
    static deactivate(t) {
      return function (e) {
        t._deactivate(e);
      };
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        let i = s.getData(this, "mdb.input");
        const n = "object" == typeof t && t;
        if (
          (i || !/dispose/.test(t)) &&
          (i || (i = new Xo(this, n)), "string" == typeof t)
        ) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  const Qo = ".bs.collapse",
    Go = `show${Qo}`,
    Zo = `shown${Qo}`,
    Jo = `hide${Qo}`,
    tr = `hidden${Qo}`,
    er = "show",
    ir = "collapse",
    nr = "collapsing",
    sr = `:scope .${ir} .${ir}`,
    or = "[data-mdb-collapse-init]",
    rr = { parent: null, toggle: !0 },
    ar = { parent: "(null|element)", toggle: "boolean" };
  let lr = class t extends bt {
    constructor(t, e) {
      super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
      const i = Rt.find(or);
      for (const n of i) {
        const t = Rt.getSelectorFromElement(n),
          e = Rt.find(t).filter((t) => t === this._element);
        null !== t && e.length && this._triggerArray.push(n);
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return rr;
    }
    static get DefaultType() {
      return ar;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let e = [];
      if (
        (this._config.parent &&
          (e = this._getFirstLevelChildren(
            ".collapse.show, .collapse.collapsing"
          )
            .filter((t) => t !== this._element)
            .map((e) => t.getOrCreateInstance(e, { toggle: !1 }))),
        e.length && e[0]._isTransitioning)
      )
        return;
      if (ut.trigger(this._element, Go).defaultPrevented) return;
      for (const t of e) t.hide();
      const i = this._getDimension();
      this._element.classList.remove(ir),
        this._element.classList.add(nr),
        (this._element.style[i] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const n = `scroll${i[0].toUpperCase() + i.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(nr),
            this._element.classList.add(ir, er),
            (this._element.style[i] = ""),
            ut.trigger(this._element, Zo);
        },
        this._element,
        !0
      ),
        (this._element.style[i] = `${this._element[n]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (ut.trigger(this._element, Jo).defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        Y(this._element),
        this._element.classList.add(nr),
        this._element.classList.remove(ir, er);
      for (const e of this._triggerArray) {
        const t = Rt.getElementFromSelector(e);
        t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1);
      }
      this._isTransitioning = !0;
      (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(nr),
              this._element.classList.add(ir),
              ut.trigger(this._element, tr);
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(er);
    }
    _configAfterMerge(t) {
      return (t.toggle = Boolean(t.toggle)), (t.parent = B(t.parent)), t;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = this._getFirstLevelChildren(or);
      for (const e of t) {
        const t = Rt.getElementFromSelector(e);
        t && this._addAriaAndCollapsedClass([e], this._isShown(t));
      }
    }
    _getFirstLevelChildren(t) {
      const e = Rt.find(sr, this._config.parent);
      return Rt.find(t, this._config.parent).filter((t) => !e.includes(t));
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t)
          i.classList.toggle("collapsed", !e),
            i.setAttribute("aria-expanded", e);
    }
    static jQueryInterface(e) {
      const i = {};
      return (
        "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1),
        this.each(function () {
          const n = t.getOrCreateInstance(this, i);
          if ("string" == typeof e) {
            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
            n[e]();
          }
        })
      );
    }
  };
  const cr = "collapse",
    hr = [
      { name: "show" },
      { name: "shown" },
      { name: "hide" },
      { name: "hidden" },
    ];
  class dr extends lr {
    constructor(t, e = {}) {
      super(t, e),
        this._init(),
        M.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        Et(this.constructor);
    }
    dispose() {
      D.off(this._element, "show.bs.collapse"),
        D.off(this._element, "shown.bs.collapse"),
        D.off(this._element, "hide.bs.collapse"),
        D.off(this._element, "hidden.bs.collapse"),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return cr;
    }
    _init() {
      this._bindMdbEvents();
    }
    _bindMdbEvents() {
      D.extend(this._element, hr, cr);
    }
  }
  const ur = "dropdown",
    fr = ".bs.dropdown",
    pr = "ArrowUp",
    mr = "ArrowDown",
    gr = `hide${fr}`,
    _r = `hidden${fr}`,
    br = `show${fr}`,
    vr = `shown${fr}`,
    yr = "show",
    wr = "[data-mdb-dropdown-initialized]:not(.disabled):not(:disabled)",
    Er = `${wr}.${yr}`,
    Ar = ".dropdown-menu",
    Cr = U() ? "top-end" : "top-start",
    Tr = U() ? "top-start" : "top-end",
    Or = U() ? "bottom-end" : "bottom-start",
    xr = U() ? "bottom-start" : "bottom-end",
    Lr = U() ? "left-start" : "right-start",
    $r = U() ? "right-start" : "left-start",
    Dr = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle",
    },
    kr = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)",
    };
  let Nr = class t extends bt {
    constructor(t, e) {
      super(t, e),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          Rt.next(this._element, Ar)[0] ||
          Rt.prev(this._element, Ar)[0] ||
          Rt.findOne(Ar, this._parent)),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return Dr;
    }
    static get DefaultType() {
      return kr;
    }
    static get NAME() {
      return ur;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (F(this._element) || this._isShown()) return;
      const t = { relatedTarget: this._element };
      if (!ut.trigger(this._element, br, t).defaultPrevented) {
        if (
          (this._createPopper(),
          "ontouchstart" in document.documentElement &&
            !this._parent.closest(".navbar-nav"))
        )
          for (const t of [].concat(...document.body.children))
            ut.on(t, "mouseover", V);
        this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.add(yr),
          this._element.classList.add(yr),
          ut.trigger(this._element, vr, t);
      }
    }
    hide() {
      if (F(this._element) || !this._isShown()) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      if (!ut.trigger(this._element, gr, t).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children))
            ut.off(t, "mouseover", V);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(yr),
          this._element.classList.remove(yr),
          this._element.setAttribute("aria-expanded", "false"),
          gt.removeDataAttribute(this._menu, "popper"),
          ut.trigger(this._element, _r, t);
      }
    }
    _getConfig(t) {
      if (
        "object" == typeof (t = super._getConfig(t)).reference &&
        !R(t.reference) &&
        "function" != typeof t.reference.getBoundingClientRect
      )
        throw new TypeError(
          `${ur.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper() {
      if (void 0 === ts)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let t = this._element;
      "parent" === this._config.reference
        ? (t = this._parent)
        : R(this._config.reference)
        ? (t = B(this._config.reference))
        : "object" == typeof this._config.reference &&
          (t = this._config.reference);
      const e = this._getPopperConfig();
      this._popper = Jn(t, this._menu, e);
    }
    _isShown() {
      return this._menu.classList.contains(yr);
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains("dropend")) return Lr;
      if (t.classList.contains("dropstart")) return $r;
      if (t.classList.contains("dropup-center")) return "top";
      if (t.classList.contains("dropdown-center")) return "bottom";
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--mdb-position").trim();
      return t.classList.contains("dropup") ? (e ? Tr : Cr) : e ? xr : Or;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        (this._inNavbar || "static" === this._config.display) &&
          (gt.setDataAttribute(this._menu, "popper", "static"),
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        { ...t, ...K(this._config.popperConfig, [t]) }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = Rt.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter((t) => W(t));
      i.length && Q(i, e, t === mr, !i.includes(e)).focus();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const i = t.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
          i[e]();
        }
      });
    }
    static clearMenus(e) {
      if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)) return;
      const i = Rt.find(Er);
      for (const n of i) {
        const i = t.getInstance(n);
        if (!i || !1 === i._config.autoClose) continue;
        const s = e.composedPath(),
          o = s.includes(i._menu);
        if (
          s.includes(i._element) ||
          ("inside" === i._config.autoClose && !o) ||
          ("outside" === i._config.autoClose && o)
        )
          continue;
        if (
          i._menu.contains(e.target) &&
          (("keyup" === e.type && "Tab" === e.key) ||
            /input|select|option|textarea|form/i.test(e.target.tagName))
        )
          continue;
        const r = { relatedTarget: i._element };
        "click" === e.type && (r.clickEvent = e), i._completeHide(r);
      }
    }
    static dataApiKeydownHandler(e) {
      const i = /input|textarea/i.test(e.target.tagName),
        n = "Escape" === e.key,
        s = [pr, mr].includes(e.key);
      if (!s && !n) return;
      if (i && !n) return;
      e.preventDefault();
      const o = this.matches(wr)
          ? this
          : Rt.prev(this, wr)[0] ||
            Rt.next(this, wr)[0] ||
            Rt.findOne(wr, e.delegateTarget.parentNode),
        r = t.getOrCreateInstance(o);
      if (s) return e.stopPropagation(), r.show(), void r._selectMenuItem(e);
      r._isShown() && (e.stopPropagation(), r.hide(), o.focus());
    }
  };
  const Mr = "dropdown",
    Sr = `.${`mdb.${Mr}`}`,
    Ir = {
      offset: [0, 2],
      flip: !0,
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      dropdownAnimation: "on",
    },
    Pr = {
      offset: "(array|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      dropdownAnimation: "string",
    },
    jr = "hide.bs.dropdown",
    Hr = "hidden.bs.dropdown",
    zr = "show.bs.dropdown",
    Rr = "shown.bs.dropdown",
    Br = `hide${Sr}`,
    Wr = `hidden${Sr}`,
    Fr = `show${Sr}`,
    qr = `shown${Sr}`,
    Vr = "animation",
    Yr = "fade-in",
    Ur = "fade-out";
  class Kr extends Nr {
    constructor(t, e) {
      super(t, e),
        (this._config = this._getConfig(e)),
        (this._menuStyle = ""),
        (this._popperPlacement = ""),
        (this._mdbPopperConfig = "");
      const i = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      "on" !== this._config.dropdownAnimation || i || this._init(),
        M.setDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`,
          !0
        ),
        Et(this.constructor);
    }
    dispose() {
      D.off(this._element, zr),
        D.off(this._parent, Rr),
        D.off(this._parent, jr),
        D.off(this._parent, Hr),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    static get NAME() {
      return Mr;
    }
    _init() {
      this._bindShowEvent(),
        this._bindShownEvent(),
        this._bindHideEvent(),
        this._bindHiddenEvent();
    }
    _getConfig(t) {
      const e = { ...Ir, ...M.getDataAttributes(this._element), ...t };
      return h(Mr, e, Pr), e;
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              altBoundary: this._config.flip,
              boundary: this._config.boundary,
            },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (M.setDataAttribute(this._menu, "popper", "static"),
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _bindShowEvent() {
      D.on(this._element, zr, (t) => {
        D.trigger(this._element, Fr, { relatedTarget: t.relatedTarget })
          .defaultPrevented
          ? t.preventDefault()
          : this._dropdownAnimationStart("show");
      });
    }
    _bindShownEvent() {
      D.on(this._parent, Rr, (t) => {
        D.trigger(this._parent, qr, { relatedTarget: t.relatedTarget })
          .defaultPrevented && t.preventDefault();
      });
    }
    _bindHideEvent() {
      D.on(this._parent, jr, (t) => {
        D.trigger(this._parent, Br, { relatedTarget: t.relatedTarget })
          .defaultPrevented
          ? t.preventDefault()
          : ((this._menuStyle = this._menu.style.cssText),
            (this._popperPlacement = this._menu.getAttribute(
              "data-popper-placement"
            )),
            (this._mdbPopperConfig =
              this._menu.getAttribute("data-mdb-popper")));
      });
    }
    _bindHiddenEvent() {
      D.on(this._parent, Hr, (t) => {
        D.trigger(this._parent, Wr, { relatedTarget: t.relatedTarget })
          .defaultPrevented
          ? t.preventDefault()
          : ("static" !== this._config.display &&
              "" !== this._menuStyle &&
              (this._menu.style.cssText = this._menuStyle),
            this._menu.setAttribute(
              "data-popper-placement",
              this._popperPlacement
            ),
            this._menu.setAttribute("data-mdb-popper", this._mdbPopperConfig),
            this._dropdownAnimationStart("hide"));
      });
    }
    _dropdownAnimationStart(t) {
      if ("show" === t)
        this._menu.classList.add(Vr, Yr), this._menu.classList.remove(Ur);
      else this._menu.classList.add(Vr, Ur), this._menu.classList.remove(Yr);
      this._bindAnimationEnd();
    }
    _bindAnimationEnd() {
      D.one(this._menu, "animationend", () => {
        this._menu.classList.remove(Vr, Ur, Yr);
      });
    }
  }
  const Xr = "ripple",
    Qr = "ripple-surface",
    Gr = "ripple-wave",
    Zr = "input-wrapper",
    Jr = [".btn", `[data-mdb-${Xr}-init]`],
    ta = "ripple-surface-unbound",
    ea = [0, 0, 0],
    ia = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ],
    na = {
      rippleCentered: !1,
      rippleColor: "",
      rippleDuration: "500ms",
      rippleRadius: 0,
      rippleUnbound: !1,
    },
    sa = {
      rippleCentered: "boolean",
      rippleColor: "string",
      rippleDuration: "string",
      rippleRadius: "number",
      rippleUnbound: "boolean",
    };
  class oa extends Bo {
    constructor(t, e) {
      super(t),
        (this._options = this._getConfig(e)),
        this._element &&
          (M.addClass(this._element, Qr),
          M.setDataAttribute(
            this._element,
            `${this.constructor.NAME}-initialized`,
            !0
          ),
          Et(this.constructor)),
        (this._clickHandler = this._createRipple.bind(this)),
        (this._rippleTimer = null),
        (this._isMinWidthSet = !1),
        (this._rippleInSpan = !1),
        this.init();
    }
    static get NAME() {
      return Xr;
    }
    init() {
      this._addClickEvent(this._element);
    }
    dispose() {
      D.off(this._element, "mousedown", this._clickHandler),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    _autoInit(t) {
      Jr.forEach((e) => {
        S.closest(t.target, e) && (this._element = S.closest(t.target, e));
      });
      const e = M.getDataAttributes(this._element);
      if (!this._element.classList.contains("btn") || !1 !== e.rippleInit) {
        if (
          ((this._options = this._getConfig()),
          "input" === this._element.tagName.toLowerCase())
        ) {
          const t = this._element.parentNode;
          if (
            ((this._rippleInSpan = !0),
            "span" === t.tagName.toLowerCase() && t.classList.contains(Qr))
          )
            this._element = t;
          else {
            const e = getComputedStyle(this._element).boxShadow,
              i = this._element,
              n = document.createElement("span");
            i.classList.contains("btn-block") && (n.style.display = "block"),
              D.one(n, "mouseup", (t) => {
                0 === t.button && i.click();
              }),
              n.classList.add(Qr, Zr),
              M.addStyle(n, { border: 0, "box-shadow": e }),
              t.replaceChild(n, this._element),
              n.appendChild(this._element),
              (this._element = n);
          }
          this._element.focus();
        }
        this._element.style.minWidth ||
          (M.style(this._element, {
            "min-width": `${getComputedStyle(this._element).width}`,
          }),
          (this._isMinWidthSet = !0)),
          M.addClass(this._element, Qr),
          this._createRipple(t);
      }
    }
    _addClickEvent(t) {
      D.on(t, "mousedown", this._clickHandler);
    }
    _getEventLayer(t) {
      return {
        layerX: Math.round(t.clientX - t.target.getBoundingClientRect().x),
        layerY: Math.round(t.clientY - t.target.getBoundingClientRect().y),
      };
    }
    _createRipple(t) {
      if (null === this._element) return;
      M.hasClass(this._element, Qr) || M.addClass(this._element, Qr);
      const { layerX: e, layerY: i } = this._getEventLayer(t),
        n = e,
        s = i,
        o = this._element.offsetHeight,
        r = this._element.offsetWidth,
        a = this._durationToMsNumber(this._options.rippleDuration),
        l = {
          offsetX: this._options.rippleCentered ? o / 2 : n,
          offsetY: this._options.rippleCentered ? r / 2 : s,
          height: o,
          width: r,
        },
        c = this._getDiameter(l),
        h = this._options.rippleRadius || c / 2,
        d = 0.5 * a,
        u = a - 0.5 * a,
        f = {
          left: this._options.rippleCentered ? r / 2 - h + "px" : n - h + "px",
          top: this._options.rippleCentered ? o / 2 - h + "px" : s - h + "px",
          height: `${2 * this._options.rippleRadius || c}px`,
          width: `${2 * this._options.rippleRadius || c}px`,
          transitionDelay: `0s, ${d}ms`,
          transitionDuration: `${a}ms, ${u}ms`,
        },
        p = m("div");
      this._createHTMLRipple({ wrapper: this._element, ripple: p, styles: f }),
        this._removeHTMLRipple({ ripple: p, duration: a });
    }
    _createHTMLRipple({ wrapper: t, ripple: e, styles: i }) {
      Object.keys(i).forEach((t) => (e.style[t] = i[t])),
        e.classList.add(Gr),
        "" !== this._options.rippleColor &&
          (this._removeOldColorClasses(t), this._addColor(e, t)),
        this._toggleUnbound(t),
        this._appendRipple(e, t);
    }
    _removeHTMLRipple({ ripple: t, duration: e }) {
      this._rippleTimer &&
        (clearTimeout(this._rippleTimer), (this._rippleTimer = null)),
        (this._rippleTimer = setTimeout(() => {
          t &&
            (t.remove(),
            this._element &&
              (S.find(`.${Gr}`, this._element).forEach((t) => {
                t.remove();
              }),
              this._isMinWidthSet &&
                (M.style(this._element, { "min-width": "" }),
                (this._isMinWidthSet = !1)),
              this._rippleInSpan && this._element.classList.contains(Zr)
                ? this._removeWrapperSpan()
                : M.removeClass(this._element, Qr)));
        }, e));
    }
    _removeWrapperSpan() {
      const t = this._element.firstChild;
      this._element.replaceWith(t),
        (this._element = t),
        this._element.focus(),
        (this._rippleInSpan = !1);
    }
    _durationToMsNumber(t) {
      return Number(t.replace("ms", "").replace("s", "000"));
    }
    _getConfig(t = {}) {
      const e = M.getDataAttributes(this._element);
      return (t = { ...na, ...e, ...t }), h(Xr, t, sa), t;
    }
    _getDiameter({ offsetX: t, offsetY: e, height: i, width: n }) {
      const s = e <= i / 2,
        o = t <= n / 2,
        r = (t, e) => Math.sqrt(t ** 2 + e ** 2),
        a = e === i / 2 && t === n / 2,
        l = !0 === s && !1 === o,
        c = !0 === s && !0 === o,
        h = !1 === s && !0 === o,
        d = !1 === s && !1 === o,
        u = {
          topLeft: r(t, e),
          topRight: r(n - t, e),
          bottomLeft: r(t, i - e),
          bottomRight: r(n - t, i - e),
        };
      let f = 0;
      return (
        a || d
          ? (f = u.topLeft)
          : h
          ? (f = u.topRight)
          : c
          ? (f = u.bottomRight)
          : l && (f = u.bottomLeft),
        2 * f
      );
    }
    _appendRipple(t, e) {
      e.appendChild(t),
        setTimeout(() => {
          M.addClass(t, "active");
        }, 50);
    }
    _toggleUnbound(t) {
      !0 === this._options.rippleUnbound
        ? M.addClass(t, ta)
        : t.classList.remove(ta);
    }
    _addColor(t, e) {
      if (ia.find((t) => t === this._options.rippleColor.toLowerCase()))
        M.addClass(e, `${Qr}-${this._options.rippleColor.toLowerCase()}`);
      else {
        const e = this._colorToRGB(this._options.rippleColor).join(","),
          i =
            "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%"
              .split("{{color}}")
              .join(`${e}`);
        t.style.backgroundImage = `radial-gradient(circle, ${i})`;
      }
    }
    _removeOldColorClasses(t) {
      const e = new RegExp(`${Qr}-[a-z]+`, "gi");
      (t.classList.value.match(e) || []).forEach((e) => {
        t.classList.remove(e);
      });
    }
    _colorToRGB(t) {
      return "transparent" === t.toLowerCase()
        ? ea
        : "#" === t[0]
        ? ((e = t).length < 7 &&
            (e = `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`),
          [
            parseInt(e.substr(1, 2), 16),
            parseInt(e.substr(3, 2), 16),
            parseInt(e.substr(5, 2), 16),
          ])
        : (-1 === t.indexOf("rgb") &&
            (t = (function (t) {
              const e = document.body.appendChild(
                  document.createElement("fictum")
                ),
                i = "rgb(1, 2, 3)";
              return (
                (e.style.color = i),
                e.style.color !== i
                  ? ea
                  : ((e.style.color = t),
                    e.style.color === i || "" === e.style.color
                      ? ea
                      : ((t = getComputedStyle(e).color),
                        document.body.removeChild(e),
                        t))
              );
            })(t)),
          0 === t.indexOf("rgb")
            ? (function (t) {
                return (
                  ((t = t.match(/[.\d]+/g).map((t) => +Number(t))).length = 3),
                  t
                );
              })(t)
            : ea);
      var e;
    }
    static autoInitial(t) {
      return function (e) {
        t._autoInit(e);
      };
    }
    static jQueryInterface(t) {
      return this.each(function () {
        return s.getData(this, "mdb.ripple") ? null : new oa(this, t);
      });
    }
  }
  const ra = "thumb",
    aa = "thumb-active",
    la = `.${ra}`;
  class ca extends Bo {
    constructor(t) {
      super(t),
        (this._initiated = !1),
        (this._thumb = null),
        this._element &&
          (this.init(),
          M.setDataAttribute(
            this._element,
            `${this.constructor.NAME}-initialized`,
            !0
          ),
          Et(this.constructor));
    }
    static get NAME() {
      return "range";
    }
    get rangeInput() {
      return S.findOne("input[type=range]", this._element);
    }
    init() {
      this._initiated ||
        (this._addThumb(),
        this._thumbUpdate(),
        this._handleEvents(),
        (this._initiated = !0));
    }
    dispose() {
      this._disposeEvents(),
        M.removeDataAttribute(
          this._element,
          `${this.constructor.NAME}-initialized`
        ),
        super.dispose();
    }
    _addThumb() {
      const t = m("span");
      M.addClass(t, ra),
        (t.innerHTML = '<span class="thumb-value"></span>'),
        this._element.append(t),
        (this._thumb = S.findOne(la, this._element));
    }
    _handleEvents() {
      D.on(this.rangeInput, "mousedown", () => this._showThumb()),
        D.on(this.rangeInput, "mouseup", () => this._hideThumb()),
        D.on(this.rangeInput, "touchstart", () => this._showThumb()),
        D.on(this.rangeInput, "touchend", () => this._hideThumb()),
        D.on(this.rangeInput, "input", () => this._thumbUpdate());
    }
    _disposeEvents() {
      D.off(this.rangeInput, "mousedown"),
        D.off(this.rangeInput, "mouseup"),
        D.off(this.rangeInput, "touchstart"),
        D.off(this.rangeInput, "touchend"),
        D.off(this.rangeInput, "input");
    }
    _showThumb() {
      M.addClass(this._thumb, aa);
    }
    _hideThumb() {
      M.removeClass(this._thumb, aa);
    }
    _thumbUpdate() {
      const t = this.rangeInput,
        e = t.value,
        i = t.min ? t.min : 0,
        n = t.max ? t.max : 100;
      S.findOne(".thumb-value", this._thumb).textContent = e;
      const s = Number((100 * (e - i)) / (n - i));
      M.style(this._thumb, { left: `calc(${s}% + (${8 - 0.15 * s}px))` });
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        let i = s.getData(this, "mdb.range");
        const n = "object" == typeof t && t;
        if (
          (i || !/dispose/.test(t)) &&
          (i || (i = new ca(this, n)), "string" == typeof t)
        ) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  const ha = (t, e) => {
      const i = t;
      D.one(document, "mousedown", e, i.autoInitial(new i()));
    },
    da = {
      alert: {
        name: "Alert",
        selector: "[data-mdb-alert-init]",
        isToggler: !0,
        callback: (t, e) => {
          const i = t;
          Ut(i, "close"), S.find(e).forEach((t) => i.getOrCreateInstance(t));
        },
      },
      button: {
        name: "Button",
        selector: "[data-mdb-button-init]",
        isToggler: !0,
        callback: (t, e) => {
          const i = t,
            n = `click.bs.${t.name}.data-api`;
          D.on(document, n, e, (t) => {
            t.preventDefault();
            const n = t.target.closest(e);
            i.getOrCreateInstance(n).toggle();
          }),
            S.find(e).forEach((t) => i.getOrCreateInstance(t));
        },
      },
      carousel: {
        name: "Carousel",
        selector: "[data-mdb-carousel-init]",
        isToggler: !0,
        callback: (t, e) => {
          const i = `click.bs.${t.name}.data-api`,
            n = t,
            s = `load.bs.${t.name}.data-api`,
            o = e;
          D.on(
            document,
            i,
            "[data-mdb-slide], [data-mdb-slide-to]",
            function (t) {
              const e = a(this);
              if (!e || !e.classList.contains("carousel")) return;
              t.preventDefault();
              const i = n.getOrCreateInstance(e),
                s = this.getAttribute("data-mdb-slide-to");
              return s
                ? (i.to(s), void i._maybeEnableCycle())
                : "next" === M.getDataAttribute(this, "slide")
                ? (i.next(), void i._maybeEnableCycle())
                : (i.prev(), void i._maybeEnableCycle());
            }
          ),
            D.on(window, s, () => {
              S.find(o).forEach((t) => {
                n.getOrCreateInstance(t);
              });
            });
        },
      },
      collapse: {
        name: "Collapse",
        selector: "[data-mdb-collapse-init]",
        isToggler: !0,
        callback: (t, e) => {
          const i = `click.bs.${t.name}.data-api`,
            n = e,
            s = t;
          D.on(document, i, n, function (t) {
            ("A" === t.target.tagName ||
              (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
              t.preventDefault();
            const e = r(this);
            S.find(e).forEach((t) => {
              s.getOrCreateInstance(t, { toggle: !1 }).toggle();
            });
          }),
            S.find(n).forEach((t) => {
              const e = r(t);
              S.find(e).forEach((t) => {
                s.getOrCreateInstance(t, { toggle: !1 });
              });
            });
        },
      },
      dropdown: {
        name: "Dropdown",
        selector: "[data-mdb-dropdown-init]",
        isToggler: !0,
        callback: (t, e) => {
          const i = `click.bs.${t.name}.data-api`,
            n = `keydown.bs.${t.name}.data-api`,
            s = `keyup.bs.${t.name}.data-api`,
            o = `[data-mdb-${t.NAME}-initialized]`,
            r = t;
          D.on(document, n, o, r.dataApiKeydownHandler),
            D.on(document, n, ".dropdown-menu", r.dataApiKeydownHandler),
            D.on(document, i, r.clearMenus),
            D.on(document, s, r.clearMenus),
            D.on(document, i, o, function (t) {
              t.preventDefault(), r.getOrCreateInstance(this).toggle();
            }),
            S.find(e).forEach((t) => {
              r.getOrCreateInstance(t);
            });
        },
      },
      modal: {
        name: "Modal",
        selector: "[data-mdb-modal-init]",
        isToggler: !0,
        callback: (t, e) => {
          const i = `click.bs.${t.name}.data-api`,
            n = t,
            s = `show.bs.${t.name}`,
            o = `hidden.bs.${t.name}`;
          D.on(document, i, e, function (t) {
            const e = a(this);
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
              D.one(e, s, (t) => {
                t.defaultPrevented ||
                  D.one(e, o, () => {
                    d(this) && this.focus();
                  });
              });
            S.find(".modal.show").forEach((t) => {
              t.classList.contains("modal-non-invasive-show") ||
                n.getInstance(t).hide();
            });
            n.getOrCreateInstance(e).toggle(this);
          }),
            Ut(n),
            S.find(e).forEach((t) => {
              const e = r(t),
                i = S.findOne(e);
              n.getOrCreateInstance(i);
            });
        },
      },
      offcanvas: {
        name: "Offcanvas",
        selector: "[data-mdb-offcanvas-init]",
        isToggler: !0,
        callback: (t, e) => {
          const i = `click.bs.${t.name}.data-api`,
            n = ".offcanvas.show",
            s = t,
            o = `hidden.bs.${t.name}`,
            r = `load.bs.${t.name}.data-api`,
            l = `resize.bs.${t.name}`;
          D.on(document, i, e, function (t) {
            const e = a(this);
            if (
              (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
              u(this))
            )
              return;
            D.one(e, o, () => {
              d(this) && this.focus();
            });
            const i = S.findOne(n);
            i && i !== e && s.getInstance(i).hide();
            s.getOrCreateInstance(e).toggle(this);
          }),
            D.on(window, r, () => {
              S.find(n).forEach((t) => {
                s.getOrCreateInstance(t).show();
              });
            }),
            D.on(window, l, () => {
              S.find("[aria-modal][class*=show][class*=offcanvas-]").forEach(
                (t) => {
                  "fixed" !== getComputedStyle(t).position &&
                    s.getOrCreateInstance(t).hide();
                }
              );
            }),
            Ut(s);
        },
      },
      scrollspy: {
        name: "ScrollSpy",
        selector: "[data-mdb-scrollspy-init]",
        isToggler: !0,
        callback: (t, e) => {
          const i = `load.bs.${t.name}.data-api`,
            n = t;
          D.on(window, i, () => {
            S.find(e).forEach((t) => {
              n.getOrCreateInstance(t);
            });
          });
        },
      },
      tab: {
        name: "Tab",
        selector:
          "[data-mdb-tab-init], [data-mdb-pill-init], [data-mdb-list-init]",
        isToggler: !0,
        callback: (t, e) => {
          const i = `load.bs.${t.name}.data-api`,
            n = `click.bs.${t.name}.data-api`,
            s = "active",
            o = `.${s}[data-mdb-tab-init], .${s}[data-mdb-pill-init], .${s}[data-mdb-toggle="list"]`,
            r = t;
          D.on(document, n, e, function (t) {
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
              u(this) || r.getOrCreateInstance(this).show();
          }),
            D.on(window, i, () => {
              S.find(o).forEach((t) => {
                r.getOrCreateInstance(t);
              });
            });
        },
      },
      toast: {
        name: "Toast",
        selector: "[data-mdb-toast-init]",
        isToggler: !0,
        callback: (t, e) => {
          const i = t;
          Ut(i), S.find(e).forEach((t) => i.getOrCreateInstance(t));
        },
      },
      tooltip: {
        name: "Tooltip",
        selector: "[data-mdb-tooltip-init]",
        isToggler: !1,
      },
      input: {
        name: "Input",
        selector: "[data-mdb-input-init]",
        isToggler: !0,
        callback: (t, e) => {
          const i = e,
            n = `${i} input`,
            s = `${i} textarea`,
            o = t;
          D.on(document, "focus", n, o.activate(new o())),
            D.on(document, "input", n, o.activate(new o())),
            D.on(document, "blur", n, o.deactivate(new o())),
            D.on(document, "focus", s, o.activate(new o())),
            D.on(document, "input", s, o.activate(new o())),
            D.on(document, "blur", s, o.deactivate(new o())),
            D.on(window, "shown.bs.modal", (t) => {
              S.find(n, t.target).forEach((t) => {
                const e = o.getInstance(t.parentNode);
                e && e.update();
              }),
                S.find(s, t.target).forEach((t) => {
                  const e = o.getInstance(t.parentNode);
                  e && e.update();
                });
            }),
            D.on(window, "shown.bs.dropdown", (t) => {
              const e = t.target.parentNode.querySelector(".dropdown-menu");
              e &&
                (S.find(n, e).forEach((t) => {
                  const e = o.getInstance(t.parentNode);
                  e && e.update();
                }),
                S.find(s, e).forEach((t) => {
                  const e = o.getInstance(t.parentNode);
                  e && e.update();
                }));
            }),
            D.on(window, "shown.bs.tab", (t) => {
              let e;
              e = t.target.href
                ? t.target.href.split("#")[1]
                : M.getDataAttribute(t.target, "target").split("#")[1];
              const i = S.findOne(`#${e}`);
              S.find(n, i).forEach((t) => {
                const e = o.getInstance(t.parentNode);
                e && e.update();
              }),
                S.find(s, i).forEach((t) => {
                  const e = o.getInstance(t.parentNode);
                  e && e.update();
                });
            }),
            S.find(i).map((t) => new o(t)),
            D.on(window, "reset", (t) => {
              S.find(n, t.target).forEach((t) => {
                const e = o.getInstance(t.parentNode);
                e && e.forceInactive();
              }),
                S.find(s, t.target).forEach((t) => {
                  const e = o.getInstance(t.parentNode);
                  e && e.forceInactive();
                });
            }),
            D.on(window, "onautocomplete", (t) => {
              const e = o.getInstance(t.target.parentNode);
              e && t.cancelable && e.forceActive();
            });
        },
      },
      range: {
        name: "Range",
        selector: "[data-mdb-range-init]",
        isToggler: !1,
      },
      ripple: {
        name: "Ripple",
        selector: "[data-mdb-ripple-init]",
        isToggler: !0,
        callback: ha,
      },
      popover: {
        name: "Popover",
        selector: "[data-mdb-popover-init]",
        isToggler: !1,
        callback: ha,
      },
    },
    ua = new (class {
      constructor(t) {
        i(this, "init", (t) => {
          t.forEach((t) => At(t));
        }),
          i(this, "initMDB", (t, e = !1) => {
            const i = Object.keys(Ct).map((i) => {
              if (Boolean(document.querySelector(Ct[i].selector))) {
                const n = t[Ct[i].name];
                return (
                  n ||
                    wt.get(i) ||
                    !e ||
                    console.warn(
                      `Please import ${Ct[i].name} from "MDB" package and add it to a object parameter inside "initMDB" function`
                    ),
                  n
                );
              }
              return null;
            });
            this.init(i);
          }),
          (Ct = t);
      }
    })(da).initMDB;
  ua({
    Alert: Te,
    Button: Ht,
    Carousel: ii,
    Collapse: dr,
    Offcanvas: be,
    Dropdown: Kr,
    Input: Xo,
    Modal: wi,
    Popover: Ts,
    Ripple: oa,
    ScrollSpy: Ws,
    Tab: vo,
    Toast: Ro,
    Tooltip: Eo,
    Range: ca,
  }),
    (t.Alert = Te),
    (t.Button = Ht),
    (t.Carousel = ii),
    (t.Collapse = dr),
    (t.Dropdown = Kr),
    (t.Input = Xo),
    (t.Modal = wi),
    (t.Offcanvas = be),
    (t.Popover = Ts),
    (t.Range = ca),
    (t.Ripple = oa),
    (t.ScrollSpy = Ws),
    (t.Tab = vo),
    (t.Toast = Ro),
    (t.Tooltip = Eo),
    (t.initMDB = ua),
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
});
//# sourceMappingURL=mdb.umd.min.js.map
