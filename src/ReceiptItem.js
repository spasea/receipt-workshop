class ReceiptItem {
  constructor (good, quantity) {
    this.good = good
    this.quantity = quantity
  }

  increaseQuantity (number) {
    this.quantity = this.quantity + number
  }

  get price () {
    return this.good.price * this.quantity
  }
}

export default ReceiptItem
