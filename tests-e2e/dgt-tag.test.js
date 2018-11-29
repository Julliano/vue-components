/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-tag`.page`${scenario.baseURL}`;

test('insert and remove tag', async t => {
    const inputTag = Selector('#input-tag');
    await t.typeText(inputTag, 'Ba').wait(10).pressKey('enter');
    const deleteTagB = Selector('.tag-0 button.delete');
    await t.click(deleteTagB).wait(10);
    const tags = Selector('.tag');
    await t.expect(tags.count).eql(0);
});

test('insert tag, and try insert the same tag again', async t => {
    const inputTag = Selector('#input-tag');
    await t.typeText(inputTag, 'Ba').wait(10).pressKey('enter');
    await t.typeText(inputTag, 'Ba').wait(10).pressKey('enter');
    const tags = Selector('.tag');
    await t.expect(tags.count).eql(1);
});

test('insert tag using comma key', async t => {
  const inputTag = Selector('#input-tag');
  await t.typeText(inputTag, 'Ba').wait(10).pressKey(',');
  const deleteTagB = Selector('.tag-0 button.delete');
  await t.click(deleteTagB).wait(10);
  const tags = Selector('.tag');
  await t.expect(tags.count).eql(0);
});

test('insert tag, and remove using backspace and delete key', async t => {
  const inputTag = Selector('#input-tag');
  await t.typeText(inputTag, 'one').wait(10).pressKey(',');
  await t.typeText(inputTag, 'two').wait(10).pressKey('enter');
  await t.typeText(inputTag, 'three').wait(10).pressKey(',');
  await t.typeText(inputTag, 'four').wait(10).pressKey('enter');
  await t.wait(10).pressKey('delete');
  await t.wait(10).pressKey('backspace');
  const tags = Selector('.tag');
  await t.expect(tags.count).eql(2);
});
