/* eslint-disable */
import { mount } from '@vue/test-utils';
import dgtAutocomplete from '../src/components/dgt-autocomplete.vue';

describe('dgtAutocomplete', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(dgtAutocomplete, {
            propsData: { 
                items: [], 
                searchTag: '', 
                showInput: true, 
                existingTags: [] 
            }
        });
    });

    test('Verifica se é uma instância Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('Verifica se a resposta do request trouxe os props', () => {
        expect(wrapper.props().items).toBeTruthy();
        expect(wrapper.props().searchTag).toEqual('');
        expect(wrapper.props().showInput).toBeTruthy();
        expect(wrapper.props().existingTags).toBeTruthy();
    });
});
