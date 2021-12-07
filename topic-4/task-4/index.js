/**
 * С помощью свойства __proto__ задайте прототипы так,
 *  чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. 
 * Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
 */

function getHead() {
    let head = {
        glasses: 1
    };
    return head;
}
function getTable() {
    let table = {
        pen: 3,
        __proto__: getHead()
    };

    return table;
}
function getBed() {
    let bed = {
        sheet: 1,
        pillow: 2,
        __proto__: getTable()
    };

    return bed;
}
function getPockets() {
    let pockets = {
        money: 2000,
        __proto__: getBed()
    };


    return pockets;
}
module.exports.getHead = getHead;
module.exports.getTable = getTable;
module.exports.getBed = getBed;
module.exports.getPockets = getPockets;