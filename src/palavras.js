const palavras = [
    "abacate", "abacaxi", "abelha", "abanador", "antologia", "amor", "aba", "abraço", "ábaco", "abrigo", "abrir", 
    "banana", "boi", "batata", "bacalhau", "bexiga", "bowl", "batedeira", "bisturi", "barreira", "banco", 
    "caixa", "chantilly", "comércio", "cachorro", "cuidado", "caneta", "carinho", "cupuaçu", "cabra", "cesto", 
    "dados", "dizer", "danone", "dente", "diário", "diamante", "diafragma", "detonar", "dia", "dromedário", 
    "elefante", "esmeralda", "espátula", "estômago", "esfinge", "esfera", "encontro", "ema", "escola", "economia", 
    "formiga", "fama", "festa", "fiador", "ferver", "flauta", "fichário", "figo", "fiapo", "fotografia", 
    "goiaba", "gelo", "grito", "gamão", "guria", "goleiro", "golfinho", "golfe", "girar", "glúten", 
    "helicóptero", "harmonia", "haste", "hectare", "hábito", "hepatite", "hiena", "hemisfério", "hidrante",
    "igreja", "ícone", "importante", "ímpar", "idoso", "irado", "identidade", "idioma", "idade", "idiota", 
    "jantar", "jumento", "jambú", "jibóia", "jararaca", "janela", "jerimum", "jaula", "jabuti", "jaleco", 
    "laranja", "lua", "leão", "limão", "larápio", "luz", "lindo", "lacraia", "lactose", "laço", "lacrar", 
    "mamão", "manga", "morango", "mico", "matar", "mingau", "moqueca", "macacão", "mocassin", "maçaneta", 
    "nectarina", "nada", "navio", "namorado", "ninja", "natal", "narciso", "narina", "nádega", "nabo", 
    "ovo", "ostra", "obstetra", "oblíquo", "orangotango", "olhar", "óculos", "ortodoxo", "ouro", "ornamento", 
    "pato", "polvo", "povoar", "pólvora", "palhaço", "paróqia", "pano", "princesa", "pizza", "patroa", 
    "queijo", "quitanda", "quinta", "quantia", "quarentena", "quadrilha", "quaresma", "quartzo", "quebrar", "quarteirão", 
    "risada", "rio", "remar", "rato", "racional", "rainha", "radioatividade", "raiz", "raiva", "rachadura", 
    "salada", "salamandra", "sacola", "siri", "sábado", "safanão", "sabre", "sucarose", "sabedoria", "sacerdote", 
    "tatu", "tabacaria", "taberneiro", "tábua", "torrada", "três", "terço", "tamanho", "tatuagem", "trem", 
    "uva", "uísque", "união", "universo", "unanimidade", "ubuntu", "universidade", "urso", "uivar", "unir", 
    "vela", "valeta", "vacilo", "valor", "vagem", "vadiagem", "vaca", "valentia", "vidro", "valsa", 
    "xícara", "xadrez", "xilofone", "xarope", "xenofobia", "xereta", "xerife", "xaveco", "xixi", "xale", 
    "zebra", "zagueiro", "zero", "zoeira", "zodíaco", "zangão", "zepelim", "zinco", "zoológico", "zumbido"
]


export const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)]
const palavraArray = []

    let palavra1 = palavraAleatoria.replace("ó", "o" );
    palavra1 = palavra1.replace("ô", "o");
    palavra1 = palavra1.replace("õ", "o");
    palavra1 = palavra1.replace("â", "a");
    palavra1 = palavra1.replace("á", "a");
    palavra1 = palavra1.replace("ã", "a")
    palavra1 = palavra1.replace("ê", "e")
    palavra1 = palavra1.replace("é", "e")
    palavra1 = palavra1.replace("í", "i")
    palavra1 = palavra1.replace("ú", "u")
    palavra1 = palavra1.replace("ü", "u")
    palavra1 = palavra1.replace("ç", "c")

    export const palavraReplace = palavra1


function arrayarPalavra () {
    for (let i =0; i<palavraAleatoria.length; i++) {
        palavraArray.push(palavraAleatoria[i])
    }
}

const newArray = [];
function arrayarPalavraReplace () {
    for (let i =0; i<palavra1.length; i++) {
        newArray.push(palavra1[i])
    }
}

arrayarPalavra();
arrayarPalavraReplace();

export const palavraArrayReplace = newArray;
export default palavraArray;