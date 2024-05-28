import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql';

@Injectable()
export class ConnectionService {
  private connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'secret',
      database : 'rwa_merlin'
    });
  }

  public testConnection() {
    this.connection.connect();
 
    this.connection.query('select * from City;', function (error, results) {
      if (error) throw error;
      console.log('The solution is: ', results);
    });

    this.connection.end();
  }
}