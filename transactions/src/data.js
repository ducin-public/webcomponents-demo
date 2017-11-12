// http://json-schema-faker.js.org/#gist/eae1d6c220fcc2c361c3270709710e12/0.4.3

const toFixed2 = num => Math.round(num * 100) / 100;

// auxiliary function
const prepareTransactions = (transactions, currentBalance) => {
  transactions.forEach(t => {
    if (Math.random() > 0.5) t.amount *= -1;
    t.balance = toFixed2(currentBalance += t.amount);
  });
  return transactions;
}
import transactions from './transactions.json';

const delay = () => 500 + Math.random() * 1000;

const getTransactions = () => new Promise((res, rej) => {
  setTimeout(() => res(transactions), delay());
});

export { getTransactions };
