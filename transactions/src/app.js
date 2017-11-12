import { getTransactions } from './data';
// import './components/account-history.js';
// import './components/account-transaction.js';

const setBody = (content) => document.body.innerHTML = content;

getTransactions()
  .then(transactions => {
    let html = transactions.map(t => `<account-transaction id="${t.id}"></account-transaction>`).join('');
    setBody(html);
    document.querySelectorAll('account-transaction').forEach((t, idx) => {
      t.details = transactions[idx];
    })
  });
