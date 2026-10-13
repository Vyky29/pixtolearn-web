(function(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var imgs = document.querySelectorAll(".present-front .shot-screen img, .shop-ipad-front img");
  if(!imgs.length) return;
  var boards=[
    ["assets/screens/focus/01.jpg?v=focus1","Brushing teeth, now, next and then"],
    ["assets/screens/focus/02.jpg?v=focus1","Swimming, now, next and then"],
    ["assets/screens/focus/03.jpg?v=focus1","Physical activity, now, next and then"],
    ["assets/screens/focus/04.jpg?v=focus1","Washing hands, now, next and then"],
    ["assets/screens/focus/05.jpg?v=focus1","Swimming, now, next and then"],
    ["assets/screens/focus/06.jpg?v=focus1","Physical activity, now, next and then"],
    ["assets/screens/focus/07.jpg?v=focus1","Preparing cereal, now, next and then"],
    ["assets/screens/focus/08.jpg?v=focus1","Swimming, now, next and then"],
    ["assets/screens/focus/09.jpg?v=focus1","Physical activity, now, next and then"],
    ["assets/screens/focus/10.jpg?v=focus1","Making a sandwich, now, next and then"],
    ["assets/screens/focus/11.jpg?v=focus1","Swimming, now, next and then"],
    ["assets/screens/focus/12.jpg?v=focus1","Physical activity, now, next and then"],
    ["assets/screens/focus/13.jpg?v=focus1","Making toast, now, next and then"],
    ["assets/screens/focus/14.jpg?v=focus1","Swimming, now, next and then"],
    ["assets/screens/focus/15.jpg?v=focus1","Physical activity, now, next and then"],
    ["assets/screens/focus/16.jpg?v=focus1","Shower, now, next and then"],
    ["assets/screens/focus/17.jpg?v=focus1","Going to the zoo, now, next and then"],
    ["assets/screens/focus/18.jpg?v=focus1","Going by bus, now, next and then"],
    ["assets/screens/focus/19.jpg?v=focus1","At the supermarket, now, next and then"],
    ["assets/screens/focus/20.jpg?v=focus1","Doing the laundry, now, next and then"],
  ];
  var index=0;
  window.setInterval(function(){
    index=(index+1)%boards.length;
    imgs.forEach(function(img){ img.style.opacity="0"; });
    window.setTimeout(function(){
      imgs.forEach(function(img){
        img.src=boards[index][0];
        img.alt=boards[index][1];
        img.style.opacity="1";
      });
    },320);
  },3000);
})();
