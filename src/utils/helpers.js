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

export function formatTweet(tweet, author, authedUser, parentTweet) {
  const { id, likes, replies, text, timestamp } = tweet
  const { name, avatarURL } = author

  return {
    name,
    id,
    timestamp,
    text,
    avatar: avatarURL,
    likes: likes.length,
    replies: replies.length,
    hasLiked: likes.includes(authedUser),
    parent: !parentTweet
      ? null
      : {
          author: parentTweet.author,
          id: parentTweet.id,
        },
  }
}
