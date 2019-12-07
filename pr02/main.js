

let words = ['car', 'ipsum', 'dolor', 'septa', 'amet', 'devclub'];
let rndIndex = Math.round(Math.random() * words.length);
let apiUrl = `http://api.giphy.com/v1/gifs/search?api_key=NQ7c11RINDwoGMQp3Y6JzCTiQv7jhZZl&q=${words[rndIndex]}`;

fetch(apiUrl)
    .then(response => response.json() )
    .then(json => {
        console.log(json);
        let gifTest = document.getElementById('gifTest');
        gifTest.src = json.data[0].embed_url; 
    })
    .catch(err => console.log("Greska: ", err))
    
console.log('Test');


function testPr1() {
    return new Promise((resolve, reject) => {
        let dummyTestEl = document.getElementById('dummyTestEl');
        if(dummyTestEl){
            resolve('Sve ok');
        }
        else {
            reject('Desila se greska!');
        }
        //resolve('SVE OK PROSLO');    
        //reject('Greska!!!');
    })
}

function testPr2() {
    return new Promise ((resolve, reject) => {
        resolve ('Second promise - OK');
    })
}


testPr1()
    .then(data => testPr2())
    .then(data2 => {
        console.log(data2);
    }) 
    .catch(err => {
        console.log('Error grana: ', err);
    })