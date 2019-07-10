import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const ApiTest = () => {
	const [data, setData] = useState({ hits: [] })
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			const res = await axios('http://hn.algolia.com/api/v1/search?query=redux')
			setData(res.data)
			setIsLoading(false)
		}
		fetchData()
	}, [])

	return (
		<Fragment>
			{isLoading ? (
				<h6>Please bare with while we call the API for you</h6>
			) : (
				<ul>
					{data.hits.map(item => (
						<li key={item.objectID}>
							<a href={item.url}>{item.title}</a>
						</li>
					))}
				</ul>
			)}
		</Fragment>
	)
}

export default ApiTest
