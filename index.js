import csvparse from 'csv-parse';
import fs from 'fs';

import logger from './logger.js';

const rawData = [];
fs.createReadStream('dataset/kepler.csv')
  .pipe(csvparse({ comment: '#', columns: true }))
  .on('data', (data) => {
    rawData.push(data);
  })
  .on('error', (err) => {
    logger.error(err, 'Failed to read data.');
  })
  .on('end', () => {
    logger.info(rawData, 'Done!');
  });
