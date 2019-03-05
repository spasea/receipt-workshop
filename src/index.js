import Good from './Good'
import Receipt from './Receipt'
import GoodsPresenter from './GoodsPresenter'

const apple = new Good(2.4, 'apple')
const bread = new Good(1.5, 'bread')

const receipt = new Receipt([
  apple,
  bread
], GoodsPresenter)

const pie = new Good(3, 'pie')

receipt.addProduct(pie)

const secondApple = new Good(2.4, 'apple')
receipt.addProduct(secondApple)

console.log(receipt.receiptDisplay)