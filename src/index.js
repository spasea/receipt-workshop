import Good from './Good'
import Receipt from './Receipt'

const apple = new Good(2.4)
const bread = new Good(1.5)

const receipt = new Receipt([
  apple,
  bread
])

console.log(receipt.totalPrice)

const pie = new Good(3)

receipt.addProduct(pie)

console.log(receipt.totalPrice)