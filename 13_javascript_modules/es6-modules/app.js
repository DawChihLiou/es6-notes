import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

const ages = [1, 3, 3, 55, 63, 55, 48];
console.log(uniq(ages));
