const { Hamburger } = require('../index');

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

test('Method works fine', () => {
    expect(hamburger.calculateCalories()).toEqual(45),
    expect(hamburger.calculatePrice()).toEqual(80)
});

const newHamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
newHamburger.addTopping(Hamburger.TOPPING_MAYO);
newHamburger.addTopping(Hamburger.TOPPING_SPICE);

test('Recalculate is works', () => {
    expect(newHamburger.calculatePrice()).toEqual(95),
    expect(newHamburger.getSize() === Hamburger.SIZE_LARGE).toEqual(false)
})

newHamburger.removeTopping(Hamburger.TOPPING_SPICE);

test('Remove something', () => {
    expect(newHamburger.getToppings().length).toEqual(1);
})