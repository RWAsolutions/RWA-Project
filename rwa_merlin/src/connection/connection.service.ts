import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql';

@Injectable()
export class ConnectionService {
  private connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'Mysql',
      password : 'secret',
      database : 'rwa_merlin'
    });
  }

  public testConnection() {
    this.connection.connect();
 
    this.connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });

    this.connection.end();
  }
}