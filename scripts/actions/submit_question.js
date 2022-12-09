document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('.question_form')
    const questionData = {}
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let theme = document.getElementById("question_theme")
        let description = document.getElementById("question_description")
        questionData[theme.name] = theme.value
        questionData[description.name] = description.value
        if (theme.value !== "" && description.value !== "") {
            createQuestion(theme.value, description.value)
            addQuestion(questionData)
            form.reset()
        }
    })
})
document.addEventListener('DOMContentLoaded', function () {
    const storedQuestions = JSON.parse(localStorage.getItem('questions'))
    if (!storedQuestions)
        return
    storedQuestions.forEach((question) => {
        createQuestion(question.theme, question.description);
    });
})
function addQuestion(question) {
    let storedQuestions = JSON.parse(localStorage.getItem('questions')) || []
    storedQuestions.push(question)
    localStorage.setItem('questions', JSON.stringify(storedQuestions))
}
function createQuestion(theme, description) {
    let questionItemHTML =
        `<p class="question_item_theme">${theme}</p>
                <div class="question_item_description">
                    ${description}
                </div>`

    let item = document.createElement("div")
    item.className = "question_item"
    item.innerHTML = questionItemHTML
    let elem = document.getElementsByClassName("stored_questions")[0]
    elem.insertAdjacentElement('beforeend', item)
}