/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`bc-filter-attrib`.page`${scenario.baseBCURL}`;

const bcSwitch = Selector('.switch-label');
const bcFilterUi = Selector('.bc-filter-ui');
const bcFilterAttrib = Selector('.bc-filter-attrib');
const bcFilterOper = Selector('.bc-filter-operator');
const bcFilterAttribOtherUi = Selector('.bc-filter-ui .bc-filter-attrib');

test(`Atributos não compatíveis com o filtro não devem ser exibidos`, async t => {
    const bcFilterUi = Selector('.bc-filter-ui');
    await selectOptionMenu(t, bcFilterUi, 0);
    await verifyHowManyOptionsOpened(t, bcFilterUi, '.bc-filter-attrib', 12);
});

test(`Checar se limpa valor de input e operador ao trocar UI`, async t => {
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'tamanho');
    await verifyHowManyOptionsOpened(t, bcFilterAttrib, '.bc-filter-operator', 11);
    await selectOptionMenuByNth(t, bcFilterOper, 'EQUAL');
    await selectOptionMenu(t, bcFilterUi, 1);
    await checkOptionMenuDefault(t, bcFilterAttrib);
});

test(`Selecionar atributo e validar input preenchido conforme mascara- tipo inteiro`, async t => {
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'tamanho');
    await verifyHowManyOptionsOpened(t, bcFilterAttrib, '.bc-filter-operator', 11);
    await selectOptionMenuByNth(t, bcFilterOper, 'EQUAL');
    await insertInputValue(t, bcFilterOper, '.bc-filter-field', 'abc');
    await checkInputValue(t, bcFilterOper, '.bc-filter-field', '');
    await insertInputValue(t, bcFilterOper, '.bc-filter-field', '1212');
    await checkInputValue(t, bcFilterOper, '.bc-filter-field', '1212');
});

test(`Selecionar atributo e validar input preenchido conforme mascara e troca de tipo de operador mantendo valor do input - tipo inteiro`, async t => {
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'tamanho');
    await verifyHowManyOptionsOpened(t, bcFilterAttrib, '.bc-filter-operator', 11);
    await selectOptionMenuByNth(t, bcFilterOper, 'EQUAL');
    await insertInputValue(t, bcFilterOper, '.bc-filter-field', 'abc');
    await checkInputValue(t, bcFilterOper, '.bc-filter-field', '');
    await insertInputValue(t, bcFilterOper, '.bc-filter-field', '1212');
    await checkInputValue(t, bcFilterOper, '.bc-filter-field', '1212');
    await selectOptionMenuByNth(t, bcFilterOper, 'RANGE');
    await checkInputValue(t, bcFilterOper, '.bc-filter-field', '1212');
});

test(`Selecionar segundo atributo e validar troca de switch de AND para OR`, async t => {
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib.nth(0), 'tamanho');
    await selectOptionMenuByNth(t, bcFilterAttrib.nth(1), 'tamanho');
    await t.click(bcSwitch);
    const switchValue = Selector('.container.OR');
    await t.expect(switchValue.count).eql(1);
});

test(`Validação de botoẽs apagar (UI, operador, field)`, async t => {
    const botaoOperador = Selector('.bc-filter-operator .btn-filter .mdi-close');
    const botaoInput = Selector('.bc-filter-operator .bc-filter-field .btn-filter .mdi-close');
    const botaoUI = Selector('.btn-filter .mdi-close');
    await selectOptionMenu(t, bcFilterUi, 0);
    await t.click(botaoUI);
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'conta_servico');
    await t.click(botaoOperador);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'conta_servico');
    await selectOptionMenuByNth(t, bcFilterOper, 'EQUAL');
    await insertInputValue(t, bcFilterOper, '.bc-filter-field', '1212');
    await t.click(botaoInput);
});

test(`Selecionar atributo e validar input preenchido conforme mascara- tipo double`, async t => {
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'relevancia');
    await verifyHowManyOptionsOpened(t, bcFilterAttrib, '.bc-filter-operator', 11);
    await selectOptionMenuByNth(t, bcFilterOper, 'EQUAL');
    await insertInputValue(t, bcFilterOper, '.bc-filter-field', 'abc');
    await checkInputValue(t, bcFilterOper, '.bc-filter-field', '');
    await insertInputValue(t, bcFilterOper, '.bc-filter-field', '1212');
    await checkInputValue(t, bcFilterOper, '.bc-filter-field', '1212');
});

test(`Selecionar atributo e validar que input não apareça - tipo _meta_selecao`, async t => {
    const bcFilterOperMeta = Selector('.bc-filter-operator .bc-meta-selection-field');
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'flg_armazenar');
    await selectOptionMenuByNth(t, bcFilterOperMeta, 'S');
    await verifyInputNotExist(t, bcFilterOperMeta, '.bc-filter-field');
});

test(`Selecionar atributo e validar que input não apareça - tipo _meta_selecao`, async t => {
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'conta_servico');
    await selectOptionMenuByNth(t, bcFilterOper, 'ANY_CONTENT');
    await verifyInputNotExist(t, bcFilterOper, '.bc-filter-field');
});

test(`Selecionar atributo, operador e validar que input apareça - tipo _texto_delimitado`, async t => {
    const bcFilterOper = Selector('.bc-filter-operator');
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'conta_servico');
    await selectOptionMenuByNth(t, bcFilterOper, 'EQUAL');
    await verifyInputExist(t, bcFilterOper, '.bc-filter-field', 1);
});

test(`Selecionar atributo e operador, preencher input e depois alterar atributo verificando se some o input e se mudam os operadores`, async t => {
    const bcFilterOper = Selector('.bc-filter-operator');
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'conta_servico');
    await selectOptionMenuByNth(t, bcFilterOper, 'EQUAL');
    await verifyInputExist(t, bcFilterOper, '.bc-filter-field', 1);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'tamanho');
    await verifyHowManyOptionsOpened(t, bcFilterAttrib, '.bc-filter-operator', 11);
    await verifyInputNotExist(t, bcFilterOper, '.bc-filter-field input');
});

test(`Selecionar atributo e operador, preencher input e depois alterar operador para RANGE verificando se a quantidade de input altera`, async t => {
    const bcFilterOper = Selector('.bc-filter-operator');
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'tamanho');
    await selectOptionMenuByNth(t, bcFilterOper, 'EQUAL');
    await verifyInputExist(t, bcFilterOper, '.bc-filter-field', 1);
    await selectOptionMenuByNth(t, bcFilterOper, 'RANGE');
    await verifyInputExist(t, bcFilterOper, '.bc-filter-field', 2);
});

test(`Selecionar atributo e operador, validar se aparece inputs do tipo date e hour`, async t => {
    const bcFilterOper = Selector('.bc-filter-operator');
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'data_inicial');
    await selectOptionMenuByNth(t, bcFilterOper, 'EQUAL');
    await verifyInputExist(t, bcFilterOper, '.bc-filter-field', 2);
    await confirmDateAndHourInputs(t, bcFilterOper, '.bc-filter-field');
});

test(`Selecionar atributo e operador alterar atributo para tipo outra_ui e checar se monta atrib_group`, async t => {
    const bcFilterOper = Selector('.bc-filter-operator');
    await selectOptionMenu(t, bcFilterUi, 0);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'tamanho');
    await selectOptionMenuByNth(t, bcFilterOper, 'EQUAL');
    await verifyInputExist(t, bcFilterOper, '.bc-filter-field', 1);
    await selectOptionMenuByNth(t, bcFilterAttrib, 'operacao');
    await verifyHowManyOptionsOpened(t, bcFilterAttribOtherUi.nth(1), '.bc-filter-group', 11);
});

async function selectOptionMenu(t, combo, valueToSelect) {
    const selectTag = combo.find('select');
    const optionTag = selectTag.find(`option[value="${valueToSelect}"]`);
    await t.click(selectTag).click(optionTag);
    await t.expect(selectTag.value).eql(String(valueToSelect));
}

async function checkOptionMenuDefault(t, combo) {
    const selectTag = combo.find('select');
    await t.expect(selectTag.value).eql('');
}

async function selectOptionMenuByNth(t, combo, valueToSelect) {
    const selectTag = combo.find('select');
    const optionTag = selectTag.find(`option[name="${valueToSelect}"]`);
    await t.click(selectTag).click(optionTag);
}

async function confirmDateAndHourInputs(t, component, concat) {
    const sourcePopover = component.find(`${concat} input[type="date"]`);
    const sourcePopover2 = component.find(`${concat} input[type="time"]`);
    await t.expect(sourcePopover.count).eql(1);
    await t.expect(sourcePopover2.count).eql(1);
}

async function verifyHowManyOptionsOpened(t, component, concat, amount) {
    const sourcePopover = component.find(`${concat} select option`);
    await t.expect(sourcePopover.count).eql(amount);
}

async function verifyInputNotExist(t, component, concat) {
    const sourcePopover = component.find(`${concat} input`);
    await t.expect(sourcePopover.count).eql(0);
}

async function verifyInputExist(t, component, concat, count) {
    const sourcePopover = component.find(`${concat} input`);
    await t.expect(sourcePopover.count).eql(count);
}

async function insertInputValue(t, component, concat, text) {
    const sourcePopover = component.find(`${concat} input`);
    await t.typeText(sourcePopover, text);
}

async function checkInputValue(t, component, concat, text) {
    const sourcePopover = component.find(`${concat} input`);
    await t.expect(sourcePopover.value).eql(text);
}
