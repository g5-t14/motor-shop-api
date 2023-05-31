import { DataSource, DataSourceOptions } from "typeorm"
import path from "node:path"
import "dotenv/config"


const DataSourceConfig = (): DataSourceOptions => {

    const entitiesPath: string = path.join(__dirname, "entities/**.{js,ts}")
    const migrationsPath: string = path.join(__dirname, "migrations/**.{js,ts}")

    const dbUrl: string | undefined = process.env.DATABASE_URL

    if(!dbUrl){
        throw new Error("Env var DATABASE_URL does not exists")
    }

    const nodeEnv: string | undefined = process.env.NODE_ENV

    if(nodeEnv === "test"){

        return {
            type: "sqlite",
            database: ":memory",
            synchronize: true,
            entities: [entitiesPath]
        }

    }

    if(nodeEnv === "production"){

        return {
            type: "postgres",
            url: dbUrl,
            entities: [entitiesPath],
            migrations: [migrationsPath]
        }

    }

    return {
        type: "postgres",
        url: dbUrl,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    }
}

const AppDataSource: DataSource = new DataSource(DataSourceConfig())

export { AppDataSource }