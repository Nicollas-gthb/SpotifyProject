# 🎵 Spotify Web Player

Um **clone funcional do player do Spotify**, desenvolvido com **JavaScript puro (Vanilla JS)**, focado em **manipulação de DOM, organização de estado e interação com áudio**, utilizando apenas **HTML, CSS e JavaScript moderno**.

> Projeto com foco educacional e de portfólio, simulando comportamentos reais do Spotify Web Player.


## 📌 Sobre o Projeto

O **Spotify Web Player** foi criado com o objetivo de treinar e consolidar conceitos fundamentais de **JavaScript ES6+**, como:

* Manipulação avançada do DOM
* Organização de dados com objetos e módulos
* Controle de estado por música e artista
* Integração com a API nativa de áudio do navegador

Todo o projeto foi desenvolvido **sem frameworks**, priorizando o entendimento profundo da lógica por trás das interfaces interativas.


## 🚀 Funcionalidades

* ▶️ **Play / Pause** com alternância de ícones
* ⏭️ **Próxima / Anterior música**
* ⏱️ **Barra de progresso interativa** (arrastar para avançar/voltar)
* 🔊 **Controle de volume** com:

  * slider customizado
  * botão de mute
  * ícones dinâmicos conforme o volume
* ❤️ **Adicionar música** (estado individual por faixa)
* 👤 **Seguir artista** (estado individual por artista)
* 🖼️ **Atualização dinâmica** de:

  * capa da música
  * nome da música e artista
  * painel “Sobre o artista”
* 📄 **Painel lateral com resumo do artista**, incluindo imagem, biografia e ouvintes mensais


## 🛠️ Tecnologias Utilizadas

* **HTML5**
* **CSS3**

  * Custom properties (CSS variables)
  * Estilização personalizada de inputs `range`
* **JavaScript (ES6+)**

  * Manipulação de DOM
  * Destructuring
  * Event Listeners
  * Módulos JavaScript (`import` / `export`)
* ❌ Sem frameworks ou bibliotecas externas


## 📂 Estrutura do Projeto

```
SpotifyProject/
├── fonts/
├── images/
├── icons/
├── musics/
│
├── SpotifyIndex.html
├── SpotifyStyle.css
│   
├── SpotifyScript.js
└── SpotifyPlaylist.js

```

* `SpotifyScript.js` → lógica principal do player
* `SpotifyPlaylist.js` → dados das músicas e artistas
* Pastas de assets organizadas por tipo


## ▶️ Como Executar o Projeto

1. Clone este repositório:


```
git clone https://github.com/seu-usuario/spotify-web-player.git
```

2. Abra o arquivo `index.html` no navegador

> 💡 Para melhor experiência com módulos JS, recomenda-se usar um **servidor local** (ex: Live Server no VS Code).


## 🚧 Status do Projeto

**Em desenvolvimento** 🚀

Funcionalidades planejadas:

* 📁 Playlist dinâmica pelo menu
* 🔍 Busca por músicas e artistas
* 📜 Listagem interativa de músicas
* 🎨 Mais animações e micro-interações


## 📄 Observações

Este projeto não possui fins comerciais e não está associado oficialmente ao Spotify. Todas as marcas e nomes pertencem aos seus respectivos proprietários.


> README em constante evolução conforme o projeto cresce ✨


#


![Static Badge](https://img.shields.io/badge/Html5-E34F26?style=for-the-badge&logo=html5&logoColor=%23ffffff)
![Static Badge](https://img.shields.io/badge/Css3-1572B6?style=for-the-badge&logo=css&logoColor=%23ffffff)
![Static Badge](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=%23000000)
![Static Badge](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=%23ffffff)
