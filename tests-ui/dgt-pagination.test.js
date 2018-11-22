/* eslint-disable */
import { mount } from '@vue/test-utils';
import dgtTabs from '../src/components/dgt-pagination.vue';

describe('dgtPagination', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(dgtTabs, {
            propsData: {
                totalPagesDefault: 2,
                totalRegisters: 201,
                currentPage: 1,
                pageSizes: [50, 70, 100],
                pageSizeDefault: 50
            }
        });
    });

    test('Verifica se é uma instância Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('Verifica se a resposta do request trouxe data', () => {
        expect(wrapper.props().currentPage).toBeTruthy();
    });
});
