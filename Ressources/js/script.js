// Feed
$(document).ready(function(){
    $.ajax({
        // Url de la requête
        url: "https://api.coingecko.com/api/v3/ping",

        // Méthode d'envoi (type de requête)
        method: "GET",

        // Format de réponse attendu
        dataType : "json",
    })

    .done(function(response){
        let data = JSON.stringify(response);
        $("div#VAL-CONTENT-V1").append(data);
    })
    
    .fail(function(error){
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })
    
    .always(function(){
        alert("Requête effectuée");
    });   
});