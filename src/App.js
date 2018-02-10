import React, { Component } from 'react'
import BarChart from './components/BarChart'
import Loader from './components/Loader'
import getData from './api'
import { format } from './utils'

export default class MyComponent extends Component {
	state = { isFetching: false, chartData: null, error: null }

	componentDidMount() {
		this.setState(prevState => ({
			isFetching: true
		}))

		getData(
			fetchedData =>
				this.setState(prevState => ({
					chartData: format(fetchedData),
					isFetching: false
				})),
			error =>
				this.setState(prevState => ({
					error: 'Whoops an error occured while fetching chart data !',
					isFetching: false
				}))
		)
	}

	render() {
		const { isFetching, error, chartData } = this.state
		return (
			<div>
				{isFetching && <Loader>Loading data</Loader>}
				{!isFetching && error && <p>{error}</p>}
				{chartData && <BarChart chartData={chartData.data} />}
			</div>
		)
	}
}
