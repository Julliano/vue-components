/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-card`.page`${scenario.baseURL}`;

test('test card click', async t => {
    const card = Selector('.dgt-card-component .material-icons');
    await t.click(card).wait(1000);
});