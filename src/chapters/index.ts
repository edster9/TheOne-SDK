import { Base } from '../base'
import { Chapter } from './types'
import { Docs } from '../types'

const resourceName = 'chapter'

/**
 * Chapters API subclass
 *
 */
export class Chapters extends Base {
	/**
	 * Returns all the Chapters
	 *
	 * @returns A Docs object containing an array of all the Chapters
	 */
	getAll(): Promise<Docs<Chapter>> {
		return this.request(`/${resourceName}`, {}, true)
	}

	/**
	 * Finds and returns a Chapter object by ID
	 *
	 * @param id - ID of the Chapter
	 * @returns A Docs object containg the Chapter
	 */
	getOne(id: string): Promise<Docs<Chapter>> {
		return this.request(`/${resourceName}/${id}`, {}, true)
	}
}
