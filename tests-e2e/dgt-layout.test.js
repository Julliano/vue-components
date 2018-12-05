import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-layout`.page`${scenario.baseURL}`;

test('Resize layout', async t => {
    const column = await Selector('.column-1');
    const initialWidth = await column.offsetWidth;
    await t.drag('.horizontal-grip-area', -200, 0).wait(2000);
    await t.expect(await column.offsetWidth).notEql(initialWidth);

});
