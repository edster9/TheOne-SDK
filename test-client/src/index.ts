import TheOne from '@ed.sahakian/theone'

const client = new TheOne({
	apiKey: 'ZL6WU6WyLD-icp0JXGlI',
})

client.books
client.books.getAll().then((res) => {
	console.log(res)
})

// client.movies.getAll().then((res) => {
// 	console.log(res)
// })

// client.characters.getAll().then((res) => {
// 	console.log(res)
// })

// client.quotes.getAll().then((res) => {
// 	console.log(res)
// })

// client.chapters.getAll().then((res) => {
//   console.log(res);
// });
