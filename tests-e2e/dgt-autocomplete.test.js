/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-autocomplete`.page`${scenario.baseURL}`;

test('teste autocomplete options', async t => {
    const inputTag = Selector('.autocomplete input');
    await t.typeText(inputTag, 'a').pressKey('down').wait(10);
});

