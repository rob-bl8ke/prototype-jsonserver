var jsonConcat = require('json-concat');
jsonConcat({
src: 'data/data',
dest: 'data/db.json',
}, function(json){
console.log(json);
});