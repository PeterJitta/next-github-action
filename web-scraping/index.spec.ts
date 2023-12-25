import { test, chromium } from '@playwright/test';
import * as path from 'path';
const csvWriter = require('csv-writer');

type Country = {
    name: string;
    countryCode: string;
    capital: string;
    phoneIndicator: number;
};

const countries: Country[] = [
    { name: 'Cameroon', capital: 'Yaounde', countryCode: 'CM', phoneIndicator: 237 },
    { name: 'France', capital: 'Paris', countryCode: 'FR', phoneIndicator: 33 },
    { name: 'United States', capital: 'Washington, D.C.', countryCode: 'US', phoneIndicator: 1 },
    { name: 'India', capital: 'New Delhi', countryCode: 'IN', phoneIndicator: 91 },
    { name: 'Brazil', capital: 'Brasília', countryCode: 'BR', phoneIndicator: 55 },
    { name: 'Japan', capital: 'Tokyo', countryCode: 'JP', phoneIndicator: 81 },
    { name: 'Australia', capital: 'Canberra', countryCode: 'AUS', phoneIndicator: 61 },
    { name: 'Nigeria', capital: 'Abuja', countryCode: 'NG', phoneIndicator: 234 },
    { name: 'Germany', capital: 'Berlin', countryCode: 'DE', phoneIndicator: 49 },
];

test('scraping data', async () => {
    // Create a new page inside context.
    const browser = await chromium.launch();
    const browserContext = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' +
            ' AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    });
    const page = await browserContext.newPage()
    await page.goto('https://quotes.toscrape.com/');
    // DO SOMETHINGS
    // 

    // const writer = csvWriter.createObjectCsvWriter({
    //     // TODO: make it rename on .data directory
    //     // path: path.resolve(__dirname, 'countries.csv'),
    //     header: [
    //         { id: 'name', title: 'Name' },
    //         { id: 'countryCode', title: 'Country Code' },
    //         { id: 'capital', title: 'Capital' },
    //         { id: 'phoneIndicator', title: 'International Direct Dialling' },
    //     ],
    // });

    // writer.writeRecords(countries).then(() => {
    //     console.log('Done!');
    // });

    await browser.close();
});