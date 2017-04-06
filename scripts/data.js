'use strict';

var gsjson = require('google-spreadsheet-to-json');

const spreadsheetId = '19u2SdKqF2bhGOj75GQoGi0jsD9DWBf_Xieb2Uy9ZosA';
const path = './src/data/';
const fileType = '.json';
const sheets = [
  'characters',
  'char_titles',
  'char_factions',
  'titles',
  'factions',
  'entrances',
  'exits',
  'methods'
]

const createData = function(sheet) {
  console.log('Get JSON data for '+sheet+'...');

  gsjson({
      spreadsheetId: spreadsheetId,
      worksheet: sheet,
      beautify: true
  })
  .then(function(result) {
      console.log('Loaded '+sheet+' sheet');
      console.log('Creating '+path+sheet+fileType);

      var fs = require('fs');
      fs.writeFile(path+sheet+fileType, JSON.stringify(result), function(err) {
          if(err) {
              return console.log(err);
          }

          console.log('Finsihed '+sheet+'!');
      });
  })
  .catch(function(err) {
      console.log(err.message);
      console.log(err.stack);
  });
}

console.log('Starting...');
for ( var i=0,n=sheets.length; i<n; i++ ) {
  createData(sheets[i]);
}
