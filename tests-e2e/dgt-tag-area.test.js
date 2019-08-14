/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-tag-area`.page`${scenario.baseURL}`;

test('insert tag', async t => {
    const inputTag = Selector('#input-tag-area');
    await t.typeText(inputTag, 'Teste tag').wait(10).pressKey('enter');
    const deleteTagB = Selector('.tag-5 button.delete');
    await t.click(deleteTagB).wait(10);
    const tags = Selector('.tag');
    await t.expect(tags.count).eql(5);
});

test('filter tags', async t => {
    const inputTag = Selector('#input-filter-tag');
    await t.typeText(inputTag, 'Bla');
    const tags = Selector('.tag');
    await t.expect(tags.count).eql(1);
});

