let calculator = {
  a: 0,
  b: 0,
  read(_a,_b){
    this.a = _a;
    this.b = _b;
  },
  sum(){
    return this.a + this.b;
  },
  mul(){
  return this.a * this.b;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
