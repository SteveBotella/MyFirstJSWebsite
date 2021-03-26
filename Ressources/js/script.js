// Feed valAgents
$(document).ready(function(){
    $.ajax({
        // Request Url
        url: "https://valorant-api.com/v1/agents",

        // send methode (Request type)
        method: "GET",

        // answer format
        dataType : "json",
    })

    .done(function(response){
        console.log(response)
        // For each valAgent        
        for (let agentNum = 0; agentNum < response.data.length; agentNum++){
            // Create new div
            let newDiv = document.createElement("div");
            
            // Create object
            let agent = new Object();
            agent = {
                name: response.data[agentNum].displayName,
                icon: response.data[agentNum].displayIcon,
                description: response.data[agentNum].description,
                id: agentNum,
            }             
            console.log(agent);
            // Create img element & set src from agent.icon (image url)
            let agentIcon = document.createElement("img");
            agentIcon.setAttribute("src", agent.icon);
            
            // Inside the new created div, append all valAgent informations
            newDiv.append(agent.name);
            newDiv.append(agentIcon);
            newDiv.append(agent.description);

            // Set class & unique id for the new created div
            newDiv.setAttribute("class", "DivAgent");
            newDiv.setAttribute("id", "Div" + agentNum);

            // Append the new div to the parent valAgents div
            $("#valAgents").append(newDiv);                                   
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