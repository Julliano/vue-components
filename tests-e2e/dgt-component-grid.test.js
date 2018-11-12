import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-grid`.page`${scenario.baseURL}`;

test('test card click inside grid slot', async t => {
    const card = Selector('.dgt-component-grid .material-icons');
    await t.click(card).wait(10);
});