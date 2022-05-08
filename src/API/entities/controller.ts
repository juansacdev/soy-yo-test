import { Request, Response } from 'express'
import { Filter } from '../../types/interfaces'
import { EntityService } from './services'

export class EntityController {
	static async getEntities(req: Request, res: Response): Promise<Response | undefined> {
		try {
			const filerData = req.body as Filter

			const entities = await EntityService.getEntitiesByRange(filerData)

			return res.status(200).json(entities)
		} catch (error) {
			res.status(404).json({ error: 'Error no se encuentra para rango especificado' })
		}
	}
}
