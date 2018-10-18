$(document).ready(function() {
	/* header-menu*/
	$('.menu-btn').on('click', function() {
	$('.header__navigation').toggleClass('header__navigation-active');
	});

	$('.menu-btn__close').on('click', function() {
	$('.header__navigation').toggleClass('header__navigation-active');
	});
	/* !header-menu*/


	/* Modal login*/
	var $form_modal = $('.modal-window');
	$('.btn-login-main').on('click', function(){
		$('.modal-window').addClass('modal-window-vis');
	});


	/* close modal*/
	$('.modal-window').on('click', function(event){
		if( $(event.target).is($form_modal) || $(event.target).is('.close-form') ) {
			$form_modal.removeClass('modal-window-vis');
		}	
	});

	/* !modal login*/

	/* anchor */
		$('a[href^="#"]').on('click', function(event) {
    		event.preventDefault();
    	$('.header__navigation-active').removeClass('header__navigation-active');	
    	var sc = $(this).attr("href"),
        dn = $(sc).offset().top;

		$('html, body').animate({scrollTop: dn}, 1000);
	});
	/* !anchor */


	/* services__card click*/

	$('.services__card').on('click', function(){
		$('.modal-window').addClass('modal-window-vis');
	});

	/* !services__card click*/
});
