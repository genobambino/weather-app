
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(3000, function(){
    console.log('Server is running on port 3000');
});