const testFolder = './';
const fs = require('fs');

let count = 0;

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
	if(strEndsWith(file, ".svg"))
	{
		count++;
		console.log(`(${count}, 1, 50),`)
	}
  })
});

/*
for(let i = 1; i < 271; i++) {
	console.log(`AVATAR_${i}: "avatars/${i}.svg",`)
}
*/

function strEndsWith(str, suffix) {
    return str.match(suffix+"$")==suffix;
}