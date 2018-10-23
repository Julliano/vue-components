/* eslint-disable */
import { mount } from '@vue/test-utils';
import dgtTagInput from '../src/components/dgt-tag-input.vue';

describe('dgtTagInput', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(dgtTagInput, {
          propsData: {
            data: { icon: 'add', name: 'Nova pesquisa...', url: 'New search' }
          }
        });
    });

    test('Verifica se é uma instância Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('Verifica se a resposta do request trouxe o data', () => {
        expect(wrapper.props().data).toBeTruthy();
    });
});
