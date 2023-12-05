// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

let dipendenti = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]

// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let key in dipendenti){
    console.log(dipendenti[key]);
}

// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

// recupero l'elemento HTML dove andremo a stampare le informazioni dei dipendenti
let lista_dipendenti = document.getElementById('lista_dipendenti');

// ciclo l'array dei dipendenti tramite un ciclo For
for (let i=0; i<dipendenti.length; i++){
    // mi creo un div contenitore che conterrà tutte le info di un dipendente
    let div = document.createElement('div');

    // al div creato precedentemente aggiungo delle classi di stile
    div.classList.add('col-4');
    div.classList.add('p-3')
    
    // mi creo un ulteriore div interno per raccogliere le info di un dipendente
    let dipendente = document.createElement('div');

    // dichiaro 3 variabili che conterranno le 3 informazioni del dipendente
    let name = `<h2>${dipendenti[i].name}</h2>`;
    let role = `<h4>${dipendenti[i].role}</h4>`;


    // BONUS 1: Trasformare la stringa foto in una immagine effettiva
    let image = document.createElement('img');
    image.src = `./img/${dipendenti[i].image}`

    image.classList.add('mb-3')

    // inietto al div interno le 3 variabili dichiarate precedentemente
    dipendente.innerHTML = name + "<br>" + role;

    // appendo l'immagine del dipendente al div contenitore
    div.appendChild(image);

    // appendo il div dipendente al div contenitore
    div.appendChild(dipendente);

    // aggiungo classi di stile
    dipendente.classList.add('text-center')

    // appendo il contenitore all'elemento HTML principale
    lista_dipendenti.appendChild(div);
}




