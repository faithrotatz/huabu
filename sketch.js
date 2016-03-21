var colors=['#996666','#003366','#ff6700','#0099FF','#CC0033','#FF9966'];
var myapp=angular.module("sketch",[]);
    myapp.controller('huabu', ['$scope', function($scope){
     $scope.erasercover=2;
     $scope.canvaswh={w:550,h:550}
     $scope.tool={
     '画线':'line',
     '画圆':'arc',
     '矩形':'rect',
     '橡皮':'eraser',
     '铅笔':'pencil',
     } 
     
     $scope.color=['#996666','#003366','#006699','#0099FF','#CC0033','#FF9966'];
     $scope.moshi={"fillStyle":"#000",
      "strokeStyle":'black','fill':"",'stroke':'stroke'}
     $scope.setmoshi=function(i){
     if(i=="stroke"){
     $scope.moshi[i]=i;
     $scope.moshi['fill']="";
     }else{
     $scope.moshi[i]=i;
     $scope.moshi['stroke']="";

     }
     }

     $scope.save=function(){
location.href=(canvas.toDataURL().replace("data:image/png","data:stream/octet"))

     }
     $scope.defaulttool="line";
     $scope.settool=function(a){
     $scope.defaulttool=a;
      
     }
     $scope.setcolor=function(i){
     if($scope.moshi['fill']){
     $scope.moshi.fillStyle=colors[i];

     }else{
     $scope.moshi.strokeStyle=colors[i];}
     
     }
     var canvas=document.querySelector("#can");
      ctx=canvas.getContext("2d");
     var current;
    $scope.clear=function(){
  
     ctx.clearRect(0,0,600,600) 
     }
     var obj={
     line:function(e){
          canvas.onmousemove=function(ev){
          ctx.clearRect(0,0,$scope.canvaswh.w,$scope.canvaswh.h);
          if(current){
          ctx.putImageData(current,0,0)
                    }
           ctx.beginPath();
           ctx.moveTo(e.offsetX,e.offsetY);
           ctx.lineTo(ev.offsetX,ev.offsetY);
            ctx.stroke();
             
                                     } 
                     },
     arc:function(e){
         canvas.onmousemove=function(ev){
         ctx.clearRect(0,0,$scope.canvaswh.w,$scope.canvaswh.h);
         if(current){
         ctx.putImageData(current,0,0)
         }
         ctx.beginPath();
         if($scope.moshi.fill){
         ctx.arc(e.offsetX,e.offsetY,Math.abs(ev.offsetX-e.offsetX),0,Math.PI*2)
         ctx.fill();}else{
         ctx.arc(e.offsetX,e.offsetY,Math.abs(ev.offsetX-e.offsetX),0,Math.PI*2)
        
         ctx.stroke();
         }
         

                                     }
                    },
     rect:function(e){
          canvas.onmousemove=function(ev){
          ctx.clearRect(0,0,$scope.canvaswh.w,$scope.canvaswh.h);
          if(current){
          ctx.putImageData(current,0,0)
           }
           if($scope.moshi.fill){
          ctx.fillRect(e.offsetX,e.offsetY,ev.offsetX-e.offsetX,ev.offsetY-e.offsetY)
           }else{
          ctx.strokeRect(e.offsetX,e.offsetY,ev.offsetX-e.offsetX,ev.offsetY-e.offsetY)

           }
          }



     },
     eraser:function(e){
      canvas.onmousemove=function(ev){
      console.log($scope.erasercover)
      ctx.clearRect(ev.offsetX,ev.offsetY,20,20)
      }
     },
     pencil:function(e){
        ctx.beginPath();
        ctx.moveTo(e.offsetX,e.offsetY)
       canvas.onmousemove=function(ev){
          ctx.clearRect(0,0,$scope.canvaswh.w,$scope.canvaswh.h);
          if(current){
          ctx.putImageData(current,0,0)
           }

        ctx.lineTo(ev.offsetX,ev.offsetY);
        ctx.stroke();

                                      }
     }
            }
     canvas.onmousedown=function(e){

     ctx.fillStyle=$scope.moshi.fillStyle;
      ctx.strokeStyle=$scope.moshi.strokeStyle;
     obj[$scope.defaulttool](e);

     }
     
    document.onmouseup=function(){
      canvas.onmousemove=null;
      current=ctx.getImageData(0,0,$scope.canvaswh.w,$scope.canvaswh.h)
     }
     input=document.querySelector("input")
    








    }])
     window.onload=function(){
     var li=document.querySelector(".yanliao");
     var lis=li.firstElementChild.children;
     for (var i = 0; i < lis.length; i++) {
       lis[i].style.background=colors[i];
     };
     }
    


    
 









	



