import bcrypt from 'bcrypt'
import { Encrypter } from '../../data/protocols/encrypter'

export class BcryptAdapter implements Encrypter {
  private readonly rounds: number

  constructor (rounds: number) {
    this.rounds = rounds
  }

  async encrypt (value: string): Promise<string> {
    await bcrypt.hash(value, 12)
    return null
  }
}
