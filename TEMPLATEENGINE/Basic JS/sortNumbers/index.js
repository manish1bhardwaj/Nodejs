const fs = require("fs");
const path = require("path");

const loc1 = path.join(__dirname, "data/input1.txt");
const loc2 = path.join(__dirname, "data/input2.txt");

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath,encoding="utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

Promise.all([readFile(loc1), readFile(loc2)])
    .then(([data1, data2]) => {
        const array1 = data1.split(' ');
        const array2 = data2.split(' ');

        const mergedArray = [...array1,...array2];
        mergedArray.sort((a, b) => a - b);
        console.log(array1);
        console.log(array2);
        console.log(mergedArray);
        let output = mergedArray.join(' ');
        fs.writeFile(path.join(__dirname, "data/output.txt"), output, (err) => {
            if (err) {
                console.error("Error writing file:", err);
            } else {
                console.log("File written successfully");
            }
        });
    })
    .catch((err) => {
        console.error("Error reading files:", err);
    });