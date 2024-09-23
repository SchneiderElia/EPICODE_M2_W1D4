/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let esercizio1 = "Esercizio1"

let number = "NUMERI INTERI "
let numberDescriptions = "la variabiule number comprende tutti i numeri interi es: 1 ,3 , 5 ,45 ,78... "
let space = null
let flot = "NUMERI FLOT"
let flotDescriptions = "sono tutti quei numeri che sono composti dalla virgola es: 2.4 - 4.5 - 56.3... "
let space1 = null
let stringa = "STRINGA"
let stringDescrptions = "una stringa e una porzine di testo/ caratteri per far riconscere a javascript che e una stringa la dobbiamo racchiudere tra doppi apici o singoli "
let space3 = null
let object = "OBJECT"
let objectDescriprios = "un oggetto e un insieme di dati che possono variare a seconda di ciò che dobbiamo rappresentare, ad esempio i dati di un apersona oppure una lista della spesa, ogni punto della nostra lista deve avere un nome specifico seguito dal suo dato ES: nome:Elia"
let space4 = null
let array = "ARRAY"
let arrayDescriptios = "un array e simile ad un oggetto ma in questo caso la nostra lista viene numerata e parte dal numero zero, e non ha bisogno di avere denominazioni aggiuntive ma si scrive direttamente il dato coivolto, potremmo definirla una collezione di dati"
let space5 = null   
let costante = "COSTANTE"
let costanteDescriprions= "la costante e un dato che rimane fisso e questo non può variare" 
let space6 = null
let vuoto = "NULL"
let vuotoDescriptions = "impostare il valore null alla nostravariabile e come prendere una scatola scriverci sopra un nome per identificarla e tenerla vuota di proposito"
let space7 = null
let undefine = "UNDEFINE"
let undefineDescriptions = "la scritta indefinito 'Undefine' ci appare quando creiamo la variabile, cioè la nostra scatola e al suo interno non ci iseriamo nulla"
let space8 = null
let boolean = "BOOLEAN-VALUE"
let booleanDescriptions = "i valori booleani sono di due tipi 1-VERO(true) 2-FALSO(false) e servono a dire se un operazione e vera o falsa in base a quello che gli chiediamo"

console.log(esercizio1)
console.log(number)
console.log(numberDescriptions)
console.log(space)
console.log(flot)
console.log(flotDescriptions)
console.log(space1)
console.log(stringa)
console.log(stringDescrptions)
console.log(space3)
console.log(object)
console.log(objectDescriprios)
console.log(space4)
console.log(array)
console.log(arrayDescriptios)
console.log(space5)
console.log(costante)
console.log(costanteDescriprions)
console.log(space6)
console.log(vuoto)
console.log(vuotoDescriptions)
console.log(space7)
console.log(undefine)
console.log(undefineDescriptions)
console.log(space8)
console.log(boolean)
console.log(booleanDescriptions)


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
let space9 = null
let esercizio2 = "Esercisio2"
let objectDescriprios2 = "Descrizione di un oggeto javascript"
let objectDescriprios2go = "un oggeto in javasript e una rappresentazione di dati composti da un nome che gli identifica e un valore, questi vengono assegniati da noi, questi dati vengono messi dentro un scatola principale con nome univoco"


console.log(space9)
console.log(esercizio2)
console.log(objectDescriprios2)
console.log(objectDescriprios2go)


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let space10 = null
let esercizio3 = "Esercizio3"
let metodo1 = "Metodo1 (somma dei due numeri direttamente nella variabile)"
let somma1 = 12 + 20
let metodo2 = "Metodo2 (creare due variabili distinte e sommarle in una variabile che li racchiude)"
let numero12 = 12
let numero20 = 20
let somma2 = numero12 + numero20

console.log(space10)
console.log(esercizio3)
console.log(metodo1)
console.log(somma1)
console.log(metodo2)
console.log(somma2)
console.log (numero12 + numero20)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let space12 = null
let esercizio4 = "Esercizio4"
let x = 12

console.log(space12)
console.log(esercizio4)
 console.log(x)


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let space13 = null
let esercizio5 = "Esercizio5"
let nome = "Elia"


console.log(space13)
console.log(esercizio5)
console.log(nome)


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let space14 = null
let esercizio6 = "Esercizio6"
let metodo01 = "Eseguo la  sottrazione tra la variabile 'X' ed il numero 4 in una variabile unica"
let somma01 = x -4
let metodo02 = "Eseguo la  sottrazione tra la variabile 'X' ed il numero 4 aggiungento in nuovo numero ad una variabile e creando un ulteriore variabile per fare la somma"
let numero4 = 4
let somma02 = x - numero4

console.log(space14)
console.log(esercizio6)
console.log(metodo01)
console.log(somma01)
console.log(metodo2)
console.log(somma02)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let space15 = null
let esercizio7 = "Esercizio7"
let name1 = "jhon"
let name2 = "Jhon"
let verifica1 = "controllo che jhon sia diverso da Jhon"
let notsame = name1 == name2
let cambio = "cambio Jhon in jhon"
let name2low = name2.toLowerCase()
let verifica2 = "controllo che i due nomi siano uguali"
let samename = name1 == name2low
let verifica3 = "controllo che i due nomi siano uguali solo dal console.log"



console.log(space15)
console.log(esercizio7)
console.log(name1)
console.log(name2)
console.log(verifica1)
console.log(notsame)
console.log(name1 == name2)
console.log(cambio)
console.log(name2low)
console.log(verifica2)
console.log(samename)
console.log(verifica3)
console.log(name1 == (name2.toLowerCase()))
