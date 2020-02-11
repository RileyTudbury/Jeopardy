import QuestionsService from "../Services/QuestionsService.js";
import _store from "../store.js";

//Private
function _draw() {
  let questions = _store.State.questions;
  let template = ""
  console.log(questions);
  template += questions.Template
  document.getElementById("question-card").innerHTML = template
}

//Public
export default class QuestionsController {
  constructor() {
    _store.subscribe("questions", _draw);
  }

  getApiQuestion() {
    QuestionsService.getApiQuestion();
  }

}
