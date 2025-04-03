import User from "../models/user.models";

export default class AuthRepository {
  static async findUserByEmail(email: string) {
    return User.findOne({ where: { email } });
  }

  static async createUser(userData: { email: string; password: string }) {
    return User.create(userData);
  }
}
