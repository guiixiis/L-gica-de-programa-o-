class CalculadoraIMC {
  constructor(peso, altura) {
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / (this.altura ** 2);
  }

  classificarIMC() {
    const imc = this.calcularIMC();

    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 25) {
      return 'Peso normal';
    } else if (imc < 30) {
      return 'Sobrepeso';
    } else {
      return 'Obesidade';
    }
  }
}

// Instanciando um objeto da classe CalculadoraIMC
const calculadora = new CalculadoraIMC (70, 1.75);

// Calculando o IMC
const imc = calculadora.calcularIMC();
console.log('O IMC é:', imc);

// Classificando o IMC
const classificacao = calculadora.classificarIMC();
console.log('Classificação:', classificacao);