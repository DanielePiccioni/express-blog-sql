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


router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM posts WHERE id = ?";

    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Errore query DELETE:", err);
            return res.status(500).json({ error: "Errore del server" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Post non trovato" });
        }
        res.status(204).send();
    });
});

module.exports = router;
