import { Pool } from "pg";
import { config } from "../../Commons/Config";

export const pool = new Pool(config.database);


