# components-vue

> A library of components write in vuejs

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Components:

1. [DgtAutocomplete](#DGTAutocomplete)
1. [DgtCard](#DGTCard)
1. [DgtCardList](#DGTCardList)
1. [DgtCardGrid](#DGTCardGrid)
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

## Componente de Card em lista - DGTCardList

    Como utilizar o componente dgtCardList

    dgtCardList é um componente construido para exibir listas, no momento de cards.

    Para instanciar o dgtCardList basta chamar a tag a seguir:
    <dgt-card-list></dgt-card-list>

    Esse component necessita que parametros sejam passados na sua instância, ex:
    <dgt-card-list :list="listExample" header="Exemplo de título" sub-header="Exemplo de sub título"></dgt-card-list>

    :list="listExample" (default: [] / list que servirá para popular o que será interado no interior)

    formato do objeto que será passado dentro do array de objetos:
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

## Componente de Card em grid - DGTCardGrid

## Componente de Grid - DGTGrid

## Componente de Rating star - DGTStarRating

## Componente de Tag input - DGTTagInput