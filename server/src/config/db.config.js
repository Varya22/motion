module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PORT: '8080',
    PASSWORD: "1234",
    DB: "fit",
    dialect: "postgres",
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
    };