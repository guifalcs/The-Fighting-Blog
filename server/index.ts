const { PrismaClient } = require('@prisma/client');
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 8081;
const prisma = new PrismaClient();

async function main(){
    await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john@doe.com',
            password: '123456'
        }
    });
    const users = await prisma.user.findMany();
    console.log(users);
}

app.listen(port, async() => {
    console.log(`Server is running on port ${port}`);
    main()
});

