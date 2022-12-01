import { Base } from '../base'
import { Movie } from './types'
import { Docs } from '../types'

const resourceName = 'movie'

/**
 * Books API subclass
 *
 */
export class Movies extends Base {
	/**
	 * Returns all the Movies
	 *
	 * @returns A Docs object containing an array of all the Movies
	 */
	getAll(): Promise<Docs<Movie>> {
		return this.request(`/${resourceName}`, {}, true)
	}

	/**
	 * Finds and returns a Movie object by ID
	 *
	 * @param id - ID of the Movie
	 * @returns A Docs object containg the Movie
	 */
	getOne(id: string): Promise<Docs<Movie>> {
		return this.request(`/${resourceName}/${id}`, {}, true)
	}

	/**
	 * Finds all Quotes for a Movie by ID
	 *
	 * @param id - ID of the Movie
	 * @returns A Docs object containing an array of all the Quotes
	 */
	getQuotesByMovieId(id: string): Promise<Docs<Movie>> {
		return this.request(`/${resourceName}/${id}/quote`, {}, true)
	}
}
