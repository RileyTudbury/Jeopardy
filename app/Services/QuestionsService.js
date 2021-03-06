import _store from "../store.js";
import Question from "../Models/Question.js"


// @ts-ignore
const _api = axios.create({
  baseURL: "http://jservice.io/api/random",
  timeout: 10000
});

class QuestionsService {

  getApiQuestion() {
    _api
      .get("")
      .then(response => {
        let question = new Question(response.data[0])
        _store.commit("questions", question)
      })
      .catch(error => {
        console.log(error);
      })
  }
}

const service = new QuestionsService();
export default service;
