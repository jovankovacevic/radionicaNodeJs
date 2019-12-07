export  class ImageToggler {
    // #imgElem; //private polja - jos nijesu podrzana 
    constructor( imgElem, btnShowImg, btnRemoveImg){
        // this.#imgElem = imgElem; // private polja
        this.imgElem = imgElem;
        this.btnShowImg = btnShowImg;
        this.btnRemoveImg = btnRemoveImg;
        this.showPicture = this.showPicture.bind(this);
        this.btnShowImg.addEventListener('click', this.showPicture);
        //this.removePicture = this.removePicture.bind(this);
        this.btnRemoveImg.addEventListener('click', this.removePicture);
    }

    get img() {
        return this.imgElem;
    }

    set img(val) {
        this.imgElem = val;
    }

    static helloWorld() {
        console.log('Hello World!');
    }

    showPicture(event) {
        console.log('Click!');
        console.log(this);
        this.imgElem.src = 'slika.png';
    }

    removePicture = (event) => {
        console.log('Hide Click!');
        console.log(this);
        this.imgElem.src = '';
    }
}