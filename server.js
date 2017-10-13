var express = require('express');
var multer  = require('multer')
var upload = multer()
var app = express();

app.get("/", function(request, response) {
  response.sendFile('views/index.html', {root: __dirname})
})

app.post('/upload', upload.single('file'), function (request, response, next) {
  console.log(request.file.size)
  response.send({ size: request.file.size })
  // response.send('test')
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
