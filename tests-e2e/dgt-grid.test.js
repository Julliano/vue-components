/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`transmitter-message`.page`${scenario.baseURL}`;

test('check if contains header line', async t => {
    let rowHeader = Selector('.row row-header');
    await t.expect(rowHeader);
});

test('check if contains all columns', async t => {
    let col = Selector('.col');
    await t.expect(col.count).eql(6);
});

test('check if contains all lines', async t => {
    let row = Selector('.row');
    await t.expect(row.count).eql(24);
});

test('order by column', async t => {
    let cols = Selector('.col');
    const colCount = await cols.count;
    for (let i = 0; i < colCount; i++) {
        await t.click(Selector(`.col.col-${i}`)).wait(500);
    }
});

test('select row', async t => {
    const rows = Selector('.col.col-1 .row');
    const rowsCount = await rows.count;
    for (let i = 0; i < rowsCount; i++) {
        await t.click(rows.nth(i)).wait(500);
    }
});

test('click checkbox', async t => {
    const checkbox = Selector('.customColumn input[type=checkbox]');
    const checkboxCount = await checkbox.count;

    for (let i = 0; i < checkboxCount; i++) {
        await t.click(checkbox.nth(i)).wait(500);
    }
});

test('Drag an item from the toolbox', async t => {
    await t.dragToElement('.col.col-1', '.col.col-2').wait(1000);
});
