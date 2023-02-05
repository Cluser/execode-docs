import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const SQLITE_CONFIG: TypeOrmModuleOptions = {
    type: "sqlite",
    database: "database",
    autoLoadEntities: true,
    synchronize: true,
};