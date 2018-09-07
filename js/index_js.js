$(window).ready(function () {
	$('.thread-block').fadeIn('slow');
	//	setTimeout ("$('#threads-wrap').show('drop');",300);

});

$(document).ready(function () {
    
    
    window.onresize = function(event)  {
        if ( $(window).width() > 536) {
            $('#navblock').height('auto'); 
        }
    };
    
    

	//Анимация подменю                    
    var elem = document.getElementsByClassName('menu-item');
    var navv = document.getElementsByTagName('nav');
    var miniSubStat = new Boolean(false);
    miniSubStat = false;

    
    
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener('mouseenter', showSub);
        elem[i].addEventListener('mouseleave', hideSub);
        elem[i].addEventListener('click', miniSub);
    }

    function showSub() {
       if ( $(window).width() > 535) {
        if (this.children.length > 1) {
            this.children[1].style.height="40px";
            this.children[1].style.opacity="1";
            this.children[1].style.overflow="visible";
        }
       }
    }

    function hideSub() {
       if ( $(window).width() > 535) { 
        if (this.children.length > 1){
            this.children[1].style.height="0";
            this.children[1].style.opacity="0";
            this.children[1].style.overflow="hidden";
        }
       }
    }
    
    function miniSub() {
         if ( $(window).width() <= 535) {
                if (!miniSubStat) {
                this.children[1].style.height="40px";
                this.children[1].style.opacity="1";
                this.children[1].style.overflow="visible";
                miniSubStat=true;
                $('#navblock').height(490);    
             } else { 
                this.children[1].style.height="0";
                this.children[1].style.opacity="0";
                this.children[1].style.overflow="hidden";
                miniSubStat=false;
                $('#navblock').height('auto');
             }
            }  
        }
    
       
});