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

// assets/shared/error.tsx
var Error2 = ({ message }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "flex rounded-md border border-dashed border-red-700 bg-red-100 p-2" }, /* @__PURE__ */ React.createElement(
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
), /* @__PURE__ */ React.createElement("div", { className: "font-inter px-2 text-sm font-medium text-red-700" }, message)));
var error_default = Error2;

// assets/shared/attr_state.tsx
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
var attr_state_default = useAttrsState;

// assets/shared/form/input.tsx
var Input = ({
  name,
  label,
  defaultValue,
  onChange
}) => {
  return /* @__PURE__ */ React.createElement("div", { className: "flex flex-row items-baseline" }, /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: name,
      className: "mb-1 block pr-1 text-sm font-medium uppercase"
    },
    label
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      defaultValue,
      name,
      onChange: (e) => onChange(e.target.value),
      className: " block rounded-lg border border-gray-300 bg-gray-50 p-1.5 text-sm focus:border-blue-500 focus:ring-blue-500"
    }
  ));
};
var input_default = Input;

// assets/shared/form/search_select.tsx
var import_classnames = __toESM(require_classnames());

// assets/shared/utils.ts
var debounce = (callback, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

// assets/shared/form/search_select.tsx
var SearchInput = ({
  name,
  selectedValue,
  searchTerm,
  onSearch
}) => {
  const performSearch = debounce((searchTerm2) => {
    onSearch(searchTerm2.toLowerCase());
  }, 300);
  const [localSearchTerm, setLocalSearchTerm] = React.useState(searchTerm ?? "");
  React.useEffect(() => {
    selectedValue && setLocalSearchTerm(selectedValue);
  }, [selectedValue]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: (0, import_classnames.default)("h-5 w-5", {
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
      className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-9 text-sm focus:border-blue-500 focus:ring-blue-500"
    }
  )));
};
var SearchResult = ({
  resultItems,
  itemRenderer,
  onSelect,
  resultItemsKeyField
}) => {
  return /* @__PURE__ */ React.createElement("div", { className: "max-h-36 overflow-auto rounded-b-lg border-b border-l border-r border-gray-300" }, /* @__PURE__ */ React.createElement("div", { className: "w-max min-w-full" }, resultItems.map((item) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: item[resultItemsKeyField],
      onClick: () => onSelect(item),
      className: "border-b-solid last:border-b-none cursor-pointer border-b border-b-gray-300 bg-gray-50 px-2 py-0.5 hover:bg-blue-600 hover:text-white"
    },
    itemRenderer(item)
  ))));
};
var SearchSelect = ({
  name,
  label,
  searchTerm,
  onSearch,
  resultItems,
  resultItemsKeyField,
  itemRenderer,
  className,
  onSelect,
  selectedValue
}) => {
  return /* @__PURE__ */ React.createElement("div", { className }, /* @__PURE__ */ React.createElement("label", { htmlFor: name, className: "mb-1 block text-sm font-medium" }, label), /* @__PURE__ */ React.createElement(
    SearchInput,
    {
      name,
      onSearch,
      searchTerm,
      selectedValue
    }
  ), (resultItems && resultItems.length) > 0 && /* @__PURE__ */ React.createElement(
    SearchResult,
    {
      resultItems,
      itemRenderer,
      onSelect,
      resultItemsKeyField
    }
  ));
};
var search_select_default = SearchSelect;

// assets/shared/form/select.tsx
var Select = ({
  name,
  label,
  options,
  selectedOption,
  onChange,
  className = ""
}) => /* @__PURE__ */ React.createElement("div", { className }, /* @__PURE__ */ React.createElement("label", { htmlFor: name, className: "mb-1 block text-sm font-medium" }, label), /* @__PURE__ */ React.createElement(
  "select",
  {
    id: name,
    defaultValue: selectedOption,
    onChange: (e) => onChange(e.target.value),
    className: "bg-caret-down block w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 bg-[length:10px] bg-[center_right_10px] bg-no-repeat p-2 pr-5 text-sm focus:border-blue-500 focus:ring-blue-500"
  },
  options.map((option) => /* @__PURE__ */ React.createElement("option", { key: option.value, value: option.value }, option.label))
));
var select_default = Select;

// assets/get_cell/gvk_option.tsx
var GVKOption = ({ gvk }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-gray-400" }, gvk.api_version), /* @__PURE__ */ React.createElement("div", { className: "text-sm" }, gvk.kind));
var gvk_option_default = GVKOption;

// assets/get_cell/app.tsx
var App = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = attr_state_default(ctx, initialAttrs);
  return /* @__PURE__ */ React.createElement("div", { className: "font-inter rounded-md border border-solid border-gray-300 font-medium text-gray-600" }, /* @__PURE__ */ React.createElement("div", { className: "border-b-solid border-b border-b-gray-300 bg-blue-100 p-3" }, /* @__PURE__ */ React.createElement(
    input_default,
    {
      label: "Assign To",
      name: "assign_to",
      defaultValue: attrs["result_variable"],
      onChange: updateAttr("result_variable")
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-4 p-3" }, /* @__PURE__ */ React.createElement(
    search_select_default,
    {
      className: "max-w-full",
      name: "gvk",
      label: "Resource Kind",
      onSearch: updateAttr("search_term"),
      searchTerm: attrs["search_term"],
      resultItemsKeyField: "index",
      resultItems: attrs["search_result_items"],
      onSelect: updateAttr("gvk"),
      itemRenderer: (item) => /* @__PURE__ */ React.createElement(gvk_option_default, { gvk: item }),
      selectedValue: attrs["gvk"]?.kind
    }
  ), attrs["namespaces"] && /* @__PURE__ */ React.createElement(
    select_default,
    {
      name: "namespace",
      label: "Namespace",
      options: attrs.namespaces.map((ns) => ({
        label: ns,
        value: ns
      })),
      selectedOption: attrs["namespace"],
      onChange: updateAttr("namespace")
    }
  ), attrs["resources"] && /* @__PURE__ */ React.createElement(
    select_default,
    {
      name: "resource",
      label: "Resource Name",
      options: attrs.resources.map((ns) => ({
        label: ns,
        value: ns
      })),
      selectedOption: attrs["resource"],
      onChange: updateAttr("resource")
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
  root.render(/* @__PURE__ */ React.createElement(app_default, { initialAttrs: attrs, ctx }));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9lcnJvci50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9hdHRyX3N0YXRlLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Zvcm0vaW5wdXQudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9zZWFyY2hfc2VsZWN0LnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL3V0aWxzLnRzIiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9zZWxlY3QudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9nZXRfY2VsbC9ndmtfb3B0aW9uLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvZ2V0X2NlbGwvYXBwLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvZ2V0X2NlbGwvbWFpbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuXHRDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cblx0TGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcblx0aHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIG5hdGl2ZUNvZGVTdHJpbmcgPSAnW25hdGl2ZSBjb2RlXSc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nICYmICFhcmcudG9TdHJpbmcudG9TdHJpbmcoKS5pbmNsdWRlcygnW25hdGl2ZSBjb2RlXScpKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCAiaW50ZXJmYWNlIEVycm9yUHJvcHMge1xuICBtZXNzYWdlOiBzdHJpbmdcbn1cbmNvbnN0IEVycm9yID0gKHsgbWVzc2FnZSB9OiBFcnJvclByb3BzKSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLXJlZC03MDAgYmctcmVkLTEwMCBwLTJcIj5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBmbGV4LW5vbmUgdGV4dC1yZWQtNzAwXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgZD1cIk0xMiA5djMuNzVtLTkuMzAzIDMuMzc2Yy0uODY2IDEuNS4yMTcgMy4zNzQgMS45NDggMy4zNzRoMTQuNzFjMS43MyAwIDIuODEzLTEuODc0IDEuOTQ4LTMuMzc0TDEzLjk0OSAzLjM3OGMtLjg2Ni0xLjUtMy4wMzItMS41LTMuODk4IDBMMi42OTcgMTYuMTI2ek0xMiAxNS43NWguMDA3di4wMDhIMTJ2LS4wMDh6XCJcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWludGVyIHB4LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXJlZC03MDBcIj5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yXG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuXG50eXBlIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPiA9IChcbiAgYXR0ck5hbWU6IHN0cmluZyxcbikgPT4gKEF0dHJWYWx1ZTogQXR0cnNUeXBlW2tleW9mIEF0dHJzVHlwZV0pID0+IHZvaWRcblxuY29uc3QgdXNlQXR0cnNTdGF0ZSA9IDxBdHRyc1R5cGUgZXh0ZW5kcyBvYmplY3Q+KFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBpbml0aWFsQXR0cnM6IEF0dHJzVHlwZSxcbik6IFtBdHRyc1R5cGUsIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPl0gPT4ge1xuICBjb25zdCBbYXR0cnMsIHNldEF0dHJzXSA9IFJlYWN0LnVzZVN0YXRlPEF0dHJzVHlwZT4oaW5pdGlhbEF0dHJzKVxuICBjb25zdCB1cGRhdGVBdHRyOiBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoYXR0ck5hbWUpID0+IChhdHRyVmFsdWUpID0+IHtcbiAgICBzZXRBdHRycygoYXR0cnMpID0+ICh7IC4uLmF0dHJzLCBbYXR0ck5hbWVdOiBhdHRyVmFsdWUgfSkpXG4gICAgY3R4LnB1c2hFdmVudChgdXBkYXRlXyR7YXR0ck5hbWV9YCwgYXR0clZhbHVlKVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjdHguaGFuZGxlRXZlbnQ8QXR0cnNUeXBlPigndXBkYXRlJywgKHVwZGF0ZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRyaWJ1dGUgdXBkYXRlIGZyb20gc2VydmVyJywgdXBkYXRlcylcbiAgICAgIHNldEF0dHJzKChhdHRycykgPT4gKHtcbiAgICAgICAgLi4uT2JqZWN0LmFzc2lnbihhdHRycywgdXBkYXRlcyksXG4gICAgICB9KSlcbiAgICB9KVxuICB9LCBbXSlcbiAgcmV0dXJuIFthdHRycywgdXBkYXRlQXR0cl1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQXR0cnNTdGF0ZVxuIiwgInR5cGUgSW5wdXRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlOiBzdHJpbmdcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG59XG5jb25zdCBJbnB1dDogUmVhY3QuRkM8SW5wdXRQcm9wcz4gPSAoe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgZGVmYXVsdFZhbHVlLFxuICBvbkNoYW5nZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtYmFzZWxpbmVcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXtuYW1lfVxuICAgICAgICBjbGFzc05hbWU9XCJtYi0xIGJsb2NrIHByLTEgdGV4dC1zbSBmb250LW1lZGl1bSB1cHBlcmNhc2VcIlxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9XCIgYmxvY2sgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktNTAgcC0xLjUgdGV4dC1zbSBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy1ibHVlLTUwMFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG4iLCAiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG50eXBlIFNlYXJjaElucHV0UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBzZWxlY3RlZFZhbHVlOiBzdHJpbmdcbiAgc2VhcmNoVGVybTogc3RyaW5nXG4gIG9uU2VhcmNoOiAoc2VhcmNoVGVybTogc3RyaW5nKSA9PiB2b2lkXG59XG5cbmNvbnN0IFNlYXJjaElucHV0OiBSZWFjdC5GQzxTZWFyY2hJbnB1dFByb3BzPiA9ICh7XG4gIG5hbWUsXG4gIHNlbGVjdGVkVmFsdWUsXG4gIHNlYXJjaFRlcm0sXG4gIG9uU2VhcmNoLFxufTogU2VhcmNoSW5wdXRQcm9wcykgPT4ge1xuICBjb25zdCBwZXJmb3JtU2VhcmNoID0gZGVib3VuY2UoKHNlYXJjaFRlcm0pID0+IHtcbiAgICBvblNlYXJjaChzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gIH0sIDMwMClcbiAgY29uc3QgW2xvY2FsU2VhcmNoVGVybSwgc2V0TG9jYWxTZWFyY2hUZXJtXSA9IFJlYWN0LnVzZVN0YXRlKHNlYXJjaFRlcm0gPz8gJycpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2VsZWN0ZWRWYWx1ZSAmJiBzZXRMb2NhbFNlYXJjaFRlcm0oc2VsZWN0ZWRWYWx1ZSlcbiAgfSwgW3NlbGVjdGVkVmFsdWVdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHBsLTNcIj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxLjV9XG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdoLTUgdy01Jywge1xuICAgICAgICAgICAgICAnYmctZ3JlZW4tMjAwJzogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgJ3RleHQtZ3JlZW4tODAwJzogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgJ2JvcmRlci1ncmVlbi04MDAnOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgICAgICAncm91bmRlZC1sZyc6IHNlbGVjdGVkVmFsdWUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VsZWN0ZWRWYWx1ZSA/IChcbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNOSAxMi43NUwxMS4yNSAxNSAxNSA5Ljc1TTIxIDEyYzAgMS4yNjgtLjYzIDIuMzktMS41OTMgMy4wNjhhMy43NDUgMy43NDUgMCAwMS0xLjA0MyAzLjI5NiAzLjc0NSAzLjc0NSAwIDAxLTMuMjk2IDEuMDQzQTMuNzQ1IDMuNzQ1IDAgMDExMiAyMWMtMS4yNjggMC0yLjM5LS42My0zLjA2OC0xLjU5M2EzLjc0NiAzLjc0NiAwIDAxLTMuMjk2LTEuMDQzIDMuNzQ1IDMuNzQ1IDAgMDEtMS4wNDMtMy4yOTZBMy43NDUgMy43NDUgMCAwMTMgMTJjMC0xLjI2OC42My0yLjM5IDEuNTkzLTMuMDY4YTMuNzQ1IDMuNzQ1IDAgMDExLjA0My0zLjI5NiAzLjc0NiAzLjc0NiAwIDAxMy4yOTYtMS4wNDNBMy43NDYgMy43NDYgMCAwMTEyIDNjMS4yNjggMCAyLjM5LjYzIDMuMDY4IDEuNTkzYTMuNzQ2IDMuNzQ2IDAgMDEzLjI5NiAxLjA0MyAzLjc0NiAzLjc0NiAwIDAxMS4wNDMgMy4yOTZBMy43NDUgMy43NDUgMCAwMTIxIDEyelwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0yMSAyMWwtNS4xOTctNS4xOTdtMCAwQTcuNSA3LjUgMCAxMDUuMTk2IDUuMTk2YTcuNSA3LjUgMCAwMDEwLjYwNyAxMC42MDd6XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e2xvY2FsU2VhcmNoVGVybX1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgb25JbnB1dD17KGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICBzZXRMb2NhbFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICBwZXJmb3JtU2VhcmNoKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTUwIHAtMiBwbC05IHRleHQtc20gZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxudHlwZSBTZWFyY2hSZXN1bHRQcm9wczxJdGVtVHlwZT4gPSB7XG4gIHJlc3VsdEl0ZW1zOiBbSXRlbVR5cGVdXG4gIGl0ZW1SZW5kZXJlcjogKGl0ZW06IEl0ZW1UeXBlKSA9PiBSZWFjdC5KU1guRWxlbWVudFxuICBvblNlbGVjdDogKGl0ZW06IEl0ZW1UeXBlKSA9PiB2b2lkXG4gIHJlc3VsdEl0ZW1zS2V5RmllbGQ6IGtleW9mIEl0ZW1UeXBlXG59XG5cbmNvbnN0IFNlYXJjaFJlc3VsdCA9IDxJdGVtVHlwZSw+KHtcbiAgcmVzdWx0SXRlbXMsXG4gIGl0ZW1SZW5kZXJlcixcbiAgb25TZWxlY3QsXG4gIHJlc3VsdEl0ZW1zS2V5RmllbGQsXG59OiBTZWFyY2hSZXN1bHRQcm9wczxJdGVtVHlwZT4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLTM2IG92ZXJmbG93LWF1dG8gcm91bmRlZC1iLWxnIGJvcmRlci1iIGJvcmRlci1sIGJvcmRlci1yIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LW1heCBtaW4tdy1mdWxsXCI+XG4gICAgICAgIHtyZXN1bHRJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2l0ZW1bcmVzdWx0SXRlbXNLZXlGaWVsZF0gYXMgc3RyaW5nfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QoaXRlbSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYi1zb2xpZCBsYXN0OmJvcmRlci1iLW5vbmUgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLWIgYm9yZGVyLWItZ3JheS0zMDAgYmctZ3JheS01MCBweC0yIHB5LTAuNSBob3ZlcjpiZy1ibHVlLTYwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXRlbVJlbmRlcmVyKGl0ZW0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbnR5cGUgU2VhcmNoU2VsZWN0UHJvcHMgPSB7IGxhYmVsOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nIH1cblxuY29uc3QgU2VhcmNoU2VsZWN0ID0gPEl0ZW1UeXBlLD4oe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgc2VhcmNoVGVybSxcbiAgb25TZWFyY2gsXG4gIHJlc3VsdEl0ZW1zLFxuICByZXN1bHRJdGVtc0tleUZpZWxkLFxuICBpdGVtUmVuZGVyZXIsXG4gIGNsYXNzTmFtZSxcbiAgb25TZWxlY3QsXG4gIHNlbGVjdGVkVmFsdWUsXG59OiBTZWFyY2hJbnB1dFByb3BzICYgU2VhcmNoUmVzdWx0UHJvcHM8SXRlbVR5cGU+ICYgU2VhcmNoU2VsZWN0UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtuYW1lfSBjbGFzc05hbWU9XCJtYi0xIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxTZWFyY2hJbnB1dFxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgIHNlYXJjaFRlcm09e3NlYXJjaFRlcm19XG4gICAgICAgIHNlbGVjdGVkVmFsdWU9e3NlbGVjdGVkVmFsdWV9XG4gICAgICAvPlxuICAgICAgeyhyZXN1bHRJdGVtcyAmJiByZXN1bHRJdGVtcy5sZW5ndGgpID4gMCAmJiAoXG4gICAgICAgIDxTZWFyY2hSZXN1bHRcbiAgICAgICAgICByZXN1bHRJdGVtcz17cmVzdWx0SXRlbXN9XG4gICAgICAgICAgaXRlbVJlbmRlcmVyPXtpdGVtUmVuZGVyZXJ9XG4gICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgICAgIHJlc3VsdEl0ZW1zS2V5RmllbGQ9e3Jlc3VsdEl0ZW1zS2V5RmllbGR9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFNlbGVjdFxuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgY2FsbGJhY2s6IFQsXG4gIHRpbWVvdXQ6IG51bWJlcixcbik6ICgoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4gdm9pZCkgPT4ge1xuICBsZXQgdGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+XG5cbiAgcmV0dXJuICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjayguLi5hcmdzKVxuICAgIH0sIHRpbWVvdXQpXG4gIH1cbn1cbiIsICJ0eXBlIFNlbGVjdFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBvcHRpb25zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdXG4gIHNlbGVjdGVkT3B0aW9uOiBzdHJpbmdcbiAgb25DaGFuZ2U6IChvcHRpb246IHN0cmluZykgPT4gdm9pZFxuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuY29uc3QgU2VsZWN0OiBSZWFjdC5GQzxTZWxlY3RQcm9wcz4gPSAoe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgb3B0aW9ucyxcbiAgc2VsZWN0ZWRPcHRpb24sXG4gIG9uQ2hhbmdlLFxuICBjbGFzc05hbWUgPSAnJyxcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9IGNsYXNzTmFtZT1cIm1iLTEgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAge2xhYmVsfVxuICAgIDwvbGFiZWw+XG4gICAgPHNlbGVjdFxuICAgICAgaWQ9e25hbWV9XG4gICAgICBkZWZhdWx0VmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlIS50YXJnZXQhLnZhbHVlKX1cbiAgICAgIGNsYXNzTmFtZT1cImJnLWNhcmV0LWRvd24gYmxvY2sgdy1mdWxsIGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS01MCBiZy1bbGVuZ3RoOjEwcHhdIGJnLVtjZW50ZXJfcmlnaHRfMTBweF0gYmctbm8tcmVwZWF0IHAtMiBwci01IHRleHQtc20gZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxuICAgID5cbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKSl9XG4gICAgPC9zZWxlY3Q+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcbiIsICJpbXBvcnQgeyBHVksgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgR1ZLT3B0aW9uID0gKHsgZ3ZrIH06IHsgZ3ZrOiBHVksgfSkgPT4gKFxuICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwXCI+e2d2ay5hcGlfdmVyc2lvbn08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj57Z3ZrLmtpbmR9PC9kaXY+XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBHVktPcHRpb25cbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5pbXBvcnQgdXNlQXR0cnNTdGF0ZSBmcm9tICcuLi9zaGFyZWQvYXR0cl9zdGF0ZSdcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9zaGFyZWQvZm9ybS9pbnB1dCdcbmltcG9ydCBTZWFyY2hTZWxlY3QgZnJvbSAnLi4vc2hhcmVkL2Zvcm0vc2VhcmNoX3NlbGVjdCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vc2hhcmVkL2Zvcm0vc2VsZWN0J1xuaW1wb3J0IEdWS09wdGlvbiBmcm9tICcuL2d2a19vcHRpb24nXG5pbXBvcnQgeyBHRVRDZWxsQXR0cnMsIEdWSyB9IGZyb20gJy4vdHlwZXMnXG5cbmludGVyZmFjZSBBcHBQcm9wcyB7XG4gIGluaXRpYWxBdHRyczogR0VUQ2VsbEF0dHJzXG4gIGN0eDogS2lub0NvbnRleHRcbn1cblxuY29uc3QgQXBwID0gKHsgaW5pdGlhbEF0dHJzLCBjdHggfTogQXBwUHJvcHMpID0+IHtcbiAgY29uc3QgW2F0dHJzLCB1cGRhdGVBdHRyXSA9IHVzZUF0dHJzU3RhdGU8R0VUQ2VsbEF0dHJzPihjdHgsIGluaXRpYWxBdHRycylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtaW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iLXNvbGlkIGJvcmRlci1iIGJvcmRlci1iLWdyYXktMzAwIGJnLWJsdWUtMTAwIHAtM1wiPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBsYWJlbD1cIkFzc2lnbiBUb1wiXG4gICAgICAgICAgbmFtZT1cImFzc2lnbl90b1wiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXthdHRyc1sncmVzdWx0X3ZhcmlhYmxlJ119XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ3Jlc3VsdF92YXJpYWJsZScpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IHAtM1wiPlxuICAgICAgICA8U2VhcmNoU2VsZWN0PEdWSz5cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1mdWxsXCJcbiAgICAgICAgICBuYW1lPVwiZ3ZrXCJcbiAgICAgICAgICBsYWJlbD1cIlJlc291cmNlIEtpbmRcIlxuICAgICAgICAgIG9uU2VhcmNoPXt1cGRhdGVBdHRyKCdzZWFyY2hfdGVybScpfVxuICAgICAgICAgIHNlYXJjaFRlcm09e2F0dHJzWydzZWFyY2hfdGVybSddfVxuICAgICAgICAgIHJlc3VsdEl0ZW1zS2V5RmllbGQ9eydpbmRleCd9XG4gICAgICAgICAgcmVzdWx0SXRlbXM9e2F0dHJzWydzZWFyY2hfcmVzdWx0X2l0ZW1zJ119XG4gICAgICAgICAgb25TZWxlY3Q9e3VwZGF0ZUF0dHIoJ2d2aycpfVxuICAgICAgICAgIGl0ZW1SZW5kZXJlcj17KGl0ZW06IEdWSykgPT4gPEdWS09wdGlvbiBndms9e2l0ZW19IC8+fVxuICAgICAgICAgIHNlbGVjdGVkVmFsdWU9e2F0dHJzWydndmsnXT8ua2luZH1cbiAgICAgICAgLz5cbiAgICAgICAge2F0dHJzWyduYW1lc3BhY2VzJ10gJiYgKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lc3BhY2VcIlxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lc3BhY2VcIlxuICAgICAgICAgICAgb3B0aW9ucz17YXR0cnMubmFtZXNwYWNlcy5tYXAoKG5zKSA9PiAoe1xuICAgICAgICAgICAgICBsYWJlbDogbnMsXG4gICAgICAgICAgICAgIHZhbHVlOiBucyxcbiAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXthdHRyc1snbmFtZXNwYWNlJ119XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cignbmFtZXNwYWNlJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2F0dHJzWydyZXNvdXJjZXMnXSAmJiAoXG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cInJlc291cmNlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUmVzb3VyY2UgTmFtZVwiXG4gICAgICAgICAgICBvcHRpb25zPXthdHRycy5yZXNvdXJjZXMubWFwKChucykgPT4gKHtcbiAgICAgICAgICAgICAgbGFiZWw6IG5zLFxuICAgICAgICAgICAgICB2YWx1ZTogbnMsXG4gICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnNbJ3Jlc291cmNlJ119XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cigncmVzb3VyY2UnKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuaW1wb3J0IHsgR0VUQ2VsbEF0dHJzIH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCBFcnJvciBmcm9tICcuLi9zaGFyZWQvZXJyb3InXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuXG5jb25zdCBsb2FkUmVhY3QgPSBhc3luYyAoXG4gIGN0eDogS2lub0NvbnRleHQ8R0VUQ2VsbEF0dHJzPixcbiAgYXR0cnM6IEdFVENlbGxBdHRycyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoYXR0cnMubWl4X2VudiA9PSAncHJvZCcpIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE4L3VtZC9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxOC4yLjAvdW1kL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycsXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUygnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3RAMTgvdW1kL3JlYWN0LmRldmVsb3BtZW50LmpzJylcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICAnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtZG9tQDE4LjIuMC91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGluaXQgPSBhc3luYyAoXG4gIGN0eDogS2lub0NvbnRleHQ8R0VUQ2VsbEF0dHJzPixcbiAgYXR0cnM6IEdFVENlbGxBdHRycyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBhd2FpdCBsb2FkUmVhY3QoY3R4LCBhdHRycylcbiAgY29uc29sZS5sb2coJ2F0dHJzJywgYXR0cnMpXG4gIGNvbnNvbGUubG9nKCdjdHgnLCBjdHgpXG5cbiAgY3R4LnJvb3QuaW5uZXJIVE1MID0gJ2xvYWRpbmcuLi4nXG5cbiAgY3R4LmltcG9ydENTUygnbWFpbi5jc3MnKVxuICBjdHguaW1wb3J0Q1NTKFxuICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXAnLFxuICApXG5cbiAgY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoY3R4LnJvb3QpXG4gIGlmIChhdHRycy5lcnJvcikge1xuICAgIHJldHVybiByb290LnJlbmRlcig8RXJyb3IgbWVzc2FnZT17YXR0cnMuZXJyb3J9IC8+KVxuICB9XG5cbiAgcm9vdC5yZW5kZXIoPEFwcCBpbml0aWFsQXR0cnM9e2F0dHJzfSBjdHg9e2N0eH0gLz4pXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBT0EsS0FBQyxXQUFZO0FBQ1o7QUFFQSxVQUFJLFNBQVMsQ0FBQyxFQUFFO0FBQ2hCLFVBQUksbUJBQW1CO0FBRXZCLGVBQVNBLGNBQWE7QUFDckIsWUFBSSxVQUFVLENBQUM7QUFFZixpQkFBUyxJQUFJLEdBQUcsSUFBSSxVQUFVLFFBQVEsS0FBSztBQUMxQyxjQUFJLE1BQU0sVUFBVSxDQUFDO0FBQ3JCLGNBQUksQ0FBQztBQUFLO0FBRVYsY0FBSSxVQUFVLE9BQU87QUFFckIsY0FBSSxZQUFZLFlBQVksWUFBWSxVQUFVO0FBQ2pELG9CQUFRLEtBQUssR0FBRztBQUFBLFVBQ2pCLFdBQVcsTUFBTSxRQUFRLEdBQUcsR0FBRztBQUM5QixnQkFBSSxJQUFJLFFBQVE7QUFDZixrQkFBSSxRQUFRQSxZQUFXLE1BQU0sTUFBTSxHQUFHO0FBQ3RDLGtCQUFJLE9BQU87QUFDVix3QkFBUSxLQUFLLEtBQUs7QUFBQSxjQUNuQjtBQUFBLFlBQ0Q7QUFBQSxVQUNELFdBQVcsWUFBWSxVQUFVO0FBQ2hDLGdCQUFJLElBQUksYUFBYSxPQUFPLFVBQVUsWUFBWSxDQUFDLElBQUksU0FBUyxTQUFTLEVBQUUsU0FBUyxlQUFlLEdBQUc7QUFDckcsc0JBQVEsS0FBSyxJQUFJLFNBQVMsQ0FBQztBQUMzQjtBQUFBLFlBQ0Q7QUFFQSxxQkFBUyxPQUFPLEtBQUs7QUFDcEIsa0JBQUksT0FBTyxLQUFLLEtBQUssR0FBRyxLQUFLLElBQUksR0FBRyxHQUFHO0FBQ3RDLHdCQUFRLEtBQUssR0FBRztBQUFBLGNBQ2pCO0FBQUEsWUFDRDtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBRUEsZUFBTyxRQUFRLEtBQUssR0FBRztBQUFBLE1BQ3hCO0FBRUEsVUFBSSxPQUFPLFdBQVcsZUFBZSxPQUFPLFNBQVM7QUFDcEQsUUFBQUEsWUFBVyxVQUFVQTtBQUNyQixlQUFPLFVBQVVBO0FBQUEsTUFDbEIsV0FBVyxPQUFPLFdBQVcsY0FBYyxPQUFPLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSztBQUV4RixlQUFPLGNBQWMsQ0FBQyxHQUFHLFdBQVk7QUFDcEMsaUJBQU9BO0FBQUEsUUFDUixDQUFDO0FBQUEsTUFDRixPQUFPO0FBQ04sZUFBTyxhQUFhQTtBQUFBLE1BQ3JCO0FBQUEsSUFDRCxHQUFFO0FBQUE7QUFBQTs7O0FDeERGLElBQU1DLFNBQVEsQ0FBQyxFQUFFLFFBQVEsTUFDdkIsMERBQ0Usb0NBQUMsU0FBSSxXQUFVLHdFQUNiO0FBQUEsRUFBQztBQUFBO0FBQUEsSUFDQyxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxTQUFRO0FBQUEsSUFDUixnQkFBYTtBQUFBLElBQ2IsUUFBTztBQUFBLElBQ1AsZUFBWTtBQUFBO0FBQUEsRUFFWjtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0Msa0JBQWU7QUFBQSxNQUNmLG1CQUFnQjtBQUFBLE1BQ2hCLEdBQUU7QUFBQTtBQUFBLEVBQ0g7QUFDSCxHQUNBLG9DQUFDLFNBQUksV0FBVSxzREFDWixPQUNILENBQ0YsQ0FDRjtBQUdGLElBQU8sZ0JBQVFBOzs7QUNyQmYsSUFBTSxnQkFBZ0IsQ0FDcEIsS0FDQSxpQkFDMEM7QUFDMUMsUUFBTSxDQUFDLE9BQU8sUUFBUSxJQUFJLE1BQU0sU0FBb0IsWUFBWTtBQUNoRSxRQUFNLGFBQXVDLENBQUMsYUFBYSxDQUFDLGNBQWM7QUFDeEUsYUFBUyxDQUFDQyxZQUFXLEVBQUUsR0FBR0EsUUFBTyxDQUFDLFFBQVEsR0FBRyxVQUFVLEVBQUU7QUFDekQsUUFBSSxVQUFVLFVBQVUsWUFBWSxTQUFTO0FBQUEsRUFDL0M7QUFFQSxRQUFNLFVBQVUsTUFBTTtBQUNwQixRQUFJLFlBQXVCLFVBQVUsQ0FBQyxZQUFZO0FBQ2hELGNBQVEsSUFBSSxnQ0FBZ0MsT0FBTztBQUNuRCxlQUFTLENBQUNBLFlBQVc7QUFBQSxRQUNuQixHQUFHLE9BQU8sT0FBT0EsUUFBTyxPQUFPO0FBQUEsTUFDakMsRUFBRTtBQUFBLElBQ0osQ0FBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLENBQUM7QUFDTCxTQUFPLENBQUMsT0FBTyxVQUFVO0FBQzNCO0FBRUEsSUFBTyxxQkFBUTs7O0FDckJmLElBQU0sUUFBOEIsQ0FBQztBQUFBLEVBQ25DO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsTUFBTTtBQUNKLFNBQ0Usb0NBQUMsU0FBSSxXQUFVLGtDQUNiO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxTQUFTO0FBQUEsTUFDVCxXQUFVO0FBQUE7QUFBQSxJQUVUO0FBQUEsRUFDSCxHQUNBO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxNQUFLO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxNQUNBLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxPQUFPLEtBQUs7QUFBQSxNQUN4QyxXQUFVO0FBQUE7QUFBQSxFQUNaLENBQ0Y7QUFFSjtBQUVBLElBQU8sZ0JBQVE7OztBQy9CZix3QkFBdUI7OztBQ0NoQixJQUFNLFdBQVcsQ0FDdEIsVUFDQSxZQUN1QztBQUN2QyxNQUFJO0FBRUosU0FBTyxJQUFJLFNBQXdCO0FBQ2pDLGlCQUFhLEtBQUs7QUFDbEIsWUFBUSxXQUFXLE1BQU07QUFDdkIsZUFBUyxHQUFHLElBQUk7QUFBQSxJQUNsQixHQUFHLE9BQU87QUFBQSxFQUNaO0FBQ0Y7OztBREZBLElBQU0sY0FBMEMsQ0FBQztBQUFBLEVBQy9DO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsTUFBd0I7QUFDdEIsUUFBTSxnQkFBZ0IsU0FBUyxDQUFDQyxnQkFBZTtBQUM3QyxhQUFTQSxZQUFXLFlBQVksQ0FBQztBQUFBLEVBQ25DLEdBQUcsR0FBRztBQUNOLFFBQU0sQ0FBQyxpQkFBaUIsa0JBQWtCLElBQUksTUFBTSxTQUFTLGNBQWMsRUFBRTtBQUM3RSxRQUFNLFVBQVUsTUFBTTtBQUNwQixxQkFBaUIsbUJBQW1CLGFBQWE7QUFBQSxFQUNuRCxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQ2xCLFNBQ0UsMERBQ0Usb0NBQUMsU0FBSSxXQUFVLGNBQ2Isb0NBQUMsU0FBSSxXQUFVLDBFQUNiO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxPQUFNO0FBQUEsTUFDTixNQUFLO0FBQUEsTUFDTCxTQUFRO0FBQUEsTUFDUixlQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixRQUFPO0FBQUEsTUFDUCxlQUFXLGtCQUFBQyxTQUFXLFdBQVc7QUFBQSxRQUMvQixnQkFBZ0I7QUFBQSxRQUNoQixrQkFBa0I7QUFBQSxRQUNsQixvQkFBb0I7QUFBQSxRQUNwQixjQUFjO0FBQUEsTUFDaEIsQ0FBQztBQUFBO0FBQUEsSUFFQSxnQkFDQztBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsZUFBYztBQUFBLFFBQ2QsZ0JBQWU7QUFBQSxRQUNmLEdBQUU7QUFBQTtBQUFBLElBQ0osSUFFQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsZUFBYztBQUFBLFFBQ2QsZ0JBQWU7QUFBQSxRQUNmLEdBQUU7QUFBQTtBQUFBLElBQ0o7QUFBQSxFQUVKLENBQ0YsR0FDQTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsTUFBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1A7QUFBQSxNQUNBLGNBQWE7QUFBQSxNQUNiLFNBQVMsQ0FBQyxNQUFxQztBQUM3QywyQkFBbUIsRUFBRSxPQUFPLEtBQUs7QUFDakMsc0JBQWMsRUFBRSxPQUFPLEtBQUs7QUFBQSxNQUM5QjtBQUFBLE1BQ0EsV0FBVTtBQUFBO0FBQUEsRUFDWixDQUNGLENBQ0Y7QUFFSjtBQVNBLElBQU0sZUFBZSxDQUFZO0FBQUEsRUFDL0I7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRixNQUFtQztBQUNqQyxTQUNFLG9DQUFDLFNBQUksV0FBVSxvRkFDYixvQ0FBQyxTQUFJLFdBQVUsc0JBQ1osWUFBWSxJQUFJLENBQUMsU0FDaEI7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLEtBQUssS0FBSyxtQkFBbUI7QUFBQSxNQUM3QixTQUFTLE1BQU0sU0FBUyxJQUFJO0FBQUEsTUFDNUIsV0FBVTtBQUFBO0FBQUEsSUFFVCxhQUFhLElBQUk7QUFBQSxFQUNwQixDQUNELENBQ0gsQ0FDRjtBQUVKO0FBSUEsSUFBTSxlQUFlLENBQVk7QUFBQSxFQUMvQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLE1BQTBFO0FBQ3hFLFNBQ0Usb0NBQUMsU0FBSSxhQUNILG9DQUFDLFdBQU0sU0FBUyxNQUFNLFdBQVUsb0NBQzdCLEtBQ0gsR0FDQTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0M7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLEVBQ0YsSUFDRSxlQUFlLFlBQVksVUFBVSxLQUNyQztBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0M7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLEVBQ0YsQ0FFSjtBQUVKO0FBRUEsSUFBTyx3QkFBUTs7O0FFbklmLElBQU0sU0FBZ0MsQ0FBQztBQUFBLEVBQ3JDO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0EsWUFBWTtBQUNkLE1BQ0Usb0NBQUMsU0FBSSxhQUNILG9DQUFDLFdBQU0sU0FBUyxNQUFNLFdBQVUsb0NBQzdCLEtBQ0gsR0FDQTtBQUFBLEVBQUM7QUFBQTtBQUFBLElBQ0MsSUFBSTtBQUFBLElBQ0osY0FBYztBQUFBLElBQ2QsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFHLE9BQVEsS0FBSztBQUFBLElBQzFDLFdBQVU7QUFBQTtBQUFBLEVBRVQsUUFBUSxJQUFJLENBQUMsV0FDWixvQ0FBQyxZQUFPLEtBQUssT0FBTyxPQUFPLE9BQU8sT0FBTyxTQUN0QyxPQUFPLEtBQ1YsQ0FDRDtBQUNILENBQ0Y7QUFHRixJQUFPLGlCQUFROzs7QUNsQ1IsSUFBTSxZQUFZLENBQUMsRUFBRSxJQUFJLE1BQzlCLDBEQUNFLG9DQUFDLFNBQUksV0FBVSwyQkFBeUIsSUFBSSxXQUFZLEdBQ3hELG9DQUFDLFNBQUksV0FBVSxhQUFXLElBQUksSUFBSyxDQUNyQztBQUdGLElBQU8scUJBQVE7OztBQ0lmLElBQU0sTUFBTSxDQUFDLEVBQUUsY0FBYyxJQUFJLE1BQWdCO0FBQy9DLFFBQU0sQ0FBQyxPQUFPLFVBQVUsSUFBSSxtQkFBNEIsS0FBSyxZQUFZO0FBQ3pFLFNBQ0Usb0NBQUMsU0FBSSxXQUFVLHlGQUNiLG9DQUFDLFNBQUksV0FBVSwrREFDYjtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsT0FBTTtBQUFBLE1BQ04sTUFBSztBQUFBLE1BQ0wsY0FBYyxNQUFNLGlCQUFpQjtBQUFBLE1BQ3JDLFVBQVUsV0FBVyxpQkFBaUI7QUFBQTtBQUFBLEVBQ3hDLENBQ0YsR0FDQSxvQ0FBQyxTQUFJLFdBQVUsd0JBQ2I7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLFdBQVU7QUFBQSxNQUNWLE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQSxNQUNOLFVBQVUsV0FBVyxhQUFhO0FBQUEsTUFDbEMsWUFBWSxNQUFNLGFBQWE7QUFBQSxNQUMvQixxQkFBcUI7QUFBQSxNQUNyQixhQUFhLE1BQU0scUJBQXFCO0FBQUEsTUFDeEMsVUFBVSxXQUFXLEtBQUs7QUFBQSxNQUMxQixjQUFjLENBQUMsU0FBYyxvQ0FBQyxzQkFBVSxLQUFLLE1BQU07QUFBQSxNQUNuRCxlQUFlLE1BQU0sS0FBSyxHQUFHO0FBQUE7QUFBQSxFQUMvQixHQUNDLE1BQU0sWUFBWSxLQUNqQjtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsTUFBSztBQUFBLE1BQ0wsT0FBTTtBQUFBLE1BQ04sU0FBUyxNQUFNLFdBQVcsSUFBSSxDQUFDLFFBQVE7QUFBQSxRQUNyQyxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsTUFDVCxFQUFFO0FBQUEsTUFDRixnQkFBZ0IsTUFBTSxXQUFXO0FBQUEsTUFDakMsVUFBVSxXQUFXLFdBQVc7QUFBQTtBQUFBLEVBQ2xDLEdBRUQsTUFBTSxXQUFXLEtBQ2hCO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxNQUFLO0FBQUEsTUFDTCxPQUFNO0FBQUEsTUFDTixTQUFTLE1BQU0sVUFBVSxJQUFJLENBQUMsUUFBUTtBQUFBLFFBQ3BDLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxNQUNULEVBQUU7QUFBQSxNQUNGLGdCQUFnQixNQUFNLFVBQVU7QUFBQSxNQUNoQyxVQUFVLFdBQVcsVUFBVTtBQUFBO0FBQUEsRUFDakMsQ0FFSixDQUNGO0FBRUo7QUFFQSxJQUFPLGNBQVE7OztBQzlEZixJQUFNLFlBQVksT0FDaEIsS0FDQSxVQUNrQjtBQUNsQixNQUFJLE1BQU0sV0FBVyxRQUFRO0FBQzNCLFVBQU0sSUFBSSxTQUFTLHdEQUF3RDtBQUMzRSxVQUFNLElBQUk7QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0YsT0FBTztBQUNMLFVBQU0sSUFBSSxTQUFTLHFEQUFxRDtBQUN4RSxVQUFNLElBQUk7QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sT0FBTyxPQUNsQixLQUNBLFVBQ2tCO0FBQ2xCLFFBQU0sVUFBVSxLQUFLLEtBQUs7QUFDMUIsVUFBUSxJQUFJLFNBQVMsS0FBSztBQUMxQixVQUFRLElBQUksT0FBTyxHQUFHO0FBRXRCLE1BQUksS0FBSyxZQUFZO0FBRXJCLE1BQUksVUFBVSxVQUFVO0FBQ3hCLE1BQUk7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLFFBQU0sT0FBTyxTQUFTLFdBQVcsSUFBSSxJQUFJO0FBQ3pDLE1BQUksTUFBTSxPQUFPO0FBQ2YsV0FBTyxLQUFLLE9BQU8sb0NBQUMsaUJBQU0sU0FBUyxNQUFNLE9BQU8sQ0FBRTtBQUFBLEVBQ3BEO0FBRUEsT0FBSyxPQUFPLG9DQUFDLGVBQUksY0FBYyxPQUFPLEtBQVUsQ0FBRTtBQUNwRDsiLAogICJuYW1lcyI6IFsiY2xhc3NOYW1lcyIsICJFcnJvciIsICJhdHRycyIsICJzZWFyY2hUZXJtIiwgImNsYXNzTmFtZXMiXQp9Cg==
