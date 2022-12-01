import TheOne from '@ed.sahakian/theone'

const client = new TheOne({
	apiKey: 'ZL6WU6WyLD-icp0JXGlI',
})

client.books.getAll().then((res) => {
	console.log(res)
})

// client.books.getOne('5cf58077b53e011a64671583').then((res) => {
// 	console.log(res)
// })

// client.movies.getAll().then((res) => {
// 	console.log(res)
// })

// client.characters.getAll({ limit: '10' }).then((res) => {
// 	console.log(res)
// })

// client.quotes.getAll().then((res) => {
// 	console.log(res)
// })

// client.chapters.getAll().then((res) => {
//   console.log(res);
// });
