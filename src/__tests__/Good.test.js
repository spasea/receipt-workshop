import Good from '../Good'

describe('basic', () => {
  it('should initialize correctly', () => {
    const id = 1
    const price = 10
    const name = 'apple'
    const apple = new Good(id, price, name)

    expect(apple.id).toBe(id)
    expect(apple.name).toBe(name)
    expect(apple.price).toBe(price)
  })
})