import axios from 'axios'

export default (resolve, reject) =>
	axios
		.get(
			'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json'
		)
		.then(resp => resolve(resp.data), err => reject(err))
