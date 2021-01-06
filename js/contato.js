$(function () {	
	expandeWhats();
	animaItems();
	fechaContato();
	contraste();
	expandeHeader()
});
/*expande container whatsapp & tel*/
function expandeWhats(){
	$(".whatsapp").on('click', function () {	
		$('.whatsapp').toggleClass('expandeContainerTel');
		$('.tel').toggleClass('expandeTel');		
		$('a.redes-sociais').toggleClass('minimiza-redes-sociais');		
	});
	
	$(".whatsapp").focusout(function(){
		$('.whatsapp').removeClass('expandeContainerTel');
		$('.tel').removeClass('expandeTel');
		$('a.redes-sociais').removeClass('minimiza-redes-sociais');
	})
}
/*animação contato*/
function animaItems(){
	$('.contato').on('click', function(){
		
		$('.contato').addClass('animacao-contato');
		$('.skill').addClass('animacao-skill');
		$('.sobre').addClass('animacao-sobre');
		
		setTimeout(function(){$('#contato').addClass('show-content').removeClass('return-content');}, 1700);
		
		setTimeout(function(){
			$('.facebook').addClass('move-face');
			$('.linkedin').addClass('move-linkd');
			$('.whatsapp').addClass('move-whats');
		}, 2500);
		
		setTimeout(function(){
			$('.face').addClass('explode-face');
			$('.linkd').addClass('explode-linkd');
			$('.telefone').addClass('explode-telefone');
		}, 2500);		
	});
}
/*fechar contato*/
function fechaContato(){
	$('.fechar-contato').on('click', function(){
		
		$('#contato').addClass('return-content');
		$('.contato').removeClass('animacao-contato').addClass('return-contato')
		$('.skill').removeClass('animacao-skill').addClass('return-skill');
		$('.sobre').removeClass('animacao-sobre').addClass('return-sobre');
		
		$('.facebook').removeClass('move-face');
		$('.linkedin').removeClass('move-linkd');
		$('.whatsapp').removeClass('move-whats');
		
		setTimeout(function(){
			$('.face').removeClass('explode-face');
			$('.linkd').removeClass('explode-linkd');
			$('.telefone').removeClass('explode-telefone');
		}, 1000);
		
		setTimeout(function(){
			$('.contato').removeClass('return-contato');
			$('.skill').removeClass('return-skill');
			$('.sobre').removeClass('return-sobre');
		}, 2000);
	});
}
/*contraste*/
function contraste(){
	$('.contraste').on('click', function(){
		$(this).toggleClass('rotate-contraste');
		$('body').toggleClass('gradient-white color-white');
		$('.items-painel').toggleClass('black color-white');
		$('.txt-simple-version').toggleClass('color-white');		
		$('header').toggleClass('background-white');
		$('.icon-skills').toggleClass('background-white');
		$('.menu-header').toggleClass('background-color-black');
		$('.seta-skill').toggleClass('background-color-black');		
		$('.contatos').toggleClass('color-white-before');	
		$('.sobre-content, .content-item').toggleClass('contraste-contents');
		$('.fechar-contato, .fechar-skill, .fechar-sobre').toggleClass('color-white');
	});
}
/*expande header*/
function expandeHeader(){
	$('header').on('click', function(){	
		$('header').toggleClass('expande-header');
	});
	
	$("header a, header button").click(function(e) {
      e.stopPropagation();
   });
}
/*$('.items-painel').mouseover(function(){
	
	if($(this).hasClass('sobre')){
		$(this).children('.titulo-painel').text('SOBRE');
		$(this).toggleClass('anima-titulo');
	}	
	if($(this).hasClass('skill')){
		$(this).children('.titulo-painel').text('SKILL');
		$(this).toggleClass('anima-titulo');
	}
	if($(this).hasClass('contato')){
		$(this).children('.titulo-painel').text('CONTATO');
		$(this).toggleClass('anima-titulo');
	}
}).mouseout(function(){
	$(this).children('.titulo-painel').text('');
});*/