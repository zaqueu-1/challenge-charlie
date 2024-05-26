<img src="https://github.com/zaqueu-1/challenge-charlie/blob/master/github/logo.png" alt="logo">

## Challenge Charlie | Teste Técnico

O projeto aqui encontrado se trata de um desafio técnico e foi desenvolvido com base em requisitos pré-estabelecidos pela empresa. 

O objetivo é exibir a previsão do tempo de acordo com a localização atual do usuário usando a [API de geolocalização](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) para coletar coordenadas, a [OpenCageAPI](https://opencagedata.com/api) para identificar a localização e [OpenWeatherAPI](https://openweathermap.org/api) para retornar os dados de clima do dia atual e dos dois seguintes.

Utilizei as seguintes tecnologias:

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Deploy
https://https://challenge-charlie-eduardo-zaqueu.vercel.app/

## Demonstração
![demo](https://github.com/zaqueu-1/challenge-charlie/blob/master/github/demo.gif)

## Rodar o projeto localmente
Os passos a seguir são para clonar e rodar o projeto localmente, em modo de desenvolvimento:
```bash
  git clone https://github.com/zaqueu-1/challenge-charlie.git
```
```bash
  cd challenge-charlie
```
```bash
  npm install
```
```bash
  npm run dev
```  
## Rodar o projeto via Docker
Também é possível rodar o projeto através de um contêiner pelo Docker. Para isso, siga os seguintes comandos após clonar e estar na raiz do projeto:
- Iniciar em ambiente de produção
```bash
  docker-compose up --build prod
```
O projeto estará rodando na porta 3001 em http://localhost:3001
- Iniciar em ambiente de desenvolvimento
```bash
  docker-compose up --build dev
```
O projeto estará rodando na porta 3000 em http://localhost:3000


## Testes
## Estrutura do Projeto
Abaixo, algumas informações sobre minhas escolhas e tomadas de decisão durante o andamento do projeto:

* Optei por utilizar o próprio ícone de bússola como loader, a fim de manter a simplicidade da interface;
* Utilizei [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) para criar rotas para o consumo das APIs requeridas no desafio. Dessa forma é possível fazer requisições com todos os métodos HTTP, facilitando também a criação dos serviços e suas respectivas funções;
* O input realiza a busca da localidade ao pressionar o Enter, removendo a necessidade de um botão adicional na interface. Além disso, incluí uma função simples de limpeza do input ao clicar na div que o contem, facilitando a inserção de uma nova localidade;
* Para a unidade de temperatura, além de torná-la clicável, adicionei uma legenda contendo a unidade oposta à atual. Ao ser clicada, ela alterna a unidade de todas as ocorrências de temperatura na página, assim como a própria legenda;
* incluí uma mensagem de "Sua busca não retornou resultados" para casos onde a API não consiga encontrar uma localidade.

## Autor

- [@zaqueu-1](https://www.github.com/zaqueu-1)
Acesse também meu [LinkedIn](https://linkedin.com/in/zaqueu1) e dê uma olhada em meu [portfolio](https://zaqueu.tech)!