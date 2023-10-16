// assets/shared/app.tsx
var useAttrsState = (ctx, initialAttrs) => {
  const [attrs, setAttrs] = React.useState(initialAttrs);
  const updateAttr = (attrName) => (attrValue) => {
    ctx.pushEvent(`update_${attrName}`, attrValue);
  };
  React.useEffect(() => {
    ctx.handleEvent("update", (updates) => {
      setAttrs((attrs2) => ({
        ...Object.assign(attrs2, updates)
      }));
    });
  }, []);
  return [attrs, updateAttr];
};
var AppContainer = ({ children }) => /* @__PURE__ */ React.createElement("div", { className: "flex p-2 rounded-md bg-blue-100 border-gray-300 border border-solid font-inter font-medium text-gray-600" }, children);

// assets/shared/error.tsx
var Error = ({ message }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "flex p-2 rounded-md bg-red-100 border-red-700 border border-dashed" }, /* @__PURE__ */ React.createElement(
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
), /* @__PURE__ */ React.createElement("div", { className: "px-2 text-red-700 font-inter font-medium text-sm" }, message)));
var error_default = Error;

// assets/get_cell/app.tsx
var App = ({ initialAttrs, ctx }) => {
  const [attrs, updateAttr] = useAttrsState(ctx, initialAttrs);
  return /* @__PURE__ */ React.createElement("div", null, "Hello World");
};
var app_default = App;

// assets/get_cell/main.tsx
var loadReact = async (ctx, attrs) => {
  if (attrs.mix_env == "prod") {
    await ctx.importJS(
      "https://unpkg.com/react@18/umd/react.production.min.js"
    );
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
  console.log("attrs", attrs);
  console.log("ctx", ctx);
  ctx.root.innerHTML = "loading...";
  ctx.importCSS("main.css");
  ctx.importCSS(
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
  );
  const root = ReactDOM.createRoot(ctx.root);
  if (attrs.error) {
    return root.render(/* @__PURE__ */ React.createElement(error_default, { message: attrs.error }));
  }
  root.render(
    /* @__PURE__ */ React.createElement(AppContainer, null, /* @__PURE__ */ React.createElement(app_default, { initialAttrs: attrs, ctx }))
  );
};
export {
  init
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vYXNzZXRzL3NoYXJlZC9hcHAudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9zaGFyZWQvZXJyb3IudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9nZXRfY2VsbC9hcHAudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9nZXRfY2VsbC9tYWluLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSBcIi4uL2tpbm9cIjtcblxudHlwZSBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoXG4gIGF0dHJOYW1lOiBzdHJpbmdcbikgPT4gKEF0dHJWYWx1ZTogQXR0cnNUeXBlW2tleW9mIEF0dHJzVHlwZV0pID0+IHZvaWQ7XG5cbmV4cG9ydCBjb25zdCB1c2VBdHRyc1N0YXRlID0gPEF0dHJzVHlwZSBleHRlbmRzIHt9PihcbiAgY3R4OiBLaW5vQ29udGV4dDxBdHRyc1R5cGU+LFxuICBpbml0aWFsQXR0cnM6IEF0dHJzVHlwZVxuKTogW0F0dHJzVHlwZSwgVXBkYXRlQXR0ckZ1bjxBdHRyc1R5cGU+XSA9PiB7XG4gIGNvbnN0IFthdHRycywgc2V0QXR0cnNdID0gUmVhY3QudXNlU3RhdGU8QXR0cnNUeXBlPihpbml0aWFsQXR0cnMpO1xuICBjb25zdCB1cGRhdGVBdHRyOiBVcGRhdGVBdHRyRnVuPEF0dHJzVHlwZT4gPSAoYXR0ck5hbWUpID0+IChhdHRyVmFsdWUpID0+IHtcbiAgICBjdHgucHVzaEV2ZW50KGB1cGRhdGVfJHthdHRyTmFtZX1gLCBhdHRyVmFsdWUpO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY3R4LmhhbmRsZUV2ZW50PEF0dHJzVHlwZT4oXCJ1cGRhdGVcIiwgKHVwZGF0ZXMpID0+IHtcbiAgICAgIHNldEF0dHJzKChhdHRycykgPT4gKHtcbiAgICAgICAgLi4uT2JqZWN0LmFzc2lnbihhdHRycywgdXBkYXRlcyksXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFthdHRycywgdXBkYXRlQXR0cl07XG59O1xuXG5leHBvcnQgY29uc3QgQXBwQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHNXaXRoQ2hpbGRyZW4pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtMiByb3VuZGVkLW1kIGJnLWJsdWUtMTAwIGJvcmRlci1ncmF5LTMwMCBib3JkZXIgYm9yZGVyLXNvbGlkIGZvbnQtaW50ZXIgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMFwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuIiwgImludGVyZmFjZSBFcnJvclByb3BzIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuY29uc3QgRXJyb3IgPSAoeyBtZXNzYWdlIH06IEVycm9yUHJvcHMpID0+IChcbiAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcC0yIHJvdW5kZWQtbWQgYmctcmVkLTEwMCBib3JkZXItcmVkLTcwMCBib3JkZXIgYm9yZGVyLWRhc2hlZFwiPlxuICAgICAgPHN2Z1xuICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IGZsZXgtbm9uZSB0ZXh0LXJlZC03MDBcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICBkPVwiTTEyIDl2My43NW0tOS4zMDMgMy4zNzZjLS44NjYgMS41LjIxNyAzLjM3NCAxLjk0OCAzLjM3NGgxNC43MWMxLjczIDAgMi44MTMtMS44NzQgMS45NDgtMy4zNzRMMTMuOTQ5IDMuMzc4Yy0uODY2LTEuNS0zLjAzMi0xLjUtMy44OTggMEwyLjY5NyAxNi4xMjZ6TTEyIDE1Ljc1aC4wMDd2LjAwOEgxMnYtLjAwOHpcIlxuICAgICAgICA+PC9wYXRoPlxuICAgICAgPC9zdmc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgdGV4dC1yZWQtNzAwIGZvbnQtaW50ZXIgZm9udC1tZWRpdW0gdGV4dC1zbVwiPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yO1xuIiwgImltcG9ydCB7IENvbXBvbmVudFByb3BzLCBQcm9wc1dpdGhSZWYsIFByb3BzV2l0aG91dFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR0VUQ2VsbEF0dHJzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSBcIi4uL2tpbm9cIjtcbmltcG9ydCB7IHVzZUF0dHJzU3RhdGUgfSBmcm9tIFwiLi4vc2hhcmVkL2FwcFwiO1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuICBpbml0aWFsQXR0cnM6IEdFVENlbGxBdHRycztcbiAgY3R4OiBLaW5vQ29udGV4dDxHRVRDZWxsQXR0cnM+O1xufVxuXG5jb25zdCBBcHAgPSAoeyBpbml0aWFsQXR0cnMsIGN0eCB9OiBBcHBQcm9wcykgPT4ge1xuICBjb25zdCBbYXR0cnMsIHVwZGF0ZUF0dHJdID0gdXNlQXR0cnNTdGF0ZTxHRVRDZWxsQXR0cnM+KGN0eCwgaW5pdGlhbEF0dHJzKTtcbiAgcmV0dXJuIDxkaXY+SGVsbG8gV29ybGQ8L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCAiaW1wb3J0IHsgQXBwQ29udGFpbmVyIH0gZnJvbSBcIi4uL3NoYXJlZC9hcHBcIjtcbmltcG9ydCB7IEtpbm9Db250ZXh0IH0gZnJvbSBcIi4uL2tpbm9cIjtcbmltcG9ydCB7IEdFVENlbGxBdHRycyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4uL3NoYXJlZC9lcnJvclwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcblxuY29uc3QgbG9hZFJlYWN0ID0gYXN5bmMgKFxuICBjdHg6IEtpbm9Db250ZXh0PEdFVENlbGxBdHRycz4sXG4gIGF0dHJzOiBHRVRDZWxsQXR0cnNcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoYXR0cnMubWl4X2VudiA9PSBcInByb2RcIikge1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcbiAgICAgIFwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3RAMTgvdW1kL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzXCJcbiAgICApO1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcbiAgICAgIFwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtZG9tQDE4LjIuMC91bWQvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXCJcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGF3YWl0IGN0eC5pbXBvcnRKUyhcImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE4L3VtZC9yZWFjdC5kZXZlbG9wbWVudC5qc1wiKTtcbiAgICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgICBcImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxOC4yLjAvdW1kL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qc1wiXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGluaXQgPSBhc3luYyAoXG4gIGN0eDogS2lub0NvbnRleHQ8R0VUQ2VsbEF0dHJzPixcbiAgYXR0cnM6IEdFVENlbGxBdHRyc1xuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGF3YWl0IGxvYWRSZWFjdChjdHgsIGF0dHJzKTtcbiAgY29uc29sZS5sb2coXCJhdHRyc1wiLCBhdHRycyk7XG4gIGNvbnNvbGUubG9nKFwiY3R4XCIsIGN0eCk7XG5cbiAgY3R4LnJvb3QuaW5uZXJIVE1MID0gXCJsb2FkaW5nLi4uXCI7XG5cbiAgY3R4LmltcG9ydENTUyhcIm1haW4uY3NzXCIpO1xuICBjdHguaW1wb3J0Q1NTKFxuICAgIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwXCJcbiAgKTtcblxuICBjb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChjdHgucm9vdCk7XG4gIGlmIChhdHRycy5lcnJvcikge1xuICAgIHJldHVybiByb290LnJlbmRlcig8RXJyb3IgbWVzc2FnZT17YXR0cnMuZXJyb3J9IC8+KTtcbiAgfVxuXG4gIHJvb3QucmVuZGVyKFxuICAgIDxBcHBDb250YWluZXI+XG4gICAgICA8QXBwIGluaXRpYWxBdHRycz17YXR0cnN9IGN0eD17Y3R4fSAvPlxuICAgIDwvQXBwQ29udGFpbmVyPlxuICApO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFPTyxJQUFNLGdCQUFnQixDQUMzQixLQUNBLGlCQUMwQztBQUMxQyxRQUFNLENBQUMsT0FBTyxRQUFRLElBQUksTUFBTSxTQUFvQixZQUFZO0FBQ2hFLFFBQU0sYUFBdUMsQ0FBQyxhQUFhLENBQUMsY0FBYztBQUN4RSxRQUFJLFVBQVUsVUFBVSxZQUFZLFNBQVM7QUFBQSxFQUMvQztBQUVBLFFBQU0sVUFBVSxNQUFNO0FBQ3BCLFFBQUksWUFBdUIsVUFBVSxDQUFDLFlBQVk7QUFDaEQsZUFBUyxDQUFDQSxZQUFXO0FBQUEsUUFDbkIsR0FBRyxPQUFPLE9BQU9BLFFBQU8sT0FBTztBQUFBLE1BQ2pDLEVBQUU7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNILEdBQUcsQ0FBQyxDQUFDO0FBQ0wsU0FBTyxDQUFDLE9BQU8sVUFBVTtBQUMzQjtBQUVPLElBQU0sZUFBZSxDQUFDLEVBQUUsU0FBUyxNQUN0QyxvQ0FBQyxTQUFJLFdBQVUsOEdBQ1osUUFDSDs7O0FDMUJGLElBQU0sUUFBUSxDQUFDLEVBQUUsUUFBUSxNQUN2QiwwREFDRSxvQ0FBQyxTQUFJLFdBQVUsd0VBQ2I7QUFBQSxFQUFDO0FBQUE7QUFBQSxJQUNDLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLFNBQVE7QUFBQSxJQUNSLGdCQUFhO0FBQUEsSUFDYixRQUFPO0FBQUEsSUFDUCxlQUFZO0FBQUE7QUFBQSxFQUVaO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxrQkFBZTtBQUFBLE1BQ2YsbUJBQWdCO0FBQUEsTUFDaEIsR0FBRTtBQUFBO0FBQUEsRUFDSDtBQUNILEdBQ0Esb0NBQUMsU0FBSSxXQUFVLHNEQUNaLE9BQ0gsQ0FDRixDQUNGO0FBR0YsSUFBTyxnQkFBUTs7O0FDakJmLElBQU0sTUFBTSxDQUFDLEVBQUUsY0FBYyxJQUFJLE1BQWdCO0FBQy9DLFFBQU0sQ0FBQyxPQUFPLFVBQVUsSUFBSSxjQUE0QixLQUFLLFlBQVk7QUFDekUsU0FBTyxvQ0FBQyxhQUFJLGFBQVc7QUFDekI7QUFFQSxJQUFPLGNBQVE7OztBQ1RmLElBQU0sWUFBWSxPQUNoQixLQUNBLFVBQ2tCO0FBQ2xCLE1BQUksTUFBTSxXQUFXLFFBQVE7QUFDM0IsVUFBTSxJQUFJO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFDQSxVQUFNLElBQUk7QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0YsT0FBTztBQUNMLFVBQU0sSUFBSSxTQUFTLHFEQUFxRDtBQUN4RSxVQUFNLElBQUk7QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sT0FBTyxPQUNsQixLQUNBLFVBQ2tCO0FBQ2xCLFFBQU0sVUFBVSxLQUFLLEtBQUs7QUFDMUIsVUFBUSxJQUFJLFNBQVMsS0FBSztBQUMxQixVQUFRLElBQUksT0FBTyxHQUFHO0FBRXRCLE1BQUksS0FBSyxZQUFZO0FBRXJCLE1BQUksVUFBVSxVQUFVO0FBQ3hCLE1BQUk7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLFFBQU0sT0FBTyxTQUFTLFdBQVcsSUFBSSxJQUFJO0FBQ3pDLE1BQUksTUFBTSxPQUFPO0FBQ2YsV0FBTyxLQUFLLE9BQU8sb0NBQUMsaUJBQU0sU0FBUyxNQUFNLE9BQU8sQ0FBRTtBQUFBLEVBQ3BEO0FBRUEsT0FBSztBQUFBLElBQ0gsb0NBQUMsb0JBQ0Msb0NBQUMsZUFBSSxjQUFjLE9BQU8sS0FBVSxDQUN0QztBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFsiYXR0cnMiXQp9Cg==
