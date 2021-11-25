import{ord} from './norskordene'

function randomNorwegianWord() {
    var newans = {};
    newans = ord.Words[Math.floor(Math.random()*ord.Words.length)]  
    if(newans.includes('.')){
        return "Applikasjon"
    }else{
        return newans
    }
}