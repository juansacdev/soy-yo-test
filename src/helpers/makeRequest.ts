import axios from 'axios'
import config from '../config'
import { Entity } from '../types/interfaces'

export const getData = async (id?: number): Promise<Entity> => {
	const {
		data: { data: entity },
	} = await axios.get(`${config.urlTarget}/${id}`)
	return entity
}
