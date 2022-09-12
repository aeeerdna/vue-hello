console.log('JS OK!!!')

/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/


// creazione vue

const app = new Vue(
    {
        el: '#root',
        data: {
            //message: 'Un titolo molto lungo vue-js',
            title: 'Un titolo molto lungo vue-js',
            classes: 'myTitle'
        }
    }
)
