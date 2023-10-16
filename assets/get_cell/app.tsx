import { ComponentProps, PropsWithRef, PropsWithoutRef } from "react";
import { GETCellAttrs } from "./types";
import { KinoContext } from "../kino";
import { useAttrsState } from "../shared/app";

interface AppProps {
  initialAttrs: GETCellAttrs;
  ctx: KinoContext<GETCellAttrs>;
}

const App = ({ initialAttrs, ctx }: AppProps) => {
  const [attrs, updateAttr] = useAttrsState<GETCellAttrs>(ctx, initialAttrs);
  return <div>Hello World</div>;
};

export default App;
