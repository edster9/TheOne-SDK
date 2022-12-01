import { Base } from '../base'
import { Book } from './types'
import { Docs } from '../types'

const resourceName = 'book'

/**
 * Books API subclass
 *
 */
export class Books extends Base {
	/**
	 * Returns all the Books
	 *
	 * @returns A Docs object containing an array of all the Books
	 */
	getAll(): Promise<Docs<Book>> {
		return this.request(`/${resourceName}`)
	}

	/**
	 * Finds and returns a Book object by ID
	 *
	 * @param id - ID of the Book
	 * @returns A Docs object containg the Book
	 */
	getOne(id: string): Promise<Docs<Book>> {
		return this.request(`/${resourceName}/${id}`)
	}

	/**
	 * Finds all Chapters for a Book by ID
	 *
	 * @param id - ID of the Book
	 * @returns A Docs object containing an array of all the Chapters
	 */
	getChaptersByBookId(id: string): Promise<Docs<Book>> {
		return this.request(`/${resourceName}/${id}/chapter`)
	}
}
