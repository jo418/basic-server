
See
https://cloud.google.com/nodejs/docs/reference/google-auth-library/latest

Change you directory and then to install, type
```bash
cd basic-server
npm install
```

This server does not work without envuronment variables.
Environment variables can be defined in various ways.
In root folder into .env file, or into the file ../config/env
For instance, when they have been defined in config ./foleder then type
```bash
source config/.env
```

To start, type
```bash
npm start
```
or
```bash
node server.js
```
