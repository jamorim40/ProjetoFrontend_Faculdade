\# Projeto ONG - Instituto EsperanÃ§a



\## Sobre o Projeto



Este projeto foi desenvolvido como atividade acadÃªmica da disciplina de Front-End, com o objetivo de aplicar os conceitos fundamentais de HTML5 semÃ¢ntico na construÃ§Ã£o de uma plataforma institucional para uma organizaÃ§Ã£o do terceiro setor fictÃ­cia denominada \*\*Instituto EsperanÃ§a\*\*.



O projeto simula a presenÃ§a digital de uma ONG voltada para aÃ§Ãµes sociais, educaÃ§Ã£o e solidariedade, demonstrando como uma estrutura web organizada pode contribuir para a divulgaÃ§Ã£o de projetos sociais, captaÃ§Ã£o de doaÃ§Ãµes e engajamento de voluntÃ¡rios.



\## Objetivo



Desenvolver um conjunto de pÃ¡ginas web utilizando exclusivamente HTML5, empregando elementos semÃ¢nticos, boas prÃ¡ticas de acessibilidade e validaÃ§Ãµes nativas de formulÃ¡rios.



A proposta busca demonstrar a importÃ¢ncia de uma plataforma institucional clara e organizada para:



\- Apresentar a organizaÃ§Ã£o e sua missÃ£o;

\- Divulgar projetos e iniciativas sociais;

\- 

# Modularização JavaScript

A aplicação utiliza ES6 Modules para separar responsabilidades por funcionalidade.

## Organização

- `scripts/main.js`: ponto de entrada comum; inicializa apenas módulos que encontram seus elementos na página.
- `scripts/cadastro/cadastroController.js`: coordena eventos e fluxo do formulário.
- `scripts/cadastro/cadastroStorage.js`: encapsula leitura e gravação no `localStorage`.
- `scripts/cadastro/cadastroView.js`: lê, preenche e atualiza a interface do cadastro.
- `scripts/projetos/projetosData.js`: concentra os dados dos projetos.
- `scripts/projetos/projetosView.js`: filtra e renderiza os cards de projetos.
- `scripts/componentes/modal.js`: controla o fechamento de modais reutilizáveis.

Os arquivos HTML carregam `main.js` com `type="module"`. O ponto de entrada importa os controladores, e cada controlador verifica a existência dos elementos necessários antes de registrar eventos. Dessa forma, uma página sem formulário não tenta executar a lógica de cadastro.

## Critérios técnicos

A persistência não fica misturada com a manipulação do DOM: `cadastroStorage.js` exporta `saveCadastro` e `loadCadastro`, enquanto `cadastroView.js` exporta funções de interface. O controlador importa essas funções e coordena o fluxo, mantendo responsabilidade única e baixo acoplamento.

Os projetos são mantidos em um módulo de dados e renderizados pelo módulo de visualização. Os containers HTML informam a categoria por meio de `data-project-category`, permitindo reutilizar a mesma função para voluntariado e doações.

A validação nativa do formulário continua sendo feita pelo HTML, enquanto o JavaScript impede o recarregamento, persiste os dados e apresenta o feedback. A leitura do `localStorage` possui tratamento para dados inválidos.

## Ensaios realizados

- Validação de sintaxe de todos os arquivos JavaScript com `node --check`.
- Verificação de carregamento dos módulos em servidor HTTP local.
- Teste dos cards de projetos, modal de componentes e ausência de erro ao abrir páginas sem formulário.
- Teste do cadastro válido, validação nativa, persistência, recuperação e limpeza dos dados.
