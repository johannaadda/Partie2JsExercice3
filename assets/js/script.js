function extend(){
  // je stock dans ma variable imgWidth la valeur de la largeur de mon image
  var imgWidth = document.getElementById('logo').clientWidth;
  console.log(imgWidth);
  // j'attribue une nouvelle valeur à la width de mon image en ajoutant 20px à partir de la taille récupérée dans imgWidth
  document.getElementById('logo').style.width = (imgWidth + 50) + 'px';
}
