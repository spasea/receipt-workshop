class Receipt {
  constructor (goods) {
    this.goods = goods
  }

  get totalPrice () {
    return this.goods.reduce((acc, good) => acc + good.price, 0)
  }
}

export default Receipt
