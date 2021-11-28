import { config } from 'dotenv'
config()

export default {
	isDev: process.env.NODE_ENV !== 'production',
	port: process.env.PORT,
	urlTarget: process.env.URL_TARGET,
}
