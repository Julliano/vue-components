import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`transmitter-message`.page`${scenario.baseURL}`;

test('swap between tabs', async t => {
    let tabs = Selector('.tabs-list .tab');
    const tabCount = await tabs.count;
    for (let i = 0; i < tabCount; i++) {
        const tab = Selector(`.tab.tab-${i}`);
        await t.click(tab).wait(500);
    }
});
