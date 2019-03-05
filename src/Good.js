class Good {
  constructor (priceForItem, name, quantity = 1) {
    this.priceForItem = priceForItem
    this.name = name
    this.quantity = quantity
  }

  get price () {
    return this.priceForItem * this.quantity
  }
}

export default Good
