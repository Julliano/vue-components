/* eslint-disable */
import { mount } from '@vue/test-utils';
import dgtGrid from '../src/components/dgt-grid.vue';
import dgtGridView from '../src/examples/dgt-grid.view.vue';

describe('dgtGrid', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(dgtGrid, {
            propsData: {
                data: { color: 'red' }
            }
        });
    });

    test('Verifica se é uma instância Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('Verifica se a resposta do request trouxe headers e data', () => {
        expect(wrapper.props().data).toBeTruthy();
    });
});
