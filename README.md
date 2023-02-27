## Facebook Chatbot
This is a simple Facebook Chatbot. It is built using NextJS and the Facebook Messenger Platform.

### Installation
1. Clone the repository: `git clone https://github.com/BadEnd777/Facebook-Chatbot-NextJS.git` or [download](https://github.com/BadEnd777/Facebook-Chatbot-NextJS/archive/refs/heads/main.zip)
2. Install dependencies: `npm install`
3. Create a Facebook Developer account and a Facebook App. Follow the instructions in the Facebook Developer documentation to set up a Messenger app and a webhook.
4. Set up the `next.config.js` file. Add the following environment variables to the file:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    VERIFY_TOKEN: 'verify_token',
    PAGE_ACCESS_TOKEN: 'page_access_token',
  },
}

module.exports = nextConfig
```

### Usage
Once the installation is complete, start the chatbot by running the command `npm start`. The chatbot will start listening for incoming messages on the webhook URL.

To interact with the chatbot, open the Facebook Messenger app and start a conversation with the page that the chatbot is connected to. You can then send messages to the chatbot and receive responses in real-time.

### FAQs
**Q: How do I create a Facebook Developer account?**

A: Go to the [Facebook Developer](https://developers.facebook.com/) website and click on the "Get Started" button. You will be prompted to log in to your Facebook account. Once you have logged in, you will be able to create a new Facebook Developer account.

**Q: How do I set up a webhook?**

A: Follow the instructions in the [Facebook Developer documentation](https://developers.facebook.com/docs/messenger-platform/getting-started/webhook-setup) to set up a webhook.

**Q: How do I get the PAGE_ACCESS_TOKEN?**

A: Follow the instructions in the [Facebook Developer documentation](https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup) to get the PAGE_ACCESS_TOKEN.

### Acknowledgments
* [Facebook Developer Documentation](https://developers.facebook.com/docs/messenger-platform)
* [Facebook Messenger Platform](https://developers.facebook.com/docs/messenger-platform)
* [Facebook Messenger Platform Quick Start](https://developers.facebook.com/docs/messenger-platform/quickstart)
* [Facebook Messenger Platform Webhook Reference](https://developers.facebook.com/docs/messenger-platform/reference/webhook-events)
* [Facebook Messenger Platform Send API Reference](https://developers.facebook.com/docs/messenger-platform/reference/send-api)
* [Facebook Messenger Platform Send API Quick Start](https://developers.facebook.com/docs/messenger-platform/send-messages)

### Contact
If you have any questions, feel free to contact me at [Email](mailto:badend23@hotmail.com).

### License
This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.