import fs from 'fs';

export const EventHandler = (event) => {
    try {
        if (!event.message) return;

        if (event.message && event.message.text) {
            const text = event.message.text;

            findCommand(text, event);
        }

        if (event.message && event.message.quick_reply) {
            const payload = event.message.quick_reply.payload;

            findCommand(payload, event);
        }
    } catch (error) {
        console.log(error);
    }
};


const findCommand = (text, event) => {
    try {
        const commands = fs.readdirSync('./src/utils/facebook/commands');

        for (const command of commands) {
            const commandFile = require(`./commands/${command}`);
            if (commandFile.name.test(text)) {
                commandFile.execute(event);
                break;
            }
        }
    } catch (error) {
        console.log(error);
    }
};