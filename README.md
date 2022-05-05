# JiaBar-Chat-App-Server

## Skills / Library
- Nodejs 
- GraphQL / GrqphQL-ws / Apollo-Server
- MySQL / Prisma

## Steps：

1. Clone the project

2. Install package
```bash
yarn
# or `npm install`
```

3. Create .env in the folder and edit it:
 ```bash
DATABASE_URL="(Your_db_url)"
JWT_SECRET="(Your_secret)"
```

4. Define db model
 ```bash
npx prisma db push
```

5. Started
 ```bash
nodemon server.js
```
