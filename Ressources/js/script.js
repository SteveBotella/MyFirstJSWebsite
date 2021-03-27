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
            let newDescription = document.createElement("text");
            newDescription.setAttribute("class", "agentDescription");
            newDescription.append(agent.description);
            newDiv.append(newDescription);
    
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
            let newTitle = document.createElement("text");
            newTitle.setAttribute("class", "weaponTitle");
            newTitle.append(agent.name);
            newDiv.append(newTitle);
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
            let newTitle = document.createElement("text");
            newTitle.setAttribute("class", "agentTitle");
            newTitle.append(agent.name);
            newDiv.append(newTitle);           
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

    // Mouse hovering valorantLogo
    let valorantLogo = document.getElementById("valorantLogo");
    valorantLogo.onmouseover = function() {valorantLogo.src = "Ressources/images/valorantLogoRed.png";}
    valorantLogo.onmouseout = function() {valorantLogo.src = "Ressources/images/valorantLogo.png";}

    onPageLoad();

    // --- GAME ---
    let context, controller, playerCharacter, loop;

    context = document.querySelector("canvas").getContext("2d");

    context.canvas.height = 600;
    context.canvas.width = 1080;

    // Add image as BG to the scene
    let background = new Image();
    background.src = "Ressources/images/canvasBG.png";

    let characterViper = new Image();
    characterViper.src = "Ressources/images/characterViper.png";

    // Make sure the image is loaded
    background.onload = function(){
        context.drawImage(background, 0, 0);   
    }
    
    characterViper.onload = function(){
        context.drawImage(characterViper, 200, 200);   
    }

    // playerCharacter
    playerCharacter = {
        height: 192,
        width: 96,
        jumping: false,
        x: 300, // Center of canvas
        x_velocity: 0,
        y: 300,
        y_velocity: 0
    };
  
    controller = {
        left:false,
        right:false,
        up:false,        
    };

    loop = function() {
        if (controller.up && playerCharacter.jumping == false) {
            playerCharacter.y_velocity -= 20;
            playerCharacter.jumping = true;
        }

        if (controller.left == true) {
            playerCharacter.x_velocity -= 0.5;            
        }

        if (controller.right == true) {
            playerCharacter.x_velocity += 0.5;
        }

        playerCharacter.y_velocity += 1.5; //Set gravity
        playerCharacter.x += playerCharacter.x_velocity; //Move character on the ground with direction
        playerCharacter.y += playerCharacter.y_velocity; // Falling/jumping
        playerCharacter.x_velocity *= 0.9; //Friction
        playerCharacter.y_velocity *= 0.9; //Friction

        // If playerCharacter is falling below floor line
        if (playerCharacter.y > 400 - 16 - 32) {
            playerCharacter.jumping = false;
            playerCharacter.y = 400 - 16 - 32;
            playerCharacter.y_velocity = 0;
        }
        
        // If playerCharacter is going off the left screen
        if (playerCharacter.x < - 32) {
            playerCharacter.x = 1080;            
        } else if (playerCharacter.x > 1080) { // If playerCharacter is going off the right screen
            playerCharacter.x = - 32;
        }

        //context.fillStyle = "#202020";
        context.fillRect(0, 0, 1080, 600);// x, y, width, height
        //context.fillStyle = "#ff0000";// hex for red
        context.drawImage(background, 0, 0);
        context.drawImage(characterViper, playerCharacter.x, playerCharacter.y);
        context.beginPath();        
        //context.rect(playerCharacter.x, playerCharacter.y, playerCharacter.width, playerCharacter.height);
        //context.fill();
        context.strokeStyle = "rgba(0, 0, 0, 0)";
        context.lineWidth = 0;
        context.beginPath();
        context.moveTo(0, 500);
        context.lineTo(1080, 500);
        context.stroke();                  

        // call update when the browser is ready to draw again
        window.requestAnimationFrame(loop);
    };

    window.addEventListener('keydown', (e) => {
        if (e.code === "Numpad5")        controller.up = true
        else if (e.code === "Numpad3") controller.right = true
        else if (e.code === "Numpad1") controller.left = true
    });
    window.addEventListener("keyup", (e) => {
        if (e.code === "Numpad5")        controller.up = false
        else if (e.code === "Numpad3") controller.right = false
        else if (e.code === "Numpad1") controller.left = false
    });
    window.requestAnimationFrame(loop);

});