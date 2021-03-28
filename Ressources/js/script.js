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

    // Add images to the scene
    let background = new Image();
    background.src = "Ressources/images/canvasBG.png";

    let characterBubble = new Image();
    characterBubble.src = "";

    let characterBubble2 = new Image();
    characterBubble2.src = "";

    // Add images as playerCharacter
    let characterViper = new Image();
    characterViper.src = "Ressources/images/characterViper.png";  
    
    // Add images as playerCharacter2
    let characterJett = new Image();
    characterJett.src = "Ressources/images/characterJettFlip.png";

    // Make sure images are loaded
    background.onload = function(){
        context.drawImage(background, 0, 0);   
    }
    
    characterViper.onload = function(){
        context.drawImage(characterViper, 200, 200);   
    }

    characterJett.onload = function(){
        context.drawImage(characterJett, 200, 200);   
    }

    characterBubble.onload = function(){
        context.drawImage(characterBubble, 200, 200);
    } 
    
    characterBubble2.onload = function(){
        context.drawImage(characterBubble2, 200, 200);
    } 

    // playerCharacter
    playerCharacter = {
        height: 192,
        width: 96,
        jumping: false,
        walking: false,
        x: 300, // Center of canvas
        x_velocity: 0,
        y: 300,
        y_velocity: 0,
        life: 100,
        choice: false
    };

    playerBubble = {
        height: 96,
        width: 120,        
    };

    // playerCharacter2
    playerCharacter2 = {
        height: 192,
        width: 96,
        jumping: false,
        walking: false,
        x: 600, // Center of canvas
        x_velocity: 0,
        y: 300,
        y_velocity: 0,
        life: 100,
        choice: false
    };

    playerBubble2 = {
        height: 96,
        width: 120,
    };

    //controller player1  
    controller = {
        left:false,
        right:false,
        up:false,
        vandal:false,
        spectre:false,
        knife:false        
    };

    // Controller player2
    controller2 = {
        left:false,
        right:false,
        up:false,
        vandal:false,
        spectre:false,
        knife:false               
    };

    loop = function() {
        // Player1 controller
        if (controller.up && playerCharacter.jumping == false) {
            playerCharacter.y_velocity -= 20;
            playerCharacter.jumping = true;
        }

        if (controller.left == true && playerCharacter.walking == false) {
            playerCharacter.x_velocity -= 4;
            playerCharacter.y_velocity -= 7;
            playerCharacter.walking = true;
            characterViper.src = "Ressources/images/characterViperFlip.png";            
        }

        if (controller.right == true && playerCharacter.walking == false) {
            playerCharacter.x_velocity += 4;
            playerCharacter.y_velocity -= 7;
            playerCharacter.walking = true;
            characterViper.src = "Ressources/images/characterViper.png";
        }

        if (controller.vandal == true) {
            //characterBubble.src = "Ressources/images/characterBubbleVandal.png";
            playerCharacter.choice = true;
        }

        // Player2 controller
        if (controller2.up && playerCharacter2.jumping == false) {
            playerCharacter2.y_velocity -= 20;
            playerCharacter2.jumping = true;
        }

        if (controller2.left == true && playerCharacter2.walking == false) {
            playerCharacter2.x_velocity -= 4;
            playerCharacter2.y_velocity -= 7;
            playerCharacter2.walking = true;
            characterJett.src = "Ressources/images/characterJettFlip.png";            
        }

        if (controller2.right == true && playerCharacter2.walking == false) {
            playerCharacter2.x_velocity += 4;
            playerCharacter2.y_velocity -= 7;
            playerCharacter2.walking = true;
            characterJett.src = "Ressources/images/characterJett.png";
        }

        if (controller2.vandal == true) {
            //characterBubble2.src = "Ressources/images/characterBubbleVandal.png";
            playerCharacter2.choice = true;
        }

        // Player
        playerCharacter.y_velocity += 1.5; //Set gravity
        playerCharacter.x += playerCharacter.x_velocity; //Move character on the ground with direction
        playerCharacter.y += playerCharacter.y_velocity; // Falling/jumping
        playerCharacter.x_velocity *= 0.9; //Friction
        playerCharacter.y_velocity *= 0.9; //Friction

        // If playerCharacter is falling below floor line
        if (playerCharacter.y > 400 - 16 - 32) {
            playerCharacter.jumping = false;
            playerCharacter.walking = false;
            playerCharacter.y = 400 - 16 - 32;
            playerCharacter.y_velocity = 0;
        }
        
        // If playerCharacter is going off the left screen
        if (playerCharacter.x < - 32) {
            playerCharacter.x = - 32;            
        } else if (playerCharacter.x > 1000) { // If playerCharacter is going off the right screen
            playerCharacter.x = 1000;
        }

        // Player2
        playerCharacter2.y_velocity += 1.5; //Set gravity
        playerCharacter2.x += playerCharacter2.x_velocity; //Move character on the ground with direction
        playerCharacter2.y += playerCharacter2.y_velocity; // Falling/jumping
        playerCharacter2.x_velocity *= 0.9; //Friction
        playerCharacter2.y_velocity *= 0.9; //Friction

        // If playerCharacter is falling below floor line
        if (playerCharacter2.y > 400 - 16 - 32) {
            playerCharacter2.jumping = false;
            playerCharacter2.walking = false;
            playerCharacter2.y = 400 - 16 - 32;
            playerCharacter2.y_velocity = 0;
        }
        
        // If playerCharacter is going off the left screen
        if (playerCharacter2.x < - 32) {
            playerCharacter2.x = - 32;            
        } else if (playerCharacter2.x > 1000) { // If playerCharacter is going off the right screen
            playerCharacter2.x = 1000;
        }
        
        // Waiting all player answers
        if (playerCharacter.choice == true && playerCharacter2.choice == true) {
            characterBubble.src = "Ressources/images/characterBubbleVandal.png";
            characterBubble2.src = "Ressources/images/characterBubbleVandal.png";
            setTimeout(function() {characterBubble.src = "", playerCharacter.choice = false, characterBubble2.src = "", playerCharacter2.choice = false;}, 2000);                                                            
        }

        console.log(playerCharacter.choice);
        console.log(playerCharacter2.choice);
                
        context.fillRect(0, 0, 1080, 600);// x, y, width, height
        context.drawImage(background, 0, 0);        
        context.drawImage(characterViper, playerCharacter.x, playerCharacter.y);
        context.drawImage(characterBubble, playerCharacter.x, playerCharacter.y - 96);
        context.drawImage(characterJett, playerCharacter2.x, playerCharacter2.y);
        context.drawImage(characterBubble2, playerCharacter2.x, playerCharacter2.y - 96);
        context.font = '24px sherif';
        context.fillStyle = "white";
        context.fillText('Viper HP : ' + playerCharacter.life, 50, 50);
        context.fillText('Jett HP : ' + playerCharacter2.life, 900, 50);        
        context.strokeStyle = "rgba(0, 0, 0, 0)";
        context.lineWidth = 0;        
        context.moveTo(0, 500);
        context.lineTo(1080, 500);
        context.stroke();
        context.beginPath();                  

        // call update when the browser is ready to draw again
        window.requestAnimationFrame(loop);
    };

    // Inputs player1
    window.addEventListener('keydown', (e) => {
        if (e.code === "KeyW")        controller.up = true
        else if (e.code === "KeyD") controller.right = true
        else if (e.code === "KeyA") controller.left = true
        else if (e.code === "KeyQ") controller.vandal = true 
        else if (e.code === "KeyE") controller.spectre = true
        else if (e.code === "KeyF") controller.knife = true
    });

    window.addEventListener("keyup", (e) => {
        if (e.code === "KeyW")        controller.up = false
        else if (e.code === "KeyD") controller.right = false
        else if (e.code === "KeyA") controller.left = false
        else if (e.code === "KeyQ") controller.vandal = false 
        else if (e.code === "KeyE") controller.spectre = false
        else if (e.code === "KeyF") controller.knife = false
    });

    // Inputs player2
    window.addEventListener('keydown', (e) => {
        if (e.code === "Numpad5")        controller2.up = true
        else if (e.code === "Numpad3") controller2.right = true
        else if (e.code === "Numpad1") controller2.left = true
        else if (e.code === "Numpad7") controller2.vandal = true 
        else if (e.code === "Numpad8") controller2.spectre = true
        else if (e.code === "Numpad9") controller2.knife = true
    });

    window.addEventListener("keyup", (e) => {
        if (e.code === "Numpad5")        controller2.up = false
        else if (e.code === "Numpad3") controller2.right = false
        else if (e.code === "Numpad1") controller2.left = false
        else if (e.code === "Numpad7") controller2.vandal = false 
        else if (e.code === "Numpad8") controller2.spectre = false
        else if (e.code === "Numpad9") controller2.knife = false
    });    
    
    window.requestAnimationFrame(loop);

});