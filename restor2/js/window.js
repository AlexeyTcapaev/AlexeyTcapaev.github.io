$(document).ready(function(){
     document.getElementById("img_w").width=document.getElementById("img_t").width;
    document.getElementById("img_w").height=document.getElementById("img_t").height;
    console.log(document.getElementById("img_t").width);
     console.log(document.getElementById("img_t").height);
     console.log(document.getElementById("img_w").width);
     console.log(document.getElementById("img_w").height);
   var canvas = document.getElementById('img_w').getContext('2d');
   
    // создание изображения
    var img = new Image();
    img.src = 'img-main/window/sobor2.png';
    
      var img1 = new Image();
        img1.src = 'img-main/window/sobor3.png';
    // копируем изображение в canvas
    $(img).load(function(){
        
      canvas.drawImage(img,0,0);
    });
 
    function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
    function toHex(n) {
      n = parseInt(n,10);
      if (isNaN(n)) return "00";
      n = Math.max(0,Math.min(n,255));
      return "0123456789ABCDEF".charAt((n-n%16)/16)  + "0123456789ABCDEF".charAt(n%16);
    }
    $('#img_t').click(function(event){
      // получение координат
      var x = event.offsetX==undefined?event.layerX:event.offsetX;
      var y = event.offsetY==undefined?event.layerY:event.offsetY;
       $('#x input').val(x);
      $('#y input').val(y);
      var img_data = canvas.getImageData(x, y, 1, 1).data;
      var R = img_data[0];
      var G = img_data[1];
      var B = img_data[2];  var rgb = R + ',' + G + ',' + B;
      // конвертируем из RGB в HEX
      var hex = rgbToHex(R,G,B);
      // показываем значения
      $('#rgb input').val(rgb);
      $('#hex input').val('#' + hex);
    });

   document.getElementById('img_w').onclick = function(e) {
  var x = e.offsetX==undefined?e.layerX:e.offsetX;
  var y = e.offsetY==undefined?e.layerY:e.offsetY;
  
      
}
    
});