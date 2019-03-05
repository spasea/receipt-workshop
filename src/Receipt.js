class Receipt {
  constructor (products) {
    this.products = products
  }

  get receiptDisplay () {
    return this.products.reduce((acc, product) => product.price + acc, 0)
  }
}

export default Receipt
