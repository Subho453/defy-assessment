# Kryptomania

This repository is build using ReactJs and socket.io.

## Manual Installation

If you would still prefer to do the installation manually, follow these steps:

Clone the repo:

```bash
git clone https://github.com/Subho453/defy-assessment.git defy
cd defy
```

Install the dependencies:

```bash
npm install
```

## Commands

Running app:

```bash
npm start
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
REACT_APP_SOCKET_ENDPOINT=<Socket-Endpoint>

```

## Project Structure

```
src\
 |--app\
     |--components\    # Components used
         |-- ListCoins.js
     |--containers\    # Main Pages
         |-- Home\
              |-- index.js
              |-- index.scss
     |--network\       # Network connections or API
         |-- socket.js
     |--scss\          # Common Styling
 |--test\
     |-- Home.test.js
```

## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

To modify the ESLint configuration, update the `.eslintrc.js` file.
