/* eslint-disable */
import { mount } from '@vue/test-utils';
import dgtStar from '../src/components/dgt-star-rating.vue';

describe('dgtStar', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(dgtStar, {
        });
    });

    test('Verifica se é uma instância Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

});
