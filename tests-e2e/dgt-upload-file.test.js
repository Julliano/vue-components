/* eslint-disable */

import VueSelector from 'testcafe-vue-selectors';
import scenario from '../package.json';
import { Selector } from 'testcafe';

fixture`dgt-upload-file`.page`${scenario.baseURL}`;

// Não tem como implementar o teste desse componente por se tratar de um file Upload;
// Não é possível o teste interagir com a janela do SO que é aberta para seleção de arquivo(s);

// REALIZAR O TESTE MANUALMENTE;
