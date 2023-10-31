async function o(e,i){await e.importCSS("https://cdn.jsdelivr.net/npm/xterm@5.0.0/css/xterm.css"),await e.importJS("https://cdn.jsdelivr.net/npm/xterm@5.0.0/lib/xterm.min.js"),e.root.innerHTML=`
      <div id="k8s-terminal">
        <div class="k8s-xtermjs-container"></div>
      </div>
    `;let r=e.root.querySelector(".k8s-xtermjs-container");if(r){let t=new Terminal({convertEol:!0});t.onKey(n=>e.pushEvent("key",n.key)),t.open(r),e.handleEvent("print-terminal",n=>t.write(n)),e.handleEvent("dispose-terminal",()=>t.dispose()),t.write(i.buffer)}}export{o as init};
