const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const encodingWord = 'password';
const port = 8000;


app.get('/hello', (req, res) => {
  res.send('Hello');
})

app.get('/encode/:password', (req, res) => {
  res.send(Vigenere.Cipher(encodingWord).crypt(req.params.password));
})
app.get('/decode/:encodedPassword', (req, res) => {
  res.send(Vigenere.Decipher(encodingWord).crypt(req.params.encodedPassword));
})

app.listen(port);