async function o(t,i){await t.importCSS("https://cdnjs.cloudflare.com/ajax/libs/xterm/5.5.0/xterm.min.css"),await t.importJS("https://cdnjs.cloudflare.com/ajax/libs/xterm/5.5.0/xterm.js"),t.root.innerHTML=`
      <div id="k8s-terminal">
        <div class="k8s-xtermjs-container"></div>
      </div>
    `;let r=t.root.querySelector(".k8s-xtermjs-container");if(r){let e=new Terminal({convertEol:!0});e.onKey(({key:n})=>t.pushEvent("key",n)),e.open(r),t.handleEvent("print-terminal",n=>e.write(n)),t.handleEvent("dispose-terminal",()=>e.dispose()),e.write(i.buffer)}}export{o as init};
