async function o(n,r){await n.importCSS("https://cdn.jsdelivr.net/npm/xterm@5.0.0/css/xterm.min.css"),await n.importJS("https://cdn.jsdelivr.net/npm/xterm@5.0.0/lib/xterm.min.js"),n.root.innerHTML=`
      <div id="k8s-terminal">
        <div class="k8s-xtermjs-container"></div>
      </div>
    `;let i=n.root.querySelector(".k8s-xtermjs-container");if(i){let t=new Terminal({convertEol:!0});t.onKey(({key:e})=>n.pushEvent("key",e)),t.open(i),n.handleEvent("print-terminal",e=>t.write(e)),n.handleEvent("dispose-terminal",()=>t.dispose()),t.write(r.buffer)}}export{o as init};
