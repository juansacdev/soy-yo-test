import { Router } from 'express'
import { validationHandler } from '../../helpers/validationHandler'
import { EntityController } from './controller'
import { filterSchema } from './validation'

const routes = Router()

routes.post('/', validationHandler(filterSchema), EntityController.getEntities)

export default routes
