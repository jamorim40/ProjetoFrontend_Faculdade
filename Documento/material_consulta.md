# Documentação do Projeto Instituto Esperança

## 1. Visão geral

Este projeto é uma página institucional para a ONG Instituto Esperança, com páginas de início, projetos e cadastro. O material foi organizado como referência de consulta para as tags HTML, os componentes visuais e as propriedades CSS observadas no projeto.

Arquivos HTML principais:

- Página inicial
- Página de projetos
- Página de cadastro

Arquivo CSS principal:

- CSS/Estilo.css

---

## 2. Tags HTML e suas aplicações

### 2.1 Estrutura do documento

- `<!DOCTYPE html>`  
  Declara a versão do HTML usada na página.

- `html`  
  Define o início do documento HTML.

- `head`  
  Armazena metadados, título e referências externas.

- `meta`  
  Configura a codificação de caracteres e a responsividade da página.

- `title`  
  Define o título da aba do navegador.

- `link`  
  Vincula o arquivo de estilos ao documento HTML.

- `body`  
  Agrupa o conteúdo visível da página.

### 2.2 Navegação e organização do conteúdo

- `nav`  
  Cria a área de navegação da página.

- `ul`  
  Organiza uma lista sem ordem de itens de navegação.

- `li`  
  Representa cada item da lista de navegação.

- `a`  
  Cria links entre páginas do projeto.

- `main`  
  Representa o conteúdo principal do site.

- `section`  
  Divide o conteúdo em blocos temáticos.

- `header`  
  Cria o cabeçalho de uma seção informativa.

- `article`  
  Agrupa conteúdo independente, como um projeto ou iniciativa.

- `footer`  
  Cria o rodapé com informações de contato.

- `h1`, `h2`, `h3`  
  Definem títulos e subtítulos em diferentes níveis.

- `p`  
  Escreve parágrafos de texto descritivo.

- `img`  
  Insere imagens ilustrativas na página.

- `src`  
  Define o caminho da imagem.

- `alt`  
  Descreve a imagem para acessibilidade.

### 2.3 Formulário de cadastro

- `form`  
  Cria o formulário para coleta de dados.

- `fieldset`  
  Agrupa campos relacionados em um mesmo bloco.

- `legend`  
  Nomeia o bloco de campos dentro do formulário.

- `label`  
  Explica o campo de entrada associado.

- `input`  
  Cria campos de entrada para texto, data, e-mail, telefone, CPF e rádio.

- `select`  
  Cria uma caixa de seleção com opções.

- `option`  
  Define cada opção disponível na lista.

- `button`  
  Cria botões para enviar ou limpar o formulário.

- `type="submit"`  
  Envia os dados preenchidos no formulário.

- `type="reset"`  
  Limpa os campos do formulário.

- `type="text"`  
  Define entrada de texto livre.

- `type="email"`  
  Define entrada de endereço eletrônico.

- `type="date"`  
  Define calendário para seleção de data.

- `type="tel"`  
  Define entrada de telefone.

- `type="radio"`  
  Define escolha única dentro de um conjunto.

- `placeholder`  
  Exibe texto auxiliar dentro dos campos.

- `pattern`  
  Define forma esperada de preenchimento.

- `required`  
  Torna o campo obrigatório.

- `br`  
  Cria quebra de linha no HTML.

---

## 3. Componentes visuais e sua aplicação

### 3.1 Navegação

- Barra de navegação  
  Mantém os links do site organizados e visíveis em todas as páginas.

- Lista de navegação  
  Organiza os itens do menu em linha horizontal.

- Link de navegação  
  Conduz o usuário para as páginas Inicio, Projetos e Cadastro.

### 3.2 Conteúdo principal

- Área principal  
  Centraliza o conteúdo visual do projeto com fundo claro.

- Área de formulário  
  Organiza a seção de cadastro com caixa, margens, borda e sombra.

- Bloco de fieldset  
  Agrupa campos do formulário com título visual.

- Grupo de opções radio  
  Organiza escolhas de participação em uma linha visual.

- Bloco de botões  
  Agrupa os botões de envio e limpeza em layout alinhado.

### 3.3 Rodapé

- Rodapé  
  Exibe as informações de contato no fim das páginas.

---

## 4. Propriedades CSS e sua aplicação

### 4.1 Reset e base

- `margin`  
  Remove espaçamento externo padrão dos elementos.

- `padding`  
  Remove espaçamento interno padrão dos elementos.

- `outline`  
  Remove contorno padrão de foco.

- `box-sizing`  
  Inclui borda e padding no cálculo de largura e altura.

- `font-family`  
  Define a família principal da fonte do projeto.

### 4.2 Cores, texto e destaque

- `color`  
  Define a cor do texto.

- `background-color`  
  Define a cor de fundo de cada seção.

- `font-size`  
  Ajusta o tamanho da fonte.

- `font-weight`  
  Define a espessura visual do texto.

- `text-align`  
  Alinha textos dentro de blocos.

- `text-decoration`  
  Remove o sublinhado dos links.

### 4.3 Layout e posicionamento

- `display`  
  Define o tipo de layout, como flexível ou em grade.

- `justify-content`  
  Alinha itens horizontalmente no layout flexbox.

- `align-items`  
  Alinha itens verticalmente no layout flexbox.

- `position`  
  Define o tipo de posicionamento do elemento.

- `top`  
  Posiciona o elemento na parte superior da tela.

- `z-index`  
  Define a ordem visual entre elementos sobrepostos.

- `height`  
  Define a altura de barras, áreas e blocos principais.

- `width`  
  Define a largura de blocos, barras e áreas.

- `max-width`  
  Limita a largura de um bloco de conteúdo.

- `margin`  
  Cria espaçamento externo dos blocos e do formulário.

- `padding`  
  Cria espaçamento interno dos blocos e áreas.

- `gap`  
  Define espaço entre itens de um container.

### 4.4 Bordas, formas e visual

- `border`  
  Define bordas dos campos e blocos.

- `border-radius`  
  Arredonda cantos de containers, inputs e botões.

- `border-color`  
  Define a cor da borda em foco ou atuação.

- `box-shadow`  
  Cria efeito de profundidade visual.

- `background`  
  Define o fundo visual dos botões e containers.

- `cursor`  
  Indica ação clicável sobre botão.

- `transition`  
  Cria movimento suave de mudança visual.

### 4.5 Interação visual

- `hover`  
  Define comportamento visual quando o mouse passa sobre links ou botões.

- `focus`  
  Define o estilo visual quando um campo recebe foco.

---

## 5. Resumo da organização visual

O projeto possui:

- Navegação com links principais e fundo verde.
- Conteúdo principal com fundo delicado e organização por seções.
- Rodapé com informações de contato e fundo compatível com a navegação.
- Formulário com entradas, listas, botões e grupos de rádio.

---

## 6. Observações

Este material foi revisado para eliminar repetições de elementos, propriedades e tags, mantendo apenas a descrição funcional e a aplicação de cada recurso no projeto.
