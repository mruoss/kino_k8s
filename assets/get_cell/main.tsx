import { AppContainer } from "../shared/app";
import { KinoContext } from "../kino";
import { GETCellAttrs } from "./types";
import Error from "../shared/error";
import App from "./app";

const loadReact = async (
  ctx: KinoContext<GETCellAttrs>,
  attrs: GETCellAttrs
): Promise<void> => {
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

export const init = async (
  ctx: KinoContext<GETCellAttrs>,
  attrs: GETCellAttrs
): Promise<void> => {
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
    return root.render(<Error message={attrs.error} />);
  }

  root.render(
    <AppContainer>
      <App initialAttrs={attrs} ctx={ctx} />
    </AppContainer>
  );
};
