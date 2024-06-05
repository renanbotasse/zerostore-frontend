import {
  useClickAway_default,
  useKey_default
} from "./chunk-DOKO2SRA.js";
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating
} from "./chunk-HQEHGVNZ.js";
import {
  $,
  A,
  B,
  C,
  Dt,
  Et,
  G,
  Ht,
  J,
  Lt,
  Mt,
  P,
  Q,
  R,
  S,
  T,
  Tt,
  U,
  V,
  X,
  Y,
  Z,
  _,
  bt,
  j,
  q,
  tt,
  u,
  yt,
  z
} from "./chunk-GTONXFU6.js";
import {
  require_jsx_runtime
} from "./chunk-CZCRWWAH.js";
import "./chunk-KRAWGZ3J.js";
import "./chunk-OOCFQ3FX.js";
import {
  require_react
} from "./chunk-6P5PNMGD.js";
import {
  require_classnames
} from "./chunk-5QIHIX6U.js";
import {
  __commonJS,
  __toESM
} from "./chunk-WXXH56N5.js";

// node_modules/jw-paginate/lib/jw-paginate.js
var require_jw_paginate = __commonJS({
  "node_modules/jw-paginate/lib/jw-paginate.js"(exports, module) {
    "use strict";
    function paginate(totalItems, currentPage, pageSize, maxPages) {
      if (currentPage === void 0) {
        currentPage = 1;
      }
      if (pageSize === void 0) {
        pageSize = 10;
      }
      if (maxPages === void 0) {
        maxPages = 10;
      }
      var totalPages = Math.ceil(totalItems / pageSize);
      if (currentPage < 1) {
        currentPage = 1;
      } else if (currentPage > totalPages) {
        currentPage = totalPages;
      }
      var startPage, endPage;
      if (totalPages <= maxPages) {
        startPage = 1;
        endPage = totalPages;
      } else {
        var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
          startPage = 1;
          endPage = maxPages;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
          startPage = totalPages - maxPages + 1;
          endPage = totalPages;
        } else {
          startPage = currentPage - maxPagesBeforeCurrentPage;
          endPage = currentPage + maxPagesAfterCurrentPage;
        }
      }
      var startIndex = (currentPage - 1) * pageSize;
      var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
      var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function(i16) {
        return startPage + i16;
      });
      return {
        totalItems,
        currentPage,
        pageSize,
        totalPages,
        startPage,
        endPage,
        startIndex,
        endIndex,
        pages
      };
    }
    module.exports = paginate;
  }
});

// node_modules/@storefront-ui/react/dist/components/SfBadge/SfBadge.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_classnames = __toESM(require_classnames(), 1);
function b({
  content: a32,
  variant: s10,
  max: r14 = 99,
  placement: t27 = Y["top-right"],
  className: l21,
  ...i16
}) {
  const e12 = s10 === "dot";
  let o34 = a32;
  return e12 ? o34 = "" : !Number.isNaN(a32) && Number(a32) > r14 && (o34 = `${r14}+`), (0, import_jsx_runtime.jsx)(
    "span",
    {
      className: (0, import_classnames.default)(
        "block absolute py-0.5 px-1 bg-secondary-700 font-medium text-white text-[8px] leading-[8px] rounded-xl",
        {
          "min-w-[12px] min-h-[12px]": !e12,
          "w-[10px] h-[10px]": e12,
          "top-0 right-0 -translate-x-0.5 translate-y-0.5": t27 === "top-right",
          "top-0 left-0 translate-x-0.5 translate-y-0.5": t27 === "top-left",
          "bottom-0 right-0 -translate-x-0.5 -translate-y-0.5": t27 === "bottom-right",
          "bottom-0 left-0 translate-x-0.5 -translate-y-0.5": t27 === "bottom-left"
        },
        l21
      ),
      "data-testid": "badge",
      ...i16,
      children: o34
    }
  );
}

// node_modules/@storefront-ui/react/dist/components/SfCounter/SfCounter.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);
function d({
  size: s10 = U.base,
  pill: e12 = false,
  children: o34,
  className: r14,
  ...x7
}) {
  const a32 = {
    [U["3xs"]]: (0, import_classnames2.default)("text-3xs", { "px-1": e12 }),
    [U["2xs"]]: (0, import_classnames2.default)("text-2xs", { "px-1.5": e12 }),
    [U.xs]: (0, import_classnames2.default)("text-xs", { "px-2": e12 }),
    [U.sm]: (0, import_classnames2.default)("text-sm", { "px-2.5": e12 }),
    [U.base]: (0, import_classnames2.default)("text-base", { "px-3": e12 }),
    [U.lg]: (0, import_classnames2.default)("text-lg", { "px-3.5": e12 })
  }, f17 = (0, import_classnames2.default)([
    "inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500",
    a32[s10],
    {
      "rounded-full py-0.5 font-medium ring-1 ring-neutral-200 ring-inset before:content-none after:content-none": e12
    },
    r14
  ]);
  return (0, import_jsx_runtime2.jsx)("span", { className: f17, "data-testid": "counter", ...x7, children: o34 });
}

// node_modules/@storefront-ui/react/dist/components/SfDropdown/SfDropdown.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_classnames3 = __toESM(require_classnames(), 1);

// node_modules/@storefront-ui/react/dist/hooks/usePopover/usePopover.mjs
function P2(t27) {
  const {
    isOpen: e12,
    middleware: o34,
    placement: r14 = S.bottom,
    strategy: a32 = tt.absolute
  } = t27, { refs: n28, strategy: s10, x: i16, y: l21, middlewareData: p10 } = useFloating({
    strategy: a32,
    placement: r14,
    open: e12,
    middleware: o34,
    whileElementsMounted: autoUpdate
  });
  return { refs: n28, style: {
    position: s10,
    top: l21,
    left: i16
  }, middlewareData: p10 };
}

// node_modules/@storefront-ui/react/dist/hooks/useDropdown/useDropdown.mjs
function C2(r14) {
  const {
    onClose: o34,
    onCloseDeps: t27,
    placement: s10 = "bottom",
    middleware: n28 = [offset(8), shift(), flip()],
    ...p10
  } = r14, { refs: e12, style: f17 } = P2({ placement: s10, middleware: n28, ...p10 });
  return useClickAway_default(e12.reference, o34), useKey_default("Escape", o34, { target: e12.reference.current }, t27), { refs: e12, style: f17 };
}

// node_modules/@storefront-ui/react/dist/components/SfDropdown/SfDropdown.mjs
function u2(o34) {
  const { children: s10, trigger: r14, open: e12 = false, className: n28, style: d12, ...a32 } = o34, { refs: t27, style: i16 } = C2({ isOpen: e12, ...a32 });
  return (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      ref: t27.setReference,
      className: (0, import_classnames3.default)("w-max", n28),
      style: d12,
      "data-testid": "dropdown",
      children: [
        r14,
        e12 && (0, import_jsx_runtime3.jsx)("div", { ref: t27.setFloating, style: i16, "aria-hidden": !e12, "data-testid": "dropdown-content", children: s10 })
      ]
    }
  );
}

// node_modules/@storefront-ui/react/dist/components/SfIconBase/SfIconBase.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_classnames4 = __toESM(require_classnames(), 1);
var l2 = (r14) => {
  switch (r14) {
    case q.xs:
      return "w-4 h-4";
    case q.sm:
      return "w-5 h-5";
    case q.lg:
      return "w-8 h-8";
    case q.xl:
      return "w-10 h-10";
    case q["2xl"]:
      return "w-14 h-14";
    case q["3xl"]:
      return "w-24 h-24";
    case q["4xl"]:
      return "w-48 h-48";
    default:
      return "w-6 h-6";
  }
};
function h({
  size: r14 = q.base,
  className: s10,
  children: t27 = "",
  ...n28
}) {
  return (0, import_jsx_runtime4.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: (0, import_classnames4.default)("inline-block fill-current", l2(r14), s10),
      ...n28,
      children: t27
    }
  );
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconAdd.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function n({ size: o34 = q.base, viewBox: t27 = "0 0 24 24", ...r14 }) {
  return (0, import_jsx_runtime5.jsx)(h, { size: o34, viewBox: t27, "data-testid": "add", ...r14, children: (0, import_jsx_runtime5.jsx)("path", { d: "M12 19a.97.97 0 0 1-.712-.288A.97.97 0 0 1 11 18v-5H6a.97.97 0 0 1-.713-.288A.97.97 0 0 1 5 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 11h5V6q0-.425.288-.713A.97.97 0 0 1 12 5a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 6v5h5q.424 0 .712.287.288.288.288.713 0 .424-.288.712A.97.97 0 0 1 18 13h-5v5q0 .424-.287.712A.97.97 0 0 1 12 19" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconAddShoppingCart.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function n2({
  size: q4 = q.base,
  viewBox: t27 = "0 0 24 24",
  ...a32
}) {
  return (0, import_jsx_runtime6.jsx)(h, { size: q4, viewBox: t27, "data-testid": "add-shopping-cart", ...a32, children: (0, import_jsx_runtime6.jsx)("path", { d: "M12 9a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 8V6H9a.97.97 0 0 1-.713-.287A.97.97 0 0 1 8 5q0-.424.287-.713A.97.97 0 0 1 9 4h2V2q0-.424.287-.712A.97.97 0 0 1 12 1q.424 0 .713.288Q13 1.575 13 2v2h2q.424 0 .713.287Q16 4.576 16 5t-.287.713A.97.97 0 0 1 15 6h-2v2q0 .424-.287.713A.97.97 0 0 1 12 9M7 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 20q0-.824.588-1.413A1.93 1.93 0 0 1 7 18q.824 0 1.412.587Q9 19.176 9 20t-.588 1.413A1.93 1.93 0 0 1 7 22m10 0q-.825 0-1.412-.587A1.93 1.93 0 0 1 15 20q0-.824.588-1.413A1.93 1.93 0 0 1 17 18q.824 0 1.413.587Q19 19.176 19 20t-.587 1.413A1.93 1.93 0 0 1 17 22M7 17q-1.15 0-1.737-.988-.588-.987-.013-1.962L6.6 11.6 3 4H2a.97.97 0 0 1-.712-.288A.97.97 0 0 1 1 3q0-.424.288-.712A.97.97 0 0 1 2 2h1.65q.275 0 .525.15t.375.425L8.525 11h7.025l3.6-6.5A.97.97 0 0 1 20 4q.574 0 .863.487a.94.94 0 0 1 .012.988L17.3 11.95q-.275.5-.738.775A1.95 1.95 0 0 1 15.55 13H8.1L7 15h11q.424 0 .712.287.288.288.288.713 0 .424-.288.712A.97.97 0 0 1 18 17z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconAlokai.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
function m2({ size: o34 = q.base, viewBox: t27 = "0 0 32 32", ...r14 }) {
  return (0, import_jsx_runtime7.jsx)(h, { size: o34, viewBox: t27, "data-testid": "alokai", ...r14, children: (0, import_jsx_runtime7.jsx)("path", { d: "m28.2 10.681-3.712-.014c-1.732 0-3.155 1.423-3.17 3.169v4.343a3.16 3.16 0 0 0 3.155 3.154h7.512V32H21.32v-7.512a3.16 3.16 0 0 0-3.155-3.155h-4.343a3.16 3.16 0 0 0-3.154 3.155v6.236c0 .69-.558 1.261-1.262 1.261H1.262c-.69 0-1.262-.557-1.262-1.261V22.58c0-.69.558-1.262 1.262-1.262h6.235a3.16 3.16 0 0 0 3.155-3.155V13.19a2.54 2.54 0 0 1 2.538-2.538h4.974a3.16 3.16 0 0 0 3.155-3.155V3.8a3.8 3.8 0 0 1 3.8-3.8h3.08A3.8 3.8 0 0 1 32 3.8v3.081a3.8 3.8 0 0 1-3.8 3.8M10.681 5.34a5.34 5.34 0 1 1-10.68 0 5.34 5.34 0 0 1 10.68 0" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconAlokaiFull.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function f({
  size: h9 = q.base,
  viewBox: c19 = "0 0 129 28",
  ...m26
}) {
  return (0, import_jsx_runtime8.jsx)(h, { size: h9, viewBox: c19, "data-testid": "alokai-full", ...m26, children: (0, import_jsx_runtime8.jsx)("path", { d: "m21.427 9.333 3.248.013A3.326 3.326 0 0 0 28 6.021V3.325A3.326 3.326 0 0 0 24.675 0h-2.696a3.326 3.326 0 0 0-3.325 3.325V6.56a2.764 2.764 0 0 1-2.76 2.76H11.54a2.22 2.22 0 0 0-2.22 2.221v4.353a2.764 2.764 0 0 1-2.76 2.76H1.103c-.616 0-1.104.5-1.104 1.104v7.125c0 .616.5 1.104 1.104 1.104H8.23c.616 0 1.104-.5 1.104-1.104v-5.456a2.764 2.764 0 0 1 2.76-2.76h3.8a2.764 2.764 0 0 1 2.76 2.76V28h9.334v-9.333h-6.573a2.764 2.764 0 0 1-2.76-2.76v-3.8c.013-1.528 1.258-2.774 2.773-2.774m-16.755.013a4.673 4.673 0 1 0 0-9.346 4.673 4.673 0 0 0 0 9.346M65.012 3.12h2.555v21.76h-2.555zm63.023 6.213h-2.555V24.88h2.555zM70.276 17.1a8.054 8.054 0 0 1 8.05-8.05 8.054 8.054 0 0 1 8.049 8.05 8.054 8.054 0 0 1-8.05 8.05 8.054 8.054 0 0 1-8.049-8.05m2.208.013a5.846 5.846 0 0 0 5.842 5.842 5.846 5.846 0 0 0 5.84-5.842 5.846 5.846 0 0 0-5.84-5.841 5.846 5.846 0 0 0-5.842 5.841M127.01 6.305a1.605 1.605 0 1 0-.514-3.168 1.605 1.605 0 0 0 .514 3.168m-68.982 5.429c0-1.322 1.079-2.4 2.401-2.4V24.88h-2.555v-2.234a8 8 0 0 1-5.841 2.517c-4.558 0-8.23-3.788-8.05-8.384.167-4.16 3.557-7.548 7.73-7.715a8.01 8.01 0 0 1 6.315 2.67m-5.995 11.22c3.21 0 5.828-2.618 5.841-5.828V17.1a5.844 5.844 0 0 0-5.841-5.828 5.846 5.846 0 0 0-5.841 5.841 5.846 5.846 0 0 0 5.841 5.842m69.108-13.622a2.405 2.405 0 0 0-2.401 2.401 8.02 8.02 0 0 0-6.316-2.67c-4.173.167-7.562 3.556-7.729 7.715a8.06 8.06 0 0 0 8.05 8.384 8 8 0 0 0 5.841-2.517v2.234h2.555zm-2.542 7.793c-.013 3.21-2.632 5.829-5.842 5.829a5.846 5.846 0 0 1-5.841-5.842 5.846 5.846 0 0 1 5.841-5.841 5.844 5.844 0 0 1 5.842 5.828zm-15.881-7.793-5.854 5.97c-.103.103-.116.27-.026.41l6.997 9.18h-2.927l-5.867-7.716v-.012l-.013.012h-2.619a.29.29 0 0 0-.295.296v7.407h-2.555V3.12h2.555v11.477a.29.29 0 0 0 .295.295h1.926l5.456-5.559z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconArrowBack.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
function n3({ size: r14 = q.base, viewBox: o34 = "0 0 24 24", ...t27 }) {
  return (0, import_jsx_runtime9.jsx)(h, { size: r14, viewBox: o34, "data-testid": "arrow-back", ...t27, children: (0, import_jsx_runtime9.jsx)("path", { d: "m10.875 19.3-6.6-6.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 4 12q0-.2.062-.375a.9.9 0 0 1 .213-.325l6.6-6.6a.98.98 0 0 1 .687-.288.93.93 0 0 1 .713.288q.3.274.313.687a.93.93 0 0 1-.288.713L7.4 11h11.175a.97.97 0 0 1 .713.287.97.97 0 0 1 .287.713q0 .424-.287.712a.97.97 0 0 1-.713.288H7.4l4.9 4.9q.275.275.288.7a.87.87 0 0 1-.288.7q-.275.3-.7.3a1 1 0 0 1-.725-.3" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconArrowDownward.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
function l3({
  size: o34 = q.base,
  viewBox: a32 = "0 0 24 24",
  ...t27
}) {
  return (0, import_jsx_runtime10.jsx)(h, { size: o34, viewBox: a32, "data-testid": "arrow-downward", ...t27, children: (0, import_jsx_runtime10.jsx)("path", { d: "M12 19.575a1.1 1.1 0 0 1-.375-.063.9.9 0 0 1-.325-.212l-6.6-6.6q-.3-.3-.3-.713 0-.412.3-.712t.7-.3.7.3l4.9 4.9v-11.2q0-.425.288-.7A1 1 0 0 1 12 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 5v11.175l4.9-4.9q.3-.3.7-.3t.7.3.3.712q0 .413-.3.713l-6.6 6.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconArrowForward.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
function l4({
  size: a32 = q.base,
  viewBox: o34 = "0 0 24 24",
  ...t27
}) {
  return (0, import_jsx_runtime11.jsx)(h, { size: a32, viewBox: o34, "data-testid": "arrow-forward", ...t27, children: (0, import_jsx_runtime11.jsx)("path", { d: "M11.3 19.3a1 1 0 0 1-.288-.7.9.9 0 0 1 .263-.7l4.9-4.9H5a.97.97 0 0 1-.713-.288A.97.97 0 0 1 4 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 5 11h11.175l-4.9-4.9a.9.9 0 0 1-.263-.7 1 1 0 0 1 .288-.7.95.95 0 0 1 .7-.275q.425 0 .7.275l6.6 6.6q.15.125.213.312.062.188.062.388t-.062.375a.9.9 0 0 1-.213.325l-6.6 6.6a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconArrowUpward.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function p3({
  size: a32 = q.base,
  viewBox: o34 = "0 0 24 24",
  ...t27
}) {
  return (0, import_jsx_runtime12.jsx)(h, { size: a32, viewBox: o34, "data-testid": "arrow-upward", ...t27, children: (0, import_jsx_runtime12.jsx)("path", { d: "M12 20a.97.97 0 0 1-.712-.288A.97.97 0 0 1 11 19V7.825L6.125 12.7q-.3.3-.713.3a.97.97 0 0 1-.712-.3.96.96 0 0 1-.3-.7q0-.4.3-.7l6.6-6.6q.15-.15.325-.213.175-.062.375-.062t.388.062a.7.7 0 0 1 .312.213l6.6 6.6q.3.3.3.7t-.3.7-.713.3a.97.97 0 0 1-.712-.3L13 7.825V19q0 .424-.287.712A.97.97 0 0 1 12 20" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconBlock.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
function i({ size: a32 = q.base, viewBox: q4 = "0 0 24 24", ...t27 }) {
  return (0, import_jsx_runtime13.jsx)(h, { size: a32, viewBox: q4, "data-testid": "block", ...t27, children: (0, import_jsx_runtime13.jsx)("path", { d: "M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.138A9.7 9.7 0 0 1 12 2q2.075 0 3.9.787a10.1 10.1 0 0 1 3.175 2.138q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12q0-1.35-.438-2.6A8 8 0 0 0 18.3 7.1L7.1 18.3q1.05.825 2.3 1.262T12 20m-6.3-3.1L16.9 5.7q-1.05-.824-2.3-1.262A7.8 7.8 0 0 0 12 4Q8.65 4 6.325 6.325T4 12q0 1.35.438 2.6.437 1.25 1.262 2.3" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconCalendarToday.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
function m3({
  size: o34 = q.base,
  viewBox: r14 = "0 0 24 24",
  ...t27
}) {
  return (0, import_jsx_runtime14.jsx)(h, { size: o34, viewBox: r14, "data-testid": "calendar-today", ...t27, children: (0, import_jsx_runtime14.jsx)("path", { d: "M5 22q-.825 0-1.413-.587A1.93 1.93 0 0 1 3 20V6q0-.824.587-1.412A1.93 1.93 0 0 1 5 4h1V2.975q0-.425.287-.7A1 1 0 0 1 7 2a.97.97 0 0 1 .713.287A.97.97 0 0 1 8 3v1h8V2.975q0-.425.288-.7A1 1 0 0 1 17 2q.424 0 .712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413A1.93 1.93 0 0 1 19 22zm0-2h14V10H5z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconCall.mjs
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
function n4({ size: a32 = q.base, viewBox: l21 = "0 0 24 24", ...o34 }) {
  return (0, import_jsx_runtime15.jsx)(h, { size: a32, viewBox: l21, "data-testid": "call", ...o34, children: (0, import_jsx_runtime15.jsx)("path", { d: "M19.95 21q-3.225 0-6.287-1.438a19 19 0 0 1-5.425-3.8 19 19 0 0 1-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1a.96.96 0 0 1 .625.225.88.88 0 0 1 .325.575l.65 3.5q.05.35-.012.637a1.03 1.03 0 0 1-.288.513L6.975 10.9q1.05 1.8 2.638 3.375A18.6 18.6 0 0 0 13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.024.35 2.025T6.025 9M19 18.95v-2.2l-2.35-.475-1.675 1.675q.975.424 1.988.675 1.012.25 2.037.325" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconCancel.mjs
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
function f2({ size: a32 = q.base, viewBox: o34 = "0 0 24 24", ...l21 }) {
  return (0, import_jsx_runtime16.jsx)(h, { size: a32, viewBox: o34, "data-testid": "cancel", ...l21, children: (0, import_jsx_runtime16.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12m14.295 4.295a.997.997 0 0 0 0-1.41L13.41 12l2.885-2.885a.997.997 0 1 0-1.41-1.41L12 10.59 9.115 7.705a.997.997 0 0 0-1.41 1.41L10.59 12l-2.885 2.885a.997.997 0 0 0 1.41 1.41L12 13.41l2.885 2.885c.39.39 1.02.39 1.41 0",
      clipRule: "evenodd"
    }
  ) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconCheck.mjs
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
function m4({ size: t27 = q.base, viewBox: a32 = "0 0 24 24", ...e12 }) {
  return (0, import_jsx_runtime17.jsx)(h, { size: t27, viewBox: a32, "data-testid": "check", ...e12, children: (0, import_jsx_runtime17.jsx)("path", { d: "M4.535 12.705 8 16.17l9.885-9.875a.997.997 0 0 1 1.41 1.41L8.707 18.293a1 1 0 0 1-1.414 0L3.12 14.12a1 1 0 0 1 1.415-1.415" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconCheckBox.mjs
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
function m5({ size: a32 = q.base, viewBox: t27 = "0 0 24 24", ...e12 }) {
  return (0, import_jsx_runtime18.jsx)(h, { size: a32, viewBox: t27, "data-testid": "check-box", ...e12, children: (0, import_jsx_runtime18.jsx)("path", { d: "M5 21q-.825 0-1.413-.587A1.93 1.93 0 0 1 3 19V5q0-.825.587-1.413A1.93 1.93 0 0 1 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413A1.93 1.93 0 0 1 19 21zm5.6-5.225q.2 0 .375-.062a.9.9 0 0 0 .325-.213l5.675-5.675a.92.92 0 0 0 .275-.675q0-.4-.3-.7a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275L10.6 13.4l-2.175-2.175a.92.92 0 0 0-.675-.275q-.4 0-.7.3a.95.95 0 0 0-.275.7q0 .425.275.7L9.9 15.5q.15.15.325.213.175.062.375.062" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconCheckBoxOutlineBlank.mjs
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
function d2({
  size: a32 = q.base,
  viewBox: o34 = "0 0 24 24",
  ...n28
}) {
  return (0, import_jsx_runtime19.jsx)(h, { size: a32, viewBox: o34, "data-testid": "check-box-outline-blank", ...n28, children: (0, import_jsx_runtime19.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm16 .5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5z",
      clipRule: "evenodd"
    }
  ) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconCheckCircle.mjs
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
function m6({
  size: e12 = q.base,
  viewBox: r14 = "0 0 24 24",
  ...c19
}) {
  return (0, import_jsx_runtime20.jsx)(h, { size: e12, viewBox: r14, "data-testid": "check-circle", ...c19, children: (0, import_jsx_runtime20.jsx)("path", { d: "m10.6 13.8-2.175-2.175a.92.92 0 0 0-.675-.275q-.4 0-.7.3a.95.95 0 0 0-.275.7q0 .425.275.7L9.9 15.9a.95.95 0 0 0 .7.275.95.95 0 0 0 .7-.275l5.675-5.675a.92.92 0 0 0 .275-.675q0-.4-.3-.7a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.138A9.7 9.7 0 0 1 12 2q2.075 0 3.9.787a10.1 10.1 0 0 1 3.175 2.138q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconChevronLeft.mjs
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
function l5({
  size: t27 = q.base,
  viewBox: e12 = "0 0 24 24",
  ...r14
}) {
  return (0, import_jsx_runtime21.jsx)(h, { size: t27, viewBox: e12, "data-testid": "chevron-left", ...r14, children: (0, import_jsx_runtime21.jsx)("path", { d: "M14.706 17.297a1 1 0 0 0 0-1.41l-3.876-3.885 3.877-3.885a.998.998 0 0 0-1.412-1.41l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.588a.997.997 0 0 0 1.41 0" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconChevronRight.mjs
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
function h2({
  size: r14 = q.base,
  viewBox: t27 = "0 0 24 24",
  ...a32
}) {
  return (0, import_jsx_runtime22.jsx)(h, { size: r14, viewBox: t27, "data-testid": "chevron-right", ...a32, children: (0, import_jsx_runtime22.jsx)("path", { d: "M8.705 17.297a1 1 0 0 1-.001-1.41l3.876-3.885-3.876-3.885a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.588a.997.997 0 0 1-1.411 0" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconCircle.mjs
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
function m7({ size: o34 = q.base, viewBox: t27 = "0 0 24 24", ...e12 }) {
  return (0, import_jsx_runtime23.jsx)(h, { size: o34, viewBox: t27, "data-testid": "circle", ...e12, children: (0, import_jsx_runtime23.jsx)("path", { d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconClose.mjs
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
function s({ size: a32 = q.base, viewBox: t27 = "0 0 24 24", ...e12 }) {
  return (0, import_jsx_runtime24.jsx)(h, { size: a32, viewBox: t27, "data-testid": "close", ...e12, children: (0, import_jsx_runtime24.jsx)("path", { d: "M18.295 5.705a1 1 0 0 1 0 1.41L13.41 12l4.885 4.885a.997.997 0 1 1-1.41 1.41L12 13.41l-4.885 4.885a.997.997 0 1 1-1.41-1.41L10.59 12 5.705 7.115a.997.997 0 0 1 1.41-1.41L12 10.59l4.885-4.885a.997.997 0 0 1 1.41 0" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconCloseSm.mjs
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
function n5({ size: o34 = q.base, viewBox: a32 = "0 0 24 24", ...l21 }) {
  return (0, import_jsx_runtime25.jsx)(h, { size: o34, viewBox: a32, "data-testid": "close-sm", ...l21, children: (0, import_jsx_runtime25.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M16.615 8.564a.974.974 0 0 0-1.378-1.378L11.9 10.522 8.563 7.186a.974.974 0 1 0-1.378 1.378l3.337 3.336-3.337 3.337a.974.974 0 1 0 1.378 1.378l3.337-3.337 3.336 3.337a.974.974 0 1 0 1.379-1.378L13.278 11.9z",
      clipRule: "evenodd"
    }
  ) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconCompareArrows.mjs
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
function n6({
  size: t27 = q.base,
  viewBox: o34 = "0 0 24 24",
  ...a32
}) {
  return (0, import_jsx_runtime26.jsx)(h, { size: t27, viewBox: o34, "data-testid": "compare-arrows", ...a32, children: (0, import_jsx_runtime26.jsx)("path", { d: "m15.3 13.3-3.6-3.6a.9.9 0 0 1-.212-.325A1.1 1.1 0 0 1 11.425 9q0-.2.063-.375A.9.9 0 0 1 11.7 8.3l3.6-3.6q.3-.3.7-.3t.7.3.3.712q0 .413-.3.713L14.825 8H21q.424 0 .712.287Q22 8.575 22 9q0 .424-.288.712A.97.97 0 0 1 21 10h-6.175l1.875 1.875q.3.3.3.7t-.3.7-.687.325-.713-.3m-8 5.975q.3.3.7.312t.7-.287l3.6-3.6q.15-.15.213-.325.062-.176.062-.375 0-.2-.062-.375a.9.9 0 0 0-.213-.325l-3.6-3.6a.96.96 0 0 0-.7-.3q-.4 0-.7.3t-.3.712.3.713L9.175 14H3a.97.97 0 0 0-.712.287A.97.97 0 0 0 2 15q0 .424.288.712A.97.97 0 0 0 3 16h6.175L7.3 17.875q-.3.3-.3.7t.3.7" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconContactSupport.mjs
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
function f3({
  size: q4 = q.base,
  viewBox: a32 = "0 0 24 24",
  ...o34
}) {
  return (0, import_jsx_runtime27.jsx)(h, { size: q4, viewBox: a32, "data-testid": "contact-support", ...o34, children: (0, import_jsx_runtime27.jsx)("path", { d: "m13 22-.25-3h-.25q-3.55 0-6.025-2.475T4 10.5t2.475-6.025T12.5 2q1.774 0 3.312.662a8.6 8.6 0 0 1 2.701 1.825 8.6 8.6 0 0 1 1.824 2.7A8.3 8.3 0 0 1 21 10.5q0 3.8-2.275 6.812T13 22m-.525-6.025q.425 0 .725-.3t.3-.725-.3-.725-.725-.3-.725.3-.3.725.3.725.725.3M12.5 12.8q.275 0 .5-.2a1 1 0 0 0 .3-.55q.05-.326.275-.588t.775-.812q.45-.45.75-.975t.3-1.125q0-1.275-.862-1.913Q13.675 6 12.5 6q-.874 0-1.512.4t-1.038 1a.62.62 0 0 0-.063.575q.113.3.463.425a.65.65 0 0 0 .5 0q.25-.1.45-.375a1.7 1.7 0 0 1 .488-.45q.287-.175.712-.175.675 0 1.013.375t.337.825q0 .425-.25.762a6 6 0 0 1-.6.688q-.7.6-.938.975-.237.375-.287 1.025-.025.3.188.525.211.225.537.225M15 17v1.35q1.775-1.5 2.887-3.512A8.8 8.8 0 0 0 19 10.5q0-2.725-1.887-4.613Q15.225 4 12.5 4T7.888 5.887Q6 7.775 6 10.5t1.888 4.613T12.5 17z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconCreditCard.mjs
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
function m8({
  size: t27 = q.base,
  viewBox: c19 = "0 0 24 24",
  ...o34
}) {
  return (0, import_jsx_runtime28.jsx)(h, { size: t27, viewBox: c19, "data-testid": "credit-card", ...o34, children: (0, import_jsx_runtime28.jsx)("path", { d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconDelete.mjs
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
function n7({ size: A6 = q.base, viewBox: e12 = "0 0 24 24", ...t27 }) {
  return (0, import_jsx_runtime29.jsx)(h, { size: A6, viewBox: e12, "data-testid": "delete", ...t27, children: (0, import_jsx_runtime29.jsx)("path", { d: "M7 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 18V5a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 4a.97.97 0 0 1 .287-.713A.97.97 0 0 1 5 3h4q0-.425.288-.713A.97.97 0 0 1 10 2h4a.97.97 0 0 1 .713.287A.97.97 0 0 1 15 3h4q.424 0 .712.287Q20 3.575 20 4a.97.97 0 0 1-.288.713A.97.97 0 0 1 19 5v13q0 .825-.587 1.413A1.93 1.93 0 0 1 17 20zM7 5v13h10V5zm2 10q0 .424.288.712A.97.97 0 0 0 10 16a.97.97 0 0 0 .713-.288A.97.97 0 0 0 11 15V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 7a.97.97 0 0 0-.712.287A.97.97 0 0 0 9 8zm4 0q0 .424.288.712A.97.97 0 0 0 14 16a.97.97 0 0 0 .713-.288A.97.97 0 0 0 15 15V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 7a.97.97 0 0 0-.712.287A.97.97 0 0 0 13 8z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconDownload.mjs
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
function i2({ size: o34 = q.base, viewBox: q4 = "0 0 24 24", ...t27 }) {
  return (0, import_jsx_runtime30.jsx)(h, { size: o34, viewBox: q4, "data-testid": "download", ...t27, children: (0, import_jsx_runtime30.jsx)("path", { d: "M12 15.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-3.6-3.6a.92.92 0 0 1-.288-.7q.014-.4.288-.7.3-.3.712-.312a.93.93 0 0 1 .713.287L11 12.15V5q0-.424.287-.713A.97.97 0 0 1 12 4q.424 0 .713.287Q13 4.576 13 5v7.15l1.875-1.875a.93.93 0 0 1 .713-.287Q16 10 16.3 10.3q.276.3.287.7a.92.92 0 0 1-.287.7l-3.6 3.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063M6 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18v-2q0-.424.287-.713A.97.97 0 0 1 5 15q.424 0 .713.287Q6 15.576 6 16v2h12v-2q0-.424.288-.713A.97.97 0 0 1 19 15q.424 0 .712.287.288.288.288.713v2q0 .824-.587 1.413A1.93 1.93 0 0 1 18 20z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconEmail.mjs
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
function c3({ size: t27 = q.base, viewBox: a32 = "0 0 24 24", ...r14 }) {
  return (0, import_jsx_runtime31.jsx)(h, { size: t27, viewBox: a32, "data-testid": "email", ...r14, children: (0, import_jsx_runtime31.jsx)("path", { d: "M4 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h16q.824 0 1.413.588Q22 5.175 22 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20zM20 8l-7.475 4.675a1.04 1.04 0 0 1-.525.15 1.04 1.04 0 0 1-.525-.15L4 8v10h16zm-8 3 8-5H4zM4 8.25V6.775 6.8v-.013z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconError.mjs
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
function c4({ size: e12 = q.base, viewBox: o34 = "0 0 24 24", ...a32 }) {
  return (0, import_jsx_runtime32.jsx)(h, { size: e12, viewBox: o34, "data-testid": "error", ...a32, children: (0, import_jsx_runtime32.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10M12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m0 7.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",
      clipRule: "evenodd"
    }
  ) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconExpandLess.mjs
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
function i3({
  size: e12 = q.base,
  viewBox: o34 = "0 0 24 24",
  ...t27
}) {
  return (0, import_jsx_runtime33.jsx)(h, { size: e12, viewBox: o34, "data-testid": "expand-less", ...t27, children: (0, import_jsx_runtime33.jsx)("path", { d: "M17 15a1 1 0 0 1-1.41 0l-3.885-3.875L7.82 15a.998.998 0 0 1-1.41-1.412l4.588-4.587a1 1 0 0 1 1.414 0L17 13.589A1 1 0 0 1 17 15" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconExpandMore.mjs
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
function m9({
  size: o34 = q.base,
  viewBox: r14 = "0 0 24 24",
  ...e12
}) {
  return (0, import_jsx_runtime34.jsx)(h, { size: o34, viewBox: r14, "data-testid": "expand-more", ...e12, children: (0, import_jsx_runtime34.jsx)("path", { d: "M17 9.003a1 1 0 0 0-1.41 0l-3.885 3.876L7.82 9.003a.998.998 0 0 0-1.41 1.411l4.588 4.588a1 1 0 0 0 1.414 0L17 10.414a.997.997 0 0 0 0-1.41" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconFacebook.mjs
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
function n8({ size: t27 = q.base, viewBox: e12 = "0 0 24 24", ...r14 }) {
  return (0, import_jsx_runtime35.jsx)(h, { size: t27, viewBox: e12, "data-testid": "facebook", ...r14, children: (0, import_jsx_runtime35.jsx)("path", { d: "m17.01 13.25.555-3.62h-3.473V7.282c0-.99.485-1.956 2.04-1.956h1.58V2.245S16.279 2 14.909 2c-2.86 0-4.73 1.734-4.73 4.872V9.63H7v3.62h3.18V22h3.912v-8.75z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconFavorite.mjs
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
function l6({ size: o34 = q.base, viewBox: t27 = "0 0 24 24", ...r14 }) {
  return (0, import_jsx_runtime36.jsx)(h, { size: o34, viewBox: t27, "data-testid": "favorite", ...r14, children: (0, import_jsx_runtime36.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M19.664 4.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28m-7.56 14.56-.1.1-.1-.1c-4.76-4.31-7.9-7.16-7.9-10.05 0-2 1.5-3.5 3.5-3.5 1.54 0 3.04.99 3.57 2.36h1.87c.52-1.37 2.02-2.36 3.56-2.36 2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05",
      clipRule: "evenodd"
    }
  ) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconFavoriteFilled.mjs
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
function c5({
  size: t27 = q.base,
  viewBox: e12 = "0 0 24 24",
  ...r14
}) {
  return (0, import_jsx_runtime37.jsx)(h, { size: t27, viewBox: e12, "data-testid": "favorite-filled", ...r14, children: (0, import_jsx_runtime37.jsx)("path", { d: "M10.67 21.133c-5.52-4.95-8.72-7.64-8.67-11.39.04-2.97 2.3-4.39 2.35-4.43 3.61-2.46 6.89.22 7.65 1.11.75-.88 3.99-3.51 7.56-1.16.52.34 2.23 1.65 2.42 4.12.32 4.28-4.14 7.76-8.65 11.76-.38.34-.86.5-1.34.5-.47 0-.94-.17-1.32-.51" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconGridView.mjs
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
function v({ size: h9 = q.base, viewBox: r14 = "0 0 24 24", ...A6 }) {
  return (0, import_jsx_runtime38.jsx)(h, { size: h9, viewBox: r14, "data-testid": "grid-view", ...A6, children: (0, import_jsx_runtime38.jsx)("path", { d: "M5 11q-.825 0-1.413-.588A1.93 1.93 0 0 1 3 9V5q0-.825.587-1.413A1.93 1.93 0 0 1 5 3h4q.825 0 1.413.587Q11 4.175 11 5v4q0 .825-.587 1.412A1.93 1.93 0 0 1 9 11zm0 10q-.825 0-1.413-.587A1.93 1.93 0 0 1 3 19v-4q0-.825.587-1.413A1.93 1.93 0 0 1 5 13h4q.825 0 1.413.587Q11 14.175 11 15v4q0 .825-.587 1.413A1.93 1.93 0 0 1 9 21zm10-10q-.825 0-1.412-.588A1.92 1.92 0 0 1 13 9V5q0-.825.588-1.413A1.93 1.93 0 0 1 15 3h4q.825 0 1.413.587Q21 4.175 21 5v4q0 .825-.587 1.412A1.93 1.93 0 0 1 19 11zm0 10q-.825 0-1.412-.587A1.93 1.93 0 0 1 13 19v-4q0-.825.588-1.413A1.93 1.93 0 0 1 15 13h4q.825 0 1.413.587Q21 14.175 21 15v4q0 .825-.587 1.413A1.93 1.93 0 0 1 19 21zM5 9h4V5H5zm10 0h4V5h-4zm0 10h4v-4h-4zM5 19h4v-4H5z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconHelp.mjs
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
function n9({ size: q4 = q.base, viewBox: t27 = "0 0 24 24", ...o34 }) {
  return (0, import_jsx_runtime39.jsx)(h, { size: q4, viewBox: t27, "data-testid": "help", ...o34, children: (0, import_jsx_runtime39.jsx)("path", { d: "M11.95 18q.525 0 .888-.363.362-.362.362-.887t-.362-.887a1.2 1.2 0 0 0-.888-.363q-.525 0-.888.363a1.2 1.2 0 0 0-.362.887q0 .525.362.887.363.363.888.363m.15-10.3q.7 0 1.125.387.425.388.425 1.013 0 .424-.287.862a5 5 0 0 1-.813.913q-.75.65-1.1 1.25t-.35 1.2q0 .35.263.587A.904.904 0 0 0 12.6 13.9q.275-.25.35-.625.075-.425.338-.787.262-.363.862-.938.776-.725 1.088-1.325T15.55 8.9q0-1.275-.962-2.088Q13.625 6 12.1 6q-1.05 0-1.862.4a2.84 2.84 0 0 0-1.263 1.225 1 1 0 0 0-.125.637q.05.314.35.513a.97.97 0 0 0 .713.125 1 1 0 0 0 .637-.425q.274-.375.663-.575.387-.2.887-.2M12 22a9.7 9.7 0 0 1-3.875-.788 10.2 10.2 0 0 1-3.187-2.137 10 10 0 0 1-2.15-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10 10 0 0 1 2.15-3.175Q6.3 3.575 8.125 2.787A9.7 9.7 0 0 1 12 2q2.1 0 3.925.787A10.1 10.1 0 0 1 19.1 4.925q1.35 1.35 2.125 3.175A9.9 9.9 0 0 1 22 12a9.9 9.9 0 0 1-.775 3.9 9.9 9.9 0 0 1-2.125 3.175q-1.35 1.35-3.175 2.137Q14.1 22 12 22" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconHome.mjs
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
function n10({ size: t27 = q.base, viewBox: e12 = "0 0 24 24", ...r14 }) {
  return (0, import_jsx_runtime40.jsx)(h, { size: t27, viewBox: e12, "data-testid": "home", ...r14, children: (0, import_jsx_runtime40.jsx)("path", { d: "M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm0 2q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 19v-9q0-.476.213-.9.212-.425.587-.7l6-4.5a2.1 2.1 0 0 1 .575-.3q.3-.1.625-.1t.625.1.575.3l6 4.5q.375.275.588.7T20 10v9q0 .825-.587 1.413A1.93 1.93 0 0 1 18 21h-5v-6h-2v6z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconIndeterminateCheckBox.mjs
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
function f4({
  size: a32 = q.base,
  viewBox: o34 = "0 0 24 24",
  ...t27
}) {
  return (0, import_jsx_runtime41.jsx)(h, { size: a32, viewBox: o34, "data-testid": "indeterminate-check-box", ...t27, children: (0, import_jsx_runtime41.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm14 7a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1",
      clipRule: "evenodd"
    }
  ) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconInfo.mjs
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
function l7({ size: o34 = q.base, viewBox: n28 = "0 0 24 24", ...t27 }) {
  return (0, import_jsx_runtime42.jsx)(h, { size: o34, viewBox: n28, "data-testid": "info", ...t27, children: (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, { children: [
    (0, import_jsx_runtime42.jsx)("path", { d: "M13.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M11 16a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0z" }),
    (0, import_jsx_runtime42.jsx)(
      "path",
      {
        fillRule: "evenodd",
        d: "M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12m2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8",
        clipRule: "evenodd"
      }
    )
  ] }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconInstagram.mjs
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
function f5({ size: t27 = q.base, viewBox: m26 = "0 0 24 24", ...r14 }) {
  return (0, import_jsx_runtime43.jsx)(h, { size: t27, viewBox: m26, "data-testid": "instagram", ...r14, children: (0, import_jsx_runtime43.jsx)("path", { d: "M12.003 6.871a5.12 5.12 0 0 0-5.127 5.127 5.12 5.12 0 0 0 5.127 5.126 5.12 5.12 0 0 0 5.126-5.126 5.12 5.12 0 0 0-5.126-5.127m0 8.46a3.34 3.34 0 0 1-3.333-3.333 3.336 3.336 0 0 1 3.333-3.333 3.336 3.336 0 0 1 3.333 3.333 3.34 3.34 0 0 1-3.333 3.333m6.532-8.67c0 .665-.536 1.196-1.196 1.196a1.196 1.196 0 1 1 1.196-1.196m3.395 1.214c-.076-1.602-.442-3.02-1.615-4.19-1.169-1.169-2.588-1.534-4.19-1.615-1.65-.093-6.599-.093-8.25 0-1.597.076-3.016.442-4.19 1.611-1.173 1.169-1.534 2.588-1.614 4.19-.094 1.65-.094 6.599 0 8.25.076 1.601.441 3.02 1.615 4.19 1.173 1.168 2.588 1.534 4.19 1.614 1.65.094 6.599.094 8.25 0 1.601-.076 3.02-.442 4.189-1.615 1.169-1.169 1.535-2.588 1.615-4.19.094-1.65.094-6.594 0-8.245m-2.133 10.017a3.38 3.38 0 0 1-1.9 1.9c-1.316.523-4.44.402-5.894.402-1.455 0-4.583.116-5.894-.401a3.37 3.37 0 0 1-1.901-1.901c-.522-1.316-.402-4.44-.402-5.894 0-1.455-.116-4.582.402-5.894a3.37 3.37 0 0 1 1.9-1.901c1.317-.522 4.44-.402 5.895-.402s4.582-.116 5.894.402a3.37 3.37 0 0 1 1.9 1.9c.523 1.317.402 4.44.402 5.895s.12 4.582-.402 5.894" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconLanguage.mjs
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
function d3({ size: e12 = q.base, viewBox: h9 = "0 0 24 24", ...m26 }) {
  return (0, import_jsx_runtime44.jsx)(h, { size: e12, viewBox: h9, "data-testid": "language", ...m26, children: (0, import_jsx_runtime44.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M12.534 21.98a10.032 10.032 0 0 0 8.708-13.84 9.95 9.95 0 0 0-9.661-6.132 9.8 9.8 0 0 0-9.58 9.787 10.127 10.127 0 0 0 9.412 10.177q.143.03.289.016.127.006.257.008h.017q.187 0 .373-.007.093.005.185-.009M14.81 4.493a13.4 13.4 0 0 1 1.604 3.502h2.535a7.95 7.95 0 0 0-4.139-3.502m-2.805-.421c1.063 1.236 1.83 2.553 2.31 3.923h-4.62c.48-1.37 1.247-2.687 2.31-3.923m2.8 5.923h-5.6a11 11 0 0 0-.113 1.565q-.001 1.323.319 2.696h5.188a11.8 11.8 0 0 0 .319-2.697q0-.789-.112-1.564m-.84 6.261h-3.92a17.6 17.6 0 0 0 1.96 3.571 17.8 17.8 0 0 0 1.96-3.57m-6.6-2a13.7 13.7 0 0 1-.273-2.696q0-.79.095-1.565H4.214A7.8 7.8 0 0 0 4 11.801v.006a8.1 8.1 0 0 0 .358 2.45zm-2.079 2h2.624c.38 1.101.893 2.199 1.532 3.285a8.13 8.13 0 0 1-4.156-3.285m10.813 0h2.66a8.03 8.03 0 0 1-4.21 3.315 18.2 18.2 0 0 0 1.55-3.315m3.569-2h-3.022q.271-1.354.272-2.697 0-.79-.095-1.564h2.935a8 8 0 0 1 .243 1.965v.002a8 8 0 0 1-.333 2.294M9.233 4.441a13.4 13.4 0 0 0-1.637 3.554H4.995a7.8 7.8 0 0 1 4.238-3.554M12 2h.003v.086l-.005-.002V2z",
      clipRule: "evenodd"
    }
  ) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconLocalShipping.mjs
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
function n11({
  size: A6 = q.base,
  viewBox: o34 = "0 0 24 24",
  ...q4
}) {
  return (0, import_jsx_runtime45.jsx)(h, { size: A6, viewBox: o34, "data-testid": "local-shipping", ...q4, children: (0, import_jsx_runtime45.jsx)("path", { d: "M6 20a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 3 17q-.824 0-1.412-.587A1.93 1.93 0 0 1 1 15V6q0-.824.588-1.412A1.92 1.92 0 0 1 3 4h12q.825 0 1.413.588Q17 5.175 17 6v2h2.5q.25 0 .45.1t.35.3l2.5 3.325a.9.9 0 0 1 .15.275q.05.15.05.325V16q0 .424-.288.712A.97.97 0 0 1 22 17h-1q0 1.25-.875 2.125A2.9 2.9 0 0 1 18 20a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 15 17H9q0 1.25-.875 2.125A2.9 2.9 0 0 1 6 20m0-2a.97.97 0 0 0 .713-.288A.97.97 0 0 0 7 17a.97.97 0 0 0-.287-.712A.97.97 0 0 0 6 16a.97.97 0 0 0-.713.288A.97.97 0 0 0 5 17q0 .424.287.712Q5.575 18 6 18M3 6v9h.8q.425-.45.975-.725A2.7 2.7 0 0 1 6 14q.675 0 1.225.275T8.2 15H15V6zm15 12q.424 0 .712-.288A.97.97 0 0 0 19 17a.97.97 0 0 0-.288-.712A.97.97 0 0 0 18 16a.97.97 0 0 0-.712.288A.97.97 0 0 0 17 17q0 .424.288.712A.97.97 0 0 0 18 18m-1-5h4.25L19 10h-2z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconLocal_fire_department.mjs
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
function n12({
  size: a32 = q.base,
  viewBox: e12 = "0 0 24 24",
  ...q4
}) {
  return (0, import_jsx_runtime46.jsx)(h, { size: a32, viewBox: e12, "data-testid": "local_fire_department", ...q4, children: (0, import_jsx_runtime46.jsx)("path", { d: "M12.359 21.42q-3.35 0-5.675-2.325T4.359 13.42q0-2.824 1.675-5.425t4.6-4.55q.55-.375 1.137-.037.588.337.588 1.012v1.3q0 .85.587 1.425.588.576 1.438.575.425 0 .812-.187t.688-.538a.85.85 0 0 1 .512-.312.72.72 0 0 1 .588.137 7.94 7.94 0 0 1 2.475 2.875q.9 1.75.9 3.725 0 3.35-2.325 5.675t-5.675 2.325m-6-8q0 1.3.525 2.463t1.5 2.037a1 1 0 0 1-.025-.225v-.225q0-.8.3-1.5t.875-1.275l2.825-2.775 2.825 2.775q.575.575.875 1.275t.3 1.5v.225q0 .1-.025.225a6.1 6.1 0 0 0 1.5-2.037q.525-1.162.525-2.463 0-1.25-.463-2.362A6.1 6.1 0 0 0 16.56 9.07q-.5.326-1.05.488a4 4 0 0 1-1.125.162q-1.55 0-2.688-1.025a3.9 3.9 0 0 1-1.312-2.525q-1.95 1.65-2.988 3.513Q6.36 11.545 6.36 13.42m6 1.3-1.425 1.4a2 2 0 0 0-.425.625q-.15.35-.15.725 0 .8.587 1.375.588.576 1.413.575.824 0 1.412-.575.588-.574.588-1.375 0-.4-.15-.737-.15-.338-.425-.613z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconLocationOn.mjs
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
function l8({
  size: e12 = q.base,
  viewBox: n28 = "0 0 24 24",
  ...t27
}) {
  return (0, import_jsx_runtime47.jsx)(h, { size: e12, viewBox: n28, "data-testid": "location-on", ...t27, children: (0, import_jsx_runtime47.jsxs)(import_jsx_runtime47.Fragment, { children: [
    (0, import_jsx_runtime47.jsx)("path", { d: "M10 10c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2" }),
    (0, import_jsx_runtime47.jsx)(
      "path",
      {
        fillRule: "evenodd",
        d: "M4 10.2c0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2s-8 3.22-8 8.2m2 0C6 6.386 8.842 4 12 4s6 2.386 6 6.2c0 1.073-.416 2.424-1.51 4.097-.986 1.51-2.465 3.191-4.486 5.042-2.025-1.851-3.506-3.532-4.494-5.042C6.416 12.623 6 11.273 6 10.2",
        clipRule: "evenodd"
      }
    )
  ] }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconLocationOnFilled.mjs
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
function r9({
  size: e12 = q.base,
  viewBox: i16 = "0 0 24 24",
  ...n28
}) {
  return (0, import_jsx_runtime48.jsx)(h, { size: e12, viewBox: i16, "data-testid": "location-on-filled", ...n28, children: (0, import_jsx_runtime48.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2m0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2",
      clipRule: "evenodd"
    }
  ) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconLock.mjs
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
function m10({ size: t27 = q.base, viewBox: q4 = "0 0 24 24", ...r14 }) {
  return (0, import_jsx_runtime49.jsx)(h, { size: t27, viewBox: q4, "data-testid": "lock", ...r14, children: (0, import_jsx_runtime49.jsx)("path", { d: "M6 23q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 21V11q0-.825.588-1.413A1.93 1.93 0 0 1 6 9h1V7q0-2.075 1.463-3.538T12 2t3.538 1.462Q17 4.925 17 7v2h1q.825 0 1.413.587Q20 10.175 20 11v10q0 .825-.587 1.413A1.93 1.93 0 0 1 18 23zm6-5q.825 0 1.413-.587Q14 16.825 14 16t-.587-1.413A1.93 1.93 0 0 0 12 14q-.825 0-1.412.587A1.93 1.93 0 0 0 10 16q0 .825.588 1.413Q11.175 18 12 18M9 9h6V7q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 4q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 7z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconLockOpen.mjs
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
function A3({ size: t27 = q.base, viewBox: q4 = "0 0 24 24", ...e12 }) {
  return (0, import_jsx_runtime50.jsx)(h, { size: t27, viewBox: q4, "data-testid": "lock-open", ...e12, children: (0, import_jsx_runtime50.jsx)("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.413A1.93 1.93 0 0 1 6 8h9V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3a2.87 2.87 0 0 0-1.812.612A3 3 0 0 0 9.125 5.15q-.125.375-.387.612A.9.9 0 0 1 8.125 6q-.5 0-.8-.338a.81.81 0 0 1-.2-.762Q7.5 3.225 8.85 2.112T12 1q2.075 0 3.538 1.462Q17 3.925 17 6v2h1q.825 0 1.413.587Q20 9.175 20 10v10q0 .825-.587 1.413A1.93 1.93 0 0 1 18 22zm0-2h12V10H6zm6-3q.825 0 1.413-.587Q14 15.825 14 15t-.587-1.413A1.93 1.93 0 0 0 12 13q-.825 0-1.412.587A1.93 1.93 0 0 0 10 15q0 .825.588 1.413Q11.175 17 12 17" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconLogin.mjs
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
function l9({ size: o34 = q.base, viewBox: t27 = "0 0 24 24", ...r14 }) {
  return (0, import_jsx_runtime51.jsx)(h, { size: o34, viewBox: t27, "data-testid": "login", ...r14, children: (0, import_jsx_runtime51.jsx)("path", { d: "M9.325 16.275a1.1 1.1 0 0 1-.275-.738q0-.412.275-.687l1.85-1.85H4a.97.97 0 0 1-.712-.288A.97.97 0 0 1 3 12q0-.425.288-.713A.97.97 0 0 1 4 11h7.175l-1.85-1.85q-.3-.3-.3-.712 0-.413.3-.713.275-.3.688-.3t.687.275l3.6 3.6q.15.15.213.325.062.175.062.375t-.062.375a.9.9 0 0 1-.213.325l-3.6 3.6q-.3.3-.7.275a1 1 0 0 1-.675-.3M13 21a.97.97 0 0 1-.712-.288A.97.97 0 0 1 12 20q0-.424.288-.712A.97.97 0 0 1 13 19h6V5h-6a.97.97 0 0 1-.712-.288A.97.97 0 0 1 12 4q0-.425.288-.713A.97.97 0 0 1 13 3h6q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413A1.93 1.93 0 0 1 19 21z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconLogout.mjs
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
function l10({ size: t27 = q.base, viewBox: a32 = "0 0 24 24", ...q4 }) {
  return (0, import_jsx_runtime52.jsx)(h, { size: t27, viewBox: a32, "data-testid": "logout", ...q4, children: (0, import_jsx_runtime52.jsx)("path", { d: "M15.325 16.275a1.1 1.1 0 0 1-.275-.738q0-.412.275-.687l1.85-1.85H10a.97.97 0 0 1-.712-.288A.97.97 0 0 1 9 12q0-.425.288-.713A.97.97 0 0 1 10 11h7.175l-1.85-1.85q-.3-.3-.3-.712 0-.413.3-.713.275-.3.688-.3t.687.275l3.6 3.6q.15.15.213.325.062.175.062.375t-.062.375a.9.9 0 0 1-.213.325l-3.6 3.6q-.325.325-.712.287a1.05 1.05 0 0 1-.663-.312M5 21q-.825 0-1.413-.587A1.93 1.93 0 0 1 3 19V5q0-.825.587-1.413A1.93 1.93 0 0 1 5 3h6a.97.97 0 0 1 .713.287A.97.97 0 0 1 12 4q0 .424-.287.712A.97.97 0 0 1 11 5H5v14h6q.425 0 .713.288A.97.97 0 0 1 12 20q0 .424-.287.712A.97.97 0 0 1 11 21z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconMenu.mjs
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
function c7({ size: o34 = q.base, viewBox: t27 = "0 0 24 24", ...e12 }) {
  return (0, import_jsx_runtime53.jsx)(h, { size: o34, viewBox: t27, "data-testid": "menu", ...e12, children: (0, import_jsx_runtime53.jsx)("path", { d: "M4 18a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm0-5a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zM3 7a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconMoreHoriz.mjs
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
function c8({ size: r14 = q.base, viewBox: t27 = "0 0 24 24", ...a32 }) {
  return (0, import_jsx_runtime54.jsx)(h, { size: r14, viewBox: t27, "data-testid": "more-horiz", ...a32, children: (0, import_jsx_runtime54.jsx)("path", { d: "M12 14a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 14m4-2a2 2 0 1 0 4.001-.001A2 2 0 0 0 16 12m-8 0a2 2 0 1 0-4.001.001A2 2 0 0 0 8 12" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconMoreVert.mjs
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
function c9({ size: o34 = q.base, viewBox: t27 = "0 0 24 24", ...e12 }) {
  return (0, import_jsx_runtime55.jsx)(h, { size: o34, viewBox: t27, "data-testid": "more-vert", ...e12, children: (0, import_jsx_runtime55.jsx)("path", { d: "M14 12a2 2 0 1 1-4.001-.001A2 2 0 0 1 14 12m-2-4a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 8m0 8a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 16" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconOpenInNew.mjs
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
function c10({ size: e12 = q.base, viewBox: n28 = "0 0 24 24", ...o34 }) {
  return (0, import_jsx_runtime56.jsx)(h, { size: e12, viewBox: n28, "data-testid": "open-in-new", ...o34, children: (0, import_jsx_runtime56.jsx)("path", { d: "M19 19H5V5h6a1 1 0 1 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-6a1 1 0 1 0-2 0zM15 3a1 1 0 1 0 0 2h2.59l-9.125 9.125a.997.997 0 0 0 1.41 1.41L19 6.41V9a1 1 0 1 0 2 0V3z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconOpenSource.mjs
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
function p4({
  size: c19 = q.base,
  viewBox: e12 = "0 0 24 24",
  ...r14
}) {
  return (0, import_jsx_runtime57.jsx)(h, { size: c19, viewBox: e12, "data-testid": "open-source", ...r14, children: (0, import_jsx_runtime57.jsx)("path", { d: "M12 2C5.913 2 1 6.913 1 13c0 3.887 1.98 7.407 5.28 9.46.073.073.22.073.293.073.074 0 .147-.073.22-.146l3.447-5.647a.387.387 0 0 0-.147-.513c-1.1-.66-1.76-1.834-1.76-3.154A3.63 3.63 0 0 1 12 9.407a3.63 3.63 0 0 1 3.667 3.666c0 1.394-.807 2.64-1.98 3.3l-.22.22c0 .074 0 .22.073.294l3.447 5.646c.073.147.22.147.293.147s.147 0 .147-.073C20.873 20.627 23 16.96 23 13.073 23 6.987 18.087 2 12 2" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconPackage.mjs
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
function i5({ size: o34 = q.base, viewBox: t27 = "0 0 24 24", ...e12 }) {
  return (0, import_jsx_runtime58.jsx)(h, { size: o34, viewBox: t27, "data-testid": "package", ...e12, children: (0, import_jsx_runtime58.jsx)("path", { d: "m10 9.75 1.325-.65a1.6 1.6 0 0 1 1.35 0L14 9.75V5h-4zM8 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 7 16a.97.97 0 0 1 .287-.713A.97.97 0 0 1 8 15h3a.97.97 0 0 1 .713.287A.97.97 0 0 1 12 16q0 .424-.287.712A.97.97 0 0 1 11 17zm-3 4q-.825 0-1.413-.587A1.93 1.93 0 0 1 3 19V5q0-.825.587-1.413A1.93 1.93 0 0 1 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413A1.93 1.93 0 0 1 19 21zm0-2h14V5h-3v6.375q0 .574-.475.862a.95.95 0 0 1-.975.038L12 11l-2.55 1.275a.95.95 0 0 1-.975-.038Q8 11.95 8 11.375V5H5z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconPercent.mjs
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
function f6({ size: q4 = q.base, viewBox: a32 = "0 0 24 24", ...e12 }) {
  return (0, import_jsx_runtime59.jsx)(h, { size: q4, viewBox: a32, "data-testid": "percent", ...e12, children: (0, import_jsx_runtime59.jsx)("path", { d: "M8 11a3.37 3.37 0 0 1-2.475-1.025A3.37 3.37 0 0 1 4.5 7.5q0-1.45 1.025-2.475A3.37 3.37 0 0 1 8 4q1.45 0 2.475 1.025A3.37 3.37 0 0 1 11.5 7.5q0 1.45-1.025 2.475A3.37 3.37 0 0 1 8 11m0-2q.624 0 1.063-.437Q9.5 8.124 9.5 7.5t-.437-1.062A1.45 1.45 0 0 0 8 6q-.625 0-1.062.438A1.45 1.45 0 0 0 6.5 7.5q0 .624.438 1.063Q7.374 9 8 9m9 11a3.37 3.37 0 0 1-2.475-1.025A3.37 3.37 0 0 1 13.5 16.5q0-1.45 1.025-2.475A3.37 3.37 0 0 1 17 13q1.45 0 2.475 1.025A3.37 3.37 0 0 1 20.5 16.5q0 1.45-1.025 2.475A3.37 3.37 0 0 1 17 20m0-2q.625 0 1.063-.437.437-.438.437-1.063t-.437-1.062A1.45 1.45 0 0 0 17 15q-.625 0-1.062.438A1.45 1.45 0 0 0 15.5 16.5q0 .625.438 1.063Q16.375 18 17 18M5.2 19.3a.95.95 0 0 1-.275-.7q0-.425.275-.7L18.4 4.7a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L6.6 19.3a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconPerson.mjs
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
function i6({ size: o34 = q.base, viewBox: r14 = "0 0 24 24", ...a32 }) {
  return (0, import_jsx_runtime60.jsx)(h, { size: o34, viewBox: r14, "data-testid": "person", ...a32, children: (0, import_jsx_runtime60.jsx)("path", { d: "M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m6 8H6q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18v-.8q0-.85.438-1.563A2.9 2.9 0 0 1 5.6 14.55a15 15 0 0 1 3.15-1.163A13.8 13.8 0 0 1 12 13q1.65 0 3.25.387 1.6.388 3.15 1.163.724.375 1.162 1.087T20 17.2v.8q0 .825-.587 1.413A1.93 1.93 0 0 1 18 20M6 18h12v-.8a.94.94 0 0 0-.137-.5 1 1 0 0 0-.363-.35q-1.35-.675-2.725-1.013a11.6 11.6 0 0 0-5.55 0Q7.85 15.675 6.5 16.35a.97.97 0 0 0-.5.85zm6-8q.825 0 1.413-.588Q14 8.825 14 8q0-.824-.587-1.412A1.93 1.93 0 0 0 12 6q-.825 0-1.412.588A1.92 1.92 0 0 0 10 8q0 .825.588 1.412Q11.175 10 12 10" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconPinterest.mjs
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
function c11({ size: e12 = q.base, viewBox: r14 = "0 0 24 24", ...o34 }) {
  return (0, import_jsx_runtime61.jsx)(h, { size: e12, viewBox: r14, "data-testid": "pinterest", ...o34, children: (0, import_jsx_runtime61.jsx)("path", { d: "M12.175 2C8.063 2 4 4.74 4 9.177c0 2.82 1.587 4.424 2.549 4.424.396 0 .625-1.106.625-1.419 0-.373-.95-1.166-.95-2.717 0-3.221 2.452-5.505 5.626-5.505 2.729 0 4.749 1.55 4.749 4.4 0 2.127-.854 6.118-3.619 6.118-.998 0-1.851-.721-1.851-1.755 0-1.515 1.058-2.981 1.058-4.544 0-2.653-3.763-2.172-3.763 1.034 0 .673.084 1.418.385 2.032-.553 2.38-1.683 5.926-1.683 8.378 0 .758.108 1.503.18 2.26.136.153.068.137.276.06 2.02-2.764 1.948-3.305 2.862-6.924.492.938 1.767 1.443 2.776 1.443 4.256 0 6.167-4.148 6.167-7.886C19.388 4.596 15.95 2 12.176 2" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconPublishedWithChanges.mjs
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
function n13({
  size: q4 = q.base,
  viewBox: t27 = "0 0 24 24",
  ...e12
}) {
  return (0, import_jsx_runtime62.jsx)(h, { size: q4, viewBox: t27, "data-testid": "published-with-changes", ...e12, children: (0, import_jsx_runtime62.jsx)("path", { d: "M14.175 2.225q3.375.75 5.6 3.45T22 12q0 2.275-.913 4.2a10 10 0 0 1-2.487 3.3H20q.424 0 .712.288A.97.97 0 0 1 21 20.5q0 .425-.288.712A.97.97 0 0 1 20 21.5h-4a.97.97 0 0 1-.712-.288A.97.97 0 0 1 15 20.5v-4q0-.424.288-.713A.97.97 0 0 1 16 15.5q.424 0 .712.287.288.288.288.713v1.725a8.4 8.4 0 0 0 2.188-2.725Q20 13.9 20 12q0-2.875-1.762-5.013T13.8 4.225a1 1 0 0 1-.575-.35A.96.96 0 0 1 13 3.25q0-.5.35-.825a.83.83 0 0 1 .825-.2m-4.35 19.55q-3.375-.75-5.6-3.45T2 12q0-2.275.913-4.2A10 10 0 0 1 5.4 4.5H4a.97.97 0 0 1-.712-.288A.97.97 0 0 1 3 3.5q0-.424.288-.713A.97.97 0 0 1 4 2.5h4a.97.97 0 0 1 .713.287A.97.97 0 0 1 9 3.5v4a.97.97 0 0 1-.287.713A.97.97 0 0 1 8 8.5a.97.97 0 0 1-.713-.287A.97.97 0 0 1 7 7.5V5.775a8.1 8.1 0 0 0-2.188 2.713Q4 10.101 4 12q0 2.876 1.763 5.012 1.762 2.138 4.437 2.763a1 1 0 0 1 .575.35.96.96 0 0 1 .225.625q0 .5-.35.825a.83.83 0 0 1-.825.2m.75-5.6q-.2 0-.375-.062a.9.9 0 0 1-.325-.213L7.05 13.05a.98.98 0 0 1-.287-.688.93.93 0 0 1 .287-.712.95.95 0 0 1 .7-.275q.425 0 .7.275l2.125 2.125L15.55 8.8q.3-.3.7-.288t.7.313q.275.3.288.7a.92.92 0 0 1-.288.7L11.275 15.9q-.15.15-.325.213a1.1 1.1 0 0 1-.375.062" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconRadioButtonChecked.mjs
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
function f7({
  size: o34 = q.base,
  viewBox: a32 = "0 0 24 24",
  ...e12
}) {
  return (0, import_jsx_runtime63.jsx)(h, { size: o34, viewBox: a32, "data-testid": "radio-button-checked", ...e12, children: (0, import_jsx_runtime63.jsx)("path", { d: "M12 17q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7T8.463 8.462Q7 9.925 7 12t1.463 3.537T12 17m0 5a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.138A9.7 9.7 0 0 1 12 2q2.075 0 3.9.787a10.1 10.1 0 0 1 3.175 2.138q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconRadioButtonUnchecked.mjs
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
function f8({
  size: t27 = q.base,
  viewBox: e12 = "0 0 24 24",
  ...n28
}) {
  return (0, import_jsx_runtime64.jsx)(h, { size: t27, viewBox: e12, "data-testid": "radio-button-unchecked", ...n28, children: (0, import_jsx_runtime64.jsx)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconReact.mjs
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
function i7({ size: a32 = q.base, viewBox: e12 = "0 0 24 24", ...q4 }) {
  return (0, import_jsx_runtime65.jsx)(h, { size: a32, viewBox: e12, "data-testid": "react", ...q4, children: (0, import_jsx_runtime65.jsxs)(import_jsx_runtime65.Fragment, { children: [
    (0, import_jsx_runtime65.jsx)("path", { d: "M13.96 11.952c0 1.099-.877 1.99-1.96 1.99s-1.96-.891-1.96-1.99.877-1.989 1.96-1.989 1.96.89 1.96 1.99" }),
    (0, import_jsx_runtime65.jsx)(
      "path",
      {
        fillRule: "evenodd",
        d: "M12 4.467a15 15 0 0 0-.958-.868c-.818-.674-1.63-1.17-2.388-1.418-.758-.25-1.516-.266-2.154.108S5.497 3.337 5.33 4.127c-.166.79-.149 1.752.018 2.807q.097.613.262 1.276-.649.186-1.22.407c-.985.382-1.814.847-2.405 1.389-.592.542-.985 1.199-.985 1.946 0 .748.393 1.405.985 1.947.591.542 1.42 1.007 2.404 1.388q.573.222 1.22.408-.165.661-.261 1.276c-.167 1.055-.184 2.016-.017 2.807s.53 1.464 1.169 1.838c.638.374 1.396.357 2.154.108s1.57-.744 2.388-1.418q.475-.392.958-.868.483.476.958.868c.817.674 1.63 1.17 2.388 1.418.758.249 1.516.266 2.154-.108s1.003-1.048 1.17-1.838c.166-.79.149-1.752-.018-2.807a15 15 0 0 0-.262-1.276q.649-.186 1.22-.408c.985-.38 1.814-.847 2.405-1.388.592-.542.985-1.199.985-1.947 0-.747-.393-1.404-.985-1.946-.591-.542-1.42-1.007-2.404-1.389a14 14 0 0 0-1.22-.407q.165-.663.261-1.276c.167-1.055.184-2.016.017-2.807S18.14 2.663 17.5 2.29c-.638-.374-1.396-.357-2.154-.108s-1.57.744-2.388 1.418q-.475.391-.958.868M8.36 3.104c-.607-.2-1.06-.164-1.382.025s-.579.569-.712 1.201-.13 1.464.026 2.45q.09.57.245 1.191a23 23 0 0 1 2.934-.463 23 23 0 0 1 1.862-2.346q-.453-.446-.895-.81c-.764-.63-1.472-1.05-2.078-1.248M12 5.86c-.428.472-.858.995-1.281 1.561a28 28 0 0 1 2.562 0A21 21 0 0 0 12 5.86m-3.228 2.7a21 21 0 0 0-1.974.345c.19.613.421 1.251.693 1.906a29 29 0 0 1 1.281-2.25M8 11.952a27.4 27.4 0 0 1 2-3.515 26.5 26.5 0 0 1 4.002 0 27 27 0 0 1 2 3.515 27.4 27.4 0 0 1-2 3.516 26.5 26.5 0 0 1-4.002 0 27 27 0 0 1-2-3.516m-1.058 0A23 23 0 0 1 5.87 9.144q-.607.174-1.138.38c-.92.356-1.632.769-2.105 1.202-.474.434-.67.849-.67 1.226 0 .378.196.793.67 1.226.473.434 1.185.846 2.105 1.203q.53.206 1.138.38a24 24 0 0 1 1.072-2.809M6.798 15c.19-.613.421-1.252.693-1.907a29 29 0 0 0 1.281 2.251A21 21 0 0 1 6.798 15m-.261.935q-.155.62-.245 1.19c-.156.987-.16 1.818-.026 2.45.133.633.39 1.013.712 1.202.323.188.775.224 1.382.025.606-.2 1.314-.618 2.079-1.248q.44-.364.894-.81a23 23 0 0 1-1.862-2.347 23 23 0 0 1-2.934-.462m6.13 2.809q.453.446.895.81c.764.63 1.472 1.049 2.078 1.248.607.199 1.06.163 1.382-.025.322-.19.579-.569.712-1.201s.13-1.464-.026-2.45q-.09-.57-.245-1.191a23 23 0 0 1-2.934.462 23 23 0 0 1-1.862 2.346m.614-2.26c-.423.567-.853 1.09-1.281 1.562a21 21 0 0 1-1.281-1.562 28 28 0 0 0 2.562 0m1.947-1.14A21 21 0 0 0 17.202 15a22 22 0 0 0-.693-1.907 29 29 0 0 1-1.281 2.251m1.83-3.39c.439.964.797 1.91 1.073 2.808q.607-.174 1.138-.38c.92-.357 1.632-.77 2.105-1.203s.67-.848.67-1.226c0-.377-.196-.792-.67-1.226-.473-.433-1.184-.846-2.105-1.202a13 13 0 0 0-1.138-.38 23 23 0 0 1-1.072 2.808m.405-3.982a23 23 0 0 0-2.934-.463 23 23 0 0 0-1.862-2.346q.453-.446.895-.81c.764-.63 1.472-1.049 2.078-1.248.607-.2 1.06-.164 1.382.025s.579.569.712 1.201.13 1.464-.026 2.45q-.09.57-.245 1.191m-.261.935a22 22 0 0 1-.693 1.906 29 29 0 0 0-1.281-2.25c.695.088 1.356.204 1.974.344",
        clipRule: "evenodd"
      }
    )
  ] }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconRemove.mjs
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
function c13({ size: e12 = q.base, viewBox: r14 = "0 0 24 24", ...t27 }) {
  return (0, import_jsx_runtime66.jsx)(h, { size: e12, viewBox: r14, "data-testid": "remove", ...t27, children: (0, import_jsx_runtime66.jsx)("path", { d: "M6 13a.97.97 0 0 1-.713-.288A.97.97 0 0 1 5 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 11h12q.424 0 .712.287.288.288.288.713 0 .424-.288.712A.97.97 0 0 1 18 13z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconRemoveShoppingCart.mjs
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
function p5({
  size: o34 = q.base,
  viewBox: t27 = "0 0 24 24",
  ...m26
}) {
  return (0, import_jsx_runtime67.jsx)(h, { size: o34, viewBox: t27, "data-testid": "remove-shopping-cart", ...m26, children: (0, import_jsx_runtime67.jsx)("path", { d: "m15.823 12.995-2-2h1.725l2.75-5H8.823l-2-2h13.125q.575 0 .887.488.313.487.013 1.062l-3.55 6.4a2.07 2.07 0 0 1-.712.775q-.438.275-.763.275m-8.825 9q-.824 0-1.412-.588a1.93 1.93 0 0 1-.588-1.412q0-.824.588-1.413a1.93 1.93 0 0 1 1.412-.587q.824 0 1.413.587.587.588.587 1.413t-.587 1.412a1.93 1.93 0 0 1-1.413.588m12.8.6-5.65-5.6h-6.55q-1.1 0-1.675-.937-.575-.939-.075-1.963l1.05-2.15-1.8-4.05L1.373 4.17a.9.9 0 0 1-.262-.687.98.98 0 0 1 .287-.688.95.95 0 0 1 .7-.275q.425 0 .7.275L21.223 21.22q.274.275.262.688a.98.98 0 0 1-.287.687.93.93 0 0 1-.687.275q-.413 0-.713-.275m-7.65-7.6-2-2h-1.55l-1 2zm4.85 7q-.824 0-1.413-.588a1.93 1.93 0 0 1-.587-1.412q0-.824.588-1.413a1.93 1.93 0 0 1 1.412-.587q.825 0 1.412.587.588.588.588 1.413t-.588 1.412a1.93 1.93 0 0 1-1.412.588" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconSafetyCheck.mjs
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
function n14({
  size: e12 = q.base,
  viewBox: o34 = "0 0 24 24",
  ...f17
}) {
  return (0, import_jsx_runtime68.jsx)(h, { size: e12, viewBox: o34, "data-testid": "safety-check", ...f17, children: (0, import_jsx_runtime68.jsx)("path", { d: "M12 16.5q2.075 0 3.538-1.463Q17 13.575 17 11.5t-1.462-3.538Q14.075 6.5 12 6.5T8.463 7.962Q7 9.425 7 11.5t1.463 3.537T12 16.5m1.65-2.65L11.5 11.7V8.5h1v2.8l1.85 1.85zM12 21.5q-3.475-.875-5.737-3.988T4 10.6V4.5l8-3 8 3v6.1q0 3.8-2.262 6.912T12 21.5m0-2.1q2.6-.825 4.3-3.3t1.7-5.5V5.875l-6-2.25-6 2.25V10.6q0 3.025 1.7 5.5t4.3 3.3" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconSchedule.mjs
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
function i8({ size: e12 = q.base, viewBox: t27 = "0 0 24 24", ...o34 }) {
  return (0, import_jsx_runtime69.jsx)(h, { size: e12, viewBox: t27, "data-testid": "schedule", ...o34, children: (0, import_jsx_runtime69.jsx)("path", { d: "M14.625 16.025a.92.92 0 0 0 .675.275q.4 0 .7-.3a.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7l-3-3V7.975a.93.93 0 0 0-.287-.7A1 1 0 0 0 12 7a.97.97 0 0 0-.712.287A.97.97 0 0 0 11 8v3.975a1.03 1.03 0 0 0 .3.725zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.138A9.7 9.7 0 0 1 12 2q2.075 0 3.9.787a10.1 10.1 0 0 1 3.175 2.138q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.325 0 5.663-2.337T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.338 6.337 4 8.675 4 12t2.338 5.663Q8.675 20 12 20" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconSearch.mjs
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
function n15({ size: a32 = q.base, viewBox: r14 = "0 0 24 24", ...o34 }) {
  return (0, import_jsx_runtime70.jsx)(h, { size: a32, viewBox: r14, "data-testid": "search", ...o34, children: (0, import_jsx_runtime70.jsx)("path", { d: "m18.9 20.3-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.887T3 9.5t1.888-4.613Q6.775 3 9.5 3t4.613 1.887T16 9.5a6.1 6.1 0 0 1-1.3 3.8l5.625 5.625a.92.92 0 0 1 .275.675q0 .4-.3.7a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275M9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5t-1.312-3.188Q11.375 5 9.5 5T6.312 6.312 5 9.5t1.312 3.188Q7.625 14 9.5 14" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconSell.mjs
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
function q3({ size: o34 = q.base, viewBox: e12 = "0 0 24 24", ...r14 }) {
  return (0, import_jsx_runtime71.jsx)(h, { size: o34, viewBox: e12, "data-testid": "sell", ...r14, children: (0, import_jsx_runtime71.jsx)("path", { d: "M14.25 21.4q-.575.575-1.425.575T11.4 21.4l-8.8-8.8a2.07 2.07 0 0 1-.6-1.45V4q0-.825.588-1.413A1.93 1.93 0 0 1 4 2h7.15q.425 0 .8.162.375.163.65.438l8.8 8.825q.575.575.575 1.412a1.92 1.92 0 0 1-.575 1.413zM6.5 8q.625 0 1.062-.438Q8 7.125 8 6.5t-.438-1.062A1.44 1.44 0 0 0 6.5 5q-.625 0-1.062.438A1.44 1.44 0 0 0 5 6.5q0 .625.438 1.062Q5.875 8 6.5 8" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconShare.mjs
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
function A4({ size: t27 = q.base, viewBox: r14 = "0 0 24 24", ...o34 }) {
  return (0, import_jsx_runtime72.jsx)(h, { size: t27, viewBox: r14, "data-testid": "share", ...o34, children: (0, import_jsx_runtime72.jsx)("path", { d: "M18 22a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 15 19q0-.175.025-.363.025-.187.075-.337l-7.05-4.1q-.425.375-.95.588T6 15a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 3 12q0-1.25.875-2.125A2.9 2.9 0 0 1 6 9q.575 0 1.1.213.525.212.95.587l7.05-4.1a2 2 0 0 1-.075-.338A3 3 0 0 1 15 5q0-1.25.875-2.125A2.9 2.9 0 0 1 18 2q1.25 0 2.125.875T21 5t-.875 2.125A2.9 2.9 0 0 1 18 8q-.575 0-1.1-.213a3.3 3.3 0 0 1-.95-.587L8.9 11.3q.05.15.075.337a2.7 2.7 0 0 1 0 .726 2 2 0 0 1-.075.337l7.05 4.1q.425-.375.95-.588T18 16q1.25 0 2.125.875T21 19t-.875 2.125A2.9 2.9 0 0 1 18 22" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconShoppingCart.mjs
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
function e7({
  size: o34 = q.base,
  viewBox: q4 = "0 0 24 24",
  ...r14
}) {
  return (0, import_jsx_runtime73.jsx)(h, { size: o34, viewBox: q4, "data-testid": "shopping-cart", ...r14, children: (0, import_jsx_runtime73.jsx)("path", { d: "M7 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 20q0-.824.588-1.413A1.93 1.93 0 0 1 7 18q.824 0 1.412.587Q9 19.176 9 20t-.588 1.413A1.93 1.93 0 0 1 7 22m10 0q-.825 0-1.412-.587A1.93 1.93 0 0 1 15 20q0-.824.588-1.413A1.93 1.93 0 0 1 17 18q.824 0 1.413.587Q19 19.176 19 20t-.587 1.413A1.93 1.93 0 0 1 17 22M6.15 6l2.4 5h7l2.75-5zM7 17q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1.975a.93.93 0 0 1-.7-.288A1 1 0 0 1 1 3q0-.424.288-.712A.97.97 0 0 1 2 2h1.625q.274 0 .525.15.25.15.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4a2.03 2.03 0 0 1-.725.775q-.45.275-1.025.275H8.1L7 15h11.025q.425 0 .7.287.275.288.275.713 0 .424-.288.712A.97.97 0 0 1 18 17z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconShoppingCartCheckout.mjs
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
function i9({
  size: a32 = q.base,
  viewBox: q4 = "0 0 24 24",
  ...o34
}) {
  return (0, import_jsx_runtime74.jsx)(h, { size: a32, viewBox: q4, "data-testid": "shopping-cart-checkout", ...o34, children: (0, import_jsx_runtime74.jsx)("path", { d: "M7 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 20q0-.824.588-1.413A1.93 1.93 0 0 1 7 18q.824 0 1.412.587Q9 19.176 9 20t-.588 1.413A1.93 1.93 0 0 1 7 22m10 0q-.825 0-1.412-.587A1.93 1.93 0 0 1 15 20q0-.824.588-1.413A1.93 1.93 0 0 1 17 18q.824 0 1.413.587Q19 19.176 19 20t-.587 1.413A1.93 1.93 0 0 1 17 22M11.3 9.3a.95.95 0 0 1-.275-.7q0-.425.275-.7l.875-.9H9a.97.97 0 0 1-.713-.287A.97.97 0 0 1 8 6q0-.424.287-.713A.97.97 0 0 1 9 5h3.175l-.9-.9a.92.92 0 0 1-.287-.7Q11 3 11.3 2.7q.3-.275.7-.288t.7.288l2.6 2.6q.15.15.212.325.063.175.063.375t-.062.375a.9.9 0 0 1-.213.325l-2.6 2.6a.98.98 0 0 1-.687.287.93.93 0 0 1-.713-.287M7 17q-1.15 0-1.737-.988-.588-.987-.013-1.962L6.6 11.6 3 4H2a.97.97 0 0 1-.712-.288A.97.97 0 0 1 1 3q0-.424.288-.712A.97.97 0 0 1 2 2h1.65q.275 0 .525.15t.375.425L8.525 11h7.025l3.6-6.5A.97.97 0 0 1 20 4q.574 0 .863.487a.94.94 0 0 1 .012.988L17.3 11.95q-.275.5-.738.775A1.95 1.95 0 0 1 15.55 13H8.1L7 15h11q.424 0 .712.287.288.288.288.713 0 .424-.288.712A.97.97 0 0 1 18 17z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconSort.mjs
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
function s3({ size: o34 = q.base, viewBox: t27 = "0 0 24 24", ...r14 }) {
  return (0, import_jsx_runtime75.jsx)(h, { size: o34, viewBox: t27, "data-testid": "sort", ...r14, children: (0, import_jsx_runtime75.jsx)("path", { d: "M4 18a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2zM3 7a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 6a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconStar.mjs
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
function l11({ size: a32 = q.base, viewBox: r14 = "0 0 24 24", ...o34 }) {
  return (0, import_jsx_runtime76.jsx)(h, { size: a32, viewBox: r14, "data-testid": "star", ...o34, children: (0, import_jsx_runtime76.jsx)("path", { d: "m8.85 17.825 3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4-1.45 3.375-3.65.325 2.775 2.425zm3.15.45-4.15 2.5a.9.9 0 0 1-.575.15.97.97 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.88.88 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.96.96 0 0 1-.312-.513 1 1 0 0 1 .037-.562 1.1 1.1 0 0 1 .3-.45q.2-.176.55-.225l4.85-.425 1.875-4.45q.125-.3.388-.45t.537-.15.538.15q.262.15.387.45l1.875 4.45 4.85.425q.35.05.55.225t.3.45.038.562a.96.96 0 0 1-.313.513l-3.675 3.175 1.1 4.725a.88.88 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.97.97 0 0 1-.525.2.9.9 0 0 1-.575-.15z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconStarFilled.mjs
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
function m12({
  size: a32 = q.base,
  viewBox: r14 = "0 0 24 24",
  ...o34
}) {
  return (0, import_jsx_runtime77.jsx)(h, { size: a32, viewBox: r14, "data-testid": "star-filled", ...o34, children: (0, import_jsx_runtime77.jsx)("path", { d: "m12 18.275-4.15 2.5a.9.9 0 0 1-.575.15.97.97 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.88.88 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.96.96 0 0 1-.312-.513 1 1 0 0 1 .037-.562 1.1 1.1 0 0 1 .3-.45q.2-.176.55-.225l4.85-.425 1.875-4.45q.125-.3.388-.45t.537-.15.538.15q.262.15.387.45l1.875 4.45 4.85.425q.35.05.55.225t.3.45.038.562a.96.96 0 0 1-.313.513l-3.675 3.175 1.1 4.725a.88.88 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.97.97 0 0 1-.525.2.9.9 0 0 1-.575-.15z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconStarHalf.mjs
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
function n16({ size: t27 = q.base, viewBox: r14 = "0 0 24 24", ...o34 }) {
  return (0, import_jsx_runtime78.jsx)(h, { size: t27, viewBox: r14, "data-testid": "star-half", ...o34, children: (0, import_jsx_runtime78.jsx)("path", { d: "M12 8.125v7.8l3.15 1.925-.825-3.6 2.775-2.4-3.65-.325zm0 10.15-4.15 2.5a.9.9 0 0 1-.575.15.97.97 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.88.88 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.96.96 0 0 1-.312-.513 1 1 0 0 1 .037-.562 1.1 1.1 0 0 1 .3-.45q.2-.176.55-.225l4.85-.425 1.875-4.45q.125-.3.388-.45t.537-.15.538.15q.262.15.387.45l1.875 4.45 4.85.425q.35.05.55.225t.3.45.038.562a.96.96 0 0 1-.313.513l-3.675 3.175 1.1 4.725a.88.88 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.97.97 0 0 1-.525.2.9.9 0 0 1-.575-.15z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconThumbDown.mjs
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
function i10({ size: t27 = q.base, viewBox: r14 = "0 0 24 24", ...h9 }) {
  return (0, import_jsx_runtime79.jsx)(h, { size: t27, viewBox: r14, "data-testid": "thumb-down", ...h9, children: (0, import_jsx_runtime79.jsx)("path", { d: "M3 16q-.8 0-1.4-.6T1 14v-2q0-.175.05-.375t.1-.375l3-7.05q.225-.5.75-.85T6 3h11v13l-6 5.95q-.375.375-.887.437a1.65 1.65 0 0 1-.988-.187 1.58 1.58 0 0 1-.7-.7q-.225-.45-.1-.925L9.45 16zm12-.85V5H6l-3 7v2h9l-1.35 5.5zM20 3q.825 0 1.413.587Q22 4.175 22 5v9q0 .825-.587 1.412A1.93 1.93 0 0 1 20 16h-3v-2h3V5h-3V3z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconThumbUp.mjs
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
function n17({ size: o34 = q.base, viewBox: r14 = "0 0 24 24", ...e12 }) {
  return (0, import_jsx_runtime80.jsx)(h, { size: o34, viewBox: r14, "data-testid": "thumb-up", ...e12, children: (0, import_jsx_runtime80.jsx)("path", { d: "M7 22V9l6-5.95q.375-.375.887-.438.513-.061.988.188.475.25.7.7t.1.925L14.55 9H21q.8 0 1.4.6T23 11v2q0 .176-.05.375-.05.2-.1.375l-3 7.05q-.225.5-.75.85T18 22zM9 9.85V20h9l3-7v-2h-9l1.35-5.5zM4 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 20v-9q0-.824.588-1.413A1.93 1.93 0 0 1 4 9h3v2H4v9h3v2z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconTune.mjs
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
function n18({ size: a32 = q.base, viewBox: q4 = "0 0 24 24", ...t27 }) {
  return (0, import_jsx_runtime81.jsx)(h, { size: a32, viewBox: q4, "data-testid": "tune", ...t27, children: (0, import_jsx_runtime81.jsx)("path", { d: "M4 19a.97.97 0 0 1-.712-.288A.97.97 0 0 1 3 18q0-.424.288-.712A.97.97 0 0 1 4 17h4q.425 0 .713.288A.97.97 0 0 1 9 18q0 .424-.287.712A.97.97 0 0 1 8 19zM4 7a.97.97 0 0 1-.712-.287A.97.97 0 0 1 3 6q0-.425.288-.713A.97.97 0 0 1 4 5h8a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 6a.97.97 0 0 1-.287.713A.97.97 0 0 1 12 7zm8 14a.97.97 0 0 1-.712-.288A.97.97 0 0 1 11 20v-4q0-.425.288-.713A.97.97 0 0 1 12 15a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 16v1h7q.424 0 .712.288A.97.97 0 0 1 21 18q0 .424-.288.712A.97.97 0 0 1 20 19h-7v1q0 .424-.287.712A.97.97 0 0 1 12 21m-4-6a.97.97 0 0 1-.713-.288A.97.97 0 0 1 7 14v-1H4a.97.97 0 0 1-.712-.288A.97.97 0 0 1 3 12q0-.425.288-.713A.97.97 0 0 1 4 11h3v-1a.97.97 0 0 1 .287-.713A.97.97 0 0 1 8 9a.97.97 0 0 1 .713.287A.97.97 0 0 1 9 10v4q0 .424-.287.712A.97.97 0 0 1 8 15m4-2a.97.97 0 0 1-.712-.288A.97.97 0 0 1 11 12q0-.425.288-.713A.97.97 0 0 1 12 11h8q.424 0 .712.287.288.288.288.713 0 .424-.288.712A.97.97 0 0 1 20 13zm4-4a.97.97 0 0 1-.712-.288A.97.97 0 0 1 15 8V4q0-.425.288-.713A.97.97 0 0 1 16 3q.424 0 .712.287Q17 3.575 17 4v1h3q.424 0 .712.287Q21 5.575 21 6a.97.97 0 0 1-.288.713A.97.97 0 0 1 20 7h-3v1q0 .424-.288.712A.97.97 0 0 1 16 9" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconTwitter.mjs
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
function m13({ size: a32 = q.base, viewBox: r14 = "0 0 24 24", ...o34 }) {
  return (0, import_jsx_runtime82.jsx)(h, { size: a32, viewBox: r14, "data-testid": "twitter", ...o34, children: (0, import_jsx_runtime82.jsx)("path", { d: "M19.944 8.048c.013.178.013.356.013.533 0 5.419-4.124 11.663-11.663 11.663-2.322 0-4.48-.673-6.294-1.84.33.038.647.05.99.05 1.916 0 3.68-.647 5.089-1.75a4.11 4.11 0 0 1-3.833-2.844c.254.039.508.064.774.064.368 0 .736-.05 1.079-.14a4.1 4.1 0 0 1-3.287-4.023v-.05c.546.304 1.18.495 1.853.52a4.1 4.1 0 0 1-1.827-3.414c0-.761.203-1.46.558-2.068a11.65 11.65 0 0 0 8.452 4.29 4.6 4.6 0 0 1-.102-.94A4.097 4.097 0 0 1 15.846 4a4.1 4.1 0 0 1 2.994 1.294 8.1 8.1 0 0 0 2.602-.99 4.1 4.1 0 0 1-1.802 2.26A8.2 8.2 0 0 0 22 5.928a8.8 8.8 0 0 1-2.056 2.12" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconUndo.mjs
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
function m14({ size: t27 = q.base, viewBox: a32 = "0 0 24 24", ...r14 }) {
  return (0, import_jsx_runtime83.jsx)(h, { size: t27, viewBox: a32, "data-testid": "undo", ...r14, children: (0, import_jsx_runtime83.jsx)("path", { d: "M8 19.5a.97.97 0 0 1-.712-.288A.97.97 0 0 1 7 18.5q0-.425.288-.713A.97.97 0 0 1 8 17.5h6.1q1.576 0 2.737-1Q18 15.5 18 14t-1.163-2.5-2.737-1H7.8l1.9 1.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275l-3.6-3.6a.9.9 0 0 1-.212-.325 1.1 1.1 0 0 1-.063-.375q0-.201.063-.375A.9.9 0 0 1 4.7 8.8l3.6-3.6a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L7.8 8.5h6.3q2.425 0 4.163 1.575Q20 11.65 20 14t-1.738 3.925Q16.526 19.5 14.1 19.5z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconUnfoldMore.mjs
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
function l12({
  size: o34 = q.base,
  viewBox: r14 = "0 0 24 24",
  ...a32
}) {
  return (0, import_jsx_runtime84.jsx)(h, { size: o34, viewBox: r14, "data-testid": "unfold-more", ...a32, children: (0, import_jsx_runtime84.jsx)("path", { d: "M8.225 8.325Q7.95 8.05 7.95 7.6t.275-.725L11.3 3.8q.15-.15.325-.213.175-.062.375-.062t.388.062a.7.7 0 0 1 .312.213l3.1 3.1q.274.274.262.712t-.287.713-.725.275-.725-.275L12 6 9.65 8.35q-.274.274-.712.263a1 1 0 0 1-.713-.288M12 20.575a.9.9 0 0 1-.375-.075 1.3 1.3 0 0 1-.325-.2l-3.075-3.075q-.275-.275-.275-.725t.275-.725.725-.275.725.275L12 18.1l2.35-2.35q.274-.274.712-.262t.713.287.275.725-.275.725L12.7 20.3a.9.9 0 0 1-.312.2q-.188.075-.388.075" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconUpload.mjs
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);
function m15({ size: o34 = q.base, viewBox: t27 = "0 0 24 24", ...q4 }) {
  return (0, import_jsx_runtime85.jsx)(h, { size: o34, viewBox: t27, "data-testid": "upload", ...q4, children: (0, import_jsx_runtime85.jsx)("path", { d: "M6 19.787q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 17.787v-2q0-.424.287-.712A.97.97 0 0 1 5 14.787q.424 0 .713.288.287.288.287.712v2h12v-2q0-.424.288-.712a.97.97 0 0 1 .712-.288q.424 0 .712.288t.288.712v2q0 .825-.587 1.413a1.93 1.93 0 0 1-1.413.587zm5-12.15L9.125 9.512a.93.93 0 0 1-.713.288 1.02 1.02 0 0 1-.712-.313q-.275-.3-.288-.7a.92.92 0 0 1 .288-.7l3.6-3.6q.15-.15.325-.212.175-.063.375-.063t.375.063a.9.9 0 0 1 .325.212l3.6 3.6q.3.3.287.7-.012.4-.287.7-.3.3-.713.313a.93.93 0 0 1-.712-.288L13 7.637v7.15q0 .426-.287.713a.97.97 0 0 1-.713.287.97.97 0 0 1-.713-.287.97.97 0 0 1-.287-.713z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconViewList.mjs
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
function n19({ size: m26 = q.base, viewBox: i16 = "0 0 24 24", ...o34 }) {
  return (0, import_jsx_runtime86.jsx)(h, { size: m26, viewBox: i16, "data-testid": "view-list", ...o34, children: (0, import_jsx_runtime86.jsx)("path", { d: "M3 17V7q0-.824.587-1.412A1.93 1.93 0 0 1 5 5h14q.825 0 1.413.588Q21 6.175 21 7v10q0 .825-.587 1.413A1.93 1.93 0 0 1 19 19H5q-.825 0-1.413-.587A1.93 1.93 0 0 1 3 17m2-8h2V7H5zm4 0h10V7H9zm0 4h10v-2H9zm0 4h10v-2H9zm-4 0h2v-2H5zm0-4h2v-2H5z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconVisibility.mjs
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
function n20({
  size: i16 = q.base,
  viewBox: o34 = "0 0 24 24",
  ...r14
}) {
  return (0, import_jsx_runtime87.jsx)(h, { size: i16, viewBox: o34, "data-testid": "visibility", ...r14, children: (0, import_jsx_runtime87.jsx)("path", { d: "M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5t-1.312-3.188Q13.875 7 12 7T8.812 8.312Q7.5 9.625 7.5 11.5t1.312 3.188Q10.125 16 12 16m0-1.8q-1.125 0-1.912-.788A2.6 2.6 0 0 1 9.3 11.5q0-1.125.788-1.913A2.6 2.6 0 0 1 12 8.8q1.125 0 1.913.787.787.788.787 1.913t-.787 1.912A2.6 2.6 0 0 1 12 14.2m0 4.8q-3.475 0-6.35-1.837Q2.775 15.325 1.3 12.2a.8.8 0 0 1-.1-.313 3 3 0 0 1 0-.775.8.8 0 0 1 .1-.312q1.475-3.125 4.35-4.962Q8.525 4 12 4t6.35 1.838T22.7 10.8q.075.124.1.312a3 3 0 0 1 0 .775.8.8 0 0 1-.1.313q-1.474 3.125-4.35 4.963Q15.475 19 12 19" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconVisibilityOff.mjs
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
function n21({
  size: i16 = q.base,
  viewBox: t27 = "0 0 24 24",
  ...q4
}) {
  return (0, import_jsx_runtime88.jsx)(h, { size: i16, viewBox: t27, "data-testid": "visibility-off", ...q4, children: (0, import_jsx_runtime88.jsx)("path", { d: "m19.3 16.5-3.2-3.2q.2-.424.3-.862t.1-.938q0-1.875-1.312-3.188Q13.875 7 12 7q-.5 0-.938.1a4.3 4.3 0 0 0-.862.3L7.65 4.85a11 11 0 0 1 2.1-.638A11.6 11.6 0 0 1 12 4q3.575 0 6.425 1.887T22.7 10.8q.075.125.1.312.025.188.025.388a2 2 0 0 1-.125.7q-.574 1.275-1.437 2.375A10.5 10.5 0 0 1 19.3 16.5m-.2 5.4-3.5-3.45q-.874.275-1.762.413T12 19q-3.575 0-6.425-1.887T1.3 12.2a.8.8 0 0 1-.1-.313 3 3 0 0 1 0-.762.8.8 0 0 1 .1-.3Q1.825 9.7 2.55 8.75A13.3 13.3 0 0 1 4.15 7L2.075 4.9a.93.93 0 0 1-.275-.688q0-.412.3-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275l17 17q.275.275.288.688a.93.93 0 0 1-.288.712.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275M12 16q.275 0 .512-.025.239-.025.513-.1l-5.4-5.4a3 3 0 0 0-.1.513 5 5 0 0 0-.025.512q0 1.875 1.312 3.188Q10.125 16 12 16m2.65-4.15-3-3q1.425-.225 2.325.8t.675 2.2" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconVsfDiamond.mjs
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);
function e8({
  size: o34 = q.base,
  viewBox: t27 = "0 0 24 24",
  ...f17
}) {
  return (0, import_jsx_runtime89.jsx)(h, { size: o34, viewBox: t27, "data-testid": "vsf-diamond", ...f17, children: (0, import_jsx_runtime89.jsx)("path", { d: "M7.888 2.174c-.761.473-1.508 1.22-3 2.713-1.494 1.493-2.24 2.24-2.714 3a7.79 7.79 0 0 0 0 8.226c.473.76 1.22 1.506 2.712 2.999 1.494 1.494 2.24 2.24 3.002 2.714a7.79 7.79 0 0 0 8.224 0c.761-.474 1.508-1.22 3-2.713 1.494-1.493 2.24-2.24 2.714-3a7.79 7.79 0 0 0 0-8.225c-.474-.761-1.22-1.508-2.713-3-1.493-1.494-2.24-2.24-3-2.714a7.79 7.79 0 0 0-8.225 0" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconVuejs.mjs
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
function m16({ size: t27 = q.base, viewBox: e12 = "0 0 24 24", ...r14 }) {
  return (0, import_jsx_runtime90.jsx)(h, { size: t27, viewBox: e12, "data-testid": "vuejs", ...r14, children: (0, import_jsx_runtime90.jsx)("path", { d: "M18.526 2.3H14.75L12 6.65 9.643 2.3H1l11 18.843L23 2.3zM3.736 3.871h2.641L12 13.605l5.618-9.734h2.642L12 18.024z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconVuestorefront.mjs
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);
function l13({
  size: t27 = q.base,
  viewBox: a32 = "0 0 24 24",
  ...r14
}) {
  return (0, import_jsx_runtime91.jsx)(h, { size: t27, viewBox: a32, "data-testid": "vuestorefront", ...r14, children: (0, import_jsx_runtime91.jsx)("path", { d: "m9.747 2.824.839-.838a2 2 0 0 1 2.828 0l.838.838a2 2 0 0 1 0 2.828l-.838.839a2 2 0 0 1-2.828 0l-.839-.839a2 2 0 0 1 0-2.828m3.69 10.978 4.482-4.483a2 2 0 0 1 2.829 0L23 11.571l-11 11-11-11 2.276-2.276a2 2 0 0 1 2.827 0l4.506 4.507a2 2 0 0 0 2.828 0" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconWarehouse.mjs
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
function i11({ size: e12 = q.base, viewBox: r14 = "0 0 24 24", ...t27 }) {
  return (0, import_jsx_runtime92.jsx)(h, { size: e12, viewBox: r14, "data-testid": "warehouse", ...t27, children: (0, import_jsx_runtime92.jsx)("path", { d: "m12 5.15-8 3.2V19h2v-6q0-.824.588-1.413A1.93 1.93 0 0 1 8 11h8q.825 0 1.413.587Q18 12.175 18 13v6h2V8.35zM8 21H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 19V8.35A1.96 1.96 0 0 1 3.25 6.5l8-3.2q.35-.15.75-.15t.75.15l8 3.2q.575.225.913.725.337.5.337 1.125V19q0 .825-.587 1.413A1.93 1.93 0 0 1 20 21h-4v-8H8zm1 0v-2h2v2zm2-3v-2h2v2zm2 3v-2h2v2z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconWarning.mjs
var import_jsx_runtime93 = __toESM(require_jsx_runtime(), 1);
function f9({ size: a32 = q.base, viewBox: n28 = "0 0 24 24", ...o34 }) {
  return (0, import_jsx_runtime93.jsx)(h, { size: a32, viewBox: n28, "data-testid": "warning", ...o34, children: (0, import_jsx_runtime93.jsx)(
    "path",
    {
      fillRule: "evenodd",
      d: "M10.258 4.067c.764-1.363 2.725-1.363 3.49 0l7.818 13.95c.748 1.333-.216 2.978-1.744 2.978H4.183c-1.528 0-2.492-1.645-1.745-2.978zM12 8a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m0 7.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",
      clipRule: "evenodd"
    }
  ) });
}

// node_modules/@storefront-ui/react/dist/components/SfIcons/SfIconYoutube.mjs
var import_jsx_runtime94 = __toESM(require_jsx_runtime(), 1);
function n22({ size: t27 = q.base, viewBox: a32 = "0 0 24 24", ...e12 }) {
  return (0, import_jsx_runtime94.jsx)(h, { size: t27, viewBox: a32, "data-testid": "youtube", ...e12, children: (0, import_jsx_runtime94.jsx)("path", { d: "M22.54 6.42a2.76 2.76 0 0 0-1.944-1.957C18.88 4 12 4 12 4s-6.88 0-8.596.463A2.76 2.76 0 0 0 1.46 6.42C1 8.147 1 11.75 1 11.75s0 3.603.46 5.33a2.72 2.72 0 0 0 1.945 1.926c1.716.463 8.596.463 8.596.463s6.879 0 8.595-.463a2.72 2.72 0 0 0 1.945-1.926c.46-1.727.46-5.33.46-5.33s0-3.603-.46-5.33M9.75 15.021V8.48l5.75 3.271z" }) });
}

// node_modules/@storefront-ui/react/dist/components/SfLoaderCircular/SfLoaderCircular.mjs
var import_jsx_runtime95 = __toESM(require_jsx_runtime(), 1);
var import_classnames5 = __toESM(require_classnames(), 1);
var t21 = {
  [Q.xs]: "h-4 w-4 ring-2",
  [Q.sm]: "h-5 w-5 ring-2",
  [Q.base]: "h-6 w-6 ring-2",
  [Q.lg]: "h-8 w-8 ring-2",
  [Q.xl]: "h-10 w-10 ring-2",
  [Q["2xl"]]: "h-14 w-14 ring-[3px]",
  [Q["3xl"]]: "h-24 w-24 ring-4",
  [Q["4xl"]]: "h-48 w-48 ring-8"
};
var n23 = {
  [Q.xs]: "stroke-[10px]",
  [Q.sm]: "stroke-[8px]",
  [Q.base]: "stroke-[6px]",
  [Q.lg]: "stroke-[4px]",
  [Q.xl]: "stroke-[3px]",
  [Q["2xl"]]: "stroke-[3px]",
  [Q["3xl"]]: "stroke-2",
  [Q["4xl"]]: "stroke-2"
};
function m17({
  size: e12 = Q.base,
  ariaLabel: l21 = "loading",
  className: a32,
  ...o34
}) {
  return (0, import_jsx_runtime95.jsx)(
    "svg",
    {
      className: (0, import_classnames5.default)(
        "inline-block ring-inset ring-neutral-300 text-primary-700 rounded-full animate-spin-slow",
        t21[e12],
        a32
      ),
      viewBox: "25 25 50 50",
      "aria-live": "polite",
      "aria-label": l21,
      "data-testid": "loader-circular",
      ...o34,
      children: (0, import_jsx_runtime95.jsx)(
        "circle",
        {
          className: (0, import_classnames5.default)(
            "fill-none stroke-2 stroke-current animate-stroke-loader-circular",
            n23[e12]
          ),
          cx: "50",
          cy: "50",
          r: "24"
        }
      )
    }
  );
}

// node_modules/@storefront-ui/react/dist/components/SfLoaderLinear/SfLoaderLinear.mjs
var import_jsx_runtime96 = __toESM(require_jsx_runtime(), 1);
var import_classnames6 = __toESM(require_classnames(), 1);

// node_modules/@storefront-ui/react/dist/components/SfLoaderLinear/types.mjs
var e10 = ((r14) => (r14.minimal = "minimal", r14))(e10 || {});

// node_modules/@storefront-ui/react/dist/components/SfLoaderLinear/SfLoaderLinear.mjs
var f10 = {
  [e10.minimal]: "h-1",
  [Q.xs]: "h-4",
  [Q.sm]: "h-5",
  [Q.base]: "h-6",
  [Q.lg]: "h-7",
  [Q.xl]: "h-10",
  [Q["2xl"]]: "h-14",
  [Q["3xl"]]: "h-24",
  [Q["4xl"]]: "h-48"
};
function b2({
  size: a32 = Q.base,
  ariaLabel: r14 = "loading",
  className: l21,
  ...i16
}) {
  return (0, import_jsx_runtime96.jsx)(
    "span",
    {
      className: (0, import_classnames6.default)(
        "relative inline-block overflow-hidden bg-neutral-300 text-primary-700 after:absolute after:w-2.5 after:h-full after:animate-line after:bg-current after:block",
        f10[a32],
        l21
      ),
      "aria-live": "polite",
      "aria-label": r14,
      "data-testid": "loader-linear",
      ...i16
    }
  );
}

// node_modules/@storefront-ui/react/dist/components/SfProgressCircular/SfProgressCircular.mjs
var import_jsx_runtime97 = __toESM(require_jsx_runtime(), 1);
var import_classnames7 = __toESM(require_classnames(), 1);
var m18 = {
  [Z.xs]: "h-4 w-4 ring-2",
  [Z.sm]: "h-5 w-5 ring-2",
  [Z.base]: "h-6 w-6 ring-2",
  [Z.lg]: "h-8 w-8 ring-2",
  [Z.xl]: "h-10 w-10 ring-2",
  [Z["2xl"]]: "h-14 w-14 ring-[3px]",
  [Z["3xl"]]: "h-24 w-24 ring-4",
  [Z["4xl"]]: "h-48 w-48 ring-8"
};
var c14 = {
  [Z.xs]: "stroke-[10px]",
  [Z.sm]: "stroke-[8px]",
  [Z.base]: "stroke-[6px]",
  [Z.lg]: "stroke-[4px]",
  [Z.xl]: "stroke-[3px]",
  [Z["2xl"]]: "stroke-[3px]",
  [Z["3xl"]]: "stroke-2",
  [Z["4xl"]]: "stroke-2"
};
function u3({
  value: s10 = 0,
  size: e12 = Z.base,
  ariaLabel: a32 = "Progress element",
  children: o34,
  className: i16,
  ...n28
}) {
  const l21 = `${s10 / 100 * 151}, 150`;
  return (0, import_jsx_runtime97.jsxs)(
    "svg",
    {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": s10,
      "aria-label": a32,
      className: (0, import_classnames7.default)(
        "inline-block ring-inset ring-neutral-300 text-primary-700 rounded-full transition-[stroke-dasharray] ease-in-out duration-500 text-sm",
        m18[e12],
        i16
      ),
      viewBox: "25 25 50 50",
      strokeDasharray: l21,
      "data-testid": "progress",
      ...n28,
      children: [
        (0, import_jsx_runtime97.jsx)(
          "circle",
          {
            className: (0, import_classnames7.default)("origin-bottom-right -rotate-90 stroke-current fill-none", c14[e12]),
            cx: "50",
            cy: "50",
            r: "24"
          }
        ),
        o34
      ]
    }
  );
}

// node_modules/@storefront-ui/react/dist/components/SfProgressLinear/SfProgressLinear.mjs
var import_jsx_runtime98 = __toESM(require_jsx_runtime(), 1);
var import_classnames8 = __toESM(require_classnames(), 1);

// node_modules/@storefront-ui/react/dist/components/SfProgressLinear/types.mjs
var e11 = ((r14) => (r14.minimal = "minimal", r14))(e11 || {});

// node_modules/@storefront-ui/react/dist/components/SfProgressLinear/SfProgressLinear.mjs
var m19 = {
  [e11.minimal]: "h-1",
  [Z.xs]: "h-4",
  [Z.sm]: "h-5",
  [Z.base]: "h-6",
  [Z.lg]: "h-7",
  [Z.xl]: "h-10",
  [Z["2xl"]]: "h-14",
  [Z["3xl"]]: "h-24",
  [Z["4xl"]]: "h-48"
};
function h3({
  value: e12 = 0,
  size: s10 = Z.base,
  ariaLabel: a32 = "Progress element",
  className: t27,
  ...i16
}) {
  return (0, import_jsx_runtime98.jsx)(
    "progress",
    {
      "data-testid": "progress-linear",
      max: "100",
      className: (0, import_classnames8.default)(
        "bg-neutral-300 text-primary-700 [&::-webkit-progress-bar]:bg-inherit [&::-webkit-progress-value]:bg-current [&::-webkit-progress-value]:transition-[width] [&::-webkit-progress-value]:ease-in-out [&::-webkit-progress-value]:duration-200 [&::-moz-progress-bar]:bg-current",
        m19[s10],
        t27
      ),
      "aria-label": a32,
      value: e12,
      ...i16
    }
  );
}

// node_modules/@storefront-ui/react/dist/components/SfRating/SfRating.mjs
var import_jsx_runtime99 = __toESM(require_jsx_runtime(), 1);
var import_classnames9 = __toESM(require_classnames(), 1);
var w = {
  [_.xs]: "text-xs",
  [_.sm]: "text-sm",
  [_.base]: "text-base",
  [_.lg]: "text-lg",
  [_.xl]: "text-xl"
};
function $2({
  size: n28 = _.base,
  max: t27 = 5,
  value: i16 = 0,
  halfIncrement: c19,
  ariaLabel: d12,
  className: f17,
  ...p10
}) {
  const l21 = Lt(Dt(i16, c19 ? 0.5 : 1), 0, t27), a32 = +!Number.isInteger(l21), o34 = Math.ceil(l21 - a32), x7 = t27 - o34 - a32, m26 = d12 ?? `${i16} out of ${t27}`;
  return (0, import_jsx_runtime99.jsxs)(
    "div",
    {
      role: "img",
      "aria-label": m26,
      title: m26,
      className: (0, import_classnames9.default)("inline-flex items-center text-warning-500", w[n28], f17),
      "data-testid": "rating",
      ...p10,
      children: [
        [...Array(o34).keys()].map((r14) => (0, import_jsx_runtime99.jsx)(m12, { "aria-hidden": "true", className: "w-[1.5em] h-[1.5em]" }, r14)),
        !!a32 && (0, import_jsx_runtime99.jsx)(n16, { "aria-hidden": "true", className: "w-[1.5em] h-[1.5em]" }),
        [...Array(x7).keys()].map((r14) => (0, import_jsx_runtime99.jsx)(l11, { "aria-hidden": "true", className: "text-disabled-500 w-[1.5em] h-[1.5em]" }, r14))
      ]
    }
  );
}

// node_modules/@storefront-ui/react/dist/components/SfSelect/SfSelect.mjs
var import_jsx_runtime100 = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_classnames10 = __toESM(require_classnames(), 1);

// node_modules/@storefront-ui/react/dist/hooks/useFocusVisible/useFocusVisible.mjs
var import_react = __toESM(require_react(), 1);
var s6 = Ht();
var f11 = (t27 = {}) => {
  s6.setupGlobalFocusEvents();
  const { isTextInput: e12, autoFocus: i16 } = t27, [n28, u10] = (0, import_react.useState)(i16 || s6.isFocusVisible());
  return (0, import_react.useEffect)(() => {
    const o34 = (c19, r14) => {
      s6.isKeyboardFocusEvent(e12, c19, r14) && u10(s6.isFocusVisible());
    };
    return s6.changeHandlers.add(o34), () => {
      s6.changeHandlers.delete(o34);
    };
  }, [e12]), { isFocusVisible: n28 };
};

// node_modules/@storefront-ui/react/dist/shared/utils/props.mjs
var n24 = (...r14) => (...t27) => {
  r14.forEach((e12) => e12 == null ? void 0 : e12(...t27));
};
function o28(r14) {
  return function(e12 = {}) {
    return {
      ...e12,
      ...r14(e12 || {})
    };
  };
}

// node_modules/@storefront-ui/react/dist/components/SfSelect/SfSelect.mjs
function I(u10) {
  const {
    size: t27 = B.base,
    children: p10,
    invalid: m26,
    wrapperClassName: b8,
    slotChevron: f17,
    required: g8,
    disabled: n28,
    className: h9,
    placeholder: a32,
    onBlur: x7,
    onChange: v8,
    onClick: y6,
    onKeyDown: w5,
    ...S5
  } = u10, { isFocusVisible: C5 } = f11(), [N4, s10] = (0, import_react2.useState)(false), i16 = () => s10(true), l21 = () => s10(false), k2 = (D3) => {
    D3.code === "Space" && i16();
  };
  return (0, import_jsx_runtime100.jsxs)(
    "span",
    {
      className: (0, import_classnames10.default)(
        "relative flex flex-col rounded-md",
        {
          "focus-within:outline focus-within:outline-offset": C5
        },
        b8
      ),
      "data-testid": "select",
      children: [
        (0, import_jsx_runtime100.jsxs)(
          "select",
          {
            required: g8,
            disabled: n28,
            className: (0, import_classnames10.default)(
              "appearance-none disabled:cursor-not-allowed cursor-pointer pl-4 pr-3.5 text-neutral-900 focus:ring-primary-700 focus:ring-2 outline-none bg-transparent rounded-md ring-1 ring-inset ring-neutral-300 hover:ring-primary-700 active:ring-2 active:ring-primary-700 disabled:bg-disabled-100 disabled:text-disabled-900 disabled:ring-disabled-200",
              {
                "py-1.5": t27 === B.sm,
                "py-2": t27 === B.base,
                "py-3 text-base": t27 === B.lg,
                "!ring-negative-700 ring-2": m26 && !n28
              },
              h9
            ),
            "data-testid": "select-input",
            onBlur: n24(l21, x7),
            onChange: n24(l21, v8),
            onClick: n24(i16, y6),
            onKeyDown: n24(k2, w5),
            ...S5,
            children: [
              a32 && (0, import_jsx_runtime100.jsx)(
                "option",
                {
                  disabled: true,
                  hidden: true,
                  value: "",
                  className: (0, import_classnames10.default)("bg-neutral-300 text-sm", {
                    "text-base": t27 === B.lg
                  }),
                  "data-testid": "select-placeholder",
                  children: a32
                }
              ),
              p10
            ]
          }
        ),
        f17 || (0, import_jsx_runtime100.jsx)(
          m9,
          {
            className: (0, import_classnames10.default)(
              "box-border absolute -translate-y-1 pointer-events-none top-1/3 right-4 transition easy-in-out duration-0.5",
              n28 ? "text-disabled-500" : "text-neutral-500",
              { "rotate-180": N4 }
            )
          }
        )
      ]
    }
  );
}

// node_modules/@storefront-ui/react/dist/components/SfTooltip/SfTooltip.mjs
var import_jsx_runtime101 = __toESM(require_jsx_runtime(), 1);

// node_modules/@storefront-ui/react/dist/hooks/useTooltip/useTooltip.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/@storefront-ui/react/dist/hooks/useDisclosure/useDisclosure.mjs
var import_react3 = __toESM(require_react(), 1);
function p6({ initialValue: t27 = false } = {}) {
  const [o34, e12] = (0, import_react3.useState)(t27), n28 = (0, import_react3.useCallback)(() => e12(true), []), c19 = (0, import_react3.useCallback)(() => e12(false), []), l21 = (0, import_react3.useCallback)(() => e12((r14) => !r14), []);
  return { isOpen: o34, open: n28, close: c19, toggle: l21 };
}

// node_modules/@storefront-ui/react/dist/hooks/useTooltip/useTooltip.mjs
function F(w5) {
  const {
    placement: n28 = "top",
    middleware: g8 = [offset(8), shift(), flip()],
    arrowSize: o34 = "6px",
    ...y6
  } = w5 || {}, t27 = (0, import_react4.useRef)(null), { isOpen: l21, open: p10, close: i16, toggle: d12 } = p6(), {
    refs: r14,
    style: a32,
    middlewareData: f17
  } = P2({
    isOpen: l21,
    placement: n28,
    middleware: [...g8, arrow({ element: t27 })],
    ...y6
  });
  function m26() {
    if (f17.arrow) {
      const { x: e12, y: c19 } = f17.arrow, P5 = n28.split("-")[0];
      return {
        position: "absolute",
        width: o34,
        height: o34,
        top: typeof c19 == "number" ? `${c19}px` : "",
        left: typeof e12 == "number" ? `${e12}px` : "",
        [{
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[P5]]: `calc(${o34} / -2)`
      };
    }
    return {};
  }
  const b8 = o28((e12) => ({
    ref: r14.setReference,
    onMouseEnter: n24(p10, e12.onMouseEnter),
    onMouseLeave: n24(i16, e12.onMouseLeave)
  })), h9 = o28((e12) => ({
    ref: r14.setFloating,
    style: { ...e12.style, ...a32 }
  })), x7 = o28((e12) => ({
    ref: t27,
    style: { ...e12.style, ...m26() }
  }));
  return {
    refs: {
      ...r14,
      arrow: t27
    },
    style: {
      floating: a32,
      arrow: m26()
    },
    isOpen: l21,
    open: p10,
    close: i16,
    toggle: d12,
    getTriggerProps: b8,
    getTooltipProps: h9,
    getArrowProps: x7
  };
}

// node_modules/@storefront-ui/react/dist/components/SfTooltip/SfTooltip.mjs
function h4(s10) {
  const { children: e12, label: o34, className: r14, style: p10, showArrow: a32, ...l21 } = s10, { isOpen: i16, getTriggerProps: n28, getTooltipProps: d12, getArrowProps: c19 } = F(l21);
  return (0, import_jsx_runtime101.jsxs)("span", { ...n28({ className: r14, style: p10 }), "data-testid": "tooltip", children: [
    e12,
    o34 && i16 && (0, import_jsx_runtime101.jsxs)(
      "div",
      {
        ...d12({
          role: "tooltip",
          className: "bg-black px-2 py-1.5 rounded-md text-white text-xs w-max max-w-[360px] drop-shadow"
        }),
        children: [
          o34,
          a32 && (0, import_jsx_runtime101.jsx)("span", { ...c19({ className: "bg-black rotate-45" }) })
        ]
      }
    )
  ] });
}

// node_modules/@storefront-ui/react/dist/components/SfThumbnail/SfThumbnail.mjs
var import_jsx_runtime102 = __toESM(require_jsx_runtime(), 1);
var import_classnames11 = __toESM(require_classnames(), 1);
var m21 = {
  [z.sm]: "w-5 h-5",
  [z.base]: "w-6 h-6",
  [z.lg]: "w-10 h-10",
  [z.xl]: "w-14 h-14"
};
function d5({
  size: e12 = z.base,
  children: a32,
  className: t27,
  ...i16
}) {
  return (0, import_jsx_runtime102.jsx)(
    "div",
    {
      className: (0, import_classnames11.default)("rounded-full overflow-hidden bg-clip-content p-0.5", m21[e12], t27),
      "data-testid": "thumbnail",
      ...i16,
      children: a32
    }
  );
}

// node_modules/@storefront-ui/react/dist/components/SfRatingButton/SfRatingButton.mjs
var import_jsx_runtime103 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_classnames12 = __toESM(require_classnames(), 1);
function j3(t27) {
  return `${t27} Star${t27 !== 1 ? "s" : ""}`;
}
var B2 = ({ isFilled: t27, iconSize: r14 }) => t27 ? (0, import_jsx_runtime103.jsx)(
  m12,
  {
    role: "none",
    className: "text-primary-700 cursor-pointer peer-disabled:cursor-default peer-disabled:text-disabled-500 peer-focus-visible:outline",
    size: r14
  }
) : (0, import_jsx_runtime103.jsx)(
  l11,
  {
    role: "none",
    className: "text-neutral-500 cursor-pointer peer-disabled:cursor-default peer-disabled:text-disabled-500 peer-focus-visible:outline",
    size: r14
  }
);
var L = {
  [V.sm]: q.base,
  [V.base]: q.lg,
  [V.lg]: q.xl
};
function E({
  onChange: t27,
  value: r14 = 0,
  disabled: i16 = false,
  max: l21 = 5,
  name: f17 = "sf-rating-button",
  className: d12,
  size: u10 = V.base,
  getLabelText: m26 = j3,
  children: p10 = B2,
  ...b8
}) {
  const [a32, c19] = (0, import_react5.useState)(0), S5 = Array.from({ length: Math.floor(Math.abs(l21)) }, (e12, I3) => I3 + 1), x7 = (e12) => e12 <= a32 || a32 === 0 && e12 <= r14, h9 = (e12) => {
    t27 == null || t27(Number(e12.target.value));
  }, v8 = (e12) => () => {
    i16 || c19(e12);
  }, z4 = () => {
    i16 || c19(0);
  };
  return (0, import_jsx_runtime103.jsx)("div", { role: "radiogroup", className: (0, import_classnames12.default)("flex", d12), "data-testid": "ratingbutton", ...b8, children: S5.map((e12) => (0, import_jsx_runtime103.jsxs)("label", { onMouseEnter: v8(e12), onMouseLeave: z4, children: [
    (0, import_jsx_runtime103.jsx)(
      "input",
      {
        type: "radio",
        name: f17,
        value: e12,
        checked: e12 === r14,
        onChange: h9,
        disabled: i16,
        "aria-label": m26(e12),
        className: "sr-only peer"
      }
    ),
    p10({ isFilled: x7(e12), max: l21, iconSize: L[u10] })
  ] }, e12)) });
}

// node_modules/@storefront-ui/react/dist/hooks/useScrollable/useScrollable.mjs
var import_react6 = __toESM(require_react(), 1);
function z2({
  activeIndex: n28,
  direction: b8,
  drag: h9,
  reduceMotion: o34,
  onDragStart: s10,
  onDragEnd: r14,
  onScroll: c19,
  onPrev: u10,
  onNext: d12,
  isActiveIndexCentered: m26
} = {}) {
  const f17 = (0, import_react6.useRef)(null), l21 = (0, import_react6.useRef)(null), [i16, k2] = (0, import_react6.useState)({ hasPrev: false, hasNext: false, isDragged: false });
  (0, import_react6.useEffect)(() => {
    const e12 = f17.current;
    if (!e12)
      return () => {
      };
    l21.current = new Et(e12, {
      direction: b8,
      drag: h9,
      reduceMotion: o34,
      onPrev: u10,
      onNext: d12,
      onScroll: (t27) => {
        k2((a32) => ({ ...a32, hasNext: t27.hasNext, hasPrev: t27.hasPrev })), c19 == null || c19(t27);
      },
      onDragStart: (t27) => {
        k2((a32) => ({ ...a32, isDragged: t27.isDragged })), s10 == null || s10(t27);
      },
      onDragEnd: r14
    });
    const R2 = l21.current.register();
    return typeof n28 == "number" && n28 >= 0 && m26 && l21.current.scrollToIndex(n28), R2;
  }, [
    f17,
    n28,
    b8,
    h9,
    o34,
    s10,
    r14,
    c19,
    u10,
    d12,
    m26
  ]);
  const N4 = (0, import_react6.useCallback)(() => {
    var e12;
    (e12 = l21.current) == null || e12.prev();
  }, []), g8 = (0, import_react6.useCallback)(() => {
    var e12;
    (e12 = l21.current) == null || e12.next();
  }, []), v8 = o28((e12) => ({
    onClick: n24(N4, e12 == null ? void 0 : e12.onClick),
    disabled: typeof e12.disabled < "u" ? e12.disabled : !i16.hasPrev
  })), B3 = o28((e12) => ({
    onClick: n24(g8, e12 == null ? void 0 : e12.onClick),
    disabled: typeof e12.disabled < "u" ? e12.disabled : !i16.hasNext
  }));
  return {
    containerRef: f17,
    getPrevButtonProps: v8,
    getNextButtonProps: B3,
    showNext: g8,
    showPrev: N4,
    state: i16
  };
}

// node_modules/tabbable/dist/index.esm.js
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var isInert = function isInert2(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
  var inert = inertAtt === "" || inertAtt === "true";
  var result = inert || lookUp && node && isInert2(node.parentNode);
  return result;
};
var isContentEditable = function isContentEditable2(node) {
  var _node$getAttribute2;
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
  return attValue === "" || attValue === "true";
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      continue;
    }
    if (element.tagName === "SLOT") {
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively2(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }
      var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var hasTabIndex = function hasTabIndex2(node) {
  return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
var getTabIndex = function getTabIndex2(node) {
  if (!node) {
    throw new Error("No node provided");
  }
  if (node.tabIndex < 0) {
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};
var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a32, b8) {
  return a32.tabIndex === b8.tabIndex ? a32.documentOrder - b8.documentOrder : a32.tabIndex - b8.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r14 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r14;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i16 = 0; i16 < nodes.length; i16++) {
    if (nodes[i16].checked && nodes[i16].form === form) {
      return nodes[i16];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached2(node) {
  var _nodeRoot;
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (isNodeAttached(node)) {
      return !node.getClientRects().length;
    }
    if (displayCheck !== "legacy-full") {
      return true;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i16 = 0; i16 < parentNode.children.length; i16++) {
          var child = parentNode.children.item(i16);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var sortByOrder = function sortByOrder2(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i16) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder2(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i16,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");

// node_modules/@storefront-ui/react/dist/hooks/useTrapFocus/useTrapFocus.mjs
var import_react7 = __toESM(require_react(), 1);
var O = ((e12) => (e12.autofocus = "autofocus", e12.container = "container", e12))(O || {});
var P3 = {
  trapTabs: true,
  activeState: true,
  initialFocus: 0,
  initialFocusContainerFallback: false,
  arrowKeysOn: false,
  arrowKeysLeftRight: false,
  arrowKeysUpDown: false
};
var z3 = (e12, C5) => {
  const {
    trapTabs: p10,
    arrowFocusGroupSelector: f17,
    includeContainer: b8,
    activeState: k2,
    initialFocus: s10,
    arrowKeysOn: F3,
    arrowKeysLeftRight: m26,
    arrowKeysUpDown: A6,
    initialFocusContainerFallback: E2
  } = {
    ...P3,
    ...C5
  }, [i16, L2] = (0, import_react7.useState)(), [u10, l21] = (0, import_react7.useState)([]), n28 = ({
    event: r14,
    additionalData: t27
  }) => Mt({
    current: i16,
    focusables: u10,
    event: r14,
    ...t27
  }), a32 = ({
    event: r14,
    additionalData: t27
  }) => Tt({
    current: i16,
    focusables: u10,
    event: r14,
    ...t27
  }), w5 = (0, import_react7.useCallback)(
    (r14) => {
      var c19;
      const o34 = f17 && ((c19 = e12.current) == null ? void 0 : c19.querySelector(f17)) ? { arrowFocusGroupSelector: f17 } : {};
      F3 && (r14.key === "ArrowLeft" || r14.key === "ArrowUp") && n28({ additionalData: o34 }), F3 && (r14.key === "ArrowRight" || r14.key === "ArrowDown") && a32({ additionalData: o34 }), m26 && r14.key === "ArrowLeft" && n28({ additionalData: o34 }), m26 && r14.key === "ArrowRight" && a32({ additionalData: o34 }), A6 && r14.key === "ArrowUp" && n28({ additionalData: o34 }), A6 && r14.key === "ArrowDown" && a32({ additionalData: o34 }), p10 && bt(r14) && a32({ event: r14 }), p10 && yt(r14) && n28({ event: r14 });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i16]
  ), h9 = () => {
    const r14 = document.activeElement;
    L2(r14);
  }, T2 = () => {
    var r14, t27;
    (r14 = e12.current) == null || r14.removeEventListener("keydown", w5), (t27 = e12.current) == null || t27.removeEventListener("focus", h9, true);
  };
  return (0, import_react7.useEffect)(() => {
    var r14, t27, o34, c19;
    if (e12.current && k2) {
      (r14 = e12.current) == null || r14.addEventListener("focus", h9, true), (t27 = e12.current) == null || t27.addEventListener("keydown", w5);
      let y6 = false;
      if (l21(tabbable(e12.current, { includeContainer: b8 })), typeof s10 == "number")
        u10[s10] ? (o34 = u10[s10]) == null || o34.focus() : (console.error(`There is no element with given index ${s10}`), y6 = true);
      else if (s10 === "autofocus") {
        const K3 = u10.find((d12) => d12 == null ? void 0 : d12.hasAttribute("autofocus"));
        K3 ? K3.focus() : y6 = true;
      }
      (E2 && y6 || s10 === "container") && ((c19 = e12.current) == null || c19.focus());
    } else
      l21([]), L2(void 0);
    return T2;
  }, [e12.current, k2, w5]), {
    current: i16,
    focusables: u10,
    focusNext: Tt,
    focusPrev: Mt,
    updateFocusableElements: () => {
      e12.current && l21(tabbable(e12.current, { includeContainer: b8 }));
    }
  };
};

// node_modules/@storefront-ui/react/dist/hooks/usePagination/usePagination.mjs
var import_react8 = __toESM(require_react(), 1);
var import_jw_paginate = __toESM(require_jw_paginate(), 1);
function d6({ totalItems: g8, currentPage: t27 = 1, pageSize: a32 = 10, maxPages: n28 = 1 }) {
  const [e12, c19] = (0, import_react8.useState)((0, import_jw_paginate.default)(g8, t27, a32, n28)), [o34, s10] = (0, import_react8.useState)(t27);
  return (0, import_react8.useEffect)(() => {
    s10(t27);
  }, [t27]), (0, import_react8.useEffect)(() => {
    c19((0, import_jw_paginate.default)(g8, o34, a32, n28));
  }, [g8, o34, a32, n28]), {
    totalPages: e12.totalPages,
    maxVisiblePages: n28,
    itemsPerPage: a32,
    pages: e12.pages,
    selectedPage: o34,
    endPage: e12.endPage,
    startPage: e12.startPage,
    next: () => s10(e12.currentPage += 1),
    prev: () => s10(e12.currentPage -= 1),
    setPage: (f17) => s10(e12.currentPage = f17)
  };
}

// node_modules/@storefront-ui/react/dist/shared/utils/refs.mjs
function o30(e12) {
  return (t27) => {
    e12.forEach((n28) => {
      typeof n28 == "function" ? n28(t27) : n28 != null && (n28.current = t27);
    });
  };
}

// node_modules/@storefront-ui/react/dist/shared/utils/index.mjs
var import_react9 = __toESM(require_react(), 1);
var f12 = import_react9.forwardRef;

// node_modules/@storefront-ui/react/dist/components/SfAccordionItem/SfAccordionItem.mjs
var import_jsx_runtime104 = __toESM(require_jsx_runtime(), 1);
var import_react10 = __toESM(require_react(), 1);
var import_classnames13 = __toESM(require_classnames(), 1);
var f13 = (0, import_react10.forwardRef)((i16, o34) => {
  const { open: s10, onToggle: e12, children: t27, summary: r14, summaryClassName: c19, ...n28 } = i16;
  return (0, import_jsx_runtime104.jsxs)("details", { ref: o34, open: s10, "data-testid": "accordion-item", ...n28, children: [
    (0, import_jsx_runtime104.jsx)(
      "summary",
      {
        onClick: (a32) => {
          a32.preventDefault(), e12 == null || e12(!s10);
        },
        className: (0, import_classnames13.default)(
          c19,
          "list-none [&::-webkit-details-marker]:hidden cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:outline focus-visible:rounded-sm"
        ),
        children: r14
      }
    ),
    t27
  ] });
});
var v3 = f13;

// node_modules/@storefront-ui/react/dist/components/SfButton/SfButton.mjs
var import_jsx_runtime105 = __toESM(require_jsx_runtime(), 1);
var import_classnames14 = __toESM(require_classnames(), 1);
var f14 = "button";
var h5 = {
  [G.primary]: "text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300",
  [G.secondary]: "text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50",
  [G.tertiary]: "text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent"
};
var v4 = (r14, t27) => {
  switch (r14) {
    case j.sm:
      return [t27 ? "p-1.5" : "leading-5 text-sm py-1.5 px-3", "gap-1.5"];
    case j.lg:
      return [t27 ? "p-4" : "py-3 leading-6 px-6", "gap-3"];
    default:
      return [t27 ? "p-2" : "py-2 leading-6 px-4", "gap-2"];
  }
};
var x4 = f12((r14, t27) => {
  const {
    as: s10,
    className: o34,
    size: d12 = j.base,
    variant: n28 = G.primary,
    square: p10,
    children: l21,
    slotPrefix: m26,
    slotSuffix: b8,
    ...c19
  } = r14, a32 = s10 || f14;
  return (0, import_jsx_runtime105.jsxs)(
    a32,
    {
      ref: t27,
      type: typeof a32 == "string" && a32.toLowerCase() === "button" ? "button" : void 0,
      className: (0, import_classnames14.default)(
        "inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed",
        v4(d12, p10),
        h5[n28],
        o34
      ),
      "data-testid": "button",
      ...c19,
      children: [
        m26,
        l21,
        b8
      ]
    }
  );
});
var C4 = x4;

// node_modules/@storefront-ui/react/dist/components/SfCheckbox/SfCheckbox.mjs
var import_jsx_runtime106 = __toESM(require_jsx_runtime(), 1);
var import_classnames15 = __toESM(require_classnames(), 1);
var import_react11 = __toESM(require_react(), 1);
var i14 = (0, import_react11.forwardRef)(
  ({ invalid: e12, className: r14, ...t27 }, a32) => (0, import_jsx_runtime106.jsx)(
    "input",
    {
      className: (0, import_classnames15.default)(
        "h-[18px] min-w-[18px] border-2 rounded-sm appearance-none cursor-pointer text-gray-500 enabled:hover:border-primary-800 enabled:active:border-primary-900 enabled:hover:checked:text-primary-800 enabled:hover:indeterminate:text-primary-800 enabled:active:checked:text-primary-900 enabled:checked:text-primary-700 checked:bg-checked-checkbox-current border-current indeterminate:bg-indeterminate-checkbox-current enabled:indeterminate:text-primary-700 disabled:text-gray-300 hover:text-gray-300 disabled:cursor-not-allowed enabled:focus-visible:outline enabled:focus-visible:outline-offset",
        {
          "border-negative-700 enabled:hover:border-negative-800 enabled:active:border-negative-900": e12
        },
        r14
      ),
      type: "checkbox",
      ref: a32,
      "data-testid": "checkbox",
      ...t27
    }
  )
);
var m23 = i14;

// node_modules/@storefront-ui/react/dist/components/SfChip/SfChip.mjs
var import_jsx_runtime107 = __toESM(require_jsx_runtime(), 1);
var import_classnames16 = __toESM(require_classnames(), 1);
var import_react12 = __toESM(require_react(), 1);
var x5 = (e12, r14, i16, n28) => {
  switch (e12) {
    case C.sm:
      return r14 ? "px-1.5" : [i16 ? "pl-1.5" : "pl-3", n28 ? "pr-1.5" : "pr-3"];
    default:
      return r14 ? "px-2" : [i16 ? "pl-2" : "pl-4", n28 ? "pr-2" : "pr-4"];
  }
};
var f15 = (e12) => {
  switch (e12) {
    case C.sm:
      return "text-sm py-1.5 gap-1.5";
    default:
      return "text-base py-2 gap-2";
  }
};
var y3 = (0, import_react12.forwardRef)(
  ({
    children: e12,
    size: r14 = C.base,
    className: i16,
    inputProps: n28,
    square: c19 = false,
    slotPrefix: a32,
    slotSuffix: p10,
    ...o34
  }, l21) => {
    const s10 = (0, import_react12.useId)();
    return (0, import_jsx_runtime107.jsxs)(import_jsx_runtime107.Fragment, { children: [
      (0, import_jsx_runtime107.jsx)(
        "input",
        {
          id: s10,
          ref: l21,
          className: "absolute w-0 outline-none appearance-none peer",
          type: "checkbox",
          ...n28
        }
      ),
      (0, import_jsx_runtime107.jsxs)(
        "label",
        {
          htmlFor: s10,
          className: (0, import_classnames16.default)(
            "cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline",
            f15(r14),
            x5(r14, c19, a32, p10),
            i16
          ),
          "data-testid": "chip",
          ...o34,
          children: [
            a32,
            e12,
            p10
          ]
        }
      )
    ] });
  }
);
var S2 = y3;

// node_modules/@storefront-ui/react/dist/components/SfDrawer/SfDrawer.mjs
var import_jsx_runtime108 = __toESM(require_jsx_runtime(), 1);
var import_classnames17 = __toESM(require_classnames(), 1);
var import_react13 = __toESM(require_react(), 1);
var h7 = "aside";
var S3 = (r14) => ({
  "left-0": r14 !== A.right,
  "right-0": r14 !== A.left,
  "top-0": r14 !== A.bottom,
  "bottom-0": r14 !== A.top
});
var k = f12(
  ({
    as: r14,
    open: a32,
    placement: m26 = A.left,
    disableClickAway: i16,
    disableEsc: o34,
    onClose: t27,
    className: s10,
    children: c19,
    ...p10
  }, d12) => {
    const w5 = r14 || h7, e12 = (0, import_react13.useRef)(null);
    useClickAway_default(e12, () => {
      i16 || t27 == null || t27();
    });
    const u10 = (g8) => {
      o34 || g8.key === "Escape" && (t27 == null || t27());
    };
    return a32 ? (0, import_jsx_runtime108.jsx)(
      w5,
      {
        ref: o30([e12, d12]),
        className: (0, import_classnames17.default)("fixed", S3(m26), s10),
        tabIndex: "-1",
        "data-testid": "drawer",
        ...p10,
        onKeyDown: u10,
        children: c19
      }
    ) : null;
  }
);
var I2 = k;

// node_modules/@storefront-ui/react/dist/components/SfInput/SfInput.mjs
var import_jsx_runtime109 = __toESM(require_jsx_runtime(), 1);
var import_classnames18 = __toESM(require_classnames(), 1);
var h8 = "span";
var b4 = {
  [$.sm]: " h-[32px]",
  [$.base]: "h-[40px]",
  [$.lg]: "h-[48px]"
};
var w2 = f12(
  ({ wrapperAs: i16, size: n28 = $.base, slotPrefix: a32, slotSuffix: s10, invalid: e12, className: o34, wrapperClassName: p10, ...u10 }, c19) => {
    const l21 = i16 || h8, { isFocusVisible: m26 } = f11({ isTextInput: true });
    return (0, import_jsx_runtime109.jsxs)(
      l21,
      {
        className: (0, import_classnames18.default)([
          "flex items-center gap-2 px-4 bg-white rounded-md ring-1 text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2",
          {
            "ring-2 ring-negative-700": e12,
            "ring-1 ring-neutral-200": !e12,
            "focus-within:outline focus-within:outline-offset": m26
          },
          b4[n28],
          p10
        ]),
        "data-testid": "input",
        children: [
          a32,
          (0, import_jsx_runtime109.jsx)(
            "input",
            {
              className: (0, import_classnames18.default)([
                "min-w-[80px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent",
                o34
              ]),
              type: "text",
              "data-testid": "input-field",
              size: 1,
              ref: c19,
              ...u10
            }
          ),
          s10
        ]
      }
    );
  }
);
var F2 = w2;

// node_modules/@storefront-ui/react/dist/components/SfLink/SfLink.mjs
var import_jsx_runtime110 = __toESM(require_jsx_runtime(), 1);
var import_classnames19 = __toESM(require_classnames(), 1);
var p7 = "a";
var u8 = f12((t27, a32) => {
  const i16 = {
    [R.primary]: "text-primary-700 underline hover:text-primary-800 active:text-primary-900",
    [R.secondary]: "underline hover:text-primary-800 active:text-primary-900"
  }, { as: e12, className: s10, children: o34, variant: n28 = R.primary, ...m26 } = t27;
  return (0, import_jsx_runtime110.jsx)(
    e12 || p7,
    {
      ref: a32,
      className: (0, import_classnames19.default)(
        "focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm",
        i16[n28],
        s10
      ),
      "data-testid": "link",
      ...m26,
      children: o34
    }
  );
});
var b5 = u8;

// node_modules/@storefront-ui/react/dist/components/SfListItem/SfListItem.mjs
var import_jsx_runtime111 = __toESM(require_jsx_runtime(), 1);
var import_classnames20 = __toESM(require_classnames(), 1);
var v5 = {
  [J.sm]: "text-sm px-4 py-1",
  [J.base]: "px-4 py-2",
  [J.lg]: "p-4"
};
var N3 = "li";
var w3 = "span";
var S4 = f12((o34, r14) => {
  const {
    size: n28 = J.base,
    disabled: e12,
    selected: c19,
    className: f17,
    slotPrefix: i16,
    slotSuffix: a32,
    as: m26,
    childrenTag: d12,
    children: u10,
    ...p10
  } = o34, x7 = m26 || N3, s10 = d12 || w3;
  return (0, import_jsx_runtime111.jsxs)(
    x7,
    {
      ref: r14,
      className: (0, import_classnames20.default)(
        "inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10",
        {
          "cursor-not-allowed pointer-events-none text-disabled-900": e12,
          "font-medium": c19
        },
        v5[n28],
        f17
      ),
      disabled: e12,
      "data-testid": "list-item",
      ...p10,
      children: [
        i16 && (0, import_jsx_runtime111.jsx)(s10, { className: e12 ? "text-disabled-500" : "text-neutral-500", children: i16 }),
        (0, import_jsx_runtime111.jsx)(s10, { className: "flex flex-col w-full min-w-0", children: u10 }),
        a32 && (0, import_jsx_runtime111.jsx)(s10, { className: e12 ? "text-disabled-500" : "text-neutral-500", children: a32 })
      ]
    }
  );
});
var y4 = S4;

// node_modules/@storefront-ui/react/dist/components/SfModal/SfModal.mjs
var import_jsx_runtime112 = __toESM(require_jsx_runtime(), 1);
var import_classnames21 = __toESM(require_classnames(), 1);
var import_react14 = __toESM(require_react(), 1);
var D2 = "div";
var K = f12(
  ({ as: m26, open: f17, disableClickAway: n28, disableEsc: t27, onClose: o34, className: d12, children: c19, ...r14 }, l21) => {
    const p10 = m26 || D2, a32 = (0, import_react14.useRef)(null);
    useClickAway_default(a32, () => {
      n28 || o34 == null || o34();
    });
    const u10 = (e12) => {
      var i16;
      if (!t27 && e12.key === "Escape" && (o34 == null || o34()), "onKeyDown" in r14 && typeof r14.onKeyDown == "function")
        return (i16 = r14.onKeyDown) == null ? void 0 : i16.call(r14, e12);
    };
    return z3(a32, {
      trapTabs: true,
      activeState: f17,
      initialFocus: false,
      initialFocusContainerFallback: true
    }), f17 ? (0, import_jsx_runtime112.jsx)(
      p10,
      {
        ref: o30([a32, l21]),
        className: (0, import_classnames21.default)(
          "fixed inset-0 w-fit h-fit m-auto p-6 pt-10 lg:p-10 border border-neutral-100 bg-white shadow-xl rounded-xl outline-none",
          d12
        ),
        tabIndex: "-1",
        "aria-modal": "true",
        "data-testid": "modal",
        ...r14,
        onKeyDown: u10,
        children: c19
      }
    ) : null;
  }
);
var v6 = K;

// node_modules/@storefront-ui/react/dist/components/SfRadio/SfRadio.mjs
var import_jsx_runtime113 = __toESM(require_jsx_runtime(), 1);
var import_classnames22 = __toESM(require_classnames(), 1);
var import_react15 = __toESM(require_react(), 1);
var p8 = (0, import_react15.forwardRef)((r14, d12) => {
  const { invalid: a32, className: i16, disabled: e12, ...o34 } = r14;
  return (0, import_jsx_runtime113.jsx)(
    "input",
    {
      ref: d12,
      type: "radio",
      disabled: e12,
      className: (0, import_classnames22.default)(
        "h-5 w-5 border-2 p-[3px] bg-clip-content rounded-full appearance-none cursor-pointer focus-visible:outline focus-visible:outline-offset disabled:border-disabled-500 disabled:cursor-not-allowed disabled:checked:bg-disabled-500 disabled:checked:border-disabled-500",
        a32 && !e12 ? "border-negative-700 checked:bg-negative-700 hover:border-negative-800 hover:checked:bg-negative-800 active:border-negative-900 active:checked:bg-negative-900" : "border-neutral-500 active:border-primary-900 hover:border-primary-700 checked:bg-primary-700 checked:border-primary-700 hover:checked:bg-primary-800 hover:checked:border-primary-800 active:checked:bg-primary-900 active:checked:border-primary-900",
        i16
      ),
      ...o34
    }
  );
});

// node_modules/@storefront-ui/react/dist/components/SfSwitch/SfSwitch.mjs
var import_jsx_runtime114 = __toESM(require_jsx_runtime(), 1);
var import_react16 = __toESM(require_react(), 1);
var import_classnames23 = __toESM(require_classnames(), 1);
var i15 = (0, import_react16.forwardRef)(
  ({ invalid: r14, className: o34, ...e12 }, b8) => (0, import_jsx_runtime114.jsx)(
    "input",
    {
      ref: b8,
      className: (0, import_classnames23.default)(
        "appearance-none h-5 min-w-[36px] bg-transparent border-2 border-gray-500 rounded-full relative ease-in-out duration-300 hover:border-primary-800 hover:before:checked:bg-white checked:before:left-1/2 checked:before:ml-0 checked:before:mr-0.5 disabled:before:bg-gray-500/50 hover:before:bg-primary-800 active:border-primary-800 active:before:bg-primary-800 checked:bg-none checked:bg-primary-700 checked:border-primary-700 checked:before:bg-white hover:checked:bg-primary-800 hover:checked:border-primary-800 disabled:border-gray-500/50 checked:disabled:before:bg-white checked:disabled:bg-gray-500/50 checked:disabled:border-0 before:transition-all  before:w-3.5 before:h-3.5 before:bg-gray-500 before:absolute before:top-0 before:bottom-0 before:my-auto before:rounded-full before:left-0 before:ml-0.5 before:ease-in-out before:duration-300 cursor-pointer disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-offset",
        {
          "border-negative-700 hover:border-negative-800 active:border-negative-900 before:bg-negative-900": r14
        },
        o34
      ),
      type: "checkbox",
      role: "switch",
      "data-testid": "switch",
      "aria-checked": e12 == null ? void 0 : e12.checked,
      ...e12
    }
  )
);
var l20 = i15;

// node_modules/@storefront-ui/react/dist/components/SfScrollable/SfScrollable.mjs
var import_jsx_runtime115 = __toESM(require_jsx_runtime(), 1);
var import_react17 = __toESM(require_react(), 1);
var import_classnames24 = __toESM(require_classnames(), 1);
var X2 = "div";
var Y2 = f12(
  ({
    as: R2,
    direction: i16 = u.horizontal,
    buttonsPlacement: a32 = T.block,
    activeIndex: m26,
    reduceMotion: c19,
    drag: u10,
    onDragStart: b8,
    onDragEnd: g8,
    onScroll: p10,
    onPrev: n28,
    onNext: f17,
    isActiveIndexCentered: h9,
    className: C5,
    wrapperClassName: j4,
    prevDisabled: x7,
    nextDisabled: S5,
    buttonPrevAriaLabel: q4 = "Previous",
    buttonNextAriaLabel: F3 = "Next",
    style: Z2,
    children: P5,
    slotPreviousButton: z4,
    slotNextButton: k2,
    ...T2
  }, H2) => {
    const L2 = R2 || X2, e12 = i16 === u.horizontal, s10 = a32 === T.block, l21 = a32 === T.floating, O2 = (0, import_react17.useMemo)(
      () => ({
        direction: i16,
        activeIndex: m26,
        reduceMotion: c19,
        drag: u10,
        onDragStart: b8,
        onDragEnd: g8,
        onScroll: p10,
        onPrev: n28,
        onNext: f17,
        isActiveIndexCentered: h9
      }),
      [
        i16,
        m26,
        c19,
        u10,
        h9,
        b8,
        g8,
        p10,
        n28,
        f17
      ]
    ), { state: $3, containerRef: E2, getNextButtonProps: B3, getPrevButtonProps: N4 } = z2(O2);
    function G4({ classNameButton: d12 }) {
      return z4 ? (0, import_react17.cloneElement)(z4, N4({ disabled: x7, onClick: n28 })) : (0, import_jsx_runtime115.jsx)(
        C4,
        {
          ...N4({
            square: true,
            variant: "secondary",
            size: "lg",
            disabled: x7,
            slotPrefix: (0, import_jsx_runtime115.jsx)(l5, {}),
            "aria-label": q4,
            className: (0, import_classnames24.default)(
              d12,
              l21 ? "disabled:hidden" : "disabled:!ring-disabled-300 disabled:!text-disabled-500"
            )
          })
        }
      );
    }
    function I3({ classNameButton: d12 }) {
      return k2 ? (0, import_react17.cloneElement)(k2, B3({ disabled: S5, onClick: f17 })) : (0, import_jsx_runtime115.jsx)(
        C4,
        {
          ...B3({
            square: true,
            variant: "secondary",
            size: "lg",
            disabled: S5,
            slotPrefix: (0, import_jsx_runtime115.jsx)(h2, {}),
            "aria-label": F3,
            className: (0, import_classnames24.default)(
              d12,
              l21 ? "disabled:hidden" : "disabled:!ring-disabled-300 disabled:!text-disabled-500"
            )
          })
        }
      );
    }
    return (0, import_jsx_runtime115.jsxs)(
      "div",
      {
        className: (0, import_classnames24.default)(
          "items-center relative",
          e12 ? "flex" : "flex-col h-full inline-flex",
          j4
        ),
        children: [
          a32 !== T.none && (0, import_jsx_runtime115.jsx)(
            G4,
            {
              classNameButton: (0, import_classnames24.default)("!rounded-full bg-white hidden md:block !ring-neutral-500 !text-neutral-500", {
                "mr-4": s10 && e12,
                "mb-4 rotate-90": s10 && !e12,
                "absolute left-4 z-10": l21 && e12,
                "absolute top-4 rotate-90 z-10": l21 && !e12
              })
            }
          ),
          (0, import_jsx_runtime115.jsx)(
            L2,
            {
              className: (0, import_classnames24.default)(C5, "motion-safe:scroll-smooth", {
                "overflow-x-auto flex gap-4": e12,
                "overflow-y-auto flex flex-col gap-4": !e12,
                "cursor-grab": $3.isDragged
              }),
              ref: o30([E2, H2]),
              ...T2,
              children: P5
            }
          ),
          a32 !== T.none && (0, import_jsx_runtime115.jsx)(
            I3,
            {
              classNameButton: (0, import_classnames24.default)("!rounded-full bg-white hidden md:block !ring-neutral-500 !text-neutral-500", {
                "ml-4": s10 && e12,
                "mt-4 rotate-90": s10 && !e12,
                "absolute right-4 z-10": l21 && e12,
                "absolute bottom-4 rotate-90 z-10": l21 && !e12
              })
            }
          )
        ]
      }
    );
  }
);
var ie = Y2;

// node_modules/@storefront-ui/react/dist/components/SfTextarea/SfTextarea.mjs
var import_jsx_runtime116 = __toESM(require_jsx_runtime(), 1);
var import_classnames25 = __toESM(require_classnames(), 1);
var import_react18 = __toESM(require_react(), 1);
var u9 = {
  [P.sm]: "h-[56px] py-[6px] pl-4 pr-3",
  [P.base]: "h-[64px] py-2 pl-4 pr-3",
  [P.lg]: "h-[72px], p-3 pl-4"
};
var d11 = (0, import_react18.forwardRef)(
  ({ size: t27 = P.base, invalid: e12 = false, className: i16, ...a32 }, s10) => {
    const { isFocusVisible: o34 } = f11({ isTextInput: true });
    return (0, import_jsx_runtime116.jsx)(
      "textarea",
      {
        ref: s10,
        className: (0, import_classnames25.default)([
          "px-4 bg-white rounded-md text-neutral-900 ring-inset hover:ring-primary-800 focus:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 outline-none",
          {
            "ring-2 ring-negative-700": e12,
            "ring-1 ring-neutral-200": !e12,
            "focus:outline focus:outline-offset": o34
          },
          u9[t27],
          i16
        ]),
        "data-testid": "textarea",
        ...a32
      }
    );
  }
);
export {
  O as InitialFocusType,
  Et as Scrollable,
  v3 as SfAccordionItem,
  b as SfBadge,
  Y as SfBadgePlacement,
  X as SfBadgeVariant,
  C4 as SfButton,
  j as SfButtonSize,
  G as SfButtonVariant,
  m23 as SfCheckbox,
  S2 as SfChip,
  C as SfChipSize,
  d as SfCounter,
  U as SfCounterSize,
  I2 as SfDrawer,
  A as SfDrawerPlacement,
  u2 as SfDropdown,
  n as SfIconAdd,
  n2 as SfIconAddShoppingCart,
  m2 as SfIconAlokai,
  f as SfIconAlokaiFull,
  n3 as SfIconArrowBack,
  l3 as SfIconArrowDownward,
  l4 as SfIconArrowForward,
  p3 as SfIconArrowUpward,
  h as SfIconBase,
  i as SfIconBlock,
  m3 as SfIconCalendarToday,
  n4 as SfIconCall,
  f2 as SfIconCancel,
  m4 as SfIconCheck,
  m5 as SfIconCheckBox,
  d2 as SfIconCheckBoxOutlineBlank,
  m6 as SfIconCheckCircle,
  l5 as SfIconChevronLeft,
  h2 as SfIconChevronRight,
  m7 as SfIconCircle,
  s as SfIconClose,
  n5 as SfIconCloseSm,
  n6 as SfIconCompareArrows,
  f3 as SfIconContactSupport,
  m8 as SfIconCreditCard,
  n7 as SfIconDelete,
  i2 as SfIconDownload,
  c3 as SfIconEmail,
  c4 as SfIconError,
  i3 as SfIconExpandLess,
  m9 as SfIconExpandMore,
  n8 as SfIconFacebook,
  l6 as SfIconFavorite,
  c5 as SfIconFavoriteFilled,
  v as SfIconGridView,
  n9 as SfIconHelp,
  n10 as SfIconHome,
  f4 as SfIconIndeterminateCheckBox,
  l7 as SfIconInfo,
  f5 as SfIconInstagram,
  d3 as SfIconLanguage,
  n11 as SfIconLocalShipping,
  n12 as SfIconLocal_fire_department,
  l8 as SfIconLocationOn,
  r9 as SfIconLocationOnFilled,
  m10 as SfIconLock,
  A3 as SfIconLockOpen,
  l9 as SfIconLogin,
  l10 as SfIconLogout,
  c7 as SfIconMenu,
  c8 as SfIconMoreHoriz,
  c9 as SfIconMoreVert,
  c10 as SfIconOpenInNew,
  p4 as SfIconOpenSource,
  i5 as SfIconPackage,
  f6 as SfIconPercent,
  i6 as SfIconPerson,
  c11 as SfIconPinterest,
  n13 as SfIconPublishedWithChanges,
  f7 as SfIconRadioButtonChecked,
  f8 as SfIconRadioButtonUnchecked,
  i7 as SfIconReact,
  c13 as SfIconRemove,
  p5 as SfIconRemoveShoppingCart,
  n14 as SfIconSafetyCheck,
  i8 as SfIconSchedule,
  n15 as SfIconSearch,
  q3 as SfIconSell,
  A4 as SfIconShare,
  e7 as SfIconShoppingCart,
  i9 as SfIconShoppingCartCheckout,
  q as SfIconSize,
  s3 as SfIconSort,
  l11 as SfIconStar,
  m12 as SfIconStarFilled,
  n16 as SfIconStarHalf,
  i10 as SfIconThumbDown,
  n17 as SfIconThumbUp,
  n18 as SfIconTune,
  m13 as SfIconTwitter,
  m14 as SfIconUndo,
  l12 as SfIconUnfoldMore,
  m15 as SfIconUpload,
  n19 as SfIconViewList,
  n20 as SfIconVisibility,
  n21 as SfIconVisibilityOff,
  e8 as SfIconVsfDiamond,
  m16 as SfIconVuejs,
  l13 as SfIconVuestorefront,
  i11 as SfIconWarehouse,
  f9 as SfIconWarning,
  n22 as SfIconYoutube,
  F2 as SfInput,
  $ as SfInputSize,
  b5 as SfLink,
  R as SfLinkVariant,
  y4 as SfListItem,
  J as SfListItemSize,
  m17 as SfLoaderCircular,
  b2 as SfLoaderLinear,
  e10 as SfLoaderLinearSize,
  Q as SfLoaderSize,
  v6 as SfModal,
  S as SfPopoverPlacement,
  tt as SfPopoverStrategy,
  u3 as SfProgressCircular,
  h3 as SfProgressLinear,
  e11 as SfProgressLinearSize,
  Z as SfProgressSize,
  p8 as SfRadio,
  $2 as SfRating,
  E as SfRatingButton,
  V as SfRatingButtonSize,
  _ as SfRatingSize,
  ie as SfScrollable,
  T as SfScrollableButtonsPlacement,
  u as SfScrollableDirection,
  I as SfSelect,
  B as SfSelectSize,
  l20 as SfSwitch,
  d11 as SfTextarea,
  P as SfTextareaSize,
  d5 as SfThumbnail,
  z as SfThumbnailSize,
  h4 as SfTooltip,
  n24 as composeHandlers,
  o28 as createPropsGetter,
  o30 as mergeRefs,
  f12 as polymorphicForwardRef,
  p6 as useDisclosure,
  C2 as useDropdown,
  f11 as useFocusVisible,
  d6 as usePagination,
  P2 as usePopover,
  z2 as useScrollable,
  F as useTooltip,
  z3 as useTrapFocus
};
/*! Bundled license information:

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
//# sourceMappingURL=@storefront-ui_react.js.map
