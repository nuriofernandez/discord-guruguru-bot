# Discord GuruGuruBot

## Setup settings

Create a settings file at the `src` folder contaning the following lines:

```json
{
    "discord": {
        "token": "discord-api-bot-token",
    },
    "adapters": {
        "loop": {
            "channels": [
                "channel-id-1",
                "channel-id-2"
            ]
        },
        "censorer": {
            "words": [
                "windows server",
                "windows notepad",
                "skype",
                "moviemaker"
            ],
            "message": "%name% you can't say that here."
        }
    }
}
```