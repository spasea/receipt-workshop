import Good from './Good'
import Receipt from './Receipt'

const apple = new Good(1, 10, 'apple')
const potato = new Good(2, 12, 'potato')

const receipt = new Receipt([
  apple,
  potato
])

console.log(receipt.totalPrice)