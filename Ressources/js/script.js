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
    // Function to add agent object as a div
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
            let newTitle = document.createElement("text");
            newTitle.setAttribute("class", "agentTitle");
            newTitle.append(agent.name);
            newDiv.append(newTitle);
            newDiv.append(agentIcon);
            newDiv.append(agent.description);
    
            // Set class & unique id for the new created div
            newDiv.setAttribute("class", "DivAgent");
            newDiv.setAttribute("id", "Div" + agentNum);
    
            // Append the new div to the parent valAgents div
            $("#valAPI").append(newDiv);                                   
        }
    }

    // Function to add weapon object as a div
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
            newDiv.setAttribute("class", "DivWeapon");
            newDiv.setAttribute("id", "Div" + agentNum);
    
            // Append the new div to the parent valAgents div
            $("#valAPI").append(newDiv);                                   
        }
    }

    // Function to add map object as a div
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
            newDiv.setAttribute("class", "DivMap");
            newDiv.setAttribute("id", "Div" + agentNum);
    
            // Append the new div to the parent valAgents div
            $("#valAPI").append(newDiv);                                   
        }
    }

    // Set the request parameters (Can change the API url)
    function onPageLoad() {
        requestApi(
            "https://valorant-api.com/v1/agents",
            'GET', 
            (res) =>  addAgent(res),
            (error) =>  alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error))
        );
    }

    // Clear the api div
    function clearChildren() {
        let remove = document.getElementById('valAPI');
        remove.innerHTML = '';   
    }

    // --- EVENTS ---
    // Button display Agents
    $('#displayAgents').click(event => {
        clearChildren();
        requestApi(
            "https://valorant-api.com/v1/agents",
            'GET', 
            (res) =>  addAgent(res),
            (error) =>  alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error))
        )
    });

    // Button display Weapons
    $('#displayWeapons').click(event => {
        clearChildren();
        requestApi(
            "https://valorant-api.com/v1/weapons",
            'GET', 
            (res) =>  addWeapon(res),
            (error) =>  alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error))
        )
    });

    // Button display Maps
    $('#displayMaps').click(event => {
        clearChildren();
        requestApi(
            "https://valorant-api.com/v1/maps",
            'GET', 
            (res) =>  addMap(res),
            (error) =>  alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error))
        )
    });

    // Mouse hovering riotLogo
    let riotLogo = document.getElementById("riotLogo");
    riotLogo.onmouseover = function() {riotLogo.src = "Ressources/images/riotLogo.png";}
    riotLogo.onmouseout = function() {riotLogo.src = "Ressources/images/riotFistLogo.png";}
    
    // Click on valorantLogo
    $('#valorantLogo').click(function() {
        window.open('https://playvalorant.com/fr-fr/','_blank');
    });

    onPageLoad();

});