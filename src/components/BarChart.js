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
	<section>
		<ResponsiveContainer width="100%" height={700}>
			<BarChart data={chartData}>
				<CartesianGrid strokeDasharray="1 1" />
				<XAxis dataKey="date" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="GDP" fill="#8884d8" />
			</BarChart>
		</ResponsiveContainer>
	</section>
)
