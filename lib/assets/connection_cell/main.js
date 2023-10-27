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
      value: selectedOption,
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

// assets/connection_cell/app.tsx
var App = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = attr_state_default(ctx, initialAttrs);
  const source_type_options = [
    { label: "File", value: "file" },
    { label: "Environment Variable", value: "env" }
  ];
  if (attrs["running_on_k8s"])
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9lcnJvci50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC91dGlscy50cyIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2F0dHJfc3RhdGUudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9pbnB1dC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9mb3JtL3NlbGVjdC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL2Nvbm5lY3Rpb25fY2VsbC9hcHAudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9jb25uZWN0aW9uX2NlbGwvbWFpbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuXHRDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cblx0TGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcblx0aHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIG5hdGl2ZUNvZGVTdHJpbmcgPSAnW25hdGl2ZSBjb2RlXSc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nICYmICFhcmcudG9TdHJpbmcudG9TdHJpbmcoKS5pbmNsdWRlcygnW25hdGl2ZSBjb2RlXScpKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCAiaW50ZXJmYWNlIEVycm9yUHJvcHMge1xuICBtZXNzYWdlOiBzdHJpbmdcbn1cbmNvbnN0IEVycm9yID0gKHsgbWVzc2FnZSB9OiBFcnJvclByb3BzKSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLXJlZC03MDAgYmctcmVkLTEwMCBwLTJcIj5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBmbGV4LW5vbmUgdGV4dC1yZWQtNzAwXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgZD1cIk0xMiA5djMuNzVtLTkuMzAzIDMuMzc2Yy0uODY2IDEuNS4yMTcgMy4zNzQgMS45NDggMy4zNzRoMTQuNzFjMS43MyAwIDIuODEzLTEuODc0IDEuOTQ4LTMuMzc0TDEzLjk0OSAzLjM3OGMtLjg2Ni0xLjUtMy4wMzItMS41LTMuODk4IDBMMi42OTcgMTYuMTI2ek0xMiAxNS43NWguMDA3di4wMDhIMTJ2LS4wMDh6XCJcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWludGVyIHB4LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXJlZC03MDBcIj5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yXG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuaW1wb3J0IHsgQXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnXG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgY2FsbGJhY2s6IFQsXG4gIHRpbWVvdXQ6IG51bWJlcixcbik6ICgoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4gdm9pZCkgPT4ge1xuICBsZXQgdGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+XG5cbiAgcmV0dXJuICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjayguLi5hcmdzKVxuICAgIH0sIHRpbWVvdXQpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRSZWFjdCA9IGFzeW5jIDxUPihcbiAgY3R4OiBLaW5vQ29udGV4dCxcbiAgYXR0cnM6IEF0dHJpYnV0ZXMsXG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKGF0dHJzLm1peF9lbnYgPT0gJ3Byb2QnKSB7XG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKCdodHRwczovL3VucGtnLmNvbS9yZWFjdEAxOC91bWQvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKVxuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcbiAgICAgICdodHRwczovL3VucGtnLmNvbS9yZWFjdC1kb21AMTguMi4wL3VtZC9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnLFxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE4L3VtZC9yZWFjdC5kZXZlbG9wbWVudC5qcycpXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxOC4yLjAvdW1kL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcycsXG4gICAgKVxuICB9XG59XG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuXG50eXBlIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPiA9IChcbiAgYXR0ck5hbWU6IHN0cmluZyxcbikgPT4gKEF0dHJWYWx1ZTogQXR0cnNUeXBlW2tleW9mIEF0dHJzVHlwZV0pID0+IHZvaWRcblxuY29uc3QgdXNlQXR0cnNTdGF0ZSA9IDxBdHRyc1R5cGUgZXh0ZW5kcyBvYmplY3Q+KFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBpbml0aWFsQXR0cnM6IEF0dHJzVHlwZSxcbik6IFtBdHRyc1R5cGUsIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPl0gPT4ge1xuICBjb25zdCBbYXR0cnMsIHNldEF0dHJzXSA9IFJlYWN0LnVzZVN0YXRlPEF0dHJzVHlwZT4oaW5pdGlhbEF0dHJzKVxuICBjb25zdCB1cGRhdGVBdHRyOiBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoYXR0ck5hbWUpID0+IChhdHRyVmFsdWUpID0+IHtcbiAgICBzZXRBdHRycygoYXR0cnMpID0+ICh7IC4uLmF0dHJzLCBbYXR0ck5hbWVdOiBhdHRyVmFsdWUgfSkpXG4gICAgY29uc29sZS5sb2coJ1B1c2hpbmcgJHthdHRyTmFtZX0gdG8gc2VydmVyJywgYXR0clZhbHVlKVxuICAgIGN0eC5wdXNoRXZlbnQoYHVwZGF0ZV8ke2F0dHJOYW1lfWAsIGF0dHJWYWx1ZSlcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY3R4LmhhbmRsZUV2ZW50PEF0dHJzVHlwZT4oJ3VwZGF0ZScsICh1cGRhdGVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQXR0cmlidXRlIHVwZGF0ZSBmcm9tIHNlcnZlcicsIHVwZGF0ZXMpXG4gICAgICBzZXRBdHRycygoYXR0cnMpID0+ICh7XG4gICAgICAgIC4uLk9iamVjdC5hc3NpZ24oYXR0cnMsIHVwZGF0ZXMpLFxuICAgICAgfSkpXG4gICAgfSlcbiAgfSwgW10pXG4gIHJldHVybiBbYXR0cnMsIHVwZGF0ZUF0dHJdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUF0dHJzU3RhdGVcbiIsICJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG50eXBlIElucHV0UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIGRlZmF1bHRWYWx1ZTogc3RyaW5nXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvcmllbnRhdGlvbj86ICdob3JpeicgfCAndmVydCdcbn1cbmNvbnN0IElucHV0OiBSZWFjdC5GQzxJbnB1dFByb3BzPiA9ICh7XG4gIG5hbWUsXG4gIGxhYmVsLFxuICBkZWZhdWx0VmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBvcmllbnRhdGlvbiA9ICd2ZXJ0Jyxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAnZmxleCBmbGV4LXJvdyBpdGVtcy1iYXNlbGluZSc6IG9yaWVudGF0aW9uID09ICdob3JpeicsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8bGFiZWxcbiAgICAgICAgaHRtbEZvcj17bmFtZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJsb2NrOiBvcmllbnRhdGlvbiA9PSAndmVydCcsXG4gICAgICAgICAgICAncHItMSB1cHBlcmNhc2UnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ21iLTEgdGV4dC1zbSBmb250LW1lZGl1bScsXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHsgJ2Jsb2NrIHctZnVsbCc6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyB9LFxuICAgICAgICAgICdyb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS01MCBwLTEuNSB0ZXh0LXNtIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLWJsdWUtNTAwJyxcbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcbiIsICJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG50eXBlIFNlbGVjdFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBvcHRpb25zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdXG4gIHNlbGVjdGVkT3B0aW9uPzogc3RyaW5nXG4gIG9uQ2hhbmdlOiAob3B0aW9uOiBzdHJpbmcpID0+IHZvaWRcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIG9yaWVudGF0aW9uPzogJ2hvcml6JyB8ICd2ZXJ0J1xufVxuXG5jb25zdCBTZWxlY3QgPSAoe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgb3B0aW9ucyxcbiAgc2VsZWN0ZWRPcHRpb24sXG4gIG9uQ2hhbmdlLFxuICBjbGFzc05hbWUgPSAnJyxcbiAgb3JpZW50YXRpb24gPSAndmVydCcsXG59OiBTZWxlY3RQcm9wcykgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAge1xuICAgICAgICAnZmxleCBmbGV4LXJvdyBpdGVtcy1iYXNlbGluZSc6IG9yaWVudGF0aW9uID09ICdob3JpeicsXG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gID5cbiAgICA8bGFiZWxcbiAgICAgIGh0bWxGb3I9e25hbWV9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIHtcbiAgICAgICAgICBibG9jazogb3JpZW50YXRpb24gPT0gJ3ZlcnQnLFxuICAgICAgICAgICdwci0xIHVwcGVyY2FzZSc6IG9yaWVudGF0aW9uID09ICdob3JpeicsXG4gICAgICAgIH0sXG4gICAgICAgICdtYi0xIHRleHQtc20gZm9udC1tZWRpdW0nLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9sYWJlbD5cbiAgICA8c2VsZWN0XG4gICAgICBpZD17bmFtZX1cbiAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSEudGFyZ2V0IS52YWx1ZSl9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIHsgJ2Jsb2NrIHctZnVsbCc6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyB9LFxuICAgICAgICAnIGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS01MCBiZy1jYXJldC1kb3duIGJnLVtsZW5ndGg6MTBweF0gYmctW2NlbnRlcl9yaWdodF8xMHB4XSBiZy1uby1yZXBlYXQgcC0yIHByLTUgdGV4dC1zbSBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy1ibHVlLTUwMCcsXG4gICAgICApfVxuICAgID5cbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKSl9XG4gICAgPC9zZWxlY3Q+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5pbXBvcnQgdXNlQXR0cnNTdGF0ZSBmcm9tICcuLi9zaGFyZWQvYXR0cl9zdGF0ZSdcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9zaGFyZWQvZm9ybS9pbnB1dCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vc2hhcmVkL2Zvcm0vc2VsZWN0J1xuaW1wb3J0IHsgQ29ubmVjdGlvbkNlbGxBdHRycyB9IGZyb20gJy4vdHlwZXMnXG5cbmludGVyZmFjZSBBcHBQcm9wcyB7XG4gIGluaXRpYWxBdHRyczogQ29ubmVjdGlvbkNlbGxBdHRyc1xuICBjdHg6IEtpbm9Db250ZXh0XG59XG5cbmNvbnN0IEFwcCA9ICh7IGluaXRpYWxBdHRycywgY3R4IH06IEFwcFByb3BzKSA9PiB7XG4gIGNvbnN0IFthdHRycywgdXBkYXRlQXR0cl0gPSB1c2VBdHRyc1N0YXRlKGN0eCwgaW5pdGlhbEF0dHJzKVxuICBjb25zdCBzb3VyY2VfdHlwZV9vcHRpb25zID0gW1xuICAgIHsgbGFiZWw6ICdGaWxlJywgdmFsdWU6ICdmaWxlJyB9LFxuICAgIHsgbGFiZWw6ICdFbnZpcm9ubWVudCBWYXJpYWJsZScsIHZhbHVlOiAnZW52JyB9LFxuICBdXG4gIGlmIChhdHRyc1sncnVubmluZ19vbl9rOHMnXSlcbiAgICBzb3VyY2VfdHlwZV9vcHRpb25zLnB1c2goeyBsYWJlbDogJ0s4cyBTZXJ2aWNlIEFjY291bnQnLCB2YWx1ZTogJ2s4cycgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMCBmb250LWludGVyIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItc29saWQgZmxleCBmbGV4LXdyYXAgZ2FwLXgtNSBnYXAteS0zIGJvcmRlci1iIGJvcmRlci1iLWdyYXktMzAwIGJnLWJsdWUtMTAwIHAtM1wiPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbmFtZT1cInNvdXJjZV90eXBlXCJcbiAgICAgICAgICBsYWJlbD1cIlNvdXJjZSBUeXBlXCJcbiAgICAgICAgICBvcHRpb25zPXtzb3VyY2VfdHlwZV9vcHRpb25zfVxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXthdHRyc1snc291cmNlX3R5cGUnXX1cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cignc291cmNlX3R5cGUnKX1cbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6XCJcbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgbGFiZWw9XCJBc3NpZ24gVG9cIlxuICAgICAgICAgIG5hbWU9XCJhc3NpZ25fdG9cIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YXR0cnNbJ3Jlc3VsdF92YXJpYWJsZSddfVxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBdHRyKCdyZXN1bHRfdmFyaWFibGUnKX1cbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAteC01IHAtM1wiPlxuICAgICAgICB7YXR0cnNbJ3NvdXJjZV90eXBlJ10gIT0gJ2s4cycgJiYgKFxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbGFiZWw9e2F0dHJzWydzb3VyY2VfdHlwZSddID09ICdmaWxlJyA/ICdGaWxlIFBhdGgnIDogJ0VudiBWYXInfVxuICAgICAgICAgICAgbmFtZT1cInNvdXJjZVwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2F0dHJzWydzb3VyY2UnXX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBdHRyKCdzb3VyY2UnKX1cbiAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2F0dHJzWydzb3VyY2VfdHlwZSddICE9ICdrOHMnICYmIChcbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiQ29udGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiY29udGV4dFwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2F0dHJzLm9wdHMuY29udGV4dCB8fCAnJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgIHVwZGF0ZUF0dHIoJ29wdHMnKSh7IC4uLmF0dHJzLm9wdHMsIGNvbnRleHQ6IHZhbHVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG5hbWU9XCJpbnNlY3VyZV9za2lwX3Rsc192ZXJpZnlcIlxuICAgICAgICAgIGxhYmVsPVwiSW5zZWN1cmUgU2tpcCBUTFMgVmVyaWZ5XCJcbiAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICB7IGxhYmVsOiAnWWVzJywgdmFsdWU6ICd0cnVlJyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ05vJywgdmFsdWU6ICdmYWxzZScgfSxcbiAgICAgICAgICBdfVxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXthdHRycy5vcHRzLmluc2VjdXJlX3NraXBfdGxzX3ZlcmlmeS50b1N0cmluZygpfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICB1cGRhdGVBdHRyKCdvcHRzJykoe1xuICAgICAgICAgICAgICAuLi5hdHRycy5vcHRzLFxuICAgICAgICAgICAgICBpbnNlY3VyZV9za2lwX3Rsc192ZXJpZnk6IEpTT04ucGFyc2UodmFsdWUpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vc2hhcmVkL2Vycm9yJ1xuaW1wb3J0IHsgbG9hZFJlYWN0IH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCdcbmltcG9ydCB7IENvbm5lY3Rpb25DZWxsQXR0cnMgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IGFzeW5jIChcbiAgY3R4OiBLaW5vQ29udGV4dCxcbiAgYXR0cnM6IENvbm5lY3Rpb25DZWxsQXR0cnMsXG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgYXdhaXQgbG9hZFJlYWN0KGN0eCwgYXR0cnMpXG5cbiAgY3R4LnJvb3QuaW5uZXJIVE1MID0gJ2xvYWRpbmcuLi4nXG5cbiAgY3R4LmltcG9ydENTUygnbWFpbi5jc3MnKVxuICBjdHguaW1wb3J0Q1NTKFxuICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXAnLFxuICApXG5cbiAgY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoY3R4LnJvb3QpXG4gIGlmIChhdHRycy5lcnJvcikge1xuICAgIHJldHVybiByb290LnJlbmRlcig8RXJyb3IgbWVzc2FnZT17YXR0cnMuZXJyb3J9IC8+KVxuICB9XG5cbiAgcm9vdC5yZW5kZXIoPEFwcCBpbml0aWFsQXR0cnM9e2F0dHJzfSBjdHg9e2N0eH0g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LEVBQUUsT0FBTyxPQUFPLE9BQU8sT0FBTztBQUFBLFFBQzlCLEVBQUUsT0FBTyxNQUFNLE9BQU8sUUFBUTtBQUFBLE1BQ2hDO0FBQUEsTUFDQSxnQkFBZ0IsTUFBTSxLQUFLLHlCQUF5QixTQUFTO0FBQUEsTUFDN0QsVUFBVSxDQUFDLFVBQ1QsV0FBVyxNQUFNLEVBQUU7QUFBQSxRQUNqQixHQUFHLE1BQU07QUFBQSxRQUNULDBCQUEwQixLQUFLLE1BQU0sS0FBSztBQUFBLE1BQzVDLENBQUM7QUFBQTtBQUFBLEVBRUwsQ0FDRixDQUNGO0FBRUo7QUFFQSxJQUFPLGNBQVE7OztBQ3pFUixJQUFNLE9BQU8sT0FDbEIsS0FDQSxVQUNrQjtBQUNsQixRQUFNLFVBQVUsS0FBSyxLQUFLO0FBRTFCLE1BQUksS0FBSyxZQUFZO0FBRXJCLE1BQUksVUFBVSxVQUFVO0FBQ3hCLE1BQUk7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLFFBQU0sT0FBTyxTQUFTLFdBQVcsSUFBSSxJQUFJO0FBQ3pDLE1BQUksTUFBTSxPQUFPO0FBQ2YsV0FBTyxLQUFLLE9BQU8sb0NBQUMsaUJBQU0sU0FBUyxNQUFNLE9BQU8sQ0FBRTtBQUFBLEVBQ3BEO0FBRUEsT0FBSyxPQUFPLG9DQUFDLGVBQUksY0FBYyxPQUFPLEtBQVUsQ0FBRTtBQUNwRDsiLAogICJuYW1lcyI6IFsiY2xhc3NOYW1lcyIsICJFcnJvciIsICJhdHRycyIsICJjbGFzc05hbWVzIiwgImltcG9ydF9jbGFzc25hbWVzIiwgImNsYXNzTmFtZXMiXQp9Cg==
