# **NorEX Converter**

## **v1.0

[Production Ready App](https://norex.chibykes.dev)

Hello 👋.

It's been a while since I wrote codes solely on Vanilla Web Dev so I decided to give it a go. Chose to create a simple currency converter with nothing but Vanilla Javascript, HTML and CSS no frameworks or libraries (not even Bootstrap or JQuery 🥲)

Exchange Rates APIs are quite expensive and do comes with limit, so my motive was clear, I needed mine without paying. Noticing Googles search gives me access to over 140 currency rates but do not have an API for easier access. I decided to scrap the info from their searches.


First compiled a list of Google currencies available for conversion the inserted them into an array now looping through each currency, I wrote a simple Javascript Fetch request that sends out a GET request and google searches between USD (which I decided to use as base Currency) and each currencies I was looping, the rates is gotten from the response using regular expression to extract the data I really need.

Now compiling the final list and merging each currency and its rate to their respective nation name and symbol and also flag icon, I was able to come up with a simple but correct currency converter.

Written using Vanilla Javascript and just one HTML and CSS Files, the Currency converter is able to convert any base Currency to its quote equivalent.


It was a lot tedious due to errors that could have been easily solved and wouldn't take longer time to achieve the mentioned Currency converter if it was written in any framework and a CSS library. But nonetheless I enjoyed creating this and I learnt how important frameworks are while still refreshing my memories with the basis of Web development. 


I do intend to convert the app into a Next Js  App, turn it into a PWA so that it can work offline, create a Nodejs and Mongo backend to store the Currency rates and update price's at any given time.


For now, do check out this simple (may still be clunky 🌝) but correct up to its best capacity CURRENCY CONVERTER.

Do leave your feedbacks.
Here is a link to the project.

Project Link:
https://cc.chibykes.dev

Github Repo:
https://github.com/Chibykes/currency-converter 



## Update v1.1 (Production Ready Build)

- Renamed it NorEx
- Made it a Next Js Project
- Converted it to a PWA
- Caches update offline

- Vercel timeout when I try to make serverless functions to MongoDB (Reason I would be missing heroku) but I found a workaround.

Check it out

Project Link:
https://norex.chibykes.dev

Github Repo:
https://github.com/Chibykes/norex

🙂



Your Dev
Chibykes 😎

💻 👨‍💻.