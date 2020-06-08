const _ = require('lodash');


//classes
//classe pergunta
class Pergunta {

    constructor(i, alt) {
        this.id = i;
        this.alternativa = alt;
    }

    checaAlternativa(alt) {
        if (alt === "a" || alt === "b" || alt == "c") {
            return true;
        } else if (alt === "d" || alt === "e" || alt == "f") {
            return false;
        } else {
            return "ocorreu um erro";
        }
    }
}

//classe reposta
class Resposta {
    constructor(id, titulo, desc, urlImg, li) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = desc;
        this.urlImg = urlImg;
        this.lista = li
    }
}

msg1 = "'Ela é tão ela'. Um dos principais motivos de eu me apaixonar por ti foi o fato de tu ser um ser humano muito singular e único, tu é do teu próprio jeito e ninguem chega perto de ti, amo o fato de tu ser tão especial! s2"

msg2 = "O bichinho que inventa moda... tu é uma mente criativa que tem sempre as melhores idéias e as mais locas, tem a mente sempre aberta e isso faz eu te amar muito!! s2"

msg3 = "Focada é ela... quando tu poem algo na cabeça ninguem te tira né? só descansa quando consegue fazer tudinho o que quer e isso eu admiro muito, tua determinação me inspira e me orgulha muito!! s2"

msg4 = "Ba, nesse eu não foi nem falar nada né? é a guria mais gata que eu ja fiquei e sempre vou lembrar do quão orgulhoso eu fiquei a primeira vez que eu te beijei.  te amo sua linda <3"

msg5 = "Me da uma mão ai? Sou apaixonado por ti por sempre estar disposta a ajudar seja quem for, sempre busca a melhor forma possível de ser útil e isso eu admiro muito!! s2"

msg6 = "Bora comer um dogzinho? bora comer um dogzinho.. não tem como não te amar tu sendo minha parceira pra praticamente tudo, minhas locuras, minhas viagens e aguentar esse meu jeito debochado de ser, quero que tu seja minha parceira pra sempre bb <3"

msg7 = "Eitaaaa esse é pesado, mas é uma verdade, te amo por a gente combinar tanto quanto o quesito é péle, o melhor beijo, melhor sexo, melhor tudo. Ser dona de sexshop ajuda um pouco nas fantasias também né? rsrsrs te amo gostosona!! s2"

msg8 = "Esse é bem bobo, mas eu sou apaixonado na tua capacidade de falar com qualquer um sem ter vergonha e se comunicar tão bem"

msg9 = "Amo quando nós fica agarradinho, quietinho no quartinho.. é, tu é a pessoa mais carinhosa que eu ja conheci, dengosa, amorosa e eu amo quando tu me da carinho, sou mt mal acostumo, saudade já bebe, te amo <3"

msg10 = "E esse look ai? sempre bem vestida, cheia do ouro e das roupas mas estilosas que todas queriam ter, mas só a mimi tem. Te amo por esse teu estilo só teu, te completam e explica muito o que tu é, linda e estilosa demais!! s2"

//seta respostas
const res01 = new Resposta(1, "Mimi Única", msg1, url1, [true, true, true, true, true]);
const res02 = new Resposta(2, "Mimi Criativa", msg2, url2, [false, true, true, true, true]);
const res03 = new Resposta(3, "Mimi Determinada", msg3, url3[false, false, true, true, true]);
const res04 = new Resposta(4, "Mimi Linda", msg4, url4, [false, false, false, true, true]);
const res05 = new Resposta(5, "Mimi Solidária", msg5, url5[false, false, false, false, true]);
const res06 = new Resposta(6, "Mimi Companheira", msg6, url6[false, false, false, false, false]);
const res07 = new Resposta(7, "Mimi Gostosa", msg7, url7[true, true, true, true, false]);
const res08 = new Resposta(8, "Mimi Comunicativa", msg8, url8, [true, true, true, false, false]);
const res09 = new Resposta(9, "Mimi Carinhosa", "bla bla bla 1", msg9, url9, [true, true, false, false, false]);
const res10 = new Resposta(10, "Mimi Estilosa", msg10, url10, [true, false, false, false, false]);


function checaReposta(lista) {
    if (_.isEqual(lista, resposta1.lista)) {
        return resposta1;
    } else if (_.isEqual(lista, resposta2.lista)) {
        return resposta2
    } else if (_.isEqual(lista, resposta3.lista)) {
        return resposta3
    } else if (_.isEqual(lista, resposta4.lista)) {
        return resposta4;
    } else {
        return "Não encontrado";
    }
}


var listaFinal = [checaAlternativa("f"), checaAlternativa("c")];
console.log(lista1);

var resFinal = checaReposta(listaFinal);

//devolve pro usuário
resFinal.titulo
resFinal.descricao
resFinal.urlImg