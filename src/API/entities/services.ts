import { getData } from '../../helpers/makeRequest'
import { Entity, Filter } from '../../types/interfaces'

export class EntityService {
	static async getEntitiesByRange({ startId, endId }: Filter) {
		const data: Array<Entity> = []

		for (let index = startId; index <= endId; index++) {
			const response = await getData(index)

			if (!Object.entries(response).length)
				throw new Error('Error no se encuentra para rango especificado')

			data.push(response)
		}

		return data
	}
}
