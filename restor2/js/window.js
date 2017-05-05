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
   
   
    $('#img_t').mousemove(function(event){
    
        
      if($('contain').hover)
          {
      
      // получене координат
         
     var x = event.offsetX==undefined?event.layerX:event.offsetX;
      var y = event.offsetY==undefined?event.layerY:event.offsetY;
        console.log(x+"||"+y);
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
                console.log(rgb+"---"+rgb1);
        if(R==0&&G==0&&B==0)
            {
                  
                document.getElementById("img_t").style.opacity="1";
               document.getElementById("info_block").style.display="none";
               
            }
              else
                  {
                      
                
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
                  }
          }
            
    });
    
         
    
 
    
});
    