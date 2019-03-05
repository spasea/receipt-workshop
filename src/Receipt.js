class Receipt {
  constructor (products, presenter) {
    this.products = products
    this.presenter = presenter
  }

  addProduct (product) {
    this.products.push(product)
  }

  get totalPrice () {
    return this.products.reduce((acc, product) => product.price + acc, 0)
  }

  get receiptDisplay () {
    const productsList = this.products.map(this.presenter.execute)
    return productsList.join('') + this.totalPrice + '$'
  }
}

export default Receipt
