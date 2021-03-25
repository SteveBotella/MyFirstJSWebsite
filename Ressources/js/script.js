// Feed 
/*
$(document).ready(function(){
    $.ajax({
        // Url de la requête
        url: "https://valorant-api.com/v1/agents",

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
*/
$(document).ready(function(){
    $.get("https://valorant-api.com/v1/agents", function(response){
        $("div#VAL-CONTENT-V1").append(response);
        console.log(response);
    });
});