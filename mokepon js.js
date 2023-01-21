const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapas = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones = []
let mokeponesEnemigos = []
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionDeMokepones

let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputpydos
let inputlangostelvis
let inputpalma

let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador=0
let victoriasEnemigo=0
let vidasJugador = 3
let vidasEnemigo = 3
let intervalo    

let mascotaEnemiga
let numeroMascota 
let jugadorId = null
let enemigoId = null

let lienzo = mapa.getContext("2d")
let mapaBackground =new Image()
mapaBackground.src= './imagines/mokemap.png'
let altoDelMapa
let anchoQueBuscamos = window.innerWidth - 100

const altoMaximoDelMapa = 350

if (altoDelMapa > altoMaximoDelMapa ) {
    altoDelMapa = altoMaximoDelMapa
}

altoDelMapa = anchoQueBuscamos * 340 / 870

mapa.width =  anchoQueBuscamos
mapa.height = altoDelMapa


class Mokepon {
    constructor(nombre, foto, tipo, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.tipo = tipo
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokpeon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.alto,
            this.ancho
        )
    }
}

let hipodoge = new Mokepon('Hipodoge', "./imagines/dayanistica.png", "Agua", './imagines/cabeza m/hipodoge-cabeza.png')

let capipepo = new Mokepon('Capipepo', "./imagines/capipepo.jpg", "Tierra",'./imagines/cabeza m/capipepo-cabeza.png')

let ratigueya = new Mokepon('Ratigueya', "./imagines/ratiguella.jpg", 'Fuego','./imagines/cabeza m/ratigueya-cabeza.png')

let palma = new Mokepon('palma',"./imagines/tucapalma.png", 'Agua', "./imagines/tucapalma.png")

let langostelvis = new Mokepon('langostelvis',"./imagines/langostelvis.png", 'Fuego', "./imagines/langostelvis.png")

let pydos = new Mokepon('pydos', "./imagines/pydos.png", 'Tierra',"./imagines/pydos.png")

const HIPODOGUE_ATAQUES = [ 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
]

const CAPIPEPO_ATAQUES = [
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' }  
]

const RATIGUEYA_ATAQUES = [
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' }
]

const PALMA_ATAQUES = [ 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
]

const LANGONSTELVIS_ATAQUES = [
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' }
]

const PYDOS_ATAQUES = [
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' }
]

hipodoge.ataques.push(...HIPODOGUE_ATAQUES)
//hipodogeEnemigo.ataques.push(...HIPODOGUE_ATAQUES)

capipepo.ataques.push(...CAPIPEPO_ATAQUES)
//capipepoEnemigo.ataques.push(...CAPIPEPO_ATAQUES) 

ratigueya.ataques.push(...RATIGUEYA_ATAQUES)
//ratigueyaEnemigo.ataques.push(...RATIGUEYA_ATAQUES)

palma.ataques.push(...PALMA_ATAQUES)
//palmaEnemigo.ataques.push(...PALMA_ATAQUES)

langostelvis.ataques.push(...LANGONSTELVIS_ATAQUES)
//langostelvisEnemigo.ataques.push(...LANGONSTELVIS_ATAQUES)

pydos.ataques.push(...PYDOS_ATAQUES)
//pydosEnemigo.ataques.push(...PYDOS_ATAQUES)

mokepones.push(hipodoge,capipepo,ratigueya,palma,langostelvis,pydos)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapas.style.display= 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputHipodoge = document.getElementById('Hipodoge')
     inputCapipepo = document.getElementById('Capipepo')
     inputRatigueya = document.getElementById('Ratigueya')
     inputlangostelvis = document.getElementById('langostelvis')
     inputpydos = document.getElementById('pydos')
     inputpalma = document.getElementById('palma')

    })
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)


    botonReiniciar.addEventListener('click', reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://localhost:8080/unirse")
        .then(function (res) {
            console.log(res)
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'

    sectionVerMapas.style.display = 'flex'
    
    iniciarMapa()
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if(inputlangostelvis.checked){
        spanMascotaJugador.innerHTML = inputlangostelvis.id
        mascotaJugador = inputlangostelvis.id
    } else if(inputpydos.checked){
        spanMascotaJugador.innerHTML = inputpydos.id
        mascotaJugador = inputpydos.id
    } else if(inputpalma.checked){
        spanMascotaJugador.innerHTML = inputpalma.id
        mascotaJugador = inputpalma.id
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMokepon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    EstablecerNumero ()
}

function seleccionarMokepon(mascotaJugador) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}


function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true   
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            }
            if(ataqueJugador.length === 5){
                enviarAtaques()
            }
            
        })
    })
}

function enviarAtaques(){
    fetch(`//http://localhost:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "content-type" : "aplication/json"
        }, 
        body: JSON.stringify({
            ataque: ataqueJugador
        })
    })
    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    fetch(`//http://localhost:8080/mokepon/${enemigoId}/ataques`)
        .then(function(res){
            res.json()
                then(function({ataques}){
                    if(ataques.length === 5){
                        combate()
                    }
                })
        })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    mascotaEnemiga = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
        puntoExtra()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function puntoExtra() {
    let tipo
    let tipoEnemigo

    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            tipo = mokepones[i].tipo
        }  
    }
    console.log(tipo) 

    for (let a = 0; a < mokepones.length; a++) {
        if ( mascotaEnemiga=== mokepones[a].nombre) {
            tipoEnemigo = mokepones[a].tipo
        }
    }
    console.log(tipoEnemigo) 
    
    if (tipo == "Agua" && tipoEnemigo == "Fuego" || tipo == "Fuego" && tipoEnemigo == "Tierra" || tipo == "Tierra" && tipoEnemigo == "Agua") {
        victoriasJugador ++
    } else if (tipo == tipoEnemigo) {
    } else {
        victoriasEnemigo ++
    }
}

function combate() {

    clearInterval(intervalo)

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponente(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML = resultadoFinal


    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas (){
    mokepones[numeroMascota].x = mokepones[numeroMascota].x + mokepones[numeroMascota].velocidadX
    mokepones[numeroMascota].y = mokepones[numeroMascota].y + mokepones[numeroMascota].velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mokepones[numeroMascota].pintarMokpeon()

    enviarposicion(mokepones[numeroMascota].x, mokepones[numeroMascota].y)

   mokeponesEnemigos.forEach(function (mokepon){
    mokepon.pintarMokpeon()
    RevisarColicion(mokepon)
   })
}

function enviarposicion(x, y){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`,{
        method: "post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res){
        if(res.ok){
            res.json()
                .then(function({ enemigos }){
                    console.log(enemigos)   
                    mokeponesEnemigos = enemigos.map(function(enemigo){
                        let mokeponEnemigo = null
                        const mokeponNombre = enemigo.mokepon.nombre || ""
                        if (mokeponNombre === "Hipodoge") {
                            mokeponEnemigo = new Mokepon('Hipodoge', "./imagines/dayanistica.png", "Agua", './imagines/cabeza m/hipodoge-cabeza.png', enemigo.id)
                        } else if (mokeponNombre === "Capipepo"){
                            mokeponEnemigo = new Mokepon('Capipepo', "./imagines/capipepo.jpg", "Tierra",'./imagines/cabeza m/capipepo-cabeza.png', enemigo.id)
                        } else if (mokeponNombre === "Ratigueya"){
                            mokeponEnemigo = new Mokepon('Ratigueya', "./imagines/ratiguella.jpg", 'Fuego','./imagines/cabeza m/ratigueya-cabeza.png', enemigo.id)
                        } else if (mokeponNombre === "palma"){
                            mokeponEnemigo = new Mokepon('palma',"./imagines/tucapalma.png", 'Agua', "./imagines/tucapalma.png", enemigo.id)
                        } else if (mokeponNombre === "langostelvis"){
                            mokeponEnemigo = new Mokepon('langostelvis',"./imagines/langostelvis.png", 'Fuego', "./imagines/langostelvis.png", enemigo.id)  
                        } else if (mokeponNombre === "pydos"){
                            mokeponEnemigo = new Mokepon('pydos', "./imagines/pydos.png", 'Tierra', "./imagines/pydos.png", enemigo.id)
                        }

                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y

                        return mokeponEnemigo
                    })
                })
        }
    })
}

function moverarriva() {
    mokepones[numeroMascota].velocidadY = - 5
    }

function moverabajo() {
    mokepones[numeroMascota].velocidadY = 5
    }
function moverderecha() {
    mokepones[numeroMascota].velocidadX = 5
    }
function moverizquierda() {
    mokepones[numeroMascota].velocidadX = - 5
    }
function detenermovimiento(){
    mokepones[numeroMascota].velocidadX = 0
    mokepones[numeroMascota].velocidadY = 0
}

function EstablecerNumero (){
    for (let index = 0; index < mokepones.length; index++) {
        if (mokepones[index].nombre == mascotaJugador) {
            numeroMascota = index
            console.log(index)
        }
    }
}

function sePrecionoUnaTecla(event){
    console.log(event.key)

    switch (event.key) {
        case 'ArrowUp':
            moverarriva()   
            break;
        case 'ArrowDown':
            moverabajo()
            break;
        case 'ArrowLeft':
            moverizquierda()
            break;
        case 'ArrowRight':
            moverderecha()
            break;

        default:
            break;
    }
}

function iniciarMapa(){

    intervalo= setInterval(pintarCanvas, 50)
   
    window.addEventListener('keydown', sePrecionoUnaTecla)

    window.addEventListener('keyup', detenermovimiento)
}

function RevisarColicion(enemigo){
    const arrivaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const izquierdaEnemigo = enemigo.x 
    const derechaEnemigo = enemigo.x + enemigo.ancho

    const arrivaMascota = mokepones[numeroMascota].y
    const abajoMascota = mokepones[numeroMascota].y + mokepones[numeroMascota].alto
    const izquierdaMascota = mokepones[numeroMascota].x 
    const derechaMascota = mokepones[numeroMascota].x + mokepones[numeroMascota].ancho

    if (
        abajoMascota < arrivaEnemigo ||
        arrivaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo || 
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }  
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapas.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
    //alert("hay colision")
    detenermovimiento()
    enemigoId = enemigo.id
}

window.addEventListener('load', iniciarJuego)