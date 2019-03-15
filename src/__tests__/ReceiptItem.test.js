import ReceiptItem from '../ReceiptItem'

describe('basic', () => {
  it('should init correctly', () => {
    const good = { price: 10 }
    const quantity = 2
    const receiptItem = new ReceiptItem(good, quantity)
    expect(receiptItem.price).toBe(20)
  })
})

describe('increasing quantity', () => {
  it('should increase quantity', () => {
    const good = { price: 10 }
    const quantity = 2
    const receiptItem = new ReceiptItem(good, quantity)
    receiptItem.increaseQuantity(1)
    expect(receiptItem.quantity).toBe(3)
    expect(receiptItem.price).toBe(30)
  })
})