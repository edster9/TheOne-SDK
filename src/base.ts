import fetch from 'isomorphic-unfetch'

/**
 * The SDK configuration type
 *
 */
export type Config = {
	apiKey: string
	baseUrl?: string
}

/**
 * The base class for all the API subsclasses
 *
 */
export abstract class Base {
	private apiKey: string
	private baseUrl: string

	constructor(config: Config) {
		this.apiKey = config.apiKey
		this.baseUrl = config.baseUrl || 'https://the-one-api.dev/v2'
	}

	/**
	 *
	 * @param endpoint - API endpoint URL
	 * @param options - Fetch options
	 * @param auth - Authenticate this request
	 * @returns A Promise from the fetch request
	 */
	protected request<T>(
		endpoint: string,
		options?: RequestInit,
		auth?: boolean,
	): Promise<T> {
		const url = `${this.baseUrl}${endpoint}`
		const headers = {
			'Content-Type': 'application/json',
			'api-key': this.apiKey,
		}

		// If authoriztion is requested then add the proper auth header
		if (auth) {
			headers['Authorization'] = `Bearer ${this.apiKey}`
		}

		// Combine the configuration options passed in with new headers
		const config = {
			...options,
			headers,
		}

		// Fetch the reuqust and throw an exception if something goes wrong
		return fetch(url, config).then((response) => {
			if (response.ok) {
				return response.json()
			}

			throw new Error(response.statusText)
		})
	}
}
