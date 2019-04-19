import StringFormatter from '../../Services/StringFormatter'

describe('base', () => {
  it('should return string if no arguments provided', () => {
    expect(StringFormatter.execute()).toBe('...')
  })
})

describe('string operations', () => {
  it('should return string if the length equals to string length', () => {
    const string = 'apple'
    const length = string.length

    expect(StringFormatter.execute(string, length)).toBe(string)
  })

  it('should return cut string if the length is shorter than string length', () => {
    const string = 'apple'
    const length = 3

    expect(StringFormatter.execute(string, length)).toBe('app')
  })

  it('should return string with filament if the length is longer than string length', () => {
    const string = 'apple'
    const length = 7

    expect(StringFormatter.execute(string, length)).toBe('apple..')
  })

  it('should use correct filament', () => {
    const string = 'apple'
    const length = 7

    expect(StringFormatter.execute(string, length, '#')).toBe('apple##')
  })
})