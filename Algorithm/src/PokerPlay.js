import Card from './PokerCard'

export default class PokerPlay {
    constructor(str) {
        this.cards = this.init(str)
    }
    init(str) {
        const cards = []
        const arr = str.split(' ')
        arr.map((item) => {
            cards.push(new Card(item.substring(0, 1), item.substring(1)))
        })
        return cards
    }
    sortCardsByTypeValue() {
        this.cards.sort((a, b) => {
            return a.lessTypeValue(b)
        })
        // for(let i = 0; i < this.cards.length - 1; i++) {
        //     for(let j = i + 1; j < this.cards.length; j++) {
        //         if(this.cards[i].lessTypeValue(this.cards[j])) {
        //             let temp = this.cards[i]
        //             this.cards[i] = this.cards[j]
        //             this.cards[j] = temp
        //         }
        //     }
        // }
    }
    sortCardsByValueType() {
        this.cards.sort((a, b) => {
            return a.lessValueType(b)
        })
    }
    traverse() {
        this.cards.map((card) => {
            console.log(card.toString())
        })
        console.log('-----')
    }
    cpValue(i, j) {
        return this.cards[i].compareValue(this.cards[j])
    }
    cpType(i, j) {
        return this.cards[i].compareType(this.cards[j])
    }
    cpSameValue(i, j) {
        return this.cpValue(i, j) === 0
    }
    cpSameType(i, j) {
        return this.cpType(i, j) === 0
    }
    result() {
        let result = 0
        this.sortCardsByTypeValue()
        if (this.cpSameType(0, 4)) {
            // 同花
            this.sortCardsByValueType()
            if (this.cpValue(0, 4) === 4) {
                if (this.cards[0].value === 'A') {
                    // 同花大顺
                    result = 1
                } else {
                    // 同花顺
                    result = 2
                }
            } else {
                // 同花
                result = 5
            }
        } else {
            // 非同花顺
            this.sortCardsByValueType()
            if (this.cpSameValue(0, 3) || this.cpSameValue(1, 4)) {
                // 4 张
                result = 3
            } else {
                if (this.cpSameValue(0, 2)) {
                    if (this.cpSameValue(3, 4)) {
                        // 葫芦
                        result = 4
                    } else {
                        // 3张
                        result = 7
                    }
                } else if (this.cpSameValue(1, 3)) {
                    result = 7
                } else if (this.cpSameValue(2, 4)) {
                    if (this.cpSameValue(0, 1)) {
                        result = 4
                    } else {
                        result = 7
                    }
                } else {
                    if (this.cpSameValue(0, 1)) {
                        if(this.cpSameValue(2, 3)){
                            // 两对
                            result = 8
                        }else {
                            if(this.cpSameValue(3, 4)){
                                result = 8
                            }else {
                                // 一对
                                result = 9
                            }
                        }
                    } else {
                        if(this.cpSameValue(1, 2)){
                            if(this.cpSameValue(3, 4)){
                                result = 8
                            } else {
                                result = 9
                            }
                        }else {
                            if(this.cpSameValue(2, 3)){
                                result = 9
                            }else {
                                if(this.cpSameValue(3, 4)){
                                    result = 9
                                } else {
                                    if(this.cpValue(0, 4) === 4) {
                                        // 顺子
                                        result = 6
                                    } else {
                                        result = 10
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return result
    }
}
