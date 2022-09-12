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
            title: 'Blue Tornado - Gardaland',
            classes: 'myTitle',
            pathImage: 'https://www.gardaland.it/media/wcgnmaep/blue-tornado-25-2017-the-brand.jpg?center=0.56589909811683,0.5&mode=crop&format=webp&quality=80&width=720&height=514',
            park: 'img-park'
        }
    }
)
