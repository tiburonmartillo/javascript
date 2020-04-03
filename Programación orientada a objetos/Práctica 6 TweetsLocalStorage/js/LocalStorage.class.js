class ManipularLocalStorage{

    static ArrayTweets=[];

    static AgregarTweetLocalStorage(ContenidoTweet){

        this.ArrayTweets=this.ObtenerLocalStorage();
        
        this.ArrayTweets.push(ContenidoTweet);

        localStorage.setItem("Tweets",JSON.stringify(this.ArrayTweets)); // localStorage almacena la información
    }

    static ObtenerLocalStorage(){
        let tweetsObtenidosLS=[];

        if(localStorage.getItem("Tweets")===null){
            return tweetsObtenidosLS;
        }return JSON.parse(localStorage.getItem("Tweets"));
    }
static EliminarTweetLocalStorage(contenido){
    let tweetsLS=this.ObtenerLocalStorage();
    let arrayNuevoTweetsLS=[];

    for(let i=0;i<tweetsLS.length;i++){
        if(contenido!==tweetsLS[i]){
            arrayNuevoTweetsLS.push(tweetsLS[i])
        }
    }

    localStorage.setItem('tweets',JSON.stringify(arrayNuevoTweetsLS));
}
}