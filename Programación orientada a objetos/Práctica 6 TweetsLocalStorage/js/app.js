const contenidoTweet = document.querySelector("#txtTweet")
const listaTweets = document.querySelector("#lista-tweets");

eventListener();
CargarTweetsLocalStorage();

function eventListener() {
    document.querySelector("#formulario").addEventListener('submit', Obtenerformulario)// querySelector trae a las etiquetas. Submit es un evento
    listaTweets.addEventListener('click', eliminarTweet);
}

function Obtenerformulario(event) {
    event.preventDefault();//previene la acción por defecto, submit guarda y limpia el formulario, con esto no lo hace
    if (contenidoTweet.value.trim() == "") return;
    const instanciaTweet = new Tweets(contenidoTweet.value);
    instanciaTweet.agregarTweetDOM(listaTweets, true);

    contenidoTweet.value="";
}

function eliminarTweet(event) {
    Tweets.eliminarTweetDOM(event)
}

function CargarTweetsLocalStorage() {
    const TweetsLS = ManipularLocalStorage.ObtenerLocalStorage();

    for (let i = 0; i < TweetsLS.length; i++) {
        const instanciaTweet = new Tweets(TweetsLS[i]);
        instanciaTweet.agregarTweetDOM(listaTweets, false);
    }

}