class Good {
  constructor (priceForItem, name, quantity = 1) {
    this.priceForItem = priceForItem
    this.name = name
    this.quantity = quantity
    this.id = Math.random()
  }

  get price () {
    return this.priceForItem * this.quantity
  }

  addQuantity (amount) {
    this.quantity += amount
  }
}

export default Good
