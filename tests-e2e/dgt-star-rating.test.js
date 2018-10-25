/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-star-rating`.page`${scenario.baseURL}`;

test('change star rating value', async t => {
    const star = Selector('.star-3');
    await t.click(star).wait(500);
    const star1 = Selector('.star-1');
    await t.click(star1).wait(500);
});

