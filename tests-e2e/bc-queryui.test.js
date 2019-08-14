/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`bc-queryui`.page`${scenario.baseBCURL}`;

test('Listagem de UI', async t => {
    const bcFilterUi = Selector('.bc-filter-ui');
    await t.expect(bcFilterUi.count).eql(1);

    await verifyAllOptionsExhibited(t, bcFilterUi.nth(0), 6);
});

test('Apresentação dos elementos na seleção da UI', async t => {
    const bcFilterUi = Selector('.bc-filter-ui');
    await verifyFilterUiAtIndex(t, bcFilterUi.nth(0), 0);
    await verifyFilterUiAtIndex(t, bcFilterUi.nth(1), 1);
});

test('Listagem das fontes', async t => {
    const bcFilterUi = Selector('.bc-filter-ui');

    await verifyHowManySourcesOpened(t, bcFilterUi.nth(0), 0);

    await selectOptionMenu(t, bcFilterUi.nth(0), 0);
    await sourcePopoverTests(t, bcFilterUi.nth(0));
    await verifyHowManySourcesOpened(t, bcFilterUi.nth(0), 1);
});

test('Habilitação da opção de fontes', async t => {
    const bcFilterUi = Selector('.bc-filter-ui');

    await verifyHowManySourcesOpened(t, bcFilterUi.nth(0), 0);
    await selectOptionMenu(t, bcFilterUi.nth(0), 1);
    await verifyHowManySourcesOpened(t, bcFilterUi.nth(0), 1);
});


async function verifyAllOptionsExhibited(t, bcFilterUi, amount) {
    const options = bcFilterUi.find('.bc-filter-ui-main > select option');
    await t.expect(options.count).eql(amount)
}

async function verifyFilterUiAtIndex(t, bcFilterUi, index) {
    const allFilterUis = Selector('.bc-filter-component .bc-filter-ui');
    await verifyHowManyFiltersOpened(t, allFilterUis, index);

    await verifyHowManyFiltersOpened(t, bcFilterUi.nth(index), 0);
    await selectOptionMenu(t, bcFilterUi, index);
    await t.expect(allFilterUis.count).eql(index + 2);
    await verifyHowManyFiltersOpened(t, bcFilterUi.nth(index), 1);

    await verifyHowManyFiltersOpened(t, allFilterUis, index + 1);
}

async function selectOptionMenu(t, bcFilterUi, valueToSelect) {
    const selectTag = bcFilterUi.find('select');
    const optionTag = selectTag.find(`option[value="${valueToSelect}"]`);
    await t.click(selectTag).click(optionTag);
    await t.expect(selectTag.value).eql(String(valueToSelect));
}

async function verifyHowManyFiltersOpened(t, component, amount) {
    const groupTag = component.find('.bc-filter-group');
    const attribTag = component.find('.bc-filter-attrib');
    const closeIcon = component.find('.mdi-close');

    await t.expect(groupTag.count).eql(amount);
    await t.expect(attribTag.count).eql(amount);
    await t.expect(closeIcon.count).eql(amount);
}

async function verifyHowManySourcesOpened(t, component, amount) {
    const sourceIcon = component.find('.mdi-database');
    const sourcePopover = component.find('.popover.dgt-context-menu-items');

    await t.expect(sourceIcon.count).eql(amount);
    await t.expect(sourcePopover.count).eql(amount);
}

async function checkDefaultValuesSourcePopover(t, sourceItens, checkedSourceItens) {
    await t.expect(sourceItens.count).eql(2);
    await t.expect(checkedSourceItens.count).eql(1);
    await t.expect(checkedSourceItens.value).eql('-1');
}

async function inverseCheckboxSourcePopover(t, checkedSourceItens, sourceItens) {
    await t.click(checkedSourceItens.parent().find('label'));
    await t.click(sourceItens.nth(1).parent().find('label'));
    await t.click(sourceItens.nth(1).parent().find('label'));
}

async function openSourcePopover(t, sourcePopover, sourceIcon) {
    await t.expect(sourcePopover.visible).eql(false);
    await t.click(sourceIcon);
    await t.expect(sourcePopover.visible).ok();
}

async function checkInversedDefaultValuesSourcePopover(t, sourceItens, checkedSourceItens) {
    await t.expect(sourceItens.count).eql(1);
    await t.expect(checkedSourceItens.count).eql(2);
    await t.expect(sourceItens.value).eql('-1');
}

async function sourcePopoverTests(t, bcFilterUi) {
    const sourceIcon = bcFilterUi.find('.mdi-database');
    const sourcePopover = bcFilterUi.find('.popover.dgt-context-menu-items');
    const sourceItens = bcFilterUi.find('.source-item input:not(:checked)');
    const checkedSourceItens = bcFilterUi.find('.source-item input:checked');

    await openSourcePopover(t, sourcePopover, sourceIcon);

    await checkDefaultValuesSourcePopover(t, sourceItens, checkedSourceItens);

    await inverseCheckboxSourcePopover(t, checkedSourceItens, sourceItens);
    await checkInversedDefaultValuesSourcePopover(t, sourceItens, checkedSourceItens);

    await t.click(bcFilterUi.find('button').withText('CANCELAR'));

    await openSourcePopover(t, sourcePopover, sourceIcon);

    await inverseCheckboxSourcePopover(t, checkedSourceItens, sourceItens);
    await checkInversedDefaultValuesSourcePopover(t, sourceItens, checkedSourceItens);

    await t.click(bcFilterUi.find('button').withText('SALVAR'));

    await openSourcePopover(t, sourcePopover, sourceIcon);

    await checkInversedDefaultValuesSourcePopover(t, sourceItens, checkedSourceItens);
}


