export default class Question {
    constructor(data) {

        this.question = data.question
        this.answer = data.answer
        this.value = data.value || 0
        this.category = data.category
    }

    get Template() {
        return `<div class="card">
        <div class="card-header">
          ${this.category.title}
        </div>
        <div class="card-body">
          <h5 class="card-title">${this.value}</h5>
          <p class="card-text">${this.question}</p>
        </div>
      </div>`
    }
}