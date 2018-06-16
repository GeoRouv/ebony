const Bot = require('./bot');
const webhookFactories = require('./webhooks');
const menuProcessorFactory = require('./utilities/menuProcessor');
const userModelFactory = require('./models/user');

const { Message, elements } = require('./sendAPI');

module.exports = {
    Bot,
    utilities: {
        menuProcessor: menuProcessorFactory()
    },
    models: {
        userModelFactory
    },
    sendAPI: {
        Message,
        elements
    },
    webhookFactories
};
