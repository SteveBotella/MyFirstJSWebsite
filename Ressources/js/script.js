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
        for (let agentNum = 0; agentNum < response.data.length; agentNum++){
            $("#valAgents").append(response.data[agentNum].displayName);
            let agentIcon = document.createElement("img");
            agentIcon.src = response.data[agentNum].displayIcon;
            agentIcon.setAttribute("src", agentIcon.src);            
            $("#valAgents").append(agentIcon);
            $("#valAgents").append(response.data[agentNum].description);
        }        
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
