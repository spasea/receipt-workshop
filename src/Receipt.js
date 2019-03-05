class Receipt {
  constructor (products) {
    this.products = products
  }

  addProduct (product) {
    this.products.push(product)
  }

  addGoodsPresenter (presenter) {
    this.presenter = presenter
  }

  addStringFormatter (formatter) {
    this.formatter = formatter
  }

  get totalPrice () {
    return this.products.reduce((acc, product) => product.price + acc, 0)
  }

  get totalPriceDisplay () {
    return this.formatter.execute('Total: ' + this.totalPrice + '$', 37, true, ' ')
  }
}

export default Receipt
