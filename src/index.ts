import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { crawl } from './crawl';

createConnection()
  .then(async () => {
    await crawl();
  })
  .catch(error => console.log(error));
