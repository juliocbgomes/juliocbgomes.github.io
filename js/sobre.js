$(function () {	
	animaSobre();
	fechaSobre();
});
/*anima sobre*/
function animaSobre(){
	$('.sobre').on('click', function(){
		
		$('.sobre').addClass('guarda-sobre');
		$('.contato').addClass('guarda-contato');
		$('.skill').addClass('explode-items');
      
		setTimeout(function(){$('.sobre-content').removeClass('return-sobre-content').addClass('show-sobre-content');}, 2000);
		setTimeout(function(){$('.julio').addClass('anima-julio');}, 3000);
		
	});
}
/*fecha sobre*/
function fechaSobre(){
	$('.fechar-sobre').on('click', function(){					
		$('#sobre').addClass('return-sobre-content').removeClass('show-sobre-content');
      
        $('.sobre').addClass('return-guarda-sobre').removeClass('guarda-sobre');
        $('.contato').addClass('return-guarda-contato').removeClass('guarda-contato');
        $('.skill').addClass('return-explode-items').removeClass('explode-items');

        setTimeout(function(){
          $('.sobre').removeClass('return-guarda-sobre');
          $('.contato').removeClass('return-guarda-contato');
          $('.skill').removeClass('return-explode-items');
          $('.sobre-content').removeClass('return-sobre-content');
					$('.julio').removeClass('anima-julio');
        }, 2800);
	});
}