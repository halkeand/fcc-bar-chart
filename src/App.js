import React, { Component } from 'react'
import BarChart from './components/BarChart'
import getData from './api'

export default class MyComponent extends Component {
	state = { isFetching: false, chartData: null, error: null }

	componentDidMount() {
		getData(
			chartData =>
				this.setState(prevState => ({
					chartData
				})),
			error =>
				this.setState(prevState => ({
					error: 'Whoops an error occured while fetching chart data !'
				}))
		)
	}
	render() {
		return (
			<div>
				<BarChart />
			</div>
		)
	}
}
