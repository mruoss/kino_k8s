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
      defaultValue: selectedOption,
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

// assets/get_cell/gvk_option.tsx
var GVKOption = ({ gvk }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-gray-400" }, gvk.api_version), /* @__PURE__ */ React.createElement("div", { className: "text-sm" }, gvk.kind));
var gvk_option_default = GVKOption;

// assets/get_cell/app.tsx
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9lcnJvci50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9hdHRyX3N0YXRlLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Zvcm0vaW5wdXQudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9zZWFyY2hfc2VsZWN0LnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL3V0aWxzLnRzIiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9zZWxlY3QudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9nZXRfY2VsbC9ndmtfb3B0aW9uLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvZ2V0X2NlbGwvYXBwLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvZ2V0X2NlbGwvbWFpbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuXHRDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cblx0TGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcblx0aHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIG5hdGl2ZUNvZGVTdHJpbmcgPSAnW25hdGl2ZSBjb2RlXSc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nICYmICFhcmcudG9TdHJpbmcudG9TdHJpbmcoKS5pbmNsdWRlcygnW25hdGl2ZSBjb2RlXScpKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCAiaW50ZXJmYWNlIEVycm9yUHJvcHMge1xuICBtZXNzYWdlOiBzdHJpbmdcbn1cbmNvbnN0IEVycm9yID0gKHsgbWVzc2FnZSB9OiBFcnJvclByb3BzKSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLXJlZC03MDAgYmctcmVkLTEwMCBwLTJcIj5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBmbGV4LW5vbmUgdGV4dC1yZWQtNzAwXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgZD1cIk0xMiA5djMuNzVtLTkuMzAzIDMuMzc2Yy0uODY2IDEuNS4yMTcgMy4zNzQgMS45NDggMy4zNzRoMTQuNzFjMS43MyAwIDIuODEzLTEuODc0IDEuOTQ4LTMuMzc0TDEzLjk0OSAzLjM3OGMtLjg2Ni0xLjUtMy4wMzItMS41LTMuODk4IDBMMi42OTcgMTYuMTI2ek0xMiAxNS43NWguMDA3di4wMDhIMTJ2LS4wMDh6XCJcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWludGVyIHB4LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXJlZC03MDBcIj5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yXG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuXG50eXBlIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPiA9IChcbiAgYXR0ck5hbWU6IHN0cmluZyxcbikgPT4gKEF0dHJWYWx1ZTogQXR0cnNUeXBlW2tleW9mIEF0dHJzVHlwZV0pID0+IHZvaWRcblxuY29uc3QgdXNlQXR0cnNTdGF0ZSA9IDxBdHRyc1R5cGUgZXh0ZW5kcyBvYmplY3Q+KFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBpbml0aWFsQXR0cnM6IEF0dHJzVHlwZSxcbik6IFtBdHRyc1R5cGUsIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPl0gPT4ge1xuICBjb25zdCBbYXR0cnMsIHNldEF0dHJzXSA9IFJlYWN0LnVzZVN0YXRlPEF0dHJzVHlwZT4oaW5pdGlhbEF0dHJzKVxuICBjb25zdCB1cGRhdGVBdHRyOiBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoYXR0ck5hbWUpID0+IChhdHRyVmFsdWUpID0+IHtcbiAgICBzZXRBdHRycygoYXR0cnMpID0+ICh7IC4uLmF0dHJzLCBbYXR0ck5hbWVdOiBhdHRyVmFsdWUgfSkpXG4gICAgY29uc29sZS5sb2coJ1B1c2hpbmcgJHthdHRyTmFtZX0gdG8gc2VydmVyJywgYXR0clZhbHVlKVxuICAgIGN0eC5wdXNoRXZlbnQoYHVwZGF0ZV8ke2F0dHJOYW1lfWAsIGF0dHJWYWx1ZSlcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY3R4LmhhbmRsZUV2ZW50PEF0dHJzVHlwZT4oJ3VwZGF0ZScsICh1cGRhdGVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQXR0cmlidXRlIHVwZGF0ZSBmcm9tIHNlcnZlcicsIHVwZGF0ZXMpXG4gICAgICBzZXRBdHRycygoYXR0cnMpID0+ICh7XG4gICAgICAgIC4uLk9iamVjdC5hc3NpZ24oYXR0cnMsIHVwZGF0ZXMpLFxuICAgICAgfSkpXG4gICAgfSlcbiAgfSwgW10pXG4gIHJldHVybiBbYXR0cnMsIHVwZGF0ZUF0dHJdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUF0dHJzU3RhdGVcbiIsICJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG50eXBlIElucHV0UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIGRlZmF1bHRWYWx1ZTogc3RyaW5nXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvcmllbnRhdGlvbj86ICdob3JpeicgfCAndmVydCdcbn1cbmNvbnN0IElucHV0OiBSZWFjdC5GQzxJbnB1dFByb3BzPiA9ICh7XG4gIG5hbWUsXG4gIGxhYmVsLFxuICBkZWZhdWx0VmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBvcmllbnRhdGlvbiA9ICd2ZXJ0Jyxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAnZmxleCBmbGV4LXJvdyBpdGVtcy1iYXNlbGluZSc6IG9yaWVudGF0aW9uID09ICdob3JpeicsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8bGFiZWxcbiAgICAgICAgaHRtbEZvcj17bmFtZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJsb2NrOiBvcmllbnRhdGlvbiA9PSAndmVydCcsXG4gICAgICAgICAgICAncHItMSB1cHBlcmNhc2UnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ21iLTEgdGV4dC1zbSBmb250LW1lZGl1bScsXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHsgJ2Jsb2NrIHctZnVsbCc6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyB9LFxuICAgICAgICAgICdyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS01MCBwLTEuNSB0ZXh0LXNtIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLWJsdWUtNTAwJyxcbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcbiIsICJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbnR5cGUgU2VhcmNoSW5wdXRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHNlbGVjdGVkVmFsdWU6IHN0cmluZ1xuICBzZWFyY2hUZXJtOiBzdHJpbmdcbiAgb25TZWFyY2g6IChzZWFyY2hUZXJtOiBzdHJpbmcpID0+IHZvaWRcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbn1cblxuY29uc3QgU2VhcmNoSW5wdXQ6IFJlYWN0LkZDPFNlYXJjaElucHV0UHJvcHM+ID0gKHtcbiAgbmFtZSxcbiAgc2VsZWN0ZWRWYWx1ZSxcbiAgc2VhcmNoVGVybSxcbiAgb25TZWFyY2gsXG4gIHBsYWNlaG9sZGVyLFxufTogU2VhcmNoSW5wdXRQcm9wcykgPT4ge1xuICBjb25zdCBwZXJmb3JtU2VhcmNoID0gZGVib3VuY2UoKHNlYXJjaFRlcm0pID0+IHtcbiAgICBvblNlYXJjaChzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gIH0sIDMwMClcbiAgY29uc3QgW2xvY2FsU2VhcmNoVGVybSwgc2V0TG9jYWxTZWFyY2hUZXJtXSA9IFJlYWN0LnVzZVN0YXRlKHNlYXJjaFRlcm0gPz8gJycpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2VsZWN0ZWRWYWx1ZSAmJiBzZXRMb2NhbFNlYXJjaFRlcm0oc2VsZWN0ZWRWYWx1ZSlcbiAgfSwgW3NlbGVjdGVkVmFsdWVdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHBsLTNcIj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxLjV9XG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdoLTUgdy01Jywge1xuICAgICAgICAgICAgICAnYmctZ3JlZW4tMjAwJzogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgJ3RleHQtZ3JlZW4tODAwJzogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgJ2JvcmRlci1ncmVlbi04MDAnOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgICAgICAncm91bmRlZC1sZyc6IHNlbGVjdGVkVmFsdWUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VsZWN0ZWRWYWx1ZSA/IChcbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNOSAxMi43NUwxMS4yNSAxNSAxNSA5Ljc1TTIxIDEyYzAgMS4yNjgtLjYzIDIuMzktMS41OTMgMy4wNjhhMy43NDUgMy43NDUgMCAwMS0xLjA0MyAzLjI5NiAzLjc0NSAzLjc0NSAwIDAxLTMuMjk2IDEuMDQzQTMuNzQ1IDMuNzQ1IDAgMDExMiAyMWMtMS4yNjggMC0yLjM5LS42My0zLjA2OC0xLjU5M2EzLjc0NiAzLjc0NiAwIDAxLTMuMjk2LTEuMDQzIDMuNzQ1IDMuNzQ1IDAgMDEtMS4wNDMtMy4yOTZBMy43NDUgMy43NDUgMCAwMTMgMTJjMC0xLjI2OC42My0yLjM5IDEuNTkzLTMuMDY4YTMuNzQ1IDMuNzQ1IDAgMDExLjA0My0zLjI5NiAzLjc0NiAzLjc0NiAwIDAxMy4yOTYtMS4wNDNBMy43NDYgMy43NDYgMCAwMTEyIDNjMS4yNjggMCAyLjM5LjYzIDMuMDY4IDEuNTkzYTMuNzQ2IDMuNzQ2IDAgMDEzLjI5NiAxLjA0MyAzLjc0NiAzLjc0NiAwIDAxMS4wNDMgMy4yOTZBMy43NDUgMy43NDUgMCAwMTIxIDEyelwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0yMSAyMWwtNS4xOTctNS4xOTdtMCAwQTcuNSA3LjUgMCAxMDUuMTk2IDUuMTk2YTcuNSA3LjUgMCAwMDEwLjYwNyAxMC42MDd6XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e2xvY2FsU2VhcmNoVGVybX1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIG9uSW5wdXQ9eyhlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgc2V0TG9jYWxTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgcGVyZm9ybVNlYXJjaChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS01MCBwLTIgcGwtOSB0ZXh0LXNtIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLWJsdWUtNTAwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbnR5cGUgU2VhcmNoUmVzdWx0UHJvcHM8SXRlbVR5cGU+ID0ge1xuICByZXN1bHRJdGVtczogW0l0ZW1UeXBlXVxuICBpdGVtUmVuZGVyZXI6IChpdGVtOiBJdGVtVHlwZSkgPT4gUmVhY3QuSlNYLkVsZW1lbnRcbiAgb25TZWxlY3Q6IChpdGVtOiBJdGVtVHlwZSkgPT4gdm9pZFxuICByZXN1bHRJdGVtc0tleUZpZWxkOiBrZXlvZiBJdGVtVHlwZVxufVxuXG5jb25zdCBTZWFyY2hSZXN1bHQgPSA8SXRlbVR5cGUsPih7XG4gIHJlc3VsdEl0ZW1zLFxuICBpdGVtUmVuZGVyZXIsXG4gIG9uU2VsZWN0LFxuICByZXN1bHRJdGVtc0tleUZpZWxkLFxufTogU2VhcmNoUmVzdWx0UHJvcHM8SXRlbVR5cGU+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC0zNiBvdmVyZmxvdy1hdXRvIHJvdW5kZWQtYi1sZyBib3JkZXItYiBib3JkZXItbCBib3JkZXItciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1tYXggbWluLXctZnVsbFwiPlxuICAgICAgICB7cmVzdWx0SXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpdGVtW3Jlc3VsdEl0ZW1zS2V5RmllbGRdIGFzIHN0cmluZ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KGl0ZW0pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWItc29saWQgbGFzdDpib3JkZXItYi1ub25lIGN1cnNvci1wb2ludGVyIGJvcmRlci1iIGJvcmRlci1iLWdyYXktMzAwIGJnLWdyYXktNTAgcHgtMiBweS0wLjUgaG92ZXI6YmctYmx1ZS02MDAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2l0ZW1SZW5kZXJlcihpdGVtKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG50eXBlIFNlYXJjaFNlbGVjdFByb3BzID0geyBsYWJlbDogc3RyaW5nOyBjbGFzc05hbWU6IHN0cmluZyB9XG5cbmNvbnN0IFNlYXJjaFNlbGVjdCA9IDxJdGVtVHlwZSw+KHtcbiAgbmFtZSxcbiAgbGFiZWwsXG4gIHNlYXJjaFRlcm0sXG4gIG9uU2VhcmNoLFxuICByZXN1bHRJdGVtcyxcbiAgcmVzdWx0SXRlbXNLZXlGaWVsZCxcbiAgaXRlbVJlbmRlcmVyLFxuICBjbGFzc05hbWUsXG4gIG9uU2VsZWN0LFxuICBzZWxlY3RlZFZhbHVlLFxuICBwbGFjZWhvbGRlcixcbn06IFNlYXJjaElucHV0UHJvcHMgJiBTZWFyY2hSZXN1bHRQcm9wczxJdGVtVHlwZT4gJiBTZWFyY2hTZWxlY3RQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9IGNsYXNzTmFtZT1cIm1iLTEgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cbiAgICAgICAgc2VhcmNoVGVybT17c2VhcmNoVGVybX1cbiAgICAgICAgc2VsZWN0ZWRWYWx1ZT17c2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgLz5cbiAgICAgIHsocmVzdWx0SXRlbXMgJiYgcmVzdWx0SXRlbXMubGVuZ3RoKSA+IDAgJiYgKFxuICAgICAgICA8U2VhcmNoUmVzdWx0XG4gICAgICAgICAgcmVzdWx0SXRlbXM9e3Jlc3VsdEl0ZW1zfVxuICAgICAgICAgIGl0ZW1SZW5kZXJlcj17aXRlbVJlbmRlcmVyfVxuICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgICByZXN1bHRJdGVtc0tleUZpZWxkPXtyZXN1bHRJdGVtc0tleUZpZWxkfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hTZWxlY3RcbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5pbXBvcnQgeyBBdHRyaWJ1dGVzIH0gZnJvbSAnLi90eXBlcydcblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBjYWxsYmFjazogVCxcbiAgdGltZW91dDogbnVtYmVyLFxuKTogKCguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB2b2lkKSA9PiB7XG4gIGxldCB0aW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD5cblxuICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpXG4gICAgfSwgdGltZW91dClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZFJlYWN0ID0gYXN5bmMgPFQ+KFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBhdHRyczogQXR0cmlidXRlcyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoYXR0cnMubWl4X2VudiA9PSAncHJvZCcpIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE4L3VtZC9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxOC4yLjAvdW1kL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycsXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUygnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3RAMTgvdW1kL3JlYWN0LmRldmVsb3BtZW50LmpzJylcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICAnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtZG9tQDE4LjIuMC91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyxcbiAgICApXG4gIH1cbn1cbiIsICJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG50eXBlIFNlbGVjdFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBvcHRpb25zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdXG4gIHNlbGVjdGVkT3B0aW9uPzogc3RyaW5nXG4gIG9uQ2hhbmdlOiAob3B0aW9uOiBzdHJpbmcpID0+IHZvaWRcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIG9yaWVudGF0aW9uPzogJ2hvcml6JyB8ICd2ZXJ0J1xufVxuXG5jb25zdCBTZWxlY3QgPSAoe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgb3B0aW9ucyxcbiAgc2VsZWN0ZWRPcHRpb24sXG4gIG9uQ2hhbmdlLFxuICBjbGFzc05hbWUgPSAnJyxcbiAgb3JpZW50YXRpb24gPSAndmVydCcsXG59OiBTZWxlY3RQcm9wcykgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAge1xuICAgICAgICAnZmxleCBmbGV4LXJvdyBpdGVtcy1iYXNlbGluZSc6IG9yaWVudGF0aW9uID09ICdob3JpeicsXG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gID5cbiAgICA8bGFiZWxcbiAgICAgIGh0bWxGb3I9e25hbWV9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIHtcbiAgICAgICAgICBibG9jazogb3JpZW50YXRpb24gPT0gJ3ZlcnQnLFxuICAgICAgICAgICdwci0xIHVwcGVyY2FzZSc6IG9yaWVudGF0aW9uID09ICdob3JpeicsXG4gICAgICAgIH0sXG4gICAgICAgICdtYi0xIHRleHQtc20gZm9udC1tZWRpdW0nLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9sYWJlbD5cbiAgICA8c2VsZWN0XG4gICAgICBpZD17bmFtZX1cbiAgICAgIGRlZmF1bHRWYWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUhLnRhcmdldCEudmFsdWUpfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICB7ICdibG9jayB3LWZ1bGwnOiBvcmllbnRhdGlvbiA9PSAndmVydCcgfSxcbiAgICAgICAgJyBhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktNTAgYmctY2FyZXQtZG93biBiZy1bbGVuZ3RoOjEwcHhdIGJnLVtjZW50ZXJfcmlnaHRfMTBweF0gYmctbm8tcmVwZWF0IHAtMiBwci01IHRleHQtc20gZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmctYmx1ZS01MDAnLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cbiAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICkpfVxuICAgIDwvc2VsZWN0PlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0XG4iLCAiaW1wb3J0IHsgR1ZLIH0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IEdWS09wdGlvbiA9ICh7IGd2ayB9OiB7IGd2azogR1ZLIH0pID0+IChcbiAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMFwiPntndmsuYXBpX3ZlcnNpb259PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e2d2ay5raW5kfTwvZGl2PlxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgR1ZLT3B0aW9uXG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuaW1wb3J0IHVzZUF0dHJzU3RhdGUgZnJvbSAnLi4vc2hhcmVkL2F0dHJfc3RhdGUnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vc2hhcmVkL2Zvcm0vaW5wdXQnXG5pbXBvcnQgU2VhcmNoU2VsZWN0IGZyb20gJy4uL3NoYXJlZC9mb3JtL3NlYXJjaF9zZWxlY3QnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL3NoYXJlZC9mb3JtL3NlbGVjdCdcbmltcG9ydCBHVktPcHRpb24gZnJvbSAnLi9ndmtfb3B0aW9uJ1xuaW1wb3J0IHsgR0VUQ2VsbEF0dHJzLCBHVksgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuICBpbml0aWFsQXR0cnM6IEdFVENlbGxBdHRyc1xuICBjdHg6IEtpbm9Db250ZXh0XG59XG5cbmNvbnN0IEFwcCA9ICh7IGluaXRpYWxBdHRycywgY3R4IH06IEFwcFByb3BzKSA9PiB7XG4gIGNvbnN0IFthdHRycywgdXBkYXRlQXR0cl0gPSB1c2VBdHRyc1N0YXRlKGN0eCwgaW5pdGlhbEF0dHJzKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMCBmb250LWludGVyIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItc29saWQgZmxleCBnYXAteC01IGdhcC15LTMgYm9yZGVyLWIgYm9yZGVyLWItZ3JheS0zMDAgYmctYmx1ZS0xMDAgcC0zXCI+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBuYW1lPVwiY29ubmVjdGlvblwiXG4gICAgICAgICAgbGFiZWw9XCJDb25uZWN0aW9uXCJcbiAgICAgICAgICBvcHRpb25zPXthdHRycy5jb25uZWN0aW9ucy5tYXAoKGNvbm5lY3Rpb24pID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogY29ubmVjdGlvbi52YXJpYWJsZSxcbiAgICAgICAgICAgIHZhbHVlOiBjb25uZWN0aW9uLnZhcmlhYmxlLFxuICAgICAgICAgIH0pKX1cbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnMuY29ubmVjdGlvbj8udmFyaWFibGU/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ2Nvbm5lY3Rpb24nKX1cbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6XCJcbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgbGFiZWw9XCJBc3NpZ24gVG9cIlxuICAgICAgICAgIG5hbWU9XCJhc3NpZ25fdG9cIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YXR0cnNbJ3Jlc3VsdF92YXJpYWJsZSddfVxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBdHRyKCdyZXN1bHRfdmFyaWFibGUnKX1cbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTUgcC0zXCI+XG4gICAgICAgIHthdHRycy5jb25uZWN0aW9uICYmIChcbiAgICAgICAgICA8U2VhcmNoU2VsZWN0PEdWSz5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LWZ1bGxcIlxuICAgICAgICAgICAgbmFtZT1cImd2a1wiXG4gICAgICAgICAgICBsYWJlbD1cIlJlc291cmNlIEtpbmRcIlxuICAgICAgICAgICAgb25TZWFyY2g9e3VwZGF0ZUF0dHIoJ3NlYXJjaF90ZXJtJyl9XG4gICAgICAgICAgICBzZWFyY2hUZXJtPXthdHRyc1snc2VhcmNoX3Rlcm0nXX1cbiAgICAgICAgICAgIHJlc3VsdEl0ZW1zS2V5RmllbGQ9eydpbmRleCd9XG4gICAgICAgICAgICByZXN1bHRJdGVtcz17YXR0cnNbJ3NlYXJjaF9yZXN1bHRfaXRlbXMnXX1cbiAgICAgICAgICAgIG9uU2VsZWN0PXt1cGRhdGVBdHRyKCdndmsnKX1cbiAgICAgICAgICAgIGl0ZW1SZW5kZXJlcj17KGl0ZW06IEdWSykgPT4gPEdWS09wdGlvbiBndms9e2l0ZW19IC8+fVxuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZT17YXR0cnNbJ2d2ayddPy5raW5kfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhcHBzL3YxIERlcGxveW1lbnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHthdHRyc1snbmFtZXNwYWNlcyddICYmIChcbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwibmFtZXNwYWNlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZXNwYWNlXCJcbiAgICAgICAgICAgIG9wdGlvbnM9e2F0dHJzLm5hbWVzcGFjZXMubWFwKChucykgPT4gKHtcbiAgICAgICAgICAgICAgbGFiZWw6IG5zLFxuICAgICAgICAgICAgICB2YWx1ZTogbnMsXG4gICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnNbJ25hbWVzcGFjZSddfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ25hbWVzcGFjZScpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHthdHRyc1sncmVzb3VyY2VzJ10gJiYgKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJyZXNvdXJjZVwiXG4gICAgICAgICAgICBsYWJlbD1cIlJlc291cmNlIE5hbWVcIlxuICAgICAgICAgICAgb3B0aW9ucz17YXR0cnMucmVzb3VyY2VzLm1hcCgobnMpID0+ICh7XG4gICAgICAgICAgICAgIGxhYmVsOiBucyxcbiAgICAgICAgICAgICAgdmFsdWU6IG5zLFxuICAgICAgICAgICAgfSkpfVxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2F0dHJzWydyZXNvdXJjZSddfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ3Jlc291cmNlJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCBFcnJvciBmcm9tICcuLi9zaGFyZWQvZXJyb3InXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuaW1wb3J0IHsgR0VUQ2VsbEF0dHJzIH0gZnJvbSAnLi90eXBlcydcblxuY29uc3QgbG9hZFJlYWN0ID0gYXN5bmMgKFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBhdHRyczogR0VUQ2VsbEF0dHJzLFxuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGlmIChhdHRycy5taXhfZW52ID09ICdwcm9kJykge1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUygnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3RAMTgvdW1kL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJylcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICAnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtZG9tQDE4LjIuMC91bWQvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzJyxcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKCdodHRwczovL3VucGtnLmNvbS9yZWFjdEAxOC91bWQvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKVxuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcbiAgICAgICdodHRwczovL3VucGtnLmNvbS9yZWFjdC1kb21AMTguMi4wL3VtZC9yZWFjdC1kb20uZGV2ZWxvcG1lbnQuanMnLFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaW5pdCA9IGFzeW5jIChcbiAgY3R4OiBLaW5vQ29udGV4dCxcbiAgYXR0cnM6IEdFVENlbGxBdHRycyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBhd2FpdCBsb2FkUmVhY3QoY3R4LCBhdHRycylcblxuICBjdHgucm9vdC5pbm5lckhUTUwgPSAnbG9hZGluZy4uLidcblxuICBjdHguaW1wb3J0Q1NTKCdtYWluLmNzcycpXG4gIGN0eC5pbXBvcnRDU1MoXG4gICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCcsXG4gIClcblxuICBjb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChjdHgucm9vdClcbiAgaWYgKGF0dHJzLmVycm9yKSB7XG4gICAgcmV0dXJuIHJvb3QucmVuZGVyKDxFcnJvciBtZXNzYWdlPXthdHRycy5lcnJvcn0gLz4pXG4gIH1cblxuICByb290LnJlbmRlcig8QXBwIGluaXRpYWxBdHRycz17YXR0cnN9IGN0eD17Y3R4fSAvPilcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFPQSxLQUFDLFdBQVk7QUFDWjtBQUVBLFVBQUksU0FBUyxDQUFDLEVBQUU7QUFDaEIsVUFBSSxtQkFBbUI7QUFFdkIsZUFBU0EsY0FBYTtBQUNyQixZQUFJLFVBQVUsQ0FBQztBQUVmLGlCQUFTLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQzFDLGNBQUksTUFBTSxVQUFVLENBQUM7QUFDckIsY0FBSSxDQUFDO0FBQUs7QUFFVixjQUFJLFVBQVUsT0FBTztBQUVyQixjQUFJLFlBQVksWUFBWSxZQUFZLFVBQVU7QUFDakQsb0JBQVEsS0FBSyxHQUFHO0FBQUEsVUFDakIsV0FBVyxNQUFNLFFBQVEsR0FBRyxHQUFHO0FBQzlCLGdCQUFJLElBQUksUUFBUTtBQUNmLGtCQUFJLFFBQVFBLFlBQVcsTUFBTSxNQUFNLEdBQUc7QUFDdEMsa0JBQUksT0FBTztBQUNWLHdCQUFRLEtBQUssS0FBSztBQUFBLGNBQ25CO0FBQUEsWUFDRDtBQUFBLFVBQ0QsV0FBVyxZQUFZLFVBQVU7QUFDaEMsZ0JBQUksSUFBSSxhQUFhLE9BQU8sVUFBVSxZQUFZLENBQUMsSUFBSSxTQUFTLFNBQVMsRUFBRSxTQUFTLGVBQWUsR0FBRztBQUNyRyxzQkFBUSxLQUFLLElBQUksU0FBUyxDQUFDO0FBQzNC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SyxNQUFNO0FBQUEsTUFDbkQsZUFBZSxNQUFNLEtBQUssR0FBRztBQUFBLE1BQzdCLGFBQVk7QUFBQTtBQUFBLEVBQ2QsR0FFRCxNQUFNLFlBQVksS0FDakI7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQSxNQUNOLFNBQVMsTUFBTSxXQUFXLElBQUksQ0FBQyxRQUFRO0FBQUEsUUFDckMsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLE1BQ1QsRUFBRTtBQUFBLE1BQ0YsZ0JBQWdCLE1BQU0sV0FBVztBQUFBLE1BQ2pDLFVBQVUsV0FBVyxXQUFXO0FBQUE7QUFBQSxFQUNsQyxHQUVELE1BQU0sV0FBVyxLQUNoQjtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsTUFBSztBQUFBLE1BQ0wsT0FBTTtBQUFBLE1BQ04sU0FBUyxNQUFNLFVBQVUsSUFBSSxDQUFDLFFBQVE7QUFBQSxRQUNwQyxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsTUFDVCxFQUFFO0FBQUEsTUFDRixnQkFBZ0IsTUFBTSxVQUFVO0FBQUEsTUFDaEMsVUFBVSxXQUFXLFVBQVU7QUFBQTtBQUFBLEVBQ2pDLENBRUosQ0FDRjtBQUVKO0FBRUEsSUFBTyxjQUFROzs7QUM3RWYsSUFBTSxZQUFZLE9BQ2hCLEtBQ0EsVUFDa0I7QUFDbEIsTUFBSSxNQUFNLFdBQVcsUUFBUTtBQUMzQixVQUFNLElBQUksU0FBUyx3REFBd0Q7QUFDM0UsVUFBTSxJQUFJO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGLE9BQU87QUFDTCxVQUFNLElBQUksU0FBUyxxREFBcUQ7QUFDeEUsVUFBTSxJQUFJO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLE9BQU8sT0FDbEIsS0FDQSxVQUNrQjtBQUNsQixRQUFNLFVBQVUsS0FBSyxLQUFLO0FBRTFCLE1BQUksS0FBSyxZQUFZO0FBRXJCLE1BQUksVUFBVSxVQUFVO0FBQ3hCLE1BQUk7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLFFBQU0sT0FBTyxTQUFTLFdBQVcsSUFBSSxJQUFJO0FBQ3pDLE1BQUksTUFBTSxPQUFPO0FBQ2YsV0FBTyxLQUFLLE9BQU8sb0NBQUMsaUJBQU0sU0FBUyxNQUFNLE9BQU8sQ0FBRTtBQUFBLEVBQ3BEO0FBRUEsT0FBSyxPQUFPLG9DQUFDLGVBQUksY0FBYyxPQUFPLEtBQVUsQ0FBRTtBQUNwRDsiLAogICJuYW1lcyI6IFsiY2xhc3NOYW1lcyIsICJFcnJvciIsICJhdHRycyIsICJjbGFzc05hbWVzIiwgImltcG9ydF9jbGFzc25hbWVzIiwgInNlYXJjaFRlcm0iLCAiY2xhc3NOYW1lcyIsICJpbXBvcnRfY2xhc3NuYW1lcyIsICJjbGFzc05hbWVzIl0KfQo=
