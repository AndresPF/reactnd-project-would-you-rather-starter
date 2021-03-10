import React from 'react'
import Question from './Question'

export default function List(props) {
	return (
		<ul className='dashboard-list'>
			{props.questions.map((id) => (
				<li key={id}>
					<Question id={id} />
				</li>
			))}
		</ul>
	)
}
