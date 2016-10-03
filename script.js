var Churchill = {
  'name': 'Churchill',
  'year': 1940,
  'bce':  false
};

var Ghandi = {
  'name': 'Ghandi',
  'year': 1942,
  'bce': false
};

var Demosthenes = {
  'name': 'Demosthenes',
  'year': '342 B.C.E.',
  'bce': 'true'
};

speeches = [Churchill, Ghandi, Demosthenes],

difference = speeches[1].year - speeches[0].year;
//code here shows difference in years between Churchhill's and Ghandi's speeches


document.getElementById('BtnDonate').addEventListener('click', function() {
  console.log("There are" + speeches.length + "speeches on the page");
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function() {
  console.log("This speech was written by " + speeches[0].name + " in " + speeches[0].year + " It is " + speeches[0].bce + " that this year is B.C.E.");
  //Code in here executes when the user clicks the "Churchill" button.

});

document.getElementById('BtnGhandi').addEventListener('click', function() {
  console.log("This speech was written by " + speeches[1].name + " in " + speeches[1].year + " It is " + speeches[1].bce + " that this year is B.C.E.");
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function() {
  
  console.log("This speech was written by " + speeches[2].name + " in " + speeches[2].year + " It is " + speeches[2].bce + " that this year is B.C.E.");
  //Code in here executes when the user clicks the "Demosthenes" button.
});

  console.log("Churchill's speech and Ghandi's speech are "  + difference + " years apart");
