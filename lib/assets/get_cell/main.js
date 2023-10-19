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
    ctx.pushEvent(`update_${attrName}`, attrValue);
  };
  React.useEffect(() => {
    ctx.handleEvent("update", (updates) => {
      console.log("michi", updates);
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

// assets/shared/form/search.tsx
var import_classnames = __toESM(require_classnames());
var import_debounce = __toESM(require_debounce());
var SearchInput = ({
  name,
  label,
  searchTerm,
  searchResultTimestamp,
  onSearch
}) => {
  const [loading, setLoading] = React.useState(false);
  const performSearch = (searchTerm2) => {
    setLoading(true);
    onSearch(searchTerm2);
  };
  React.useEffect(() => setLoading(false), [searchResultTimestamp]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", { htmlFor: name, className: "block mb-1 text-sm font-medium" }, label), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: (0, import_classnames.default)("w-4 h-4", { "animate-spin": loading })
    },
    loading ? /* @__PURE__ */ React.createElement(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
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
      defaultValue: searchTerm,
      name,
      onChange: (0, import_debounce.default)((event) => performSearch(event.target.value), 300),
      className: "bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pl-8"
    }
  )));
};
var SearchResult = ({ searchResult }) => {
  return /* @__PURE__ */ React.createElement("div", null, searchResult.map((item) => /* @__PURE__ */ React.createElement("div", null)));
};
var Search = ({
  name,
  label,
  searchTerm,
  onSearch,
  searchResultTimestamp,
  searchResult = []
}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    SearchInput,
    {
      name,
      label,
      onSearch,
      searchResultTimestamp,
      searchTerm
    }
  ), searchResult.length > 0 && /* @__PURE__ */ React.createElement(SearchResult, { searchResult }));
};
var search_default = Search;

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
    search_default,
    {
      name: "resource",
      label: "Resource",
      onSearch: updateAttr("search_term"),
      searchTerm: attrs["search_term"],
      searchResultTimestamp: attrs["search_result_timestamp"]
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RlYm91bmNlL2luZGV4LmpzIiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvYXBwLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Vycm9yLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Zvcm0vc2VsZWN0LnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Zvcm0vc2VhcmNoLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvZ2V0X2NlbGwvYXBwLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvZ2V0X2NlbGwvbWFpbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuXHRDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cblx0TGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcblx0aHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIG5hdGl2ZUNvZGVTdHJpbmcgPSAnW25hdGl2ZSBjb2RlXSc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nICYmICFhcmcudG9TdHJpbmcudG9TdHJpbmcoKS5pbmNsdWRlcygnW25hdGl2ZSBjb2RlXScpKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCAiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gKiBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gKiBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAqIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuIFRoZSBmdW5jdGlvbiBhbHNvIGhhcyBhIHByb3BlcnR5ICdjbGVhcicgXG4gKiB0aGF0IGlzIGEgZnVuY3Rpb24gd2hpY2ggd2lsbCBjbGVhciB0aGUgdGltZXIgdG8gcHJldmVudCBwcmV2aW91c2x5IHNjaGVkdWxlZCBleGVjdXRpb25zLiBcbiAqXG4gKiBAc291cmNlIHVuZGVyc2NvcmUuanNcbiAqIEBzZWUgaHR0cDovL3Vuc2NyaXB0YWJsZS5jb20vMjAwOS8wMy8yMC9kZWJvdW5jaW5nLWphdmFzY3JpcHQtbWV0aG9kcy9cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmN0aW9uIHRvIHdyYXBcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lb3V0IGluIG1zIChgMTAwYClcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gd2hldGhlciB0byBleGVjdXRlIGF0IHRoZSBiZWdpbm5pbmcgKGBmYWxzZWApXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpe1xuICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG4gIGlmIChudWxsID09IHdhaXQpIHdhaXQgPSAxMDA7XG5cbiAgZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgdmFyIGxhc3QgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgaWYgKGxhc3QgPCB3YWl0ICYmIGxhc3QgPj0gMCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBkZWJvdW5jZWQgPSBmdW5jdGlvbigpe1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBpZiAoIXRpbWVvdXQpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGRlYm91bmNlZC5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIFxuICBkZWJvdW5jZWQuZmx1c2ggPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIFxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBkZWJvdW5jZWQ7XG59O1xuXG4vLyBBZGRzIGNvbXBhdGliaWxpdHkgZm9yIEVTIG1vZHVsZXNcbmRlYm91bmNlLmRlYm91bmNlID0gZGVib3VuY2U7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCAiaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcblxudHlwZSBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoXG4gIGF0dHJOYW1lOiBzdHJpbmcsXG4pID0+IChBdHRyVmFsdWU6IEF0dHJzVHlwZVtrZXlvZiBBdHRyc1R5cGVdKSA9PiB2b2lkXG5cbmV4cG9ydCBjb25zdCB1c2VBdHRyc1N0YXRlID0gPEF0dHJzVHlwZSBleHRlbmRzIHt9PihcbiAgY3R4OiBLaW5vQ29udGV4dDxBdHRyc1R5cGU+LFxuICBpbml0aWFsQXR0cnM6IEF0dHJzVHlwZSxcbik6IFtBdHRyc1R5cGUsIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPl0gPT4ge1xuICBjb25zdCBbYXR0cnMsIHNldEF0dHJzXSA9IFJlYWN0LnVzZVN0YXRlPEF0dHJzVHlwZT4oaW5pdGlhbEF0dHJzKVxuICBjb25zdCB1cGRhdGVBdHRyOiBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoYXR0ck5hbWUpID0+IChhdHRyVmFsdWUpID0+IHtcbiAgICBjdHgucHVzaEV2ZW50KGB1cGRhdGVfJHthdHRyTmFtZX1gLCBhdHRyVmFsdWUpXG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGN0eC5oYW5kbGVFdmVudDxBdHRyc1R5cGU+KCd1cGRhdGUnLCAodXBkYXRlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ21pY2hpJywgdXBkYXRlcylcbiAgICAgIHNldEF0dHJzKChhdHRycykgPT4gKHtcbiAgICAgICAgLi4uT2JqZWN0LmFzc2lnbihhdHRycywgdXBkYXRlcyksXG4gICAgICB9KSlcbiAgICB9KVxuICB9LCBbXSlcbiAgcmV0dXJuIFthdHRycywgdXBkYXRlQXR0cl1cbn1cblxuZXhwb3J0IGNvbnN0IEFwcENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH06IFByb3BzV2l0aENoaWxkcmVuKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwLTIgcm91bmRlZC1tZCBiZy1ibHVlLTEwMCBib3JkZXItZ3JheS0zMDAgYm9yZGVyIGJvcmRlci1zb2xpZCBmb250LWludGVyIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKVxuIiwgImludGVyZmFjZSBFcnJvclByb3BzIHtcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5jb25zdCBFcnJvciA9ICh7IG1lc3NhZ2UgfTogRXJyb3JQcm9wcykgPT4gKFxuICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwLTIgcm91bmRlZC1tZCBiZy1yZWQtMTAwIGJvcmRlci1yZWQtNzAwIGJvcmRlciBib3JkZXItZGFzaGVkXCI+XG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgZmxleC1ub25lIHRleHQtcmVkLTcwMFwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIGQ9XCJNMTIgOXYzLjc1bS05LjMwMyAzLjM3NmMtLjg2NiAxLjUuMjE3IDMuMzc0IDEuOTQ4IDMuMzc0aDE0LjcxYzEuNzMgMCAyLjgxMy0xLjg3NCAxLjk0OC0zLjM3NEwxMy45NDkgMy4zNzhjLS44NjYtMS41LTMuMDMyLTEuNS0zLjg5OCAwTDIuNjk3IDE2LjEyNnpNMTIgMTUuNzVoLjAwN3YuMDA4SDEydi0uMDA4elwiXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiB0ZXh0LXJlZC03MDAgZm9udC1pbnRlciBmb250LW1lZGl1bSB0ZXh0LXNtXCI+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvclxuIiwgImNvbnN0IFNlbGVjdCA9ICh7IG5hbWUsIGxhYmVsLCBvcHRpb25zLCBzZWxlY3RlZE9wdGlvbiwgb25DaGFuZ2UgfSkgPT4gKFxuICA8PlxuICAgIDxsYWJlbCBodG1sRm9yPXtuYW1lfSBjbGFzc05hbWU9XCJibG9jayBtYi0xIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgIHtsYWJlbH1cbiAgICA8L2xhYmVsPlxuICAgIDxzZWxlY3RcbiAgICAgIGlkPXtuYW1lfVxuICAgICAgZGVmYXVsdFZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSEudGFyZ2V0IS52YWx1ZSl9XG4gICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJnLWNhcmV0LWRvd24gYmctbm8tcmVwZWF0IGJnLVtjZW50ZXJfcmlnaHRfMTBweF0gYmctW2xlbmd0aDoxMHB4XSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yIHByLTUgYXBwZWFyYW5jZS1ub25lXCJcbiAgICA+XG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cbiAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICkpfVxuICAgIDwvc2VsZWN0PlxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0XG4iLCAiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdkZWJvdW5jZSdcblxuY29uc3QgU2VhcmNoSW5wdXQgPSAoe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgc2VhcmNoVGVybSxcbiAgc2VhcmNoUmVzdWx0VGltZXN0YW1wLFxuICBvblNlYXJjaCxcbn0pID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHBlcmZvcm1TZWFyY2ggPSAoc2VhcmNoVGVybSkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBvblNlYXJjaChzZWFyY2hUZXJtKVxuICB9XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSwgW3NlYXJjaFJlc3VsdFRpbWVzdGFtcF0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtuYW1lfSBjbGFzc05hbWU9XCJibG9jayBtYi0xIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHBsLTMgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX1cbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3ctNCBoLTQnLCB7ICdhbmltYXRlLXNwaW4nOiBsb2FkaW5nIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNi4wMjMgOS4zNDhoNC45OTJ2LS4wMDFNMi45ODUgMTkuNjQ0di00Ljk5Mm0wIDBoNC45OTJtLTQuOTkzIDBsMy4xODEgMy4xODNhOC4yNSA4LjI1IDAgMDAxMy44MDMtMy43TTQuMDMxIDkuODY1YTguMjUgOC4yNSAwIDAxMTMuODAzLTMuN2wzLjE4MSAzLjE4Mm0wLTQuOTkxdjQuOTlcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMjEgMjFsLTUuMTk3LTUuMTk3bTAgMEE3LjUgNy41IDAgMTA1LjE5NiA1LjE5NmE3LjUgNy41IDAgMDAxMC42MDcgMTAuNjA3elwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtkZWJvdW5jZSgoZXZlbnQpID0+IHBlcmZvcm1TZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKSwgMzAwKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIgcGwtOFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBTZWFyY2hSZXN1bHQgPSAoeyBzZWFyY2hSZXN1bHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7c2VhcmNoUmVzdWx0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgU2VhcmNoID0gKHtcbiAgbmFtZSxcbiAgbGFiZWwsXG4gIHNlYXJjaFRlcm0sXG4gIG9uU2VhcmNoLFxuICBzZWFyY2hSZXN1bHRUaW1lc3RhbXAsXG4gIHNlYXJjaFJlc3VsdCA9IFtdLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VhcmNoSW5wdXRcbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgIHNlYXJjaFJlc3VsdFRpbWVzdGFtcD17c2VhcmNoUmVzdWx0VGltZXN0YW1wfVxuICAgICAgICBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfVxuICAgICAgLz5cbiAgICAgIHtzZWFyY2hSZXN1bHQubGVuZ3RoID4gMCAmJiA8U2VhcmNoUmVzdWx0IHNlYXJjaFJlc3VsdD17c2VhcmNoUmVzdWx0fSAvPn1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hcbiIsICJpbXBvcnQgeyBHRVRDZWxsQXR0cnMgfSBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuaW1wb3J0IHsgdXNlQXR0cnNTdGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9hcHAnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL3NoYXJlZC9mb3JtL3NlbGVjdCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vc2hhcmVkL2Zvcm0vc2VhcmNoJ1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuICBpbml0aWFsQXR0cnM6IEdFVENlbGxBdHRyc1xuICBjdHg6IEtpbm9Db250ZXh0PEdFVENlbGxBdHRycz5cbn1cblxuY29uc3QgQXBwID0gKHsgaW5pdGlhbEF0dHJzLCBjdHggfTogQXBwUHJvcHMpID0+IHtcbiAgY29uc3QgW2F0dHJzLCB1cGRhdGVBdHRyXSA9IHVzZUF0dHJzU3RhdGU8R0VUQ2VsbEF0dHJzPihjdHgsIGluaXRpYWxBdHRycylcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICBsYWJlbD1cIlR5cGVcIlxuICAgICAgICAgIG9wdGlvbnM9e1t7IGxhYmVsOiAnR0VUJywgdmFsdWU6ICdnZXQnIH1dfVxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPVwiZ2V0XCJcbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBjb25zb2xlLmxvZyh2YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWFyY2hcbiAgICAgICAgICBuYW1lPVwicmVzb3VyY2VcIlxuICAgICAgICAgIGxhYmVsPVwiUmVzb3VyY2VcIlxuICAgICAgICAgIG9uU2VhcmNoPXt1cGRhdGVBdHRyKCdzZWFyY2hfdGVybScpfVxuICAgICAgICAgIHNlYXJjaFRlcm09e2F0dHJzWydzZWFyY2hfdGVybSddfVxuICAgICAgICAgIHNlYXJjaFJlc3VsdFRpbWVzdGFtcD17YXR0cnNbJ3NlYXJjaF9yZXN1bHRfdGltZXN0YW1wJ119XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiIsICJpbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICcuLi9zaGFyZWQvYXBwJ1xuaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuaW1wb3J0IHsgR0VUQ2VsbEF0dHJzIH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCBFcnJvciBmcm9tICcuLi9zaGFyZWQvZXJyb3InXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuXG5jb25zdCBsb2FkUmVhY3QgPSBhc3luYyAoXG4gIGN0eDogS2lub0NvbnRleHQ8R0VUQ2VsbEF0dHJzPixcbiAgYXR0cnM6IEdFVENlbGxBdHRycyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoYXR0cnMubWl4X2VudiA9PSAncHJvZCcpIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE4L3VtZC9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxOC4yLjAvdW1kL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycsXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUygnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3RAMTgvdW1kL3JlYWN0LmRldmVsb3BtZW50LmpzJylcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICAnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtZG9tQDE4LjIuMC91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGluaXQgPSBhc3luYyAoXG4gIGN0eDogS2lub0NvbnRleHQ8R0VUQ2VsbEF0dHJzPixcbiAgYXR0cnM6IEdFVENlbGxBdHRycyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBhd2FpdCBsb2FkUmVhY3QoY3R4LCBhdHRycylcbiAgY29uc29sZS5sb2coJ2F0dHJzJywgYXR0cnMpXG4gIGNvbnNvbGUubG9nKCdjdHgnLCBjdHgpXG5cbiAgY3R4LnJvb3QuaW5uZXJIVE1MID0gJ2xvYWRpbmcuLi4nXG5cbiAgY3R4LmltcG9ydENTUygnbWFpbi5jc3MnKVxuICBjdHguaW1wb3J0Q1NTKFxuICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXAnLFxuICApXG5cbiAgY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoY3R4LnJvb3QpXG4gIGlmIChhdHRycy5lcnJvcikge1xuICAgIHJldHVybiByb290LnJlbmRlcig8RXJyb3IgbWVzc2FnZT17YXR0cnMuZXJyb3J9IC8+KVxuICB9XG5cbiAgcm9vdC5yZW5kZXIoXG4gICAgPEFwcENvbnRhaW5lcj5cbiAgICAgIDxBcHAgaW5pdGlhbEF0dHJzPXthdHRyc30gY3R4PXtjdHh9IC8+XG4gICAgPC9BcHBDb250YWluZXI+LFxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBT0EsS0FBQyxXQUFZO0FBQ1o7QUFFQSxVQUFJLFNBQVMsQ0FBQyxFQUFFO0FBQ2hCLFVBQUksbUJBQW1CO0FBRXZCLGVBQVNBLGNBQWE7QUFDckIsWUFBSSxVQUFVLENBQUM7QUFFZixpQkFBUyxJQUFJLEdBQUcsSUFBSSxVQUFVLFFBQVEsS0FBSztBQUMxQyxjQUFJLE1BQU0sVUFBVSxDQUFDO0FBQ3JCLGNBQUksQ0FBQztBQUFLO0FBRVYsY0FBSSxVQUFVLE9BQU87QUFFckIsY0FBSSxZQUFZLFlBQVksWUFBWSxVQUFVO0FBQ2pELG9CQUFRLEtBQUssR0FBRztBQUFBLFVBQ2pCLFdBQVcsTUFBTSxRQUFRLEdBQUcsR0FBRztBQUM5QixnQkFBSSxJQUFJLFFBQVE7QUFDZixrQkFBSSxRQUFRQSxZQUFXLE1BQU0sTUFBTSxHQUFHO0FBQ3RDLGtCQUFJLE9BQU87QUFDVix3QkFBUSxLQUFLLEtBQUs7QUFBQSxjQUNuQjtBQUFBLFlBQ0Q7QUFBQSxVQUNELFdBQVcsWUFBWSxVQUFVO0FBQ2hDLGdCQUFJLElBQUksYUFBYSxPQUFPLFVBQVUsWUFBWSxDQUFDLElBQUksU0FBUyxTQUFTLEVBQUUsU0FBUyxlQUFlLEdBQUc7QUFDckcsc0JBQVEsS0FBSyxJQUFJLFNBQVMsQ0FBQztBQUMzQjtBQUFBLFlBQ0Q7QUFFQSxxQkFBUyxPQUFPLEtBQUs7QUFDcEIsa0JBQUksT0FBTyxLQUFLLEtBQUssR0FBRyxLQUFLLElBQUksR0FBRyxHQUFHO0FBQ3RDLHdCQUFRLEtBQUssR0FBRztBQUFBLGNBQ2pCO0FBQUEsWUFDRDtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBRUEsZUFBTyxRQUFRLEtBQUssR0FBRztBQUFBLE1BQ3hCO0FBRUEsVUFBSSxPQUFPLFdBQVcsZUFBZSxPQUFPLFNBQVM7QUFDcEQsUUFBQUEsWUFBVyxVQUFVQTtBQUNyQixlQUFPLFVBQVVBO0FBQUEsTUFDbEIsV0FBVyxPQUFPLFdBQVcsY0FBYyxPQUFPLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSztBQUV4RixlQUFPLGNBQWMsQ0FBQyxHQUFHLFdBQVk7QUFDcEMsaUJBQU9BO0FBQUEsUUFDUixDQUFDO0FBQUEsTUFDRixPQUFPO0FBQ04sZUFBTyxhQUFhQTtBQUFBLE1BQ3JCO0FBQUEsSUFDRCxHQUFFO0FBQUE7QUFBQTs7O0FDM0RGO0FBQUE7QUFjQSxhQUFTQyxVQUFTLE1BQU0sTUFBTSxXQUFVO0FBQ3RDLFVBQUksU0FBUyxNQUFNLFNBQVMsV0FBVztBQUN2QyxVQUFJLFFBQVE7QUFBTSxlQUFPO0FBRXpCLGVBQVMsUUFBUTtBQUNmLFlBQUksT0FBTyxLQUFLLElBQUksSUFBSTtBQUV4QixZQUFJLE9BQU8sUUFBUSxRQUFRLEdBQUc7QUFDNUIsb0JBQVUsV0FBVyxPQUFPLE9BQU8sSUFBSTtBQUFBLFFBQ3pDLE9BQU87QUFDTCxvQkFBVTtBQUNWLGNBQUksQ0FBQyxXQUFXO0FBQ2QscUJBQVMsS0FBSyxNQUFNLFNBQVMsSUFBSTtBQUNqQyxzQkFBVSxPQUFPO0FBQUEsVUFDbkI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFDO0FBRUQsVUFBSSxZQUFZLFdBQVU7QUFDeEIsa0JBQVU7QUFDVixlQUFPO0FBQ1Asb0JBQVksS0FBSyxJQUFJO0FBQ3JCLFlBQUksVUFBVSxhQUFhLENBQUM7QUFDNUIsWUFBSSxDQUFDO0FBQVMsb0JBQVUsV0FBVyxPQUFPLElBQUk7QUFDOUMsWUFBSSxTQUFTO0FBQ1gsbUJBQVMsS0FBSyxNQUFNLFNBQVMsSUFBSTtBQUNqQyxvQkFBVSxPQUFPO0FBQUEsUUFDbkI7QUFFQSxlQUFPO0FBQUEsTUFDVDtBQUVBLGdCQUFVLFFBQVEsV0FBVztBQUMzQixZQUFJLFNBQVM7QUFDWCx1QkFBYSxPQUFPO0FBQ3BCLG9CQUFVO0FBQUEsUUFDWjtBQUFBLE1BQ0Y7QUFFQSxnQkFBVSxRQUFRLFdBQVc7QUFDM0IsWUFBSSxTQUFTO0FBQ1gsbUJBQVMsS0FBSyxNQUFNLFNBQVMsSUFBSTtBQUNqQyxvQkFBVSxPQUFPO0FBRWpCLHVCQUFhLE9BQU87QUFDcEIsb0JBQVU7QUFBQSxRQUNaO0FBQUEsTUFDRjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBR0EsSUFBQUEsVUFBUyxXQUFXQTtBQUVwQixXQUFPLFVBQVVBO0FBQUE7QUFBQTs7O0FDOURWLElBQU0sZ0JBQWdCLENBQzNCLEtBQ0EsaUJBQzBDO0FBQzFDLFFBQU0sQ0FBQyxPQUFPLFFBQVEsSUFBSSxNQUFNLFNBQW9CLFlBQVk7QUFDaEUsUUFBTSxhQUF1QyxDQUFDLGFBQWEsQ0FBQyxjQUFjO0FBQ3hFLFFBQUksVUFBVSxVQUFVLFlBQVksU0FBUztBQUFBLEVBQy9DO0FBRUEsUUFBTSxVQUFVLE1BQU07QUFDcEIsUUFBSSxZQUF1QixVQUFVLENBQUMsWUFBWTtBQUNoRCxjQUFRLElBQUksU0FBUyxPQUFPO0FBQzVCLGVBQVMsQ0FBQ0MsWUFBVztBQUFBLFFBQ25CLEdBQUcsT0FBTyxPQUFPQSxRQUFPLE9BQU87QUFBQSxNQUNqQyxFQUFFO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFDSCxHQUFHLENBQUMsQ0FBQztBQUNMLFNBQU8sQ0FBQyxPQUFPLFVBQVU7QUFDM0I7QUFFTyxJQUFNLGVBQWUsQ0FBQyxFQUFFLFNBQVMsTUFDdEMsb0NBQUMsU0FBSSxXQUFVLDhHQUNaLFFBQ0g7OztBQzNCRixJQUFNQyxTQUFRLENBQUMsRUFBRSxRQUFRLE1BQ3ZCLDBEQUNFLG9DQUFDLFNBQUksV0FBVSx3RUFDYjtBQUFBLEVBQUM7QUFBQTtBQUFBLElBQ0MsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsU0FBUTtBQUFBLElBQ1IsZ0JBQWE7QUFBQSxJQUNiLFFBQU87QUFBQSxJQUNQLGVBQVk7QUFBQTtBQUFBLEVBRVo7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLGtCQUFlO0FBQUEsTUFDZixtQkFBZ0I7QUFBQSxNQUNoQixHQUFFO0FBQUE7QUFBQSxFQUNIO0FBQ0gsR0FDQSxvQ0FBQyxTQUFJLFdBQVUsc0RBQ1osT0FDSCxDQUNGLENBQ0Y7QUFHRixJQUFPLGdCQUFRQTs7O0FDM0JmLElBQU0sU0FBUyxDQUFDLEVBQUUsTUFBTSxPQUFPLFNBQVMsZ0JBQWdCLFNBQVMsTUFDL0QsMERBQ0Usb0NBQUMsV0FBTSxTQUFTLE1BQU0sV0FBVSxvQ0FDN0IsS0FDSCxHQUNBO0FBQUEsRUFBQztBQUFBO0FBQUEsSUFDQyxJQUFJO0FBQUEsSUFDSixjQUFjO0FBQUEsSUFDZCxVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUcsT0FBUSxLQUFLO0FBQUEsSUFDMUMsV0FBVTtBQUFBO0FBQUEsRUFFVCxRQUFRLElBQUksQ0FBQyxXQUNaLG9DQUFDLFlBQU8sS0FBSyxPQUFPLE9BQU8sT0FBTyxPQUFPLFNBQ3RDLE9BQU8sS0FDVixDQUNEO0FBQ0gsQ0FDRjtBQUdGLElBQU8saUJBQVE7OztBQ3BCZix3QkFBdUI7QUFDdkIsc0JBQXFCO0FBRXJCLElBQU0sY0FBYyxDQUFDO0FBQUEsRUFDbkI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsTUFBTTtBQUNKLFFBQU0sQ0FBQyxTQUFTLFVBQVUsSUFBSSxNQUFNLFNBQVMsS0FBSztBQUNsRCxRQUFNLGdCQUFnQixDQUFDQyxnQkFBZTtBQUNwQyxlQUFXLElBQUk7QUFDZixhQUFTQSxXQUFVO0FBQUEsRUFDckI7QUFDQSxRQUFNLFVBQVUsTUFBTSxXQUFXLEtBQUssR0FBRyxDQUFDLHFCQUFxQixDQUFDO0FBQ2hFLFNBQ0UsMERBQ0Usb0NBQUMsV0FBTSxTQUFTLE1BQU0sV0FBVSxvQ0FDN0IsS0FDSCxHQUNBLG9DQUFDLFNBQUksV0FBVSxjQUNiLG9DQUFDLFNBQUksV0FBVSwwRUFDYjtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsT0FBTTtBQUFBLE1BQ04sTUFBSztBQUFBLE1BQ0wsU0FBUTtBQUFBLE1BQ1IsZUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsUUFBTztBQUFBLE1BQ1AsZUFBVyxrQkFBQUMsU0FBVyxXQUFXLEVBQUUsZ0JBQWdCLFFBQVEsQ0FBQztBQUFBO0FBQUEsSUFFM0QsVUFDQztBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsZUFBYztBQUFBLFFBQ2QsZ0JBQWU7QUFBQSxRQUNmLEdBQUU7QUFBQTtBQUFBLElBQ0osSUFFQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsZUFBYztBQUFBLFFBQ2QsZ0JBQWU7QUFBQSxRQUNmLEdBQUU7QUFBQTtBQUFBLElBQ0o7QUFBQSxFQUVKLENBQ0YsR0FDQTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsTUFBSztBQUFBLE1BQ0wsY0FBYztBQUFBLE1BQ2Q7QUFBQSxNQUNBLGNBQVUsZ0JBQUFDLFNBQVMsQ0FBQyxVQUFVLGNBQWMsTUFBTSxPQUFPLEtBQUssR0FBRyxHQUFHO0FBQUEsTUFDcEUsV0FBVTtBQUFBO0FBQUEsRUFDWixDQUNGLENBQ0Y7QUFFSjtBQUVBLElBQU0sZUFBZSxDQUFDLEVBQUUsYUFBYSxNQUFNO0FBQ3pDLFNBQ0Usb0NBQUMsYUFDRSxhQUFhLElBQUksQ0FBQyxTQUNqQixvQ0FBQyxXQUFJLENBQ04sQ0FDSDtBQUVKO0FBRUEsSUFBTSxTQUFTLENBQUM7QUFBQSxFQUNkO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0EsZUFBZSxDQUFDO0FBQ2xCLE1BQU07QUFDSixTQUNFLDBEQUNFO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQztBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLEVBQ0YsR0FDQyxhQUFhLFNBQVMsS0FBSyxvQ0FBQyxnQkFBYSxjQUE0QixDQUN4RTtBQUVKO0FBRUEsSUFBTyxpQkFBUTs7O0FDaEZmLElBQU0sTUFBTSxDQUFDLEVBQUUsY0FBYyxJQUFJLE1BQWdCO0FBQy9DLFFBQU0sQ0FBQyxPQUFPLFVBQVUsSUFBSSxjQUE0QixLQUFLLFlBQVk7QUFDekUsU0FDRSwwREFDRSxvQ0FBQyxhQUNDO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxNQUFLO0FBQUEsTUFDTCxPQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsRUFBRSxPQUFPLE9BQU8sT0FBTyxNQUFNLENBQUM7QUFBQSxNQUN4QyxnQkFBZTtBQUFBLE1BQ2YsVUFBVSxDQUFDLFVBQVUsUUFBUSxJQUFJLEtBQUs7QUFBQTtBQUFBLEVBQ3hDLENBQ0YsR0FDQSxvQ0FBQyxhQUNDO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxNQUFLO0FBQUEsTUFDTCxPQUFNO0FBQUEsTUFDTixVQUFVLFdBQVcsYUFBYTtBQUFBLE1BQ2xDLFlBQVksTUFBTSxhQUFhO0FBQUEsTUFDL0IsdUJBQXVCLE1BQU0seUJBQXlCO0FBQUE7QUFBQSxFQUN4RCxDQUNGLENBQ0Y7QUFFSjtBQUVBLElBQU8sY0FBUTs7O0FDL0JmLElBQU0sWUFBWSxPQUNoQixLQUNBLFVBQ2tCO0FBQ2xCLE1BQUksTUFBTSxXQUFXLFFBQVE7QUFDM0IsVUFBTSxJQUFJLFNBQVMsd0RBQXdEO0FBQzNFLFVBQU0sSUFBSTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRixPQUFPO0FBQ0wsVUFBTSxJQUFJLFNBQVMscURBQXFEO0FBQ3hFLFVBQU0sSUFBSTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxPQUFPLE9BQ2xCLEtBQ0EsVUFDa0I7QUFDbEIsUUFBTSxVQUFVLEtBQUssS0FBSztBQUMxQixVQUFRLElBQUksU0FBUyxLQUFLO0FBQzFCLFVBQVEsSUFBSSxPQUFPLEdBQUc7QUFFdEIsTUFBSSxLQUFLLFlBQVk7QUFFckIsTUFBSSxVQUFVLFVBQVU7QUFDeEIsTUFBSTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsUUFBTSxPQUFPLFNBQVMsV0FBVyxJQUFJLElBQUk7QUFDekMsTUFBSSxNQUFNLE9BQU87QUFDZixXQUFPLEtBQUssT0FBTyxvQ0FBQyxpQkFBTSxTQUFTLE1BQU0sT0FBTyxDQUFFO0FBQUEsRUFDcEQ7QUFFQSxPQUFLO0FBQUEsSUFDSCxvQ0FBQyxvQkFDQyxvQ0FBQyxlQUFJLGNBQWMsT0FBTyxLQUFVLENBQ3RDO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogWyJjbGFzc05hbWVzIiwgImRlYm91bmNlIiwgImF0dHJzIiwgIkVycm9yIiwgInNlYXJjaFRlcm0iLCAiY2xhc3NOYW1lcyIsICJkZWJvdW5jZSJdCn0K
