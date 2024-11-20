import { router } from "./routes";

const { PrismaClient } = require('@prisma/client');
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 8081;
const prisma = new PrismaClient();
app.use(express.json());
app.use('/api',router)

async function main(){
    
}

app.listen(port, async() => {
    console.log(`Server is running on port ${port}`);
    main()
});

