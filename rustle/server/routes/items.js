import express from "express";
import fs from 'fs';

const items = JSON.parse(fs.readFileSync('server/data/items.json', 'utf8'));
const router = express.Router();

function searchItems(input) {
    return items.filter(item => item.name[0].startsWith(input)).map(item => item.name[0]);
}

router.post("/", (req, res) => {

    const response = searchItems(req.body.input);

    console.log(req.body.input)

    try {
        res.status(200).send({body : response});
    } catch (error) {
        console.log("Error fetching items!");
        res.status(400).send({error: error.message});
    }
})


export default router;