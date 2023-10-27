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

// assets/apply_cell/app.tsx
var App = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = attr_state_default(ctx, initialAttrs);
  return /* @__PURE__ */ React.createElement("div", { className: "rounded-md border-t border-solid border-gray-300 font-inter font-medium text-gray-600" }, /* @__PURE__ */ React.createElement("div", { className: "border-b-solid flex gap-x-5 gap-y-3 border-b border-b-gray-300 bg-blue-100 p-3" }, /* @__PURE__ */ React.createElement(
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
  )));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9lcnJvci50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC91dGlscy50cyIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2F0dHJfc3RhdGUudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZm9ybS9pbnB1dC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9mb3JtL3NlbGVjdC50c3giLCAiLi4vLi4vLi4vYXNzZXRzL2FwcGx5X2NlbGwvYXBwLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvYXBwbHlfY2VsbC9tYWluLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohXG5cdENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuXHRMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHRodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXHR2YXIgbmF0aXZlQ29kZVN0cmluZyA9ICdbbmF0aXZlIGNvZGVdJztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgIWFyZy50b1N0cmluZy50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsICJpbnRlcmZhY2UgRXJyb3JQcm9wcyB7XG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuY29uc3QgRXJyb3IgPSAoeyBtZXNzYWdlIH06IEVycm9yUHJvcHMpID0+IChcbiAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItcmVkLTcwMCBiZy1yZWQtMTAwIHAtMlwiPlxuICAgICAgPHN2Z1xuICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IGZsZXgtbm9uZSB0ZXh0LXJlZC03MDBcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICBkPVwiTTEyIDl2My43NW0tOS4zMDMgMy4zNzZjLS44NjYgMS41LjIxNyAzLjM3NCAxLjk0OCAzLjM3NGgxNC43MWMxLjczIDAgMi44MTMtMS44NzQgMS45NDgtMy4zNzRMMTMuOTQ5IDMuMzc4Yy0uODY2LTEuNS0zLjAzMi0xLjUtMy44OTggMEwyLjY5NyAxNi4xMjZ6TTEyIDE1Ljc1aC4wMDd2LjAwOEgxMnYtLjAwOHpcIlxuICAgICAgICA+PC9wYXRoPlxuICAgICAgPC9zdmc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtaW50ZXIgcHgtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtcmVkLTcwMFwiPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JcbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5pbXBvcnQgeyBBdHRyaWJ1dGVzIH0gZnJvbSAnLi90eXBlcydcblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBjYWxsYmFjazogVCxcbiAgdGltZW91dDogbnVtYmVyLFxuKTogKCguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB2b2lkKSA9PiB7XG4gIGxldCB0aW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD5cblxuICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpXG4gICAgfSwgdGltZW91dClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZFJlYWN0ID0gYXN5bmMgPFQ+KFxuICBjdHg6IEtpbm9Db250ZXh0LFxuICBhdHRyczogQXR0cmlidXRlcyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoYXR0cnMubWl4X2VudiA9PSAncHJvZCcpIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE4L3VtZC9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxOC4yLjAvdW1kL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycsXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUygnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3RAMTgvdW1kL3JlYWN0LmRldmVsb3BtZW50LmpzJylcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICAnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtZG9tQDE4LjIuMC91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyxcbiAgICApXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5cbnR5cGUgVXBkYXRlQXR0ckZ1bjxBdHRyc1R5cGU+ID0gKFxuICBhdHRyTmFtZTogc3RyaW5nLFxuKSA9PiAoQXR0clZhbHVlOiBBdHRyc1R5cGVba2V5b2YgQXR0cnNUeXBlXSkgPT4gdm9pZFxuXG5jb25zdCB1c2VBdHRyc1N0YXRlID0gPEF0dHJzVHlwZSBleHRlbmRzIG9iamVjdD4oXG4gIGN0eDogS2lub0NvbnRleHQsXG4gIGluaXRpYWxBdHRyczogQXR0cnNUeXBlLFxuKTogW0F0dHJzVHlwZSwgVXBkYXRlQXR0ckZ1bjxBdHRyc1R5cGU+XSA9PiB7XG4gIGNvbnN0IFthdHRycywgc2V0QXR0cnNdID0gUmVhY3QudXNlU3RhdGU8QXR0cnNUeXBlPihpbml0aWFsQXR0cnMpXG4gIGNvbnN0IHVwZGF0ZUF0dHI6IFVwZGF0ZUF0dHJGdW48QXR0cnNUeXBlPiA9IChhdHRyTmFtZSkgPT4gKGF0dHJWYWx1ZSkgPT4ge1xuICAgIHNldEF0dHJzKChhdHRycykgPT4gKHsgLi4uYXR0cnMsIFthdHRyTmFtZV06IGF0dHJWYWx1ZSB9KSlcbiAgICBjb25zb2xlLmxvZygnUHVzaGluZyAke2F0dHJOYW1lfSB0byBzZXJ2ZXInLCBhdHRyVmFsdWUpXG4gICAgY3R4LnB1c2hFdmVudChgdXBkYXRlXyR7YXR0ck5hbWV9YCwgYXR0clZhbHVlKVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjdHguaGFuZGxlRXZlbnQ8QXR0cnNUeXBlPigndXBkYXRlJywgKHVwZGF0ZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRyaWJ1dGUgdXBkYXRlIGZyb20gc2VydmVyJywgdXBkYXRlcylcbiAgICAgIHNldEF0dHJzKChhdHRycykgPT4gKHtcbiAgICAgICAgLi4uT2JqZWN0LmFzc2lnbihhdHRycywgdXBkYXRlcyksXG4gICAgICB9KSlcbiAgICB9KVxuICB9LCBbXSlcbiAgcmV0dXJuIFthdHRycywgdXBkYXRlQXR0cl1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQXR0cnNTdGF0ZVxuIiwgImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbnR5cGUgSW5wdXRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlOiBzdHJpbmdcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIG9yaWVudGF0aW9uPzogJ2hvcml6JyB8ICd2ZXJ0J1xufVxuY29uc3QgSW5wdXQ6IFJlYWN0LkZDPElucHV0UHJvcHM+ID0gKHtcbiAgbmFtZSxcbiAgbGFiZWwsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgb25DaGFuZ2UsXG4gIG9yaWVudGF0aW9uID0gJ3ZlcnQnLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgICdmbGV4IGZsZXgtcm93IGl0ZW1zLWJhc2VsaW5lJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXtuYW1lfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmxvY2s6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyxcbiAgICAgICAgICAgICdwci0xIHVwcGVyY2FzZSc6IG9yaWVudGF0aW9uID09ICdob3JpeicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnbWItMSB0ZXh0LXNtIGZvbnQtbWVkaXVtJyxcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgeyAnYmxvY2sgdy1mdWxsJzogb3JpZW50YXRpb24gPT0gJ3ZlcnQnIH0sXG4gICAgICAgICAgJ3JvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTUwIHAtMS41IHRleHQtc20gZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmctYmx1ZS01MDAnLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuIiwgImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbnR5cGUgU2VsZWN0UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG9wdGlvbnM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W11cbiAgc2VsZWN0ZWRPcHRpb24/OiBzdHJpbmdcbiAgb25DaGFuZ2U6IChvcHRpb246IHN0cmluZykgPT4gdm9pZFxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgb3JpZW50YXRpb24/OiAnaG9yaXonIHwgJ3ZlcnQnXG59XG5cbmNvbnN0IFNlbGVjdCA9ICh7XG4gIG5hbWUsXG4gIGxhYmVsLFxuICBvcHRpb25zLFxuICBzZWxlY3RlZE9wdGlvbixcbiAgb25DaGFuZ2UsXG4gIGNsYXNzTmFtZSA9ICcnLFxuICBvcmllbnRhdGlvbiA9ICd2ZXJ0Jyxcbn06IFNlbGVjdFByb3BzKSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICB7XG4gICAgICAgICdmbGV4IGZsZXgtcm93IGl0ZW1zLWJhc2VsaW5lJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgPlxuICAgIDxsYWJlbFxuICAgICAgaHRtbEZvcj17bmFtZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAge1xuICAgICAgICAgIGJsb2NrOiBvcmllbnRhdGlvbiA9PSAndmVydCcsXG4gICAgICAgICAgJ3ByLTEgdXBwZXJjYXNlJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgICAgfSxcbiAgICAgICAgJ21iLTEgdGV4dC1zbSBmb250LW1lZGl1bScsXG4gICAgICApfVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L2xhYmVsPlxuICAgIDxzZWxlY3RcbiAgICAgIGlkPXtuYW1lfVxuICAgICAgZGVmYXVsdFZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSEudGFyZ2V0IS52YWx1ZSl9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIHsgJ2Jsb2NrIHctZnVsbCc6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyB9LFxuICAgICAgICAnIGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS01MCBiZy1jYXJldC1kb3duIGJnLVtsZW5ndGg6MTBweF0gYmctW2NlbnRlcl9yaWdodF8xMHB4XSBiZy1uby1yZXBlYXQgcC0yIHByLTUgdGV4dC1zbSBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy1ibHVlLTUwMCcsXG4gICAgICApfVxuICAgID5cbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKSl9XG4gICAgPC9zZWxlY3Q+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5pbXBvcnQgdXNlQXR0cnNTdGF0ZSBmcm9tICcuLi9zaGFyZWQvYXR0cl9zdGF0ZSdcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9zaGFyZWQvZm9ybS9pbnB1dCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vc2hhcmVkL2Zvcm0vc2VsZWN0J1xuaW1wb3J0IHsgQXBwbHlDZWxsQXR0cnMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuICBpbml0aWFsQXR0cnM6IEFwcGx5Q2VsbEF0dHJzXG4gIGN0eDogS2lub0NvbnRleHRcbn1cblxuY29uc3QgQXBwID0gKHsgaW5pdGlhbEF0dHJzLCBjdHggfTogQXBwUHJvcHMpID0+IHtcbiAgY29uc3QgW2F0dHJzLCB1cGRhdGVBdHRyXSA9IHVzZUF0dHJzU3RhdGUoY3R4LCBpbml0aWFsQXR0cnMpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYm9yZGVyLXQgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMCBmb250LWludGVyIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItc29saWQgZmxleCBnYXAteC01IGdhcC15LTMgYm9yZGVyLWIgYm9yZGVyLWItZ3JheS0zMDAgYmctYmx1ZS0xMDAgcC0zXCI+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBuYW1lPVwiY29ubmVjdGlvblwiXG4gICAgICAgICAgbGFiZWw9XCJDb25uZWN0aW9uXCJcbiAgICAgICAgICBvcHRpb25zPXthdHRycy5jb25uZWN0aW9ucy5tYXAoKGNvbm5lY3Rpb24pID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogY29ubmVjdGlvbi52YXJpYWJsZSxcbiAgICAgICAgICAgIHZhbHVlOiBjb25uZWN0aW9uLnZhcmlhYmxlLFxuICAgICAgICAgIH0pKX1cbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnMuY29ubmVjdGlvbj8udmFyaWFibGU/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ2Nvbm5lY3Rpb24nKX1cbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6XCJcbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgbGFiZWw9XCJBc3NpZ24gVG9cIlxuICAgICAgICAgIG5hbWU9XCJhc3NpZ25fdG9cIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YXR0cnNbJ3Jlc3VsdF92YXJpYWJsZSddfVxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBdHRyKCdyZXN1bHRfdmFyaWFibGUnKX1cbiAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCBFcnJvciBmcm9tICcuLi9zaGFyZWQvZXJyb3InXG5pbXBvcnQgeyBsb2FkUmVhY3QgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMnXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuaW1wb3J0IHsgQXBwbHlDZWxsQXR0cnMgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IGFzeW5jIChcbiAgY3R4OiBLaW5vQ29udGV4dCxcbiAgYXR0cnM6IEFwcGx5Q2VsbEF0dHJzLFxuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGF3YWl0IGxvYWRSZWFjdChjdHgsIGF0dHJzKVxuXG4gIGN0eC5yb290LmlubmVySFRNTCA9ICdsb2FkaW5nLi4uJ1xuXG4gIGN0eC5pbXBvcnRDU1MoJ21haW4uY3NzJylcbiAgY3R4LmltcG9ydENTUyhcbiAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyxcbiAgKVxuXG4gIGNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGN0eC5yb290KVxuICBpZiAoYXR0cnMuZXJyb3IpIHtcbiAgICByZXR1cm4gcm9vdC5yZW5kZXIoPEVycm9yIG1lc3NhZ2U9e2F0dHJzLmVycm9yfSAvPilcbiAgfVxuXG4gIHJvb3QucmVuZGVyKDxBcHAgaW5pdGlhbEF0dHJzPXthdHRyc30gY3R4PXtjdHh9IC8+KVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQU9BLEtBQUMsV0FBWTtBQUNaO0FBRUEsVUFBSSxTQUFTLENBQUMsRUFBRTtBQUNoQixVQUFJLG1CQUFtQjtBQUV2QixlQUFTQSxjQUFhO0FBQ3JCLFlBQUksVUFBVSxDQUFDO0FBRWYsaUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUs7QUFDMUMsY0FBSSxNQUFNLFVBQVUsQ0FBQztBQUNyQixjQUFJLENBQUM7QUFBSztBQUVWLGNBQUksVUFBVSxPQUFPO0FBRXJCLGNBQUksWUFBWSxZQUFZLFlBQVksVUFBVTtBQUNqRCxvQkFBUSxLQUFLLEdBQUc7QUFBQSxVQUNqQixXQUFXLE1BQU0sUUFBUSxHQUFHLEdBQUc7QUFDOUIsZ0JBQUksSUFBSSxRQUFRO0FBQ2Ysa0JBQUksUUFBUUEsWUFBVyxNQUFNLE1BQU0sR0FBRztBQUN0QyxrQkFBSSxPQUFPO0FBQ1Ysd0JBQVEsS0FBSyxL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QyxJQUFJO0FBQUEsTUFDSixjQUFjO0FBQUEsTUFDZCxVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUcsT0FBUSxLQUFLO0FBQUEsTUFDMUMsZUFBVyxtQkFBQUE7QUFBQSxRQUNULEVBQUUsZ0JBQWdCLGVBQWUsT0FBTztBQUFBLFFBQ3hDO0FBQUEsTUFDRjtBQUFBO0FBQUEsSUFFQyxRQUFRLElBQUksQ0FBQyxXQUNaLG9DQUFDLFlBQU8sS0FBSyxPQUFPLE9BQU8sT0FBTyxPQUFPLFNBQ3RDLE9BQU8sS0FDVixDQUNEO0FBQUEsRUFDSDtBQUNGO0FBR0YsSUFBTyxpQkFBUTs7O0FDaERmLElBQU0sTUFBTSxDQUFDLEVBQUUsY0FBYyxJQUFJLE1BQWdCO0FBQy9DLFFBQU0sQ0FBQyxPQUFPLFVBQVUsSUFBSSxtQkFBYyxLQUFLLFlBQVk7QUFFM0QsU0FDRSxvQ0FBQyxTQUFJLFdBQVUsMkZBQ2Isb0NBQUMsU0FBSSxXQUFVLG9GQUNiO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxNQUFLO0FBQUEsTUFDTCxPQUFNO0FBQUEsTUFDTixTQUFTLE1BQU0sWUFBWSxJQUFJLENBQUMsZ0JBQWdCO0FBQUEsUUFDOUMsT0FBTyxXQUFXO0FBQUEsUUFDbEIsT0FBTyxXQUFXO0FBQUEsTUFDcEIsRUFBRTtBQUFBLE1BQ0YsZ0JBQWdCLE1BQU0sWUFBWSxVQUFVLFNBQVM7QUFBQSxNQUNyRCxVQUFVLFdBQVcsWUFBWTtBQUFBLE1BQ2pDLGFBQVk7QUFBQTtBQUFBLEVBQ2QsR0FDQTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsT0FBTTtBQUFBLE1BQ04sTUFBSztBQUFBLE1BQ0wsY0FBYyxNQUFNLGlCQUFpQjtBQUFBLE1BQ3JDLFVBQVUsV0FBVyxpQkFBaUI7QUFBQSxNQUN0QyxhQUFZO0FBQUE7QUFBQSxFQUNkLENBQ0YsQ0FDRjtBQUVKO0FBRUEsSUFBTyxjQUFROzs7QUNsQ1IsSUFBTSxPQUFPLE9BQ2xCLEtBQ0EsVUFDa0I7QUFDbEIsUUFBTSxVQUFVLEtBQUssS0FBSztBQUUxQixNQUFJLEtBQUssWUFBWTtBQUVyQixNQUFJLFVBQVUsVUFBVTtBQUN4QixNQUFJO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLE9BQU8sU0FBUyxXQUFXLElBQUksSUFBSTtBQUN6QyxNQUFJLE1BQU0sT0FBTztBQUNmLFdBQU8sS0FBSyxPQUFPLG9DQUFDLGlCQUFNLFNBQVMsTUFBTSxPQUFPLENBQUU7QUFBQSxFQUNwRDtBQUVBLE9BQUssT0FBTyxvQ0FBQyxlQUFJLGNBQWMsT0FBTyxLQUFVLENBQUU7QUFDcEQ7IiwKICAibmFtZXMiOiBbImNsYXNzTmFtZXMiLCAiRXJyb3IiLCAiYXR0cnMiLCAiY2xhc3NOYW1lcyIsICJpbXBvcnRfY2xhc3NuYW1lcyIsICJjbGFzc05hbWVzIl0KfQo=
