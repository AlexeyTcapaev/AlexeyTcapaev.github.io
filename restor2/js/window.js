$(document).ready(function(){
    function rgbToHex(R,G,B) 
    {
        return toHex(R)+toHex(G)+toHex(B)
    }
    function toHex(n) 
    {
      n = parseInt(n,10);
      if (isNaN(n)) return "00";
      n = Math.max(0,Math.min(n,255));
      return "0123456789ABCDEF".charAt((n-n%16)/16)  + "0123456789ABCDEF".charAt(n%16);
    }
    
     var var_i1 = document.getElementById('img_t'),
        ctx1     = var_i1.getContext('2d'),
        pic1     = new Image();
            if(screen.width==1366)
                {
                     var_i1.width = 1300;
                     var_i1.height =  650;
                    pic1.src = '/restor2/img-main/window/sobor3_1300_650.png';
                }
     if(screen.width==1920)
         {
          var_i1.width = 1900;
          var_i1.height =  960;
          pic1.src = '/restor2/img-main/window/sobor3.png';
         }
    pic1.onload = function ()
    {
        ctx1.drawImage(pic1, 0, 0);  
    }
     var var_i2 = document.getElementById('img_w'),
        ctx2     = var_i2.getContext('2d'),
        pic2     = new Image();
    if(screen.width==1366)
                {
                     var_i2.width = 1300;
                     var_i2.height =  650;
                    pic2.src = '/restor2/img-main/window/sobor2_1300_650.png';
                }
    
    if(screen.width==1920)
        {
          var_i2.width = 1900;
          var_i2.height =  960;
          pic2.src = '/restor2/img-main/window/sobor2.png';
        }
    pic2.onload = function ()
    {
        ctx2.drawImage(pic2, 0, 0);  
    }
   /*
   var canvas = document.getElementById('img_w').getContext('2d'); 
    var canvas1 = document.getElementById('img_t').getContext('2d');
   
    // создание изображения
    var img = new Image();
    img.src = 'img-main/window/sobor2.png';
      document.getElementById("img_t").width=img.width;
        document.getElementById("img_t").height=img.height;
    console.log(document.getElementById("img_t").width);
      var img1 = new Image();
        img1.src = 'img-main/window/sobor3.png';
         document.getElementById("img_w").width=img1.width;
        document.getElementById("img_w").height=img1.height;
       
    
    console.log("w1-"+document.getElementById("img_t").width);
     console.log("h1-"+document.getElementById("img_t").height);
     console.log("w2-"+document.getElementById("img_w").width);
     console.log("h2-"+document.getElementById("img_w").height);
    // копируем изображение в canvas
    $(img).load(function(){
        
      canvas.drawImage(img,0,0);
      
    });
     $(img1).load(function(){
        
      canvas1.drawImage(img1,0,0);
       
     
    }); 
     */

    $('#img_t').click(function(event){
      // получение координат
     var x = event.offsetX==undefined?event.layerX:event.offsetX;
      var y = event.offsetY==undefined?event.layerY:event.offsetY;
       $('#x input').val(x);
      $('#y input').val(y);
        console.log(x+"+"+y);
      var img_data = ctx1.getImageData(x,y, 1, 1).data;
      var img_data1 = ctx2.getImageData(x,y, 1, 1).data;
       
      var R = img_data[0];
      var G = img_data[1];
      var B = img_data[2];  var rgb = R + ',' + G + ',' + B;
      var R1 = img_data1[0];
      var G1 = img_data1[1];
      var B1 = img_data1[2];  var rgb1 = R1 + ',' + G1 + ',' + B1;
      // конвертируем из RGB в HEX
      var hex = rgbToHex(R,G,B);
        var hex1 = rgbToHex(R1,G1,B1);
         console.log("1-"+R+"-"+G+"-"+B);
        console.log("2-"+R1+"-"+G1+"-"+B1);
      // показываем значения
      $('#rgb input').val(rgb);
      $('#hex input').val('#' + hex);
         $('#rgb1 input').val(rgb1);
      $('#hex1 input').val('#' + hex1);
        if(rgb==rgb1)
           {
              
                document.getElementById("img_t").style.opacity="0.7";
               document.getElementById("info_block").style.display="block";
                
           }
        if(rgb!=rgb1)
           {
                document.getElementById("img_t").style.opacity="1";
               document.getElementById("info_block").style.display="none";
                
           }
    });  
});
    