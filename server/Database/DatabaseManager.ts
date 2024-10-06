import Mysql from 'mysql';
import Config from '../Config/Config';
import Server from '../main';

export default class DatabaseManager {
    connection: null | Mysql.Connection;

    constructor() {
        this.connection = null;
    }

    init(): Promise<string> {
        return new Promise((resolve, reject) => {
            const instance = this;

            this.connection = Mysql.createConnection({
                host: Config.MYSQL_HOST,
                user: Config.MYSQL_USER,
                password: Config.MYSQL_PASSWORD,
                database: Config.MYSQL_DATABASE
            });

            this.connection.connect(function(err) {
                if(err) {
                    reject("Impossible to connect to database " + err.stack);
                    return
                }

                resolve("Connected to database.")
            });

            this.connection.on('error', function(err) {
                if(err.code === 'PROTOCOL_CONNECTION_LOST')
                    instance.reconnect();
                else
                    Server.logger.sendCriticalError("Mysql Error: "+ err.stack);
            });
        })
    }

    reconnect(): void {
        const instance = this;

        this.connection = Mysql.createConnection({
            host: Config.MYSQL_HOST,
            user: Config.MYSQL_USER,
            password: Config.MYSQL_PASSWORD,
            database: Config.MYSQL_DATABASE
        });

        this.connection.connect(function(err) {
            if(err) {
                Server.logger.sendCriticalError("Mysql Error: " + err.stack);
                return
            }

            Server.logger.sendLog("SUCCESS", "Reconnected to database.");
        });

        this.connection.on('error', function(err) {
            if(err.code === 'PROTOCOL_CONNECTION_LOST')
                instance.reconnect();
            else
                Server.logger.sendCriticalError("Mysql Error: " + err.stack);
        });
    }
}