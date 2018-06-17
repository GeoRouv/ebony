# EBONy : the Easy BOt Node Framework 
EBONy is module based NodeJS chatbot framework, based on Express for the webserver and on MongoDB for state storage. 

[![Linux Build][travis-image]][travis-url]

It splits each chatbot "flow" (a chatbot's features) on separate and portable modules that can be imported in the main chatbot app.

## Basic message flow in the EBONy framework

When a user sends a message to your chatbot on Messenger the following sequence happens:

1. **Webhook**

    The Webhook is the main entry point of messages, postbacks and requests from Facebook to our chatbot.
2. **Handlers**

    The Handlers are responsible for applying a set of rules (routes) on the messages and postbacks from Facebook, routing them to the correct action.
3. **Actions**

    The Actions are the things that our chatbot can do. Any calls to external APIs, the formulation of the message and the actual sending of it, happen there.
4. **Sender**

    Sender is the system responsible for sending the message to the user. An action is calling the sender to send a message to a specific user. Also the sender is responsible for logging of each message for statistics etc.

## Bot

The Bot object: 

```
const bot = new Bot({
    handlers,
    defaultActions,
    fb,
    db,
    userModelFactory, 
    sendMiddlewares: {
        preAction,
        postAction
    }
})
```

## Modules

The module system is the heart of the EBONy Framework. 

Each module is an object that can be imported to the bot using the `bot.addModule(exampleModule)` function.

```
Module {
    actions,    : An object containing all the module's actions
    routes,     : Routes for postback payloads
    text,       : Regex rules to select actions
    referrals   : Routes for referrals payloads
}
```
[travis-image]:https://travis-ci.com/chrispanag/ebony.svg?token=pVwGyNuxoSPzd2qPW2Dr&branch=master
[travis-url]: https://travis-ci.com/chrispanag/ebony