<h1 align="center"><b>Nexify</b></h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
</p>

<p align="center">
  Uma plataforma de e-commerce moderna desenvolvida com React e TypeScript, focada em proporcionar uma experiência de navegação ágil para os clientes e uma gestão simplificada de produtos para os administradores.
</p>

---

## 📌 Sobre o projeto

O **Nexify** é um sistema web completo de **e-commerce** projetado para unir uma experiência de compra fluida ao utilizador final a um painel de controlo administrativo eficiente. 

A plataforma foi construída com **React** para a construção de uma interface reativa e intuitiva, **TypeScript** para garantir maior previsibilidade, segurança e tipagem estática do código, e **Vite** para otimizar a performance de desenvolvimento e o tempo de carregamento da aplicação.

### Principais Destaques do Sistema:
- **Área do Cliente (Loja Virtual):** Apresenta um catálogo dinâmico de produtos com suporte a pesquisa por nome, visualização individual detalhada de itens (com fotos, preços, categorias e especificações) e fluxo prévio de compra.
- **Área Administrativa (Painel de Gestão):** Disponibiliza uma gestão centralizada do inventário através de um **CRUD completo de produtos** (Criar, Ler, Atualizar e Eliminar), permitindo que administradores gerem o catálogo em tempo real.
- **Integração via API (Axios):** Comunicação assíncrona otimizada com o backend para sincronização e manipulação de dados de produtos.
- **Navegação Dinâmica (React Router):** Gestão eficiente de rotas públicas (loja) e privadas/administrativas sem a necessidade de recarregar a página.

🔗 **Aplicação publicada:** [nexify.com.br](https://nexify-seven-sigma.vercel.app/)

---

## 🎯 Objetivos

- Construir uma plataforma de e-commerce funcional, escalável e responsiva.
- Separar claramente as responsabilidades entre a interface da loja e area administrativa.
- Implementar operações completas de CRUD de produtos integradas via Axios.
- Garantir a reutilização de componentes na interface com React.
- Utilizar TypeScript para manter a consistência dos dados do catálogo de produtos.
- Assegurar um ambiente de execução rápido e otimizado com Vite.

---

## 🖥️ Demonstração e Layout da Aplicação

### 🛒 Área do Cliente

A área do cliente permite a navegação e consulta do catálogo do e-commerce de forma visual e intuitiva.

#### 1. Catálogo de Produtos (Cards)
Página principal da loja virtual onde o cliente pode procurar produtos pelo nome, visualizar a listagem em cartões e carregar mais itens.

<img src="https://raw.githubusercontent.com/ViniciusFernandes09/Nexify/main/docs/screenshots/1.png" alt="Lista de Produtos - Área do Cliente" width="100%">

#### 2. Detalhes do Produto
Exibição detalhada do produto selecionado, apresentando imagem ampliada, preço, descrição técnica, categoria e botões de ação para compra ou retorno ao catálogo.

<img src="https://raw.githubusercontent.com/ViniciusFernandes09/Nexify/main/docs/screenshots/2.png" alt="Detalhes do Produto - Área do Cliente" width="100%">

---

### ⚙️ Área Administrativa

A área administrativa centraliza o inventário da loja através de um CRUD completo de produtos.

#### 3. Gestão do Catálogo (Listagem e Operações)
Painel de gestão onde o administrador visualiza a tabela de produtos cadastrados (ID, imagem, preço e nome), realiza pesquisas e pode acionar as opções de criação, edição e eliminação de itens.

<img src="https://raw.githubusercontent.com/ViniciusFernandes09/Nexify/main/docs/screenshots/3.png" alt="Cadastro e Listagem de Produtos - Área Administrativa" width="100%">

#### 4. Edição e Criação de Produto (Formulário)
Interface em modal utilizada para adicionar um novo produto ao e-commerce ou atualizar as informações de um item existente (nome, preço, URL da imagem, categoria e descrição).

<img src="https://raw.githubusercontent.com/ViniciusFernandes09/Nexify/main/docs/screenshots/4.png" alt="Edição de Produto - Área Administrativa" width="100%">

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **React** | Construção da interface do e-commerce e do painel por meio de componentes. |
| **TypeScript** | Tipagem estática para estruturas de dados (ex: entidade Produto). |
| **Vite** | Ambiente de desenvolvimento rápido e ferramenta de build. |
| **React Router DOM** | Gestão de navegação entre as rotas da loja e do painel admin. |
| **Axios** | Integração com serviços externos e operações de CRUD no e-commerce. |
| **Oxlint** | Análise estática para padronização e qualidade do código. |
| **Yarn** | Gestão de dependências do projeto. |
| **Vercel** | Hospedagem e publicação contínua da aplicação. |

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado na sua máquina:

- **Node.js** (versão recomendada v18+)
- **Yarn**
- **Git**
- IDE (ex: Visual Studio Code)

Verifique as versões no terminal:
```bash
node --version
yarn --version
git --version
```

---

## 🚀 Como executar o projeto

Siga as etapas abaixo para executar o Nexify em seu ambiente local.

### 1. Clone o repositório

```bash
git clone https://github.com/ViniciusFernandes09/Nexify.git
```

### 2. Acesse a pasta do projeto

```bash
cd Nexify
```

### 3. Instale as dependências

```bash
yarn install
```

### 4. Execute a aplicação

```bash
yarn dev
```

Após iniciar o servidor, o Vite exibirá no terminal o endereço local da aplicação. Normalmente:

```text
http://localhost:5173
```

Acesse o endereço no navegador para visualizar o projeto.

### 5. Gere a versão de produção

Para verificar a compilação da aplicação, execute:

```bash
yarn build
```

Os arquivos compilados serão gerados na pasta `dist/`.

### 6. Visualize a versão de produção

Após gerar a build, execute:

```bash
yarn preview
```

Esse comando inicia um servidor local para visualizar a versão compilada da aplicação.

### 7. Execute a análise de código

Para verificar o código utilizando o Oxlint, execute:

```bash
yarn lint
```

** AVISO IMPORTANTE**: Este projeto depende de um backend para funcionar corretamente. Para garantir o funcionamento de todas as funcionalidades, siga o passo a passo de configuração e execução do frontend e do backend.

[Nexify Backend](https://github.com/ViniciusFernandes09/nexify-backend)

---

## 📁 Estrutura do projeto

```text
Nexify/
├── .yarn/
├── public/
├── src/
├── .gitignore
├── .oxlintrc.json
├── .yarnrc.yml
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

### Organização dos diretórios e arquivos

- **`public/`**: armazena arquivos estáticos públicos.
- **`src/`**: contém o código-fonte da aplicação.
- **`.yarn/`**: reúne arquivos relacionados ao gerenciador de pacotes.
- **`package.json`**: define as dependências e os scripts do projeto.
- **`vite.config.ts`**: contém as configurações do Vite.
- **`tsconfig*.json`**: reúne as configurações do TypeScript.
- **`yarn.lock`**: registra as versões resolvidas das dependências.

---

## 📦 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `yarn dev` | Inicia o servidor de desenvolvimento. |
| `yarn build` | Verifica os tipos e gera a versão de produção. |
| `yarn lint` | Executa a análise estática do código. |
| `yarn preview` | Permite visualizar a versão compilada localmente. |

---

## 🌐 Deploy

O Nexify está disponível online por meio da Vercel.

🔗 **Acesse a aplicação:** [nexify.com.br](https://nexify-seven-sigma.vercel.app/)

A Vercel permite integrar o repositório GitHub ao processo de publicação, facilitando novas implantações a partir das alterações enviadas à branch configurada.

Para reproduzir a publicação, confira as configurações do projeto na Vercel, a branch de produção e as possíveis variáveis de ambiente necessárias.

---

## 🤝 Contribuição

Contribuições e sugestões de melhorias são bem-vindas!

1. Faça um fork do repositório.
2. Crie uma branch para sua alteração.
3. Implemente a melhoria desejada.
4. Verifique o código e a compilação.
5. Envie um pull request descrevendo as alterações.

Exemplo:

```bash
git checkout -b feature/minha-melhoria
git add .
git commit -m "feat: adiciona melhoria à aplicação"
git push origin feature/minha-melhoria
```

---

## 👨‍💻 Autor

**Vinícius Fernandes**

- **GitHub:** [@ViniciusFernandes09](https://github.com/ViniciusFernandes09)
- **Repositório:** [Nexify](https://github.com/ViniciusFernandes09/Nexify)
- **Aplicação:** [Acessar Nexify](https://nexify-seven-sigma.vercel.app/)

---

<p align="center">
  Desenvolvido por Vinícius Fernandes
</p>
