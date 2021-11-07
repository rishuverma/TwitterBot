# TwitterBot

This is a twitter bot which finds tweet with hashtag **#codefor30days** or **#100daysofcode** and retweets them using Twitter APIs. Bot twitter account - [@codefor30days](https://twitter.com/codefor30days). My twitter account [@\_rishuverma](https://twitter.com/_rishuverma).
Twitter package is used to configure the app, source code of which can be found [here](https://github.com/desmondmorris/node-twitter).

## How to get Re-tweet

Mention your day streak some examples of it:

- **Day 21**
- **Day - 1/30**
- **#day5**
- **D16**

Hashtag your tweet with **#codefor30days** or **#100daysofcode**. Refrain from having too many hashtags and have decent length tweet (check spamFilter file ;) ).

## Pre-requisite

Have a Twitter account(avoid using your main account), setup developer twitter profile. While setting up project give read and write permission, note down API keys which will be used in later on.

## Setup

- Clone the repository
- Use code `npm install` to install all the required packages.
- Maintain a **.env** file copy the format from **envFormat** file present in the repo and enter the Twitter API details that are obtained after the prerequisite step.
- Use `npm run start:dev` to start the development server.

## Hosting

The App is hosted on Heroku.

## Copyrights

No Copyrights. Feel free to use and contribute.
