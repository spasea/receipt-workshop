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
    expect(receipt.receiptItems.length).toBe(2)
  })

  it('should not change list of receiptItems if the array changed', () => {
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
    expect(receipt.receiptItems.length).toBe(2)

    goods.push(12)
    expect(receipt.totalPrice).toBe(20)
    expect(receipt.receiptItems.length).toBe(2)
  })
})

describe('adding receiptItems', () => {
  let goods = [
    {
      good: {
        id: 1
      },
      price: 12,
    },
    {
      good: {
        id: 2
      },
      price: 10,
    },
  ]

  it('should add good to the receipt', () => {
    const addingGood = {
      good: {
        id: 3
      },
      price: 10,
    }

    const receipt = new Receipt(goods)
    expect(receipt.receiptItems.length).toBe(2)
    receipt.addPosition(addingGood)
    expect(receipt.receiptItems.length).toBe(3)
  })

  it('should increase quantity if the good exists', () => {
    const addingGood = {
      good: {
        id: 3
      },
      increaseQuantity: jest.fn(() => {}),
      price: 10,
    }

    const receipt = new Receipt(goods)
    expect(receipt.receiptItems.length).toBe(2)
    receipt.addPosition(addingGood)
    receipt.addPosition(addingGood)
    expect(receipt.receiptItems.length).toBe(3)
    expect(addingGood.increaseQuantity.mock.calls.length).toBe(1)
  })
})