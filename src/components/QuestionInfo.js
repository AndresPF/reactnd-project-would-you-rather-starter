import React from 'react'

function QuestionOption(props) {
	const { option, total, chosen } = props
	const count = option.votes.length
	return (
		<div className={`question-option ${chosen ? 'chosen' : ''}`}>
			<span className='option-text'>{option.text}</span>
			<div className='option-info'>
				<span className='option-votes'>
					{count} out of {total} votes
				</span>
				<span className='option-percentage'>{(count / total) * 100}%</span>
			</div>
		</div>
	)
}

export default function QuestionInfo(props) {
	const { question, authedUser } = props
	const total =
		question.optionOne.votes.length + question.optionTwo.votes.length
	return (
		<div className='question-info'>
			<div className='question-top'>
				<h2>{question.author.name}</h2>
				<img src={question.author.avatarURL} alt='' className='avatar' />
			</div>
			<div className='inner-container'>
				<span className='question-title'>Result</span>
				<QuestionOption
					option={question.optionOne}
					total={total}
					chosen={question.optionOne.votes.includes(authedUser)}
				/>
				<QuestionOption
					option={question.optionTwo}
					total={total}
					chosen={question.optionTwo.votes.includes(authedUser)}
				/>
			</div>
		</div>
	)
}
