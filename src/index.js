import Good from './Good'
import Receipt from './Receipt'
import ReceiptItem from './ReceiptItem'

const apple = new Good(1, 10, 'apple')
const potato = new Good(2, 12, 'potato')

const applePosition = new ReceiptItem(apple, 1)
const potatoPosition = new ReceiptItem(potato, 1)

const receipt = new Receipt([
  applePosition,
  potatoPosition
])

console.log(receipt.totalPrice)

receipt.addPosition(applePosition)
receipt.addPosition(potatoPosition)

console.log(receipt.totalPrice)