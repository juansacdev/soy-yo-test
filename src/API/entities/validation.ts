import joi from 'joi'

const id = joi.number().min(1).max(20).required()

export const filterSchema = {
	startId: id,
	endId: id,
}
