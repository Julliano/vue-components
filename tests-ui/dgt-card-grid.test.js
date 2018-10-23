/* eslint-disable */
import { mount } from '@vue/test-utils';
import dgtCardGrid from '../src/components/dgt-card-grid.vue';

describe('dgtCardGrid', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(dgtCardGrid, {
            propsData: {
                cards: [
                    {
                        icon: 'calendar_today',
                        url: '/midias',
                        name: 'Agenda',
                        count: 0
                    },
                    {
                        icon: 'time_to_leave',
                        url: '/uber',
                        name: 'Dados Uber',
                        count: 12
                    },
                    {
                        icon: 'image',
                        url: '/midias',
                        name: 'Mídias',
                        count: 0
                    }
                ]
            }
        });
    });

    test('Verifica se é uma instância Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('Verifica se a resposta do request trouxe o data', () => {
        expect(wrapper.props().cards).toBeTruthy();
    });
});
