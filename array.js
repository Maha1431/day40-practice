var arr = [];
var i = 0;       
function generate() {
   if(arr.length < 25)
      arr[i++] = Math.floor(Math.random() * 6) + 1;
   else 
      i=0;
}