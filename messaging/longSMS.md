If you send a message that contains more than 160 characters, your message will be split up into multiple parts. The message will be re-assembled before it reaches the destination handset.

You will will be billed for each segment of 160 characters for standard messages and billed for each segment of 70 characters if your message contains any unicode characters such as Emoji's (😀, 😎, etc...).

If a message will be sent as more than 1 segment, the segments are limited to 153 characters for standard messages, and 67 characters for messages with unicode characters.

SMS [callbacks](https://dev.bandwidth.com/ap-docs/apiCallbacks/messagingEvents.html) along with the [responses](https://dev.bandwidth.com/ap-docs/methods/messages/postMessages.html) from sending an SMS include a "segmentCount" field that lets you know the number of segments that the message had.

MMS messages will always be sent as 1 segment.

### Example 1 of 3:

How will a standard message be billed

```
"What is cooler than a unicorn that can shoot lasers? This test message, thats what!"
```

83 characters = 1 segment

### Example 2 of 3:

How will a message with Emoji's be billed :

```
"What is cooler than a unicorn 🦄 that can shoot lasers? This test message, thats what!"
```

84 characters = 2 segments of up to 70 characters each.

### Example 3 of 3:

How will a long message be billed:

```
"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
```

191 characters = 2 segments of up to 160 characters each.
