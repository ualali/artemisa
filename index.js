import csvparse from 'csv-parse';
import fs from 'fs';

import logger from './logger.js';

const habitablePlanets = [];
fs.createReadStream('dataset/kepler.csv')
  .pipe(csvparse({ comment: '#', columns: true }))
  .on('data', (data) => {
    if (isHabitablePlanet(data)) habitablePlanets.push(data);
  })
  .on('error', (err) => {
    logger.error(err, 'Failed to read data.');
  })
  .on('end', () => {
    logger.info(`Found ${habitablePlanets.length} habitable planets!`);
  });

/**
 * Filters out not habitable planets.
 *
 * @description
 * Filters out not habitable planets by discarding those records whose
 * "koi_disposition" column value is not CONFIRMED.
 *
 * @param {*} planet A record with information about a planet.
 * @return {boolean} True if planet is habitable, and false if not.
 */
function isHabitablePlanet(planet) {
  return (
    isPlanet(planet) &&
    hasEnoughSolarInsolation(planet) &&
    hasEnoughRadius(planet)
  );
}

/**
 * Checks if a planet is actually a planet or not.
 *
 * @description
 * Data is provided with a column whose cells can store this values: CONFIRMED
 * (is a planet), FALSE_POSITIVE, NOT DISPOSITIONED, and CANDIDATE.
 * References:
 *  - https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=cumulative
 *  - https://exoplanetarchive.ipac.caltech.edu/docs/API_kepcandidate_columns.html
 *
 * @param {*} planet A record with information about a planet.
 * @return {boolean} True if planet is CONFIRMED, otherwise returns false.
 */
function isPlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED';
}

/**
 * Checks if a planet has the right Earth flux to be habitable.
 *
 * @description
 * Scientific research has determined that a planet is habitable if the stellar radiation
 * received from space is between 0.36 - 1.11 Earth flux.
 * References:
 *  - https://exoplanetarchive.ipac.caltech.edu/docs/poet_calculations.html
 *  - https://www.centauri-dreams.org/2015/01/30/a-review-of-the-best-habitable-planet-candidates/
 *
 * @param {*} planet
 * @return {boolean}
 * True if planet is in the range of right solar insolation flux, otherwise false.
 */
function hasEnoughSolarInsolation(planet) {
  return planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11;
}

/**
 * Checks if a planet has the right radius to be habitable.
 *
 * @description
 * Scientific research has determined that a planet is habitable if the radius of the
 * planet is no more than 1.6 times that of the Earth.
 * References:
 *  - https://www.centauri-dreams.org/2015/01/30/a-review-of-the-best-habitable-planet-candidates/
 *
 * @param {*} planet
 * @return {boolean} True if planet has enough radius, otherwise false.
 */
function hasEnoughRadius(planet) {
  return planet['koi_prad'] < 1.6;
}
