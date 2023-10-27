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
      value: selectedOption,
      onChange: (e) => onChange(e.target.value),
      className: (0, import_classnames3.default)(
        { "block w-full": orientation == "vert" },
        " appearance-none rounded-lg border border-gray-300 bg-gray-50 bg-caret-down bg-[length:10px] bg-[center_right_10px] bg-no-repeat p-2 pr-5 text-sm focus:border-blue-500 focus:ring-blue-500"
      )
    },
    options.map((option) => /* @__PURE__ */ React.createElement("option", { key: option.value, value: option.value }, option.label))
  )
);
var select_default = Select;

// assets/shared/gvk_option.tsx
var GVKOption = ({ gvk }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-gray-400" }, gvk.api_version), /* @__PURE__ */ React.createElement("div", { className: "text-sm" }, gvk.kind));
var gvk_option_default = GVKOption;

// assets/list_cell/app.tsx
var App = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = attr_state_default(ctx, initialAttrs);
  return /* @__PURE__ */ React.createElement("div", { className: "rounded-md border border-solid border-gray-300 font-inter font-medium text-gray-600" }, /* @__PURE__ */ React.createElement("div", { className: "border-b-solid flex gap-x-5 gap-y-3 border-b border-b-gray-300 bg-blue-100 p-3" }, /* @__PURE__ */ React.createElement(
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
      name: "result_type",
      label: "Result Type",
      options: attrs.result_types.map((result_type) => ({
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
  )));
};
var app_default = App;

// assets/list_cell/main.tsx
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9lcnJvci50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC91dGlscy50cyIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2F0dHJfc3RhdGUudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9pbnB1dC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9mb3JtL3NlYXJjaF9zZWxlY3QudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9zZWxlY3QudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZ3ZrX29wdGlvbi50c3giLCAiLi4vLi4vLi4vYXNzZXRzL2xpc3RfY2VsbC9hcHAudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9saXN0X2NlbGwvbWFpbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuXHRDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cblx0TGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcblx0aHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIG5hdGl2ZUNvZGVTdHJpbmcgPSAnW25hdGl2ZSBjb2RlXSc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nICYmICFhcmcudG9TdHJpbmcudG9TdHJpbmcoKS5pbmNsdWRlcygnW25hdGl2ZSBjb2RlXScpKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCAiaW50ZXJmYWNlIEVycm9yUHJvcHMge1xuICBtZXNzYWdlOiBzdHJpbmdcbn1cbmNvbnN0IEVycm9yID0gKHsgbWVzc2FnZSB9OiBFcnJvclByb3BzKSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLXJlZC03MDAgYmctcmVkLTEwMCBwLTJcIj5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBmbGV4LW5vbmUgdGV4dC1yZWQtNzAwXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgZD1cIk0xMiA5djMuNzVtLTkuMzAzIDMuMzc2Yy0uODY2IDEuNS4yMTcgMy4zNzQgMS45NDggMy4zNzRoMTQuNzFjMS43MyAwIDIuODEzLTEuODc0IDEuOTQ4LTMuMzc0TDEzLjk0OSAzLjM3OGMtLjg2Ni0xLjUtMy4wMzItMS41LTMuODk4IDBMMi42OTcgMTYuMTI2ek0xMiAxNS43NWguMDA3di4wMDhIMTJ2LS4wMDh6XCJcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWludGVyIHB4LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXJlZC03MDBcIj5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yXG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuaW1wb3J0IHsgQXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnXG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgY2FsbGJhY2s6IFQsXG4gIHRpbWVvdXQ6IG51bWJlcixcbik6ICgoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4gdm9pZCkgPT4ge1xuICBsZXQgdGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+XG5cbiAgcmV0dXJuICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjayguLi5hcmdzKVxuICAgIH0sIHRpbWVvdXQpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRSZWFjdCA9IGFzeW5jIChcbiAgY3R4OiBLaW5vQ29udGV4dCxcbiAgYXR0cnM6IEF0dHJpYnV0ZXMsXG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKGF0dHJzLm1peF9lbnYgPT0gJ2RldicpIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE4L3VtZC9yZWFjdC5kZXZlbG9wbWVudC5qcycpXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxOC4yLjAvdW1kL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcycsXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUygnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3RAMTgvdW1kL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJylcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICAnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtZG9tQDE4LjIuMC91bWQvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzJyxcbiAgICApXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5cbnR5cGUgVXBkYXRlQXR0ckZ1bjxBdHRyc1R5cGU+ID0gKFxuICBhdHRyTmFtZTogc3RyaW5nLFxuKSA9PiAoQXR0clZhbHVlOiBBdHRyc1R5cGVba2V5b2YgQXR0cnNUeXBlXSkgPT4gdm9pZFxuXG5jb25zdCB1c2VBdHRyc1N0YXRlID0gPEF0dHJzVHlwZSBleHRlbmRzIG9iamVjdD4oXG4gIGN0eDogS2lub0NvbnRleHQsXG4gIGluaXRpYWxBdHRyczogQXR0cnNUeXBlLFxuKTogW0F0dHJzVHlwZSwgVXBkYXRlQXR0ckZ1bjxBdHRyc1R5cGU+XSA9PiB7XG4gIGNvbnN0IFthdHRycywgc2V0QXR0cnNdID0gUmVhY3QudXNlU3RhdGU8QXR0cnNUeXBlPihpbml0aWFsQXR0cnMpXG4gIGNvbnN0IHVwZGF0ZUF0dHI6IFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPiA9IChhdHRyTmFtZSkgPT4gKGF0dHJWYWx1ZSkgPT4ge1xuICAgIHNldEF0dHJzKChhdHRycykgPT4gKHsgLi4uYXR0cnMsIFthdHRyTmFtZV06IGF0dHJWYWx1ZSB9KSlcbiAgICBjb25zb2xlLmxvZygnUHVzaGluZyAke2F0dHJOYW1lfSB0byBzZXJ2ZXInLCBhdHRyVmFsdWUpXG4gICAgY3R4LnB1c2hFdmVudChgdXBkYXRlXyR7YXR0ck5hbWV9YCwgYXR0clZhbHVlKVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjdHguaGFuZGxlRXZlbnQ8QXR0cnNUeXBlPigndXBkYXRlJywgKHVwZGF0ZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRyaWJ1dGUgdXBkYXRlIGZyb20gc2VydmVyJywgdXBkYXRlcylcbiAgICAgIHNldEF0dHJzKChhdHRycykgPT4gKHtcbiAgICAgICAgLi4uT2JqZWN0LmFzc2lnbihhdHRycywgdXBkYXRlcyksXG4gICAgICB9KSlcbiAgICB9KVxuICB9LCBbXSlcbiAgcmV0dXJuIFthdHRycywgdXBkYXRlQXR0cl1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQXR0cnNTdGF0ZVxuIiwgImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbnR5cGUgSW5wdXRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlOiBzdHJpbmdcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIG9yaWVudGF0aW9uPzogJ2hvcml6JyB8ICd2ZXJ0J1xufVxuY29uc3QgSW5wdXQ6IFJlYWN0LkZDPElucHV0UHJvcHM+ID0gKHtcbiAgbmFtZSxcbiAgbGFiZWwsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgb25DaGFuZ2UsXG4gIG9yaWVudGF0aW9uID0gJ3ZlcnQnLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgICdmbGV4IGZsZXgtcm93IGl0ZW1zLWJhc2VsaW5lJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXtuYW1lfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmxvY2s6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyxcbiAgICAgICAgICAgICdwci0xIHVwcGVyY2FzZSc6IG9yaWVudGF0aW9uID09ICdob3JpeicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnbWItMSB0ZXh0LXNtIGZvbnQtbWVkaXVtJyxcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgeyAnYmxvY2sgdy1mdWxsJzogb3JpZW50YXRpb24gPT0gJ3ZlcnQnIH0sXG4gICAgICAgICAgJ3JvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTUwIHAtMS41IHRleHQtc20gZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmctYmx1ZS01MDAnLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuIiwgImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuLi91dGlscydcblxudHlwZSBTZWFyY2hJbnB1dFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nXG4gIHNlYXJjaFRlcm06IHN0cmluZ1xuICBvblNlYXJjaDogKHNlYXJjaFRlcm06IHN0cmluZykgPT4gdm9pZFxuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xufVxuXG5jb25zdCBTZWFyY2hJbnB1dDogUmVhY3QuRkM8U2VhcmNoSW5wdXRQcm9wcz4gPSAoe1xuICBuYW1lLFxuICBzZWxlY3RlZFZhbHVlLFxuICBzZWFyY2hUZXJtLFxuICBvblNlYXJjaCxcbiAgcGxhY2Vob2xkZXIsXG59OiBTZWFyY2hJbnB1dFByb3BzKSA9PiB7XG4gIGNvbnN0IHBlcmZvcm1TZWFyY2ggPSBkZWJvdW5jZSgoc2VhcmNoVGVybSkgPT4ge1xuICAgIG9uU2VhcmNoKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbiAgfSwgMzAwKVxuICBjb25zdCBbbG9jYWxTZWFyY2hUZXJtLCBzZXRMb2NhbFNlYXJjaFRlcm1dID0gUmVhY3QudXNlU3RhdGUoc2VhcmNoVGVybSA/PyAnJylcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZWxlY3RlZFZhbHVlICYmIHNldExvY2FsU2VhcmNoVGVybShzZWxlY3RlZFZhbHVlKVxuICB9LCBbc2VsZWN0ZWRWYWx1ZV0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcGwtM1wiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX1cbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2gtNSB3LTUnLCB7XG4gICAgICAgICAgICAgICdiZy1ncmVlbi0yMDAnOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgICAgICAndGV4dC1ncmVlbi04MDAnOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgICAgICAnYm9yZGVyLWdyZWVuLTgwMCc6IHNlbGVjdGVkVmFsdWUsXG4gICAgICAgICAgICAgICdyb3VuZGVkLWxnJzogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RlZFZhbHVlID8gKFxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgZD1cIk05IDEyLjc1TDExLjI1IDE1IDE1IDkuNzVNMjEgMTJjMCAxLjI2OC0uNjMgMi4zOS0xLjU5MyAzLjA2OGEzLjc0NSAzLjc0NSAwIDAxLTEuMDQzIDMuMjk2IDMuNzQ1IDMuNzQ1IDAgMDEtMy4yOTYgMS4wNDNBMy43NDUgMy43NDUgMCAwMTEyIDIxYy0xLjI2OCAwLTIuMzktLjYzLTMuMDY4LTEuNTkzYTMuNzQ2IDMuNzQ2IDAgMDEtMy4yOTYtMS4wNDMgMy43NDUgMy43NDUgMCAwMS0xLjA0My0zLjI5NkEzLjc0NSAzLjc0NSAwIDAxMyAxMmMwLTEuMjY4LjYzLTIuMzkgMS41OTMtMy4wNjhhMy43NDUgMy43NDUgMCAwMTEuMDQzLTMuMjk2IDMuNzQ2IDMuNzQ2IDAgMDEzLjI5Ni0xLjA0M0EzLjc0NiAzLjc0NiAwIDAxMTIgM2MxLjI2OCAwIDIuMzkuNjMgMy4wNjggMS41OTNhMy43NDYgMy43NDYgMCAwMTMuMjk2IDEuMDQzIDMuNzQ2IDMuNzQ2IDAgMDExLjA0MyAzLjI5NkEzLjc0NSAzLjc0NSAwIDAxMjEgMTJ6XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIxIDIxbC01LjE5Ny01LjE5N20wIDBBNy41IDcuNSAwIDEwNS4xOTYgNS4xOTZhNy41IDcuNSAwIDAwMTAuNjA3IDEwLjYwN3pcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17bG9jYWxTZWFyY2hUZXJtfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgb25JbnB1dD17KGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICBzZXRMb2NhbFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICBwZXJmb3JtU2VhcmNoKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTUwIHAtMiBwbC05IHRleHQtc20gZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxudHlwZSBTZWFyY2hSZXN1bHRQcm9wczxJdGVtVHlwZT4gPSB7XG4gIHJlc3VsdEl0ZW1zOiBbSXRlbVR5cGVdXG4gIGl0ZW1SZW5kZXJlcjogKGl0ZW06IEl0ZW1UeXBlKSA9PiBSZWFjdC5KU1guRWxlbWVudFxuICBvblNlbGVjdDogKGl0ZW06IEl0ZW1UeXBlKSA9PiB2b2lkXG4gIHJlc3VsdEl0ZW1zS2V5RmllbGQ6IGtleW9mIEl0ZW1UeXBlXG59XG5cbmNvbnN0IFNlYXJjaFJlc3VsdCA9IDxJdGVtVHlwZSw+KHtcbiAgcmVzdWx0SXRlbXMsXG4gIGl0ZW1SZW5kZXJlcixcbiAgb25TZWxlY3QsXG4gIHJlc3VsdEl0ZW1zS2V5RmllbGQsXG59OiBTZWFyY2hSZXN1bHRQcm9wczxJdGVtVHlwZT4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLTM2IG92ZXJmbG93LWF1dG8gcm91bmRlZC1iLWxnIGJvcmRlci1iIGJvcmRlci1sIGJvcmRlci1yIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LW1heCBtaW4tdy1mdWxsXCI+XG4gICAgICAgIHtyZXN1bHRJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2l0ZW1bcmVzdWx0SXRlbXNLZXlGaWVsZF0gYXMgc3RyaW5nfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QoaXRlbSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYi1zb2xpZCBsYXN0OmJvcmRlci1iLW5vbmUgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLWIgYm9yZGVyLWItZ3JheS0zMDAgYmctZ3JheS01MCBweC0yIHB5LTAuNSBob3ZlcjpiZy1ibHVlLTYwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXRlbVJlbmRlcmVyKGl0ZW0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbnR5cGUgU2VhcmNoU2VsZWN0UHJvcHMgPSB7IGxhYmVsOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nIH1cblxuY29uc3QgU2VhcmNoU2VsZWN0ID0gPEl0ZW1UeXBlLD4oe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgc2VhcmNoVGVybSxcbiAgb25TZWFyY2gsXG4gIHJlc3VsdEl0ZW1zLFxuICByZXN1bHRJdGVtc0tleUZpZWxkLFxuICBpdGVtUmVuZGVyZXIsXG4gIGNsYXNzTmFtZSxcbiAgb25TZWxlY3QsXG4gIHNlbGVjdGVkVmFsdWUsXG4gIHBsYWNlaG9sZGVyLFxufTogU2VhcmNoSW5wdXRQcm9wcyAmIFNlYXJjaFJlc3VsdFByb3BzPEl0ZW1UeXBlPiAmIFNlYXJjaFNlbGVjdFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0gY2xhc3NOYW1lPVwibWItMSBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8U2VhcmNoSW5wdXRcbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxuICAgICAgICBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfVxuICAgICAgICBzZWxlY3RlZFZhbHVlPXtzZWxlY3RlZFZhbHVlfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAvPlxuICAgICAgeyhyZXN1bHRJdGVtcyAmJiByZXN1bHRJdGVtcy5sZW5ndGgpID4gMCAmJiAoXG4gICAgICAgIDxTZWFyY2hSZXN1bHRcbiAgICAgICAgICByZXN1bHRJdGVtcz17cmVzdWx0SXRlbXN9XG4gICAgICAgICAgaXRlbVJlbmRlcmVyPXtpdGVtUmVuZGVyZXJ9XG4gICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgICAgIHJlc3VsdEl0ZW1zS2V5RmllbGQ9e3Jlc3VsdEl0ZW1zS2V5RmllbGR9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFNlbGVjdFxuIiwgImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbnR5cGUgU2VsZWN0UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG9wdGlvbnM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W11cbiAgc2VsZWN0ZWRPcHRpb24/OiBzdHJpbmdcbiAgb25DaGFuZ2U6IChvcHRpb246IHN0cmluZykgPT4gdm9pZFxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgb3JpZW50YXRpb24/OiAnaG9yaXonIHwgJ3ZlcnQnXG59XG5cbmNvbnN0IFNlbGVjdCA9ICh7XG4gIG5hbWUsXG4gIGxhYmVsLFxuICBvcHRpb25zLFxuICBzZWxlY3RlZE9wdGlvbixcbiAgb25DaGFuZ2UsXG4gIGNsYXNzTmFtZSA9ICcnLFxuICBvcmllbnRhdGlvbiA9ICd2ZXJ0Jyxcbn06IFNlbGVjdFByb3BzKSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICB7XG4gICAgICAgICdmbGV4IGZsZXgtcm93IGl0ZW1zLWJhc2VsaW5lJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgPlxuICAgIDxsYWJlbFxuICAgICAgaHRtbEZvcj17bmFtZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAge1xuICAgICAgICAgIGJsb2NrOiBvcmllbnRhdGlvbiA9PSAndmVydCcsXG4gICAgICAgICAgJ3ByLTEgdXBwZXJjYXNlJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgICAgfSxcbiAgICAgICAgJ21iLTEgdGV4dC1zbSBmb250LW1lZGl1bScsXG4gICAgICApfVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L2xhYmVsPlxuICAgIDxzZWxlY3RcbiAgICAgIGlkPXtuYW1lfVxuICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlIS50YXJnZXQhLnZhbHVlKX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgeyAnYmxvY2sgdy1mdWxsJzogb3JpZW50YXRpb24gPT0gJ3ZlcnQnIH0sXG4gICAgICAgICcgYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTUwIGJnLWNhcmV0LWRvd24gYmctW2xlbmd0aDoxMHB4XSBiZy1bY2VudGVyX3JpZ2h0XzEwcHhdIGJnLW5vLXJlcGVhdCBwLTIgcHItNSB0ZXh0LXNtIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLWJsdWUtNTAwJyxcbiAgICAgICl9XG4gICAgPlxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XG4gICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApKX1cbiAgICA8L3NlbGVjdD5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFxuIiwgImltcG9ydCB7IEdWSyB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBHVktPcHRpb24gPSAoeyBndmsgfTogeyBndms6IEdWSyB9KSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj57Z3ZrLmFwaV92ZXJzaW9ufTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntndmsua2luZH08L2Rpdj5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEdWS09wdGlvblxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCB1c2VBdHRyc1N0YXRlIGZyb20gJy4uL3NoYXJlZC9hdHRyX3N0YXRlJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uL3NoYXJlZC9mb3JtL2lucHV0J1xuaW1wb3J0IFNlYXJjaFNlbGVjdCBmcm9tICcuLi9zaGFyZWQvZm9ybS9zZWFyY2hfc2VsZWN0J1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9zaGFyZWQvZm9ybS9zZWxlY3QnXG5pbXBvcnQgR1ZLT3B0aW9uIGZyb20gJy4uL3NoYXJlZC9ndmtfb3B0aW9uJ1xuaW1wb3J0IHsgR1ZLIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzJ1xuaW1wb3J0IHsgTGlzdENlbGxBdHRycyB9IGZyb20gJy4vdHlwZXMnXG5cbmludGVyZmFjZSBBcHBQcm9wcyB7XG4gIGluaXRpYWxBdHRyczogTGlzdENlbGxBdHRyc1xuICBjdHg6IEtpbm9Db250ZXh0XG59XG5cbmNvbnN0IEFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHsgaW5pdGlhbEF0dHJzLCBjdHggfSkgPT4ge1xuICBjb25zdCBbYXR0cnMsIHVwZGF0ZUF0dHJdID0gdXNlQXR0cnNTdGF0ZShjdHgsIGluaXRpYWxBdHRycylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMCBmb250LWludGVyIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItc29saWQgZmxleCBnYXAteC01IGdhcC15LTMgYm9yZGVyLWIgYm9yZGVyLWItZ3JheS0zMDAgYmctYmx1ZS0xMDAgcC0zXCI+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBuYW1lPVwiY29ubmVjdGlvblwiXG4gICAgICAgICAgbGFiZWw9XCJDb25uZWN0aW9uXCJcbiAgICAgICAgICBvcHRpb25zPXthdHRycy5jb25uZWN0aW9ucy5tYXAoKGNvbm5lY3Rpb24pID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogY29ubmVjdGlvbi52YXJpYWJsZSxcbiAgICAgICAgICAgIHZhbHVlOiBjb25uZWN0aW9uLnZhcmlhYmxlLFxuICAgICAgICAgIH0pKX1cbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnMuY29ubmVjdGlvbj8udmFyaWFibGU/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ2Nvbm5lY3Rpb24nKX1cbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6XCJcbiAgICAgICAgLz5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG5hbWU9XCJyZXN1bHRfdHlwZVwiXG4gICAgICAgICAgbGFiZWw9XCJSZXN1bHQgVHlwZVwiXG4gICAgICAgICAgb3B0aW9ucz17YXR0cnMucmVzdWx0X3R5cGVzLm1hcCgocmVzdWx0X3R5cGUpID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogcmVzdWx0X3R5cGUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgIHZhbHVlOiByZXN1bHRfdHlwZSxcbiAgICAgICAgICB9KSl9XG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2F0dHJzLnJlc3VsdF90eXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBdHRyKCdyZXN1bHRfdHlwZScpfVxuICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpcIlxuICAgICAgICAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBsYWJlbD1cIkFzc2lnbiBUb1wiXG4gICAgICAgICAgbmFtZT1cImFzc2lnbl90b1wiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXthdHRyc1sncmVzdWx0X3ZhcmlhYmxlJ119XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ3Jlc3VsdF92YXJpYWJsZScpfVxuICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtNSBwLTNcIj5cbiAgICAgICAge2F0dHJzLmNvbm5lY3Rpb24gJiYgKFxuICAgICAgICAgIDxTZWFyY2hTZWxlY3Q8R1ZLPlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctZnVsbFwiXG4gICAgICAgICAgICBuYW1lPVwiZ3ZrXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUmVzb3VyY2UgS2luZFwiXG4gICAgICAgICAgICBvblNlYXJjaD17dXBkYXRlQXR0cignc2VhcmNoX3Rlcm0nKX1cbiAgICAgICAgICAgIHNlYXJjaFRlcm09e2F0dHJzWydzZWFyY2hfdGVybSddfVxuICAgICAgICAgICAgcmVzdWx0SXRlbXNLZXlGaWVsZD17J2luZGV4J31cbiAgICAgICAgICAgIHJlc3VsdEl0ZW1zPXthdHRyc1snc2VhcmNoX3Jlc3VsdF9pdGVtcyddfVxuICAgICAgICAgICAgb25TZWxlY3Q9e3VwZGF0ZUF0dHIoJ2d2aycpfVxuICAgICAgICAgICAgaXRlbVJlbmRlcmVyPXsoaXRlbTogR1ZLKSA9PiA8R1ZLT3B0aW9uIGd2az17aXRlbX0gLz59XG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlPXthdHRyc1snZ3ZrJ10/LmtpbmR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImFwcHMvdjEgRGVwbG95bWVudFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2F0dHJzLm5hbWVzcGFjZXMgJiYgKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lc3BhY2VcIlxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lc3BhY2VcIlxuICAgICAgICAgICAgb3B0aW9ucz17YXR0cnMubmFtZXNwYWNlcy5tYXAoKG5zKSA9PiAoe1xuICAgICAgICAgICAgICBsYWJlbDogbnMsXG4gICAgICAgICAgICAgIHZhbHVlOiBucyxcbiAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXthdHRyc1snbmFtZXNwYWNlJ119XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cignbmFtZXNwYWNlJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCBFcnJvciBmcm9tICcuLi9zaGFyZWQvZXJyb3InXG5pbXBvcnQgeyBsb2FkUmVhY3QgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMnXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuaW1wb3J0IHsgTGlzdENlbGxBdHRycyB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBpbml0ID0gYXN5bmMgKFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBhdHRyczogTGlzdENlbGxBdHRycyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBhd2FpdCBsb2FkUmVhY3QoY3R4LCBhdHRycylcblxuICBjdHgucm9vdC5pbm5lckhUTUwgPSAnbG9hZGluZy4uLidcblxuICBjdHguaW1wb3J0Q1NTKCdtYWluLmNzcycpXG4gIGN0eC5pbXBvcnRDU1MoXG4gICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCcsXG4gIClcblxuICBjb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChjdHgucm9vdClcbiAgaWYgKGF0dHJzLmVycm9yKSB7XG4gICAgcmV0dXJuIHJvb3QucmVuZGVyKDxFcnJvciBtZXNzYWdlPXthdHRycy5lcnJvcn0gLz4pXG4gIH1cblxuICByb290LnJlbmRlcig8QXBwIGluaXRpYWxBdHRycz17YXR0cnN9IGN0eD17Y3R4fSAvPilcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFPQSxLQUFDLFdBQVk7QUFDWjtBQUVBLFVBQUksU0FBUyxDQUFDLEVBQUU7QUFDaEIsVUFBSSxtQkFBbUI7QUFFdkIsZUFBU0EsY0FBYTtBQUNyQixZQUFJLFVBQVUsQ0FBQztBQUVmLGlCQUFTLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQzFDLGNBQUksTUFBTSxVQUFVLENBQUM7QUFDckIsY0FBSSxDQUFDO0FBQUs7QUFFVixjQUFJLFVBQVUsT0FBTztBQUVyQixjQUFJLFlBQVksWUFBWSxZQUFZLFVBQVU7QUFDakQsb0JBQVEsS0FBSyxHQUFHO0FBQUEsVUFDakIsV0FBVyxNQUFNLFFBQVEsR0FBRyxHQUFHO0FBQzlCLGdCQUFJLElBQUksUUFBUTtBQUNmLGtCQUFJLFFBQVFBLFlBQVcsTUFBTSxNQUFNLEdBQUc7QUFDdEMsa0JBQUksT0FBTztBQUNWLHdCQUFRLEtBQUssS0FBSztBQUFBLGNBQ25CO0FBQUEsWUFDRDtBQUFBLFVBQ0QsV0FBVyxZQUFZLFVBQVU7QUFDaEMsZ0JBQUksSUFBSSxhQUFhLE9BQU8sVUFBVSxZQUFZLENBQUMsSUFBSSxTQUFTLFNBQVMsRUFBRSxTQUFTLGVBQWUsR0FBRztBQUNyRyxzQkFBUSxLQUFLLElBQUksU0FBUyxDQUFDO0FBQzNCO0FBQUEsWUFDRDtBQUVBLHFCQUFTLE9BQU8sS0FBSztBQUNwQixrQkFBSSxPQUFPLEtBQUssS0FBSyxHQUFHLEtBQUssSUFBSSxHQUFHLEdBQUc7QUFDdEMsd0JBQVEsS0FBSyxHQUFHO0FBQUEsY0FDakI7QUFBQSxZQUNEO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFFQSxlQUFPLFFBQVEsS0FBSyxHQUFHO0FBQUEsTUFDeEI7QUFFQSxVQUFJLE9BQU8sV0FBVyxlQUFlLE9BQU8sU0FBUztBQUNwRCxRQUFBQSxZQUFXLFVBQVVBO0FBQ3JCLGVBQU8sVUFBVUE7QUFBQSxNQUNsQixXQUFXLE9BQU8sV0FBVyxjQUFjLE9BQU8sT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLO0FBRXhGLGVBQU8sY0FBYyxDQUFDLEdBQUcsV0FBWTtBQUNwQyxpQkFBT0E7QUFBQSxRQUNSLENBQUM7QUFBQSxNQUNGLE9BQU87QUFDTixlQUFPLGFBQWFBO0FBQUEsTUFDckI7QUFBQSxJQUNELEdBQUU7QUFBQTtBQUFBOzs7QUN4REYsSUFBTUMsU0FBUSxDQUFDLEVBQUUsUUFBUSxNQUN2QiwwREFDRSxvQ0FBQyxTQUFJLFdBQVUsd0VBQ2I7QUFBQSxFQUFDO0FBQUE7QUFBQSxJQUNDLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLFNBQVE7QUFBQSxJQUNSLGdCQUFhO0FBQUEsSUFDYixRQUFPO0FBQUEsSUFDUCxlQUFZO0FBQUE7QUFBQSxFQUVaO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxrQkFBZTtBQUFBLE1BQ2YsbUJBQWdCO0FBQUEsTUFDaEIsR0FBRTtBQUFBO0FBQUEsRUFDSDtBQUNILEdBQ0Esb0NBQUMsU0FBSSxXQUFVLHNEQUNaLE9BQ0gsQ0FDRixDQUNGO0FBR0YsSUFBTyxnQkFBUUE7OztBQ3ZCUixJQUFNLFdBQVcsQ0FDdEIsVUFDQSxZQUN1QztBQUN2QyxNQUFJO0FBRUosU0FBTyxJQUFJLFNBQXdCO0FBQ2pDLGlCQUFhLEtBQUs7QUFDbEIsWUFBUSxXQUFXLE1BQU07QUFDdkIsZUFBUyxHQUFHLElBQUk7QUFBQSxJQUNsQixHQUFHLE9BQU87QUFBQSxFQUNaO0FBQ0Y7QUFFTyxJQUFNLFlBQVksT0FDdkIsS0FDQSxVQUNrQjtBQUNsQixNQUFJLE1BQU0sV0FBVyxPQUFPO0FBQzFCLFVBQU0sSUFBSSxTQUFTLHFEQUFxRDtBQUN4RSxVQUFNLElBQUk7QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0YsT0FBTztBQUNMLFVBQU0sSUFBSSxTQUFTLHdEQUF3RDtBQUMzRSxVQUFNLElBQUk7QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjs7O0FDM0JBLElBQU0sZ0JBQWdCLENBQ3BCLEtBQ0EsaUJBQzBDO0FBQzFDLFFBQU0sQ0FBQyxPQUFPLFFBQVEsSUFBSSxNQUFNLFNBQW9CLFlBQVk7QUFDaEUsUUFBTSxhQUF1QyxDQUFDLGFBQWEsQ0FBQyxjQUFjO0FBQ3hFLGFBQVMsQ0FBQ0MsWUFBVyxFQUFFLEdBQUdBLFFBQU8sQ0FBQyxRQUFRLEdBQUcsVUFBVSxFQUFFO0FBQ3pELFlBQVEsSUFBSSxpQ0FBaUMsU0FBUztBQUN0RCxRQUFJLFVBQVUsVUFBVSxRQUFRLElBQUksU0FBUztBQUFBLEVBQy9DO0FBRUEsUUFBTSxVQUFVLE1BQU07QUFDcEIsUUFBSSxZQUF1QixVQUFVLENBQUMsWUFBWTtBQUNoRCxjQUFRLElBQUksZ0NBQWdDLE9BQU87QUFDbkQsZUFBUyxDQUFDQSxZQUFXO0FBQUEsUUFDbkIsR0FBRyxPQUFPLE9BQU9BLFFBQU8sT0FBTztBQUFBLE1BQ2pDLEVBQUU7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNILEdBQUcsQ0FBQyxDQUFDO0FBQ0wsU0FBTyxDQUFDLE9BQU8sVUFBVTtBQUMzQjtBQUVBLElBQU8scUJBQVE7OztBQzVCZix3QkFBdUI7QUFTdkIsSUFBTSxRQUE4QixDQUFDO0FBQUEsRUFDbkM7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLGNBQWM7QUFDaEIsTUFBTTtBQUNKLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLGVBQVcsa0JBQUFDLFNBQVc7QUFBQSxRQUNwQixnQ0FBZ0MsZUFBZTtBQUFBLE1BQ2pELENBQUM7QUFBQTtBQUFBLElBRUQ7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLFNBQVM7QUFBQSxRQUNULGVBQVcsa0JBQUFBO0FBQUEsVUFDVDtBQUFBLFlBQ0UsT0FBTyxlQUFlO0FBQUEsWUFDdEIsa0JBQWtCLGVBQWU7QUFBQSxVQUNuQztBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUE7QUFBQSxNQUVDO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLE1BQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQO0FBQUEsUUFDQSxVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsT0FBTyxLQUFLO0FBQUEsUUFDeEMsZUFBVyxrQkFBQUE7QUFBQSxVQUNULEVBQUUsZ0JBQWdCLGVBQWUsT0FBTztBQUFBLFVBQ3hDO0FBQUEsUUFDRjtBQUFBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFSjtBQUVBLElBQU8sZ0JBQVE7OztBQ2hEZixJQUFBQyxxQkFBdUI7QUFZdkIsSUFBTSxjQUEwQyxDQUFDO0FBQUEsRUFDL0M7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsTUFBd0I7QUFDdEIsUUFBTSxnQkFBZ0IsU0FBUyxDQUFDQyxnQkFBZTtBQUM3QyxhQUFTQSxZQUFXLFlBQVksQ0FBQztBQUFBLEVBQ25DLEdBQUcsR0FBRztBQUNOLFFBQU0sQ0FBQyxpQkFBaUIsa0JBQWtCLElBQUksTUFBTSxTQUFTLGNBQWMsRUFBRTtBQUM3RSxRQUFNLFVBQVUsTUFBTTtBQUNwQixxQkFBaUIsbUJBQW1CLGFBQWE7QUFBQSxFQUNuRCxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQ2xCLFNBQ0UsMERBQ0Usb0NBQUMsU0FBSSxXQUFVLGNBQ2Isb0NBQUMsU0FBSSxXQUFVLDBFQUNiO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxPQUFNO0FBQUEsTUFDTixNQUFLO0FBQUEsTUFDTCxTQUFRO0FBQUEsTUFDUixlQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixRQUFPO0FBQUEsTUFDUCxlQUFXLG1CQUFBQyxTQUFXLFdBQVc7QUFBQSxRQUMvQixnQkFBZ0I7QUFBQSxRQUNoQixrQkFBa0I7QUFBQSxRQUNsQixvQkFBb0I7QUFBQSxRQUNwQixjQUFjO0FBQUEsTUFDaEIsQ0FBQztBQUFBO0FBQUEsSUFFQSxnQkFDQztBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsZUFBYztBQUFBLFFBQ2QsZ0JBQWU7QUFBQSxRQUNmLEdBQUU7QUFBQTtBQUFBLElBQ0osSUFFQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsZUFBYztBQUFBLFFBQ2QsZ0JBQWU7QUFBQSxRQUNmLEdBQUU7QUFBQTtBQUFBLElBQ0o7QUFBQSxFQUVKLENBQ0YsR0FDQTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsTUFBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1A7QUFBQSxNQUNBLGNBQWE7QUFBQSxNQUNiO0FBQUEsTUFDQSxTQUFTLENBQUMsTUFBcUM7QUFDN0MsMkJBQW1CLEVBQUUsT0FBTyxLQUFLO0FBQ2pDLHNCQUFjLEVBQUUsT0FBTyxLQUFLO0FBQUEsTUFDOUI7QUFBQSxNQUNBLFdBQVU7QUFBQTtBQUFBLEVBQ1osQ0FDRixDQUNGO0FBRUo7QUFTQSxJQUFNLGVBQWUsQ0FBWTtBQUFBLEVBQy9CO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsTUFBbUM7QUFDakMsU0FDRSxvQ0FBQyxTQUFJLFdBQVUsb0ZBQ2Isb0NBQUMsU0FBSSxXQUFVLHNCQUNaLFlBQVksSUFBSSxDQUFDLFNBQ2hCO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxLQUFLLEtBQUssbUJBQW1CO0FBQUEsTUFDN0IsU0FBUyxNQUFNLFNBQVMsSUFBSTtBQUFBLE1BQzVCLFdBQVU7QUFBQTtBQUFBLElBRVQsYUFBYSxJQUFJO0FBQUEsRUFDcEIsQ0FDRCxDQUNILENBQ0Y7QUFFSjtBQUlBLElBQU0sZUFBZSxDQUFZO0FBQUEsRUFDL0I7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsTUFBMEU7QUFDeEUsU0FDRSxvQ0FBQyxTQUFJLGFBQ0gsb0NBQUMsV0FBTSxTQUFTLE1BQU0sV0FBVSxvQ0FDN0IsS0FDSCxHQUNBO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQztBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLEVBQ0YsSUFDRSxlQUFlLFlBQVksVUFBVSxLQUNyQztBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0M7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLEVBQ0YsQ0FFSjtBQUVKO0FBRUEsSUFBTyx3QkFBUTs7O0FDakpmLElBQUFDLHFCQUF1QjtBQVl2QixJQUFNLFNBQVMsQ0FBQztBQUFBLEVBQ2Q7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQSxZQUFZO0FBQUEsRUFDWixjQUFjO0FBQ2hCLE1BQ0U7QUFBQSxFQUFDO0FBQUE7QUFBQSxJQUNDLGVBQVcsbUJBQUFDO0FBQUEsTUFDVDtBQUFBLFFBQ0UsZ0NBQWdDLGVBQWU7QUFBQSxNQUNqRDtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUE7QUFBQSxFQUVBO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxTQUFTO0FBQUEsTUFDVCxlQUFXLG1CQUFBQTtBQUFBLFFBQ1Q7QUFBQSxVQUNFLE9BQU8sZUFBZTtBQUFBLFVBQ3RCLGtCQUFrQixlQUFlO0FBQUEsUUFDbkM7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBO0FBQUEsSUFFQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUcsT0FBUSxLQUFLO0FBQUEsTUFDMUMsZUFBVyxtQkFBQUE7QUFBQSxRQUNULEVBQUUsZ0JBQWdCLGVBQWUsT0FBTztBQUFBLFFBQ3hDO0FBQUEsTUFDRjtBQUFBO0FBQUEsSUFFQyxRQUFRLElBQUksQ0FBQyxXQUNaLG9DQUFDLFlBQU8sS0FBSyxPQUFPLE9BQU8sT0FBTyxPQUFPLFNBQ3RDLE9BQU8sS0FDVixDQUNEO0FBQUEsRUFDSDtBQUNGO0FBR0YsSUFBTyxpQkFBUTs7O0FDekRSLElBQU0sWUFBWSxDQUFDLEVBQUUsSUFBSSxNQUM5QiwwREFDRSxvQ0FBQyxTQUFJLFdBQVUsMkJBQXlCLElBQUksV0FBWSxHQUN4RCxvQ0FBQyxTQUFJLFdBQVUsYUFBVyxJQUFJLElBQUssQ0FDckM7QUFHRixJQUFPLHFCQUFROzs7QUNLZixJQUFNLE1BQTBCLENBQUMsRUFBRSxjQUFjLElBQUksTUFBTTtBQUN6RCxRQUFNLENBQUMsT0FBTyxVQUFVLElBQUksbUJBQWMsS0FBSyxZQUFZO0FBRTNELFNBQ0Usb0NBQUMsU0FBSSxXQUFVLHlGQUNiLG9DQUFDLFNBQUksV0FBVSxvRkFDYjtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsTUFBSztBQUFBLE1BQ0wsT0FBTTtBQUFBLE1BQ04sU0FBUyxNQUFNLFlBQVksSUFBSSxDQUFDLGdCQUFnQjtBQUFBLFFBQzlDLE9BQU8sV0FBVztBQUFBLFFBQ2xCLE9BQU8sV0FBVztBQUFBLE1BQ3BCLEVBQUU7QUFBQSxNQUNGLGdCQUFnQixNQUFNLFlBQVksVUFBVSxTQUFTO0FBQUEsTUFDckQsVUFBVSxXQUFXLFlBQVk7QUFBQSxNQUNqQyxhQUFZO0FBQUE7QUFBQSxFQUNkLEdBQ0E7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQSxNQUNOLFNBQVMsTUFBTSxhQUFhLElBQUksQ0FBQyxpQkFBaUI7QUFBQSxRQUNoRCxPQUFPLFlBQVksWUFBWTtBQUFBLFFBQy9CLE9BQU87QUFBQSxNQUNULEVBQUU7QUFBQSxNQUNGLGdCQUFnQixNQUFNO0FBQUEsTUFDdEIsVUFBVSxXQUFXLGFBQWE7QUFBQSxNQUNsQyxhQUFZO0FBQUE7QUFBQSxFQUNkLEdBQ0E7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLE9BQU07QUFBQSxNQUNOLE1BQUs7QUFBQSxNQUNMLGNBQWMsTUFBTSxpQkFBaUI7QUFBQSxNQUNyQyxVQUFVLFdBQVcsaUJBQWlCO0FBQUEsTUFDdEMsYUFBWTtBQUFBO0FBQUEsRUFDZCxDQUNGLEdBQ0Esb0NBQUMsU0FBSSxXQUFVLHNCQUNaLE1BQU0sY0FDTDtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsV0FBVTtBQUFBLE1BQ1YsTUFBSztBQUFBLE1BQ0wsT0FBTTtBQUFBLE1BQ04sVUFBVSxXQUFXLGFBQWE7QUFBQSxNQUNsQyxZQUFZLE1BQU0sYUFBYTtBQUFBLE1BQy9CLHFCQUFxQjtBQUFBLE1BQ3JCLGFBQWEsTUFBTSxxQkFBcUI7QUFBQSxNQUN4QyxVQUFVLFdBQVcsS0FBSztBQUFBLE1BQzFCLGNBQWMsQ0FBQyxTQUFjLG9DQUFDLHNCQUFVLEtBQUssTUFBTTtBQUFBLE1BQ25ELGVBQWUsTUFBTSxLQUFLLEdBQUc7QUFBQSxNQUM3QixhQUFZO0FBQUE7QUFBQSxFQUNkLEdBRUQsTUFBTSxjQUNMO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxNQUFLO0FBQUEsTUFDTCxPQUFNO0FBQUEsTUFDTixTQUFTLE1BQU0sV0FBVyxJQUFJLENBQUMsUUFBUTtBQUFBLFFBQ3JDLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxNQUNULEVBQUU7QUFBQSxNQUNGLGdCQUFnQixNQUFNLFdBQVc7QUFBQSxNQUNqQyxVQUFVLFdBQVcsV0FBVztBQUFBO0FBQUEsRUFDbEMsQ0FFSixDQUNGO0FBRUo7QUFFQSxJQUFPLGNBQVE7OztBQzdFUixJQUFNLE9BQU8sT0FDbEIsS0FDQSxVQUNrQjtBQUNsQixRQUFNLFVBQVUsS0FBSyxLQUFLO0FBRTFCLE1BQUksS0FBSyxZQUFZO0FBRXJCLE1BQUksVUFBVSxVQUFVO0FBQ3hCLE1BQUk7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLFFBQU0sT0FBTyxTQUFTLFdBQVcsSUFBSSxJQUFJO0FBQ3pDLE1BQUksTUFBTSxPQUFPO0FBQ2YsV0FBTyxLQUFLLE9BQU8sb0NBQUMsaUJBQU0sU0FBUyxNQUFNLE9BQU8sQ0FBRTtBQUFBLEVBQ3BEO0FBRUEsT0FBSyxPQUFPLG9DQUFDLGVBQUksY0FBYyxPQUFPLEtBQVUsQ0FBRTtBQUNwRDsiLAogICJuYW1lcyI6IFsiY2xhc3NOYW1lcyIsICJFcnJvciIsICJhdHRycyIsICJjbGFzc05hbWVzIiwgImltcG9ydF9jbGFzc25hbWVzIiwgInNlYXJjaFRlcm0iLCAiY2xhc3NOYW1lcyIsICJpbXBvcnRfY2xhc3NuYW1lcyIsICJjbGFzc05hbWVzIl0KfQo=
