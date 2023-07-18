$(document).ready(function(){
	sReveal();
});


function sReveal()
{
	window.sr = ScrollReveal({reset:false});

	sr.reveal('.revealTop', {
        delay: 100,
		duration: 1500,
		origin: 'top',
		distance: '30px',
    });	
	
	sr.reveal('.revealRight', {
		duration: 1500,
        delay: 100,
		origin: 'right',
		distance: '30px',
    });	
	
	sr.reveal('.revealLeft', {
		duration: 1500,
        delay: 100,
		origin: 'left',
		distance: '30px',
    });
	
	sr.reveal('.revealBottom', {
		duration: 1500,
        delay: 100,
		origin: 'bottom',
		distance: '30px',
    });	
}


	




