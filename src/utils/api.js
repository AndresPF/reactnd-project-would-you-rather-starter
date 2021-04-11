import {
  dummyGetUsers,
  dummyGetQuestions,
  dummySaveQuestion,
  dummySaveQuestionAnswer,
} from './_DATA'

export function getInitialData() {
  return Promise.all([dummyGetUsers(), dummyGetQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  )
}

export function saveQuestion(info) {
  return dummySaveQuestion(info)
}

export function saveQuestionAnswer(info) {
  return dummySaveQuestionAnswer(info)
}
