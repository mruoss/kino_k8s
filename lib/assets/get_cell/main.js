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
  ), resultItems.length > 0 && /* @__PURE__ */ React.createElement(
    SearchResult,
    {
      resultItems,
      itemRenderer,
      onSelect
    }
  ));
};
var search_select_default = SearchSelect;

// assets/get_cell/resource.tsx
var ResourceOption = ({ resource }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-gray-400" }, resource.api_version), /* @__PURE__ */ React.createElement("div", { className: "text-sm" }, resource.kind));

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
      name: "resource",
      label: "Resource",
      onSearch: updateAttr("search_term"),
      searchTerm: attrs["search_term"],
      searchResultTimestamp: attrs["search_result_timestamp"],
      resultItems: attrs["search_result_items"],
      onSelect: updateAttr("resource"),
      itemRenderer: (item) => /* @__PURE__ */ React.createElement(ResourceOption, { key: item.index, resource: item }),
      selectedValue: attrs["resource"]?.kind
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RlYm91bmNlL2luZGV4LmpzIiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvYXBwLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Vycm9yLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Zvcm0vc2VsZWN0LnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Zvcm0vc2VhcmNoX3NlbGVjdC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL2dldF9jZWxsL3Jlc291cmNlLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvZ2V0X2NlbGwvYXBwLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvZ2V0X2NlbGwvbWFpbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuXHRDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cblx0TGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcblx0aHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIG5hdGl2ZUNvZGVTdHJpbmcgPSAnW25hdGl2ZSBjb2RlXSc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nICYmICFhcmcudG9TdHJpbmcudG9TdHJpbmcoKS5pbmNsdWRlcygnW25hdGl2ZSBjb2RlXScpKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCAiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gKiBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gKiBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAqIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuIFRoZSBmdW5jdGlvbiBhbHNvIGhhcyBhIHByb3BlcnR5ICdjbGVhcicgXG4gKiB0aGF0IGlzIGEgZnVuY3Rpb24gd2hpY2ggd2lsbCBjbGVhciB0aGUgdGltZXIgdG8gcHJldmVudCBwcmV2aW91c2x5IHNjaGVkdWxlZCBleGVjdXRpb25zLiBcbiAqXG4gKiBAc291cmNlIHVuZGVyc2NvcmUuanNcbiAqIEBzZWUgaHR0cDovL3Vuc2NyaXB0YWJsZS5jb20vMjAwOS8wMy8yMC9kZWJvdW5jaW5nLWphdmFzY3JpcHQtbWV0aG9kcy9cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmN0aW9uIHRvIHdyYXBcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lb3V0IGluIG1zIChgMTAwYClcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gd2hldGhlciB0byBleGVjdXRlIGF0IHRoZSBiZWdpbm5pbmcgKGBmYWxzZWApXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpe1xuICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG4gIGlmIChudWxsID09IHdhaXQpIHdhaXQgPSAxMDA7XG5cbiAgZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgdmFyIGxhc3QgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgaWYgKGxhc3QgPCB3YWl0ICYmIGxhc3QgPj0gMCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBkZWJvdW5jZWQgPSBmdW5jdGlvbigpe1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBpZiAoIXRpbWVvdXQpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGRlYm91bmNlZC5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIFxuICBkZWJvdW5jZWQuZmx1c2ggPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIFxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBkZWJvdW5jZWQ7XG59O1xuXG4vLyBBZGRzIGNvbXBhdGliaWxpdHkgZm9yIEVTIG1vZHVsZXNcbmRlYm91bmNlLmRlYm91bmNlID0gZGVib3VuY2U7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCAiaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcblxudHlwZSBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoXG4gIGF0dHJOYW1lOiBzdHJpbmcsXG4pID0+IChBdHRyVmFsdWU6IEF0dHJzVHlwZVtrZXlvZiBBdHRyc1R5cGVdKSA9PiB2b2lkXG5cbmV4cG9ydCBjb25zdCB1c2VBdHRyc1N0YXRlID0gPEF0dHJzVHlwZSBleHRlbmRzIHt9PihcbiAgY3R4OiBLaW5vQ29udGV4dDxBdHRyc1R5cGU+LFxuICBpbml0aWFsQXR0cnM6IEF0dHJzVHlwZSxcbik6IFtBdHRyc1R5cGUsIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPl0gPT4ge1xuICBjb25zdCBbYXR0cnMsIHNldEF0dHJzXSA9IFJlYWN0LnVzZVN0YXRlPEF0dHJzVHlwZT4oaW5pdGlhbEF0dHJzKVxuICBjb25zdCB1cGRhdGVBdHRyOiBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoYXR0ck5hbWUpID0+IChhdHRyVmFsdWUpID0+IHtcbiAgICBzZXRBdHRycygoYXR0cnMpID0+ICh7IC4uLmF0dHJzLCBbYXR0ck5hbWVdOiBhdHRyVmFsdWUgfSkpXG4gICAgY3R4LnB1c2hFdmVudChgdXBkYXRlXyR7YXR0ck5hbWV9YCwgYXR0clZhbHVlKVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjdHguaGFuZGxlRXZlbnQ8QXR0cnNUeXBlPigndXBkYXRlJywgKHVwZGF0ZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRyaWJ1dGUgdXBkYXRlIGZyb20gc2VydmVyJywgdXBkYXRlcylcbiAgICAgIHNldEF0dHJzKChhdHRycykgPT4gKHtcbiAgICAgICAgLi4uT2JqZWN0LmFzc2lnbihhdHRycywgdXBkYXRlcyksXG4gICAgICB9KSlcbiAgICB9KVxuICB9LCBbXSlcbiAgcmV0dXJuIFthdHRycywgdXBkYXRlQXR0cl1cbn1cblxuZXhwb3J0IGNvbnN0IEFwcENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH06IFByb3BzV2l0aENoaWxkcmVuKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwLTIgcm91bmRlZC1tZCBiZy1ibHVlLTEwMCBib3JkZXItZ3JheS0zMDAgYm9yZGVyIGJvcmRlci1zb2xpZCBmb250LWludGVyIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKVxuIiwgImludGVyZmFjZSBFcnJvclByb3BzIHtcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5jb25zdCBFcnJvciA9ICh7IG1lc3NhZ2UgfTogRXJyb3JQcm9wcykgPT4gKFxuICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwLTIgcm91bmRlZC1tZCBiZy1yZWQtMTAwIGJvcmRlci1yZWQtNzAwIGJvcmRlciBib3JkZXItZGFzaGVkXCI+XG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgZmxleC1ub25lIHRleHQtcmVkLTcwMFwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIGQ9XCJNMTIgOXYzLjc1bS05LjMwMyAzLjM3NmMtLjg2NiAxLjUuMjE3IDMuMzc0IDEuOTQ4IDMuMzc0aDE0LjcxYzEuNzMgMCAyLjgxMy0xLjg3NCAxLjk0OC0zLjM3NEwxMy45NDkgMy4zNzhjLS44NjYtMS41LTMuMDMyLTEuNS0zLjg5OCAwTDIuNjk3IDE2LjEyNnpNMTIgMTUuNzVoLjAwN3YuMDA4SDEydi0uMDA4elwiXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiB0ZXh0LXJlZC03MDAgZm9udC1pbnRlciBmb250LW1lZGl1bSB0ZXh0LXNtXCI+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvclxuIiwgImNvbnN0IFNlbGVjdCA9ICh7IG5hbWUsIGxhYmVsLCBvcHRpb25zLCBzZWxlY3RlZE9wdGlvbiwgb25DaGFuZ2UgfSkgPT4gKFxuICA8PlxuICAgIDxsYWJlbCBodG1sRm9yPXtuYW1lfSBjbGFzc05hbWU9XCJibG9jayBtYi0xIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgIHtsYWJlbH1cbiAgICA8L2xhYmVsPlxuICAgIDxzZWxlY3RcbiAgICAgIGlkPXtuYW1lfVxuICAgICAgZGVmYXVsdFZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSEudGFyZ2V0IS52YWx1ZSl9XG4gICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJnLWNhcmV0LWRvd24gYmctbm8tcmVwZWF0IGJnLVtjZW50ZXJfcmlnaHRfMTBweF0gYmctW2xlbmd0aDoxMHB4XSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yIHByLTUgYXBwZWFyYW5jZS1ub25lXCJcbiAgICA+XG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cbiAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICkpfVxuICAgIDwvc2VsZWN0PlxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0XG4iLCAiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdkZWJvdW5jZSdcblxuY29uc3QgU2VhcmNoSW5wdXQgPSAoe1xuICBuYW1lLFxuICBzZWxlY3RlZFZhbHVlLFxuICBzZWFyY2hUZXJtLFxuICBzZWFyY2hSZXN1bHRUaW1lc3RhbXAsXG4gIG9uU2VhcmNoLFxufSkgPT4ge1xuICBjb25zdCBwZXJmb3JtU2VhcmNoID0gZGVib3VuY2UoKHNlYXJjaFRlcm0pID0+IHtcbiAgICBvblNlYXJjaChzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gIH0sIDMwMClcbiAgY29uc3QgW2xvY2FsU2VhcmNoVGVybSwgc2V0TG9jYWxTZWFyY2hUZXJtXSA9IFJlYWN0LnVzZVN0YXRlKHNlYXJjaFRlcm0gPz8gJycpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2VsZWN0ZWRWYWx1ZSAmJiBzZXRMb2NhbFNlYXJjaFRlcm0oc2VsZWN0ZWRWYWx1ZSlcbiAgfSwgW3NlbGVjdGVkVmFsdWVdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBwbC0zIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxLjV9XG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd3LTUgaC01Jywge1xuICAgICAgICAgICAgICAnYmctZ3JlZW4tMjAwJzogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgJ3RleHQtZ3JlZW4tODAwJzogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgJ2JvcmRlci1ncmVlbi04MDAnOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgICAgICAncm91bmRlZC1sZyc6IHNlbGVjdGVkVmFsdWUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VsZWN0ZWRWYWx1ZSA/IChcbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNOSAxMi43NUwxMS4yNSAxNSAxNSA5Ljc1TTIxIDEyYzAgMS4yNjgtLjYzIDIuMzktMS41OTMgMy4wNjhhMy43NDUgMy43NDUgMCAwMS0xLjA0MyAzLjI5NiAzLjc0NSAzLjc0NSAwIDAxLTMuMjk2IDEuMDQzQTMuNzQ1IDMuNzQ1IDAgMDExMiAyMWMtMS4yNjggMC0yLjM5LS42My0zLjA2OC0xLjU5M2EzLjc0NiAzLjc0NiAwIDAxLTMuMjk2LTEuMDQzIDMuNzQ1IDMuNzQ1IDAgMDEtMS4wNDMtMy4yOTZBMy43NDUgMy43NDUgMCAwMTMgMTJjMC0xLjI2OC42My0yLjM5IDEuNTkzLTMuMDY4YTMuNzQ1IDMuNzQ1IDAgMDExLjA0My0zLjI5NiAzLjc0NiAzLjc0NiAwIDAxMy4yOTYtMS4wNDNBMy43NDYgMy43NDYgMCAwMTEyIDNjMS4yNjggMCAyLjM5LjYzIDMuMDY4IDEuNTkzYTMuNzQ2IDMuNzQ2IDAgMDEzLjI5NiAxLjA0MyAzLjc0NiAzLjc0NiAwIDAxMS4wNDMgMy4yOTZBMy43NDUgMy43NDUgMCAwMTIxIDEyelwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0yMSAyMWwtNS4xOTctNS4xOTdtMCAwQTcuNSA3LjUgMCAxMDUuMTk2IDUuMTk2YTcuNSA3LjUgMCAwMDEwLjYwNyAxMC42MDd6XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e2xvY2FsU2VhcmNoVGVybX1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgb25JbnB1dD17KGUpID0+IHtcbiAgICAgICAgICAgIHNldExvY2FsU2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIHBlcmZvcm1TZWFyY2goZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIgcGwtOVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBTZWFyY2hSZXN1bHQgPSAoeyByZXN1bHRJdGVtcywgaXRlbVJlbmRlcmVyLCBvblNlbGVjdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC0zNiBvdmVyZmxvdy1hdXRvIHJvdW5kZWQtYi1sZ1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LW1heCBtaW4tdy1mdWxsXCI+XG4gICAgICAgIHtyZXN1bHRJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2l0ZW0uaW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChpdGVtKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMC41IGN1cnNvci1wb2ludGVyIGJnLWdyYXktNTAgaG92ZXI6YmctYmx1ZS02MDAgaG92ZXI6dGV4dC13aGl0ZSBib3JkZXItYiBib3JkZXItYi1zb2xpZCBib3JkZXItYi1ncmF5LTMwMCBsYXN0OmJvcmRlci1iLW5vbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtUmVuZGVyZXIoaXRlbSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgU2VhcmNoU2VsZWN0ID0gKHtcbiAgbmFtZSxcbiAgbGFiZWwsXG4gIHNlYXJjaFRlcm0sXG4gIG9uU2VhcmNoLFxuICBzZWFyY2hSZXN1bHRUaW1lc3RhbXAsXG4gIHJlc3VsdEl0ZW1zLFxuICBpdGVtUmVuZGVyZXIsXG4gIGNsYXNzTmFtZSxcbiAgb25TZWxlY3QsXG4gIHNlbGVjdGVkVmFsdWUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0gY2xhc3NOYW1lPVwiYmxvY2sgbWItMSB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8U2VhcmNoSW5wdXRcbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxuICAgICAgICBzZWFyY2hSZXN1bHRUaW1lc3RhbXA9e3NlYXJjaFJlc3VsdFRpbWVzdGFtcH1cbiAgICAgICAgc2VhcmNoVGVybT17c2VhcmNoVGVybX1cbiAgICAgICAgc2VsZWN0ZWRWYWx1ZT17c2VsZWN0ZWRWYWx1ZX1cbiAgICAgIC8+XG4gICAgICB7cmVzdWx0SXRlbXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxTZWFyY2hSZXN1bHRcbiAgICAgICAgICByZXN1bHRJdGVtcz17cmVzdWx0SXRlbXN9XG4gICAgICAgICAgaXRlbVJlbmRlcmVyPXtpdGVtUmVuZGVyZXJ9XG4gICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hTZWxlY3RcbiIsICJleHBvcnQgY29uc3QgUmVzb3VyY2VPcHRpb24gPSAoeyByZXNvdXJjZSB9KSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj57cmVzb3VyY2UuYXBpX3ZlcnNpb259PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e3Jlc291cmNlLmtpbmR9PC9kaXY+XG4gIDwvPlxuKVxuIiwgImltcG9ydCB7IEdFVENlbGxBdHRycyB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5pbXBvcnQgeyB1c2VBdHRyc1N0YXRlIH0gZnJvbSAnLi4vc2hhcmVkL2FwcCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vc2hhcmVkL2Zvcm0vc2VsZWN0J1xuaW1wb3J0IFNlYXJjaFNlbGVjdCBmcm9tICcuLi9zaGFyZWQvZm9ybS9zZWFyY2hfc2VsZWN0J1xuaW1wb3J0IHsgUmVzb3VyY2VPcHRpb24gfSBmcm9tICcuL3Jlc291cmNlJ1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuICBpbml0aWFsQXR0cnM6IEdFVENlbGxBdHRyc1xuICBjdHg6IEtpbm9Db250ZXh0PEdFVENlbGxBdHRycz5cbn1cblxuY29uc3QgQXBwID0gKHsgaW5pdGlhbEF0dHJzLCBjdHggfTogQXBwUHJvcHMpID0+IHtcbiAgY29uc3QgW2F0dHJzLCB1cGRhdGVBdHRyXSA9IHVzZUF0dHJzU3RhdGU8R0VUQ2VsbEF0dHJzPihjdHgsIGluaXRpYWxBdHRycylcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICBsYWJlbD1cIlR5cGVcIlxuICAgICAgICAgIG9wdGlvbnM9e1t7IGxhYmVsOiAnR0VUJywgdmFsdWU6ICdnZXQnIH1dfVxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPVwiZ2V0XCJcbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBjb25zb2xlLmxvZyh2YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWFyY2hTZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1mdWxsIHBsLTMgdy04MFwiXG4gICAgICAgICAgbmFtZT1cInJlc291cmNlXCJcbiAgICAgICAgICBsYWJlbD1cIlJlc291cmNlXCJcbiAgICAgICAgICBvblNlYXJjaD17dXBkYXRlQXR0cignc2VhcmNoX3Rlcm0nKX1cbiAgICAgICAgICBzZWFyY2hUZXJtPXthdHRyc1snc2VhcmNoX3Rlcm0nXX1cbiAgICAgICAgICBzZWFyY2hSZXN1bHRUaW1lc3RhbXA9e2F0dHJzWydzZWFyY2hfcmVzdWx0X3RpbWVzdGFtcCddfVxuICAgICAgICAgIHJlc3VsdEl0ZW1zPXthdHRyc1snc2VhcmNoX3Jlc3VsdF9pdGVtcyddfVxuICAgICAgICAgIG9uU2VsZWN0PXt1cGRhdGVBdHRyKCdyZXNvdXJjZScpfVxuICAgICAgICAgIGl0ZW1SZW5kZXJlcj17KGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxSZXNvdXJjZU9wdGlvbiBrZXk9e2l0ZW0uaW5kZXh9IHJlc291cmNlPXtpdGVtfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgc2VsZWN0ZWRWYWx1ZT17YXR0cnNbJ3Jlc291cmNlJ10/LmtpbmR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiIsICJpbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICcuLi9zaGFyZWQvYXBwJ1xuaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuaW1wb3J0IHsgR0VUQ2VsbEF0dHJzIH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCBFcnJvciBmcm9tICcuLi9zaGFyZWQvZXJyb3InXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuXG5jb25zdCBsb2FkUmVhY3QgPSBhc3luYyAoXG4gIGN0eDogS2lub0NvbnRleHQ8R0VUQ2VsbEF0dHJzPixcbiAgYXR0cnM6IEdFVENlbGxBdHRycyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoYXR0cnMubWl4X2VudiA9PSAncHJvZCcpIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE4L3VtZC9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxOC4yLjAvdW1kL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycsXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUygnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3RAMTgvdW1kL3JlYWN0LmRldmVsb3BtZW50LmpzJylcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICAnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtZG9tQDE4LjIuMC91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGluaXQgPSBhc3luYyAoXG4gIGN0eDogS2lub0NvbnRleHQ8R0VUQ2VsbEF0dHJzPixcbiAgYXR0cnM6IEdFVENlbGxBdHRycyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBhd2FpdCBsb2FkUmVhY3QoY3R4LCBhdHRycylcbiAgY29uc29sZS5sb2coJ2F0dHJzJywgYXR0cnMpXG4gIGNvbnNvbGUubG9nKCdjdHgnLCBjdHgpXG5cbiAgY3R4LnJvb3QuaW5uZXJIVE1MID0gJ2xvYWRpbmcuLi4nXG5cbiAgY3R4LmltcG9ydENTUygnbWFpbi5jc3MnKVxuICBjdHguaW1wb3J0Q1NTKFxuICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXAnLFxuICApXG5cbiAgY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoY3R4LnJvb3QpXG4gIGlmIChhdHRycy5lcnJvcikge1xuICAgIHJldHVybiByb290LnJlbmRlcig8RXJyb3IgbWVzc2FnZT17YXR0cnMuZXJyb3J9IC8+KVxuICB9XG5cbiAgcm9vdC5yZW5kZXIoXG4gICAgPEFwcENvbnRhaW5lcj5cbiAgICAgIDxBcHAgaW5pdGlhbEF0dHJzPXthdHRyc30gY3R4PXtjdHh9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QUFVLFdBQVcsVUFBVTtBQUFBLE1BQy9CLGNBQWMsQ0FBQyxTQUNiLG9DQUFDLGtCQUFlLEtBQUssS0FBSyxPQUFPLFVBQVUsTUFBTTtBQUFBLE1BRW5ELGVBQWUsTUFBTSxVQUFVLEdBQUc7QUFBQTtBQUFBLEVBQ3BDLENBQ0YsQ0FDRjtBQUVKO0FBRUEsSUFBTyxjQUFROzs7QUN2Q2YsSUFBTSxZQUFZLE9BQ2hCLEtBQ0EsVUFDa0I7QUFDbEIsTUFBSSxNQUFNLFdBQVcsUUFBUTtBQUMzQixVQUFNLElBQUksU0FBUyx3REFBd0Q7QUFDM0UsVUFBTSxJQUFJO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGLE9BQU87QUFDTCxVQUFNLElBQUksU0FBUyxxREFBcUQ7QUFDeEUsVUFBTSxJQUFJO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLE9BQU8sT0FDbEIsS0FDQSxVQUNrQjtBQUNsQixRQUFNLFVBQVUsS0FBSyxLQUFLO0FBQzFCLFVBQVEsSUFBSSxTQUFTLEtBQUs7QUFDMUIsVUFBUSxJQUFJLE9BQU8sR0FBRztBQUV0QixNQUFJLEtBQUssWUFBWTtBQUVyQixNQUFJLFVBQVUsVUFBVTtBQUN4QixNQUFJO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLE9BQU8sU0FBUyxXQUFXLElBQUksSUFBSTtBQUN6QyxNQUFJLE1BQU0sT0FBTztBQUNmLFdBQU8sS0FBSyxPQUFPLG9DQUFDLGlCQUFNLFNBQVMsTUFBTSxPQUFPLENBQUU7QUFBQSxFQUNwRDtBQUVBLE9BQUs7QUFBQSxJQUNILG9DQUFDLG9CQUNDLG9DQUFDLGVBQUksY0FBYyxPQUFPLEtBQVUsQ0FDdEM7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbImNsYXNzTmFtZXMiLCAiZGVib3VuY2UiLCAiYXR0cnMiLCAiRXJyb3IiLCAiZGVib3VuY2UiLCAic2VhcmNoVGVybSIsICJjbGFzc05hbWVzIl0KfQo=
