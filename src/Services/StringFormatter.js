class StringFormatter {
  static execute(string = '', options = {}) {
    options = {
      length: 3,
      filler: '.',
      fromStart: false,
      ...options,
    }

    return string.length > options.length
      ? string.slice(0, options.length)
      : string[options.fromStart ? 'padStart' : 'padEnd'](options.length, options.filler)
  }
}

export default StringFormatter
