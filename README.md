# Mini-Netflix

- This project intends to choose a front-end framework to execute. I choose [Angular](https://angular.io/) to it.

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.2.

<hr />

## Table of Contents

- [Used Technologies](#used-technologies)
- [Required Installation](#required-installation)
- [Installing Packages](#install-packages)
- [Running Frontend](#running-frontend)
  - [Cypress](#running-cypress)
  - [Unit Tests](#running-unit-tests)
- [Using Docker](#using-docker)
- [Users Mock Logins](#users-mock-logins)
- [To do](#to-do)
- [Author](#author)

<hr />

## Used technologies

  ```
  Angular;
  SCSS;
  BEM Architecture to SCSS files;
  Cypress to e2e;
  Docker.
  ```

## Required installation

  - If you dont have been installed yet, on command line do as follow:

  ```
  $ sudo apt install nodejs
  $ npm/yarn install -g @angular/cli
  ```

## Installing packages

  ```
  $ npm/yarn install
  ```


## Running frontend

  ```
  $ ng serve -o
  ```

## Running Cypress

  - Execute the integration test via [Cypress](https://www.cypress.io/);
  - On another command line do as follow, with development server online `http://localhost:4200/`.

  ```
  $ npm/yarn run cy
  ```

## Running unit tests

  - Execute the unit tests via [Karma](https://karma-runner.github.io).

  ```
  $ ng test
  ```

## Using Docker

  - Automate past processes with following command: 

  ```
  $ sudo docker-compose up
  ```

## Users Mock logins

  ```ts
  'User One': {
    email: 'dev@test.com',
    password: 123456,
  },
  'User Two': {
    email: 'sup@test.com',
    password: 123456,
  }
  ```

## To do

  ```
  1. Implement more unit tests;
  2. Do more movies services;
  3. Add more @media-queries;
  4. Create an nodejs API with express to give movies data.
  ```

## Author

* **Bruno Ramires de Moraes Ferreira** -  [GitHub](https://github.com/brunormferreira)

  <a href="https://github.com/brunormferreira">
    <img 
    alt="Imagem do Autor Bruno Ramires" src="https://avatars0.githubusercontent.com/u/35575092?s=460&v=4" width="100">
  </a>
