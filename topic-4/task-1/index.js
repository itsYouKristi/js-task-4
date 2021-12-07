function Coin(token) {
    if(!token in tokens){
        throw new Error('Токен не обнаружен')
    }
    this.name = token;
    this.price = tokens[token].price.slice(0, -1);
    this.priceChange24h = tokens[token].priceChange24h.slice(0, -1)
}

Coin.prototype.maxValue = function(countDays){
    let finalPrice = this.price
    for (let i = 0; i < countDays; i++){
        finalPrice *= (1 + (this.priceChange24h / 100))
    }
    return finalPrice
}

Coin.prototype.minValue = function(countDays){
    let finalPrice = this.price
    for (let i = 0; i < countDays; i++){
        finalPrice *= (1 - (this.priceChange24h / 100))
    }
    return finalPrice
}

Coin.prototype.middleValue = function (countDays){
    let finalPrice = this.price
    for (let i = 0; i < countDays/2; i++){
        finalPrice *= (1 - (this.priceChange24h / 100))
    }
    for (let i = 0; i < countDays/2; i++){
        finalPrice *= (1 + (this.priceChange24h / 100))
    }
    return finalPrice
}

Coin.prototype.averageProfit = function (countDays){
    return (this.middleValue(countDays)+this.maxValue(countDays)+this.minValue(countDays))/3
}

/**
 *
 * @param {*} months массив месяцев, формат {month, year}
 * @return название токена
 */
function tokenChoice(months) { }
function tokenChoice(months){
    for(let month of months){
        let chekDate = new Date(month.year, month.month)
        if(chekDate == 'Invalid Date'){ //вебшторм светит нестрогое сравнение, строгое не работает, это можно пофиксить или так нормально?
            throw new Error('Ошибка в массиве месяцев')
        }
    }
    const startDate = new Date(months[0].year, months[0].month, 1)
    const finishDate = new Date(months[months.length-1].year, months[months.length-1].month+1, 0)
    let daysCount = 1+ (finishDate - startDate)/86400000
    const coins = Object.keys(tokens).map(token => new Coin(token));

    let bestCoin
    let maxValue

    for(let coin of coins){
        if(!bestCoin){
            bestCoin = coin.name
            maxValue = coin.averageProfit(daysCount)
        }
        else if(coin.averageProfit(daysCount) > maxValue){
            maxValue = coin.averageProfit(daysCount)
            bestCoin = coin.name
        }
    }
    return bestCoin
}


module.exports.tokenChoice = tokenChoice;