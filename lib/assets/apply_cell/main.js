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

// assets/apply_cell/app.tsx
var App = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = attr_state_default(ctx, initialAttrs);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, !attrs.connection && /* @__PURE__ */ React.createElement(conn_notice_default, null), /* @__PURE__ */ React.createElement("div", { className: "rounded-md border-t border-solid border-gray-300 font-inter font-medium text-gray-600" }, /* @__PURE__ */ React.createElement("div", { className: "border-b-solid flex gap-x-5 gap-y-3 border-b border-b-gray-300 bg-blue-100 p-3" }, /* @__PURE__ */ React.createElement(
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
      name: "method",
      label: "Method",
      options: attrs.methods.map((method) => ({
        label: method.toUpperCase(),
        value: method
      })),
      selectedOption: attrs.method,
      onChange: updateAttr("method"),
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
  ))));
};
var app_default = App;

// assets/apply_cell/main.tsx
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9lcnJvci50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC91dGlscy50cyIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2F0dHJfc3RhdGUudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvY29ubl9ub3RpY2UudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9pbnB1dC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9mb3JtL3NlbGVjdC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL2FwcGx5X2NlbGwvYXBwLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvYXBwbHlfY2VsbC9tYWluLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohXG5cdENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuXHRMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHRodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXHR2YXIgbmF0aXZlQ29kZVN0cmluZyA9ICdbbmF0aXZlIGNvZGVdJztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgIWFyZy50b1N0cmluZy50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsICJpbnRlcmZhY2UgRXJyb3JQcm9wcyB7XG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuY29uc3QgRXJyb3IgPSAoeyBtZXNzYWdlIH06IEVycm9yUHJvcHMpID0+IChcbiAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItcmVkLTcwMCBiZy1yZWQtMTAwIHAtMlwiPlxuICAgICAgPHN2Z1xuICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IGZsZXgtbm9uZSB0ZXh0LXJlZC03MDBcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICBkPVwiTTEyIDl2My43NW0tOS4zMDMgMy4zNzZjLS44NjYgMS41LjIxNyAzLjM3NCAxLjk0OCAzLjM3NGgxNC43MWMxLjczIDAgMi44MTMtMS44NzQgMS45NDgtMy4zNzRMMTMuOTQ5IDMuMzc4Yy0uODY2LTEuNS0zLjAzMi0xLjUtMy44OTggMEwyLjY5NyAxNi4xMjZ6TTEyIDE1Ljc1aC4wMDd2LjAwOEgxMnYtLjAwOHpcIlxuICAgICAgICA+PC9wYXRoPlxuICAgICAgPC9zdmc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtaW50ZXIgcHgtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtcmVkLTcwMFwiPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JcbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5pbXBvcnQgeyBBdHRyaWJ1dGVzIH0gZnJvbSAnLi90eXBlcydcblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBjYWxsYmFjazogVCxcbiAgdGltZW91dDogbnVtYmVyLFxuKTogKCguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB2b2lkKSA9PiB7XG4gIGxldCB0aW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD5cblxuICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpXG4gICAgfSwgdGltZW91dClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZFJlYWN0ID0gYXN5bmMgKFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBhdHRyczogQXR0cmlidXRlcyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoYXR0cnMubWl4X2VudiA9PSAnZGV2Jykge1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcbiAgICAgICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC8xOC4yLjAvdW1kL3JlYWN0LmRldmVsb3BtZW50LmpzJyxcbiAgICApXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LWRvbS8xOC4yLjAvdW1kL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5taW4uanMnLFxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QvMTguMi4wL3VtZC9yZWFjdC5wcm9kdWN0aW9uLmpzJyxcbiAgICApXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LWRvbS8xOC4yLjAvdW1kL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycsXG4gICAgKVxuICB9XG59XG4iLCAiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuXG50eXBlIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPiA9IChcbiAgYXR0ck5hbWU6IHN0cmluZyxcbikgPT4gKEF0dHJWYWx1ZTogQXR0cnNUeXBlW2tleW9mIEF0dHJzVHlwZV0pID0+IHZvaWRcblxuY29uc3QgdXNlQXR0cnNTdGF0ZSA9IDxBdHRyc1R5cGUgZXh0ZW5kcyBvYmplY3Q+KFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBpbml0aWFsQXR0cnM6IEF0dHJzVHlwZSxcbik6IFtBdHRyc1R5cGUsIFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPl0gPT4ge1xuICBjb25zdCBbYXR0cnMsIHNldEF0dHJzXSA9IFJlYWN0LnVzZVN0YXRlPEF0dHJzVHlwZT4oaW5pdGlhbEF0dHJzKVxuICBjb25zdCB1cGRhdGVBdHRyOiBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoYXR0ck5hbWUpID0+IChhdHRyVmFsdWUpID0+IHtcbiAgICBzZXRBdHRycygoYXR0cnMpID0+ICh7IC4uLmF0dHJzLCBbYXR0ck5hbWVdOiBhdHRyVmFsdWUgfSkpXG4gICAgY29uc29sZS5sb2coJ1B1c2hpbmcgJHthdHRyTmFtZX0gdG8gc2VydmVyJywgYXR0clZhbHVlKVxuICAgIGN0eC5wdXNoRXZlbnQoYHVwZGF0ZV8ke2F0dHJOYW1lfWAsIGF0dHJWYWx1ZSlcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY3R4LmhhbmRsZUV2ZW50PEF0dHJzVHlwZT4oJ3VwZGF0ZScsICh1cGRhdGVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQXR0cmlidXRlIHVwZGF0ZSBmcm9tIHNlcnZlcicsIHVwZGF0ZXMpXG4gICAgICBzZXRBdHRycygoYXR0cnMpID0+ICh7XG4gICAgICAgIC4uLk9iamVjdC5hc3NpZ24oYXR0cnMsIHVwZGF0ZXMpLFxuICAgICAgfSkpXG4gICAgfSlcbiAgfSwgW10pXG4gIHJldHVybiBbYXR0cnMsIHVwZGF0ZUF0dHJdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUF0dHJzU3RhdGVcbiIsICJjb25zdCBDb25uTm90aWNlID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTUgcm91bmRlZC1tZCBiZy1ncmF5LTEwMCBwLTQgZm9udC1pbnRlciB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5cbiAgICA8cD5cbiAgICAgIFRvIG1ha2UgcmVxdWVzdHMgdG8gdGhlIEt1YmVybmV0ZXMgY2x1c3RlciwgeW91IG5lZWQgYXQgbGVhc3Qgb25lXG4gICAgICBjb25uZWN0aW9uIHRvIGEgY2x1c3Rlci5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwicHQtMVwiPlxuICAgICAgVG8gY3JlYXRlIGEgY2x1c3RlciBjb25uZWN0aW9uLCB5b3UgY2FuIGFkZCB0aGV7JyAnfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkNsdXN0ZXIgQ29ubmVjdGlvbjwvc3Bhbj4gc21hcnQgY2VsbC5cbiAgICA8L3A+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDb25uTm90aWNlXG4iLCAiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxudHlwZSBJbnB1dFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBkZWZhdWx0VmFsdWU6IHN0cmluZ1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgb3JpZW50YXRpb24/OiAnaG9yaXonIHwgJ3ZlcnQnXG59XG5jb25zdCBJbnB1dDogUmVhY3QuRkM8SW5wdXRQcm9wcz4gPSAoe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgZGVmYXVsdFZhbHVlLFxuICBvbkNoYW5nZSxcbiAgb3JpZW50YXRpb24gPSAndmVydCcsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgJ2ZsZXggZmxleC1yb3cgaXRlbXMtYmFzZWxpbmUnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9e25hbWV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICBibG9jazogb3JpZW50YXRpb24gPT0gJ3ZlcnQnLFxuICAgICAgICAgICAgJ3ByLTEgdXBwZXJjYXNlJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICdtYi0xIHRleHQtc20gZm9udC1tZWRpdW0nLFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICB7ICdibG9jayB3LWZ1bGwnOiBvcmllbnRhdGlvbiA9PSAndmVydCcgfSxcbiAgICAgICAgICAncm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktNTAgcC0xLjUgdGV4dC1zbSBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy1ibHVlLTUwMCcsXG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG4iLCAiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxudHlwZSBTZWxlY3RQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgb3B0aW9uczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXVxuICBzZWxlY3RlZE9wdGlvbj86IHN0cmluZ1xuICBvbkNoYW5nZTogKG9wdGlvbjogc3RyaW5nKSA9PiB2b2lkXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBvcmllbnRhdGlvbj86ICdob3JpeicgfCAndmVydCdcbn1cblxuY29uc3QgU2VsZWN0ID0gKHtcbiAgbmFtZSxcbiAgbGFiZWwsXG4gIG9wdGlvbnMsXG4gIHNlbGVjdGVkT3B0aW9uLFxuICBvbkNoYW5nZSxcbiAgY2xhc3NOYW1lID0gJycsXG4gIG9yaWVudGF0aW9uID0gJ3ZlcnQnLFxufTogU2VsZWN0UHJvcHMpID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgIHtcbiAgICAgICAgJ2ZsZXggZmxleC1yb3cgaXRlbXMtYmFzZWxpbmUnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICA+XG4gICAgPGxhYmVsXG4gICAgICBodG1sRm9yPXtuYW1lfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICB7XG4gICAgICAgICAgYmxvY2s6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyxcbiAgICAgICAgICAncHItMSB1cHBlcmNhc2UnOiBvcmllbnRhdGlvbiA9PSAnaG9yaXonLFxuICAgICAgICB9LFxuICAgICAgICAnbWItMSB0ZXh0LXNtIGZvbnQtbWVkaXVtJyxcbiAgICAgICl9XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvbGFiZWw+XG4gICAgPHNlbGVjdFxuICAgICAgaWQ9e25hbWV9XG4gICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb24gfHwgdW5kZWZpbmVkfVxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlIS50YXJnZXQhLnZhbHVlKX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgeyAnYmxvY2sgdy1mdWxsJzogb3JpZW50YXRpb24gPT0gJ3ZlcnQnIH0sXG4gICAgICAgICcgYmctY2FyZXQtZG93biBhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktNTAgYmctW2xlbmd0aDoxMHB4XSBiZy1bY2VudGVyX3JpZ2h0XzEwcHhdIGJnLW5vLXJlcGVhdCBwLTIgcHItNSB0ZXh0LXNtIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpyaW5nLWJsdWUtNTAwJyxcbiAgICAgICl9XG4gICAgPlxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XG4gICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApKX1cbiAgICA8L3NlbGVjdD5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCB1c2VBdHRyc1N0YXRlIGZyb20gJy4uL3NoYXJlZC9hdHRyX3N0YXRlJ1xuaW1wb3J0IENvbm5Ob3RpY2UgZnJvbSAnLi4vc2hhcmVkL2Nvbm5fbm90aWNlJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uL3NoYXJlZC9mb3JtL2lucHV0J1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9zaGFyZWQvZm9ybS9zZWxlY3QnXG5pbXBvcnQgeyBBcHBseUNlbGxBdHRycyB9IGZyb20gJy4vdHlwZXMnXG5cbmludGVyZmFjZSBBcHBQcm9wcyB7XG4gIGluaXRpYWxBdHRyczogQXBwbHlDZWxsQXR0cnNcbiAgY3R4OiBLaW5vQ29udGV4dFxufVxuXG5jb25zdCBBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IGluaXRpYWxBdHRycywgY3R4IH0pID0+IHtcbiAgY29uc3QgW2F0dHJzLCB1cGRhdGVBdHRyXSA9IHVzZUF0dHJzU3RhdGUoY3R4LCBpbml0aWFsQXR0cnMpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyFhdHRycy5jb25uZWN0aW9uICYmIDxDb25uTm90aWNlIC8+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJvcmRlci10IGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS0zMDAgZm9udC1pbnRlciBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItc29saWQgZmxleCBnYXAteC01IGdhcC15LTMgYm9yZGVyLWIgYm9yZGVyLWItZ3JheS0zMDAgYmctYmx1ZS0xMDAgcC0zXCI+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cImNvbm5lY3Rpb25cIlxuICAgICAgICAgICAgbGFiZWw9XCJDb25uZWN0aW9uXCJcbiAgICAgICAgICAgIG9wdGlvbnM9e2F0dHJzLmNvbm5lY3Rpb25zLm1hcCgoY29ubmVjdGlvbikgPT4gKHtcbiAgICAgICAgICAgICAgbGFiZWw6IGNvbm5lY3Rpb24udmFyaWFibGUsXG4gICAgICAgICAgICAgIHZhbHVlOiBjb25uZWN0aW9uLnZhcmlhYmxlLFxuICAgICAgICAgICAgfSkpfVxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2F0dHJzLmNvbm5lY3Rpb24/LnZhcmlhYmxlPy50b1N0cmluZygpfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ2Nvbm5lY3Rpb24nKX1cbiAgICAgICAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cIm1ldGhvZFwiXG4gICAgICAgICAgICBsYWJlbD1cIk1ldGhvZFwiXG4gICAgICAgICAgICBvcHRpb25zPXthdHRycy5tZXRob2RzLm1hcCgobWV0aG9kKSA9PiAoe1xuICAgICAgICAgICAgICBsYWJlbDogbWV0aG9kLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgIHZhbHVlOiBtZXRob2QsXG4gICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnMubWV0aG9kfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ21ldGhvZCcpfVxuICAgICAgICAgICAgb3JpZW50YXRpb249XCJob3JpelwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiQXNzaWduIFRvXCJcbiAgICAgICAgICAgIG5hbWU9XCJhc3NpZ25fdG9cIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthdHRyc1sncmVzdWx0X3ZhcmlhYmxlJ119XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cigncmVzdWx0X3ZhcmlhYmxlJyl9XG4gICAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCBFcnJvciBmcm9tICcuLi9zaGFyZWQvZXJyb3InXG5pbXBvcnQgeyBsb2FkUmVhY3QgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMnXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuaW1wb3J0IHsgQXBwbHlDZWxsQXR0cnMgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IGFzeW5jIChcbiAgY3R4OiBLaW5vQ29udGV4dCxcbiAgYXR0cnM6IEFwcGx5Q2VsbEF0dHJzLFxuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGF3YWl0IGxvYWRSZWFjdChjdHgsIGF0dHJzKVxuXG4gIGN0eC5yb290LmlubmVySFRNTCA9ICdsb2FkaW5nLi4uJ1xuXG4gIGN0eC5pbXBvcnRDU1MoJ21haW4uY3NzJylcbiAgY3R4LmltcG9ydENTUyhcbiAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyxcbiAgKVxuXG4gIGNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGN0eC5yb290KVxuICBpZiAoYXR0cnMuZXJyb3IpIHtcbiAgICByZXR1cm4gcm9vdC5yZW5kZXIoPEVycm9yIG1lc3NhZ2U9e2F0dHJzLmVycm9yfSAvPilcbiAgfVxuXG4gIHJvb3QucmVuZGVyKDxBcHAgaW5pdGlhbEF0dHJzPXthdHRyc30gY3R4PXtjdHh9IC8+KVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQU9BLEtBQUMsV0FBWTtBQUNaO0FBRUEsVUFBSSxTQUFTLENBQUMsRUFBRTtBQUNoQixVQUFJLG1CQUFtQjtBQUV2QixlQUFTQSxjQUFhO0FBQ3JCLFlBQUksVUFBVSxDQUFDO0FBRWYsaUJBQVMsSUFBSSxHQUFHLElB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
