import Good from '../Good'

describe('basic', () => {
  it('should initialize correctly', () => {
    const price = 10
    const name = 'apple'
    const apple = new Good(price, name)

    expect(apple.name).toBe(name)
    expect(apple.price).toBe(price)
  })
})