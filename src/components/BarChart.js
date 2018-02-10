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
				<XAxis
					dataKey="date"
					minTickGap={20}
					tickFormatter={d => {
						const date = new Date(d)
						return date.getFullYear()
					}}
				/>
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="GDP" fill="#8884d8" />
			</BarChart>
		</ResponsiveContainer>
	</section>
)
