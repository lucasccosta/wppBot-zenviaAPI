import { config } from 'dotenv'

config()

export const {
    ZENVIA_API_TOKEN,
    PORT
} = process.env