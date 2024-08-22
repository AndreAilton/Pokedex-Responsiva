# Pokedex

Este projeto é uma aplicação de Pokedex responsivo desenvolvida com HTML, CSS e JavaScript. O objetivo é criar uma interface que permita ao usuário buscar e visualizar informações sobre Pokémon usando a API pública do Pokémon.

## Recursos Utilizados

### HTML
- **Listas**: Utilizadas na seção de Pokémon para exibir uma lista de Pokémon com a classe `ListPokemon`. A estrutura do código HTML está preparada para incluir elementos de lista de Pokémon dinamicamente.
  
- **Forms**: Implementado na seção de busca (`SearchP`). O formulário inclui um botão de pesquisa (`Search`) e um campo de entrada para pesquisa (`input__search`), permitindo a busca de Pokémon pelo nome ou número.

- **Estruturas em Geral**: 
  - **Cabeçalho (`<header>`)**: Contém a navegação e a área de exibição do Pokémon. Inclui elementos como a `navbar` para botões de navegação e a `Elementdex` para elementos decorativos.
  - **Main (`<main>`)**: Estrutura principal da página, que inclui a área de visualização do Pokémon (`ViewPokemon`) e a lista de Pokémon (`ListPokemon`). Utiliza a `flipdex` para mostrar botões de navegação adicionais e a `ViewPokemon2` para carregar mais Pokémon.
  - **Botões e Contêineres**: Utiliza elementos `<div>` e `<button>` com classes específicas para estilização e funcionalidade, como `circle`, `circle-d`, `Pokemon__image`, `Search`, e `PokemonLoad`.

- **Botões e Imagens**: Contém botões estilizados para navegação (`circle`, `b-flip`) e uma área para exibição de imagens dos Pokémon (`Pokemon__image`).

- **Estrutura de Layout**: O layout é organizado usando diversas classes e contêineres para definir a aparência e o comportamento dos diferentes elementos na página.

Este HTML fornece uma base sólida para estilização e funcionalidade adicionais usando CSS e JavaScript.


### CSS
- **Pseudoclasses**: 
  - **`:active`**: Aplicada aos botões de busca (`Search`) e Pokémon (`PokemonB`) para fornecer um efeito visual quando o botão é pressionado, como um sombreamento interno e ajuste de tamanho.

- **Childs**: 
  - Utilizados para estilizar elementos internos, como em `.shadow::before` e `.light` para criar efeitos de profundidade e iluminação nos botões.

- **Pseudoelementos**:
  - **`::before`**: Usado em `.shadow` para adicionar um efeito de brilho adicional, criando uma sensação de profundidade e destaque.

- **Layout e Estilização Geral**:
  - **Reset de Estilo**: O `*` remove padding e margin de todos os elementos, e define a fonte padrão para `"Pixelify Sans"`.
  
  - **Cabeçalho (`header`)**: Fixado no topo da página com uma cor de fundo e sombra para destacar a área de navegação.
  
  - **Botões e Círculos**: Utiliza `.circle`, `.BodyB`, e outras classes para criar botões estilizados e efeitos visuais com bordas, sombras e transformações.

  - **Área de Visualização (`ViewPokemon`)**: Estilizada para centralizar o conteúdo e fornecer uma área de destaque para informações do Pokémon, com uma imagem de fundo e bordas arredondadas.

  - **Formulários e Botões de Busca**:
    - **`.SearchP`**: Formulário de busca com alinhamento flexível e um campo de entrada estilizado.
    - **`.Search`**: Botão de busca com efeito visual no estado ativo e estilização personalizada.
  
  - **Layout Responsivo**:
    - **Media Queries**: Ajusta o layout para diferentes tamanhos de tela. Por exemplo, ajusta a orientação e tamanho dos botões e a área de visualização para telas menores.
  
  - **Listagem de Pokémon**:
    - **`.ListPokemon`**: Configurado para exibir uma lista de Pokémon com espaçamento e rolagem oculta para uma apresentação visual agradável.

  - **Detalhes do Pokémon**:
    - **`.PokemonB`**: Caixa de informação do Pokémon com estilização para incluir uma imagem e texto com cores e bordas apropriadas.

Esses estilos criam uma experiência visual coerente e atraente, ajustando a aparência dos elementos para se adequar ao tema da Pokedex e ao design geral da aplicação.


### JavaScript
- **Requests**:
  - Utiliza a função `fetch()` para obter dados da API do Pokémon (`pokeapi.co`) e manipular as respostas. A função `fetchPokemon` faz uma solicitação para obter dados sobre um Pokémon específico e `loadPokemon` carrega uma lista de Pokémon.

- **Loops e Condicionais**:
  - **`for`**: Usado para iterar sobre os elementos da lista de Pokémon (`ListPokemon`) e adicionar ouvintes de eventos a cada elemento.
  - **`if`**: Condicionais são usadas para verificar se os dados foram retornados com sucesso e para ajustar a navegação entre os Pokémon.

- **Manipulação do DOM**:
  - **`document.querySelector` e `document.getElementById`**: Seleciona elementos HTML para manipulação, como o formulário de pesquisa, o botão de carregamento, e a área de visualização do Pokémon.
  - **`innerHTML`**: Atualiza o conteúdo dos elementos com as informações dos Pokémon, como nome, número e imagem.

- **Funções**:
  - **`convertType`**: Converte os tipos de Pokémon em elementos HTML para exibição.
  - **`Htmlpokemon`**: Cria o HTML para exibir cada Pokémon, incluindo imagem, nome e tipos.
  - **`loadPokemon`**: Carrega uma lista de Pokémon da API e adiciona ao DOM.
  - **`fetchPokemon`**: Obtém dados detalhados de um Pokémon específico da API.
  - **`renderPokemon`**: Atualiza a exibição do Pokémon selecionado com base na resposta da API.

- **Eventos**:
  - **`addEventListener`**: Adiciona ouvintes de eventos para ações do usuário, como clicar no botão de carregamento (`LoadButton`), enviar o formulário de pesquisa (`form`), e usar os botões de navegação (`buttonup`, `buttondown`, `buttonleft`, `buttonright`).
  - **Botões de Navegação**: Permitem ao usuário navegar para o próximo ou anterior Pokémon, ou ajustar a visualização em intervalos maiores.

- **Funções Adicionais**:
  - **`ListButton`**: Adiciona ouvintes de eventos a cada item na lista de Pokémon para permitir que o usuário clique em um item e visualize seus detalhes.
  - **`renderPokemon`**: Atualiza a área de visualização do Pokémon com as informações do Pokémon pesquisado ou selecionado.

Este código JavaScript é responsável por interagir com a API do Pokémon, atualizar dinamicamente a interface do usuário com as informações dos Pokémon, e permitir a navegação e a pesquisa dentro da aplicação.

