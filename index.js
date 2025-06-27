// Endpoint URL
const ENDPOINT = 'https://lanciweb.github.io/demo/api/pictures/';

// Axios importing
import axios from 'axios';

// Chalk importing
import chalk from 'chalk';

// Simple log
console.log(chalk.bgBlue('Hello Boolean\n'));

// .env file secret key logging
console.log(chalk.bgRed(`SECRET KEY: ${process.env.SECRET_KEY}\n`));

// Axios fetch from endpoint
axios.get(ENDPOINT)

    // Process response
    .then(response => {

        // Get data from response
        const data = response.data;

        // Log data
        console.log(data);

    })
    // Catch error
    .catch(error => {

        console.error(chalk.bgRed(error));

    });