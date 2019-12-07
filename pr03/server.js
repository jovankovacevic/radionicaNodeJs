const express = require('express')
const app = express(); // Pravi serverski program
const router = express.Router(); // Kreira router objekat

router.get('/users', (req, res) => {
    res.send('Getting users!');
})

app.use(router); 

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Server is listening at 3000');
    }
});