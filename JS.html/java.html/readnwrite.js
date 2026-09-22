const fs = require('fs');

//Create

fs.writeFile('example.txt', 'Hi,I m Peter Parker ', (err) => {
    if (err) throw err;
    console.log('File created!');

//Read

    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);
    });
});   

fs.writeFile('example.txt', 'this is the updated content', (err) => {
    if (err) throw err;
    console.log('File overwritten (updated)!');
});
    fs.appendFile('example.txt', '\nThis line was added', (err) => {
        if (err) throw err;
        console.log('file updated (appended)!');
    });

    fs.link('example.txt', 'example_link.txt', (err) => {
        if (err) throw err;
        console.log('file deleted!');
    });