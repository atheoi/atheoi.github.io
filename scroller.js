function goto(id, t){
		
    //animate to the div id.
    $(".img_scroll").animate({"left": -($(id).position().left)}, 600);
 
    // remove "active" class from all links inside #nav
    //$('#nav a').removeClass('active');
 
    // add active class to the current link
    //$(t).addClass('active');
}