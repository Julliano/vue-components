# Dgt Components Vue

> Biblioteca de componentes da Dígitro desenvolvida em Vue.

## Instalação

``` bash
# Instalar dependências
npm install

# Executar a aplicação com  hot reload at localhost:8080
npm run dev

# Rodar showcase para produção com código minificado
npm run build

# Gerar componentes para distribuição via npm interno

-Ir para branch npm-publish: $ git checkout npm-publish
-Remove node_modules: $ rm -rf node_modules/
-Reinstalar node_modules: $ npm install
-Atualizar branch com master: $ git pull origin master
-Atualizar versão do projeto no package.json: Ex. 1.0.1 para 1.0.2
-Publicar nova versão: $ npm publish
    Ps.: Pré-requisitos para publicar e puxar do npm da digitro
        - npm set registry http://npm.digitro.com.br
        - npm adduser


npm run build-components

```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Components:

1. [DgtAutocomplete](#DGTAutocomplete)
1. [DgtCard](#DGTCard)
1. [DgtCardList](#DGTList)
1. [DgtCardGrid](#DGTComponentsGrid)
1. [DgtGrid](#DGTGrid)
1. [DgtStarRating](#DGTStarRating)
1. [DgtTagInput](#DGTTagInput)
1. [DgtGrid](#DGTGrid)
1. [DgtTabs](#DGTTabs)

## Componente de Autocomplete - DGTAutocomplete

    Como utilizar o componente dgtAutocomplete:

    dgtAutocomplete é um componente construido para servir um input com autocomplete.
    Pode ser utilizado para autocomplete de qualquer coisa que espere uma string como resposta e
    que passe um array de string como possibilidades de busca;

    Dados necessários para a renderização do componente:

    Ao instanciar o component é necessário passar alguns parametros, exemplo:

        ```html
            <dgt-autocomplete @tag-selected="setTagsAutocomplete" :existing-tags="objTag"   :searchTag="newTag" :items="validsTags"></dgt-autocomplete>
        ```    
            
    @tag-selected (função que irá ser chamada, no component pai, quando uma tag for selecionada no autocomplete);
    
    :existing-tags="objTag" (default = [] / atributo que recebe as tags já atribuidas ao obj, para retirar do autocomplete as tags já selecionadas);
    :searchTag="newTag"     (default = '' / tag que será procurada nas tags do autocomplete);
    :items="validsTags"        (default = [] / atributo que recebe as todas as tags que serão disponibilizadas no complete);
    :showInput="True"          (default = false / define se o autocomplete incluirá um input ou apenas a <ul> e <li>);
    
    
    É possível customizar o componente com algumas variáveis que podem ser passadar como uma class de css (caso não sejam passadas, o componente será renderizado com o style default), são elas:

        ```css
            {
                --dgt-input-width: 50%; 
                --dgt-input-padding: 10px; 
                --dgt-input-border-radius: 0.25rem; 
                --dgt-input-border: 5px solid #9e9e9e;
                --dgt-ul-background: #000;
                --dgt-ul-width: 50%;
                --dgt-ul-max-height: 200px;
                --dgt-result-background: yellow;
                --dgt-result-color: black;
                --dgt-results-color: white;
            }
        ```
    
    Para utilizar essa funcionalidade basta criar uma class com as variáveis desejadas, ex:

        ```css
            .custom{
                --dgt-input-width: 50%; 
                --dgt-input-padding: 10px; 
                --dgt-input-border-radius: 0.25rem; 
                --dgt-input-border: 5px solid #9e9e9e;
                --dgt-ul-background: #000;
            }
        ```
        
    e importar o componente passando a classe:

        ```html
            <dgt-autocomplete class="custom"></dgt-autocomplete>
        ```

## Componente de Card - DGTCard

    Como utilizar o componente dgtCard

    dgtCard é um componente construido para exibir cards.

    Esse component necessita que um objeto seja passado por parametro na sua instância, ex:

        ```html
            <dgt-card :data="data"></dgt-card>
        ```

    :data="data" (default: {} / o objeto que populará o card)

    formato do objeto que será passado:

        ```js
            {
                icon: 'image',
                url: '/midias',
                name: 'Mídias',
                subHeader: 'Subtitle',
                count: 0
            }
        ```

    É possível customizar o componente com algumas variáveis que podem ser passadar como uma class de css (caso não sejam passadas, o componente será renderizado com o style default), são elas:

        ```css
            {
                --dgt-card-width: 220px;
                --dgt-card-height: 65px;
                --dgt-card-shadow: 0px 1px 4px 2px #c7c7c7;
                --dgt-card-background: white;
                --dgt-card-border-radius: 4px;
                --dgt-card-padding: 10px;
                --dgt-card-margin: 10px 12px 10px 0;
            }
        ```
    
    Para utilizar essa funcionalidade basta criar uma class com as variáveis desejadas, ex:

        ```css
            .custom {
                --dgt-card-width: 220px;
                --dgt-card-padding: 10px;
                --dgt-card-margin: 10px 12px 10px 0;
            }
        ```
        
    e importar o componente passando a classe:

        ```html
            <dgt-card class="custom"></dgt-card>
        ```

## Componente de lista - DGTList

    Como utilizar o componente dgtList

    dgtList é um componente construido para exibir listas.

    Esse component necessita que parametros sejam passados na sua instância, ex:

        ```html
            <dgt-list :list="listExample" header="Exemplo de título" sub-header="Exemplo de sub título"></dgt-list>
        ```

    existe um slot no component para permitir a injeção do que será reproduzido em lista:

        ```html
            <slot name="main-slot" :list="list"></slot>

            Segue um exemplo de utilização do slot a cima, acabei injetando outro component no slot:

            <template slot="main-slot" slot-scope="mainProps">
                <div class="list">
                    <dgt-card v-for="card in mainProps.list" :key="card.id" :data="card" :style="card.style"></dgt-card>
                </div>
            </template>
        ```

    :list="listExample" (default: [] / list que servirá para popular o que será interado no slot  interior)
    :header="Exemplo de título" (default: '' / titulo que será exibido antes da lista caso desejavel);
    :sub-header="Exemplo de sub título" (default: '' / sub-titulo que será exibido antes da lista caso desejavel);

    exemplo de formato do array que será passado:

        ```js
            let listExample = [
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
                }
            ]
        ```
    
    É possível customizar o componente com algumas variáveis que podem ser passadar como uma class de css (caso não sejam passadas, o componente será renderizado com o style default), são elas:

        ```css
            {
                --dgt-list-width: fit-content;
                --dgt-list-max-height: 400px;
                --dgt-list-padding: 2px 0 2px 10px;
            }
        ```
    
    Para utilizar essa funcionalidade basta criar uma class com as variáveis desejadas, ex:

        ```css
            .custom {
                --dgt-list-max-height: 400px;
                --dgt-list-padding: 20px 0 2px 10px;
            }
        ```
        
    e importar o componente passando a classe:

        ```html
            <dgt-list class="custom"></dgt-list>
        ```


## Componente de Grid de components - DGTComponentsGrid

    Como utilizar o componente dgtComponentGrid

    dgtComponentGrid é um componente construido para exibir grid do seu slot.

    Esse component necessita que parametros sejam passados na sua instância, ex:

    ```html
        <dgt-grid-component :grid="grid" header="Exemplo de título" sub-header="Exemplo de sub título"></dgt-card-list>
    ```

    :grid="grid" (default: [] / array que servirá para popular o que será interado no slot  interior)

    existe um slot no component para permitir a injeção do que sera reproduzido em grid:

    ```html
        <slot name="main-slot" :grid="grid"></slot>

        Segue um exemplo de utilização do slot a cima, acabei injetando outro component no slot:

        <template slot="main-slot" slot-scope="mainProps">
            <div class="grid">
                <dgt-card v-for="card in mainProps.grid" :key="card.id" :data="card" :style="card.style"></dgt-card>
            </div>
        </template>
    ```

    exemplo de formato do array que será passado dentro do array de objetos:

        ```js    
            grid: [
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
        ```

## Componente de Grid - DGTGrid

### Como ultilizar o componente dgtGrid

    - dgtGrid é um componente de grid com funcionalidades básicas de um grid e com possibilidades de customização sem que seja nessesário a alteração nativa do componente.

### Slots:
    - O vue trabalha com conceito de slots e para cada slot previsto no componente é possível implementa-lo da maneira que desejar.
    Cada slot do componente retorna um data, que é o proprio data do componente pai quando passado como props.

### dgtGrid:
    ```html
        <slot name="custom-column-header" :data="data"></slot>
    ```

### Exemplo componente pai:
    ```html
        <template slot="custom-column-header" slot-scope="slotProps">
    ```

    - Além do data o slot pode retornar outros parametros no caso do slot de icon

### dgtGrid:
    ```html
        <slot name="icon-order" :data="data" :sortState="sortState" :columnSort="sortedColumn" :currentColumn="header.name"></slot>
    ```

### Exemplo componente pai:
    ```html
        <i v-if="slotProps.currentColumn === slotProps.columnSort" 
            :class="`material-icons arrow-sort-${slotProps.sortState === -1 ? 2 : slotProps.sortState}`">
            {{slotProps.data.arrowsSort[slotProps.sortState === -1 ? 2 : slotProps.sortState]}}
        </i>
        <i v-else class="material-icons arrow-sort ">compare_arrows</i>
    ```

### Dados necessários para a renderização do componente:
    ```json
        dataProps: {
            minWidthColumn: 80,
            pagination: {
                page: 1,
                total: 1
            },
            headers: {
                Col1: {
                    draggable: false,
                    resizable: false
                },
                Col2: {
                    draggable: false,
                    resizable: false
                },
                Col3: {
                    name: 'Name Col3',
                    draggable: true,
                    resizable: true
                },
                Col4: {
                    name: 'Name Col4',
                    draggable: true,
                    resizable: true
                },
                Col5: {
                    name: 'Name Col4',
                    draggable: true,
                    resizable: true
                }
            },
            data: [
                {
                    Col1: 'row 1 colum 1',
                    Col2: 'row 1 colum 2',
                    Col3: 'row 1 colum 3',
                    Col4: 'row 1 colum 4',
                    Col5: 'row 1 colum 5'
                },
                {
                    Col1: 'row 2 colum 1',
                    Col2: 'row 2 colum 2',
                    Col3: 'row 2 colum 3',
                    Col5: 'row 2 colum 5'
                }
            ]
        }
    ```

todos os objetos em header serão colunas, cada objeto em data pode ter uma célula de cada coluna, note que o segundo objeto não possui a linha da coluna quatro, nesse caso essa célula aperecerá vazia.

### Disparando eventos para fora do componente:

    - O componente envia um evento, via emit, para fora onde o componente pai pode capturar para realizar operações sobre ele.

    - Trigger de paginação: dispara quando acontece um clique em um dos botões de paginação

    ```js
        this.emitGeneral('pagination', page);
    ```

    - Trigger de linha selecionada: dispara quando acontece um clique em alguma linnha da grid

    ```js
        this.emitGeneral('selectedLine', this.selectedLine);
    ```
    ```js
        this.$bus.$emit('hideDetails');
    ```

    - A paginação também é customizavel, caso seja criado um slot de paginação não será enviado uma trigger via bus, porém o data será retornado no slot como visto antes, então para realizar alguma ação nos eventos de clique será necessário implementar estes eventos no componente pai.

### Coluna customizavel:

    - A coluna customColumn é um slot totalmente customizavel, logo se existir ela deve ser toda implementada inclusive os eventos que existirem nela, exceto os eventos nativos do componente.
    A customColumn pode ser inserida em qualquer lugar da grid ou seja no inicio entre outras colunas ou no fim.

## Componente de Rating star - DGTStarRating

    dgtStarRating é um componente construido para dar notas no formato de estrelas.
    Foi construido de maneira customizável (cujas customizações estão a seguir no mesmo documento)

    Para funcionar, este componente necessita apenas do :rating para mostrar a nota atribuida ao obj (sendo rating um valor numerico), os outros atributos são todos customizações do componente, listadas abaixo.

    Exemplo customizado:

    ```html
        <dgt-star-rating @rating-selected="setRating" :padding="2" inactive-color="#f5f5f5" :border-width="2" :rating="obj.rating" :increment="0.5" :star-size="10"></dgt-star-rating>
    ```

    :inline="true" 			    (default: false / mostra o rating inline aonde foi instanciado);
    :show-rating="false"		(default: true / mostra o contador numérico referente ao rate);
    :readOnly="true"            (default: false / informa se o rating é apenas leitura);
    :padding="2" 			    (default: 0);
     border-color="#fff" 		(default: #999);
    :border-width="2" 		    (default: 0);
    :rating="obj.rating" 		(atributo que armazena o valor do rating (atributo numérico));
    :increment="0.5" 		    (default: 1 / incremento será realizado de X em X incrementos);
    :star-size="10" 	    	(default: 50);
    :max-rating="10" 	    	(default:5 / quantidade de estrelas);

    @rating-selected="func"     (func = função que será chamada no componente pai quando o rating for alterado passando o novo valor por parametro);
    :inline="true" 			    (default: false);
    :show-rating="false"	    (default: true / mostra o contador numérico referente ao rate);
    :padding="2"                (default: 0);
    border-color="#fff"		    (default: #999);
    :border-width="2"	        (default: 0);
    :rating="obj.rating"        (atributo que armazena o valor do rating);
    :increment="0.5"            (default: 1 / incremento será realizado de X em X incrementos);`
    :star-size="10"	            (default: 50);
    :max-rating="10"   	        (default:5 / quantidade de estrelas);
    active-color="#000"		    (default: #ffd055);
    inactive-color="#f5f5f5"	(default: #d8d8d8);

    É possível customizar o componente com algumas variáveis que podem ser passadas como uma class de css (caso não sejam passadas, o componente será renderizado com o style default), são elas:

    ```css
        {
            --dgt-star-margin-right: 10px;
        }
    ```

    Para utilizar essa funcionalidade basta criar uma class, ex:

        ```css
            .custom{
                --dgt-star-margin-right: 10px;
            }
        ```

    e importar o componente passando a classe:

        ```html
            <dgt-star-rating class="custom"></dgt-star-rating>
        ```

## Componente de Tag input - DGTTagInput

    dgtTagInput é um componente construido para criar e gerenciar tags.

    Ao instanciar o componente pode-se passar o array que armazenará as tags, o mesmo se comunicará com o component e receberá as alterações realizadas;

    Exemplo de importação customizada do componente:

    ```html
        <dgt-tag-input :obj-tag="tags" :valids-tags="validsTags" autocomplete="showComplete"></dgt-tag-input>
    ```

    :objTag="obj.tags"          (default: null / atributo que armazenas as tags do objeto);
    :autocomplete="true"        (default: false / define se a tag exibirá autocomplete);
    :validsTags="arrayTags"     (default: null / define o array de possibilidades de tags no autocomplete);

    o formato do objTag tratado é:
    Array de strings: ['batman', 'Aquaman'], esse array serve para que tags já existentes, no obj passado, não sejam novamente inseridos (duplicando o registro);

    É possível customizar o componente com algumas variáveis que podem ser passadas como uma class de css (caso não sejam passadas, o componente será renderizado com o style default), são elas:

    ```css
        {
            --dgt-delete-tag: yellow;           
            --dgt-background-tag: #000;         
            --dgt-background-delete-tag: red;   
        }
    ```

    Para utilizar essa funcionalidade basta criar uma class, ex:

        ```css
            .custom{
                --dgt-delete-tag: yellow;
                --dgt-background-tag: #000;
                --dgt-background-delete-tag: red;
            }
        ```

    e importar o componente passando a classe:

        ```html
            <dgt-tag-input class="custom"></dgt-tag-input>
        ```


## DgtTabs - DGTTabs

#### Como ultilizar o componente dgtTabs:

    dgtTabs é um componente de tabs com funcionalidades básicas de uma tab e com possibilidades de customização sem que seja nessesário a alteração nativa do componente.

    ```js
    dataTabs: {
        vertical: false,
        position: '',
        barAnimatedHidden: false,
        barAnimatedSize: '2',
        tabs: {
            'Filtros lorem': {
                block: true,
                quantityContents: 10
            },
            'Filtros impsum': {
                block: false,
                quantityContents: 5
            },
            'Filtros Gerais': {
                selected: true,
                quantityContents: 3
            },
            'Filtros Específicos': {}
        }
    }
    ```

    O exemplo acima mostra todos os atributos que são enxergados pelo componente, mas apenas alguns são estritamente obrigatórios para o funcionamento correto do mesmo. O atributo block deternina se a tag será 'clicavel' ou não.

    #### Abaixo a estrutura básica:

    ```js
    dataTabs: {
        tabs: {
            'Filtros lorem': {},
            'Filtros impsum': {},
            'Filtros Gerais': {},
            'Filtros Específicos': {selected: true}
        }
    }
    ```

    O componente envia um array via emit para fora com o nome da tab clicada e o próprio objeto da data recebido por props

    O atributo 'position' pode receber apenas dois valores:

    `position: 'vertical-left' | 'vertical-right'`

    para setar um desses valorer ao atributo position é necessário que o atributo 'vertical' esteja true, caso contrário mantenha o atributo 
    'position' com uma string vazio, assim como no exemplo.

    ```js
        vertical: true,
        position: 'vertical-left',
    ```

    O atributo 'selected' dentro do objeto da tab define a tab que estará selecionada por default, nesse caso apenas uma tab deve conter este atributo.

    ```js
        'Filtros Gerais': {
            selected: true
        }
    ```

    O atributo 'quantityContents' é apenas um atributo extra para a construção do componente na view, logo esse atributo não é enxergado pelo componente. Cada tab terá um slot dinamico para customização individual de cada tab

    ### Exemplo em view:

    ```html
        <template :slot="key" slot-scope="slotProps" v-for="(tab, key) in dataTabs.tabs">
            <span class="exceptional-content" :class="key" :key="key">{{tab.quantityContents}}</span>
        </template>
    ```

#### Slot no componente:

    ```html
        <slot :name="key" :data=data></slot>
    ```

    O atributo 'key' no slot é o mesmo nome da tab definada no objeto tabs