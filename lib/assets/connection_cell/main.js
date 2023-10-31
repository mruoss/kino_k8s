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

// assets/shared/utils.ts
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
      value: selectedOption || void 0,
      onChange: (e) => onChange(e.target.value),
      className: (0, import_classnames2.default)(
        { "block w-full": orientation == "vert" },
        " bg-caret-down appearance-none rounded-lg border border-gray-300 bg-gray-50 bg-[length:10px] bg-[center_right_10px] bg-no-repeat p-2 pr-5 text-sm focus:border-blue-500 focus:ring-blue-500"
      )
    },
    options.map((option) => /* @__PURE__ */ React.createElement("option", { key: option.value, value: option.value }, option.label))
  )
);
var select_default = Select;

// assets/connection_cell/app.tsx
var App = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = attr_state_default(ctx, initialAttrs);
  const source_type_options = [
    { label: "File", value: "file" },
    { label: "Environment Variable", value: "env" }
  ];
  source_type_options.push({ label: "K8s Service Account", value: "k8s" });
  return /* @__PURE__ */ React.createElement("div", { className: "rounded-md border border-solid border-gray-300 font-inter font-medium text-gray-600" }, /* @__PURE__ */ React.createElement("div", { className: "border-b-solid flex flex-wrap gap-x-5 gap-y-3 border-b border-b-gray-300 bg-blue-100 p-3" }, /* @__PURE__ */ React.createElement(
    select_default,
    {
      name: "source_type",
      label: "Source Type",
      options: source_type_options,
      selectedOption: attrs["source_type"],
      onChange: updateAttr("source_type"),
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
  )), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-x-5 p-3" }, attrs["source_type"] != "k8s" && /* @__PURE__ */ React.createElement(
    input_default,
    {
      label: attrs["source_type"] == "file" ? "File Path" : "Env Var",
      name: "source",
      defaultValue: attrs["source"],
      onChange: updateAttr("source"),
      orientation: "vert"
    }
  ), attrs["source_type"] != "k8s" && /* @__PURE__ */ React.createElement(
    input_default,
    {
      label: "Context",
      name: "context",
      defaultValue: attrs.opts.context || "",
      onChange: (value) => updateAttr("opts")({ ...attrs.opts, context: value })
    }
  ), /* @__PURE__ */ React.createElement(
    select_default,
    {
      name: "insecure_skip_tls_verify",
      label: "Insecure Skip TLS Verify",
      options: [
        { label: "Yes", value: "true" },
        { label: "No", value: "false" }
      ],
      selectedOption: attrs.opts.insecure_skip_tls_verify.toString(),
      onChange: (value) => updateAttr("opts")({
        ...attrs.opts,
        insecure_skip_tls_verify: JSON.parse(value)
      })
    }
  )));
};
var app_default = App;

// assets/connection_cell/main.tsx
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9lcnJvci50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC91dGlscy50cyIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2F0dHJfc3RhdGUudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9pbnB1dC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9mb3JtL3NlbGVjdC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL2Nvbm5lY3Rpb25fY2VsbC9hcHAudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9jb25uZWN0aW9uX2NlbGwvbWFpbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuXHRDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cblx0TGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcblx0aHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIG5hdGl2ZUNvZGVTdHJpbmcgPSAnW25hdGl2ZSBjb2RlXSc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nICYmICFhcmcudG9TdHJpbmcudG9TdHJpbmcoKS5pbmNsdWRlcygnW25hdGl2ZSBjb2RlXScpKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCAiaW50ZXJmYWNlIEVycm9yUHJvcHMge1xuICBtZXNzYWdlOiBzdHJpbmdcbn1cbmNvbnN0IEVycm9yID0gKHsgbWVzc2FnZSB9OiBFcnJvclByb3BzKSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLXJlZC03MDAgYmctcmVkLTEwMCBwLTJcIj5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBmbGV4LW5vbmUgdGV4dC1yZWQtNzAwXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgZD1cIk0xMiA5djMuNzVtLTkuMzAzIDMuMzc2Yy0uODY2IDEuNS4yMTcgMy4zNzQgMS45NDggMy4zNzRoMTQuNzFjMS43MyAwIDIuODEzLTEuODc0IDEuOTQ4LTMuMzc0TDEzLjk0OSAzLjM3OGMtLjg2Ni0xLjUtMy4wMzItMS41LTMuODk4IDBMMi42OTcgMTYuMTI2ek0xMiAxNS43NWguMDA3di4wMDhIMTJ2LS4wMDh6XCJcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWludGVyIHB4LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXJlZC03MDBcIj5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yXG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuaW1wb3J0IHsgQXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnXG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgY2FsbGJhY2s6IFQsXG4gIHRpbWVvdXQ6IG51bWJlcixcbik6ICgoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4gdm9pZCkgPT4ge1xuICBsZXQgdGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+XG5cbiAgcmV0dXJuICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjayguLi5hcmdzKVxuICAgIH0sIHRpbWVvdXQpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRSZWFjdCA9IGFzeW5jIChcbiAgY3R4OiBLaW5vQ29udGV4dCxcbiAgYXR0cnM6IEF0dHJpYnV0ZXMsXG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKGF0dHJzLm1peF9lbnYgPT0gJ2RldicpIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QvMTguMi4wL3VtZC9yZWFjdC5kZXZlbG9wbWVudC5qcycsXG4gICAgKVxuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcbiAgICAgICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC1kb20vMTguMi4wL3VtZC9yZWFjdC1kb20uZGV2ZWxvcG1lbnQubWluLmpzJyxcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LzE4LjIuMC91bWQvcmVhY3QucHJvZHVjdGlvbi5qcycsXG4gICAgKVxuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcbiAgICAgICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC1kb20vMTguMi4wL3VtZC9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnLFxuICAgIClcbiAgfVxufVxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcblxudHlwZSBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoXG4gIGF0dHJOYW1lOiBzdHJpbmcsXG4pID0+IChBdHRyVmFsdWU6IEF0dHJzVHlwZVtrZXlvZiBBdHRyc1R5cGVdKSA9PiB2b2lkXG5cbmNvbnN0IHVzZUF0dHJzU3RhdGUgPSA8QXR0cnNUeXBlIGV4dGVuZHMgb2JqZWN0PihcbiAgY3R4OiBLaW5vQ29udGV4dCxcbiAgaW5pdGlhbEF0dHJzOiBBdHRyc1R5cGUsXG4pOiBbQXR0cnNUeXBlLCBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT5dID0+IHtcbiAgY29uc3QgW2F0dHJzLCBzZXRBdHRyc10gPSBSZWFjdC51c2VTdGF0ZTxBdHRyc1R5cGU+KGluaXRpYWxBdHRycylcbiAgY29uc3QgdXBkYXRlQXR0cjogVXBkYXRlQXR0ckZ1bjxBdHRyc1R5cGU+ID0gKGF0dHJOYW1lKSA9PiAoYXR0clZhbHVlKSA9PiB7XG4gICAgc2V0QXR0cnMoKGF0dHJzKSA9PiAoeyAuLi5hdHRycywgW2F0dHJOYW1lXTogYXR0clZhbHVlIH0pKVxuICAgIGNvbnNvbGUubG9nKCdQdXNoaW5nICR7YXR0ck5hbWV9IHRvIHNlcnZlcicsIGF0dHJWYWx1ZSlcbiAgICBjdHgucHVzaEV2ZW50KGB1cGRhdGVfJHthdHRyTmFtZX1gLCBhdHRyVmFsdWUpXG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGN0eC5oYW5kbGVFdmVudDxBdHRyc1R5cGU+KCd1cGRhdGUnLCAodXBkYXRlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0F0dHJpYnV0ZSB1cGRhdGUgZnJvbSBzZXJ2ZXInLCB1cGRhdGVzKVxuICAgICAgc2V0QXR0cnMoKGF0dHJzKSA9PiAoe1xuICAgICAgICAuLi5PYmplY3QuYXNzaWduKGF0dHJzLCB1cGRhdGVzKSxcbiAgICAgIH0pKVxuICAgIH0pXG4gIH0sIFtdKVxuICByZXR1cm4gW2F0dHJzLCB1cGRhdGVBdHRyXVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VBdHRyc1N0YXRlXG4iLCAiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxudHlwZSBJbnB1dFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBkZWZhdWx0VmFsdWU6IHN0cmluZ1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgb3JpZW50YXRpb24/OiAnaG9yaXonIHwgJ3ZlcnQnXG59XG5jb25zdCBJbnB1dDogUmVhY3QuRkM8SW5wdXRQcm9wcz4gPSAoe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgZGVmYXVsdFZhbHVlLFxuICBvbkNoYW5nZSxcbiAgb3JpZW50YXRpb24gPSAndmVydCcsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgJ2ZsZXggZmxleC1yb3cgaXRlbXMtYmFzZWxpbmUnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9e25hbWV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICBibG9jazogb3JpZW50YXRpb24gPT0gJ3ZlcnQnLFxuICAgICAgICAgICAgJ3ByLTEgdXBwZXJjYXNlJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICdtYi0xIHRleHQtc20gZm9udC1tZWRpdW0nLFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICB7ICdibG9jayB3LWZ1bGwnOiBvcmllbnRhdGlvbiA9PSAndmVydCcgfSxcbiAgICAgICAgICAncm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktNTAgcC0xLjUgdGV4dC1zbSBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy1ibHVlLTUwMCcsXG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG4iLCAiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxudHlwZSBTZWxlY3RQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgb3B0aW9uczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXVxuICBzZWxlY3RlZE9wdGlvbj86IHN0cmluZ1xuICBvbkNoYW5nZTogKG9wdGlvbjogc3RyaW5nKSA9PiB2b2lkXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBvcmllbnRhdGlvbj86ICdob3JpeicgfCAndmVydCdcbn1cblxuY29uc3QgU2VsZWN0ID0gKHtcbiAgbmFtZSxcbiAgbGFiZWwsXG4gIG9wdGlvbnMsXG4gIHNlbGVjdGVkT3B0aW9uLFxuICBvbkNoYW5nZSxcbiAgY2xhc3NOYW1lID0gJycsXG4gIG9yaWVudGF0aW9uID0gJ3ZlcnQnLFxufTogU2VsZWN0UHJvcHMpID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgIHtcbiAgICAgICAgJ2ZsZXggZmxleC1yb3cgaXRlbXMtYmFzZWxpbmUnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICA+XG4gICAgPGxhYmVsXG4gICAgICBodG1sRm9yPXtuYW1lfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICB7XG4gICAgICAgICAgYmxvY2s6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyxcbiAgICAgICAgICAncHItMSB1cHBlcmNhc2UnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgICB9LFxuICAgICAgICAnbWItMSB0ZXh0LXNtIGZvbnQtbWVkaXVtJyxcbiAgICAgICl9XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvbGFiZWw+XG4gICAgPHNlbGVjdFxuICAgICAgaWQ9e25hbWV9XG4gICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb24gfHwgdW5kZWZpbmVkfVxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlIS50YXJnZXQhLnZhbHVlKX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgeyAnYmxvY2sgdy1mdWxsJzogb3JpZW50YXRpb24gPT0gJ3ZlcnQnIH0sXG4gICAgICAgICcgYmctY2FyZXQtZG93biBhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktNTAgYmctW2xlbmd0aDoxMHB4XSBiZy1bY2VudGVyX3JpZ2h0XzEwcHhdIGJnLW5vLXJlcGVhdCBwLTIgcHItNSB0ZXh0LXNtIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLWJsdWUtNTAwJyxcbiAgICAgICl9XG4gICAgPlxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XG4gICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApKX1cbiAgICA8L3NlbGVjdD5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCB1c2VBdHRyc1N0YXRlIGZyb20gJy4uL3NoYXJlZC9hdHRyX3N0YXRlJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uL3NoYXJlZC9mb3JtL2lucHV0J1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9zaGFyZWQvZm9ybS9zZWxlY3QnXG5pbXBvcnQgeyBDb25uZWN0aW9uQ2VsbEF0dHJzIH0gZnJvbSAnLi90eXBlcydcblxuaW50ZXJmYWNlIEFwcFByb3BzIHtcbiAgaW5pdGlhbEF0dHJzOiBDb25uZWN0aW9uQ2VsbEF0dHJzXG4gIGN0eDogS2lub0NvbnRleHRcbn1cblxuY29uc3QgQXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBpbml0aWFsQXR0cnMsIGN0eCB9KSA9PiB7XG4gIGNvbnN0IFthdHRycywgdXBkYXRlQXR0cl0gPSB1c2VBdHRyc1N0YXRlKGN0eCwgaW5pdGlhbEF0dHJzKVxuICBjb25zdCBzb3VyY2VfdHlwZV9vcHRpb25zID0gW1xuICAgIHsgbGFiZWw6ICdGaWxlJywgdmFsdWU6ICdmaWxlJyB9LFxuICAgIHsgbGFiZWw6ICdFbnZpcm9ubWVudCBWYXJpYWJsZScsIHZhbHVlOiAnZW52JyB9LFxuICBdXG4gIC8vIGlmIChhdHRyc1sncnVubmluZ19vbl9rOHMnXSlcbiAgc291cmNlX3R5cGVfb3B0aW9ucy5wdXNoKHsgbGFiZWw6ICdLOHMgU2VydmljZSBBY2NvdW50JywgdmFsdWU6ICdrOHMnIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS0zMDAgZm9udC1pbnRlciBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iLXNvbGlkIGZsZXggZmxleC13cmFwIGdhcC14LTUgZ2FwLXktMyBib3JkZXItYiBib3JkZXItYi1ncmF5LTMwMCBiZy1ibHVlLTEwMCBwLTNcIj5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG5hbWU9XCJzb3VyY2VfdHlwZVwiXG4gICAgICAgICAgbGFiZWw9XCJTb3VyY2UgVHlwZVwiXG4gICAgICAgICAgb3B0aW9ucz17c291cmNlX3R5cGVfb3B0aW9uc31cbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnNbJ3NvdXJjZV90eXBlJ119XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ3NvdXJjZV90eXBlJyl9XG4gICAgICAgICAgb3JpZW50YXRpb249XCJob3JpelwiXG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGxhYmVsPVwiQXNzaWduIFRvXCJcbiAgICAgICAgICBuYW1lPVwiYXNzaWduX3RvXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2F0dHJzWydyZXN1bHRfdmFyaWFibGUnXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cigncmVzdWx0X3ZhcmlhYmxlJyl9XG4gICAgICAgICAgb3JpZW50YXRpb249XCJob3JpelwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLXgtNSBwLTNcIj5cbiAgICAgICAge2F0dHJzWydzb3VyY2VfdHlwZSddICE9ICdrOHMnICYmIChcbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIGxhYmVsPXthdHRyc1snc291cmNlX3R5cGUnXSA9PSAnZmlsZScgPyAnRmlsZSBQYXRoJyA6ICdFbnYgVmFyJ31cbiAgICAgICAgICAgIG5hbWU9XCJzb3VyY2VcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthdHRyc1snc291cmNlJ119XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cignc291cmNlJyl9XG4gICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHthdHRyc1snc291cmNlX3R5cGUnXSAhPSAnazhzJyAmJiAoXG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIkNvbnRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImNvbnRleHRcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthdHRycy5vcHRzLmNvbnRleHQgfHwgJyd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICB1cGRhdGVBdHRyKCdvcHRzJykoeyAuLi5hdHRycy5vcHRzLCBjb250ZXh0OiB2YWx1ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBuYW1lPVwiaW5zZWN1cmVfc2tpcF90bHNfdmVyaWZ5XCJcbiAgICAgICAgICBsYWJlbD1cIkluc2VjdXJlIFNraXAgVExTIFZlcmlmeVwiXG4gICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgeyBsYWJlbDogJ1llcycsIHZhbHVlOiAndHJ1ZScgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdObycsIHZhbHVlOiAnZmFsc2UnIH0sXG4gICAgICAgICAgXX1cbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnMub3B0cy5pbnNlY3VyZV9za2lwX3Rsc192ZXJpZnkudG9TdHJpbmcoKX1cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgdXBkYXRlQXR0cignb3B0cycpKHtcbiAgICAgICAgICAgICAgLi4uYXR0cnMub3B0cyxcbiAgICAgICAgICAgICAgaW5zZWN1cmVfc2tpcF90bHNfdmVyaWZ5OiBKU09OLnBhcnNlKHZhbHVlKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuaW1wb3J0IEVycm9yIGZyb20gJy4uL3NoYXJlZC9lcnJvcidcbmltcG9ydCB7IGxvYWRSZWFjdCB9IGZyb20gJy4uL3NoYXJlZC91dGlscydcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnXG5pbXBvcnQgeyBDb25uZWN0aW9uQ2VsbEF0dHJzIH0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IGluaXQgPSBhc3luYyAoXG4gIGN0eDogS2lub0NvbnRleHQsXG4gIGF0dHJzOiBDb25uZWN0aW9uQ2VsbEF0dHJzLFxuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGF3YWl0IGxvYWRSZWFjdChjdHgsIGF0dHJzKVxuXG4gIGN0eC5yb290LmlubmVySFRNTCA9ICdsb2FkaW5nLi4uJ1xuXG4gIGN0eC5pbXBvcnRDU1MoJ21haW4uY3NzJylcbiAgY3R4LmltcG9ydENTUyhcbiAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyxcbiAgKVxuXG4gIGNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGN0eC5yb290KVxuICBpZiAoYXR0cnMuZXJyb3IpIHtcbiAgICByZXR1cm4gcm9vdC5yZW5kZXIoPEVycm9yIG1lc3NhZ2U9e2F0dHJzLmVycm9yfSAvPilcbiAgfVxuXG4gIHJvb3QucmVuZGVyKDxBcHAgaW5pdGlhbEF0dHJzPXthdHRyc30gY3R4PXtjdHh9IC8+KVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQU9BLEtBQUMsV0FBWTtBQUNaO0FBRUEsVUFBSSxTQUFTLENBQUMsRUFBRTtBQUNoQixVQUFJLG1CQUFtQjtBQUV2QixlQUFTQSxjQUFhO0FBQ3JCLFlBQUksVUFBVSxDQUFDO0FBRWYsaUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUs7QUFDMUMsY0FBSSxNQUFNLFVBQVUsQ0FBQztBQUNyQixjQUFJLENBQUM7QUFBSztBQUVWLGNBQUksVUFBVSxPQUFPO0FBRXJCLGNBQUksWUFBWSxZQUFZLFlBQVksVUFBVTtBQUNqRCxvQkFBUSxLQUFLLEdBQUc7QUFBQSxVQUNqQixXQUFXLE1BQU0sUUFBUSxHQUFHLEdBQUc7QUFDOUIsZ0JBQUksSUFBSSxRQUFRO0FBQ2Ysa0JBQUksUUFBUUEsWUFBVyxNQUFNLE1BQU0sR0FBRztBQUN0QyxrQkFBSSxPQUFPO0FBQ1Ysd0JBQVEsS0FBSyxLQUFLO0FBQUEsY0FDbkI7QUFBQSxZQUNEO0FBQUEsVUFDRCxXQUFXLFlBQVksVUFBVTtBQUNoQyxnQkFBSSxJQUFJLGFBQWEsT0FBTyxVQUFVLFlBQVksQ0FBQyxJQUFJLFNBQVMsU0FBUyxFQUFFLFNBQVMsZUFBZSxHQUFHO0FBQ3JHLHNCQUFRLEtBQUssSUFBSSxTQUFTLENBQUM7QUFDM0I7QUFBQSxZQUNEO0FBRUEscUJBQVMsT0FBTyxLQUFLO0FBQ3BCLGtCQUFJLE9BQU8sS0FBSyxLQUFLLEdBQUcsS0FBSyxJQUFJLEdBQUcsR0FBRztBQUN0Qyx3QkFBUSxLQUFLLEdBQUc7QUFBQSxjQUNqQjtBQUFBLFlBQ0Q7QUFBQSxVQUNEO0FB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LFdBQVcsTUFBTSxFQUFFLEVBQUUsR0FBRyxNQUFNLE1BQU0sU0FBUyxNQUFNLENBQUM7QUFBQTtBQUFBLEVBRXhELEdBRUY7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxRQUNQLEVBQUUsT0FBTyxPQUFPLE9BQU8sT0FBTztBQUFBLFFBQzlCLEVBQUUsT0FBTyxNQUFNLE9BQU8sUUFBUTtBQUFBLE1BQ2hDO0FBQUEsTUFDQSxnQkFBZ0IsTUFBTSxLQUFLLHlCQUF5QixTQUFTO0FBQUEsTUFDN0QsVUFBVSxDQUFDLFVBQ1QsV0FBVyxNQUFNLEVBQUU7QUFBQSxRQUNqQixHQUFHLE1BQU07QUFBQSxRQUNULDBCQUEwQixLQUFLLE1BQU0sS0FBSztBQUFBLE1BQzVDLENBQUM7QUFBQTtBQUFBLEVBRUwsQ0FDRixDQUNGO0FBRUo7QUFFQSxJQUFPLGNBQVE7OztBQ3pFUixJQUFNLE9BQU8sT0FDbEIsS0FDQSxVQUNrQjtBQUNsQixRQUFNLFVBQVUsS0FBSyxLQUFLO0FBRTFCLE1BQUksS0FBSyxZQUFZO0FBRXJCLE1BQUksVUFBVSxVQUFVO0FBQ3hCLE1BQUk7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLFFBQU0sT0FBTyxTQUFTLFdBQVcsSUFBSSxJQUFJO0FBQ3pDLE1BQUksTUFBTSxPQUFPO0FBQ2YsV0FBTyxLQUFLLE9BQU8sb0NBQUMsaUJBQU0sU0FBUyxNQUFNLE9BQU8sQ0FBRTtBQUFBLEVBQ3BEO0FBRUEsT0FBSyxPQUFPLG9DQUFDLGVBQUksY0FBYyxPQUFPLEtBQVUsQ0FBRTtBQUNwRDsiLAogICJuYW1lcyI6IFsiY2xhc3NOYW1lcyIsICJFcnJvciIsICJhdHRycyIsICJjbGFzc05hbWVzIiwgImltcG9ydF9jbGFzc25hbWVzIiwgImNsYXNzTmFtZXMiXQp9Cg==
