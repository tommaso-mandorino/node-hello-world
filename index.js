// Endpoint URL
const ENDPOINT = 'https://lanciweb.github.io/demo/api/pictures/';





// Axios importing
import axios from 'axios';

// Chalk importing
import chalk from 'chalk';





// Get passed sentence
const passedSentence = process.argv[2];

// IF there is no passed sentence
if (passedSentence === undefined) {

    // Log error message in red
    console.log(chalk.bgRed('\nFRASE PASSATA: nessuna.\n'));

}
// ELSE
else {

    // Log passed sentence in blue
    console.log(chalk.bgBlue(`\nFRASE PASSATA: ${passedSentence}\n`));

}





// Get secret key
const secretKey = process.env.SECRET_KEY;

// IF there is no passed secret key
if (secretKey === undefined) {

    // Log error message in red
    console.log(chalk.bgRed('CHIAVE SEGRETA: nessuna.\n'));

}
// ELSE
else {

    // Log secret key in yellow
    console.log(chalk.bgYellow(`CHIAVE SEGRETA: ${secretKey}\n`));

}





// Axios fetch from endpoint
axios.get(ENDPOINT)

    // Process response
    .then(response => {

        // Get data from response
        const data = response.data;

        console.log(chalk.bgGreen('RISULTATO FETCH:\n'));

        // Log data
        console.log(data);

    })
    // Catch error
    .catch(error => {

        // Log error in red
        console.error(chalk.bgRed(error));

    });