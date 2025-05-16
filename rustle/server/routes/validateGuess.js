import express from "express";
import fs from 'fs';

const items = JSON.parse(fs.readFileSync('server/data/items.json', 'utf8'));
const router = express.Router();

items.map(item => item.craftable[0] = `${item.craftable[0]}`);

function countCommonElements(a, b) {
    let count = 0;

    const setA = new Set(a);
    const setB = new Set(b);

    for(let value of setA) {
        if(setB.has(value)) {
            count++;
        }
    }

    return count;
} 

const solution = findItemByName("Flame Turret");

function findItemByName(name) {
    const index = items.findIndex((item) => item.name == name);
    return items[index] || null;
}

function evaluateMatch(a, b) {
    const dist = countCommonElements(a,b);

    if(dist === 0) {
        return "wrong";
    } else if(dist === a.length) {
        return "correct"
    } else {
        return "close"
    }
}

router.post("/", (req, res) => {
    const guess = findItemByName(req.body.value);
    let categoryFeedback = {
        name: evaluateMatch(guess.name, solution.name),
        releaseDate: evaluateMatch(guess.releaseDate, solution.releaseDate),
        type: evaluateMatch(guess.type, solution.type),
        craftable: evaluateMatch(guess.craftable, solution.craftable),
        stackSize: evaluateMatch(guess.stackSize, solution.stackSize),
        despawnTime: evaluateMatch(guess.despawnTime, solution.despawnTime),
    }

    let success = false;

    if (!Object.values(categoryFeedback).some(val => val === "wrong" || val === "close")) {
        success = true;
    }    

    console.log(categoryFeedback)

    try {
        res.status(200).send({body : {guess : guess, categoryFeedback, success}});
    } catch (error) {
        console.log("Error during validation");
        res.status(400).send({error: error.message});
    }
})


export default router;