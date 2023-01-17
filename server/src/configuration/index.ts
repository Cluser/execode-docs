import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const SQLITE_CONFIG: TypeOrmModuleOptions = {
    type: "sqlite",
    database: "database",
    entities: [process.cwd() + "/**/*.entity{.ts,.js}"],
    synchronize: true,
};