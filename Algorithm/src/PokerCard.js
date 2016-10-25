export default class PokerCard {
    constructor(type, value) {
        this.type = type
        this.value = value
        this.TYPES = {
            'S': 3,
            'H': 2,
            'D': 1,
            'C': 0
        }
        this.VALUES = {
            '2': 0,
            '3': 1,
            '4': 2,
            '5': 3,
            '6': 4,
            '7': 5,
            '8': 6,
            '9': 7,
            '10': 8,
            'J': 9,
            'Q': 10,
            'K': 11,
            'A': 12
        }
        this.DESC = ['同花大顺', '同花顺', '四条', '葫芦', '同花', '顺子', '三条', '两对', '一对', '高牌']
    }
    toString() {
        return `${this.type}-->${this.value}`
    }
    lessTypeValue(card) {
        const ct = this.compareType(card)
        const cv = this.compareValue(card)
        if(ct < 0 || ct === 0 && cv < 0) return 1
        else if(ct > 0) return -1
        else if(ct === 0 && cv === 0) return 0
    }
    lessValueType(card) {
        const cv = this.compareValue(card)
        const ct = this.compareType(card)
        if(cv < 0 || cv ===0 && ct < 0) return 1
        else if(cv > 0) return -1
        else if(ct === 0 && cv === 0) return 0
    }
    compareType(card) {
        return this.TYPES[this.type] - this.TYPES[card.type]
    }
    compareValue(card) {
        return this.VALUES[this.value] - this.VALUES[card.value]
    }
}
