## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run all

```bash
chmod +x run.sh 

./run.sh
```

Не понимаю смысл делать 2 разных compose файла и в целом делать Dockerfile для postgres.
Но так было написано в ТЗ, так бы написал 1 docker-compose для всего проекта.

```env
PORT=3000

PUBLIC_EVM_NODE_URL=https://haqq-evm-rpc.publicnode.com
PUBLIC_COSMOS_NODE_URL=https://haqq-mainnet-api.itrocket.net
```
