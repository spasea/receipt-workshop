class StringFormatter {
  static execute (string, length, isInsertBefore = false, filling = '.') {
    const parsedString = `${string}`

    if (parsedString.length >= length) {
      return parsedString.slice(0, length)
    }

    const filament = Array(length - parsedString.length).fill(filling).join('')

    return isInsertBefore
      ? filament + parsedString
      : parsedString + filament
  }
}

export default StringFormatter
