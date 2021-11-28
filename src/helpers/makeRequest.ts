import axios from 'axios'
import config from '../config'

export const getData = async (id?: number) => {
	const {
		data: { data: entity },
	} = await axios.get(`${config.urlTarget}/${id}`)
	return entity
}
