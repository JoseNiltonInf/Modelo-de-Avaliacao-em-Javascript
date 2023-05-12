    const estoque = { /* Objeto que contém os dados dos
                      produtos em estoque; */
        celular: 150, // Quantidade de celulares em estoque;
        fone: 55, // Quantidade de fones em estoque;
        penDrive: 37, // Quantidade de pen drives em estoque;
        caixaAudio: 28, // Quantidade de caixas de áudio em estoque;
        tablet: 32, // Quantidade de tablets em estoque;
        carregador: 29, // Quantidade de carregadores em estoque;
    }
    const vendas = { /* Objeto que contém a quantidades
                     dos produtos vendidos; */
        celular: 38, // Quantidade de celulares vendidos;
        fone: 10, // Quantidade de fones vendidos;
        penDrive: 17, // Quantidade de pen drives vendidos;
        caixaAudio: 8, // Quantidade de caixas de áudio vendidas;
        tablet: 5, // Quantidade de tablets vendidos;
        carregador: 15, // Quantidade de carregadores vendidos;
    }

    const restante ={} /* Objeto que guarda as informações 
    do todal de unidades restantes para cada produto ao final da semana 
    de vendas; */
    function resultado (estoque, vendas){ /* Função que retorna
    a diferença entre a quantidade de produtos em estoque
    e vendidos; */

        for (let i in estoque) { /* Automatização dos propriedades
        do objeto "restante"; */
            restante[i] =  estoque[i] - vendas[i] /* Cálculo de cada
            uma das propriedades do objeto "restante"; */
        }
    return restante // Retorno do objeto "restante" pela função;
    }
    console.log(resultado(estoque, vendas)) /* Impressão do retorno da função 
    "resultado". */

    /* Equipe: José Nilton Vieira e Emanuel Alves Teixeira;
       Turma: 2º Ano Informática 2023;
       Docente: Luis Ilderlândio;
       Matéria: Programação Web.
    */

