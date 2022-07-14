const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send('teachers')
})
router.post("/add")
router.put("/edit")
router.delete("/delete")

module.exports = router