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

// assets/watch_cell/app.tsx
var App = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = attr_state_default(ctx, initialAttrs);
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
    input_default,
    {
      label: "Assign To",
      name: "assign_to",
      defaultValue: attrs["result_variable"],
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
      searchTerm: attrs["search_term"],
      resultItemsKeyField: "index",
      resultItems: attrs["search_result_items"],
      onSelect: updateAttr("gvk"),
      itemRenderer: (item) => /* @__PURE__ */ React.createElement(gvk_option_default, { gvk: item }),
      selectedValue: attrs["gvk"]?.kind,
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
      selectedOption: attrs["namespace"],
      onChange: updateAttr("namespace")
    }
  ))));
};
var app_default = App;

// assets/watch_cell/main.tsx
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9lcnJvci50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC91dGlscy50cyIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2F0dHJfc3RhdGUudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvY29ubl9ub3RpY2UudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9pbnB1dC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9mb3JtL3NlYXJjaF9zZWxlY3QudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9zZWxlY3QudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZ3ZrX29wdGlvbi50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3dhdGNoX2NlbGwvYXBwLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvd2F0Y2hfY2VsbC9tYWluLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohXG5cdENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuXHRMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHRodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXHR2YXIgbmF0aXZlQ29kZVN0cmluZyA9ICdbbmF0aXZlIGNvZGVdJztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgIWFyZy50b1N0cmluZy50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsICJpbnRlcmZhY2UgRXJyb3JQcm9wcyB7XG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuY29uc3QgRXJyb3IgPSAoeyBtZXNzYWdlIH06IEVycm9yUHJvcHMpID0+IChcbiAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItcmVkLTcwMCBiZy1yZWQtMTAwIHAtMlwiPlxuICAgICAgPHN2Z1xuICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IGZsZXgtbm9uZSB0ZXh0LXJlZC03MDBcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICBkPVwiTTEyIDl2My43NW0tOS4zMDMgMy4zNzZjLS44NjYgMS41LjIxNyAzLjM3NCAxLjk0OCAzLjM3NGgxNC43MWMxLjczIDAgMi44MTMtMS44NzQgMS45NDgtMy4zNzRMMTMuOTQ5IDMuMzc4Yy0uODY2LTEuNS0zLjAzMi0xLjUtMy44OTggMEwyLjY5NyAxNi4xMjZ6TTEyIDE1Ljc1aC4wMDd2LjAwOEgxMnYtLjAwOHpcIlxuICAgICAgICA+PC9wYXRoPlxuICAgICAgPC9zdmc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtaW50ZXIgcHgtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtcmVkLTcwMFwiPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JcbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5pbXBvcnQgeyBBdHRyaWJ1dGVzIH0gZnJvbSAnLi90eXBlcydcblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBjYWxsYmFjazogVCxcbiAgdGltZW91dDogbnVtYmVyLFxuKTogKCguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB2b2lkKSA9PiB7XG4gIGxldCB0aW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD5cblxuICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpXG4gICAgfSwgdGltZW91dClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZFJlYWN0ID0gYXN5bmMgKFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBhdHRyczogQXR0cmlidXRlcyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoYXR0cnMubWl4X2VudiA9PSAnZGV2Jykge1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUygnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3RAMTgvdW1kL3JlYWN0LmRldmVsb3BtZW50LmpzJylcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICAnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtZG9tQDE4LjIuMC91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyxcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKCdodHRwczovL3VucGtnLmNvbS9yZWFjdEAxOC91bWQvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKVxuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcbiAgICAgICdodHRwczovL3VucGtnLmNvbS9yZWFjdC1kb21AMTguMi4wL3VtZC9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnLFxuICAgIClcbiAgfVxufVxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcblxudHlwZSBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoXG4gIGF0dHJOYW1lOiBzdHJpbmcsXG4pID0+IChBdHRyVmFsdWU6IEF0dHJzVHlwZVtrZXlvZiBBdHRyc1R5cGVdKSA9PiB2b2lkXG5cbmNvbnN0IHVzZUF0dHJzU3RhdGUgPSA8QXR0cnNUeXBlIGV4dGVuZHMgb2JqZWN0PihcbiAgY3R4OiBLaW5vQ29udGV4dCxcbiAgaW5pdGlhbEF0dHJzOiBBdHRyc1R5cGUsXG4pOiBbQXR0cnNUeXBlLCBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT5dID0+IHtcbiAgY29uc3QgW2F0dHJzLCBzZXRBdHRyc10gPSBSZWFjdC51c2VTdGF0ZTxBdHRyc1R5cGU+KGluaXRpYWxBdHRycylcbiAgY29uc3QgdXBkYXRlQXR0cjogVXBkYXRlQXR0ckZ1bjxBdHRyc1R5cGU+ID0gKGF0dHJOYW1lKSA9PiAoYXR0clZhbHVlKSA9PiB7XG4gICAgc2V0QXR0cnMoKGF0dHJzKSA9PiAoeyAuLi5hdHRycywgW2F0dHJOYW1lXTogYXR0clZhbHVlIH0pKVxuICAgIGNvbnNvbGUubG9nKCdQdXNoaW5nICR7YXR0ck5hbWV9IHRvIHNlcnZlcicsIGF0dHJWYWx1ZSlcbiAgICBjdHgucHVzaEV2ZW50KGB1cGRhdGVfJHthdHRyTmFtZX1gLCBhdHRyVmFsdWUpXG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGN0eC5oYW5kbGVFdmVudDxBdHRyc1R5cGU+KCd1cGRhdGUnLCAodXBkYXRlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0F0dHJpYnV0ZSB1cGRhdGUgZnJvbSBzZXJ2ZXInLCB1cGRhdGVzKVxuICAgICAgc2V0QXR0cnMoKGF0dHJzKSA9PiAoe1xuICAgICAgICAuLi5PYmplY3QuYXNzaWduKGF0dHJzLCB1cGRhdGVzKSxcbiAgICAgIH0pKVxuICAgIH0pXG4gIH0sIFtdKVxuICByZXR1cm4gW2F0dHJzLCB1cGRhdGVBdHRyXVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VBdHRyc1N0YXRlXG4iLCAiY29uc3QgQ29ubk5vdGljZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtYi01IHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgcC00IGZvbnQtaW50ZXIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgPHA+XG4gICAgICBUbyBtYWtlIHJlcXVlc3RzIHRvIHRoZSBLdWJlcm5ldGVzIGNsdXN0ZXIsIHlvdSBuZWVkIGF0IGxlYXN0IG9uZVxuICAgICAgY29ubmVjdGlvbiB0byBhIGNsdXN0ZXIuXG4gICAgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cInB0LTFcIj5cbiAgICAgIFRvIGNyZWF0ZSBhIGNsdXN0ZXIgY29ubmVjdGlvbiwgeW91IGNhbiBhZGQgdGhleycgJ31cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5DbHVzdGVyIENvbm5lY3Rpb248L3NwYW4+IHNtYXJ0IGNlbGwuXG4gICAgPC9wPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQ29ubk5vdGljZVxuIiwgImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbnR5cGUgSW5wdXRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlOiBzdHJpbmdcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIG9yaWVudGF0aW9uPzogJ2hvcml6JyB8ICd2ZXJ0J1xufVxuY29uc3QgSW5wdXQ6IFJlYWN0LkZDPElucHV0UHJvcHM+ID0gKHtcbiAgbmFtZSxcbiAgbGFiZWwsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgb25DaGFuZ2UsXG4gIG9yaWVudGF0aW9uID0gJ3ZlcnQnLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgICdmbGV4IGZsZXgtcm93IGl0ZW1zLWJhc2VsaW5lJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXtuYW1lfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmxvY2s6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyxcbiAgICAgICAgICAgICdwci0xIHVwcGVyY2FzZSc6IG9yaWVudGF0aW9uID09ICdob3JpeicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnbWItMSB0ZXh0LXNtIGZvbnQtbWVkaXVtJyxcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgeyAnYmxvY2sgdy1mdWxsJzogb3JpZW50YXRpb24gPT0gJ3ZlcnQnIH0sXG4gICAgICAgICAgJ3JvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTUwIHAtMS41IHRleHQtc20gZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmctYmx1ZS01MDAnLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuIiwgImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuLi91dGlscydcblxudHlwZSBTZWFyY2hJbnB1dFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nXG4gIHNlYXJjaFRlcm06IHN0cmluZ1xuICBvblNlYXJjaDogKHNlYXJjaFRlcm06IHN0cmluZykgPT4gdm9pZFxuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xufVxuXG5jb25zdCBTZWFyY2hJbnB1dDogUmVhY3QuRkM8U2VhcmNoSW5wdXRQcm9wcz4gPSAoe1xuICBuYW1lLFxuICBzZWxlY3RlZFZhbHVlLFxuICBzZWFyY2hUZXJtLFxuICBvblNlYXJjaCxcbiAgcGxhY2Vob2xkZXIsXG59OiBTZWFyY2hJbnB1dFByb3BzKSA9PiB7XG4gIGNvbnN0IHBlcmZvcm1TZWFyY2ggPSBkZWJvdW5jZSgoc2VhcmNoVGVybSkgPT4ge1xuICAgIG9uU2VhcmNoKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbiAgfSwgMzAwKVxuICBjb25zdCBbbG9jYWxTZWFyY2hUZXJtLCBzZXRMb2NhbFNlYXJjaFRlcm1dID0gUmVhY3QudXNlU3RhdGUoc2VhcmNoVGVybSA/PyAnJylcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZWxlY3RlZFZhbHVlICYmIHNldExvY2FsU2VhcmNoVGVybShzZWxlY3RlZFZhbHVlKVxuICB9LCBbc2VsZWN0ZWRWYWx1ZV0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcGwtM1wiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX1cbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2gtNSB3LTUnLCB7XG4gICAgICAgICAgICAgICdiZy1ncmVlbi0yMDAnOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgICAgICAndGV4dC1ncmVlbi04MDAnOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgICAgICAnYm9yZGVyLWdyZWVuLTgwMCc6IHNlbGVjdGVkVmFsdWUsXG4gICAgICAgICAgICAgICdyb3VuZGVkLWxnJzogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RlZFZhbHVlID8gKFxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgZD1cIk05IDEyLjc1TDExLjI1IDE1IDE1IDkuNzVNMjEgMTJjMCAxLjI2OC0uNjMgMi4zOS0xLjU5MyAzLjA2OGEzLjc0NSAzLjc0NSAwIDAxLTEuMDQzIDMuMjk2IDMuNzQ1IDMuNzQ1IDAgMDEtMy4yOTYgMS4wNDNBMy43NDUgMy43NDUgMCAwMTEyIDIxYy0xLjI2OCAwLTIuMzktLjYzLTMuMDY4LTEuNTkzYTMuNzQ2IDMuNzQ2IDAgMDEtMy4yOTYtMS4wNDMgMy43NDUgMy43NDUgMCAwMS0xLjA0My0zLjI5NkEzLjc0NSAzLjc0NSAwIDAxMyAxMmMwLTEuMjY4LjYzLTIuMzkgMS41OTMtMy4wNjhhMy43NDUgMy43NDUgMCAwMTEuMDQzLTMuMjk2IDMuNzQ2IDMuNzQ2IDAgMDEzLjI5Ni0xLjA0M0EzLjc0NiAzLjc0NiAwIDAxMTIgM2MxLjI2OCAwIDIuMzkuNjMgMy4wNjggMS41OTNhMy43NDYgMy43NDYgMCAwMTMuMjk2IDEuMDQzIDMuNzQ2IDMuNzQ2IDAgMDExLjA0MyAzLjI5NkEzLjc0NSAzLjc0NSAwIDAxMjEgMTJ6XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIxIDIxbC01LjE5Ny01LjE5N20wIDBBNy41IDcuNSAwIDEwNS4xOTYgNS4xOTZhNy41IDcuNSAwIDAwMTAuNjA3IDEwLjYwN3pcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17bG9jYWxTZWFyY2hUZXJtfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgb25JbnB1dD17KGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICBzZXRMb2NhbFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICBwZXJmb3JtU2VhcmNoKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTUwIHAtMiBwbC05IHRleHQtc20gZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxudHlwZSBTZWFyY2hSZXN1bHRQcm9wczxJdGVtVHlwZT4gPSB7XG4gIHJlc3VsdEl0ZW1zOiBbSXRlbVR5cGVdXG4gIGl0ZW1SZW5kZXJlcjogKGl0ZW06IEl0ZW1UeXBlKSA9PiBSZWFjdC5KU1guRWxlbWVudFxuICBvblNlbGVjdDogKGl0ZW06IEl0ZW1UeXBlKSA9PiB2b2lkXG4gIHJlc3VsdEl0ZW1zS2V5RmllbGQ6IGtleW9mIEl0ZW1UeXBlXG59XG5cbmNvbnN0IFNlYXJjaFJlc3VsdCA9IDxJdGVtVHlwZSw+KHtcbiAgcmVzdWx0SXRlbXMsXG4gIGl0ZW1SZW5kZXJlcixcbiAgb25TZWxlY3QsXG4gIHJlc3VsdEl0ZW1zS2V5RmllbGQsXG59OiBTZWFyY2hSZXN1bHRQcm9wczxJdGVtVHlwZT4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLTM2IG92ZXJmbG93LWF1dG8gcm91bmRlZC1iLWxnIGJvcmRlci1iIGJvcmRlci1sIGJvcmRlci1yIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LW1heCBtaW4tdy1mdWxsXCI+XG4gICAgICAgIHtyZXN1bHRJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2l0ZW1bcmVzdWx0SXRlbXNLZXlGaWVsZF0gYXMgc3RyaW5nfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QoaXRlbSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYi1zb2xpZCBsYXN0OmJvcmRlci1iLW5vbmUgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLWIgYm9yZGVyLWItZ3JheS0zMDAgYmctZ3JheS01MCBweC0yIHB5LTAuNSBob3ZlcjpiZy1ibHVlLTYwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXRlbVJlbmRlcmVyKGl0ZW0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbnR5cGUgU2VhcmNoU2VsZWN0UHJvcHMgPSB7IGxhYmVsOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nIH1cblxuY29uc3QgU2VhcmNoU2VsZWN0ID0gPEl0ZW1UeXBlLD4oe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgc2VhcmNoVGVybSxcbiAgb25TZWFyY2gsXG4gIHJlc3VsdEl0ZW1zLFxuICByZXN1bHRJdGVtc0tleUZpZWxkLFxuICBpdGVtUmVuZGVyZXIsXG4gIGNsYXNzTmFtZSxcbiAgb25TZWxlY3QsXG4gIHNlbGVjdGVkVmFsdWUsXG4gIHBsYWNlaG9sZGVyLFxufTogU2VhcmNoSW5wdXRQcm9wcyAmIFNlYXJjaFJlc3VsdFByb3BzPEl0ZW1UeXBlPiAmIFNlYXJjaFNlbGVjdFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0gY2xhc3NOYW1lPVwibWItMSBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8U2VhcmNoSW5wdXRcbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxuICAgICAgICBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfVxuICAgICAgICBzZWxlY3RlZFZhbHVlPXtzZWxlY3RlZFZhbHVlfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAvPlxuICAgICAgeyhyZXN1bHRJdGVtcyAmJiByZXN1bHRJdGVtcy5sZW5ndGgpID4gMCAmJiAoXG4gICAgICAgIDxTZWFyY2hSZXN1bHRcbiAgICAgICAgICByZXN1bHRJdGVtcz17cmVzdWx0SXRlbXN9XG4gICAgICAgICAgaXRlbVJlbmRlcmVyPXtpdGVtUmVuZGVyZXJ9XG4gICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgICAgIHJlc3VsdEl0ZW1zS2V5RmllbGQ9e3Jlc3VsdEl0ZW1zS2V5RmllbGR9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFNlbGVjdFxuIiwgImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbnR5cGUgU2VsZWN0UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG9wdGlvbnM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W11cbiAgc2VsZWN0ZWRPcHRpb24/OiBzdHJpbmdcbiAgb25DaGFuZ2U6IChvcHRpb246IHN0cmluZykgPT4gdm9pZFxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgb3JpZW50YXRpb24/OiAnaG9yaXonIHwgJ3ZlcnQnXG59XG5cbmNvbnN0IFNlbGVjdCA9ICh7XG4gIG5hbWUsXG4gIGxhYmVsLFxuICBvcHRpb25zLFxuICBzZWxlY3RlZE9wdGlvbixcbiAgb25DaGFuZ2UsXG4gIGNsYXNzTmFtZSA9ICcnLFxuICBvcmllbnRhdGlvbiA9ICd2ZXJ0Jyxcbn06IFNlbGVjdFByb3BzKSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICB7XG4gICAgICAgICdmbGV4IGZsZXgtcm93IGl0ZW1zLWJhc2VsaW5lJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgPlxuICAgIDxsYWJlbFxuICAgICAgaHRtbEZvcj17bmFtZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAge1xuICAgICAgICAgIGJsb2NrOiBvcmllbnRhdGlvbiA9PSAndmVydCcsXG4gICAgICAgICAgJ3ByLTEgdXBwZXJjYXNlJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgICAgfSxcbiAgICAgICAgJ21iLTEgdGV4dC1zbSBmb250LW1lZGl1bScsXG4gICAgICApfVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L2xhYmVsPlxuICAgIDxzZWxlY3RcbiAgICAgIGlkPXtuYW1lfVxuICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9uIHx8IHVuZGVmaW5lZH1cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSEudGFyZ2V0IS52YWx1ZSl9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIHsgJ2Jsb2NrIHctZnVsbCc6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyB9LFxuICAgICAgICAnIGJnLWNhcmV0LWRvd24gYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTUwIGJnLVtsZW5ndGg6MTBweF0gYmctW2NlbnRlcl9yaWdodF8xMHB4XSBiZy1uby1yZXBlYXQgcC0yIHByLTUgdGV4dC1zbSBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy1ibHVlLTUwMCcsXG4gICAgICApfVxuICAgID5cbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKSl9XG4gICAgPC9zZWxlY3Q+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcbiIsICJpbXBvcnQgeyBHVksgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgR1ZLT3B0aW9uID0gKHsgZ3ZrIH06IHsgZ3ZrOiBHVksgfSkgPT4gKFxuICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwXCI+e2d2ay5hcGlfdmVyc2lvbn08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj57Z3ZrLmtpbmR9PC9kaXY+XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBHVktPcHRpb25cbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5pbXBvcnQgdXNlQXR0cnNTdGF0ZSBmcm9tICcuLi9zaGFyZWQvYXR0cl9zdGF0ZSdcbmltcG9ydCBDb25uTm90aWNlIGZyb20gJy4uL3NoYXJlZC9jb25uX25vdGljZSdcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9zaGFyZWQvZm9ybS9pbnB1dCdcbmltcG9ydCBTZWFyY2hTZWxlY3QgZnJvbSAnLi4vc2hhcmVkL2Zvcm0vc2VhcmNoX3NlbGVjdCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vc2hhcmVkL2Zvcm0vc2VsZWN0J1xuaW1wb3J0IEdWS09wdGlvbiBmcm9tICcuLi9zaGFyZWQvZ3ZrX29wdGlvbidcbmltcG9ydCB7IEdWSyB9IGZyb20gJy4uL3NoYXJlZC90eXBlcydcbmltcG9ydCB7IFdhdGNoQ2VsbEF0dHJzIH0gZnJvbSAnLi90eXBlcydcblxuaW50ZXJmYWNlIEFwcFByb3BzIHtcbiAgaW5pdGlhbEF0dHJzOiBXYXRjaENlbGxBdHRyc1xuICBjdHg6IEtpbm9Db250ZXh0XG59XG5cbmNvbnN0IEFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHsgaW5pdGlhbEF0dHJzLCBjdHggfSkgPT4ge1xuICBjb25zdCBbYXR0cnMsIHVwZGF0ZUF0dHJdID0gdXNlQXR0cnNTdGF0ZShjdHgsIGluaXRpYWxBdHRycylcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWF0dHJzLmNvbm5lY3Rpb24gJiYgPENvbm5Ob3RpY2UgLz59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS0zMDAgZm9udC1pbnRlciBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItc29saWQgZmxleCBnYXAteC01IGdhcC15LTMgYm9yZGVyLWIgYm9yZGVyLWItZ3JheS0zMDAgYmctYmx1ZS0xMDAgcC0zXCI+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cImNvbm5lY3Rpb25cIlxuICAgICAgICAgICAgbGFiZWw9XCJDb25uZWN0aW9uXCJcbiAgICAgICAgICAgIG9wdGlvbnM9e2F0dHJzLmNvbm5lY3Rpb25zLm1hcCgoY29ubmVjdGlvbikgPT4gKHtcbiAgICAgICAgICAgICAgbGFiZWw6IGNvbm5lY3Rpb24udmFyaWFibGUsXG4gICAgICAgICAgICAgIHZhbHVlOiBjb25uZWN0aW9uLnZhcmlhYmxlLFxuICAgICAgICAgICAgfSkpfVxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2F0dHJzLmNvbm5lY3Rpb24/LnZhcmlhYmxlPy50b1N0cmluZygpfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ2Nvbm5lY3Rpb24nKX1cbiAgICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIkFzc2lnbiBUb1wiXG4gICAgICAgICAgICBuYW1lPVwiYXNzaWduX3RvXCJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YXR0cnNbJ3Jlc3VsdF92YXJpYWJsZSddfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ3Jlc3VsdF92YXJpYWJsZScpfVxuICAgICAgICAgICAgb3JpZW50YXRpb249XCJob3JpelwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAteC01IHAtM1wiPlxuICAgICAgICAgIHthdHRycy5jb25uZWN0aW9uICYmIChcbiAgICAgICAgICAgIDxTZWFyY2hTZWxlY3Q8R1ZLPlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1mdWxsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImd2a1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUmVzb3VyY2UgS2luZFwiXG4gICAgICAgICAgICAgIG9uU2VhcmNoPXt1cGRhdGVBdHRyKCdzZWFyY2hfdGVybScpfVxuICAgICAgICAgICAgICBzZWFyY2hUZXJtPXthdHRyc1snc2VhcmNoX3Rlcm0nXX1cbiAgICAgICAgICAgICAgcmVzdWx0SXRlbXNLZXlGaWVsZD17J2luZGV4J31cbiAgICAgICAgICAgICAgcmVzdWx0SXRlbXM9e2F0dHJzWydzZWFyY2hfcmVzdWx0X2l0ZW1zJ119XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt1cGRhdGVBdHRyKCdndmsnKX1cbiAgICAgICAgICAgICAgaXRlbVJlbmRlcmVyPXsoaXRlbTogR1ZLKSA9PiA8R1ZLT3B0aW9uIGd2az17aXRlbX0gLz59XG4gICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU9e2F0dHJzWydndmsnXT8ua2luZH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhcHBzL3YxIERlcGxveW1lbnRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthdHRycy5uYW1lc3BhY2VzICYmIChcbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVzcGFjZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTmFtZXNwYWNlXCJcbiAgICAgICAgICAgICAgb3B0aW9ucz17YXR0cnMubmFtZXNwYWNlcy5tYXAoKG5zKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBucyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnMsXG4gICAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2F0dHJzWyduYW1lc3BhY2UnXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ25hbWVzcGFjZScpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCBFcnJvciBmcm9tICcuLi9zaGFyZWQvZXJyb3InXG5pbXBvcnQgeyBsb2FkUmVhY3QgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMnXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuaW1wb3J0IHsgV2F0Y2hDZWxsQXR0cnMgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IGFzeW5jIChcbiAgY3R4OiBLaW5vQ29udGV4dCxcbiAgYXR0cnM6IFdhdGNoQ2VsbEF0dHJzLFxuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGF3YWl0IGxvYWRSZWFjdChjdHgsIGF0dHJzKVxuXG4gIGN0eC5yb290LmlubmVySFRNTCA9ICdsb2FkaW5nLi4uJ1xuXG4gIGN0eC5pbXBvcnRDU1MoJ21haW4uY3NzJylcbiAgY3R4LmltcG9ydENTUyhcbiAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyxcbiAgKVxuXG4gIGNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGN0eC5yb290KVxuICBpZiAoYXR0cnMuZXJyb3IpIHtcbiAgICByZXR1cm4gcm9vdC5yZW5kZXIoPEVycm9yIG1lc3NhZ2U9e2F0dHJzLmVycm9yfSAvPilcbiAgfVxuXG4gIHJvb3QucmVuZGVyKDxBcHAgaW5pdGlhbEF0dHJzPXthdHRyc30gY3R4PXtjdHh9IC8+KVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQU9BLEtBQUMsV0FBWTtBQUNaO0FBRUEsVUFBSSxTQUFTLENBQUMsRUFBRTtBQUNoQixVQUFJLG1CQUFtQjtBQUV2QixlQUFTQSxjQUFhO0FBQ3JCLFlBQUksVUFBVSxDQUFDO0FBRWYsaUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUs7QUFDMUMsY0FBSSxNQUFNLFVBQVUsQ0FBQztBQUNyQixjQUFJLENBQUM7QUFBSztBQUVWLGNBQUksVUFBVSxPQUFPO0FBRXJCLGNBQUksWUFBWSxZQUFZLFlBQVksVUFBVTtBQUNqRCxvQkFBUSxLQUFLLEdBQUc7QUFBQSxVQUNqQixXQUFXLE1BQU0sUUFBUSxHQUFHLEdBQUc7QUFDOUIsZ0JBQUksSUFBSSxRQUFRO0FBQ2Ysa0JBQUksUUFBUUEsWUFBVyxNQUFNLE1BQU0sR0FBRztBQUN0QyxrQkFBSSxPQUFPO0FBQ1Ysd0JBQVEsS0FBSyxLQUFLO0FBQUEsY0FDbkI7QUFBQSxZQUNEO0FBQUEsVUFDRCxXQUFXLFlBQVksVUFBVTtBQUNoQyxnQkFBSSxJQUFJLGFBQWEsT0FBTyxVQUFVLFlBQVksQ0FBQyxJQUFJLFNBQVMsU0FBUyxFQUFFLFNBQVMsZUFBZSxHQUFHO0FBQ3JHLHNCQUFRLEtBQUssSUFBSSxTQUFTLENBQUM7QUFDM0I7QUFBQSxZQUNEO0FBRUEscUJBQVMsT0FBTyxLQUFLO0FBQ3BCLGtCQUFJLE9BQU8sS0FBSyxL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TTtBQUFBLE1BQ04sTUFBSztBQUFBLE1BQ0wsY0FBYyxNQUFNLGlCQUFpQjtBQUFBLE1BQ3JDLFVBQVUsV0FBVyxpQkFBaUI7QUFBQSxNQUN0QyxhQUFZO0FBQUE7QUFBQSxFQUNkLENBQ0YsR0FDQSxvQ0FBQyxTQUFJLFdBQVUsc0JBQ1osTUFBTSxjQUNMO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxXQUFVO0FBQUEsTUFDVixNQUFLO0FBQUEsTUFDTCxPQUFNO0FBQUEsTUFDTixVQUFVLFdBQVcsYUFBYTtBQUFBLE1BQ2xDLFlBQVksTUFBTSxhQUFhO0FBQUEsTUFDL0IscUJBQXFCO0FBQUEsTUFDckIsYUFBYSxNQUFNLHFCQUFxQjtBQUFBLE1BQ3hDLFVBQVUsV0FBVyxLQUFLO0FBQUEsTUFDMUIsY0FBYyxDQUFDLFNBQWMsb0NBQUMsc0JBQVUsS0FBSyxNQUFNO0FBQUEsTUFDbkQsZUFBZSxNQUFNLEtBQUssR0FBRztBQUFBLE1BQzdCLGFBQVk7QUFBQTtBQUFBLEVBQ2QsR0FFRCxNQUFNLGNBQ0w7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQSxNQUNOLFNBQVMsTUFBTSxXQUFXLElBQUksQ0FBQyxRQUFRO0FBQUEsUUFDckMsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLE1BQ1QsRUFBRTtBQUFBLE1BQ0YsZ0JBQWdCLE1BQU0sV0FBVztBQUFBLE1BQ2pDLFVBQVUsV0FBVyxXQUFXO0FBQUE7QUFBQSxFQUNsQyxDQUVKLENBQ0YsQ0FDRjtBQUVKO0FBRUEsSUFBTyxjQUFROzs7QUN0RVIsSUFBTSxPQUFPLE9BQ2xCLEtBQ0EsVUFDa0I7QUFDbEIsUUFBTSxVQUFVLEtBQUssS0FBSztBQUUxQixNQUFJLEtBQUssWUFBWTtBQUVyQixNQUFJLFVBQVUsVUFBVTtBQUN4QixNQUFJO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLE9BQU8sU0FBUyxXQUFXLElBQUksSUFBSTtBQUN6QyxNQUFJLE1BQU0sT0FBTztBQUNmLFdBQU8sS0FBSyxPQUFPLG9DQUFDLGlCQUFNLFNBQVMsTUFBTSxPQUFPLENBQUU7QUFBQSxFQUNwRDtBQUVBLE9BQUssT0FBTyxvQ0FBQyxlQUFJLGNBQWMsT0FBTyxLQUFVLENBQUU7QUFDcEQ7IiwKICAibmFtZXMiOiBbImNsYXNzTmFtZXMiLCAiRXJyb3IiLCAiYXR0cnMiLCAiY2xhc3NOYW1lcyIsICJpbXBvcnRfY2xhc3NuYW1lcyIsICJzZWFyY2hUZXJtIiwgImNsYXNzTmFtZXMiLCAiaW1wb3J0X2NsYXNzbmFtZXMiLCAiY2xhc3NOYW1lcyJdCn0K
