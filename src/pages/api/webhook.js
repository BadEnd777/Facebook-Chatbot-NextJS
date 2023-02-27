import { EventHandler } from '@/utils/facebook';

const Webhook = (req, res) => {
    try {
        switch (req.method) {
            case 'GET':
                return MethodGet(req, res);
            case 'POST':
                return MethodPost(req, res);
            default:
                return res.status(404).json({ message: 'Not found' }).end();
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' }).end();
    }
};

const MethodGet = (req, res) => {
    try {
        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        if (mode && token) {
            if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
                return res.status(200).send(challenge).end();
            } else {
                return res.status(403).json({ message: 'Forbidden' }).end();
            }
        } else {
            return res.status(404).json({ message: 'Not found' }).end();
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' }).end();
    }
};

const MethodPost = (req, res) => {
    try {
        const body = req.body;

        if (body.object === 'page') {
            body.entry.forEach((entry) => {
                const event = entry.messaging[0];
                EventHandler(event);
            });

            return res.status(200).end();
        } else {
            return res.status(404).json({ message: 'Not found' }).end();
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' }).end();
    }
};

export default Webhook;