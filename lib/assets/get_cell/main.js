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
      function classNames3() {
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
              var inner = classNames3.apply(null, arg);
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
        classNames3.default = classNames3;
        module.exports = classNames3;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames3;
        });
      } else {
        window.classNames = classNames3;
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
    console.log("Pushing ${attrName} to server", attrValue);
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
      value: defaultValue,
      name,
      onChange: (e) => onChange(e.target.value),
      className: "block rounded-lg border border-gray-300 bg-gray-50 p-1.5 text-sm focus:border-blue-500 focus:ring-blue-500"
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
var import_classnames2 = __toESM(require_classnames());
var Select = ({
  name,
  label,
  options,
  selectedOption,
  onChange,
  className = "",
  orientation = "vert"
}) => /* @__PURE__ */ React.createElement(
  "div",
  {
    className: (0, import_classnames2.default)(
      {
        "flex flex-row items-baseline": orientation == "horiz"
      },
      className
    )
  },
  /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: name,
      className: (0, import_classnames2.default)(
        {
          block: orientation == "vert",
          "pr-1 uppercase": orientation == "horiz"
        },
        "mb-1 text-sm font-medium"
      )
    },
    label
  ),
  /* @__PURE__ */ React.createElement(
    "select",
    {
      id: name,
      defaultValue: selectedOption,
      onChange: (e) => onChange(e.target.value),
      className: (0, import_classnames2.default)(
        { "block w-full": orientation == "vert" },
        " appearance-none rounded-lg border border-gray-300 bg-gray-50 bg-caret-down bg-[length:10px] bg-[center_right_10px] bg-no-repeat p-2 pr-5 text-sm focus:border-blue-500 focus:ring-blue-500"
      )
    },
    options.map((option) => /* @__PURE__ */ React.createElement("option", { key: option.value, value: option.value }, option.label))
  )
);
var select_default = Select;

// assets/get_cell/gvk_option.tsx
var GVKOption = ({ gvk }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-gray-400" }, gvk.api_version), /* @__PURE__ */ React.createElement("div", { className: "text-sm" }, gvk.kind));
var gvk_option_default = GVKOption;

// assets/get_cell/app.tsx
var App = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = attr_state_default(ctx, initialAttrs);
  return /* @__PURE__ */ React.createElement("div", { className: "rounded-md border border-solid border-gray-300 font-inter font-medium text-gray-600" }, /* @__PURE__ */ React.createElement("div", { className: "border-b-solid flex flex-wrap justify-between gap-y-3 border-b border-b-gray-300 bg-blue-100 p-3" }, /* @__PURE__ */ React.createElement(
    input_default,
    {
      label: "Assign To",
      name: "assign_to",
      defaultValue: attrs["result_variable"],
      onChange: updateAttr("result_variable")
    }
  ), /* @__PURE__ */ React.createElement(
    select_default,
    {
      name: "connection",
      label: "Connection",
      options: attrs.connections.map((connection) => ({
        label: connection.variable,
        value: connection.variable
      })),
      selectedOption: attrs.connection?.variable,
      onChange: updateAttr("connection"),
      orientation: "horiz"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-4 p-3" }, attrs.connection && /* @__PURE__ */ React.createElement(
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9lcnJvci50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9hdHRyX3N0YXRlLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Zvcm0vaW5wdXQudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9zZWFyY2hfc2VsZWN0LnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL3V0aWxzLnRzIiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9zZWxlY3QudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9nZXRfY2VsbC9ndmtfb3B0aW9uLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvZ2V0X2NlbGwvYXBwLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvZ2V0X2NlbGwvbWFpbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuXHRDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cblx0TGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcblx0aHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIG5hdGl2ZUNvZGVTdHJpbmcgPSAnW25hdGl2ZSBjb2RlXSc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nICYmICFhcmcudG9TdHJpbmcudG9TdHJpbmcoKS5pbmNsdWRlcygnW25hdGl2ZSBjb2RlXScpKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCAiaW50ZXJmYWNlIEVycm9yUHJvcHMge1xuICBtZXNzYWdlOiBzdHJpbmdcbn1cbmNvbnN0IEVycm9yID0gKHsgbWVzc2FnZSB9OiBFcnJvclByb3BzKSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLXJlZC03MDAgYmctcmVkLTEwMCBwLTJcIj5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBmbGV4LW5vbmUgdGV4dC1yZWQtNzAwXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgZD1cIk0xMiA5djMuNzVtLTkuMzAzIDMuMzc2Yy0uODY2IDEuNS4yMTcgMy4zNzQgMS45NDggMy4zNzRoMTQuNzFjMS43MyAwIDIuODEzLTEuODc0IDEuOTQ4LTMuMzc0TDEzLjk0OSAzLjM3OGMtLjg2Ni0xLjUtMy4wMzItMS41LTMuODk4IDBMMi42OTcgMTYuMTI2ek0xMiAxNS43NWguMDA3di4wMDhIMTJ2LS4wMDh6XCJcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWludGVyIHB4LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXJlZC03MDBcIj5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yXG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuXG50eXBlIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPiA9IChcbiAgYXR0ck5hbWU6IHN0cmluZyxcbikgPT4gKEF0dHJWYWx1ZTogQXR0cnNUeXBlW2tleW9mIEF0dHJzVHlwZV0pID0+IHZvaWRcblxuY29uc3QgdXNlQXR0cnNTdGF0ZSA9IDxBdHRyc1R5cGUgZXh0ZW5kcyBvYmplY3Q+KFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBpbml0aWFsQXR0cnM6IEF0dHJzVHlwZSxcbik6IFtBdHRyc1R5cGUsIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPl0gPT4ge1xuICBjb25zdCBbYXR0cnMsIHNldEF0dHJzXSA9IFJlYWN0LnVzZVN0YXRlPEF0dHJzVHlwZT4oaW5pdGlhbEF0dHJzKVxuICBjb25zdCB1cGRhdGVBdHRyOiBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoYXR0ck5hbWUpID0+IChhdHRyVmFsdWUpID0+IHtcbiAgICBzZXRBdHRycygoYXR0cnMpID0+ICh7IC4uLmF0dHJzLCBbYXR0ck5hbWVdOiBhdHRyVmFsdWUgfSkpXG4gICAgY29uc29sZS5sb2coJ1B1c2hpbmcgJHthdHRyTmFtZX0gdG8gc2VydmVyJywgYXR0clZhbHVlKVxuICAgIGN0eC5wdXNoRXZlbnQoYHVwZGF0ZV8ke2F0dHJOYW1lfWAsIGF0dHJWYWx1ZSlcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY3R4LmhhbmRsZUV2ZW50PEF0dHJzVHlwZT4oJ3VwZGF0ZScsICh1cGRhdGVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQXR0cmlidXRlIHVwZGF0ZSBmcm9tIHNlcnZlcicsIHVwZGF0ZXMpXG4gICAgICBzZXRBdHRycygoYXR0cnMpID0+ICh7XG4gICAgICAgIC4uLk9iamVjdC5hc3NpZ24oYXR0cnMsIHVwZGF0ZXMpLFxuICAgICAgfSkpXG4gICAgfSlcbiAgfSwgW10pXG4gIHJldHVybiBbYXR0cnMsIHVwZGF0ZUF0dHJdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUF0dHJzU3RhdGVcbiIsICJ0eXBlIElucHV0UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIGRlZmF1bHRWYWx1ZTogc3RyaW5nXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxufVxuY29uc3QgSW5wdXQ6IFJlYWN0LkZDPElucHV0UHJvcHM+ID0gKHtcbiAgbmFtZSxcbiAgbGFiZWwsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgb25DaGFuZ2UsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWJhc2VsaW5lXCI+XG4gICAgICA8bGFiZWxcbiAgICAgICAgaHRtbEZvcj17bmFtZX1cbiAgICAgICAgY2xhc3NOYW1lPVwibWItMSBibG9jayBwci0xIHRleHQtc20gZm9udC1tZWRpdW0gdXBwZXJjYXNlXCJcbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9XCJibG9jayByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS01MCBwLTEuNSB0ZXh0LXNtIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLWJsdWUtNTAwXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcbiIsICJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbnR5cGUgU2VhcmNoSW5wdXRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHNlbGVjdGVkVmFsdWU6IHN0cmluZ1xuICBzZWFyY2hUZXJtOiBzdHJpbmdcbiAgb25TZWFyY2g6IChzZWFyY2hUZXJtOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuY29uc3QgU2VhcmNoSW5wdXQ6IFJlYWN0LkZDPFNlYXJjaElucHV0UHJvcHM+ID0gKHtcbiAgbmFtZSxcbiAgc2VsZWN0ZWRWYWx1ZSxcbiAgc2VhcmNoVGVybSxcbiAgb25TZWFyY2gsXG59OiBTZWFyY2hJbnB1dFByb3BzKSA9PiB7XG4gIGNvbnN0IHBlcmZvcm1TZWFyY2ggPSBkZWJvdW5jZSgoc2VhcmNoVGVybSkgPT4ge1xuICAgIG9uU2VhcmNoKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbiAgfSwgMzAwKVxuICBjb25zdCBbbG9jYWxTZWFyY2hUZXJtLCBzZXRMb2NhbFNlYXJjaFRlcm1dID0gUmVhY3QudXNlU3RhdGUoc2VhcmNoVGVybSA/PyAnJylcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZWxlY3RlZFZhbHVlICYmIHNldExvY2FsU2VhcmNoVGVybShzZWxlY3RlZFZhbHVlKVxuICB9LCBbc2VsZWN0ZWRWYWx1ZV0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcGwtM1wiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX1cbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2gtNSB3LTUnLCB7XG4gICAgICAgICAgICAgICdiZy1ncmVlbi0yMDAnOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgICAgICAndGV4dC1ncmVlbi04MDAnOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgICAgICAnYm9yZGVyLWdyZWVuLTgwMCc6IHNlbGVjdGVkVmFsdWUsXG4gICAgICAgICAgICAgICdyb3VuZGVkLWxnJzogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RlZFZhbHVlID8gKFxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgZD1cIk05IDEyLjc1TDExLjI1IDE1IDE1IDkuNzVNMjEgMTJjMCAxLjI2OC0uNjMgMi4zOS0xLjU5MyAzLjA2OGEzLjc0NSAzLjc0NSAwIDAxLTEuMDQzIDMuMjk2IDMuNzQ1IDMuNzQ1IDAgMDEtMy4yOTYgMS4wNDNBMy43NDUgMy43NDUgMCAwMTEyIDIxYy0xLjI2OCAwLTIuMzktLjYzLTMuMDY4LTEuNTkzYTMuNzQ2IDMuNzQ2IDAgMDEtMy4yOTYtMS4wNDMgMy43NDUgMy43NDUgMCAwMS0xLjA0My0zLjI5NkEzLjc0NSAzLjc0NSAwIDAxMyAxMmMwLTEuMjY4LjYzLTIuMzkgMS41OTMtMy4wNjhhMy43NDUgMy43NDUgMCAwMTEuMDQzLTMuMjk2IDMuNzQ2IDMuNzQ2IDAgMDEzLjI5Ni0xLjA0M0EzLjc0NiAzLjc0NiAwIDAxMTIgM2MxLjI2OCAwIDIuMzkuNjMgMy4wNjggMS41OTNhMy43NDYgMy43NDYgMCAwMTMuMjk2IDEuMDQzIDMuNzQ2IDMuNzQ2IDAgMDExLjA0MyAzLjI5NkEzLjc0NSAzLjc0NSAwIDAxMjEgMTJ6XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIxIDIxbC01LjE5Ny01LjE5N20wIDBBNy41IDcuNSAwIDEwNS4xOTYgNS4xOTZhNy41IDcuNSAwIDAwMTAuNjA3IDEwLjYwN3pcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17bG9jYWxTZWFyY2hUZXJtfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICBvbklucHV0PXsoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgIHNldExvY2FsU2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIHBlcmZvcm1TZWFyY2goZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktNTAgcC0yIHBsLTkgdGV4dC1zbSBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy1ibHVlLTUwMFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG50eXBlIFNlYXJjaFJlc3VsdFByb3BzPEl0ZW1UeXBlPiA9IHtcbiAgcmVzdWx0SXRlbXM6IFtJdGVtVHlwZV1cbiAgaXRlbVJlbmRlcmVyOiAoaXRlbTogSXRlbVR5cGUpID0+IFJlYWN0LkpTWC5FbGVtZW50XG4gIG9uU2VsZWN0OiAoaXRlbTogSXRlbVR5cGUpID0+IHZvaWRcbiAgcmVzdWx0SXRlbXNLZXlGaWVsZDoga2V5b2YgSXRlbVR5cGVcbn1cblxuY29uc3QgU2VhcmNoUmVzdWx0ID0gPEl0ZW1UeXBlLD4oe1xuICByZXN1bHRJdGVtcyxcbiAgaXRlbVJlbmRlcmVyLFxuICBvblNlbGVjdCxcbiAgcmVzdWx0SXRlbXNLZXlGaWVsZCxcbn06IFNlYXJjaFJlc3VsdFByb3BzPEl0ZW1UeXBlPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtMzYgb3ZlcmZsb3ctYXV0byByb3VuZGVkLWItbGcgYm9yZGVyLWIgYm9yZGVyLWwgYm9yZGVyLXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctbWF4IG1pbi13LWZ1bGxcIj5cbiAgICAgICAge3Jlc3VsdEl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aXRlbVtyZXN1bHRJdGVtc0tleUZpZWxkXSBhcyBzdHJpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChpdGVtKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iLXNvbGlkIGxhc3Q6Ym9yZGVyLWItbm9uZSBjdXJzb3ItcG9pbnRlciBib3JkZXItYiBib3JkZXItYi1ncmF5LTMwMCBiZy1ncmF5LTUwIHB4LTIgcHktMC41IGhvdmVyOmJnLWJsdWUtNjAwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtUmVuZGVyZXIoaXRlbSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxudHlwZSBTZWFyY2hTZWxlY3RQcm9wcyA9IHsgbGFiZWw6IHN0cmluZzsgY2xhc3NOYW1lOiBzdHJpbmcgfVxuXG5jb25zdCBTZWFyY2hTZWxlY3QgPSA8SXRlbVR5cGUsPih7XG4gIG5hbWUsXG4gIGxhYmVsLFxuICBzZWFyY2hUZXJtLFxuICBvblNlYXJjaCxcbiAgcmVzdWx0SXRlbXMsXG4gIHJlc3VsdEl0ZW1zS2V5RmllbGQsXG4gIGl0ZW1SZW5kZXJlcixcbiAgY2xhc3NOYW1lLFxuICBvblNlbGVjdCxcbiAgc2VsZWN0ZWRWYWx1ZSxcbn06IFNlYXJjaElucHV0UHJvcHMgJiBTZWFyY2hSZXN1bHRQcm9wczxJdGVtVHlwZT4gJiBTZWFyY2hTZWxlY3RQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9IGNsYXNzTmFtZT1cIm1iLTEgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgICAgc2VhcmNoVGVybT17c2VhcmNoVGVybX1cbiAgICAgICAgc2VsZWN0ZWRWYWx1ZT17c2VsZWN0ZWRWYWx1ZX1cbiAgICAgIC8+XG4gICAgICB7KHJlc3VsdEl0ZW1zICYmIHJlc3VsdEl0ZW1zLmxlbmd0aCkgPiAwICYmIChcbiAgICAgICAgPFNlYXJjaFJlc3VsdFxuICAgICAgICAgIHJlc3VsdEl0ZW1zPXtyZXN1bHRJdGVtc31cbiAgICAgICAgICBpdGVtUmVuZGVyZXI9e2l0ZW1SZW5kZXJlcn1cbiAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAgICAgcmVzdWx0SXRlbXNLZXlGaWVsZD17cmVzdWx0SXRlbXNLZXlGaWVsZH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoU2VsZWN0XG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuaW1wb3J0IHsgQXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnXG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgY2FsbGJhY2s6IFQsXG4gIHRpbWVvdXQ6IG51bWJlcixcbik6ICgoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4gdm9pZCkgPT4ge1xuICBsZXQgdGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+XG5cbiAgcmV0dXJuICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjayguLi5hcmdzKVxuICAgIH0sIHRpbWVvdXQpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRSZWFjdCA9IGFzeW5jIDxUPihcbiAgY3R4OiBLaW5vQ29udGV4dCxcbiAgYXR0cnM6IEF0dHJpYnV0ZXMsXG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKGF0dHJzLm1peF9lbnYgPT0gJ3Byb2QnKSB7XG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKCdodHRwczovL3VucGtnLmNvbS9yZWFjdEAxOC91bWQvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKVxuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcbiAgICAgICdodHRwczovL3VucGtnLmNvbS9yZWFjdC1kb21AMTguMi4wL3VtZC9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnLFxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE4L3VtZC9yZWFjdC5kZXZlbG9wbWVudC5qcycpXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxOC4yLjAvdW1kL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcycsXG4gICAgKVxuICB9XG59XG4iLCAiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxudHlwZSBTZWxlY3RQcm9wczxWYWx1ZVR5cGU+ID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBvcHRpb25zOiB7IHZhbHVlOiBWYWx1ZVR5cGU7IGxhYmVsOiBzdHJpbmcgfVtdXG4gIHNlbGVjdGVkT3B0aW9uOiBWYWx1ZVR5cGVcbiAgb25DaGFuZ2U6IChvcHRpb246IHN0cmluZykgPT4gdm9pZFxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgb3JpZW50YXRpb24/OiAnaG9yaXonIHwgJ3ZlcnQnXG59XG5cbmNvbnN0IFNlbGVjdCA9IDxWYWx1ZVR5cGUsPih7XG4gIG5hbWUsXG4gIGxhYmVsLFxuICBvcHRpb25zLFxuICBzZWxlY3RlZE9wdGlvbixcbiAgb25DaGFuZ2UsXG4gIGNsYXNzTmFtZSA9ICcnLFxuICBvcmllbnRhdGlvbiA9ICd2ZXJ0Jyxcbn06IFNlbGVjdFByb3BzPFZhbHVlVHlwZT4pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgIHtcbiAgICAgICAgJ2ZsZXggZmxleC1yb3cgaXRlbXMtYmFzZWxpbmUnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICA+XG4gICAgPGxhYmVsXG4gICAgICBodG1sRm9yPXtuYW1lfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICB7XG4gICAgICAgICAgYmxvY2s6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyxcbiAgICAgICAgICAncHItMSB1cHBlcmNhc2UnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgICB9LFxuICAgICAgICAnbWItMSB0ZXh0LXNtIGZvbnQtbWVkaXVtJyxcbiAgICAgICl9XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvbGFiZWw+XG4gICAgPHNlbGVjdFxuICAgICAgaWQ9e25hbWV9XG4gICAgICBkZWZhdWx0VmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlIS50YXJnZXQhLnZhbHVlKX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgeyAnYmxvY2sgdy1mdWxsJzogb3JpZW50YXRpb24gPT0gJ3ZlcnQnIH0sXG4gICAgICAgICcgYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTUwIGJnLWNhcmV0LWRvd24gYmctW2xlbmd0aDoxMHB4XSBiZy1bY2VudGVyX3JpZ2h0XzEwcHhdIGJnLW5vLXJlcGVhdCBwLTIgcHItNSB0ZXh0LXNtIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLWJsdWUtNTAwJyxcbiAgICAgICl9XG4gICAgPlxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XG4gICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApKX1cbiAgICA8L3NlbGVjdD5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFxuIiwgImltcG9ydCB7IEdWSyB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBHVktPcHRpb24gPSAoeyBndmsgfTogeyBndms6IEdWSyB9KSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj57Z3ZrLmFwaV92ZXJzaW9ufTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntndmsua2luZH08L2Rpdj5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEdWS09wdGlvblxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCB1c2VBdHRyc1N0YXRlIGZyb20gJy4uL3NoYXJlZC9hdHRyX3N0YXRlJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uL3NoYXJlZC9mb3JtL2lucHV0J1xuaW1wb3J0IFNlYXJjaFNlbGVjdCBmcm9tICcuLi9zaGFyZWQvZm9ybS9zZWFyY2hfc2VsZWN0J1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9zaGFyZWQvZm9ybS9zZWxlY3QnXG5pbXBvcnQgR1ZLT3B0aW9uIGZyb20gJy4vZ3ZrX29wdGlvbidcbmltcG9ydCB7IEdFVENlbGxBdHRycywgR1ZLIH0gZnJvbSAnLi90eXBlcydcblxuaW50ZXJmYWNlIEFwcFByb3BzIHtcbiAgaW5pdGlhbEF0dHJzOiBHRVRDZWxsQXR0cnNcbiAgY3R4OiBLaW5vQ29udGV4dFxufVxuXG5jb25zdCBBcHAgPSAoeyBpbml0aWFsQXR0cnMsIGN0eCB9OiBBcHBQcm9wcykgPT4ge1xuICBjb25zdCBbYXR0cnMsIHVwZGF0ZUF0dHJdID0gdXNlQXR0cnNTdGF0ZTxHRVRDZWxsQXR0cnM+KGN0eCwgaW5pdGlhbEF0dHJzKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMCBmb250LWludGVyIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItc29saWQgZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGdhcC15LTMgYm9yZGVyLWIgYm9yZGVyLWItZ3JheS0zMDAgYmctYmx1ZS0xMDAgcC0zXCI+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGxhYmVsPVwiQXNzaWduIFRvXCJcbiAgICAgICAgICBuYW1lPVwiYXNzaWduX3RvXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2F0dHJzWydyZXN1bHRfdmFyaWFibGUnXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cigncmVzdWx0X3ZhcmlhYmxlJyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBuYW1lPVwiY29ubmVjdGlvblwiXG4gICAgICAgICAgbGFiZWw9XCJDb25uZWN0aW9uXCJcbiAgICAgICAgICBvcHRpb25zPXthdHRycy5jb25uZWN0aW9ucy5tYXAoKGNvbm5lY3Rpb24pID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogY29ubmVjdGlvbi52YXJpYWJsZSxcbiAgICAgICAgICAgIHZhbHVlOiBjb25uZWN0aW9uLnZhcmlhYmxlLFxuICAgICAgICAgIH0pKX1cbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnMuY29ubmVjdGlvbj8udmFyaWFibGV9XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ2Nvbm5lY3Rpb24nKX1cbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNCBwLTNcIj5cbiAgICAgICAge2F0dHJzLmNvbm5lY3Rpb24gJiYgKFxuICAgICAgICAgIDxTZWFyY2hTZWxlY3Q8R1ZLPlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctZnVsbFwiXG4gICAgICAgICAgICBuYW1lPVwiZ3ZrXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUmVzb3VyY2UgS2luZFwiXG4gICAgICAgICAgICBvblNlYXJjaD17dXBkYXRlQXR0cignc2VhcmNoX3Rlcm0nKX1cbiAgICAgICAgICAgIHNlYXJjaFRlcm09e2F0dHJzWydzZWFyY2hfdGVybSddfVxuICAgICAgICAgICAgcmVzdWx0SXRlbXNLZXlGaWVsZD17J2luZGV4J31cbiAgICAgICAgICAgIHJlc3VsdEl0ZW1zPXthdHRyc1snc2VhcmNoX3Jlc3VsdF9pdGVtcyddfVxuICAgICAgICAgICAgb25TZWxlY3Q9e3VwZGF0ZUF0dHIoJ2d2aycpfVxuICAgICAgICAgICAgaXRlbVJlbmRlcmVyPXsoaXRlbTogR1ZLKSA9PiA8R1ZLT3B0aW9uIGd2az17aXRlbX0gLz59XG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlPXthdHRyc1snZ3ZrJ10/LmtpbmR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2F0dHJzWyduYW1lc3BhY2VzJ10gJiYgKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lc3BhY2VcIlxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lc3BhY2VcIlxuICAgICAgICAgICAgb3B0aW9ucz17YXR0cnMubmFtZXNwYWNlcy5tYXAoKG5zKSA9PiAoe1xuICAgICAgICAgICAgICBsYWJlbDogbnMsXG4gICAgICAgICAgICAgIHZhbHVlOiBucyxcbiAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXthdHRyc1snbmFtZXNwYWNlJ119XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cignbmFtZXNwYWNlJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2F0dHJzWydyZXNvdXJjZXMnXSAmJiAoXG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cInJlc291cmNlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUmVzb3VyY2UgTmFtZVwiXG4gICAgICAgICAgICBvcHRpb25zPXthdHRycy5yZXNvdXJjZXMubWFwKChucykgPT4gKHtcbiAgICAgICAgICAgICAgbGFiZWw6IG5zLFxuICAgICAgICAgICAgICB2YWx1ZTogbnMsXG4gICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnNbJ3Jlc291cmNlJ119XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cigncmVzb3VyY2UnKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuaW1wb3J0IEVycm9yIGZyb20gJy4uL3NoYXJlZC9lcnJvcidcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnXG5pbXBvcnQgeyBHRVRDZWxsQXR0cnMgfSBmcm9tICcuL3R5cGVzJ1xuXG5jb25zdCBsb2FkUmVhY3QgPSBhc3luYyAoXG4gIGN0eDogS2lub0NvbnRleHQsXG4gIGF0dHJzOiBHRVRDZWxsQXR0cnMsXG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKGF0dHJzLm1peF9lbnYgPT0gJ3Byb2QnKSB7XG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKCdodHRwczovL3VucGtnLmNvbS9yZWFjdEAxOC91bWQvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKVxuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcbiAgICAgICdodHRwczovL3VucGtnLmNvbS9yZWFjdC1kb21AMTguMi4wL3VtZC9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnLFxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE4L3VtZC9yZWFjdC5kZXZlbG9wbWVudC5qcycpXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxOC4yLjAvdW1kL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcycsXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBpbml0ID0gYXN5bmMgKFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBhdHRyczogR0VUQ2VsbEF0dHJzLFxuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGF3YWl0IGxvYWRSZWFjdChjdHgsIGF0dHJzKVxuXG4gIGN0eC5yb290LmlubmVySFRNTCA9ICdsb2FkaW5nLi4uJ1xuXG4gIGN0eC5pbXBvcnRDU1MoJ21haW4uY3NzJylcbiAgY3R4LmltcG9ydENTUyhcbiAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyxcbiAgKVxuXG4gIGNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGN0eC5yb290KVxuICBpZiAoYXR0cnMuZXJyb3IpIHtcbiAgICByZXR1cm4gcm9vdC5yZW5kZXIoPEVycm9yIG1lc3NhZ2U9e2F0dHJzLmVycm9yfSAvPilcbiAgfVxuXG4gIHJvb3QucmVuZGVyKDxBcHAgaW5pdGlhbEF0dHJzPXthdHRyc30gY3R4PXtjdHh9IC8+KVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQU9BLEtBQUMsV0FBWTtBQUNaO0FBRUEsVUFBSSxTQUFTLENBQUMsRUFBRTtBQUNoQixVQUFJLG1CQUFtQjtBQUV2QixlQUFTQSxjQUFhO0FBQ3JCLFlBQUksVUFBVSxDQUFDO0FBRWYsaUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUs7QUFDMUMsY0FBSSxNQUFNLFVBQVUsQ0FBQztBQUNyQixjQUFJLENBQUM7QUFBSztBQUVW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QUFDLFNBQWMsb0NBQUMsc0JBQVUsS0FBSyxNQUFNO0FBQUEsTUFDbkQsZUFBZSxNQUFNLEtBQUssR0FBRztBQUFBO0FBQUEsRUFDL0IsR0FFRCxNQUFNLFlBQVksS0FDakI7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQSxNQUNOLFNBQVMsTUFBTSxXQUFXLElBQUksQ0FBQyxRQUFRO0FBQUEsUUFDckMsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLE1BQ1QsRUFBRTtBQUFBLE1BQ0YsZ0JBQWdCLE1BQU0sV0FBVztBQUFBLE1BQ2pDLFVBQVUsV0FBVyxXQUFXO0FBQUE7QUFBQSxFQUNsQyxHQUVELE1BQU0sV0FBVyxLQUNoQjtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsTUFBSztBQUFBLE1BQ0wsT0FBTTtBQUFBLE1BQ04sU0FBUyxNQUFNLFVBQVUsSUFBSSxDQUFDLFFBQVE7QUFBQSxRQUNwQyxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsTUFDVCxFQUFFO0FBQUEsTUFDRixnQkFBZ0IsTUFBTSxVQUFVO0FBQUEsTUFDaEMsVUFBVSxXQUFXLFVBQVU7QUFBQTtBQUFBLEVBQ2pDLENBRUosQ0FDRjtBQUVKO0FBRUEsSUFBTyxjQUFROzs7QUMzRWYsSUFBTSxZQUFZLE9BQ2hCLEtBQ0EsVUFDa0I7QUFDbEIsTUFBSSxNQUFNLFdBQVcsUUFBUTtBQUMzQixVQUFNLElBQUksU0FBUyx3REFBd0Q7QUFDM0UsVUFBTSxJQUFJO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGLE9BQU87QUFDTCxVQUFNLElBQUksU0FBUyxxREFBcUQ7QUFDeEUsVUFBTSxJQUFJO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLE9BQU8sT0FDbEIsS0FDQSxVQUNrQjtBQUNsQixRQUFNLFVBQVUsS0FBSyxLQUFLO0FBRTFCLE1BQUksS0FBSyxZQUFZO0FBRXJCLE1BQUksVUFBVSxVQUFVO0FBQ3hCLE1BQUk7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLFFBQU0sT0FBTyxTQUFTLFdBQVcsSUFBSSxJQUFJO0FBQ3pDLE1BQUksTUFBTSxPQUFPO0FBQ2YsV0FBTyxLQUFLLE9BQU8sb0NBQUMsaUJBQU0sU0FBUyxNQUFNLE9BQU8sQ0FBRTtBQUFBLEVBQ3BEO0FBRUEsT0FBSyxPQUFPLG9DQUFDLGVBQUksY0FBYyxPQUFPLEtBQVUsQ0FBRTtBQUNwRDsiLAogICJuYW1lcyI6IFsiY2xhc3NOYW1lcyIsICJFcnJvciIsICJhdHRycyIsICJzZWFyY2hUZXJtIiwgImNsYXNzTmFtZXMiLCAiaW1wb3J0X2NsYXNzbmFtZXMiLCAiY2xhc3NOYW1lcyJdCn0K
