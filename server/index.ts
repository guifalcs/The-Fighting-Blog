const { PrismaClient } = require('@prisma/client');
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 8081;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

