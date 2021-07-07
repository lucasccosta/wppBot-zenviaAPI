import {Client, TextContent, WebhookController } from '@zenvia/sdk'
import * as assert from 'assert'
import { ZENVIA_API_TOKEN, PORT} from './env'
import {getSessions, save as saveSessions} from './sessions'
import { run as runBot} from './bot'


assert.ok(ZENVIA_API_TOKEN, 'Token não configurado')
const client = new Client(ZENVIA_API_TOKEN)

const webhook = new WebhookController({
    client,
    port: Number(PORT ?? 3000),
    messageEventHandler: async (messageEvent) => {
        
        const {from, to, channel} = messageEvent.message
        const contactPhone = from
        const businessPhone = to
        console.log(JSON.stringify(messageEvent, null,4))
        
        // RESPOSTA FIXA - SUBSTITUÍDA PELO BOT
        const response = new TextContent('Seja bem vindo!')
        client.getChannel(channel).sendMessage(
            contactPhone,
            businessPhone,
            response    
        )

    },
    loggerInstance: {
        debug: console.log,
        warn: console.warn,
        error: console.error
    }
})

webhook.init()