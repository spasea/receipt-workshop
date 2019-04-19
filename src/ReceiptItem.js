class ReceiptItem {
  _StringFormatter = null

  constructor (good, quantity) {
    this.good = good
    this.quantity = quantity
  }

  increaseQuantity (number) {
    this.quantity = this.quantity + number
  }

  set StringFormatter (stringFormatter) {
    this._StringFormatter = stringFormatter
  }

  get price () {
    return this.good.price * this.quantity
  }

  toString () {
    const title = this._StringFormatter.execute(this.good.name, { length: 10 })
    const priceQuantity = this._StringFormatter.execute(`${this.good.price}x${this.quantity}`, { length: 8, fromStart: true })
    const total = this._StringFormatter.execute(this.price, { length: 7, fromStart: true })

    return `${title}......${priceQuantity}....${total}`
  }
}

export default ReceiptItem
