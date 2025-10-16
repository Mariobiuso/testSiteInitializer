/*
$(".iss-nav-link").on("click", function(){
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(""+hash+"").offset().top - 150
		}, 1000);

});



$(".iss-nav-link").on("click", function(event) {
    event.preventDefault(); // Previeni l'azione predefinita del link
 
    var hash = this.hash;
    var currentUrl = window.location.href; // Ottieni l'URL corrente della pagina
 
    // Verifica se l'URL corrente gia' contiene "/home"
    if (currentUrl.indexOf("/home") === -1) {
        var newUrl = currentUrl + "/home"; // Aggiungi "/home" all'URL corrente
    } else {
        var newUrl = currentUrl; // Mantieni l'URL corrente se "/home" e' gia' presente
    }
 
    // Aggiungi "/home" all'URL e scorri fino all'elemento
    $('html, body').animate({
        scrollTop: $(hash).offset().top - 150
    }, 1000); 
		
 
    // Aggiorna l'URL senza ricaricare la pagina
    window.history.pushState({}, '', newUrl);
});
*/

$(".iss-nav-link").on("click", function(event) {
    event.preventDefault(); // Previeni l'azione predefinita del link
 
    var hash = this.hash;
    var target = $(hash);
 
    if (target.length) { // Controlla se l'elemento target esiste
        var targetOffset = target.offset().top - 150;
 
        console.log("Scrolling to:", targetOffset); // Aggiungi un log per il debug
 
        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000);
    } else {
        console.error("Element not found:", hash); // Log se l'elemento non esiste
    }
});
