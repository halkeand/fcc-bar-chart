export const format = obj => {
	const data = obj.data.reduce(
		(acc, arr) => acc.concat({ date: arr[0], GDP: arr[1] }),
		[]
	)
	return {
		...obj,
		data
	}
}
