## Development

You need to link the netliferesearch/dibk-wizard-framework to run this project locally. Head over to you clone of that repo in the terminal and type `npm link`.

Head back to this repo in you terminal and type `npm link dibk-wizard-framework`.

Then run `npm start` to run the development server.

## Deploy
The project is hosted on [`Firebase`](https://console.firebase.google.com/u/0/project/dibk-example-app/overview) :fire:. You need to be invited to it to be able to deploy.

To deploy you need the firebase tools.
Install it with the following command:

`yarn global add firebase-tools`

Follow the instructions for:
`firebase login`

Then you are ready to type `yarn deploy` :sparkles:
