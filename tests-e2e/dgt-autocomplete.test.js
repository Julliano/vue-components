/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-autocomplete`.page`${scenario.baseURL}`;

test('insert using autocomplete', async t => {
    const inputTag = Selector('.autocomplete input');
    await t.typeText(inputTag, 'Ba').wait(700).pressKey('down').wait(700).pressKey('enter').wait(700);
});

test('check remove of existing value from auto complete options', async t => {
    const inputTag = Selector('.autocomplete input');
    await t.typeText(inputTag, 'Ba').wait(300).pressKey('enter');
    await t.typeText(inputTag, 'Ba').wait(1000);
});
