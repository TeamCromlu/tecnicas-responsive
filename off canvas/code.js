var $buttonShowMenu =$('#showMenu');
var $buttonHideMenu =$('#hideMenu');
var $Menu=$('#Menu');
// Los elementos con $ tienen referencua a DOM

$buttonShowMenu.on("click",ShowMenu);
function ShowMenu(){
	$Menu.addClass('is-active');
	$buttonHideMenu.addClass('is-active');
	$buttonShowMenu.removeClass('is-active');
}
$buttonHideMenu.on("click",HideMenu);
function HideMenu(){
	$Menu.removeClass('is-active');
	$buttonShowMenu.addClass('is-active');
	$buttonHideMenu.removeClass('is-active');
}

// con js puro
// $Menu.classList.add('is-active');
// $Menu.classList.remove('is-active')