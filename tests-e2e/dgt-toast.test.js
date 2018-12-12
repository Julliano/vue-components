import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-toast`.page`${scenario.baseURL}`;

test('Show Toast', async t => {
    const toast = await Selector('.toast');
    const toastButton = await Selector('.show-toast');
    await t.click(toastButton).wait(10);
    await t.expect(toast.visible).eql(true);
    await t.expect(toast.innerText).eql('Aconteceu algum erro');
});
