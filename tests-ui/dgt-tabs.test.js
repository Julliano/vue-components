/* eslint-disable */
import { mount } from '@vue/test-utils';
import dgtTabs from '../src/components/dgt-tabs.vue';

describe('dgtTabs', () => {
    let wrapper;

    beforeAll(() => {
        global.MutationObserver = class {
            constructor(callback) { }
            disconnect() { }
            observe(element, initObject) { }
        };

        wrapper = mount(dgtTabs, {
            propsData: {
                data: { color: 'red' }
            }
        });
    });

    test('Verifica se é uma instância Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('Verifica se a resposta do request trouxe data', () => {
        expect(wrapper.props().data).toBeTruthy();
    });
});
