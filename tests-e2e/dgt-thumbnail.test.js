import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-thumbnail`.page`${scenario.baseURL}`;

test('Is thumbnail checked?', async t => {
    const thumbnail = await Selector('.thumbnail:nth-child(1)');
    const checkbox = await Selector('[for=thumb-0]');
    await t.hover(thumbnail).click(checkbox).wait(10);
    await t.expect(thumbnail.hasClass('checked')).eql(true);
});

test('Is thumbnail selected?', async t => {
    const thumbnail = await Selector('.thumbnail:nth-child(1)');
    const thumbContainer = await Selector('.thumbnail:nth-child(1) .thumb-container');
    await t.click(thumbContainer).wait(10);
    await t.expect(thumbnail.hasClass('selected')).eql(true);
});

test('Is preview (gif) visible?', async t => {
    const thumbnail = await Selector('.thumbnail:nth-child(9)');
    await t.hover(thumbnail).wait(2100);
    const gif = await Selector('.thumbnail:nth-child(9) .gif')
    await t.expect(gif.visible).eql(true);
});

test('Is video duration visible?', async t => {
    const videoDuration = await Selector('.thumbnail:nth-child(9) .video-duration');
    await t.expect(videoDuration.visible).eql(true);
});

test('Is email visible?', async t => {
    const footer = await Selector('.thumbnail:nth-child(9) .footer');
    await t.expect(footer.visible).eql(true);
    await t.expect(footer.innerText).eql('usuariodoalem@bol.com.br');
});


