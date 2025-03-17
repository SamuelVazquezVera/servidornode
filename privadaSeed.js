import Privada from "./models/Privada.js"
import connectToDatabase from './db/db.js'

const privadaRegister = async () => {
    try {       
        const db = await connectToDatabase()

        const privada = new Privada({
            idprivada: 1,
            nombre:"Ontario",
            esPrivada: true
        })
        const privada2 = new Privada({
            idprivada: 2,
            nombre:"Maracaibo",
            esPrivada: true
        })
        const privada3 = new Privada({
            idprivada: 3,
            nombre:"Baikal",
            esPrivada: true
        })
        const privada4 = new Privada({
            idprivada: 4,
            nombre:"Michigan",
            esPrivada: true
        })
        const privada5 = new Privada({
            idprivada: 5,
            nombre:"Chad",
            esPrivada: true
        })
        const privada6 = new Privada({
            idprivada: 6,
            nombre:"Del Carmen",
            esPrivada: true
        })
        const privada7 = new Privada({
            idprivada: 7,
            nombre:"Miramar",
            esPrivada: true
        })
        const privada8 = new Privada({
            idprivada: 8,
            nombre:"Joya",
            esPrivada: true
        })
        const privada9 = new Privada({
            idprivada: 9,
            nombre:"Bacalar",
            esPrivada: true
        })
        const privada10 = new Privada({
            idprivada: 10,
            nombre:"Sayula",
            esPrivada: true
        })
        const privada11 = new Privada({
            idprivada: 11,
            nombre:"Zirahuen",
            esPrivada: true
        })
        const privada12 = new Privada({
            idprivada: 12,
            nombre:"Huron",
            esPrivada: true
        })
        const privada13 = new Privada({
            idprivada: 13,
            nombre:"Victoria",
            esPrivada: true
        })
        const privada14 = new Privada({
            idprivada: 14,
            nombre:"Coyuca",
            esPrivada: true
        })
        const privada15 = new Privada({
            idprivada: 15,
            nombre:"Nichupte",
            esPrivada: true
        })
        const privada16 = new Privada({
            idprivada: 16,
            nombre:"General",
            esPrivada: true
        })
        const privada17 = new Privada({
            idprivada: 17,
            nombre:"Seguridad",
            esPrivada: true
        })
        const privada18 = new Privada({
            idprivada: 18,
            nombre:"Zempoala",
            esPrivada: false
        })
        const privada19 = new Privada({
            idprivada: 19,
            nombre:"Agua Grande",
            esPrivada: false
        })
        const privada20 = new Privada({
            idprivada: 20,
            nombre:"Chautengo",
            esPrivada: false
        })
        const privada21 = new Privada({
            idprivada: 21,
            nombre:"Cuyutlan",
            esPrivada: false
        })
        const privada22 = new Privada({
            idprivada: 22,
            nombre:"Mitla",
            esPrivada: false
        })
        const privada23 = new Privada({
            idprivada: 23,
            nombre:"Chavel",
            esPrivada: false
        })
        const privada24 = new Privada({
            idprivada: 24,
            nombre:"Brizzola",
            esPrivada: false
        })
        const privada25 = new Privada({
            idprivada: 25,
            nombre:"Yalca",
            esPrivada: false
        })
        const privada26= new Privada({
            idprivada: 26,
            nombre:"Conil",
            esPrivada: false
        })
        
        
        privada.save()
        privada2.save()
        privada3.save()
        privada4.save()
        privada5.save()
        privada6.save()
        privada7.save()
        privada8.save()
        privada9.save()
        privada10.save()
        privada11.save()
        privada12.save()
        privada13.save()
        privada14.save()
        privada15.save()
        privada16.save()
        privada17.save()
        privada18.save()
        privada19.save()
        privada20.save()
        privada21.save()
        privada22.save()
        privada23.save()
        privada24.save()
        privada25.save()
        privada26.save()

    } catch (error) {
        console.log(error)
    }
}

privadaRegister()

