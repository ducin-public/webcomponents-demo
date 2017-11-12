class Loader extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({ mode: "open" })
    this.root = this.shadowRoot
  }

  connectedCallback(){
    this.render()
  }

  render(){
    this.root.innerHTML = `
      <style>
      .lds-facebook {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
      }
      .lds-facebook div {
        display: inline-block;
        position: absolute;
        left: 6px;
        width: 13px;
        background: #cef;
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
      }
      .lds-facebook div:nth-child(1) {
        left: 6px;
        animation-delay: -0.24s;
      }
      .lds-facebook div:nth-child(2) {
        left: 26px;
        animation-delay: -0.12s;
      }
      .lds-facebook div:nth-child(3) {
        left: 45px;
        animation-delay: 0;
      }
      @keyframes lds-facebook {
        0% {
          top: 6px;
          height: 51px;
        }
        50%, 100% {
          top: 19px;
          height: 26px;
        }
      }
      </style>
      
      <div class="lds-facebook"><div></div><div></div><div></div></div>
    `
  }

}

customElements.define('x-loader', Loader);
