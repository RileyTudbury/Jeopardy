export default class Question {
    constructor(data) {

        this.question = data.question
        this.answer = data.answer
        this.value = data.value
        this.category = data.category
    }

    get Template() {
        return
    }
}