import { callSendAPI, getUser } from '@/utils/facebook/api';

module.exports = {
    name: /^hello$/i,

    async execute(event) {
        try {
            const { sender } = event;
            const user = await getUser(sender.id);

            const messageData = {
                text: `Hello ${user.first_name}!`,
                quick_replies: [
                    {
                        content_type: 'text',
                        title: 'Get Started',
                        payload: 'GET_STARTED',
                    },
                ],
            };

            await callSendAPI(sender.id, messageData);
        } catch (error) {
            console.error(error);
        }
    },
};