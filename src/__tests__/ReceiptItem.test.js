import ReceiptItem from '../ReceiptItem'

const execute = jest.fn(() => '')
const StringFormatter = { execute }

beforeEach(() => {
  execute.mockClear()
})

describe('basic', () => {
  it('should init correctly', () => {
    const good = { price: 10 }
    const quantity = 2
    const receiptItem = new ReceiptItem(good, quantity)
    expect(receiptItem.price).toBe(20)
  })
})

describe('receipt item operations', () => {
  it('should increase quantity', () => {
    const good = { price: 10 }
    const quantity = 2
    const receiptItem = new ReceiptItem(good, quantity)
    receiptItem.increaseQuantity(1)
    expect(receiptItem.quantity).toBe(3)
    expect(receiptItem.price).toBe(30)
  })

  it('should transform to string', () => {
    const name = 'apple'
    const price = '5'
    const quantity = 2
    const good = { name, price }
    const receiptItem = new ReceiptItem(good, quantity)
    receiptItem.StringFormatter = StringFormatter
    receiptItem.toString()

    expect(StringFormatter.execute.mock.calls.length).toBe(3)
    expect(StringFormatter.execute.mock.calls[0][0]).toBe(name)
    expect(StringFormatter.execute.mock.calls[0][1]).toEqual({ length: 10 })
    expect(StringFormatter.execute.mock.calls[1][0]).toBe(`${price}x${quantity}`)
    expect(StringFormatter.execute.mock.calls[1][1]).toEqual({ length: 8, fromStart: true })
    expect(StringFormatter.execute.mock.calls[2][0]).toBe(receiptItem.price)
    expect(StringFormatter.execute.mock.calls[2][1]).toEqual({ length: 7, fromStart: true })
  })
})