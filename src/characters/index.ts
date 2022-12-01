import { Base } from '../base'
import { Character } from './types'
import { Docs } from '../types'

const resourceName = 'character'

/**
 * Characters API subclass
 *
 */
export class Characters extends Base {
	/**
	 * Returns all the Characters
	 *
	 * @returns A Docs object containing an array of all the Characters
	 */
	getAll(): Promise<Docs<Character>> {
		return this.request(`/${resourceName}`, {}, true)
	}

	/**
	 * Finds and returns a Character object by ID
	 *
	 * @param id - ID of the Character
	 * @returns A Docs object containg the Character
	 */
	getOne(id: string): Promise<Docs<Character>> {
		return this.request(`/${resourceName}/${id}`, {}, true)
	}

	/**
	 * Finds all Quotes for a Character by ID
	 *
	 * @param id - ID of the Character
	 * @returns A Docs object containing an array of all the Quotes
	 */
	getQuotesByCharacterId(id: string): Promise<Docs<Character>> {
		return this.request(`/${resourceName}/${id}/quote`, {}, true)
	}
}
