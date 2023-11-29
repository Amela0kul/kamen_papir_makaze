const Kompjuter=document.getElementById('computer-choice')
const Korisnik=document.getElementById('user-choice')
const Rezultat=document.getElementById('result')
const MoguciIzbori=document.querySelectorAll('button')
let IzborKompjutera
let IzborKorisnika
let Rez

MoguciIzbori.forEach(MoguciIzbor=>MoguciIzbor.addEventListener('click',(e)=>{
 IzborKorisnika=e.target.id
 Korisnik.innerHTML=IzborKorisnika
 generateComputerChoice()
 getResult()
}))

function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*MoguciIzbori.length)+1
    if(randomNumber==1){
    IzborKompjutera='kamen'}
    if(randomNumber==2){
    IzborKompjutera='papir'}
    if(randomNumber==3){
    IzborKompjutera='makaze'}

    Kompjuter.innerHTML=IzborKompjutera

}

function getResult(){
    if(IzborKompjutera==IzborKorisnika){
        Rez='izjednaceno'
    }
    if(IzborKompjutera=='kamen' && IzborKorisnika=='papir'){
        Rez='Pobjeda'
    }
    if(IzborKompjutera=='kamen' && IzborKorisnika=='makaze'){
        Rez='Poraz'
    }
    if(IzborKompjutera=='papir' && IzborKorisnika=='kamen'){
        Rez='Poraz'
    }
    if(IzborKompjutera=='papir' && IzborKorisnika=='makaze'){
        Rez='Pobjeda'
    }
    if(IzborKompjutera=='makaze' && IzborKorisnika=='papir'){
        Rez='Poraz'
    }
    if(IzborKompjutera=='makaze' && IzborKorisnika=='kamen'){
        Rez='Pobjeda'
    }
    Rezultat.innerHTML=Rez
}