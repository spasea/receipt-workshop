import StringFormatter from './StringFormatter'

class GoodPresenter {
  static execute (product) {
    const name = StringFormatter.execute(product.name, 10)
    const priceForItem = StringFormatter.execute(product.priceForItem, 5, true)
    const quantity = StringFormatter.execute(product.quantity, 3)
    const price = StringFormatter.execute(product.price, 4, true)

    return `${name}..........${priceForItem}x${quantity}...${price}$\n`
  }
}

export default GoodPresenter
