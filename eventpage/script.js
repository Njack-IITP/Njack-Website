$(function(){
var o1=$('.overlayp1'),o2=$('.overlayp2'),o3=$('.overlayp3'),o4=$('.overlayp4'),r1=$('.revealp1'),r2=$('.revealp2'),r3=$('.revealp3'),r4=$('.revealp4'),p1=$('.pushp1'),p2=$('.pushp2'),p3=$('.pushp3'),p4=$('.pushp4'),ob4=$('.overlay4'),ob3=$('.overlay3'),ob2=$('.overlay2'),ob1=$('.overlay1'),rb1=$('.reveal1'),rb2=$('.reveal2'),rb3=$('.reveal3'),rb4=$('.reveal4'),pb1=$('.push1'),pb2=$('.push2'),pb3=$('.push3'),pb4=$('.push4'),m1=$('.main1'),m2=$('.main2'),m3=$('.main3'),m4=$('.main4'),panel1=$('.panel1'),panel2=$('.panel2'),panel3=$('.panel3'),panel4=$('.panel4');
  panel1.css('min-height',m1.outerHeight());
  panel2.css('min-height',m2.outerHeight());
  panel3.css('min-height',m3.outerHeight());
  panel4.css('min-height',m4.outerHeight());
  
  panel1.css('height',m1.outerHeight());
  panel2.css('height',m2.outerHeight());
  panel3.css('height',m3.outerHeight());
  panel4.css('height',m4.outerHeight());
  
ob1.click(function(){
  o1.toggleClass('active');
});
ob2.click(function(){
  o2.toggleClass('active');
});
ob3.click(function(){
  o3.toggleClass('active');
});
ob4.click(function(){
  o4.toggleClass('active');
});


rb1.click(function(){
  m1.toggleClass('ractive');
});

rb2.click(function(){
  m2.toggleClass('ractive');
});

rb3.click(function(){
  m3.toggleClass('ractive');
});

rb4.click(function(){
  m4.toggleClass('ractive');
});

  pb1.click(function(){
  
  p1.toggleClass('active');m1.toggleClass('pactive');
});

  pb2.click(function(){
  m2.toggleClass('pactive');
  p2.toggleClass('active');
});

  pb3.click(function(){
  m3.toggleClass('pactive');
  p3.toggleClass('active');
});

  pb4.click(function(){
  m4.toggleClass('pactive');
  p4.toggleClass('active');
});

  $('.closeb').click(function(){
    o1.removeClass('active');o2.removeClass('active');o3.removeClass('active');o4.removeClass('active');
    p4.removeClass('active');p3.removeClass('active');p2.removeClass('active');p1.removeClass('active'); 
    m4.removeClass('pactive').removeClass('ractive');m3.removeClass('pactive').removeClass('ractive');m2.removeClass('pactive').removeClass('ractive');m1.removeClass('pactive').removeClass('ractive');
  });
});




$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});




