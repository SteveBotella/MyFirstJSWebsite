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
        console.log(response)        
        for (let agentNum = 0; agentNum < response.data.length; agentNum++){ 
            let agent = new Object();
            agent = {
            name: response.data[agentNum].displayName,
            icon: response.data[agentNum].displayIcon,
            description: response.data[agentNum].description,
            id: agentNum,
        }             
            console.log(agent); 
            
            $("#valAgents").append(agent.name);
            let agentIcon = document.createElement("img");
            agentIcon.setAttribute("src", agent.icon);            
            $("#valAgents").append(agentIcon);
            $("#valAgents").append(agent.description);            
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