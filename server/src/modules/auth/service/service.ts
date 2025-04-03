import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AuthRepository from "../repository/repository";
import User from "../../auth/models/user.models";

export default class AuthService {
  static async register(userData: { email: string; password: string }) {
    const existingUser = await AuthRepository.findUserByEmail(userData.email);
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return AuthRepository.createUser({
      email: userData.email,
      password: hashedPassword,
    });
  }

  static async login(credentials: { email: string; password: string }) {
    const user = await AuthRepository.findUserByEmail(credentials.email);
    if (!user) throw new Error("Invalid credentials");

    const validPassword = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!validPassword) throw new Error("Invalid credentials");

    return this.generateJwt(user);
  }

  private static generateJwt(user: User) {
    return jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );
  }
}
