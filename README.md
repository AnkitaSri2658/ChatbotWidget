
## Background Information

Most of the clients use AI as a customer service bot in chats on their websites.
When one of their users writes a message in the chat, our AI analyzes that message to understand the user's intent and
gives the appropriate reply, for example:

---
> User: "Hello"

*AI understands that this is a Greeting*

> AI: "Hello :) How can I help you?"
---

In order to understand what the user wants, our AI is trained to recognize different intents.

For each intent the AI gets a list of user messages (we call them expressions) as training data to learn
how users express that intent.
For every intent there will also be a reply that the AI Bot should return, once it recognizes a specific intent.
In the above example that intent would look like this:

---

```
Intent: Greeting
- Training Expressions: "Hello", "Hi", "Hey there!", "Good morning!", ...
- Reply: "Hello :) How can I help you?"
```

---

Most of the intents are specific to the client's business. An airline will have other intents than an eCommerce
platform.

Some intents, however, are used by almost all of our clients. So when a client creates a new AI bot in our software, we
offer them a list of already pretrained intents as part of the bot creation process. They can choose to make use of
these
pretrained intents in their AI Bot, and so save time and effort.

## Challenge

Each item in the JSON contains the following:

- `id`: The unique ID that identifies the intent.
- `name`: The name of that intent.
- `description`: A string describing what the intent is used for.
- `trainingData`: The training data that is used to train the AI. It contains:
    - `expressionCount`: the total number of training expressions for this intent
    - `expressions`: An array with three example expressions for this intent, each with a unique `id` and a `text` field
      with the expression.
- `reply`: The reply that the bot will give when the intent is recognized, containing again a unique `id` and a `text`
  field with the actual reply.

**This app is a page, in which clients can see the pretrained intents and select the ones they want
to use in their AI bot.**


## Minimum Requirements

- This page allows users to get an overview over all the pretrained intents that are available (see intents.json).
- Users can see at least one example expression without any extra clicks.
- Users can select/unselect intents individually or all at once.
- Implemented using `create-react-app`.


## npm install

## npm Start

## dependency
- React 
- Redux toolkit