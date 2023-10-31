// assets/kino_terminal/main.ts
async function init(ctx, attrs) {
  await ctx.importCSS("https://cdn.jsdelivr.net/npm/xterm@5.0.0/css/xterm.css");
  await ctx.importJS(
    "https://cdn.jsdelivr.net/npm/xterm@5.0.0/lib/xterm.min.js"
  );
  ctx.root.innerHTML = `
      <div id="k8s-terminal">
        <div class="k8s-xtermjs-container"></div>
      </div>
    `;
  const k8s_xterm = new Terminal({ convertEol: true });
  k8s_xterm.onKey((key) => ctx.pushEvent("key", key.key));
  k8s_xterm.open(ctx.root.querySelector(".k8s-xtermjs-container"));
  ctx.handleEvent("print-terminal", (data) => k8s_xterm.write(data));
  ctx.handleEvent("dispose-terminal", () => k8s_xterm.dispose());
  k8s_xterm.write(attrs.buffer);
}
export {
  init
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vYXNzZXRzL2tpbm9fdGVybWluYWwvbWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgS2lub0NvbnRleHQgfSBmcm9tICcuLi9raW5vJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdChjdHg6IEtpbm9Db250ZXh0LCBhdHRycykge1xuICBhd2FpdCBjdHguaW1wb3J0Q1NTKCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3h0ZXJtQDUuMC4wL2Nzcy94dGVybS5jc3MnKVxuICBhd2FpdCBjdHguaW1wb3J0SlMoXG4gICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0veHRlcm1ANS4wLjAvbGliL3h0ZXJtLm1pbi5qcycsXG4gIClcblxuICBjdHgucm9vdC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGlkPVwiazhzLXRlcm1pbmFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJrOHMteHRlcm1qcy1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGBcblxuICBjb25zdCBrOHNfeHRlcm0gPSBuZXcgVGVybWluYWwoeyBjb252ZXJ0RW9sOiB0cnVlIH0pXG4gIGs4c194dGVybS5vbktleSgoa2V5KSA9PiBjdHgucHVzaEV2ZW50KCdrZXknLCBrZXkua2V5KSlcbiAgazhzX3h0ZXJtLm9wZW4oY3R4LnJvb3QucXVlcnlTZWxlY3RvcignLms4cy14dGVybWpzLWNvbnRhaW5lcicpKVxuICBjdHguaGFuZGxlRXZlbnQoJ3ByaW50LXRlcm1pbmFsJywgKGRhdGEpID0+IGs4c194dGVybS53cml0ZShkYXRhKSlcbiAgY3R4LmhhbmRsZUV2ZW50KCdkaXNwb3NlLXRlcm1pbmFsJywgKCkgPT4gazhzX3h0ZXJtLmRpc3Bvc2UoKSlcbiAgazhzX3h0ZXJtLndyaXRlKGF0dHJzLmJ1ZmZlcilcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxlQUFzQixLQUFLLEtBQWtCLE9BQU87QUFDbEQsUUFBTSxJQUFJLFVBQVUsd0RBQXdEO0FBQzVFLFFBQU0sSUFBSTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBRUEsTUFBSSxLQUFLLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1yQixRQUFNLFlBQVksSUFBSSxTQUFTLEVBQUUsWUFBWSxLQUFLLENBQUM7QUFDbkQsWUFBVSxNQUFNLENBQUMsUUFBUSxJQUFJLFVBQVUsT0FBTyxJQUFJLEdBQUcsQ0FBQztBQUN0RCxZQUFVLEtBQUssSUFBSSxLQUFLLGNBQWMsd0JBQXdCLENBQUM7QUFDL0QsTUFBSSxZQUFZLGtCQUFrQixDQUFDLFNBQVMsVUFBVSxNQUFNLElBQUksQ0FBQztBQUNqRSxNQUFJLFlBQVksb0JBQW9CLE1BQU0sVUFBVSxRQUFRLENBQUM7QUFDN0QsWUFBVSxNQUFNLE1BQU0sTUFBTTtBQUM5QjsiLAogICJuYW1lcyI6IFtdCn0K
