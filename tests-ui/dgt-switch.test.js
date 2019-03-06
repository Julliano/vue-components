/* eslint-disable */
import { mount } from '@vue/test-utils';
import dgtSwitch from '../src/components/dgt-switch.vue';

describe('dgtSwitch', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(dgtSwitch, {});
    });

    test('Verifica se é uma instância Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('Verifica valores default das propriedades', () => {
        expect(wrapper.props().disabled).toBe(false);
        expect(wrapper.props().checkedLabel).toEqual('');
        expect(wrapper.props().uncheckedLabel).toEqual('');
        expect(wrapper.props().checkedValue).toBe(true);
        expect(wrapper.props().uncheckedValue).toBe(false);
    });

    test('Verifica se é possível especificar as propriedades', () => {
        wrapper = mount(dgtSwitch, {
            propsData: {
                disabled: true,
                checkedLabel: 'OU',
                uncheckedLabel: 'E',
                checkedValue: 'OR',
                uncheckedValue: 'AND'
            }
        });

        expect(wrapper.props().disabled).toBe(true);
        expect(wrapper.props().checkedLabel).toEqual('OU');
        expect(wrapper.props().uncheckedLabel).toEqual('E');
        expect(wrapper.props().checkedValue).toEqual('OR');
        expect(wrapper.props().uncheckedValue).toEqual('AND');
    });

    test('Verifica se é possível trocar o valor pelo método "changeValue"', () => {
        wrapper = mount(dgtSwitch, {});

        expect(wrapper.props().value).toBe(false);
        wrapper.vm.changeValue();
        expect(...wrapper.emitted().input[0]).toBe(true);
    });
});
