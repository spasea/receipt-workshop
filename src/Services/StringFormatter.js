class StringFormatter {
  static execute(string = '', length = 3, filler = '.') {
    return string.length > length
      ? string.slice(0, length)
      : string.padEnd(length, filler)
  }
}

export default StringFormatter
