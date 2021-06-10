import { createConnection } from 'typeorm';

createConnection().then((connection) => {
  console.log('Connected at database');
  connection.synchronize();
});
