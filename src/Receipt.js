class Receipt {
  constructor (products) {
    this.products = products
  }

  addProduct (product) {
    this.products.push(product)
  }

  get totalPrice () {
    return this.products.reduce((acc, product) => product.price + acc, 0)
  }
}

export default Receipt
