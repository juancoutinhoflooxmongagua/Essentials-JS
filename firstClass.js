function f1() {}

const f2 = function () {}

const soma = function (a, b) {
  return a + b;
};

const array = [soma, f1, f2];

console.log(array[0](2, 3)); // 5

const obj = {};
obj.falar = function () {
  return 'olá';
};

console.log(obj.falar()); // 'olá'
