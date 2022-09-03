import { Encrypter } from '../../data/protocols/encrypter'
import brypt from 'bcrypt'

export class BcrypAdapter implements Encrypter {
  private readonly salt: number
  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (value: string): Promise<string> {
    await brypt.hash(value, this.salt)
    return null
  }
}
