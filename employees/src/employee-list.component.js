class EmployeeList extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({mode: 'open'});
    // this.root = this.shadowRoot
    this.root = this;
    this.employees = null;
    this.loading = false;
    this._label = 'Test Label';
  }

  static get observedAttributes() {
    return ['label'];
  }

  fetchData(){
    this.employees = null;
    this.loading = true;
    this.render();
    fetch(`http://localhost:3000/employees/`)
      .then(res => res.json())
      .then(employees => {
        this.employees = employees;
        this.loading = false;
        this.render();
      })
  }

  render() {
    // console.log(this.getAttribute('label'))
    this.root.innerHTML = `
      <h2>${this._label}</h2>
      <button>reload</button>
      ${ this.loading ? '<x-loader></x-loader>' : '' }
      ${ this.employees
        ? this.employees.map((e, idx) => `<x-employee idx="${idx + 1}"></x-employee>`).join('\n')
        : '' }
    `

    if (this.employees) {
      this.querySelectorAll('x-employee').forEach((e, idx) => {
        e.employee = this.employees[idx]
      })
    }

    // yep, this is super inefficient
    this.querySelector('button').addEventListener('click', () => {
      this.fetchData();
    })
  }

  connectedCallback() {
    this.fetchData()
    this.render()
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    console.log(attr, oldValue, newValue);
    switch(attr){
      case 'label':
        this._label = newValue;
        break;
    }
  }

  // set value(value) {
  //   this._value = value;
  //   this.render();
  // }

  // get value() {
  //   return this._value;
  // }

  // adoptedCallback()

  // disconnectedCallback()
}

customElements.define('x-employee-list', EmployeeList);

// <x-employee-list label="hejo"></x-employee-list>

// var list = document.querySelector('x-employee-list')
