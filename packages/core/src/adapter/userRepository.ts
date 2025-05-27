import { injectable } from "inversify";
import { pool } from "../../db/index";
import { User } from "../domain/user";

@injectable()
export class UserRepository {
  async create(email: string, password: string): Promise<User> {
    const result = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email, password",
      [email, password]
    );
    return result.rows[0];
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 LIMIT 1",
      [email]
    );
    return result.rows[0];
  }

  async findById(id: string): Promise<User | undefined> {
    const result = await pool.query(
      "SELECT * FROM users WHERE id = $1 LIMIT 1",
      [id]
    );
    return result.rows[0];
  }
}
