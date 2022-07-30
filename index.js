const express = require("express");
const app = express()

app.get("/", (req, res) => {
    fs.readFile(__dirname + './index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.listen(process.env.PORT || 5000)