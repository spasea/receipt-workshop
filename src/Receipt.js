class Receipt {
  constructor (products) {
    this.products = products
  }

  addProduct (product) {
    this.products.push(product)

    this.optimizeProducts()
  }

  optimizeProducts () {
    const optimizedList = this.products.reduce((acc, product) => {
      if (!acc.hasOwnProperty(product.name)) {
        acc[product.name] = product
        return acc
      }

      acc[product.name].addQuantity(product.quantity)
      return acc
    }, {})

    this.products = Object.values(optimizedList)
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
