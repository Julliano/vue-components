/* eslint-disable */
import { mount } from '@vue/test-utils';
import dgtTagInput from '../src/components/dgt-tag-input.vue';

describe('dgtTagInput', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(dgtTagInput);
    });

    test('Verifica se é uma instância Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

});
