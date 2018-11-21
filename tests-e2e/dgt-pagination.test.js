/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-pagination`.page`${scenario.baseURL}`;

test('paginatie from buttons', async t => {
});

test('insert value on input upper page last', async t => {
    const inputPage = Selector('.page-number-input');
    await t.typeText(inputPage, '10').wait(10).pressKey('enter')
    await t.expect(inputPage.value).contains(21);
});

test('insert a letter on input', async t => {
    const inputPage = Selector('.page-number-input');
    await t.typeText(inputPage, 'bc').wait(10).pressKey('enter')
    await t.expect(inputPage.value).contains(1);
});

test('insert null on input', async t => {
    const inputPage = Selector('.page-number-input');
    await t.click(inputPage).wait(10).pressKey('ctrl+a delete enter');
    await t.expect(inputPage.value).contains(1);
});

test('change page size', async t => {
    const inputPage = Selector('.page-number-input');
    await t.click(inputPage).wait(10).pressKey('ctrl+a delete enter');
    await t.expect(inputPage.value).contains(1);
});


const pageSizeSelect = Selector('.select-page-size');
const pageSizeOption = pageSizeSelect.find('option');

test(`Select page size`, async t => {
    await t.click(pageSizeSelect).wait(100);
    await t.click(pageSizeOption.withText('50')).wait(100);
    await t.expect(pageSizeSelect.value).eql('50');

    await t.click(pageSizeSelect).wait(100);
    await t.click(pageSizeOption.withText('100')).wait(100);
    await t.expect(pageSizeSelect.value).eql('100');

    await t.click(pageSizeSelect).wait(100);
    await t.click(pageSizeOption.withText('20')).wait(100);
    await t.expect(pageSizeSelect.value).eql('20');
});