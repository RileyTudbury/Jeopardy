import QuestionsController from "./Controllers/QuestionsController.js";

class App {
  QuestionsController = new QuestionsController();
}

window["app"] = new App();
