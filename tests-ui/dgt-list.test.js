/* eslint-disable */
import { mount } from '@vue/test-utils';
import dgtList from '../src/components/dgt-list.vue';

describe('dgtList', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(dgtList, {
          propsData: {
            list: [
              {
                icon: 'calendar_today',
                url: '/midias',
                name: 'Agenda',
                subHeader: 'Atualizado 16/10/2018'
              },
              {
                icon: 'time_to_leave',
                url: '/uber',
                name: 'Dados Uber',
                subHeader: 'Atualizado 16/10/2018'
              },
              {
                icon: 'image',
                url: '/midias',
                name: 'Mídias',
                subHeader: 'Atualizado 16/10/2018'
              }
            ]
          }
        });
    });

    test('Verifica se é uma instância Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('Verifica se a resposta do request trouxe o list', () => {
        expect(wrapper.props().list).toBeTruthy();
    });
});
