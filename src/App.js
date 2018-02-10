import React, { Component } from 'react'
import BarChart from './components/BarChart'
import Loader from './components/Loader'
import getData from './api'

export default class MyComponent extends Component {
	state = { isFetching: false, chartData: null, error: null }

	componentDidMount() {
		this.setState(prevState => ({
			isFetching: true
		}))

		getData(
			chartData =>
				this.setState(prevState => ({
					chartData,
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
				<BarChart />
			</div>
		)
	}
}
