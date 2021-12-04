import { getData } from '../../helpers/makeRequest'
import { Entity, Filter } from '../../types/interfaces'

export class EntityService {
	static async getEntitiesByRange({ startId, endId }: Filter) {
		const promises: Array<Promise<Entity>> = []

		for (let index = startId; index <= endId; index++) {
			promises.push(getData(index))
		}

		const resp = await Promise.all(promises)
		if (!promises.length)
			throw new Error('Error no se encuentra para rango especificado')

		return resp
	}
}
