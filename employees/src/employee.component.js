class Employee extends HTMLElement {
  constructor(){
    super();
    // this.root = this.attachShadow({mode: 'open'});
    this.root = this;
  }

  set employee(value) {
    this._employee = value;
    this.render();
  }

  get employee() {
    return this._employee;
  }

  render(){
    const e = this._employee;
    this.root.innerHTML =  e ? `
      <div>
        ${this.getAttribute('idx')}. ${e.firstName} ${e.lastName}, ${e.title}
      </div>
    ` : '_';
  }

  connectedCallback(){
    this.render();
  }
}

customElements.define('x-employee', Employee)
