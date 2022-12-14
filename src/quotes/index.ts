import { Base } from '../base'
import { Quote } from './types'
import { Docs } from '../types'

const resourceName = 'quote'

/**
 * Quotes API subclass
 *
 */
export class Quotes extends Base {
	/**
	 * Returns all the Quotes
	 *
	 * @returns A Docs object containing an array of all the Quotes
	 */
	getAll(options?: any): Promise<Docs<Quote>> {
		const params = new URLSearchParams(options).toString()

		return this.request(`/${resourceName}` + (params && `?${params}`), {}, true)
	}

	/**
	 * Finds and returns a Quote object by ID
	 *
	 * @param id - ID of the Quote
	 * @returns A Docs object containg the Quote
	 */
	getOne(id: string): Promise<Docs<Quote>> {
		return this.request(`/${resourceName}/${id}`, {}, true)
	}
}
