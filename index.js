const express = require("express");
const app = express()

app.get("/", (res, req) => {
    res.send("WORKING!!!");
});

app.listen(process.env.PORT || 5000)