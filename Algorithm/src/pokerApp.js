import PokerPlay from './PokerPlay'

const str = process.argv.slice(2)[0]

const play = new PokerPlay(str)

// play.traverse()

// play.sortCardsByTypeValue()

// play.sortCardsByValueType()
//
// play.traverse()

console.log(play.result())
