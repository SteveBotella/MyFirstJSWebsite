// Feed 

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
        console.log(response);
        let dataReturn = response.data;
        $("#valAgents").html(dataReturn);
    })
    
    .fail(function(error){
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })
    /*
    .always(function(){
        alert("Requête effectuée");
    });
    */   
});

function displayName(dataReturn) {
    dataReturn[0].displayName;
}