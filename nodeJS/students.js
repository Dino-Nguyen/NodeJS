const express = require("express")
const router = express.Router();
router.get('/students', (req, res) => {
   res.json([])
})
router.get('/students/add', (req, res) => [
    res.send('ok')
])
module.exports = router