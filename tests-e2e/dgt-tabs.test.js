import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-tabs`.page`${scenario.baseURL}`;

test('swap tab', async t => {
    const tab = Selector('.dgt-tabs .dgt-tab-item:nth-of-type(3)');
    await t.click(tab).wait(10);
    const tabContent = Selector('.tab-content[active]');
    await t.expect(tabContent.innerText).eql('Conteúdo tab 3');
});
