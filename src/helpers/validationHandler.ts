import { NextFunction, Request, Response } from 'express'
import joi from 'joi'

const validate = (data, schema) => {
	const { error } = joi.object(schema).validate(data)
	return error
}

export const validationHandler = (schema, check = 'body') => {
	return function (req: Request, res: Response, next: NextFunction) {
		const error = validate(req[check], schema)
		error ? res.status(400).json({ error: 'Error en la validacion de datos de entrada' }) : next()
	}
}
