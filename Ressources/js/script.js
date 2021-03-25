// Feed
$(document).ready(function(){
    $.ajax({
        // Url de la requête
        url: "https://eu.api.riotgames.com/val/content/v1/contents?api_key=RGAPI-d9e443f2-a2b2-4390-956f-1a12c262c8e3",

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