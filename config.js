import dotenv from 'dotenv';
dotenv.config();

const config = {
    CADENA: process.env.DB_CONECT,
    PUERTO:  process.env.PORT,
    PUERTODB:  process.env.DB_PORT,
    SERVIDOR:  process.env.DB_SERVER,
    BASEDATOS: process.env.DB_DB,
    USUARIO: process.env.DB_USER,
    CLAVE: process.env.DB_PWD,
}

export default config;