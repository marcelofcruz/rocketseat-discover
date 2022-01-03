const Database = require('./config')

const initDB = {
    async init() {

        const db = await Database()

        // criar tabela profile
        await db.exec(`
            CREATE TABLE profile (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                avatar TEXT,
                monthly_budget INT,
                days_per_week INT,
                hours_per_day INT,
                vacation_per_year INT,
                value_hour INT
            )
        `)

        // criar tabela jobs
        await db.exec(`
            CREATE TABLE jobs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                daily_hours INT,
                total_hours INT,
                created_at DATETIME
            )
        `)

        // Inserir dados na tabela profile
        await db.run(`
            INSERT INTO profile (
                name,
                avatar,
                monthly_budget,
                days_per_week,
                hours_per_day,
                vacation_per_year,
                value_hour
            ) VALUES (
                "Marcelo Cruz",
                "https://avatars.githubusercontent.com/u/84430175?v=4",
                5000,
                5,
                8,
                4,
                75
            );
        `)

        await db.close()
    }
}

initDB.init()
