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
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
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

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames2() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames2.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
      }
    })();
  }
});

// node_modules/debounce/index.js
var require_debounce = __commonJS({
  "node_modules/debounce/index.js"(exports, module) {
    function debounce2(func, wait, immediate) {
      var timeout, args, context, timestamp, result;
      if (null == wait)
        wait = 100;
      function later() {
        var last = Date.now() - timestamp;
        if (last < wait && last >= 0) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) {
            result = func.apply(context, args);
            context = args = null;
          }
        }
      }
      ;
      var debounced = function() {
        context = this;
        args = arguments;
        timestamp = Date.now();
        var callNow = immediate && !timeout;
        if (!timeout)
          timeout = setTimeout(later, wait);
        if (callNow) {
          result = func.apply(context, args);
          context = args = null;
        }
        return result;
      };
      debounced.clear = function() {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
      };
      debounced.flush = function() {
        if (timeout) {
          result = func.apply(context, args);
          context = args = null;
          clearTimeout(timeout);
          timeout = null;
        }
      };
      return debounced;
    }
    debounce2.debounce = debounce2;
    module.exports = debounce2;
  }
});

// assets/shared/app.tsx
var useAttrsState = (ctx, initialAttrs) => {
  const [attrs, setAttrs] = React.useState(initialAttrs);
  const updateAttr = (attrName) => (attrValue) => {
    setAttrs((attrs2) => ({ ...attrs2, [attrName]: attrValue }));
    ctx.pushEvent(`update_${attrName}`, attrValue);
  };
  React.useEffect(() => {
    ctx.handleEvent("update", (updates) => {
      console.log("Attribute update from server", updates);
      setAttrs((attrs2) => ({
        ...Object.assign(attrs2, updates)
      }));
    });
  }, []);
  return [attrs, updateAttr];
};
var AppContainer = ({ children }) => /* @__PURE__ */ React.createElement("div", { className: "flex p-2 rounded-md bg-blue-100 border-gray-300 border border-solid font-inter font-medium text-gray-600" }, children);

// assets/shared/error.tsx
var Error2 = ({ message }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "flex p-2 rounded-md bg-red-100 border-red-700 border border-dashed" }, /* @__PURE__ */ React.createElement(
  "svg",
  {
    className: "h-6 w-6 flex-none text-red-700",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  },
  /* @__PURE__ */ React.createElement(
    "path",
    {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    }
  )
), /* @__PURE__ */ React.createElement("div", { className: "px-2 text-red-700 font-inter font-medium text-sm" }, message)));
var error_default = Error2;

// assets/shared/form/select.tsx
var Select = ({ name, label, options, selectedOption, onChange }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", { htmlFor: name, className: "block mb-1 text-sm font-medium" }, label), /* @__PURE__ */ React.createElement(
  "select",
  {
    id: name,
    defaultValue: selectedOption,
    onChange: (e) => onChange(e.target.value),
    className: "bg-gray-50 bg-caret-down bg-no-repeat bg-[center_right_10px] bg-[length:10px] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pr-5 appearance-none"
  },
  options.map((option) => /* @__PURE__ */ React.createElement("option", { key: option.value, value: option.value }, option.label))
));
var select_default = Select;

// assets/shared/form/search_select.tsx
var import_classnames = __toESM(require_classnames());
var import_debounce = __toESM(require_debounce());
var SearchInput = ({
  name,
  selectedValue,
  searchTerm,
  searchResultTimestamp,
  onSearch
}) => {
  const performSearch = (0, import_debounce.default)((searchTerm2) => {
    onSearch(searchTerm2.toLowerCase());
  }, 300);
  const [localSearchTerm, setLocalSearchTerm] = React.useState(searchTerm ?? "");
  React.useEffect(() => {
    selectedValue && setLocalSearchTerm(selectedValue);
  }, [selectedValue]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: (0, import_classnames.default)("w-5 h-5", {
        "bg-green-200": selectedValue,
        "text-green-800": selectedValue,
        "border-green-800": selectedValue,
        "rounded-lg": selectedValue
      })
    },
    selectedValue ? /* @__PURE__ */ React.createElement(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
      }
    ) : /* @__PURE__ */ React.createElement(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      }
    )
  )), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: localSearchTerm,
      name,
      autoComplete: "off",
      onInput: (e) => {
        setLocalSearchTerm(e.target.value);
        performSearch(e.target.value);
      },
      className: "bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pl-9"
    }
  )));
};
var SearchResult = ({ resultItems, itemRenderer, onSelect }) => {
  return /* @__PURE__ */ React.createElement("div", { className: "max-h-36 overflow-auto rounded-b-lg" }, /* @__PURE__ */ React.createElement("div", { className: "w-max min-w-full" }, resultItems.map((item) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: item.index,
      onClick: () => onSelect(item),
      className: "px-2 py-0.5 cursor-pointer bg-gray-50 hover:bg-blue-600 hover:text-white border-b border-b-solid border-b-gray-300 last:border-b-none"
    },
    itemRenderer(item)
  ))));
};
var SearchSelect = ({
  name,
  label,
  searchTerm,
  onSearch,
  searchResultTimestamp,
  resultItems,
  itemRenderer,
  className,
  onSelect,
  selectedValue
}) => {
  return /* @__PURE__ */ React.createElement("div", { className }, /* @__PURE__ */ React.createElement("label", { htmlFor: name, className: "block mb-1 text-sm font-medium" }, label), /* @__PURE__ */ React.createElement(
    SearchInput,
    {
      name,
      onSearch,
      searchResultTimestamp,
      searchTerm,
      selectedValue
    }
  ), resultItems && /* @__PURE__ */ React.createElement(
    SearchResult,
    {
      resultItems,
      itemRenderer,
      onSelect
    }
  ));
};
var search_select_default = SearchSelect;

// assets/get_cell/gvk_option.tsx
var GVKOption = ({ gvk }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-gray-400" }, gvk.api_version), /* @__PURE__ */ React.createElement("div", { className: "text-sm" }, gvk.kind));
var gvk_option_default = GVKOption;

// assets/get_cell/app.tsx
var App = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = useAttrsState(ctx, initialAttrs);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    select_default,
    {
      name: "type",
      label: "Type",
      options: [{ label: "GET", value: "get" }],
      selectedOption: "get",
      onChange: (value) => console.log(value)
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    search_select_default,
    {
      className: "max-w-full pl-3 w-80",
      name: "gvk",
      label: "Resource Kind",
      onSearch: updateAttr("search_term"),
      searchTerm: attrs["search_term"],
      searchResultTimestamp: attrs["search_result_timestamp"],
      resultItems: attrs["search_result_items"],
      onSelect: updateAttr("gvk"),
      itemRenderer: (item) => /* @__PURE__ */ React.createElement(gvk_option_default, { key: item.index, gvk: item }),
      selectedValue: attrs["gvk"]?.kind
    }
  )));
};
var app_default = App;

// assets/get_cell/main.tsx
var loadReact = async (ctx, attrs) => {
  if (attrs.mix_env == "prod") {
    await ctx.importJS("https://unpkg.com/react@18/umd/react.production.min.js");
    await ctx.importJS(
      "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"
    );
  } else {
    await ctx.importJS("https://unpkg.com/react@18/umd/react.development.js");
    await ctx.importJS(
      "https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"
    );
  }
};
var init = async (ctx, attrs) => {
  await loadReact(ctx, attrs);
  console.log("attrs", attrs);
  console.log("ctx", ctx);
  ctx.root.innerHTML = "loading...";
  ctx.importCSS("main.css");
  ctx.importCSS(
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
  );
  const root = ReactDOM.createRoot(ctx.root);
  if (attrs.error) {
    return root.render(/* @__PURE__ */ React.createElement(error_default, { message: attrs.error }));
  }
  root.render(
    /* @__PURE__ */ React.createElement(AppContainer, null, /* @__PURE__ */ React.createElement(app_default, { initialAttrs: attrs, ctx }))
  );
};
export {
  init
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RlYm91bmNlL2luZGV4LmpzIiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvYXBwLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Vycm9yLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Zvcm0vc2VsZWN0LnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Zvcm0vc2VhcmNoX3NlbGVjdC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL2dldF9jZWxsL2d2a19vcHRpb24udHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9nZXRfY2VsbC9hcHAudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9nZXRfY2VsbC9tYWluLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohXG5cdENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuXHRMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHRodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXHR2YXIgbmF0aXZlQ29kZVN0cmluZyA9ICdbbmF0aXZlIGNvZGVdJztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgIWFyZy50b1N0cmluZy50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsICIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAqIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAqIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuICogbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy4gVGhlIGZ1bmN0aW9uIGFsc28gaGFzIGEgcHJvcGVydHkgJ2NsZWFyJyBcbiAqIHRoYXQgaXMgYSBmdW5jdGlvbiB3aGljaCB3aWxsIGNsZWFyIHRoZSB0aW1lciB0byBwcmV2ZW50IHByZXZpb3VzbHkgc2NoZWR1bGVkIGV4ZWN1dGlvbnMuIFxuICpcbiAqIEBzb3VyY2UgdW5kZXJzY29yZS5qc1xuICogQHNlZSBodHRwOi8vdW5zY3JpcHRhYmxlLmNvbS8yMDA5LzAzLzIwL2RlYm91bmNpbmctamF2YXNjcmlwdC1tZXRob2RzL1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3Rpb24gdG8gd3JhcFxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVvdXQgaW4gbXMgKGAxMDBgKVxuICogQHBhcmFtIHtCb29sZWFufSB3aGV0aGVyIHRvIGV4ZWN1dGUgYXQgdGhlIGJlZ2lubmluZyAoYGZhbHNlYClcbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSl7XG4gIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcbiAgaWYgKG51bGwgPT0gd2FpdCkgd2FpdCA9IDEwMDtcblxuICBmdW5jdGlvbiBsYXRlcigpIHtcbiAgICB2YXIgbGFzdCA9IERhdGUubm93KCkgLSB0aW1lc3RhbXA7XG5cbiAgICBpZiAobGFzdCA8IHdhaXQgJiYgbGFzdCA+PSAwKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGRlYm91bmNlZCA9IGZ1bmN0aW9uKCl7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGlmICghdGltZW91dCkgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgZGVib3VuY2VkLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgXG4gIGRlYm91bmNlZC5mbHVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGRlYm91bmNlZDtcbn07XG5cbi8vIEFkZHMgY29tcGF0aWJpbGl0eSBmb3IgRVMgbW9kdWxlc1xuZGVib3VuY2UuZGVib3VuY2UgPSBkZWJvdW5jZTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsICJpbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuXG50eXBlIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPiA9IChcbiAgYXR0ck5hbWU6IHN0cmluZyxcbikgPT4gKEF0dHJWYWx1ZTogQXR0cnNUeXBlW2tleW9mIEF0dHJzVHlwZV0pID0+IHZvaWRcblxuZXhwb3J0IGNvbnN0IHVzZUF0dHJzU3RhdGUgPSA8QXR0cnNUeXBlIGV4dGVuZHMge30+KFxuICBjdHg6IEtpbm9Db250ZXh0PEF0dHJzVHlwZT4sXG4gIGluaXRpYWxBdHRyczogQXR0cnNUeXBlLFxuKTogW0F0dHJzVHlwZSwgVXBkYXRlQXR0ckZ1bjxBdHRyc1R5cGU+XSA9PiB7XG4gIGNvbnN0IFthdHRycywgc2V0QXR0cnNdID0gUmVhY3QudXNlU3RhdGU8QXR0cnNUeXBlPihpbml0aWFsQXR0cnMpXG4gIGNvbnN0IHVwZGF0ZUF0dHI6IFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPiA9IChhdHRyTmFtZSkgPT4gKGF0dHJWYWx1ZSkgPT4ge1xuICAgIHNldEF0dHJzKChhdHRycykgPT4gKHsgLi4uYXR0cnMsIFthdHRyTmFtZV06IGF0dHJWYWx1ZSB9KSlcbiAgICBjdHgucHVzaEV2ZW50KGB1cGRhdGVfJHthdHRyTmFtZX1gLCBhdHRyVmFsdWUpXG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGN0eC5oYW5kbGVFdmVudDxBdHRyc1R5cGU+KCd1cGRhdGUnLCAodXBkYXRlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0F0dHJpYnV0ZSB1cGRhdGUgZnJvbSBzZXJ2ZXInLCB1cGRhdGVzKVxuICAgICAgc2V0QXR0cnMoKGF0dHJzKSA9PiAoe1xuICAgICAgICAuLi5PYmplY3QuYXNzaWduKGF0dHJzLCB1cGRhdGVzKSxcbiAgICAgIH0pKVxuICAgIH0pXG4gIH0sIFtdKVxuICByZXR1cm4gW2F0dHJzLCB1cGRhdGVBdHRyXVxufVxuXG5leHBvcnQgY29uc3QgQXBwQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHNXaXRoQ2hpbGRyZW4pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtMiByb3VuZGVkLW1kIGJnLWJsdWUtMTAwIGJvcmRlci1ncmF5LTMwMCBib3JkZXIgYm9yZGVyLXNvbGlkIGZvbnQtaW50ZXIgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMFwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pXG4iLCAiaW50ZXJmYWNlIEVycm9yUHJvcHMge1xuICBtZXNzYWdlOiBzdHJpbmdcbn1cbmNvbnN0IEVycm9yID0gKHsgbWVzc2FnZSB9OiBFcnJvclByb3BzKSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtMiByb3VuZGVkLW1kIGJnLXJlZC0xMDAgYm9yZGVyLXJlZC03MDAgYm9yZGVyIGJvcmRlci1kYXNoZWRcIj5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBmbGV4LW5vbmUgdGV4dC1yZWQtNzAwXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgZD1cIk0xMiA5djMuNzVtLTkuMzAzIDMuMzc2Yy0uODY2IDEuNS4yMTcgMy4zNzQgMS45NDggMy4zNzRoMTQuNzFjMS43MyAwIDIuODEzLTEuODc0IDEuOTQ4LTMuMzc0TDEzLjk0OSAzLjM3OGMtLjg2Ni0xLjUtMy4wMzItMS41LTMuODk4IDBMMi42OTcgMTYuMTI2ek0xMiAxNS43NWguMDA3di4wMDhIMTJ2LS4wMDh6XCJcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHRleHQtcmVkLTcwMCBmb250LWludGVyIGZvbnQtbWVkaXVtIHRleHQtc21cIj5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yXG4iLCAiY29uc3QgU2VsZWN0ID0gKHsgbmFtZSwgbGFiZWwsIG9wdGlvbnMsIHNlbGVjdGVkT3B0aW9uLCBvbkNoYW5nZSB9KSA9PiAoXG4gIDw+XG4gICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9IGNsYXNzTmFtZT1cImJsb2NrIG1iLTEgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAge2xhYmVsfVxuICAgIDwvbGFiZWw+XG4gICAgPHNlbGVjdFxuICAgICAgaWQ9e25hbWV9XG4gICAgICBkZWZhdWx0VmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlIS50YXJnZXQhLnZhbHVlKX1cbiAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYmctY2FyZXQtZG93biBiZy1uby1yZXBlYXQgYmctW2NlbnRlcl9yaWdodF8xMHB4XSBiZy1bbGVuZ3RoOjEwcHhdIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIgcHItNSBhcHBlYXJhbmNlLW5vbmVcIlxuICAgID5cbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKSl9XG4gICAgPC9zZWxlY3Q+XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcbiIsICJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2RlYm91bmNlJ1xuXG5jb25zdCBTZWFyY2hJbnB1dCA9ICh7XG4gIG5hbWUsXG4gIHNlbGVjdGVkVmFsdWUsXG4gIHNlYXJjaFRlcm0sXG4gIHNlYXJjaFJlc3VsdFRpbWVzdGFtcCxcbiAgb25TZWFyY2gsXG59KSA9PiB7XG4gIGNvbnN0IHBlcmZvcm1TZWFyY2ggPSBkZWJvdW5jZSgoc2VhcmNoVGVybSkgPT4ge1xuICAgIG9uU2VhcmNoKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbiAgfSwgMzAwKVxuICBjb25zdCBbbG9jYWxTZWFyY2hUZXJtLCBzZXRMb2NhbFNlYXJjaFRlcm1dID0gUmVhY3QudXNlU3RhdGUoc2VhcmNoVGVybSA/PyAnJylcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZWxlY3RlZFZhbHVlICYmIHNldExvY2FsU2VhcmNoVGVybShzZWxlY3RlZFZhbHVlKVxuICB9LCBbc2VsZWN0ZWRWYWx1ZV0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHBsLTMgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX1cbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3ctNSBoLTUnLCB7XG4gICAgICAgICAgICAgICdiZy1ncmVlbi0yMDAnOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgICAgICAndGV4dC1ncmVlbi04MDAnOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgICAgICAnYm9yZGVyLWdyZWVuLTgwMCc6IHNlbGVjdGVkVmFsdWUsXG4gICAgICAgICAgICAgICdyb3VuZGVkLWxnJzogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RlZFZhbHVlID8gKFxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgZD1cIk05IDEyLjc1TDExLjI1IDE1IDE1IDkuNzVNMjEgMTJjMCAxLjI2OC0uNjMgMi4zOS0xLjU5MyAzLjA2OGEzLjc0NSAzLjc0NSAwIDAxLTEuMDQzIDMuMjk2IDMuNzQ1IDMuNzQ1IDAgMDEtMy4yOTYgMS4wNDNBMy43NDUgMy43NDUgMCAwMTEyIDIxYy0xLjI2OCAwLTIuMzktLjYzLTMuMDY4LTEuNTkzYTMuNzQ2IDMuNzQ2IDAgMDEtMy4yOTYtMS4wNDMgMy43NDUgMy43NDUgMCAwMS0xLjA0My0zLjI5NkEzLjc0NSAzLjc0NSAwIDAxMyAxMmMwLTEuMjY4LjYzLTIuMzkgMS41OTMtMy4wNjhhMy43NDUgMy43NDUgMCAwMTEuMDQzLTMuMjk2IDMuNzQ2IDMuNzQ2IDAgMDEzLjI5Ni0xLjA0M0EzLjc0NiAzLjc0NiAwIDAxMTIgM2MxLjI2OCAwIDIuMzkuNjMgMy4wNjggMS41OTNhMy43NDYgMy43NDYgMCAwMTMuMjk2IDEuMDQzIDMuNzQ2IDMuNzQ2IDAgMDExLjA0MyAzLjI5NkEzLjc0NSAzLjc0NSAwIDAxMjEgMTJ6XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIxIDIxbC01LjE5Ny01LjE5N20wIDBBNy41IDcuNSAwIDEwNS4xOTYgNS4xOTZhNy41IDcuNSAwIDAwMTAuNjA3IDEwLjYwN3pcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17bG9jYWxTZWFyY2hUZXJtfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICBvbklucHV0PXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0TG9jYWxTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgcGVyZm9ybVNlYXJjaChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMiBwbC05XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IFNlYXJjaFJlc3VsdCA9ICh7IHJlc3VsdEl0ZW1zLCBpdGVtUmVuZGVyZXIsIG9uU2VsZWN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLTM2IG92ZXJmbG93LWF1dG8gcm91bmRlZC1iLWxnXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctbWF4IG1pbi13LWZ1bGxcIj5cbiAgICAgICAge3Jlc3VsdEl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aXRlbS5pbmRleH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KGl0ZW0pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0wLjUgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS01MCBob3ZlcjpiZy1ibHVlLTYwMCBob3Zlcjp0ZXh0LXdoaXRlIGJvcmRlci1iIGJvcmRlci1iLXNvbGlkIGJvcmRlci1iLWdyYXktMzAwIGxhc3Q6Ym9yZGVyLWItbm9uZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2l0ZW1SZW5kZXJlcihpdGVtKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBTZWFyY2hTZWxlY3QgPSAoe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgc2VhcmNoVGVybSxcbiAgb25TZWFyY2gsXG4gIHNlYXJjaFJlc3VsdFRpbWVzdGFtcCxcbiAgcmVzdWx0SXRlbXMsXG4gIGl0ZW1SZW5kZXJlcixcbiAgY2xhc3NOYW1lLFxuICBvblNlbGVjdCxcbiAgc2VsZWN0ZWRWYWx1ZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtuYW1lfSBjbGFzc05hbWU9XCJibG9jayBtYi0xIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxTZWFyY2hJbnB1dFxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgIHNlYXJjaFJlc3VsdFRpbWVzdGFtcD17c2VhcmNoUmVzdWx0VGltZXN0YW1wfVxuICAgICAgICBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfVxuICAgICAgICBzZWxlY3RlZFZhbHVlPXtzZWxlY3RlZFZhbHVlfVxuICAgICAgLz5cbiAgICAgIHtyZXN1bHRJdGVtcyAmJiAoXG4gICAgICAgIDxTZWFyY2hSZXN1bHRcbiAgICAgICAgICByZXN1bHRJdGVtcz17cmVzdWx0SXRlbXN9XG4gICAgICAgICAgaXRlbVJlbmRlcmVyPXtpdGVtUmVuZGVyZXJ9XG4gICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hTZWxlY3RcbiIsICJleHBvcnQgY29uc3QgR1ZLT3B0aW9uID0gKHsgZ3ZrIH0pID0+IChcbiAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMFwiPntndmsuYXBpX3ZlcnNpb259PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e2d2ay5raW5kfTwvZGl2PlxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgR1ZLT3B0aW9uXG4iLCAiaW1wb3J0IHsgR0VUQ2VsbEF0dHJzIH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCB7IHVzZUF0dHJzU3RhdGUgfSBmcm9tICcuLi9zaGFyZWQvYXBwJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9zaGFyZWQvZm9ybS9zZWxlY3QnXG5pbXBvcnQgU2VhcmNoU2VsZWN0IGZyb20gJy4uL3NoYXJlZC9mb3JtL3NlYXJjaF9zZWxlY3QnXG5pbXBvcnQgR1ZLT3B0aW9uIGZyb20gJy4vZ3ZrX29wdGlvbidcblxuaW50ZXJmYWNlIEFwcFByb3BzIHtcbiAgaW5pdGlhbEF0dHJzOiBHRVRDZWxsQXR0cnNcbiAgY3R4OiBLaW5vQ29udGV4dDxHRVRDZWxsQXR0cnM+XG59XG5cbmNvbnN0IEFwcCA9ICh7IGluaXRpYWxBdHRycywgY3R4IH06IEFwcFByb3BzKSA9PiB7XG4gIGNvbnN0IFthdHRycywgdXBkYXRlQXR0cl0gPSB1c2VBdHRyc1N0YXRlPEdFVENlbGxBdHRycz4oY3R4LCBpbml0aWFsQXR0cnMpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgbGFiZWw9XCJUeXBlXCJcbiAgICAgICAgICBvcHRpb25zPXtbeyBsYWJlbDogJ0dFVCcsIHZhbHVlOiAnZ2V0JyB9XX1cbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbj1cImdldFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gY29uc29sZS5sb2codmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VhcmNoU2VsZWN0XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctZnVsbCBwbC0zIHctODBcIlxuICAgICAgICAgIG5hbWU9XCJndmtcIlxuICAgICAgICAgIGxhYmVsPVwiUmVzb3VyY2UgS2luZFwiXG4gICAgICAgICAgb25TZWFyY2g9e3VwZGF0ZUF0dHIoJ3NlYXJjaF90ZXJtJyl9XG4gICAgICAgICAgc2VhcmNoVGVybT17YXR0cnNbJ3NlYXJjaF90ZXJtJ119XG4gICAgICAgICAgc2VhcmNoUmVzdWx0VGltZXN0YW1wPXthdHRyc1snc2VhcmNoX3Jlc3VsdF90aW1lc3RhbXAnXX1cbiAgICAgICAgICByZXN1bHRJdGVtcz17YXR0cnNbJ3NlYXJjaF9yZXN1bHRfaXRlbXMnXX1cbiAgICAgICAgICBvblNlbGVjdD17dXBkYXRlQXR0cignZ3ZrJyl9XG4gICAgICAgICAgaXRlbVJlbmRlcmVyPXsoaXRlbSkgPT4gPEdWS09wdGlvbiBrZXk9e2l0ZW0uaW5kZXh9IGd2az17aXRlbX0gLz59XG4gICAgICAgICAgc2VsZWN0ZWRWYWx1ZT17YXR0cnNbJ2d2ayddPy5raW5kfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iLCAiaW1wb3J0IHsgQXBwQ29udGFpbmVyIH0gZnJvbSAnLi4vc2hhcmVkL2FwcCdcbmltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCB7IEdFVENlbGxBdHRycyB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vc2hhcmVkL2Vycm9yJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCdcblxuY29uc3QgbG9hZFJlYWN0ID0gYXN5bmMgKFxuICBjdHg6IEtpbm9Db250ZXh0PEdFVENlbGxBdHRycz4sXG4gIGF0dHJzOiBHRVRDZWxsQXR0cnMsXG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKGF0dHJzLm1peF9lbnYgPT0gJ3Byb2QnKSB7XG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKCdodHRwczovL3VucGtnLmNvbS9yZWFjdEAxOC91bWQvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKVxuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcbiAgICAgICdodHRwczovL3VucGtnLmNvbS9yZWFjdC1kb21AMTguMi4wL3VtZC9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnLFxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE4L3VtZC9yZWFjdC5kZXZlbG9wbWVudC5qcycpXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxOC4yLjAvdW1kL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcycsXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBpbml0ID0gYXN5bmMgKFxuICBjdHg6IEtpbm9Db250ZXh0PEdFVENlbGxBdHRycz4sXG4gIGF0dHJzOiBHRVRDZWxsQXR0cnMsXG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgYXdhaXQgbG9hZFJlYWN0KGN0eCwgYXR0cnMpXG4gIGNvbnNvbGUubG9nKCdhdHRycycsIGF0dHJzKVxuICBjb25zb2xlLmxvZygnY3R4JywgY3R4KVxuXG4gIGN0eC5yb290LmlubmVySFRNTCA9ICdsb2FkaW5nLi4uJ1xuXG4gIGN0eC5pbXBvcnRDU1MoJ21haW4uY3NzJylcbiAgY3R4LmltcG9ydENTUyhcbiAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyxcbiAgKVxuXG4gIGNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGN0eC5yb290KVxuICBpZiAoYXR0cnMuZXJyb3IpIHtcbiAgICByZXR1cm4gcm9vdC5yZW5kZXIoPEVycm9yIG1lc3NhZ2U9e2F0dHJzLmVycm9yfSAvPilcbiAgfVxuXG4gIHJvb3QucmVuZGVyKFxuICAgIDxBcHBDb250YWluZXI+XG4gICAgICA8QXBwIGluaXRpYWxBdHRycz17YXR0cnN9IGN0eD17Y3R4fSAvPlxuICAgIDwvQXBwQ29udGFpbmVyPixcbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7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QUFLLEtBQUssT0FBTyxLQUFLLE1BQU07QUFBQSxNQUMvRCxlQUFlLE1BQU0sS0FBSyxHQUFHO0FBQUE7QUFBQSxFQUMvQixDQUNGLENBQ0Y7QUFFSjtBQUVBLElBQU8sY0FBUTs7O0FDckNmLElBQU0sWUFBWSxPQUNoQixLQUNBLFVBQ2tCO0FBQ2xCLE1BQUksTUFBTSxXQUFXLFFBQVE7QUFDM0IsVUFBTSxJQUFJLFNBQVMsd0RBQXdEO0FBQzNFLFVBQU0sSUFBSTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRixPQUFPO0FBQ0wsVUFBTSxJQUFJLFNBQVMscURBQXFEO0FBQ3hFLFVBQU0sSUFBSTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxPQUFPLE9BQ2xCLEtBQ0EsVUFDa0I7QUFDbEIsUUFBTSxVQUFVLEtBQUssS0FBSztBQUMxQixVQUFRLElBQUksU0FBUyxLQUFLO0FBQzFCLFVBQVEsSUFBSSxPQUFPLEdBQUc7QUFFdEIsTUFBSSxLQUFLLFlBQVk7QUFFckIsTUFBSSxVQUFVLFVBQVU7QUFDeEIsTUFBSTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsUUFBTSxPQUFPLFNBQVMsV0FBVyxJQUFJLElBQUk7QUFDekMsTUFBSSxNQUFNLE9BQU87QUFDZixXQUFPLEtBQUssT0FBTyxvQ0FBQyxpQkFBTSxTQUFTLE1BQU0sT0FBTyxDQUFFO0FBQUEsRUFDcEQ7QUFFQSxPQUFLO0FBQUEsSUFDSCxvQ0FBQyxvQkFDQyxvQ0FBQyxlQUFJLGNBQWMsT0FBTyxLQUFVLENBQ3RDO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogWyJjbGFzc05hbWVzIiwgImRlYm91bmNlIiwgImF0dHJzIiwgIkVycm9yIiwgImRlYm91bmNlIiwgInNlYXJjaFRlcm0iLCAiY2xhc3NOYW1lcyJdCn0K
