import React from 'react'
import {
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Bar
} from 'recharts'

export default ({ chartData }) => (
	<ResponsiveContainer width="90%" height={700}>
		<BarChart data={chartData}>
			<CartesianGrid strokeDasharray="1 1" />
			<XAxis
				dataKey="date"
				minTickGap={30}
				tickFormatter={d => {
					const date = new Date(d)
					return date.getFullYear()
				}}
			/>
			<YAxis />
			<Tooltip
				labelFormatter={d => {
					const date = new Date(d)
					const month = date.toLocaleString('en-us', { month: 'long' })
					return `${date.getFullYear()} ${month}`
				}}
			/>
			<Legend />
			<Bar dataKey="GDP" fill="#44bd32" />
		</BarChart>
	</ResponsiveContainer>
)
