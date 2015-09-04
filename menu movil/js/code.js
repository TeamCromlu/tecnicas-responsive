var $buttonShow= document.getElementById('b_show');
var $buttonHide= document.getElementById('b_hide');
var $Menu= document.getElementById('Menu');

// body.on('nombre del evento', manejadorDelEvento);
$buttonShow.addEventListener("click",ShowMenu);
function ShowMenu(){
	$Menu.classList.add('is-active');
	$buttonHide.classList.add('is-active');
	$buttonShow.classList.remove('is-active');
}
$buttonHide.addEventListener("click",HideMenu);
function HideMenu(){
	$Menu.classList.remove('is-active');
	$buttonShow.classList.add('is-active');
	$buttonHide.classList.remove('is-active');
}
var $body= document.querySelector('body');
var body= new Hammer($body);
body.on('panright',ShowMenu);
body.on('panleft',HideMenu);
