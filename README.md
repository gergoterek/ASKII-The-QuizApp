# ASKII - The QuizApp

ASKII is a quiz web application, where the user can answer questions from a certain categorie, with given options. After answering a card, the user will get a random next question. Every registered user can add further public questions with answers. All these questions will be available for all other users. The user prifile includes the ratio of total answered questions and correct answers. The goal is to get a better ratio, which are showned on the virtual leatherboard.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Requirements

For building and running the application you need:

- [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Maven 3](https://maven.apache.org)
- [Node Package Manager 6](https://nodejs.org)


### Clone the repository

`git clone https://github.com/gergoterek/ASKII-The-QuizApp.git` - Copy the application on your local machine

`cd ASKII-The-QuizApp` - Enter application folder



### Install Maven dependencies and start Spring Boot app
`mvn install` - Download the necessary dependencies

`mvn spring_boot:run` - Start running the Spring Boot application

Shut it down manually with `Ctrl-C`.


### Install npm packages and run npm scripts
`npm install` - Download the necessary dependencies

`npm start`- Build the application

Shut it down manually with `Ctrl-C`.


### Tests
`mvn test`- Run all the Maven unit test classes.

`npm test` - Builds the application and runs NPM Intern tests (both unit and functional) one time.
