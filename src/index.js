import Good from './Good'
import Receipt from './Receipt'
import GoodPresenter from './GoodPresenter'
import StringFormatter from './StringFormatter'

const apple = new Good(2.4, 'apple')
const bread = new Good(1.5, 'bread')

const productsList = new Receipt([
  apple,
  bread
])

productsList.addGoodsPresenter(GoodPresenter)
productsList.addStringFormatter(StringFormatter)

const pie = new Good(3, 'pie')

productsList.addProduct(pie)

const secondApple = new Good(2.4, 'apple')
productsList.addProduct(secondApple)

const productsDisplay = productsList.products.map(GoodPresenter.execute)
const receipt = productsDisplay.join('') + '\n' + productsList.totalPriceDisplay


console.log(receipt)