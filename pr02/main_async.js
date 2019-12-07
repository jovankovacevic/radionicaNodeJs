async function init() {       
    let words = ['car', 'ipsum', 'dolor', 'septa', 'amet', 'devclub'];
    let rndIndex = Math.round(Math.random() * words.length);
    let apiUrl = `http://api.giphy.com/v1/gifs/search?api_key=NQ7c11RINDwoGMQp3Y6JzCTiQv7jhZZl&q=${words[rndIndex]}`;

    // await - sacekaj async operaciju da zavrsi
    const response = await fetch(apiUrl);
    const json = await response.json();
    let gifTest = document.getElementById('gifTest');
    gifTest.src = json.data[0].embed_url; 

    /*fetch(apiUrl)
        .then(response => response.json() )
        .then(json => {
            console.log(json);
            let gifTest = document.getElementById('gifTest');
            gifTest.src = json.data[0].embed_url; 
        })
        .catch(err => console.log("Greska: ", err))
        */

}

init();
