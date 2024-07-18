class CalculoNotas{

    obterNomeMedia(){
      let notasOrdenadas = []
      for(let i = 0; i< atletas.length;i++){
             console.log("Atleta: "+atletas[i].nome)
             //Ordenando as notas em ordem crescente
             notasOrdenadas=atletas[i].notas.sort((a,b) => a - b)
             //Mostrando as notas
             console.log("Notas Obtidas: "+notasOrdenadas.join(", "))
             //Somando as notas desprezando a primeira e a última nota
             let soma = 0
              for(let i=1;i<notasOrdenadas.length-1;i++){
                    soma += notasOrdenadas[i]
                }
                //Guardando o numero de notas que serão levadas em conta para a média
                let divisor = notasOrdenadas.length-2
                //Cálculo da média arrendondando para dois digitos após a virgula
                console.log("Média Válida: "+(soma/divisor).toFixed(2))
                console.log("")
             

      }
    }
  
  }
    
  let atletas = [
   {
     nome: "Cesar Abascal",
     notas: [10, 9.34, 8.42, 10, 7.88]
   },
   {
     nome: "Fernando Puntel",
     notas:  [8, 10, 10, 7, 9.33]
   },
   {
     nome: "Daiane Jelinsky",
     notas: [7, 10, 9.5, 9.5, 8]
   },
   {
     nome: "Bruno Castro",
     notas: [10, 10, 10, 9, 9.5]
   }
  ];

  //Chamando a classe
  let dados2 = new CalculoNotas()
  //Chamando a função
  dados2.obterNomeMedia()