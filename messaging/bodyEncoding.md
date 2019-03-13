International characters: Currently we support ASCII + UCS2 characters as well as UTF8.

For encoding, we use GSM-7 unless the message has special characters or emojis. If it has those, we use UCS-2.

GSM-7 can have 160 bytes, with characters represented as 1 byte each (so 160 characters). GSM-7 only supports normal characters.

UCS-2 can have 140 bytes, with characters represented as 2 bytes each (so 70 characters). UCS-2 supports special characters and emojis.
