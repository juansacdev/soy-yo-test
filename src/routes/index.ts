import { Application } from 'express'
import entities from '../API/entities/network'

const routes = (server: Application): void => {
	server.use('/entities/filter', entities)
}

export default routes
