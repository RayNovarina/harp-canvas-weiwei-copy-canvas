/*
from: view-source:http://www.weiwei-tv.com/testO.php
 */

//==========================
// HTML index.html
<html>
<head>
</head>
<body style="background:white">
  6  <canvas id="wsk">

  </canvas>
    <img src="images/wwdl.png" />
  <script>
      var timeStamps = [];
      var dateNows = [];
    var c = document.getElementById('wsk');
    var ctx = c.getContext("2d"),
        img = new Image();
    img.onload = init;
    img.src = "images/wwdl.png";

    function formArr(w,h){
      var arr = [];
      for (i=0;i<w*h;i++){
        arr.push(i);
      }
      return arr;
    }

    function lToRArr(arr,w,h){
      var newArr=[];
      for (i=0;i<w;i++){
        for (j=0;j<h;j++){
          newArr.push(arr[j*w+i]);
        }
      }
      return newArr;
    }

    function Point(i,w){
      this.x = i%w;
      this.y = Math.floor(i/w);
    }

    function shuffleRect(arr,w,h,x,y,dx,dy){
      function swap(arr,x,y){
        var t=arr[x];
        arr[x]=arr[y];
        arr[y]=t;
      }

      function getIndex(i){
        var X = new Point(i,dx-x+1).x + x;
        var Y = new Point(i,dx-x+1).y + y;
        return w*Y + X;
      }

      var m = (dx-x+1)*(dy-y+1);
      while (m) {
        var i =  Math.floor(Math.random()*m--); //generate random number (0,m-1)
        swap(arr,getIndex(i),getIndex(m));
      }
    }

    function init(){
      var w = ctx.canvas.width = img.width;
      var h = ctx.canvas.height = img.height;
      //form Image Data
      ctx.drawImage(img,0,0,w,h);
      var imageData = ctx.getImageData(0,0,w,h);
      ctx.clearRect(0,0,w,h);

      //build output sequence
      var sequence = formArr(w,h);
      shuffleRect(sequence,w,h,0,0,w-1,h-1);

        var sec = 4;
          var t1 = Date.now()
          var t1 = Date.now()
          var memoryCtx = document.createElement('canvas').getContext('2d');
          document.body.appendChild(memoryCtx.canvas);
          memoryCtx.canvas.width = w;
          memoryCtx.canvas.height = h;
          memoryCtx.fillStyle = 'rgba(0,255,255,1)'
          var step = 0;
          function animate(){
            step++;
            // if (step > 20) debugger;
            var pointsPerFrame = Math.floor(w*h/sec/60)+1;
            for (i=0;i<Math.min(pointsPerFrame,sequence.length);i++){
              var j = sequence.pop();
              memoryCtx.fillRect(new Point(j,w).x,new Point(j,w).y,1,1);
            }
            ctx.clearRect(0,0,w,h);
            ctx.globalCompositeOperation = "source-over";
            ctx.drawImage(img,0,0,w,h);
            ctx.globalCompositeOperation = "destination-in";
            ctx.drawImage(memoryCtx.canvas,0,0,w,h);

            if(sequence.length){requestAnimationFrame(animate)}else{
              var t2 = Date.now();
              console.log(t2-t1);
            }
          }
          animate();
    }
  </script>
</body>
</html>
