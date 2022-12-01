import { Base, Config } from './base'
import { Books } from './books'
import { Movies } from './movies'
import { Characters } from './characters'
import { Quotes } from './quotes'
import { Chapters } from './chapters'

/**
 * TheOne SDK main class
 * It encapsulates all the the API subclasses
 *
 */
class TheOne {
	books: Books
	movies: Movies
	characters: Characters
	quotes: Quotes
	chapters: Chapters

	constructor(config: Config) {
		this.books = new Books(config)
		this.movies = new Movies(config)
		this.characters = new Characters(config)
		this.quotes = new Quotes(config)
		this.chapters = new Chapters(config)
	}
}

export default TheOne
