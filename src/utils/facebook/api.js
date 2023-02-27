import axios from "axios"

const BASE_URL = "https://graph.facebook.com/v16.0"

module.exports = {
    callSendAPI: async (recipientId, messageData) => {
        try {
            const response = await axios.post(
                `${BASE_URL}/me/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
                {
                    recipient: {
                        id: recipientId,
                    },
                    message: messageData,
                }
            )
            return response
        } catch (error) {
            console.log(error)
        }
    },
    getUser: async (userId) => {
        try {
            const response = await axios.get(
                `${BASE_URL}/${userId}?fields=first_name,last_name,profile_pic&access_token=${process.env.PAGE_ACCESS_TOKEN}`
            )
            return response.data
        } catch (error) {
            console.log(error)
        }
    },
}