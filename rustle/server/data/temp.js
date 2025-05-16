import fs from 'fs';

// Read the JSON file
const fileContent = fs.readFileSync('server/data/items.json', 'utf8');

// Check if file is empty
if (!fileContent.trim()) {
    console.error("Error: items.json is empty.");
    process.exit(1);
}

let items;
try {
    items = JSON.parse(fileContent);
} catch (err) {
    console.error("Error parsing JSON:", err.message);
    process.exit(1);
}

let res = [];

// Transform items
for (const item of items) {
    console.log(item)
    const newItem = {
        name: [item.name],
        type: [item.type],
        stackSize: item.stackSize,
        craftable: item.craftable,
        releaseDate: item.releaseDate,
        despawnTime: item.despawnTime,
        loot: item.loot[0]
    };
    res.push(newItem);
}

// Wrap the result in an outer array
const wrapped = [res];

// Write to output file
fs.writeFileSync('server/data/items.json', JSON.stringify(wrapped, null, 2), 'utf8');

console.log('Wrapped transformed data written to output.json');
