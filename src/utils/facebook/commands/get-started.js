import { callSendAPI } from '@/utils/facebook/api';

module.exports = {
    name: /^get_started$/i,

    async execute(event) {
        try {
            const { sender } = event;

            const messageData = {
                text: 'This is a get started message'
            };

            await callSendAPI(sender.id, messageData);
        } catch (error) {
            console.error(error);
        }
    },
};