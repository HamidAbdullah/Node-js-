import fs from 'fs';
const loadDataBuffer = fs.readFileSync('jsonData.json');
const bufferToString = loadDataBuffer.toString();
const jsonData = JSON.parse(bufferToString);

console.log({ loadData: jsonData });

const updateData = (key, value) => {
    console.log(`You Change ${key} = ${value}
        `);
    jsonData[key] = value;
    return jsonData;
};


updateData('name', 'Hamid Abdullah');
updateData('age', 30);

const updatedJsonString = JSON.stringify(jsonData, null, 2);
fs.writeFileSync('jsonData.json', updatedJsonString);
console.log({ updatedData: jsonData });

const jsonToParse = JSON.parse(bufferToString);

console.log({jsonToParse: jsonToParse?.name});


