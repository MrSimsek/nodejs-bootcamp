function createCar(marka, model, manual, yakit, motorHacmi, fiyat) {
  return {
    marka: marka,
    model: model,
    manual: manual,
    yakit: yakit,
    motorHacmi: motorHacmi,
    fiyat: fiyat
  };
}

const cars = [];

const car1 = createCar("AUDI", "A3", false, "DIESEL", 1.6, 200000);
const car2 = createCar("Tesla", "Model S", false, "ELECTRIC", 1.8, 50000);
const car3 = createCar("Rolls Royce", "Phantom", true, "DIESEL", 1.7, 900000);

cars.push(car1);
cars.push(car2);
cars.push(car3);

const automaticCars = cars.filter(item => item.manual === false);

// filter implementation
var automaticCars = [];
for (var i = 0; i < cars.length; i++) {
  if (cars[i].manual === false) {
    automaticCars.push(cars[i]);
  }
}

for (var i = 0; i < cars.length; i++) {
  console.log(i);
  console.log(cars[i]);
  console.log(cars.length);
}

const totalCarsPrice = cars.reduce((sum, car) => {
  return sum + car.fiyat;
}, 0);
console.log(totalCarsPrice);

var sum = 0;
for (var i = 0; i < cars.length; i++) {
  sum += cars[i].fiyat;
}
console.log(sum);
