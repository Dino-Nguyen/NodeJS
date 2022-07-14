const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send('teachers')
})
router.post("/")
router.put("/:id")
router.delete("/:id")

module.exports = router