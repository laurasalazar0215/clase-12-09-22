import { data } from "../data/data.js";

const items= document.getElementById('items');
const templatecard= document.getElementById('template-cards').content;
const fragmet = document.createDocumentFragment();
let like= [];
document.addEventListener('DOMContentLoaded',()=>{
loadData(data)
})

const loadData= data=>{
    
    data.forEach(personajes=>{

        const{id,name,imagenes} = personajes;
        templatecard.querySelector('h5').textContect=name;
        templatecard.querySelector('img').setAttribute('src', imagenes);
        templatecard.querySelector('.btn-dark ').dataset.id=id

        const clone= templatecard.cloneNode(true)
        fragmet.appendChild(clone)
    })
    items.appendChild(fragmet)
}

items.addEventListener('click', e =>{
addLike(e);
})

const addLike = e =>{
    if(e.target.classList.contains('btn-dark')){
        setLike(e.target.parentElement);
    }
}

const setLike = objeto =>{
    const boton ={
        id: objeto.querySelector('.btn-dark').dataset.id,
        cantidad: 0
    }

    if (like.hasOwnProperty(boton.id)){
        boton.cantidad = like[boton.id].cantidad + 1;
        objeto.querySelector('#like').textContect = boton.cantidad;
    }

    like[boton.id] = {...boton};
    console.log(like[boton.id]);
}