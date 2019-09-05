/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-infinite-scroll`.page`${scenario.baseURL}`;

test('test infinite-scroll scroll bottom and insert more itens', async t => {
    const card5 = Selector('.dgt-infinite-scroll .card-index-5');
    await t.click(card5).wait(10);
    await t.eval(() => document.querySelector(".dgt-infinite-scroll").scrollTop = 395);
    const card7 = Selector('.dgt-infinite-scroll .card-index-7');
    await t.click(card7).wait(10);
});
