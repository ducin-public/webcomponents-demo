class Employee extends HTMLElement {
  constructor(){
    super();
    this._employee = null;
  }

  get employee(){
    return this._employee;
  }

  set employee(value){
    this._employee = value;
    this.render();
  }

  render(){
    const e = this._employee;
    this.innerHTML = e ? `<div>${e.firstName} ${e.lastName}, ${e.title}</div>` : ''
  }

  connectedCallback(){
    this.render();
  }
}

customElements.define('e-employee', Employee)
