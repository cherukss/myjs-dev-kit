import './index.css';

import numeral from 'numeral';

const bitcoinValue = numeral(5740.22).format('$1,000.00');
//debugger;
console.log(`The value of a bitcoin today is ${bitcoinValue}`); // eslint-disable-line no-console
