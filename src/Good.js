class Good {
  constructor (priceForItem) {
    this.priceForItem = priceForItem
  }

  get price () {
    return this.priceForItem
  }
}

export default Good
