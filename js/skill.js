$(function () {	
	animaSkill();
	fechaSkill();
	expandeSkill();
});
/*anima skills*/
function animaSkill(){
	$('.skill').on('click', function(){
		$('.bar1, .bar2, .bar3').addClass('animacao-skills');		
		$('.bar1').addClass('rocket');
		$('.bar2').addClass('airplane');
		$('.bar3').addClass('paper-plane');
		setTimeout(function(){$('.sobre').addClass('recolhe-items');}, 1500);
		setTimeout(function(){$('.skill').addClass('recolhe-items');}, 1700);
		setTimeout(function(){$('.contato').addClass('recolhe-items');}, 1900);
		
		setTimeout(function(){$('#skill').addClass('show-content').removeClass('return-content');}, 2000);
	});
}
/*fecha skills*/
function fechaSkill(){
	$('.fechar-skill').on('click', function(){					
		$('#skill').addClass('return-content');
		$('.icon-skills').removeClass('animacao-skills');
      
        $('.bar1').removeClass('rocket');
		$('.bar2').removeClass('airplane');
		$('.bar3').removeClass('paper-plane');
		
		$('.sobre').removeClass('recolhe-items').addClass('return-recolhe-items');
		setTimeout(function(){$('.skill').removeClass('recolhe-items').addClass('return-recolhe-items');}, 200);
		setTimeout(function(){$('.contato').removeClass('recolhe-items').addClass('return-recolhe-items');}, 400);
		
		setTimeout(function(){$('.items-painel').removeClass('return-recolhe-items');}, 1500);
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