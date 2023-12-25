const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 * Our machine will have 2 modifications: direct and reverse (the type of machine is determined at the moment of creation).
 * The direct machine simply encodes and decodes the string that was transmitted to it, and the reverse machine returns an inverted string after encoding and decoding.
 *
 * Your task is to implement the class VigenereCipheringMachine. constructor of this class accepts true (or nothing) to create direct machine and false to create reverse machine.
 * Each instance of VigenereCipheringMachine must have 2 methods: encrypt and decrypt.
 *
 * encrypt method accepts 2 parameters: message (string to encode) and key (string-keyword).
 *
 * decrypt method accepts 2 parameters: encryptedMessage (string to decode) and key (string-keyword).
 *
 * These parameters for both methods are mandatory. If at least one of them has not been given, an Error with message Incorrect arguments! must be thrown.
 * The text returned by these methods must be uppercase. Machines encrypt and decrypt only latin alphabet (all other symbols remain unchanged).
 *
 * You don't need to validate value sent to constructor and to encrypt and decrypt methods (except throwing an Error on absence of argument for these methods).
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }

  encrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!')
    }

    let ecryptedMessage = ''
    let currentIdx
    let shift
    let encryptedChar
    let skippedChars = 0
    for (let i = 0; i < string.length; i++) {
      if (this.alphabet.includes(string[i].toUpperCase())) {
        currentIdx = this.alphabet.indexOf(string[i].toUpperCase())
        shift = this.alphabet.indexOf(key[(i - skippedChars) % key.length].toUpperCase())
        encryptedChar = this.alphabet[(currentIdx + shift) % this.alphabet.length]
        ecryptedMessage += encryptedChar
      } else {
        ecryptedMessage += string[i]
        skippedChars++
      }
    }
    return ecryptedMessage
  }
  decrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
