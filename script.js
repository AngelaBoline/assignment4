var Churchill = {
  'name': 'Winston Churchill',
  'year': '1940',
  'bce': 'false'
};

var Ghandi = {
  'name': 'Ghandi',
  'year': '1942',
  'bce': 'false'
};

var Demosthenes = {
  'name': 'Demosthenes',
  'year': '342 B.C.E.',
  'bce': 'true'
};

var speeches = ['Churchill', 'Ghandi', 'Demosthenes'];

//code here shows difference in years between Churchhill's and Ghandi's speeches
var difference = (1942-1940);

console.log("Ghandi's speech and Churchill's speech are " + [difference] + " years apart.");

document.getElementById('BtnDonate').addEventListener('click', function() {
  console.log("There are three speeches on the page");
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function() {
  console.log("This speech was written by Winston Churchill in 1940. It is false that this year is BCE");
  //Code in here executes when the user clicks the "Churchill" button.

});

document.getElementById('BtnGhandi').addEventListener('click', function() {
  console.log("This speech was written by Ghandi in 1942. It is false that this year is B.C.E.");
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function() {
  console.log("This speech was written by Demosthenes in 342. It is true that this year is B.C.E.");
  //Code in here executes when the user clicks the "Churchill" button.
});

