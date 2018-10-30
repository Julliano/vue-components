/* eslint-disable */
import { mount } from '@vue/test-utils';
import dgtGrid from '../src/components/dgt-grid.vue';
import dgtGridView from '../src/examples/dgt-grid.view.vue';

describe('dgtGrid', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(dgtGrid, {
            propsData: {
                dataProps: {
                    headers: {
                        checkBox: {
                            draggable: false,
                            resizable: false,
                            width: 40,
                            isCustomColumn: true,
                            closed: true
                        },
                        iconStorage: {
                            draggable: false,
                            resizable: false,
                            width: 30,
                            isCustomColumn: true,
                            closed: true
                        },
                        iconAttach: {
                            draggable: false,
                            resizable: false,
                            width: 30,
                            isCustomColumn: true,
                            closed: true
                        },
                        iconMessage: {
                            draggable: false,
                            resizable: false,
                            width: 30,
                            isCustomColumn: true,
                            closed: true
                        },
                        horario: {
                            name: 'horario',
                            draggable: true,
                            resizable: true,
                            closed: true
                        },
                        conta: {
                            name: 'conta',
                            draggable: true,
                            resizable: true
                        },
                        url: {
                            name: 'url',
                            draggable: true,
                            resizable: true
                        },
                        localidade: {
                            name: 'localidade',
                            draggable: true,
                            resizable: true
                        },
                        data: {
                            name: 'data',
                            draggable: true,
                            resizable: true
                        }
                    },
                    data: [
                        {
                            horario: 'horario3 page2',
                            conta: 'conta3 page2',
                            url: 'url3 page2',
                            localidade: 'localidade3 page2',
                            data: 'data3 page2',
                            checked: false,
                            storage: false,
                            attach_file: false,
                            message: true
                        },
                        {
                            horario: 'horario1  page2',
                            conta: 'conta1 page2',
                            url: 'url1 page2',
                            data: 'data1 page2',
                            checked: false,
                            storage: false,
                            attach_file: false,
                            message: true
                        },
                        {
                            horario: 'horario2 page2',
                            conta: 'conta2 page2',
                            url: 'url2 page2',
                            localidade: 'localidade2 page2',
                            data: 'data2 page2',
                            checked: false,
                            storage: false,
                            attach_file: false,
                            message: true
                        }
                    ]
                }
            }
        });
    });

    test('Verifica se é uma instância Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('Verifica se a resposta do request trouxe headers e data', () => {
        expect(wrapper.props().dataProps).toBeTruthy();
    });
});
