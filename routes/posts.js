const express = require("express");
const router = express.Router();
const connection = require("../database/connection");

router.get("/", (req, res) => {
    const sql = "SELECT * FROM posts";

    connection.query(sql, (err, results) => {
        /*console.log(err, results);*/
        if (err) return res.status(500).json({ error: true, message: err.message })
        res.json(results)
    });
});

module.exports = router;
