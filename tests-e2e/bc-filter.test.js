/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`bc-filter-attrib`.page`${scenario.baseBCURL}`;


test(`Atributos não compatíveis com o filtro não devem ser exibidos`, async t => {
    const bcFilterUi = Selector('.bc-filter-ui');
    await selectOptionMenu(t, bcFilterUi, 0);
    await verifyHowManyOptionsOpened(t, bcFilterUi, '.bc-filter-attrib', 12);
});

test(`Novo critério de atributo do grupo 1 - tipo inteiro`, async t => {
    const bcFilterUi = Selector('.bc-filter-ui');
    const bcFilterAttrib = Selector('.bc-filter-attrib');
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'tamanho');
    await verifyHowManyOptionsOpened(t, bcFilterAttrib, '.bc-filter-operator', 11);
});

async function selectOptionMenu(t, combo, valueToSelect) {
    const selectTag = combo.find('select');
    const optionTag = selectTag.find(`option[value="${valueToSelect}"]`);
    await t.click(selectTag).click(optionTag);
    await t.expect(selectTag.value).eql(String(valueToSelect));
}

async function selectOptionMenuByNth(t, combo, valueToSelect) {
    const selectTag = combo.find('select');
    const optionTag = selectTag.find(`option[name="${valueToSelect}"]`);
    await t.click(selectTag).click(optionTag);
}

async function verifyHowManyOptionsOpened(t, component, concat, amount) {
    const sourcePopover = component.find(`${concat} select option`);
    await t.expect(sourcePopover.count).eql(amount);
}
