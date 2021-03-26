// Feed valAgents
$(document).ready(function(){
    function requestApi(url, method, onSuccess, onFail) {
        $.ajax({
            // Request Url
            url,
    
            // send methode (Request type)
            method,
    
            // answer format
            dataType : "json",
        })
    
        .done(function(response){
            onSuccess(response)
        })
        
        .fail(function(error){
            onFail(error);
        })
        /*
        .always(function(){
            alert("Requête effectuée");
        });
        */   
    }

    function addAgent(response) {
        for (let agentNum = 0; agentNum < response.data.length; agentNum++){
            // Create new div
            let newDiv = document.createElement("div");
            
            // Create object
            let agent = {
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
    }

    function addWeapon(response) {
        for (let agentNum = 0; agentNum < response.data.length; agentNum++){
            // Create new div
            let newDiv = document.createElement("div");
            
            // Create object
            let agent = {
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
    
            // Set class & unique id for the new created div
            newDiv.setAttribute("class", "DivAgent");
            newDiv.setAttribute("id", "Div" + agentNum);
    
            // Append the new div to the parent valAgents div
            $("#valAgents").append(newDiv);                                   
        }
    }

    function addMap(response) {
        for (let agentNum = 0; agentNum < response.data.length; agentNum++){
            // Create new div
            let newDiv = document.createElement("div");
            
            // Create object
            let agent = {
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
    
            // Set class & unique id for the new created div
            newDiv.setAttribute("class", "DivAgent");
            newDiv.setAttribute("id", "Div" + agentNum);
    
            // Append the new div to the parent valAgents div
            $("#valAgents").append(newDiv);                                   
        }
    }


    function onPageLoad() {
        requestApi(
            "https://valorant-api.com/v1/agents",
            'GET', 
            (res) =>  addAgent(res),
            (error) =>  alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error))
        );
    }

    function clearChildren() {
        let remove = document.getElementById('valAgents');
        remove.innerHTML = '';   
    }

    // --- EVENTS ---
    $('#displayAgents').click(event => {
        clearChildren();
        requestApi(
            "https://valorant-api.com/v1/agents",
            'GET', 
            (res) =>  addAgent(res),
            (error) =>  alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error))
        )
    });

    $('#displayWeapons').click(event => {
        clearChildren();
        requestApi(
            "https://valorant-api.com/v1/weapons",
            'GET', 
            (res) =>  addWeapon(res),
            (error) =>  alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error))
        )
    });

    $('#displayMaps').click(event => {
        clearChildren();
        requestApi(
            "https://valorant-api.com/v1/maps",
            'GET', 
            (res) =>  addMap(res),
            (error) =>  alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error))
        )
    });

    onPageLoad();

});