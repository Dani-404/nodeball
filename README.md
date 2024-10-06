# NodeBall, remake of Haxball with NodeJS and WebSockets technology

### Installation
Import nodeball_db.sql on your Mysql Server for setup database.

```sh
$ npm install
```

### Setup

#### Main server and HTTP server
```sh
$ npm start
```

#### Region Server
```sh
$ npm run regionServer
```

### URL
Visit [http://127.0.0.1:8091/](http://127.0.0.1:8091/) for test and play. 

### Server Config
```
PORT: 8090,
HTTP_PORT: 8091,
REGION_SERVER_VERSION: "0.01",
REGION_SERVER_KEY: "NodeBall-9a5d8e8a6fd255j8z5",
MYSQL_HOST: "localhost",
MYSQL_USER: "root",
MYSQL_PASSWORD: "",
MYSQL_DATABASE: "nodeball_test",

STATS_COINS_BY_GOAL: 5,
STATS_COINS_BY_ASSISTS: 3,
STATS_COINS_BY_VICTORY: 10,
STATS_COINS_BY_CS: 15,
STATS_XP_BY_GOAL: 15,
STATS_XP_BY_ASSISTS: 7,
STATS_XP_BY_VICTORY: 35,
STATS_XP_BY_CS: 45,
STATS_MIN_ELO_PER_GAME: 50,
STATS_MAX_ELO_PER_GAME: 20
```

### Region Server Config
```
REGION: "EU",
VERSION: "0.01",
API_KEY: "NodeBall-9a5d8e8a6fd255j8z5",
MAIN_SERVER_HOST: "127.0.0.1",
MAIN_SERVER_PORT: 8090,
COUNT_STATS_MIN_PLAYERS: 1,
PORT: 8092,
UPDATE_INTERVAL: 60
```

### Client Config
```
NAME: "NodeBall",
SERVER_HOST: "127.0.0.1",
SERVER_PORT: 8090,
SERVER_UPDATE_INTERVAL: 60
```

### SSL
This project does not support SSL certificates, if you wish to set it up, refer to [this page](https://github.com/websockets/ws#external-https-server).

### Screen Example
![image](https://i.imgur.com/IouXwYo.gif)

### Admin panel 
![image](https://i.imgur.com/DK1sHzU.gif)