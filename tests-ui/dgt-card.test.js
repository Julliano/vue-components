/* eslint-disable */
import { mount } from '@vue/test-utils';
import dgtCard from '../src/components/dgt-card.vue';

describe('dgtCard', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(dgtCard, {
            propsData: {
                dataProps: { icon: 'add', name: 'Nova pesquisa...', url: 'New search' }
            }
        });
    });

    test('Verifica se é uma instância Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('Verifica se a resposta do request trouxe o data', () => {
        expect(wrapper.props().dataProps).toBeTruthy();
    });
});
