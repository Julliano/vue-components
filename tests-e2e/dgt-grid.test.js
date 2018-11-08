import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-Grid`.page`${scenario.baseURL}`;

test('Drag an item from the toolbox', async t => {
    await t.dragToElement('.col.col-1 .row-header', '.col.col-2').wait(500);
    await t.dragToElement('.col.col-3 .row-header', '.col.col-4').wait(500);
    await t.dragToElement('.col.col-5 .row-header', '.col.col-6').wait(500);
});

test('check if contains header line', async t => {
    let rowHeader = Selector('.row row-header');
    await t.expect(rowHeader);
});

test('order by column', async t => {
    let cols = Selector('.col');
    const colCount = await cols.count;
    for (let i = 0; i < colCount; i++) {
        await t.click(Selector(`.col.col-${i} .row-header`)).wait(100);
    }
});

test('select row', async t => {
    let cols = Selector('.col');
    const colCount = await cols.count;
    for (let i = 0; i < colCount; i++) {
        const rows = Selector(`.col.col-${i} .row`);
        const rowsCount = await rows.count;
        for (let i = 0; i < rowsCount; i++) {
            await t.click(rows.nth(i)).wait(100);
        }
    }
});

test('click checkbox', async t => {
    const checkbox = Selector('.customColumn input[type=checkbox]');
    const checkboxCount = await checkbox.count;

    for (let i = 0; i < checkboxCount; i++) {
        await t.click(checkbox.nth(i)).wait(100);
    }
});
