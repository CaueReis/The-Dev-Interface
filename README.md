# Site Pessoal/Portifólio

Este é um site pessoal/portifólio criado para mostrar minhas habilidades, projetos e experiências. Ele foi desenvolvido com tecnologias modernas como **HTML5**, **CSS3**, **JavaScript**, **TypeScript** e **Sass**, além de utilizar ferramentas de automação como **Gulp** para otimizar o fluxo de desenvolvimento.

## 🎯 Motivo da criação

Este projeto foi criado com os seguintes objetivos:
- **Apresentar meu portifólio**: Mostrar meus projetos, habilidades e experiências de forma organizada e visualmente atraente.
- **Praticar tecnologias modernas**: Utilizar ferramentas como **TypeScript**, **Sass** e **Gulp** para aprimorar minhas habilidades em desenvolvimento web.
- **Automatizar tarefas**: Implementar um fluxo de trabalho eficiente com **Gulp** para minificar arquivos, transpilar código e facilitar o desenvolvimento.
- **Criar um site responsivo**: Garantir que o site funcione bem em dispositivos móveis, tablets e desktops.


## 🚀 Como rodar o projeto na sua máquina

Siga os passos abaixo para configurar e rodar o projeto localmente.

### Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:
- **Node.js version 20**: Necessário para executar scripts e instalar dependências e ter compatibilidade com SASS.
  - Download: [https://nodejs.org/](https://nodejs.org/)
- **Git**: Para clonar o repositório.
  - Download: [https://git-scm.com/](https://git-scm.com/)

### Passo 1: Clone o repositório
Abra o terminal e execute o comando abaixo para clonar o repositório:
```bash
git clone https://github.com/CaueReis/Site-Pessoal-Portifólio
```

### Passo 2: Instale as dependências
Navegue até a pasta do projeto e instale as dependências necessárias:

```bash
cd Site-Pessoal-Portifólio
npm install
```

### Passo 3: Execute o servidor de desenvolvimento
Use o Gulp para rodar o servidor de desenvolvimento e monitorar alterações nos arquivos:

```bash
npm start
```
Isso irá:

Compilar os arquivos Sass (.scss) em CSS.

Transpilar TypeScript e JavaScript moderno (ES6+) para versões compatíveis com navegadores antigos.

Minificar arquivos HTML, CSS e JavaScript.

Iniciar um servidor local com gulp-webserver.

Abrir o site automaticamente no navegador (geralmente em http://localhost:8080).

### Passo 4: Explore o site
Navegue pelo site para ver todas as páginas e funcionalidades.

O Gulp está configurado para monitorar alterações nos arquivos. Ao salvar mudanças, ele recompila e atualiza o site automaticamente.

### Passo 5: Build para produção (opcional)
Se você quiser gerar os arquivos otimizados para produção, execute:

```bash

npm run build
```

Isso criará uma pasta dist com os arquivos minificados e prontos para deploy.



## 🛠️ Tecnologias utilizadas
Este projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

### Linguagens e pré-processadores

HTML5: Estruturação e semântica do site.

CSS3: Estilização e design responsivo.

JavaScript: Interatividade e funcionalidades dinâmicas.

TypeScript: Adiciona tipagem estática ao JavaScript para maior robustez no código.

Sass (SCSS): Pré-processador CSS para estilização avançada e modular.

### Bibliotecas e frameworks

Font Awesome (v4.7.0): Ícones modernos e escaláveis para o design do site.

Babel (v6.26.3): Transpilação de JavaScript moderno (ES6+) para versões compatíveis com navegadores antigos.

babel-preset-env (v1.6.1): Configuração do Babel para suporte a ambientes específicos.

### Ferramentas de build e automação

Gulp (v4.0.2): Automação de tarefas como minificação, concatenação e transpilação.

gulp-babel (v7.0.1): Integração do Babel com Gulp para transpilação de JavaScript.

gulp-concat (v2.6.1): Concatenação de arquivos JavaScript e CSS.

gulp-htmlmin (v4.0.0): Minificação de arquivos HTML.

gulp-sass (v5.0.0): Compilação de arquivos Sass (SCSS) para CSS.

gulp-uglify (v3.0.0): Minificação de arquivos JavaScript.

gulp-uglifycss (v1.0.9): Minificação de arquivos CSS.

gulp-watch (v5.0.1): Monitoramento de alterações em arquivos para execução automática de tarefas.

gulp-webserver (v0.9.1): Servidor local para desenvolvimento e teste do site.

### Controle de versão e hospedagem

Git: Controle de versão do projeto.

GitHub: Hospedagem do repositório e colaboração.

### Editor de código

Visual Studio Code: Editor de código utilizado para desenvolvimento.

## 📸 Capturas de tela

![Captura de tela 2025-03-17 215524](https://github.com/user-attachments/assets/433b90e8-27fd-43c5-98d5-1d0f17f9057e)
![Captura de tela 2025-03-17 215702](https://github.com/user-attachments/assets/e79fde37-802c-4810-a1bd-76a1504193de)
![Captura de tela 2025-03-17 215702](https://github.com/user-attachments/assets/7ed02f64-0c85-4ccb-a3ed-abe842b65f69)
![Captura de tela 2025-03-17 215921](https://github.com/user-attachments/assets/fee50f90-9b7e-4b73-b110-91ccc064bd03)

## 🚧 Roadmap
Adicionar suporte a temas claros e escuros.

Integrar um blog ao site.

Adicionar animações com CSS e JavaScript.

Integrar sistema de registro e login com o banco de dados.

## ❓ FAQ
Como alterar as cores do site?
As cores estão definidas no arquivo styles/variables.scss. Basta modificar as variáveis de cor e recompilar o Sass.

## Feito com ❤️ por Caue Reis.
