import compose from 'lodash/fp/compose';
import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';

import { A } from './moduleA';
import { B } from './moduleB';

let a = new A;
let b = new B;

compose(
  filter(x => x > 0),
  map(x => x * 2)
)([-1, 0, 1]);
