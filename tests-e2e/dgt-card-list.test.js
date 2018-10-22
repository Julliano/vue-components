/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-card-list`.page`${scenario.baseURL}`;

test('insert and remove tag', async t => {
    const card = Selector('#dgt-card-list .material-icons');
    await t.click(card).wait(1000);
});