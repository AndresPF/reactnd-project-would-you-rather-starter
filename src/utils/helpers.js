export function formatDate(timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function filterQuestions(questions, answers) {
  const unanswered = questions.filter((question) => {
    const check = answers.find((answer) => answer === question)
    return check === undefined ? true : false
  })

  const answered = questions.filter((question) => {
    const check = answers.find((answer) => answer === question)
    return check === undefined ? false : true
  })

  return {
    unanswered,
    answered,
  }
}

export function sumScoreTotal(user) {
  return Object.keys(user.answers).length + user.questions.length
}
