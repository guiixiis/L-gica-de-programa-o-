const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class FiguraGeometrica {
  // Fórmulas originais
  static calcularAreaCirculo(raio) {
    return Math.PI * raio * raio;
  }

  static calcularAreaQuadrado(lado) {
    return lado * lado;
  }

  static calcularAreaRetangulo(largura, altura) {
    return largura * altura;
  }

  // Novas fórmulas da lousa
  static calcularVolumeEsfera(raio) {
    return (4 / 3) * Math.PI * Math.pow(raio, 3);
  }

  static calcularAreaEsfera(raio) {
    return 4 * Math.PI * Math.pow(raio, 2);
  }
}

function exibirMenu() {
  console.log("\n--- MENU DE CÁLCULOS ---");
  console.log("1 - Área do Círculo");
  console.log("2 - Área do Quadrado");
  console.log("3 - Área do Retângulo");
  console.log("4 - Volume da Esfera");
  console.log("5 - Área da Esfera");
  console.log("0 - Sair");
  
  rl.question("\nEscolha uma opção: ", (opcao) => {
    if (opcao === '0') {
      console.log("Saindo...");
      rl.close();
      return;
    }

    switch (opcao) {
      case '1':
        rl.question("Digite o raio: ", (r) => {
          console.log(`Resultado: ${FiguraGeometrica.calcularAreaCirculo(parseFloat(r)).toFixed(2)}`);
          exibirMenu();
        });
        break;

      case '2':
        rl.question("Digite o lado: ", (l) => {
          console.log(`Resultado: ${FiguraGeometrica.calcularAreaQuadrado(parseFloat(l)).toFixed(2)}`);
          exibirMenu();
        });
        break;

      case '3':
        rl.question("Digite a largura: ", (larg) => {
          rl.question("Digite a altura: ", (alt) => {
            console.log(`Resultado: ${FiguraGeometrica.calcularAreaRetangulo(parseFloat(larg), parseFloat(alt)).toFixed(2)}`);
            exibirMenu();
          });
        });
        break;

      case '4':
        rl.question("Digite o raio da esfera (r): ", (r) => {
          console.log(`Volume da Esfera: ${FiguraGeometrica.calcularVolumeEsfera(parseFloat(r)).toFixed(2)}`);
          exibirMenu();
        });
        break;

      case '5':0
        rl.question("Digite o raio da esfera (r): ", (r) => {
          console.log(`Área da Esfera: ${FiguraGeometrica.calcularAreaEsfera(parseFloat(r)).toFixed(2)}`);
          exibirMenu();
        });
        break;

      default:
        console.log("Opção inválida!");
        exibirMenu();
        break;
    }
  });
}

// Inicia o programa
exibirMenu();
