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
      function classNames2() {
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
              var inner = classNames2.apply(null, arg);
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
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
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

// assets/shared/conn_notice.tsx
var ConnNotice = () => /* @__PURE__ */ React.createElement("div", { className: "mb-5 rounded-md bg-gray-100 p-4 font-inter text-sm font-medium text-gray-500" }, /* @__PURE__ */ React.createElement("p", null, "To make requests to the Kubernetes cluster, you need at least one connection to a cluster."), /* @__PURE__ */ React.createElement("p", { className: "pt-1" }, "To create a cluster connection, you can add the", " ", /* @__PURE__ */ React.createElement("span", { className: "text-gray-600" }, "Cluster Connection"), " smart cell."));
var conn_notice_default = ConnNotice;

// assets/shared/form/select.tsx
var import_classnames = __toESM(require_classnames());
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
    className: (0, import_classnames.default)(
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
    "select",
    {
      id: name,
      value: selectedOption || void 0,
      onChange: (e) => onChange(e.target.value),
      className: (0, import_classnames.default)(
        { "block w-full": orientation == "vert" },
        " bg-caret-down appearance-none rounded-lg border border-gray-300 bg-gray-50 bg-[length:10px] bg-[center_right_10px] bg-no-repeat p-2 pr-5 text-sm focus:border-blue-500 focus:ring-blue-500"
      )
    },
    options.map((option) => /* @__PURE__ */ React.createElement("option", { key: option.value, value: option.value }, option.label))
  )
);
var select_default = Select;

// assets/terminal_cell/app.tsx
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
    select_default,
    {
      name: "connect_to",
      label: "connect_to",
      options: attrs.connect_tos.map((connect_to) => ({
        label: connect_to,
        value: connect_to
      })),
      selectedOption: attrs.connect_to?.toString(),
      onChange: updateAttr("connect_to"),
      orientation: "horiz"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "flex gap-x-5 p-3" }, attrs["namespaces"] && /* @__PURE__ */ React.createElement(
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
  ), attrs.pods && /* @__PURE__ */ React.createElement(
    select_default,
    {
      name: "pod",
      label: "Pod Name",
      options: attrs.pods.map((ns) => ({
        label: ns,
        value: ns
      })),
      selectedOption: attrs["pod"],
      onChange: updateAttr("pod")
    }
  ), attrs.containers && /* @__PURE__ */ React.createElement(
    select_default,
    {
      name: "container",
      label: "Container Name",
      options: attrs.containers.map((ns) => ({
        label: ns,
        value: ns
      })),
      selectedOption: attrs["container"],
      onChange: updateAttr("container")
    }
  ))));
};
var app_default = App;

// assets/terminal_cell/main.tsx
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9lcnJvci50c3giLCAiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9hdHRyX3N0YXRlLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Nvbm5fbm90aWNlLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvc2hhcmVkL2Zvcm0vc2VsZWN0LnRzeCIsICIuLi8uLi8uLi9hc3NldHMvdGVybWluYWxfY2VsbC9hcHAudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy90ZXJtaW5hbF9jZWxsL21haW4udHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiFcblx0Q29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG5cdExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG5cdGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cdHZhciBuYXRpdmVDb2RlU3RyaW5nID0gJ1tuYXRpdmUgY29kZV0nO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAmJiAhYXJnLnRvU3RyaW5nLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1tuYXRpdmUgY29kZV0nKSkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwgImludGVyZmFjZSBFcnJvclByb3BzIHtcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5jb25zdCBFcnJvciA9ICh7IG1lc3NhZ2UgfTogRXJyb3JQcm9wcykgPT4gKFxuICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZGFzaGVkIGJvcmRlci1yZWQtNzAwIGJnLXJlZC0xMDAgcC0yXCI+XG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgZmxleC1ub25lIHRleHQtcmVkLTcwMFwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIGQ9XCJNMTIgOXYzLjc1bS05LjMwMyAzLjM3NmMtLjg2NiAxLjUuMjE3IDMuMzc0IDEuOTQ4IDMuMzc0aDE0LjcxYzEuNzMgMCAyLjgxMy0xLjg3NCAxLjk0OC0zLjM3NEwxMy45NDkgMy4zNzhjLS44NjYtMS41LTMuMDMyLTEuNS0zLjg5OCAwTDIuNjk3IDE2LjEyNnpNMTIgMTUuNzVoLjAwN3YuMDA4SDEydi0uMDA4elwiXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1pbnRlciBweC0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1yZWQtNzAwXCI+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvclxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcblxudHlwZSBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoXG4gIGF0dHJOYW1lOiBzdHJpbmcsXG4pID0+IChBdHRyVmFsdWU6IEF0dHJzVHlwZVtrZXlvZiBBdHRyc1R5cGVdKSA9PiB2b2lkXG5cbmNvbnN0IHVzZUF0dHJzU3RhdGUgPSA8QXR0cnNUeXBlIGV4dGVuZHMgb2JqZWN0PihcbiAgY3R4OiBLaW5vQ29udGV4dCxcbiAgaW5pdGlhbEF0dHJzOiBBdHRyc1R5cGUsXG4pOiBbQXR0cnNUeXBlLCBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT5dID0+IHtcbiAgY29uc3QgW2F0dHJzLCBzZXRBdHRyc10gPSBSZWFjdC51c2VTdGF0ZTxBdHRyc1R5cGU+KGluaXRpYWxBdHRycylcbiAgY29uc3QgdXBkYXRlQXR0cjogVXBkYXRlQXR0ckZ1bjxBdHRyc1R5cGU+ID0gKGF0dHJOYW1lKSA9PiAoYXR0clZhbHVlKSA9PiB7XG4gICAgc2V0QXR0cnMoKGF0dHJzKSA9PiAoeyAuLi5hdHRycywgW2F0dHJOYW1lXTogYXR0clZhbHVlIH0pKVxuICAgIGNvbnNvbGUubG9nKCdQdXNoaW5nICR7YXR0ck5hbWV9IHRvIHNlcnZlcicsIGF0dHJWYWx1ZSlcbiAgICBjdHgucHVzaEV2ZW50KGB1cGRhdGVfJHthdHRyTmFtZX1gLCBhdHRyVmFsdWUpXG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGN0eC5oYW5kbGVFdmVudDxBdHRyc1R5cGU+KCd1cGRhdGUnLCAodXBkYXRlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0F0dHJpYnV0ZSB1cGRhdGUgZnJvbSBzZXJ2ZXInLCB1cGRhdGVzKVxuICAgICAgc2V0QXR0cnMoKGF0dHJzKSA9PiAoe1xuICAgICAgICAuLi5PYmplY3QuYXNzaWduKGF0dHJzLCB1cGRhdGVzKSxcbiAgICAgIH0pKVxuICAgIH0pXG4gIH0sIFtdKVxuICByZXR1cm4gW2F0dHJzLCB1cGRhdGVBdHRyXVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VBdHRyc1N0YXRlXG4iLCAiY29uc3QgQ29ubk5vdGljZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtYi01IHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgcC00IGZvbnQtaW50ZXIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgPHA+XG4gICAgICBUbyBtYWtlIHJlcXVlc3RzIHRvIHRoZSBLdWJlcm5ldGVzIGNsdXN0ZXIsIHlvdSBuZWVkIGF0IGxlYXN0IG9uZVxuICAgICAgY29ubmVjdGlvbiB0byBhIGNsdXN0ZXIuXG4gICAgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cInB0LTFcIj5cbiAgICAgIFRvIGNyZWF0ZSBhIGNsdXN0ZXIgY29ubmVjdGlvbiwgeW91IGNhbiBhZGQgdGhleycgJ31cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5DbHVzdGVyIENvbm5lY3Rpb248L3NwYW4+IHNtYXJ0IGNlbGwuXG4gICAgPC9wPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQ29ubk5vdGljZVxuIiwgImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbnR5cGUgU2VsZWN0UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG9wdGlvbnM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W11cbiAgc2VsZWN0ZWRPcHRpb24/OiBzdHJpbmdcbiAgb25DaGFuZ2U6IChvcHRpb246IHN0cmluZykgPT4gdm9pZFxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgb3JpZW50YXRpb24/OiAnaG9yaXonIHwgJ3ZlcnQnXG59XG5cbmNvbnN0IFNlbGVjdCA9ICh7XG4gIG5hbWUsXG4gIGxhYmVsLFxuICBvcHRpb25zLFxuICBzZWxlY3RlZE9wdGlvbixcbiAgb25DaGFuZ2UsXG4gIGNsYXNzTmFtZSA9ICcnLFxuICBvcmllbnRhdGlvbiA9ICd2ZXJ0Jyxcbn06IFNlbGVjdFByb3BzKSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICB7XG4gICAgICAgICdmbGV4IGZsZXgtcm93IGl0ZW1zLWJhc2VsaW5lJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgPlxuICAgIDxsYWJlbFxuICAgICAgaHRtbEZvcj17bmFtZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAge1xuICAgICAgICAgIGJsb2NrOiBvcmllbnRhdGlvbiA9PSAndmVydCcsXG4gICAgICAgICAgJ3ByLTEgdXBwZXJjYXNlJzogb3JpZW50YXRpb24gPT0gJ2hvcml6JyxcbiAgICAgICAgfSxcbiAgICAgICAgJ21iLTEgdGV4dC1zbSBmb250LW1lZGl1bScsXG4gICAgICApfVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L2xhYmVsPlxuICAgIDxzZWxlY3RcbiAgICAgIGlkPXtuYW1lfVxuICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9uIHx8IHVuZGVmaW5lZH1cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSEudGFyZ2V0IS52YWx1ZSl9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIHsgJ2Jsb2NrIHctZnVsbCc6IG9yaWVudGF0aW9uID09ICd2ZXJ0JyB9LFxuICAgICAgICAnIGJnLWNhcmV0LWRvd24gYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTUwIGJnLVtsZW5ndGg6MTBweF0gYmctW2NlbnRlcl9yaWdodF8xMHB4XSBiZy1uby1yZXBlYXQgcC0yIHByLTUgdGV4dC1zbSBmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6cmluZy1ibHVlLTUwMCcsXG4gICAgICApfVxuICAgID5cbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKSl9XG4gICAgPC9zZWxlY3Q+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcbiIsICJpbXBvcnQgeyBLaW5vQ29udGV4dCB9IGZyb20gJy4uL2tpbm8nXG5pbXBvcnQgdXNlQXR0cnNTdGF0ZSBmcm9tICcuLi9zaGFyZWQvYXR0cl9zdGF0ZSdcbmltcG9ydCBDb25uTm90aWNlIGZyb20gJy4uL3NoYXJlZC9jb25uX25vdGljZSdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vc2hhcmVkL2Zvcm0vc2VsZWN0J1xuaW1wb3J0IHsgVGVybWluYWxDZWxsQXR0cnMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuICBpbml0aWFsQXR0cnM6IFRlcm1pbmFsQ2VsbEF0dHJzXG4gIGN0eDogS2lub0NvbnRleHRcbn1cblxuY29uc3QgQXBwID0gKHsgaW5pdGlhbEF0dHJzLCBjdHggfTogQXBwUHJvcHMpID0+IHtcbiAgY29uc3QgW2F0dHJzLCB1cGRhdGVBdHRyXSA9IHVzZUF0dHJzU3RhdGUoY3R4LCBpbml0aWFsQXR0cnMpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshYXR0cnMuY29ubmVjdGlvbiAmJiA8Q29ubk5vdGljZSAvPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMCBmb250LWludGVyIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYi1zb2xpZCBmbGV4IGdhcC14LTUgZ2FwLXktMyBib3JkZXItYiBib3JkZXItYi1ncmF5LTMwMCBiZy1ibHVlLTEwMCBwLTNcIj5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwiY29ubmVjdGlvblwiXG4gICAgICAgICAgICBsYWJlbD1cIkNvbm5lY3Rpb25cIlxuICAgICAgICAgICAgb3B0aW9ucz17YXR0cnMuY29ubmVjdGlvbnMubWFwKChjb25uZWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgICBsYWJlbDogY29ubmVjdGlvbi52YXJpYWJsZSxcbiAgICAgICAgICAgICAgdmFsdWU6IGNvbm5lY3Rpb24udmFyaWFibGUsXG4gICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnMuY29ubmVjdGlvbj8udmFyaWFibGU/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cignY29ubmVjdGlvbicpfVxuICAgICAgICAgICAgb3JpZW50YXRpb249XCJob3JpelwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwiY29ubmVjdF90b1wiXG4gICAgICAgICAgICBsYWJlbD1cImNvbm5lY3RfdG9cIlxuICAgICAgICAgICAgb3B0aW9ucz17YXR0cnMuY29ubmVjdF90b3MubWFwKChjb25uZWN0X3RvKSA9PiAoe1xuICAgICAgICAgICAgICBsYWJlbDogY29ubmVjdF90byxcbiAgICAgICAgICAgICAgdmFsdWU6IGNvbm5lY3RfdG8sXG4gICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnMuY29ubmVjdF90bz8udG9TdHJpbmcoKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBdHRyKCdjb25uZWN0X3RvJyl9XG4gICAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTUgcC0zXCI+XG4gICAgICAgICAge2F0dHJzWyduYW1lc3BhY2VzJ10gJiYgKFxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBuYW1lPVwibmFtZXNwYWNlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lc3BhY2VcIlxuICAgICAgICAgICAgICBvcHRpb25zPXthdHRycy5uYW1lc3BhY2VzLm1hcCgobnMpID0+ICh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IG5zLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBucyxcbiAgICAgICAgICAgICAgfSkpfVxuICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17YXR0cnNbJ25hbWVzcGFjZSddfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQXR0cignbmFtZXNwYWNlJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2F0dHJzLnBvZHMgJiYgKFxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBuYW1lPVwicG9kXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQb2QgTmFtZVwiXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2F0dHJzLnBvZHMubWFwKChucykgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogbnMsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG5zLFxuICAgICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXthdHRyc1sncG9kJ119XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBdHRyKCdwb2QnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YXR0cnMuY29udGFpbmVycyAmJiAoXG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9XCJjb250YWluZXJcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRhaW5lciBOYW1lXCJcbiAgICAgICAgICAgICAgb3B0aW9ucz17YXR0cnMuY29udGFpbmVycy5tYXAoKG5zKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBucyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnMsXG4gICAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e2F0dHJzWydjb250YWluZXInXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUF0dHIoJ2NvbnRhaW5lcicpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwgImltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSAnLi4va2lubydcbmltcG9ydCBFcnJvciBmcm9tICcuLi9zaGFyZWQvZXJyb3InXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuaW1wb3J0IHsgVGVybWluYWxDZWxsQXR0cnMgfSBmcm9tICcuL3R5cGVzJ1xuXG5jb25zdCBsb2FkUmVhY3QgPSBhc3luYyAoXG4gIGN0eDogS2lub0NvbnRleHQsXG4gIGF0dHJzOiBUZXJtaW5hbENlbGxBdHRycyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoYXR0cnMubWl4X2VudiA9PSAncHJvZCcpIHtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE4L3VtZC9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpXG4gICAgYXdhaXQgY3R4LmltcG9ydEpTKFxuICAgICAgJ2h0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxOC4yLjAvdW1kL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycsXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUygnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3RAMTgvdW1kL3JlYWN0LmRldmVsb3BtZW50LmpzJylcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICAnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtZG9tQDE4LjIuMC91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGluaXQgPSBhc3luYyAoXG4gIGN0eDogS2lub0NvbnRleHQsXG4gIGF0dHJzOiBUZXJtaW5hbENlbGxBdHRycyxcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBhd2FpdCBsb2FkUmVhY3QoY3R4LCBhdHRycylcblxuICBjdHgucm9vdC5pbm5lckhUTUwgPSAnbG9hZGluZy4uLidcblxuICBjdHguaW1wb3J0Q1NTKCdtYWluLmNzcycpXG4gIGN0eC5pbXBvcnRDU1MoXG4gICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCcsXG4gIClcblxuICBjb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChjdHgucm9vdClcbiAgaWYgKGF0dHJzLmVycm9yKSB7XG4gICAgcmV0dXJuIHJvb3QucmVuZGVyKDxFcnJvciBtZXNzYWdlPXthdHRycy5lcnJvcn0gLz4pXG4gIH1cblxuICByb290LnJlbmRlcig8QXBwIGluaXRpYWxBdHRycz17YXR0cnN9IGN0eD17Y3R4fSAvPilcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFPQSxLQUFDLFdBQVk7QUFDWjtBQUVBLFVBQUksU0FBUyxDQUFDLEVBQUU7QUFDaEIsVUFBSSxtQkFBbUI7QUFFdkIsZUFBU0EsY0FBYTtBQUNyQixZQUFJLFVBQVUsQ0FBQztBQUVmLGlCQUFTLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQzFD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
