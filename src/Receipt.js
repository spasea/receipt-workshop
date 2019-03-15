class Receipt {
  constructor (receiptItems) {
    this.receiptItems = [...receiptItems]
  }

  addPosition (receiptItem) {
    const satisfyingGood = this.receiptItems.find(item => item.good.id === receiptItem.good.id)

    if (satisfyingGood) {
      satisfyingGood.increaseQuantity(receiptItem.quantity)
      return
    }

    this.receiptItems = [
      ...this.receiptItems,
      receiptItem
    ]
  }

  get totalPrice () {
    return this.receiptItems.reduce((acc, good) => acc + good.price, 0)
  }
}

export default Receipt
