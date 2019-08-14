/* eslint-disable */
import { mount } from '@vue/test-utils';
import dgtTagArea from '../src/components/dgt-tag-area.vue';

describe('dgtTagArea', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(dgtTagArea);
    });

    test('Verifica se é uma instância Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

});
