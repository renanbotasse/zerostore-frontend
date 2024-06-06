// node_modules/@storefront-ui/shared/dist/index.mjs
var D = Object.defineProperty;
var E = (t, e, r) => e in t ? D(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r;
var a = (t, e, r) => (E(t, typeof e != "symbol" ? e + "" : e, r), r);
var u = ((t) => (t.vertical = "vertical", t.horizontal = "horizontal", t))(u || {});
var T = ((t) => (t.none = "none", t.floating = "floating", t.block = "block", t))(T || {});
var M = typeof window < "u";
var H = M && (window == null ? void 0 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
function F(t) {
  var e;
  return typeof window < "u" && window.navigator != null ? t.test(((e = window.navigator.userAgentData) == null ? void 0 : e.platform) || window.navigator.platform) : false;
}
function L(t) {
  var e;
  return typeof window > "u" || window.navigator == null ? false : ((e = window.navigator.userAgentData) == null ? void 0 : e.brands.some(
    (r) => t.test(r.brand)
  )) || t.test(window.navigator.userAgent);
}
var k = F(/^Mac/i);
var W = L(/Android/i);
var m = L(/^((?!chrome|android).)*safari/i);
var N = -1;
var xt = (t) => `sf-${t}--${++N}`;
var yt = (t) => t.key === "Tab" && t.shiftKey;
var bt = (t) => t.key === "Tab" && !t.shiftKey;
var wt = () => {
};
function Lt(t, e, r) {
  return Math.min(Math.max(t, e), r);
}
function Dt(t, e) {
  return Math.round(t / e) * e;
}
function O(t, e) {
  if (t === e)
    return true;
  const r = typeof t;
  if (r !== typeof e)
    return false;
  if (r === "object" && t !== null && e !== null) {
    if (t.length !== e.length || Object.getOwnPropertyNames(t).length !== Object.getOwnPropertyNames(e).length)
      return false;
    for (const n in t)
      if (!O(t[n], e[n]))
        return false;
  } else
    return r === "function" ? t.toString() === e.toString() : false;
  return true;
}
var w = {
  reduceMotion: H,
  direction: u.horizontal
};
var Et = class {
  constructor(e, r) {
    a(this, "container");
    a(this, "options");
    a(this, "debounceId");
    a(this, "dragScrollX");
    a(this, "dragScrollLeft");
    a(this, "dragScrollY");
    a(this, "dragScrollTop");
    a(this, "pointerDownOffsetLeft");
    a(this, "pointerDownOffsetTop");
    a(this, "dragDistance");
    a(this, "isDraggedPreviously", false);
    a(this, "resizeObserver", new ResizeObserver(() => {
      this.container && this.refresh(this.options.onScroll);
    }));
    if (!(e instanceof HTMLElement))
      throw new Error(`SfScrollable: Container is not a HTMLElement! Received: ${e}`);
    this.container = e, this.options = {
      ...r,
      reduceMotion: (r == null ? void 0 : r.reduceMotion) ?? w.reduceMotion,
      direction: (r == null ? void 0 : r.direction) ?? w.direction
    }, this.dragScrollX = 0, this.dragScrollLeft = 0, this.dragScrollY = 0, this.dragScrollTop = 0, this.pointerDownOffsetLeft = 0, this.pointerDownOffsetTop = 0, this.dragDistance = 0;
  }
  get isDragged() {
    return this.isDraggedPreviously;
  }
  set isDragged(e) {
    var r, s;
    e !== this.isDraggedPreviously && (this.isDraggedPreviously = e, (s = (r = this.options).onDragStart) == null || s.call(r, {
      isDragged: this.isDraggedPreviously
    }));
  }
  register() {
    const e = this.addListeners();
    return this.onScrollHandler(), e;
  }
  addListeners() {
    const e = this.onScroll.bind(this);
    if (this.container.addEventListener("scroll", e, { passive: !this.options.drag }), this.resizeObserver.observe(this.container), this.options.drag) {
      const r = this.onMouseDown.bind(this), s = this.onMouseUp.bind(this), n = this.onMouseMove.bind(this), o = this.onMouseLeave.bind(this);
      return this.container.addEventListener("mousedown", r, { passive: false }), this.container.addEventListener("mouseup", s, { passive: true }), this.container.addEventListener("mousemove", n, { passive: false }), this.container.addEventListener("mouseleave", o, { passive: true }), () => {
        this.container.removeEventListener("scroll", e), this.container.removeEventListener("mousedown", r), this.container.removeEventListener("mouseup", s), this.container.removeEventListener("mousemove", n), this.container.removeEventListener("mouseleave", o), this.resizeObserver.unobserve(this.container);
      };
    }
    return () => {
      this.container.removeEventListener("scroll", e), this.resizeObserver.unobserve(this.container);
    };
  }
  prev() {
    var n, o;
    let e = false;
    if ((o = (n = this.options) == null ? void 0 : n.onPrev) == null || o.call(n, { preventDefault: () => e = true }), e)
      return;
    const { container: r, options: s } = this;
    s.direction === u.vertical ? this.scrollTo({ top: r.scrollTop - r.clientHeight }) : this.scrollTo({ left: r.scrollLeft - r.clientWidth });
  }
  next() {
    var n, o;
    let e = false;
    if ((o = (n = this.options) == null ? void 0 : n.onNext) == null || o.call(n, { preventDefault: () => e = true }), e)
      return;
    const { container: r, options: s } = this;
    s.direction === u.vertical ? this.scrollTo({ top: r.scrollTop + r.clientHeight }) : this.scrollTo({ left: r.scrollLeft + r.clientWidth });
  }
  scrollToIndex(e) {
    const r = this.container.children;
    if (r[e]) {
      const { container: s } = this, { top: n, left: o } = s.getBoundingClientRect(), {
        top: l,
        left: d,
        width: c,
        height: f
      } = r[e].getBoundingClientRect();
      if (this.options.direction === u.vertical) {
        const h = l - n, g = (s.clientHeight - f) / 2;
        this.scrollTo({ top: s.scrollTop + h - g });
      } else {
        const h = d - o, g = (s.clientWidth - c) / 2;
        this.scrollTo({ left: s.scrollLeft + h - g });
      }
    }
  }
  refresh(e) {
    e && requestAnimationFrame(() => {
      e(this.calculate());
    });
  }
  onMouseUp(e) {
    var d, c;
    const { container: r, options: s } = this;
    this.isDragged = false;
    const n = typeof this.options.drag == "object" && this.options.drag.sensitivity ? this.options.drag.sensitivity : 4, o = typeof this.options.drag == "object" ? this.options.drag.containerWidth : false, l = 10;
    if (s.direction === u.vertical) {
      const h = (e.pageY - r.offsetTop - this.dragScrollY) * n;
      if (o) {
        if (Math.abs(this.dragDistance) < 10)
          return;
        r.scrollLeft = this.dragScrollLeft - (this.dragDistance < 0 ? r.clientHeight - l : -r.clientHeight + l);
      } else
        r.scrollTop = this.dragScrollTop - h;
    } else {
      const h = (e.pageX - r.offsetLeft - this.dragScrollX) * n;
      if (o) {
        if (Math.abs(this.dragDistance) < 10)
          return;
        r.scrollLeft = this.dragScrollLeft - (this.dragDistance < 0 ? r.clientWidth - l : -r.clientWidth + l);
      } else
        r.scrollLeft = this.dragScrollLeft - h;
    }
    (c = (d = this.options).onDragEnd) == null || c.call(d, {
      isDragged: false,
      swipeLeft: this.dragDistance > -10,
      swipeRight: this.dragDistance < 10
    });
  }
  onMouseLeave() {
    this.isDragged = false;
  }
  onMouseDown(e) {
    e.preventDefault();
    const { container: r, options: s } = this;
    this.isDragged = true, this.pointerDownOffsetLeft = e.offsetX, this.pointerDownOffsetTop = e.offsetY, s.direction === u.vertical ? (this.dragScrollY = e.pageY - r.offsetTop, this.dragScrollTop = r.scrollTop) : (this.dragScrollX = e.pageX - r.offsetLeft, this.dragScrollLeft = r.scrollLeft);
  }
  onMouseMove(e) {
    if (!this.isDragged)
      return;
    e.preventDefault();
    const { options: r } = this;
    r.direction === u.vertical ? this.dragDistance = this.pointerDownOffsetTop - e.offsetY : this.dragDistance = this.pointerDownOffsetLeft - e.offsetX;
  }
  scrollTo({ left: e, top: r }) {
    const s = this.options.reduceMotion ? "auto" : "smooth";
    this.container.scrollTo({ left: e, top: r, behavior: s });
  }
  onScroll(e) {
    this.container && (this.options.drag && e.preventDefault(), clearTimeout(this.debounceId), this.debounceId = setTimeout(this.onScrollHandler.bind(this), 50));
  }
  onScrollHandler() {
    this.refresh(this.options.onScroll);
  }
  get hasNext() {
    return this.options.direction === u.vertical ? this.container.scrollHeight > this.container.scrollTop + this.container.clientHeight : this.container.scrollWidth > this.container.scrollLeft + this.container.clientWidth;
  }
  get hasPrev() {
    return this.options.direction === u.vertical ? !!this.container.scrollTop : !!this.container.scrollLeft;
  }
  calculate() {
    return {
      left: this.container.scrollLeft,
      width: this.container.clientWidth,
      scrollWidth: this.container.scrollWidth,
      hasPrev: this.hasPrev,
      hasNext: this.hasNext
    };
  }
};
var K = ((t) => (t.neutral = "neutral", t.secondary = "secondary", t.positive = "positive", t.warning = "warning", t.error = "error", t))(K || {});
var I = ((t) => (t.temporary = "temporary", t.persistent = "persistent", t))(I || {});
var X = ((t) => (t.standard = "standard", t.dot = "dot", t))(X || {});
var Y = ((t) => (t["top-right"] = "top-right", t["top-left"] = "top-left", t["bottom-right"] = "bottom-right", t["bottom-left"] = "bottom-left", t))(Y || {});
var j = ((t) => (t.sm = "sm", t.base = "base", t.lg = "lg", t))(j || {});
var G = ((t) => (t.primary = "primary", t.secondary = "secondary", t.tertiary = "tertiary", t))(G || {});
var C = ((t) => (t.sm = "sm", t.base = "base", t))(C || {});
var U = ((t) => (t["3xs"] = "3xs", t["2xs"] = "2xs", t.xs = "xs", t.sm = "sm", t.base = "base", t.lg = "lg", t))(U || {});
var A = ((t) => (t.top = "top", t.bottom = "bottom", t.left = "left", t.right = "right", t))(A || {});
var $ = ((t) => (t.sm = "sm", t.base = "base", t.lg = "lg", t))($ || {});
var q = ((t) => (t.xs = "xs", t.sm = "sm", t.base = "base", t.lg = "lg", t.xl = "xl", t["2xl"] = "2xl", t["3xl"] = "3xl", t["4xl"] = "4xl", t))(q || {});
var R = ((t) => (t.primary = "primary", t.secondary = "secondary", t))(R || {});
var J = ((t) => (t.sm = "sm", t.base = "base", t.lg = "lg", t))(J || {});
var Q = ((t) => (t.xs = "xs", t.sm = "sm", t.base = "base", t.lg = "lg", t.xl = "xl", t["2xl"] = "2xl", t["3xl"] = "3xl", t["4xl"] = "4xl", t))(Q || {});
var Z = ((t) => (t.xs = "xs", t.sm = "sm", t.base = "base", t.lg = "lg", t.xl = "xl", t["2xl"] = "2xl", t["3xl"] = "3xl", t["4xl"] = "4xl", t))(Z || {});
var _ = ((t) => (t.xs = "xs", t.sm = "sm", t.base = "base", t.lg = "lg", t.xl = "xl", t))(_ || {});
var V = ((t) => (t.sm = "sm", t.base = "base", t.lg = "lg", t))(V || {});
var B = ((t) => (t.sm = "sm", t.base = "base", t.lg = "lg", t))(B || {});
var P = ((t) => (t.sm = "sm", t.base = "base", t.lg = "lg", t))(P || {});
var z = ((t) => (t.sm = "sm", t.base = "base", t.lg = "lg", t.xl = "xl", t))(z || {});
var S = ((t) => (t["top-start"] = "top-start", t.top = "top", t["top-end"] = "top-end", t["bottom-start"] = "bottom-start", t.bottom = "bottom", t["bottom-end"] = "bottom-end", t["left-start"] = "left-start", t.left = "left", t["left-end"] = "left-end", t["right-start"] = "right-start", t.right = "right", t["right-end"] = "right-end", t))(S || {});
var tt = ((t) => (t.fixed = "fixed", t.absolute = "absolute", t))(tt || {});
var x = (t, e) => e.findIndex((r) => r === t);
var et = (t, e) => {
  const r = x(t, e);
  return e[r + 1];
};
var rt = (t, e) => {
  const r = x(t, e);
  return e[r - 1];
};
var p = ({ focusables: t, event: e }) => {
  e == null || e.preventDefault();
  const r = t[0];
  return r == null || r.focus(), r;
};
var b = ({ focusables: t, event: e }) => {
  e == null || e.preventDefault();
  const r = t[t.length - 1];
  return r == null || r.focus(), r;
};
var st = (t, e) => {
  const r = et(t, e);
  return r == null || r.focus(), r;
};
var nt = (t, e) => {
  const r = rt(t, e);
  return r == null || r.focus(), r;
};
var ot = (t, e) => x(t, e) === 0;
var it = (t, e) => x(t, e) === e.length - 1;
var lt = (t, e, r) => {
  const s = [...r].reverse(), n = s.findIndex((o) => o === t);
  return s.find((o, l) => {
    var d;
    if (l > n && o.closest(e) && t.closest(e) !== o.closest(e) && ((d = s[l + 1]) == null ? void 0 : d.closest(e)) !== o.closest(e))
      return o;
  });
};
var at = (t, e, r) => {
  const s = r.findIndex((n) => n === t);
  return r.find((n, o) => {
    if (o > s && n.closest(e) && t.closest(e) !== n.closest(e))
      return n;
  });
};
var ct = ({
  current: t,
  focusables: e,
  arrowFocusGroupSelector: r
}) => {
  if (!t)
    return p({ focusables: e });
  const s = at(t, r, e);
  return t && s ? (s == null || s.focus(), s) : p({ focusables: e });
};
var dt = ({
  current: t,
  focusables: e,
  arrowFocusGroupSelector: r
}) => {
  if (!t)
    return p({ focusables: e });
  const s = lt(t, r, e);
  return t && s ? (s == null || s.focus(), s) : b({ focusables: e });
};
var ut = ({
  current: t,
  focusables: e,
  event: r
}) => {
  if (m && (r == null || r.preventDefault()), t) {
    if (it(t, e))
      return p({ focusables: e, event: r });
    if (m || !r)
      return st(t, e);
  } else
    return p({ focusables: e, event: r });
};
var ht = ({
  current: t,
  focusables: e,
  event: r
}) => {
  if (m && (r == null || r.preventDefault()), t) {
    if (ot(t, e))
      return b({ focusables: e, event: r });
    if (m || !r)
      return nt(t, e);
  } else
    return b({ focusables: e, event: r });
};
var Tt = ({
  current: t,
  event: e,
  focusables: r,
  arrowFocusGroupSelector: s
}) => s ? ct({ current: t, focusables: r, arrowFocusGroupSelector: s }) : ut({ current: t, focusables: r, event: e });
var Mt = ({
  current: t,
  focusables: e,
  event: r,
  arrowFocusGroupSelector: s
}) => s ? dt({ current: t, focusables: e, arrowFocusGroupSelector: s }) : ht({ current: t, focusables: e, event: r });
function ft(t) {
  return t.mozInputSource === 0 && t.isTrusted ? true : W && t.pointerType ? t.type === "click" && t.buttons === 1 : t.detail === 0 && !t.pointerType;
}
function gt(t) {
  return !(t.metaKey || !k && t.altKey || t.ctrlKey || t.key === "Control" || t.key === "Shift" || t.key === "Meta");
}
var Ht = () => {
  let t = null;
  const e = /* @__PURE__ */ new Set();
  let r = false, s = false, n = false;
  const o = () => t !== "pointer", l = (i, y) => {
    for (const v of e)
      v(i, y);
  }, d = (i) => {
    s = true, gt(i) && (t = "keyboard", l("keyboard", i));
  }, c = (i) => {
    t = "pointer", (i.type === "mousedown" || i.type === "pointerdown") && (s = true, l("pointer", i));
  }, f = (i) => {
    ft(i) && (s = true, t = "virtual");
  }, h = (i) => {
    i.target === window || i.target === document || (!s && !n && (t = "virtual", l("virtual", i)), s = false, n = false);
  }, g = () => {
    s = false, n = true;
  };
  return {
    isFocusVisible: o,
    changeHandlers: e,
    setupGlobalFocusEvents: () => {
      if (typeof window > "u" || r)
        return;
      const i = HTMLElement.prototype.focus;
      HTMLElement.prototype.focus = function() {
        s = true, i.apply(this, arguments);
      }, document.addEventListener("keydown", d, true), document.addEventListener("keyup", d, true), document.addEventListener("click", f, true), window.addEventListener("focus", h, true), window.addEventListener("blur", g, false), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", c, true), document.addEventListener("pointermove", c, true), document.addEventListener("pointerup", c, true)) : (document.addEventListener("mousedown", c, true), document.addEventListener("mousemove", c, true), document.addEventListener("mouseup", c, true)), r = true;
    },
    isKeyboardFocusEvent: (i, y, v) => !(i && y === "keyboard" && v instanceof KeyboardEvent && // Only Tab or Esc keys will make focus visible on text input elements
    !["Tab", "Escape"].includes(v.key))
  };
};

export {
  u,
  T,
  M,
  H,
  k,
  W,
  m,
  xt,
  yt,
  bt,
  wt,
  Lt,
  Dt,
  O,
  Et,
  K,
  I,
  X,
  Y,
  j,
  G,
  C,
  U,
  A,
  $,
  q,
  R,
  J,
  Q,
  Z,
  _,
  V,
  B,
  P,
  z,
  S,
  tt,
  x,
  et,
  rt,
  p,
  b,
  st,
  nt,
  ot,
  it,
  ut,
  ht,
  Tt,
  Mt,
  Ht
};
//# sourceMappingURL=chunk-GTONXFU6.js.map
