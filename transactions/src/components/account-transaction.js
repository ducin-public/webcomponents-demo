customElements.define('account-transaction', class AccountTransaction extends HTMLElement {
    styles(){
        return `
<style>
.negative{
    color: red;
    font-weight: bold;
}

.transaction {
    width: 400px;
}
.transaction span {
    width: 80px;
    padding: 10px;
}
</style>`;
    }
    render(){
        this.root.innerHTML = this.template(this.details);
    }
    connectedCallback(){
        this.root = this.attachShadow({mode: 'open'});;
        this.render();
    }
    template({date, title, amount, balance} = {}){
        return `${this.styles()}
<div class="transaction">
    <span class="date">${date ? date.substr(0, 10) : ''}</span>
    <span>${title}</span>
    <span class="amount ${ amount < 0 ? 'negative' : ''}">${amount}</span>
    <span class="date ${ balance < 0 ? 'negative' : ''}">${balance}</span>
</div>`;
    }
    get details(){
        return this._details;
    }
    set details(value){
        if (this._details === value) return;
        this._details = value;
        this.render();
    }
});

console.log('account-transaction');
