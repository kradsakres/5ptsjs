let receita = {
    id: "3",
    titulo: "Miojo",
    porcoes:1,
    ingredientes:["2 copos com agua","miojo","Tempero a gosto"]
}
console.log(receita.Ingredientes[0]);
console.log(receita.Ingredientes[1]);
console.log(receita.Ingredientes[2]);

let livros = [{
	id:1,
	titulo:"a menina que roubava livros",
	autor:"Markus Zusak",
	livroLido:true
},
{
	id:2,
	titulo:"A Gangue e o 5S",
	autor:"Wagner Matias de Andrade",
	livroLido:false
}
{
	id:3,
	titulo:"a menina que roubava livros 2",
	autor:"Markus Zusak",
	livroLido:true
},
{
	id:4,
	titulo:"A Gangue e o 5S 2",
	autor:"Wagner Matias de Andrade",
	livroLido:false
}
]
for(i=0;i<livros.lenght;i++){
	console.log(livros[i].titulo);
	console.log(livros[i].autor);
	if(console.log(livros[i].livroLido)==true){
		console.log("Você já leu este livro");
	}
	else{
		console.log("você não leu este livro");
	}
}