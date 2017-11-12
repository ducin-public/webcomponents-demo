class EmployeeList extends HTMLElement {
  constructor(){
    super();
    this._label = 'My List';
    this._employees = null;
  }

  static get observedAttributes(){
    return ['label']
  }

  fetchData(){
    fetch('http://localhost:3000/employees')
      .then(res => res.json())
      .then(employees => {
        this._employees = employees
        this.render(); // XxXXXXXXXXXX
      })
  }

  attributeChangedCallback(attr, oldValue, newValue){
    switch(attr){
      case 'label':
        this._label = newValue;
        this.render();
        break;
    }
  }

  // instr IF:
  //  COND ? Y : N
  // for.while:
  //  [].map
  render(){
    this.innerHTML = `<h1>${this._label}</h1>
      ${ this._employees
        ? `<div>${this._employees.map(e =>
          `<e-employee id="${e.id}"></e-employee>`
          // `<div>${e.firstName} ${e.lastName}, ${e.title}</div>`
        ).join('\n')}</div>`
        : ''}
    `

    if (this._employees){
      this.querySelectorAll('e-employee').forEach((node, idx) => {
        // @ts-ignore
        node.employee = this._employees[idx]
      })
    }
  }

  connectedCallback(){
    this.fetchData();
    this.render();
  }
}

customElements.define('e-employee-list', EmployeeList)
