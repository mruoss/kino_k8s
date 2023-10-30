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
      function classNames4() {
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
              var inner = classNames4.apply(null, arg);
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
        classNames4.default = classNames4;
        module.exports = classNames4;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames4;
        });
      } else {
        window.classNames = classNames4;
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
var loadReact = async (ctx, attrs) => {
  if (attrs.mix_env == "dev") {
    await ctx.importJS("https://unpkg.com/react@18/umd/react.development.js");
    await ctx.importJS(
      "https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"
    );
  } else {
    await ctx.importJS("https://unpkg.com/react@18/umd/react.production.min.js");
    await ctx.importJS(
      "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"
    );
  }
};

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

// assets/shared/conn_notice.tsx
var ConnNotice = () => /* @__PURE__ */ React.createElement("div", { className: "mb-5 rounded-md bg-gray-100 p-4 font-inter text-sm font-medium text-gray-500" }, /* @__PURE__ */ React.createElement("p", null, "To make requests to the Kubernetes cluster, you need at least one connection to a cluster."), /* @__PURE__ */ React.createElement("p", { className: "pt-1" }, "To create a cluster connection, you can add the", " ", /* @__PURE__ */ React.createElement("span", { className: "text-gray-600" }, "Cluster Connection"), " smart cell."));
var conn_notice_default = ConnNotice;

// assets/shared/form/input.tsx
var import_classnames = __toESM(require_classnames());
var Input = ({
  name,
  label,
  defaultValue,
  onChange,
  orientation = "vert"
}) => {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: (0, import_classnames.default)({
        "flex flex-row items-baseline": orientation == "horiz"
      })
    },
    /* @__PURE__ */ React.createElement(
      "label",
      {
        htmlFor: name,
        className: (0, import_classnames.default)(
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
      "input",
      {
        type: "text",
        value: defaultValue,
        name,
        onChange: (e) => onChange(e.target.value),
        className: (0, import_classnames.default)(
          { "block w-full": orientation == "vert" },
          "rounded-lg border border-gray-300 bg-gray-50 p-1.5 text-sm focus:border-blue-500 focus:ring-blue-500"
        )
      }
    )
  );
};
var input_default = Input;

// assets/shared/form/search_select.tsx
var import_classnames2 = __toESM(require_classnames());
var SearchInput = ({
  name,
  selectedValue,
  searchTerm,
  onSearch,
  placeholder
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
      className: (0, import_classnames2.default)("h-5 w-5", {
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
      placeholder,
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
  selectedValue,
  placeholder
}) => {
  return /* @__PURE__ */ React.createElement("div", { className }, /* @__PURE__ */ React.createElement("label", { htmlFor: name, className: "mb-1 block text-sm font-medium" }, label), /* @__PURE__ */ React.createElement(
    SearchInput,
    {
      name,
      onSearch,
      searchTerm,
      selectedValue,
      placeholder
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
var import_classnames3 = __toESM(require_classnames());
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
    className: (0, import_classnames3.default)(
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
      className: (0, import_classnames3.default)(
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
      value: selectedOption || void 0,
      onChange: (e) => onChange(e.target.value),
      className: (0, import_classnames3.default)(
        { "block w-full": orientation == "vert" },
        " bg-caret-down appearance-none rounded-lg border border-gray-300 bg-gray-50 bg-[length:10px] bg-[center_right_10px] bg-no-repeat p-2 pr-5 text-sm focus:border-blue-500 focus:ring-blue-500"
      )
    },
    options.map((option) => /* @__PURE__ */ React.createElement("option", { key: option.value, value: option.value }, option.label))
  )
);
var select_default = Select;

// assets/shared/gvk_option.tsx
var GVKOption = ({ gvk }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-gray-400" }, gvk.api_version), /* @__PURE__ */ React.createElement("div", { className: "text-sm" }, gvk.kind));
var gvk_option_default = GVKOption;

// assets/get_cell/app.tsx
var App = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = attr_state_default(ctx, initialAttrs);
  const result_types = attrs.result_types[attrs.request_type];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, !attrs.connection && /* @__PURE__ */ React.createElement(conn_notice_default, null), /* @__PURE__ */ React.createElement("div", { className: "rounded-md border border-solid border-gray-300 font-inter font-medium text-gray-600" }, /* @__PURE__ */ React.createElement("div", { className: "border-b-solid flex gap-x-5 gap-y-3 border-b border-b-gray-300 bg-blue-100 p-3" }, /* @__PURE__ */ React.createElement(
    select_default,
    {
      name: "connection",
      label: "Connection",
      options: attrs.connections.map((connection) => ({
        label: connection.variable,
        value: connection.variable
      })),
      selectedOption: attrs.connection?.variable?.toString(),
      onChange: updateAttr("connection"),
      orientation: "horiz"
    }
  ), /* @__PURE__ */ React.createElement(
    select_default,
    {
      name: "request_type",
      label: "Request Type",
      options: attrs.request_types.map((request_type) => ({
        label: request_type.toUpperCase(),
        value: request_type
      })),
      selectedOption: attrs.request_type,
      onChange: updateAttr("request_type"),
      orientation: "horiz"
    }
  ), result_types && /* @__PURE__ */ React.createElement(
    select_default,
    {
      name: "result_type",
      label: "Result Type",
      options: result_types.map((result_type) => ({
        label: result_type.toUpperCase(),
        value: result_type
      })),
      selectedOption: attrs.result_type,
      onChange: updateAttr("result_type"),
      orientation: "horiz"
    }
  ), /* @__PURE__ */ React.createElement(
    input_default,
    {
      label: "Assign To",
      name: "assign_to",
      defaultValue: attrs.result_variable,
      onChange: updateAttr("result_variable"),
      orientation: "horiz"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "flex gap-x-5 p-3" }, attrs.connection && /* @__PURE__ */ React.createElement(
    search_select_default,
    {
      className: "max-w-full",
      name: "gvk",
      label: "Resource Kind",
      onSearch: updateAttr("search_term"),
      searchTerm: attrs.search_term,
      resultItemsKeyField: "index",
      resultItems: attrs.search_result_items,
      onSelect: updateAttr("gvk"),
      itemRenderer: (item) => /* @__PURE__ */ React.createElement(gvk_option_default, { gvk: item }),
      selectedValue: attrs.gvk?.kind,
      placeholder: "apps/v1 Deployment"
    }
  ), attrs.namespaces && /* @__PURE__ */ React.createElement(
    select_default,
    {
      name: "namespace",
      label: "Namespace",
      options: attrs.namespaces.map((ns) => ({
        label: ns,
        value: ns
      })),
      selectedOption: attrs.namespace,
      onChange: updateAttr("namespace")
    }
  ), attrs.resources && /* @__PURE__ */ React.createElement(
    select_default,
    {
      name: "resource",
      label: "Resource Name",
      options: attrs.resources.map((ns) => ({
        label: ns,
        value: ns
      })),
      selectedOption: attrs.resource,
      onChange: updateAttr("resource")
    }
  ))));
};
var app_default = App;

// assets/get_cell/main.tsx
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9lcnJvci50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC91dGlscy50cyIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2F0dHJfc3RhdGUudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvY29ubl9ub3RpY2UudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9pbnB1dC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9mb3JtL3NlYXJjaF9zZWxlY3QudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9zZWxlY3QudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZ3ZrX29wdGlvbi50c3giLCAiLi4vLi4vLi4vYXNzZXRzL2dldF9jZWxsL2FwcC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL2dldF9jZWxsL21haW4udHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiFcblx0Q29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG5cdExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG5cdGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cdHZhciBuYXRpdmVDb2RlU3RyaW5nID0gJ1tuYXRpdmUgY29kZV0nO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAmJiAhYXJnLnRvU3RyaW5nLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1tuYXRpdmUgY29kZV0nKSkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwgImludGVyZmFjZSBFcnJvclByb3BzIHtcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5jb25zdCBFcnJvciA9ICh7IG1lc3NhZ2UgfTogRXJyb3JQcm9wcykgPT4gKFxuICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZGFzaGVkIGJvcmRlci1yZWQtNzAwIGJnLXJlZC0xMDAgcC0yXCI+XG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgZmxleC1ub25lIHRleHQtcmVkLTcwMFwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIGQ9XCJNMTIgOXYzLjc1bS05LjMwMyAzLjM3NmMtLjg2NiAxLjUuMjE3IDMuMzc0IDEuOTQ4IDMuMzc0aDE0LjcxYzEuNzMgMCAyLjgxMy0xLjg3NCAxLjk0OC0zLjM3NEwxMy45NDkgMy4zNzhjLS44NjYtMS41LTMuMDMyLTEuNS0zLjg5OCAwTDIuNjk3IDE2LjEyNnpNMTIgMTUuNzVoLjAwN3YuMDA4SDEydi0uMDA4elwiXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1pbnRlciBweC0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1yZWQtNzAwXCI+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvclxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCB7IEF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJ1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSA8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGNhbGxiYWNrOiBULFxuICB0aW1lb3V0OiBudW1iZXIsXG4pOiAoKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHZvaWQpID0+IHtcbiAgbGV0IHRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PlxuXG4gIHJldHVybiAoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2FsbGJhY2soLi4uYXJncylcbiAgICB9LCB0aW1lb3V0KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkUmVhY3QgPSBhc3luYyAoXG4gIGN0eDogS2lub0NvbnRleHQsXG4gIGF0dHJzOiBBdHRyaWJ1dGVzLFxuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGlmIChhdHRycy5taXhfZW52ID09ICdkZXYnKSB7XG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKCdodHRwczovL3VucGtnLmNvbS9yZWFjdEAxOC91bWQvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKVxuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcbiAgICAgICdodHRwczovL3VucGtnLmNvbS9yZWFjdC1kb21AMTguMi4wL3VtZC9yZWFjdC1kb20uZGV2ZWxvcG1lbnQuanMnLFxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE4L3VtZC9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxOC4yLjAvdW1kL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycsXG4gICAgKVxuICB9XG59XG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuXG50eXBlIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPiA9IChcbiAgYXR0ck5hbWU6IHN0cmluZyxcbikgPT4gKEF0dHJWYWx1ZTogQXR0cnNUeXBlW2tleW9mIEF0dHJzVHlwZV0pID0+IHZvaWRcblxuY29uc3QgdXNlQXR0cnNTdGF0ZSA9IDxBdHRyc1R5cGUgZXh0ZW5kcyBvYmplY3Q+KFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBpbml0aWFsQXR0cnM6IEF0dHJzVHlwZSxcbik6IFtBdHRyc1R5cGUsIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPl0gPT4ge1xuICBjb25zdCBbYXR0cnMsIHNldEF0dHJzXSA9IFJlYWN0LnVzZVN0YXRlPEF0dHJzVHlwZT4oaW5pdGlhbEF0dHJzKVxuICBjb25zdCB1cGRhdGVBdHRyOiBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoYXR0ck5hbWUpID0+IChhdHRyVmFsdWUpID0+IHtcbiAgICBzZXRBdHRycygoYXR0cnMpID0+ICh7IC4uLmF0dHJzLCBbYXR0ck5hbWVdOiBhdHRyVmFsdWUgfSkpXG4gICAgY29uc29sZS5sb2coJ1B1c2hpbmcgJHthdHRyTmFtZX0gdG8gc2VydmVyJywgYXR0clZhbHVlKVxuICAgIGN0eC5wdXNoRXZlbnQoYHVwZGF0ZV8ke2F0dHJOYW1lfWAsIGF0dHJWYWx1ZSlcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY3R4LmhhbmRsZUV2ZW50PEF0dHJzVHlwZT4oJ3VwZGF0ZScsICh1cGRhdGVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQXR0cmlidXRlIHVwZGF0ZSBmcm9tIHNlcnZlcicsIHVwZGF0ZXMpXG4gICAgICBzZXRBdHRycygoYXR0cnMpID0+ICh7XG4gICAgICAgIC4uLk9iamVjdC5hc3NpZ24oYXR0cnMsIHVwZGF0ZXMpLFxuICAgICAgfSkpXG4gICAgfSlcbiAgfSwgW10pXG4gIHJldHVybiBbYXR0cnMsIHVwZGF0ZUF0dHJdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUF0dHJzU3RhdGVcbiIsICJjb25zdCBDb25uTm90aWNlID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTUgcm91bmRlZC1tZCBiZy1ncmF5LTEwMCBwLTQgZm9udC1pbnRlciB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5cbiAgICA8cD5cbiAgICAgIFRvIG1ha2UgcmVxdWVzdHMgdG8gdGhlIEt1YmVybmV0ZXMgY2x1c3RlciwgeW91IG5lZWQgYXQgbGVhc3Qgb25lXG4gICAgICBjb25uZWN0aW9uIHRvIGEgY2x1c3Rlci5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwicHQtMVwiPlxuICAgICAgVG8gY3JlYXRlIGEgY2x1c3RlciBjb25uZWN0aW9uLCB5b3UgY2FuIGFkZCB0aGV7JyAnfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkNsdXN0ZXIgQ29ubmVjdGlvbjwvc3Bhbj4gc21hcnQgY2VsbC5cbiAgICA8L3A+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDb25uTm90aWNlXG4iLCAiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxudHlwZSBJbnB1dFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBkZWZhdWx0VmFsdWU6IHN0cmluZ1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgb3JpZW50YXRpb24/OiAnaG9yaXonIHwgJ3ZlcnQnXG59XG5jb25zdCBJbnB1dDogUmVhY3QuRkM8SW5wdXRQcm9wcz4gPSAoe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgZGVmYXVsdFZhbHVlLFxuICBvbkNoYW5nZSxcbiAgb3JpZW50YXRpb24gPSAndmVydCcsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgJ2ZsZXggZmxleC1yb3cgaXRlbXMtYmFzZWxpbmUnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9e25hbWV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICBibG9jazogb3JpZW50YXRpb24gPT0gJ3ZlcnQnLFxuICAgICAgICAgICAgJ3ByLTEgdXBwZXJjYXNlJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICdtYi0xIHRleHQtc20gZm9udC1tZWRpdW0nLFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICB7ICdibG9jayB3LWZ1bGwnOiBvcmllbnRhdGlvbiA9PSAndmVydCcgfSxcbiAgICAgICAgICAncm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktNTAgcC0xLjUgdGV4dC1zbSBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy1ibHVlLTUwMCcsXG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG4iLCAiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG50eXBlIFNlYXJjaElucHV0UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBzZWxlY3RlZFZhbHVlOiBzdHJpbmdcbiAgc2VhcmNoVGVybTogc3RyaW5nXG4gIG9uU2VhcmNoOiAoc2VhcmNoVGVybTogc3RyaW5nKSA9PiB2b2lkXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG59XG5cbmNvbnN0IFNlYXJjaElucHV0OiBSZWFjdC5GQzxTZWFyY2hJbnB1dFByb3BzPiA9ICh7XG4gIG5hbWUsXG4gIHNlbGVjdGVkVmFsdWUsXG4gIHNlYXJjaFRlcm0sXG4gIG9uU2VhcmNoLFxuICBwbGFjZWhvbGRlcixcbn06IFNlYXJjaElucHV0UHJvcHMpID0+IHtcbiAgY29uc3QgcGVyZm9ybVNlYXJjaCA9IGRlYm91bmNlKChzZWFyY2hUZXJtKSA9PiB7XG4gICAgb25TZWFyY2goc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxuICB9LCAzMDApXG4gIGNvbnN0IFtsb2NhbFNlYXJjaFRlcm0sIHNldExvY2FsU2VhcmNoVGVybV0gPSBSZWFjdC51c2VTdGF0ZShzZWFyY2hUZXJtID8/ICcnKVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNlbGVjdGVkVmFsdWUgJiYgc2V0TG9jYWxTZWFyY2hUZXJtKHNlbGVjdGVkVmFsdWUpXG4gIH0sIFtzZWxlY3RlZFZhbHVlXSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBwbC0zXCI+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD17MS41fVxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnaC01IHctNScsIHtcbiAgICAgICAgICAgICAgJ2JnLWdyZWVuLTIwMCc6IHNlbGVjdGVkVmFsdWUsXG4gICAgICAgICAgICAgICd0ZXh0LWdyZWVuLTgwMCc6IHNlbGVjdGVkVmFsdWUsXG4gICAgICAgICAgICAgICdib3JkZXItZ3JlZW4tODAwJzogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgJ3JvdW5kZWQtbGcnOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlbGVjdGVkVmFsdWUgPyAoXG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBkPVwiTTkgMTIuNzVMMTEuMjUgMTUgMTUgOS43NU0yMSAxMmMwIDEuMjY4LS42MyAyLjM5LTEuNTkzIDMuMDY4YTMuNzQ1IDMuNzQ1IDAgMDEtMS4wNDMgMy4yOTYgMy43NDUgMy43NDUgMCAwMS0zLjI5NiAxLjA0M0EzLjc0NSAzLjc0NSAwIDAxMTIgMjFjLTEuMjY4IDAtMi4zOS0uNjMtMy4wNjgtMS41OTNhMy43NDYgMy43NDYgMCAwMS0zLjI5Ni0xLjA0MyAzLjc0NSAzLjc0NSAwIDAxLTEuMDQzLTMuMjk2QTMuNzQ1IDMuNzQ1IDAgMDEzIDEyYzAtMS4yNjguNjMtMi4zOSAxLjU5My0zLjA2OGEzLjc0NSAzLjc0NSAwIDAxMS4wNDMtMy4yOTYgMy43NDYgMy43NDYgMCAwMTMuMjk2LTEuMDQzQTMuNzQ2IDMuNzQ2IDAgMDExMiAzYzEuMjY4IDAgMi4zOS42MyAzLjA2OCAxLjU5M2EzLjc0NiAzLjc0NiAwIDAxMy4yOTYgMS4wNDMgMy43NDYgMy43NDYgMCAwMTEuMDQzIDMuMjk2QTMuNzQ1IDMuNzQ1IDAgMDEyMSAxMnpcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMjEgMjFsLTUuMTk3LTUuMTk3bTAgMEE3LjUgNy41IDAgMTA1LjE5NiA1LjE5NmE3LjUgNy41IDAgMDAxMC42MDcgMTAuNjA3elwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtsb2NhbFNlYXJjaFRlcm19XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBvbklucHV0PXsoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgIHNldExvY2FsU2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIHBlcmZvcm1TZWFyY2goZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktNTAgcC0yIHBsLTkgdGV4dC1zbSBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy1ibHVlLTUwMFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG50eXBlIFNlYXJjaFJlc3VsdFByb3BzPEl0ZW1UeXBlPiA9IHtcbiAgcmVzdWx0SXRlbXM6IFtJdGVtVHlwZV1cbiAgaXRlbVJlbmRlcmVyOiAoaXRlbTogSXRlbVR5cGUpID0+IFJlYWN0LkpTWC5FbGVtZW50XG4gIG9uU2VsZWN0OiAoaXRlbTogSXRlbVR5cGUpID0+IHZvaWRcbiAgcmVzdWx0SXRlbXNLZXlGaWVsZDoga2V5b2YgSXRlbVR5cGVcbn1cblxuY29uc3QgU2VhcmNoUmVzdWx0ID0gPEl0ZW1UeXBlLD4oe1xuICByZXN1bHRJdGVtcyxcbiAgaXRlbVJlbmRlcmVyLFxuICBvblNlbGVjdCxcbiAgcmVzdWx0SXRlbXNLZXlGaWVsZCxcbn06IFNlYXJjaFJlc3VsdFByb3BzPEl0ZW1UeXBlPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtMzYgb3ZlcmZsb3ctYXV0byByb3VuZGVkLWItbGcgYm9yZGVyLWIgYm9yZGVyLWwgYm9yZGVyLXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctbWF4IG1pbi13LWZ1bGxcIj5cbiAgICAgICAge3Jlc3VsdEl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aXRlbVtyZXN1bHRJdGVtc0tleUZpZWxkXSBhcyBzdHJpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChpdGVtKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iLXNvbGlkIGxhc3Q6Ym9yZGVyLWItbm9uZSBjdXJzb3ItcG9pbnRlciBib3JkZXItYiBib3JkZXItYi1ncmF5LTMwMCBiZy1ncmF5LTUwIHB4LTIgcHktMC41IGhvdmVyOmJnLWJsdWUtNjAwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtUmVuZGVyZXIoaXRlbSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxudHlwZSBTZWFyY2hTZWxlY3RQcm9wcyA9IHsgbGFiZWw6IHN0cmluZzsgY2xhc3NOYW1lOiBzdHJpbmcgfVxuXG5jb25zdCBTZWFyY2hTZWxlY3QgPSA8SXRlbVR5cGUsPih7XG4gIG5hbWUsXG4gIGxhYmVsLFxuICBzZWFyY2hUZXJtLFxuICBvblNlYXJjaCxcbiAgcmVzdWx0SXRlbXMsXG4gIHJlc3VsdEl0ZW1zS2V5RmllbGQsXG4gIGl0ZW1SZW5kZXJlcixcbiAgY2xhc3NOYW1lLFxuICBvblNlbGVjdCxcbiAgc2VsZWN0ZWRWYWx1ZSxcbiAgcGxhY2Vob2xkZXIsXG59OiBTZWFyY2hJbnB1dFByb3BzICYgU2VhcmNoUmVzdWx0UHJvcHM8SXRlbVR5cGU+ICYgU2VhcmNoU2VsZWN0UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtuYW1lfSBjbGFzc05hbWU9XCJtYi0xIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxTZWFyY2hJbnB1dFxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgIHNlYXJjaFRlcm09e3NlYXJjaFRlcm19XG4gICAgICAgIHNlbGVjdGVkVmFsdWU9e3NlbGVjdGVkVmFsdWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIC8+XG4gICAgICB7KHJlc3VsdEl0ZW1zICYmIHJlc3VsdEl0ZW1zLmxlbmd0aCkgPiAwICYmIChcbiAgICAgICAgPFNlYXJjaFJlc3VsdFxuICAgICAgICAgIHJlc3VsdEl0ZW1zPXtyZXN1bHRJdGVtc31cbiAgICAgICAgICBpdGVtUmVuZGVyZXI9e2l0ZW1SZW5kZXJlcn1cbiAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAgICAgcmVzdWx0SXRlbXNLZXlGaWVsZD17cmVzdWx0SXRlbXNLZXlGaWVsZH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoU2VsZWN0XG4iLCAiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxudHlwZSBTZWxlY3RQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgb3B0aW9uczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXVxuICBzZWxlY3RlZE9wdGlvbj86IHN0cmluZ1xuICBvbkNoYW5nZTogKG9wdGlvbjogc3RyaW5nKSA9PiB2b2lkXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBvcmllbnRhdGlvbj86ICdob3JpeicgfCAndmVydCdcbn1cblxuY29uc3QgU2VsZWN0ID0gKHtcbiAgbmFtZSxcbiAgbGFiZWwsXG4gIG9wdGlvbnMsXG4gIHNlbGVjdGVkT3B0aW9uLFxuICBvbkNoYW5nZSxcbiAgY2xhc3NOYW1lID0gJycsXG4gIG9yaWVudGF0aW9uID0gJ3ZlcnQnLFxufTogU2VsZWN0UHJvcHMpID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgIHtcbiAgICAgICAgJ2ZsZXggZmxleC1yb3cgaXRlbXMtYmFzZWxpbmUnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICA+XG4gICAgPGxhYmVsXG4gICAgICBodG1sRm9yPXtuYW1lfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICB7XG4gICAgICAgICAgYmxvY2s6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyxcbiAgICAgICAgICAncHItMSB1cHBlcmNhc2UnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgICB9LFxuICAgICAgICAnbWItMSB0ZXh0LXNtIGZvbnQtbWVkaXVtJyxcbiAgICAgICl9XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvbGFiZWw+XG4gICAgPHNlbGVjdFxuICAgICAgaWQ9e25hbWV9XG4gICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb24gfHwgdW5kZWZpbmVkfVxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlIS50YXJnZXQhLnZhbHVlKX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgeyAnYmxvY2sgdy1mdWxsJzogb3JpZW50YXRpb24gPT0gJ3ZlcnQnIH0sXG4gICAgICAgICcgYmctY2FyZXQtZG93biBhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktNTAgYmctW2xlbmd0aDoxMHB4XSBiZy1bY2VudGVyX3JpZ2h0XzEwcHhdIGJnLW5vLXJlcGVhdCBwLTIgcHItNSB0ZXh0LXNtIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLWJsdWUtNTAwJyxcbiAgICAgICl9XG4gICAgPlxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XG4gICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApKX1cbiAgICA8L3NlbGVjdD5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFxuIiwgImltcG9ydCB7IEdWSyB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBHVktPcHRpb24gPSAoeyBndmsgfTogeyBndms6IEdWSyB9KSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj57Z3ZrLmFwaV92ZXJzaW9ufTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntndmsua2luZH08L2Rpdj5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEdWS09wdGlvblxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCB1c2VBdHRyc1N0YXRlIGZyb20gJy4uL3NoYXJlZC9hdHRyX3N0YXRlJ1xuaW1wb3J0IENvbm5Ob3RpY2UgZnJvbSAnLi4vc2hhcmVkL2Nvbm5fbm90aWNlJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uL3NoYXJlZC9mb3JtL2lucHV0J1xuaW1wb3J0IFNlYXJjaFNlbGVjdCBmcm9tICcuLi9zaGFyZWQvZm9ybS9zZWFyY2hfc2VsZWN0J1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9zaGFyZWQvZm9ybS9zZWxlY3QnXG5pbXBvcnQgR1ZLT3B0aW9uIGZyb20gJy4uL3NoYXJlZC9ndmtfb3B0aW9uJ1xuaW1wb3J0IHsgR1ZLIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzJ1xuaW1wb3J0IHsgTGlzdENlbGxBdHRycyB9IGZyb20gJy4vdHlwZXMnXG5cbmludGVyZmFjZSBBcHBQcm9wcyB7XG4gIGluaXRpYWxBdHRyczogTGlzdENlbGxBdHRyc1xuICBjdHg6IEtpbm9Db250ZXh0XG59XG5cbmNvbnN0IEFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHsgaW5pdGlhbEF0dHJzLCBjdHggfSkgPT4ge1xuICBjb25zdCBbYXR0cnMsIHVwZGF0ZUF0dHJdID0gdXNlQXR0cnNTdGF0ZShjdHgsIGluaXRpYWxBdHRycylcbiAgY29uc3QgcmVzdWx0X3R5cGVzID0gYXR0cnMucmVzdWx0X3R5cGVzW2F0dHJzLnJlcXVlc3RfdHlwZV1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWF0dHJzLmNvbm5lY3Rpb24gJiYgPENvbm5Ob3RpY2UgLz59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS0zMDAgZm9udC1pbnRlciBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItc29saWQgZmxleCBnYXAteC01IGdhcC15LTMgYm9yZGVyLWIgYm9yZGVyLWItZ3JheS0zMDAgYmctYmx1ZS0xMDAgcC0zXCI+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cImNvbm5lY3Rpb25cIlxuICAgICAgICAgICAgbGFiZWw9XCJDb25uZWN0aW9uXCJcbiAgICAgICAgICAgIG9wdGlvbnM9e2F0dHJzLmNvbm5lY3Rpb25zLm1hcCgoY29ubmVjdGlvbikgPT4gKHtcbiAgICAgICAgICAgICAgbGFiZWw6IGNvbm5lY3Rpb24udmFyaWFibGUsXG4gICAgICAgICAgICAgIHZhbHVlOiBjb25uZWN0aW9uLnZhcmlhYmxlLFxuICAgICAgICAgICAgfSkpfVxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2F0dHJzLmNvbm5lY3Rpb24/LnZhcmlhYmxlPy50b1N0cmluZygpfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ2Nvbm5lY3Rpb24nKX1cbiAgICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cInJlcXVlc3RfdHlwZVwiXG4gICAgICAgICAgICBsYWJlbD1cIlJlcXVlc3QgVHlwZVwiXG4gICAgICAgICAgICBvcHRpb25zPXthdHRycy5yZXF1ZXN0X3R5cGVzLm1hcCgocmVxdWVzdF90eXBlKSA9PiAoe1xuICAgICAgICAgICAgICBsYWJlbDogcmVxdWVzdF90eXBlLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgIHZhbHVlOiByZXF1ZXN0X3R5cGUsXG4gICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnMucmVxdWVzdF90eXBlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ3JlcXVlc3RfdHlwZScpfVxuICAgICAgICAgICAgb3JpZW50YXRpb249XCJob3JpelwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7cmVzdWx0X3R5cGVzICYmIChcbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT1cInJlc3VsdF90eXBlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJSZXN1bHQgVHlwZVwiXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3Jlc3VsdF90eXBlcy5tYXAoKHJlc3VsdF90eXBlKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiByZXN1bHRfdHlwZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHRfdHlwZSxcbiAgICAgICAgICAgICAgfSkpfVxuICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnMucmVzdWx0X3R5cGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBdHRyKCdyZXN1bHRfdHlwZScpfVxuICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiQXNzaWduIFRvXCJcbiAgICAgICAgICAgIG5hbWU9XCJhc3NpZ25fdG9cIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthdHRycy5yZXN1bHRfdmFyaWFibGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cigncmVzdWx0X3ZhcmlhYmxlJyl9XG4gICAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTUgcC0zXCI+XG4gICAgICAgICAge2F0dHJzLmNvbm5lY3Rpb24gJiYgKFxuICAgICAgICAgICAgPFNlYXJjaFNlbGVjdDxHVks+XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LWZ1bGxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZ3ZrXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJSZXNvdXJjZSBLaW5kXCJcbiAgICAgICAgICAgICAgb25TZWFyY2g9e3VwZGF0ZUF0dHIoJ3NlYXJjaF90ZXJtJyl9XG4gICAgICAgICAgICAgIHNlYXJjaFRlcm09e2F0dHJzLnNlYXJjaF90ZXJtfVxuICAgICAgICAgICAgICByZXN1bHRJdGVtc0tleUZpZWxkPXsnaW5kZXgnfVxuICAgICAgICAgICAgICByZXN1bHRJdGVtcz17YXR0cnMuc2VhcmNoX3Jlc3VsdF9pdGVtc31cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3VwZGF0ZUF0dHIoJ2d2aycpfVxuICAgICAgICAgICAgICBpdGVtUmVuZGVyZXI9eyhpdGVtOiBHVkspID0+IDxHVktPcHRpb24gZ3ZrPXtpdGVtfSAvPn1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZT17YXR0cnMuZ3ZrPy5raW5kfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImFwcHMvdjEgRGVwbG95bWVudFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2F0dHJzLm5hbWVzcGFjZXMgJiYgKFxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBuYW1lPVwibmFtZXNwYWNlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lc3BhY2VcIlxuICAgICAgICAgICAgICBvcHRpb25zPXthdHRycy5uYW1lc3BhY2VzLm1hcCgobnMpID0+ICh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IG5zLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBucyxcbiAgICAgICAgICAgICAgfSkpfVxuICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnMubmFtZXNwYWNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cignbmFtZXNwYWNlJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2F0dHJzLnJlc291cmNlcyAmJiAoXG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9XCJyZXNvdXJjZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUmVzb3VyY2UgTmFtZVwiXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2F0dHJzLnJlc291cmNlcy5tYXAoKG5zKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBucyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnMsXG4gICAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2F0dHJzLnJlc291cmNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cigncmVzb3VyY2UnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vc2hhcmVkL2Vycm9yJ1xuaW1wb3J0IHsgbG9hZFJlYWN0IH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCdcbmltcG9ydCB7IExpc3RDZWxsQXR0cnMgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IGFzeW5jIChcbiAgY3R4OiBLaW5vQ29udGV4dCxcbiAgYXR0cnM6IExpc3RDZWxsQXR0cnMsXG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgYXdhaXQgbG9hZFJlYWN0KGN0eCwgYXR0cnMpXG5cbiAgY3R4LnJvb3QuaW5uZXJIVE1MID0gJ2xvYWRpbmcuLi4nXG5cbiAgY3R4LmltcG9ydENTUygnbWFpbi5jc3MnKVxuICBjdHguaW1wb3J0Q1NTKFxuICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXAnLFxuICApXG5cbiAgY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoY3R4LnJvb3QpXG4gIGlmIChhdHRycy5lcnJvcikge1xuICAgIHJldHVybiByb290LnJlbmRlcig8RXJyb3IgbWVzc2FnZT17YXR0cnMuZXJyb3J9IC8+KVxuICB9XG5cbiAgcm9vdC5yZW5kZXIoPEFwcCBpbml0aWFsQXR0cnM9e2F0dHJzfSBjdHg9e2N0eH0gLz4pXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBT0EsS0FBQyxXQUFZO0FBQ1o7QUFFQSxVQUFJLFNBQVMsQ0FBQyxFQUFFO0FBQ2hCLFVBQUksbUJBQW1CO0FBRXZCLGVBQVNBLGNBQWE7QUFDckIsWUFBSSxVQUFVLENBQUM7QUFFZixpQkFBUyxJQUFJLEdBQUcsSUFBSSxVQUFVLFFBQVEsS0FBSztBQUMxQyxjQUFJLE1BQU0sVUFBVSxDQUFDO0FBQ3JCLGNBQUksQ0FBQztBQUFLO0FBRVYsY0FBSSxVQUFVLE9BQU87QUFFckIs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TUFBSztBQUFBLE1BQ0wsY0FBYyxNQUFNO0FBQUEsTUFDcEIsVUFBVSxXQUFXLGlCQUFpQjtBQUFBLE1BQ3RDLGFBQVk7QUFBQTtBQUFBLEVBQ2QsQ0FDRixHQUNBLG9DQUFDLFNBQUksV0FBVSxzQkFDWixNQUFNLGNBQ0w7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLFdBQVU7QUFBQSxNQUNWLE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQSxNQUNOLFVBQVUsV0FBVyxhQUFhO0FBQUEsTUFDbEMsWUFBWSxNQUFNO0FBQUEsTUFDbEIscUJBQXFCO0FBQUEsTUFDckIsYUFBYSxNQUFNO0FBQUEsTUFDbkIsVUFBVSxXQUFXLEtBQUs7QUFBQSxNQUMxQixjQUFjLENBQUMsU0FBYyxvQ0FBQyxzQkFBVSxLQUFLLE1BQU07QUFBQSxNQUNuRCxlQUFlLE1BQU0sS0FBSztBQUFBLE1BQzFCLGFBQVk7QUFBQTtBQUFBLEVBQ2QsR0FFRCxNQUFNLGNBQ0w7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQSxNQUNOLFNBQVMsTUFBTSxXQUFXLElBQUksQ0FBQyxRQUFRO0FBQUEsUUFDckMsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLE1BQ1QsRUFBRTtBQUFBLE1BQ0YsZ0JBQWdCLE1BQU07QUFBQSxNQUN0QixVQUFVLFdBQVcsV0FBVztBQUFBO0FBQUEsRUFDbEMsR0FFRCxNQUFNLGFBQ0w7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQSxNQUNOLFNBQVMsTUFBTSxVQUFVLElBQUksQ0FBQyxRQUFRO0FBQUEsUUFDcEMsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLE1BQ1QsRUFBRTtBQUFBLE1BQ0YsZ0JBQWdCLE1BQU07QUFBQSxNQUN0QixVQUFVLFdBQVcsVUFBVTtBQUFBO0FBQUEsRUFDakMsQ0FFSixDQUNGLENBQ0Y7QUFFSjtBQUVBLElBQU8sY0FBUTs7O0FDM0dSLElBQU0sT0FBTyxPQUNsQixLQUNBLFVBQ2tCO0FBQ2xCLFFBQU0sVUFBVSxLQUFLLEtBQUs7QUFFMUIsTUFBSSxLQUFLLFlBQVk7QUFFckIsTUFBSSxVQUFVLFVBQVU7QUFDeEIsTUFBSTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsUUFBTSxPQUFPLFNBQVMsV0FBVyxJQUFJLElBQUk7QUFDekMsTUFBSSxNQUFNLE9BQU87QUFDZixXQUFPLEtBQUssT0FBTyxvQ0FBQyxpQkFBTSxTQUFTLE1BQU0sT0FBTyxDQUFFO0FBQUEsRUFDcEQ7QUFFQSxPQUFLLE9BQU8sb0NBQUMsZUFBSSxjQUFjLE9BQU8sS0FBVSxDQUFFO0FBQ3BEOyIsCiAgIm5hbWVzIjogWyJjbGFzc05hbWVzIiwgIkVycm9yIiwgImF0dHJzIiwgImNsYXNzTmFtZXMiLCAiaW1wb3J0X2NsYXNzbmFtZXMiLCAic2VhcmNoVGVybSIsICJjbGFzc05hbWVzIiwgImltcG9ydF9jbGFzc25hbWVzIiwgImNsYXNzTmFtZXMiXQp9Cg==
