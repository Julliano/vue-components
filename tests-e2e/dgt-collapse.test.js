/* eslint-disable */

import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-collapse`.page`${scenario.baseURL}`;

test('Open collapse', async t => {
    const dgtCollapse = await Selector('.dgt-collapse');
    const header = await Selector('.dgt-collapse .collapse-header span');
    await t.click(header).wait(10);
    const collapseContent = await Selector('.dgt-collapse .collapse-content');
    await t.expect(collapseContent.visible).eql(true);
    await t.expect(dgtCollapse.hasClass('opened')).eql(true);
});
test('Expand collapse', async t => {
    const dgtCollapse = await Selector('.dgt-collapse');
    const header = await Selector('.dgt-collapse .collapse-header span');
    await t.click(header).wait(10);
    const collapseContent = await Selector('.dgt-collapse .collapse-content');
    await t.expect(collapseContent.visible).eql(true);
    const footer = await Selector('.dgt-collapse .collapse-footer');
    await t.click(footer).wait(10);
    await t.expect(dgtCollapse.hasClass('expanded')).eql(true);
});
