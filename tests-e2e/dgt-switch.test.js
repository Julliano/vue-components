/* eslint-disable */

import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-switch`.page`${scenario.baseURL}`;

test('Teste switch muda o valor', async t => {
    const input = Selector('.default-switch input');
    const virtualCheckbox = Selector('.default-switch label');
    await t.expect(input.checked).eql(false);
    await t.click(virtualCheckbox).expect(input.checked).eql(true);
    await t.click(virtualCheckbox).expect(input.checked).eql(false);
});

