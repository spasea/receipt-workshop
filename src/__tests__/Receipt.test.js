import Receipt from '../Receipt'

describe('basic', () => {
  it('should init', () => {
    const goods = [
      {
        price: 5
      },
      {
        price: 15
      },
    ]

    const receipt = new Receipt(goods)
    expect(receipt.totalPrice).toBe(20)
    expect(receipt.goods.length).toBe(2)
  })
})