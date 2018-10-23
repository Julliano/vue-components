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

## Componente de Autocomplete - DGTAutocomplete

    ### Como utilizar o componente dgtAutocomplete:

    dgtAutocomplete é um componente construido para servir um input com autocomplete.
    Pode ser utilizado para autocomplete de qualquer coisa que espere uma string como resposta e
    que passe um array de string como possibilidades de busca;


    ### Dados necessários para a renderização do componente:

    Ao instanciar o component é necessário passar alguns parametros, exemplo:

    <dgt-autocomplete @tag-selected="setTagsAutocomplete" :existing-tags="objTag" :searchTag="newTag" :items="validsTags"></dgt-autocomplete>

    @tag-selected (função que irá ser chamada, no component pai, quando uma tag for selecionada no autocomplete);

    - `:existing-tags="objTag"` (default = [] / atributo que recebe as tags já atribuidas ao obj, para retirar do autocomplete as tags já selecionadas);
    - `:searchTag="newTag"`     (default = '' / tag que será procurada nas tags do autocomplete);
    - `:items="validsTags"`        (default = [] / atributo que recebe as todas as tags que serão disponibilizadas no complete);
    - `:showInput="True"`          (default = false / define se o autocomplete incluirá um input ou apenas `a <ul> e <li>`);


## Componente de Card - DGTCard

    Como utilizar o componente dgtCard

    dgtCard é um componente construido para exibir cards.

    Para instanciar o dgtCard basta chamar a tag a seguir:
    <dgt-card></dgt-card>

    Esse component necessita que um objeto seja passado por parametro na sua instância, ex:
    <dgt-card :data="array"></dgt-card>

    :data="array" (default: {} / o objeto que populará o card)

    formato do objeto que será passado dentro do array de objetos:
    {
        icon: 'image',
        url: '/midias',
        name: 'Mídias',
        subHeader: 'Subtitle',
        count: 0
    },

    é possível passar dentro do objeto um atributo style que customizará o card referente ao objeto:

    {
        icon: 'image',
        url: '/midias',
        name: 'Mídias',
        subHeader: 'Subtitle',
        count: 0,
        style: {
            width: '150px',
            heigth: '60px'
        }
    },

    Caso o atributo style não seja passado, as definições do css do dgt-card serão aplicadas.

## Componente de lista - DGTList

    Como utilizar o componente dgtCardList

    dgtCardList é um componente construido para exibir listas.

    Para instanciar o dgtCardList basta chamar a tag a seguir:
    <dgt-card-list></dgt-card-list>

    Esse component necessita que parametros sejam passados na sua instância, ex:
    <dgt-card-list :list="listExample" header="Exemplo de título" sub-header="Exemplo de sub título"></dgt-card-list>

    :list="listExample" (default: [] / list que servirá para popular o que será interado no slot  interior)

    exemplo de formato do array que será passado dentro do array de objetos:
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

## Componente de Grid de components - DGTComponentsGrid

    Como utilizar o componente dgtComponentGrid

    dgtComponentGrid é um componente construido para exibir grid de outros components.

    Para instanciar o dgtComponentGrid basta chamar a tag a seguir:
    <dgt-grid-component></dgt-grid-component>

    Esse component necessita que parametros sejam passados na sua instância, ex:
    <dgt-grid-component :list="listExample" header="Exemplo de título" sub-header="Exemplo de sub título"></dgt-card-list>

    :list="listExample" (default: [] / list que servirá para popular o que será interado no slot  interior)

    exemplo de formato do array que será passado dentro do array de objetos:
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

## Componente de Grid - DGTGrid

## Componente de Rating star - DGTStarRating

    dgtStarRating é um componente construido para dar notas no formato de estrelas.
    Foi construido de maneira customizável (cujas customizações estão a seguir no mesmo documento)

    Para funcionar, este componente necessita apenas do :rating para mostrar a nota atribuida ao obj (sendo rating um valor numerico), os outros atributos são todos customizações do componente, listadas abaixo.

    ### Exemplo customizado:

    <dgt-star-rating @rating-selected="setRating" :padding="2" inactive-color="#f5f5f5" :border-width="2" :rating="obj.rating" :increment="0.5" :star-size="10"></dgt-star-rating>

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

    - `@rating-selected="func"`   função com 1 parametro, parametro recebe o valor do rating marcado em estrelas;
    - `:inline="true"` 			                (default: false / mostra o rating inline aonde foi instanciado);
    - `:show-rating="false"`		    (default: true / mostra o contador numérico referente ao rate);
    - `:padding="2"` 			                (default: 0);
    - `border-color="#fff"` 		    (default: #999);
    - `:border-width="2"` 		        (default: 0);
    - `:rating="obj.rating"` 		        (atributo que armazena o valor do rating);
    - `:increment="0.5"` 		            (default: 1 / incremento será realizado de X em X incrementos);`
    - `:star-size="10"` 	    	            (default: 50);
    - `:max-rating="10"` 	    	        (default:5 / quantidade de estrelas);
    - `active-color="#000"`		    (default: #ffd055);
    - `inactive-color="#f5f5f5"`	(default: #d8d8d8);

## Componente de Tag input - DGTTagInput

    dgtTagInput é um componente construido para criar e gerenciar tags.

    ### Dados necessários para a renderização do componente:

    Ao instanciar o componente pode-se passar o array que armazenará as tags, o mesmo se comunicará com o component e receberá as alterações realizadas;

    :objTag="obj.tags" (default: null / atributo que armazenas as tags do objeto);
    :autocomplete="true" (default: false / define se a tag terá autocomplete);
    :validsTags="arrayTags" (default: null / define o array de possibilidades de tags no autocomplete);

    o formato do objTag tratado é:
    Array de strings: ['batman', 'Aquaman'], esse array serve para que tags já existentes, no obj passado, não sejam novamente inseridos (duplicando o registro);
