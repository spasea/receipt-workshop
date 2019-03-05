class Receipt {
  constructor (products) {
    this.products = products
    this.isClosed = false
  }

  addProduct (product) {
    if (this.isClosed) {
      console.log('Receipt is already closed')
      return
    }

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
    if (!this.isClosed) {
      const error = 'You must close receipt first'
      console.log(error)
      return error
    }

    return this.products.reduce((acc, product) => product.price + acc, 0)
  }

  get totalPriceDisplay () {
    if (!this.isClosed) {
      const error = 'You must close receipt first'
      console.log(error)
      return error
    }

    return this.formatter.execute('Total: ' + this.totalPrice + '$', 37, true, ' ')
  }

  closeReceipt () {
    this.date = new Date()
    this.isClosed = true
  }
}

export default Receipt
