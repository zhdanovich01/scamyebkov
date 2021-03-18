$(function() {
  var oldref;
  $.scrollify({
		section:".true",
		 interstitialSection:".footer_wrap",
    updateHash:false,
	setHeights: true,
	    before:function(i,panels) {
      if (oldref != false) {
        $(".pag").removeClass(oldref + '_active'); 
      }

      $(".pag .active").removeClass("active");

      var ref = panels[i].attr("data-section-name");
      oldref = ref;

      $(".pag").addClass(ref + '_active'); 

      $(".pag").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var pag = "<ul class=\"pag\">";
      var activeClass = "";
      $(".true").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pag += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pag += "</ul>";

      $(".home").append(pag);
      /*

      Tip: The two click events below are the same:

      $(".pag a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
      });

      */
      $(".pag a").on("click",$.scrollify.move); 
      $("nav a").on("click",$.scrollify.move);
	  $(".button a").on("click",$.scrollify.move); 
    }
  });
  $(".panel-title a").on("click",function(e) {
    e.preventDefault();
  });
  $('.collapse').on('shown.bs.collapse', function () {
    
    console.log('shown');
    $.scrollify.update();
  });


  $('.collapse').on('hidden.bs.collapse', function () {
    
    console.log('hidden');
    $.scrollify.update();
  });

});
   
		
$('.single_review').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

