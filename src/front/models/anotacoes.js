class Anotacoes {
  constructor(titulo, notas) {
    if (typeof titulo === 'string' && typeof notas === 'string') {
      this.titulo = titulo;
      this.notas = notas;
    } else {
      throw "Criação de notas =  dados inválidos";
    }
  }
}

// const a1 = new  Anotacoes ('Nome', 'Maria')
// const a2 = new  Anotacoes ('Eli', 'seis')
// const a3 = new  Anotacoes ('Nome', 'Maria')
// const a4 = new  Anotacoes ('Nome', 'Maria')