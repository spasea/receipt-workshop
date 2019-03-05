class GoodsPresenter {
  static execute (product) {
    return `${product.name}..........${product.priceForItem}x${product.quantity}...${product.price}$\n`
  }
}

export default GoodsPresenter
