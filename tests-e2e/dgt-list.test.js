/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-list`.page`${scenario.baseURL}`;

test('test card click inside list slot', async t => {
  const card = Selector('.dgt-list-component .material-icons');
  await t.click(card).wait(1000);
});