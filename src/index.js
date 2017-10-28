import numeral from 'numeral';

const bitcoinValue = numeral(5740.22).format('$1,000.00');
console.log(`The value of a bitcoin today is ${bitcoinValue}`);
