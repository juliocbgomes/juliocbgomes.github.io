$(function(){
	expandeSkill();
	arrowAndBody();
	animaScroll();
});

/*exibe seta, atribui o valor de href e altera cor do body*/
function arrowAndBody(){
	$(document).on('scroll', function() {
		var next, prev;
		if($(this).scrollTop() > 125){			
			$('.container-menu, .back-fixed').addClass('translateY');
		}else{
			$('.container-menu, .back-fixed').removeClass('translateY');			
		}
		if($(this).scrollTop() > 80 && $(this).scrollTop() < 600){		
				$('.seta-cima').removeClass('show-seta').addClass('hide-seta');			
				next = '#skills';
				$('body').removeClass('background-purple background-orange').addClass('background-blue');
				$(".menu-sobre").focus();				
			}	
		if($(this).scrollTop()>= 601 && $(this).scrollTop() < 1200){				
			$('.seta-cima, .seta-baixo').removeClass('hide-seta').addClass('show-seta');			
			prev = '#sobre';
			next = '#contatos';
			$('body').removeClass('background-blue background-orange').addClass('background-purple');			
			$(".menu-skills").focus();
		}
		if($(this).scrollTop()>= 1201){    		
			$('.seta-baixo').removeClass('show-seta').addClass('hide-seta');			
			prev = '#skills';
			$('body').removeClass('background-purple background-blue').addClass('background-orange');			
			$(".menu-contato").focus();
		}
		$('.seta-cima').attr('href', prev);
		$('.seta-baixo').attr('href', next);	
	});
}
/*animação scroll*/
function animaScroll(){
	$(".seta-cima, .seta-baixo, a[href$='#sobre'], a[href$='#skills'], a[href$='#contatos']").on('click', function(){
		var hrefVal = $(this).attr('href');	
		$('html, body').stop().animate({scrollTop: $(hrefVal).position().top}, 500);
	});
}

/*expande skills*/
function expandeSkill(){
	$('.seta-skill').on('click', function(){
		if($(this).siblings('ul').hasClass('show-ul')){
			$(this).siblings('ul').removeClass('show-ul');
			$(this).removeClass('rotate-seta');
		}else{
			$('ul').removeClass('show-ul');
			$('.seta-skill').removeClass('rotate-seta');
			$(this).siblings('ul').addClass('show-ul');
			$(this).addClass('rotate-seta');
		}		
	});
}