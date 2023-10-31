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
    await ctx.importJS(
      "https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.development.js"
    );
    await ctx.importJS(
      "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.development.min.js"
    );
  } else {
    await ctx.importJS(
      "https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.js"
    );
    await ctx.importJS(
      "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9lcnJvci50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC91dGlscy50cyIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2F0dHJfc3RhdGUudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvY29ubl9ub3RpY2UudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9pbnB1dC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9mb3JtL3NlYXJjaF9zZWxlY3QudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9zZWxlY3QudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZ3ZrX29wdGlvbi50c3giLCAiLi4vLi4vLi4vYXNzZXRzL2dldF9jZWxsL2FwcC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL2dldF9jZWxsL21haW4udHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiFcblx0Q29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG5cdExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG5cdGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cdHZhciBuYXRpdmVDb2RlU3RyaW5nID0gJ1tuYXRpdmUgY29kZV0nO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAmJiAhYXJnLnRvU3RyaW5nLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1tuYXRpdmUgY29kZV0nKSkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwgImludGVyZmFjZSBFcnJvclByb3BzIHtcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5jb25zdCBFcnJvciA9ICh7IG1lc3NhZ2UgfTogRXJyb3JQcm9wcykgPT4gKFxuICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZGFzaGVkIGJvcmRlci1yZWQtNzAwIGJnLXJlZC0xMDAgcC0yXCI+XG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgZmxleC1ub25lIHRleHQtcmVkLTcwMFwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIGQ9XCJNMTIgOXYzLjc1bS05LjMwMyAzLjM3NmMtLjg2NiAxLjUuMjE3IDMuMzc0IDEuOTQ4IDMuMzc0aDE0LjcxYzEuNzMgMCAyLjgxMy0xLjg3NCAxLjk0OC0zLjM3NEwxMy45NDkgMy4zNzhjLS44NjYtMS41LTMuMDMyLTEuNS0zLjg5OCAwTDIuNjk3IDE2LjEyNnpNMTIgMTUuNzVoLjAwN3YuMDA4SDEydi0uMDA4elwiXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1pbnRlciBweC0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1yZWQtNzAwXCI+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvclxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCB7IEF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJ1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSA8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGNhbGxiYWNrOiBULFxuICB0aW1lb3V0OiBudW1iZXIsXG4pOiAoKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHZvaWQpID0+IHtcbiAgbGV0IHRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PlxuXG4gIHJldHVybiAoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2FsbGJhY2soLi4uYXJncylcbiAgICB9LCB0aW1lb3V0KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkUmVhY3QgPSBhc3luYyAoXG4gIGN0eDogS2lub0NvbnRleHQsXG4gIGF0dHJzOiBBdHRyaWJ1dGVzLFxuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGlmIChhdHRycy5taXhfZW52ID09ICdkZXYnKSB7XG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LzE4LjIuMC91bWQvcmVhY3QuZGV2ZWxvcG1lbnQuanMnLFxuICAgIClcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QtZG9tLzE4LjIuMC91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50Lm1pbi5qcycsXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcbiAgICAgICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC8xOC4yLjAvdW1kL3JlYWN0LnByb2R1Y3Rpb24uanMnLFxuICAgIClcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QtZG9tLzE4LjIuMC91bWQvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzJyxcbiAgICApXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5cbnR5cGUgVXBkYXRlQXR0ckZ1bjxBdHRyc1R5cGU+ID0gKFxuICBhdHRyTmFtZTogc3RyaW5nLFxuKSA9PiAoQXR0clZhbHVlOiBBdHRyc1R5cGVba2V5b2YgQXR0cnNUeXBlXSkgPT4gdm9pZFxuXG5jb25zdCB1c2VBdHRyc1N0YXRlID0gPEF0dHJzVHlwZSBleHRlbmRzIG9iamVjdD4oXG4gIGN0eDogS2lub0NvbnRleHQsXG4gIGluaXRpYWxBdHRyczogQXR0cnNUeXBlLFxuKTogW0F0dHJzVHlwZSwgVXBkYXRlQXR0ckZ1bjxBdHRyc1R5cGU+XSA9PiB7XG4gIGNvbnN0IFthdHRycywgc2V0QXR0cnNdID0gUmVhY3QudXNlU3RhdGU8QXR0cnNUeXBlPihpbml0aWFsQXR0cnMpXG4gIGNvbnN0IHVwZGF0ZUF0dHI6IFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPiA9IChhdHRyTmFtZSkgPT4gKGF0dHJWYWx1ZSkgPT4ge1xuICAgIHNldEF0dHJzKChhdHRycykgPT4gKHsgLi4uYXR0cnMsIFthdHRyTmFtZV06IGF0dHJWYWx1ZSB9KSlcbiAgICBjb25zb2xlLmxvZygnUHVzaGluZyAke2F0dHJOYW1lfSB0byBzZXJ2ZXInLCBhdHRyVmFsdWUpXG4gICAgY3R4LnB1c2hFdmVudChgdXBkYXRlXyR7YXR0ck5hbWV9YCwgYXR0clZhbHVlKVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjdHguaGFuZGxlRXZlbnQ8QXR0cnNUeXBlPigndXBkYXRlJywgKHVwZGF0ZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRyaWJ1dGUgdXBkYXRlIGZyb20gc2VydmVyJywgdXBkYXRlcylcbiAgICAgIHNldEF0dHJzKChhdHRycykgPT4gKHtcbiAgICAgICAgLi4uT2JqZWN0LmFzc2lnbihhdHRycywgdXBkYXRlcyksXG4gICAgICB9KSlcbiAgICB9KVxuICB9LCBbXSlcbiAgcmV0dXJuIFthdHRycywgdXBkYXRlQXR0cl1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQXR0cnNTdGF0ZVxuIiwgImNvbnN0IENvbm5Ob3RpY2UgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWItNSByb3VuZGVkLW1kIGJnLWdyYXktMTAwIHAtNCBmb250LWludGVyIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPlxuICAgIDxwPlxuICAgICAgVG8gbWFrZSByZXF1ZXN0cyB0byB0aGUgS3ViZXJuZXRlcyBjbHVzdGVyLCB5b3UgbmVlZCBhdCBsZWFzdCBvbmVcbiAgICAgIGNvbm5lY3Rpb24gdG8gYSBjbHVzdGVyLlxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJwdC0xXCI+XG4gICAgICBUbyBjcmVhdGUgYSBjbHVzdGVyIGNvbm5lY3Rpb24sIHlvdSBjYW4gYWRkIHRoZXsnICd9XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+Q2x1c3RlciBDb25uZWN0aW9uPC9zcGFuPiBzbWFydCBjZWxsLlxuICAgIDwvcD5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENvbm5Ob3RpY2VcbiIsICJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG50eXBlIElucHV0UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIGRlZmF1bHRWYWx1ZTogc3RyaW5nXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvcmllbnRhdGlvbj86ICdob3JpeicgfCAndmVydCdcbn1cbmNvbnN0IElucHV0OiBSZWFjdC5GQzxJbnB1dFByb3BzPiA9ICh7XG4gIG5hbWUsXG4gIGxhYmVsLFxuICBkZWZhdWx0VmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBvcmllbnRhdGlvbiA9ICd2ZXJ0Jyxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAnZmxleCBmbGV4LXJvdyBpdGVtcy1iYXNlbGluZSc6IG9yaWVudGF0aW9uID09ICdob3JpeicsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8bGFiZWxcbiAgICAgICAgaHRtbEZvcj17bmFtZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJsb2NrOiBvcmllbnRhdGlvbiA9PSAndmVydCcsXG4gICAgICAgICAgICAncHItMSB1cHBlcmNhc2UnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ21iLTEgdGV4dC1zbSBmb250LW1lZGl1bScsXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHsgJ2Jsb2NrIHctZnVsbCc6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyB9LFxuICAgICAgICAgICdyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS01MCBwLTEuNSB0ZXh0LXNtIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLWJsdWUtNTAwJyxcbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcbiIsICJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbnR5cGUgU2VhcmNoSW5wdXRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHNlbGVjdGVkVmFsdWU6IHN0cmluZ1xuICBzZWFyY2hUZXJtOiBzdHJpbmdcbiAgb25TZWFyY2g6IChzZWFyY2hUZXJtOiBzdHJpbmcpID0+IHZvaWRcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbn1cblxuY29uc3QgU2VhcmNoSW5wdXQ6IFJlYWN0LkZDPFNlYXJjaElucHV0UHJvcHM+ID0gKHtcbiAgbmFtZSxcbiAgc2VsZWN0ZWRWYWx1ZSxcbiAgc2VhcmNoVGVybSxcbiAgb25TZWFyY2gsXG4gIHBsYWNlaG9sZGVyLFxufTogU2VhcmNoSW5wdXRQcm9wcykgPT4ge1xuICBjb25zdCBwZXJmb3JtU2VhcmNoID0gZGVib3VuY2UoKHNlYXJjaFRlcm0pID0+IHtcbiAgICBvblNlYXJjaChzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gIH0sIDMwMClcbiAgY29uc3QgW2xvY2FsU2VhcmNoVGVybSwgc2V0TG9jYWxTZWFyY2hUZXJtXSA9IFJlYWN0LnVzZVN0YXRlKHNlYXJjaFRlcm0gPz8gJycpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2VsZWN0ZWRWYWx1ZSAmJiBzZXRMb2NhbFNlYXJjaFRlcm0oc2VsZWN0ZWRWYWx1ZSlcbiAgfSwgW3NlbGVjdGVkVmFsdWVdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHBsLTNcIj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxLjV9XG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdoLTUgdy01Jywge1xuICAgICAgICAgICAgICAnYmctZ3JlZW4tMjAwJzogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgJ3RleHQtZ3JlZW4tODAwJzogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgJ2JvcmRlci1ncmVlbi04MDAnOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgICAgICAncm91bmRlZC1sZyc6IHNlbGVjdGVkVmFsdWUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VsZWN0ZWRWYWx1ZSA/IChcbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNOSAxMi43NUwxMS4yNSAxNSAxNSA5Ljc1TTIxIDEyYzAgMS4yNjgtLjYzIDIuMzktMS41OTMgMy4wNjhhMy43NDUgMy43NDUgMCAwMS0xLjA0MyAzLjI5NiAzLjc0NSAzLjc0NSAwIDAxLTMuMjk2IDEuMDQzQTMuNzQ1IDMuNzQ1IDAgMDExMiAyMWMtMS4yNjggMC0yLjM5LS42My0zLjA2OC0xLjU5M2EzLjc0NiAzLjc0NiAwIDAxLTMuMjk2LTEuMDQzIDMuNzQ1IDMuNzQ1IDAgMDEtMS4wNDMtMy4yOTZBMy43NDUgMy43NDUgMCAwMTMgMTJjMC0xLjI2OC42My0yLjM5IDEuNTkzLTMuMDY4YTMuNzQ1IDMuNzQ1IDAgMDExLjA0My0zLjI5NiAzLjc0NiAzLjc0NiAwIDAxMy4yOTYtMS4wNDNBMy43NDYgMy43NDYgMCAwMTEyIDNjMS4yNjggMCAyLjM5LjYzIDMuMDY4IDEuNTkzYTMuNzQ2IDMuNzQ2IDAgMDEzLjI5NiAxLjA0MyAzLjc0NiAzLjc0NiAwIDAxMS4wNDMgMy4yOTZBMy43NDUgMy43NDUgMCAwMTIxIDEyelwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0yMSAyMWwtNS4xOTctNS4xOTdtMCAwQTcuNSA3LjUgMCAxMDUuMTk2IDUuMTk2YTcuNSA3LjUgMCAwMDEwLjYwNyAxMC42MDd6XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e2xvY2FsU2VhcmNoVGVybX1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIG9uSW5wdXQ9eyhlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgc2V0TG9jYWxTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgcGVyZm9ybVNlYXJjaChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS01MCBwLTIgcGwtOSB0ZXh0LXNtIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLWJsdWUtNTAwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbnR5cGUgU2VhcmNoUmVzdWx0UHJvcHM8SXRlbVR5cGU+ID0ge1xuICByZXN1bHRJdGVtczogW0l0ZW1UeXBlXVxuICBpdGVtUmVuZGVyZXI6IChpdGVtOiBJdGVtVHlwZSkgPT4gUmVhY3QuSlNYLkVsZW1lbnRcbiAgb25TZWxlY3Q6IChpdGVtOiBJdGVtVHlwZSkgPT4gdm9pZFxuICByZXN1bHRJdGVtc0tleUZpZWxkOiBrZXlvZiBJdGVtVHlwZVxufVxuXG5jb25zdCBTZWFyY2hSZXN1bHQgPSA8SXRlbVR5cGUsPih7XG4gIHJlc3VsdEl0ZW1zLFxuICBpdGVtUmVuZGVyZXIsXG4gIG9uU2VsZWN0LFxuICByZXN1bHRJdGVtc0tleUZpZWxkLFxufTogU2VhcmNoUmVzdWx0UHJvcHM8SXRlbVR5cGU+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC0zNiBvdmVyZmxvdy1hdXRvIHJvdW5kZWQtYi1sZyBib3JkZXItYiBib3JkZXItbCBib3JkZXItciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1tYXggbWluLXctZnVsbFwiPlxuICAgICAgICB7cmVzdWx0SXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpdGVtW3Jlc3VsdEl0ZW1zS2V5RmllbGRdIGFzIHN0cmluZ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KGl0ZW0pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWItc29saWQgbGFzdDpib3JkZXItYi1ub25lIGN1cnNvci1wb2ludGVyIGJvcmRlci1iIGJvcmRlci1iLWdyYXktMzAwIGJnLWdyYXktNTAgcHgtMiBweS0wLjUgaG92ZXI6YmctYmx1ZS02MDAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2l0ZW1SZW5kZXJlcihpdGVtKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG50eXBlIFNlYXJjaFNlbGVjdFByb3BzID0geyBsYWJlbDogc3RyaW5nOyBjbGFzc05hbWU6IHN0cmluZyB9XG5cbmNvbnN0IFNlYXJjaFNlbGVjdCA9IDxJdGVtVHlwZSw+KHtcbiAgbmFtZSxcbiAgbGFiZWwsXG4gIHNlYXJjaFRlcm0sXG4gIG9uU2VhcmNoLFxuICByZXN1bHRJdGVtcyxcbiAgcmVzdWx0SXRlbXNLZXlGaWVsZCxcbiAgaXRlbVJlbmRlcmVyLFxuICBjbGFzc05hbWUsXG4gIG9uU2VsZWN0LFxuICBzZWxlY3RlZFZhbHVlLFxuICBwbGFjZWhvbGRlcixcbn06IFNlYXJjaElucHV0UHJvcHMgJiBTZWFyY2hSZXN1bHRQcm9wczxJdGVtVHlwZT4gJiBTZWFyY2hTZWxlY3RQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9IGNsYXNzTmFtZT1cIm1iLTEgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgICAgc2VhcmNoVGVybT17c2VhcmNoVGVybX1cbiAgICAgICAgc2VsZWN0ZWRWYWx1ZT17c2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgLz5cbiAgICAgIHsocmVzdWx0SXRlbXMgJiYgcmVzdWx0SXRlbXMubGVuZ3RoKSA+IDAgJiYgKFxuICAgICAgICA8U2VhcmNoUmVzdWx0XG4gICAgICAgICAgcmVzdWx0SXRlbXM9e3Jlc3VsdEl0ZW1zfVxuICAgICAgICAgIGl0ZW1SZW5kZXJlcj17aXRlbVJlbmRlcmVyfVxuICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgICByZXN1bHRJdGVtc0tleUZpZWxkPXtyZXN1bHRJdGVtc0tleUZpZWxkfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hTZWxlY3RcbiIsICJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG50eXBlIFNlbGVjdFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBvcHRpb25zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdXG4gIHNlbGVjdGVkT3B0aW9uPzogc3RyaW5nXG4gIG9uQ2hhbmdlOiAob3B0aW9uOiBzdHJpbmcpID0+IHZvaWRcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIG9yaWVudGF0aW9uPzogJ2hvcml6JyB8ICd2ZXJ0J1xufVxuXG5jb25zdCBTZWxlY3QgPSAoe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgb3B0aW9ucyxcbiAgc2VsZWN0ZWRPcHRpb24sXG4gIG9uQ2hhbmdlLFxuICBjbGFzc05hbWUgPSAnJyxcbiAgb3JpZW50YXRpb24gPSAndmVydCcsXG59OiBTZWxlY3RQcm9wcykgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAge1xuICAgICAgICAnZmxleCBmbGV4LXJvdyBpdGVtcy1iYXNlbGluZSc6IG9yaWVudGF0aW9uID09ICdob3JpeicsXG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gID5cbiAgICA8bGFiZWxcbiAgICAgIGh0bWxGb3I9e25hbWV9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIHtcbiAgICAgICAgICBibG9jazogb3JpZW50YXRpb24gPT0gJ3ZlcnQnLFxuICAgICAgICAgICdwci0xIHVwcGVyY2FzZSc6IG9yaWVudGF0aW9uID09ICdob3JpeicsXG4gICAgICAgIH0sXG4gICAgICAgICdtYi0xIHRleHQtc20gZm9udC1tZWRpdW0nLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9sYWJlbD5cbiAgICA8c2VsZWN0XG4gICAgICBpZD17bmFtZX1cbiAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbiB8fCB1bmRlZmluZWR9XG4gICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUhLnRhcmdldCEudmFsdWUpfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICB7ICdibG9jayB3LWZ1bGwnOiBvcmllbnRhdGlvbiA9PSAndmVydCcgfSxcbiAgICAgICAgJyBiZy1jYXJldC1kb3duIGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS01MCBiZy1bbGVuZ3RoOjEwcHhdIGJnLVtjZW50ZXJfcmlnaHRfMTBweF0gYmctbm8tcmVwZWF0IHAtMiBwci01IHRleHQtc20gZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmctYmx1ZS01MDAnLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cbiAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICkpfVxuICAgIDwvc2VsZWN0PlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0XG4iLCAiaW1wb3J0IHsgR1ZLIH0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IEdWS09wdGlvbiA9ICh7IGd2ayB9OiB7IGd2azogR1ZLIH0pID0+IChcbiAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMFwiPntndmsuYXBpX3ZlcnNpb259PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e2d2ay5raW5kfTwvZGl2PlxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgR1ZLT3B0aW9uXG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuaW1wb3J0IHVzZUF0dHJzU3RhdGUgZnJvbSAnLi4vc2hhcmVkL2F0dHJfc3RhdGUnXG5pbXBvcnQgQ29ubk5vdGljZSBmcm9tICcuLi9zaGFyZWQvY29ubl9ub3RpY2UnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vc2hhcmVkL2Zvcm0vaW5wdXQnXG5pbXBvcnQgU2VhcmNoU2VsZWN0IGZyb20gJy4uL3NoYXJlZC9mb3JtL3NlYXJjaF9zZWxlY3QnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL3NoYXJlZC9mb3JtL3NlbGVjdCdcbmltcG9ydCBHVktPcHRpb24gZnJvbSAnLi4vc2hhcmVkL2d2a19vcHRpb24nXG5pbXBvcnQgeyBHVksgfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMnXG5pbXBvcnQgeyBMaXN0Q2VsbEF0dHJzIH0gZnJvbSAnLi90eXBlcydcblxuaW50ZXJmYWNlIEFwcFByb3BzIHtcbiAgaW5pdGlhbEF0dHJzOiBMaXN0Q2VsbEF0dHJzXG4gIGN0eDogS2lub0NvbnRleHRcbn1cblxuY29uc3QgQXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBpbml0aWFsQXR0cnMsIGN0eCB9KSA9PiB7XG4gIGNvbnN0IFthdHRycywgdXBkYXRlQXR0cl0gPSB1c2VBdHRyc1N0YXRlKGN0eCwgaW5pdGlhbEF0dHJzKVxuICBjb25zdCByZXN1bHRfdHlwZXMgPSBhdHRycy5yZXN1bHRfdHlwZXNbYXR0cnMucmVxdWVzdF90eXBlXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshYXR0cnMuY29ubmVjdGlvbiAmJiA8Q29ubk5vdGljZSAvPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMCBmb250LWludGVyIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYi1zb2xpZCBmbGV4IGdhcC14LTUgZ2FwLXktMyBib3JkZXItYiBib3JkZXItYi1ncmF5LTMwMCBiZy1ibHVlLTEwMCBwLTNcIj5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwiY29ubmVjdGlvblwiXG4gICAgICAgICAgICBsYWJlbD1cIkNvbm5lY3Rpb25cIlxuICAgICAgICAgICAgb3B0aW9ucz17YXR0cnMuY29ubmVjdGlvbnMubWFwKChjb25uZWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgICBsYWJlbDogY29ubmVjdGlvbi52YXJpYWJsZSxcbiAgICAgICAgICAgICAgdmFsdWU6IGNvbm5lY3Rpb24udmFyaWFibGUsXG4gICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnMuY29ubmVjdGlvbj8udmFyaWFibGU/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cignY29ubmVjdGlvbicpfVxuICAgICAgICAgICAgb3JpZW50YXRpb249XCJob3JpelwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwicmVxdWVzdF90eXBlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUmVxdWVzdCBUeXBlXCJcbiAgICAgICAgICAgIG9wdGlvbnM9e2F0dHJzLnJlcXVlc3RfdHlwZXMubWFwKChyZXF1ZXN0X3R5cGUpID0+ICh7XG4gICAgICAgICAgICAgIGxhYmVsOiByZXF1ZXN0X3R5cGUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgdmFsdWU6IHJlcXVlc3RfdHlwZSxcbiAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXthdHRycy5yZXF1ZXN0X3R5cGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cigncmVxdWVzdF90eXBlJyl9XG4gICAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHtyZXN1bHRfdHlwZXMgJiYgKFxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBuYW1lPVwicmVzdWx0X3R5cGVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlJlc3VsdCBUeXBlXCJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmVzdWx0X3R5cGVzLm1hcCgocmVzdWx0X3R5cGUpID0+ICh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHJlc3VsdF90eXBlLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdF90eXBlLFxuICAgICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXthdHRycy5yZXN1bHRfdHlwZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ3Jlc3VsdF90eXBlJyl9XG4gICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJBc3NpZ24gVG9cIlxuICAgICAgICAgICAgbmFtZT1cImFzc2lnbl90b1wiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2F0dHJzLnJlc3VsdF92YXJpYWJsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBdHRyKCdyZXN1bHRfdmFyaWFibGUnKX1cbiAgICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtNSBwLTNcIj5cbiAgICAgICAgICB7YXR0cnMuY29ubmVjdGlvbiAmJiAoXG4gICAgICAgICAgICA8U2VhcmNoU2VsZWN0PEdWSz5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctZnVsbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJndmtcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlJlc291cmNlIEtpbmRcIlxuICAgICAgICAgICAgICBvblNlYXJjaD17dXBkYXRlQXR0cignc2VhcmNoX3Rlcm0nKX1cbiAgICAgICAgICAgICAgc2VhcmNoVGVybT17YXR0cnMuc2VhcmNoX3Rlcm19XG4gICAgICAgICAgICAgIHJlc3VsdEl0ZW1zS2V5RmllbGQ9eydpbmRleCd9XG4gICAgICAgICAgICAgIHJlc3VsdEl0ZW1zPXthdHRycy5zZWFyY2hfcmVzdWx0X2l0ZW1zfVxuICAgICAgICAgICAgICBvblNlbGVjdD17dXBkYXRlQXR0cignZ3ZrJyl9XG4gICAgICAgICAgICAgIGl0ZW1SZW5kZXJlcj17KGl0ZW06IEdWSykgPT4gPEdWS09wdGlvbiBndms9e2l0ZW19IC8+fVxuICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlPXthdHRycy5ndms/LmtpbmR9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYXBwcy92MSBEZXBsb3ltZW50XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YXR0cnMubmFtZXNwYWNlcyAmJiAoXG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lc3BhY2VcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVzcGFjZVwiXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2F0dHJzLm5hbWVzcGFjZXMubWFwKChucykgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogbnMsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG5zLFxuICAgICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXthdHRycy5uYW1lc3BhY2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBdHRyKCduYW1lc3BhY2UnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YXR0cnMucmVzb3VyY2VzICYmIChcbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT1cInJlc291cmNlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJSZXNvdXJjZSBOYW1lXCJcbiAgICAgICAgICAgICAgb3B0aW9ucz17YXR0cnMucmVzb3VyY2VzLm1hcCgobnMpID0+ICh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IG5zLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBucyxcbiAgICAgICAgICAgICAgfSkpfVxuICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnMucmVzb3VyY2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBdHRyKCdyZXNvdXJjZScpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCBFcnJvciBmcm9tICcuLi9zaGFyZWQvZXJyb3InXG5pbXBvcnQgeyBsb2FkUmVhY3QgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMnXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuaW1wb3J0IHsgTGlzdENlbGxBdHRycyB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBpbml0ID0gYXN5bmMgKFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBhdHRyczogTGlzdENlbGxBdHRycyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBhd2FpdCBsb2FkUmVhY3QoY3R4LCBhdHRycylcblxuICBjdHgucm9vdC5pbm5lckhUTUwgPSAnbG9hZGluZy4uLidcblxuICBjdHguaW1wb3J0Q1NTKCdtYWluLmNzcycpXG4gIGN0eC5pbXBvcnRDU1MoXG4gICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCcsXG4gIClcblxuICBjb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChjdHgucm9vdClcbiAgaWYgKGF0dHJzLmVycm9yKSB7XG4gICAgcmV0dXJuIHJvb3QucmVuZGVyKDxFcnJvciBtZXNzYWdlPXthdHRycy5lcnJvcn0gLz4pXG4gIH1cblxuICByb290LnJlbmRlcig8QXBwIGluaXRpYWxBdHRycz17YXR0cnN9IGN0eD17Y3R4fSAvPilcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFPQSxLQUFDLFdBQVk7QUFDWjtBQUVBLFVBQUksU0FBUyxDQUFDLEVBQUU7QUFDaEIsVUFBSSxtQkFBbUI7QUFFdkIsZUFBU0EsY0FBYTtBQUNyQixZQUFJLFVB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QUNGLGdCQUFnQixNQUFNO0FBQUEsTUFDdEIsVUFBVSxXQUFXLFVBQVU7QUFBQTtBQUFBLEVBQ2pDLENBRUosQ0FDRixDQUNGO0FBRUo7QUFFQSxJQUFPLGNBQVE7OztBQzNHUixJQUFNLE9BQU8sT0FDbEIsS0FDQSxVQUNrQjtBQUNsQixRQUFNLFVBQVUsS0FBSyxLQUFLO0FBRTFCLE1BQUksS0FBSyxZQUFZO0FBRXJCLE1BQUksVUFBVSxVQUFVO0FBQ3hCLE1BQUk7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLFFBQU0sT0FBTyxTQUFTLFdBQVcsSUFBSSxJQUFJO0FBQ3pDLE1BQUksTUFBTSxPQUFPO0FBQ2YsV0FBTyxLQUFLLE9BQU8sb0NBQUMsaUJBQU0sU0FBUyxNQUFNLE9BQU8sQ0FBRTtBQUFBLEVBQ3BEO0FBRUEsT0FBSyxPQUFPLG9DQUFDLGVBQUksY0FBYyxPQUFPLEtBQVUsQ0FBRTtBQUNwRDsiLAogICJuYW1lcyI6IFsiY2xhc3NOYW1lcyIsICJFcnJvciIsICJhdHRycyIsICJjbGFzc05hbWVzIiwgImltcG9ydF9jbGFzc25hbWVzIiwgInNlYXJjaFRlcm0iLCAiY2xhc3NOYW1lcyIsICJpbXBvcnRfY2xhc3NuYW1lcyIsICJjbGFzc05hbWVzIl0KfQo=
