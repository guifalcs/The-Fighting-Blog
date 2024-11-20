//Imports
import { router } from "./routes";
import  express from "express";
import { PrismaClient } from "@prisma/client";

//Constantes
const app = express();
const port = process.env.SERVER_PORT || 8081;
const prisma = new PrismaClient();

//Configuração do app
app.use(express.json());
app.use('/api',router)

//Função principal
async function main(){
    
}

//Inicialização do servidor
app.listen(port, async() => {
    console.log(`Server is running on port ${port}`);
    main()
});

