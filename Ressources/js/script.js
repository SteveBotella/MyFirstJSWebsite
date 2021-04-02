// Run only when document ready
$(document).ready(function(){
    // Feed
    // Variable for each API link
    let agentNum = 0;
    let weaponNum = 0;
    let mapNum = 0;

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
        for (agentNum; agentNum < response.data.length; agentNum++){
            // Create new div
            let newDiv = document.createElement("div");
            
            // Create object
            let agent = {
                name: response.data[agentNum].displayName,
                icon: response.data[agentNum].displayIcon,
                description: response.data[agentNum].description,
                id: agentNum,
            }

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
            
            // Add all Comments & a form to add a Comments            
            // Create html balises            
            let allComments = document.createElement("div");            
            let newInputComment = document.createElement("input");            
            let newButton = document.createElement("button");                                  

            // Set attributes            
            allComments.setAttribute("id", "allComments" + agentNum);
            allComments.setAttribute("class", "comments");
            newInputComment.setAttribute("id", "inputAgentComment" + agentNum);                                    
            newButton.setAttribute("id", "buttonAgent" + agentNum);
            newButton.append("Add your comment");          

            // Add the form to the agentDiv
            newDiv.append(allComments);
            newDiv.append(newInputComment);
            newDiv.append(newButton);

            // Button add comment for each agent
            let currentAgent = agentNum;             
            $('#buttonAgent' + currentAgent).click(event => {
                if (newInputComment.value != "") {
                    let commentDiv = document.createElement("div");
                    let commentText = document.createElement("text");
                    let commentButton = document.createElement("button");                    
                    let commentID = document.getElementById("allComments" + currentAgent).childElementCount; 
                    commentDiv.setAttribute("id", "commentDiv" + currentAgent + commentID);
                    commentDiv.setAttribute("class", "commentDiv");
                    commentButton.setAttribute("id", "commentButton" + currentAgent + commentID);
                    commentText.setAttribute("id", "comment" + currentAgent + commentID);                
                    $("#allComments" + currentAgent).prepend(commentDiv);
                    $('#commentDiv' + currentAgent + commentID).append(commentText);
                    $('#commentDiv' + currentAgent + commentID).append(commentButton);
                    $('#comment' + currentAgent + commentID).append(newInputComment.value);
                    newInputComment.value = "";
                }                            
            });                      
        }
        agentNum = 0;        
    }

    // Function to add weapon object as a div
    function addWeapon(response) {
        for (weaponNum; weaponNum < response.data.length; weaponNum++){
            // Create new div
            let newDiv = document.createElement("div");
            
            // Create object
            let weapon = {
                name: response.data[weaponNum].displayName,
                icon: response.data[weaponNum].displayIcon,
                description: response.data[weaponNum].description,
                id: weaponNum,
            }

            // Create img element & set src from weapon.icon (image url)
            let weaponIcon = document.createElement("img");
            weaponIcon.setAttribute("src", weapon.icon);
            
            // Inside the new created div, append all valWeapon informations
            let newTitle = document.createElement("text");
            newTitle.setAttribute("class", "weaponTitle");
            newTitle.append(weapon.name);
            newDiv.append(newTitle);
            newDiv.append(weaponIcon);
    
            // Set class & unique id for the new created div
            newDiv.setAttribute("class", "DivWeapon");
            newDiv.setAttribute("id", "Div" + weaponNum);
    
            // Append the new div to the parent div
            $("#valAPI").append(newDiv);
            
            // Add all Comments & a form to add a Comments            
            // Create html balises            
            let allComments = document.createElement("div");            
            let newInputComment = document.createElement("input");            
            let newButton = document.createElement("button");                                  

            // Set attributes            
            allComments.setAttribute("id", "allCommentsWeapon" + weaponNum);
            allComments.setAttribute("class", "comments");
            newInputComment.setAttribute("id", "inputWeaponComment" + weaponNum);                                    
            newButton.setAttribute("id", "buttonWeapon" + weaponNum);
            newButton.append("Add your comment");          

            // Add the form to the weaponDiv
            newDiv.append(allComments);
            newDiv.append(newInputComment);
            newDiv.append(newButton);

            // Button add comment for each weapon
            let currentWeapon = weaponNum;             
            $('#buttonWeapon' + currentWeapon).click(event => {
                if (newInputComment.value != "") {
                    let commentDiv = document.createElement("div");
                    let commentText = document.createElement("text");
                    let commentButton = document.createElement("button");                    
                    let commentID = document.getElementById("allCommentsWeapon" + currentWeapon).childElementCount; 
                    commentDiv.setAttribute("id", "commentDivWeapon" + currentWeapon + commentID);
                    commentDiv.setAttribute("class", "commentDivWeapon");
                    commentButton.setAttribute("id", "commentButtonWeapon" + currentWeapon + commentID);
                    commentText.setAttribute("id", "commentWeapon" + currentWeapon + commentID);                
                    $("#allCommentsWeapon" + currentWeapon).prepend(commentDiv);
                    $('#commentDivWeapon' + currentWeapon + commentID).append(commentText);
                    $('#commentDivWeapon' + currentWeapon + commentID).append(commentButton);
                    $('#commentWeapon' + currentWeapon + commentID).append(newInputComment.value);
                    newInputComment.value = "";
                }                            
            });
        }
        weaponNum = 0;
    }

    // Function to add map object as a div
    function addMap(response) {
        for (mapNum; mapNum < response.data.length; mapNum++){
            // Create new div
            let newDiv = document.createElement("div");
            
            // Create object
            let map = {
                name: response.data[mapNum].displayName,
                icon: response.data[mapNum].displayIcon,
                description: response.data[mapNum].description,
                id: mapNum,
            }

            // Create img element & set src from map.icon (image url)
            let mapIcon = document.createElement("img");
            mapIcon.setAttribute("src", map.icon);
            
            // Inside the new created div, append all valMap informations
            let newTitle = document.createElement("text");
            newTitle.setAttribute("class", "mapTitle");
            newTitle.append(map.name);
            newDiv.append(newTitle);           
            newDiv.append(mapIcon);
    
            // Set class & unique id for the new created div
            newDiv.setAttribute("class", "DivMap");
            newDiv.setAttribute("id", "Div" + mapNum);
    
            // Append the new div to the parent div
            $("#valAPI").append(newDiv);
            
            // Add all Comments & a form to add a Comments            
            // Create html balises            
            let allComments = document.createElement("div");            
            let newInputComment = document.createElement("input");            
            let newButton = document.createElement("button");                                  

            // Set attributes            
            allComments.setAttribute("id", "allCommentsMap" + mapNum);
            allComments.setAttribute("class", "comments");
            newInputComment.setAttribute("id", "inputMapComment" + mapNum);                                    
            newButton.setAttribute("id", "buttonMap" + mapNum);
            newButton.append("Add your comment");          

            // Add the form to the mapDiv
            newDiv.append(allComments);
            newDiv.append(newInputComment);
            newDiv.append(newButton);

            // Button add comment for each map
            let currentMap = mapNum;             
            $('#buttonMap' + currentMap).click(event => {
                if (newInputComment.value != "") {
                    let commentText = document.createElement("text");
                    let commentID = document.getElementById("allCommentsMap" + currentMap).childElementCount; 
                    commentText.setAttribute("id", "commentMap" + currentMap + commentID);                
                    $("#allCommentsMap" + currentMap).prepend(commentText);
                    $('#commentMap' + currentMap + commentID).append(newInputComment.value);
                    newInputComment.value = "";
                }                            
            });
        }
        mapNum = 0;
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

    // Clear the div you want
    function clearChildren(id) {
        let remove = document.getElementById(id);
        remove.innerHTML = '';   
    }
    
    // --- EVENTS ---
    // Button display Agents
    $('#displayAgents').click(event => {
        clearChildren('valAPI');
        requestApi(
            "https://valorant-api.com/v1/agents",
            'GET', 
            (res) =>  addAgent(res),
            (error) =>  alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error))
        )
    });

    // Button display Weapons
    $('#displayWeapons').click(event => {
        clearChildren('valAPI');
        requestApi(
            "https://valorant-api.com/v1/weapons",
            'GET', 
            (res) =>  addWeapon(res),
            (error) =>  alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error))
        )
    });

    // Button display Maps
    $('#displayMaps').click(event => {
        clearChildren('valAPI');
        requestApi(
            "https://valorant-api.com/v1/maps",
            'GET', 
            (res) =>  addMap(res),
            (error) =>  alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error))
        )
    });
       
    // DropDownMenu    
    document.getElementById("dropDownMenu").style.visibility = "hidden";
    let isDropDownMenuEnable = false;

    $('#riotLogo').click(function() {
        if (isDropDownMenuEnable == false) {
            document.getElementById("dropDownMenu").style.visibility = "visible";
            isDropDownMenuEnable = true;
        } else {
            document.getElementById("dropDownMenu").style.visibility = "hidden";
            isDropDownMenuEnable = false;
        }        
    });

    // Click on Home
    $('#home').click(function() {
        window.location.replace('index.html');        
    });

    // Click on Gallery
    $('#gallery').click(function() {
        window.location.replace('gallery.html');
    });

    // Click on Game
    $('#game').click(function() {
        window.location.replace('game.html');
    });
    

    // Mouse hovering valorantLogo
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

    // --- GALLERY ---
    // Create an array of all images we want
    let isGalleryColumn = false;
    let galleryImages = 
    [   
    ];
    let galleryImagesUser = [
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/Valorant-team-dies-before-round-starts.jpg?q=50&fit=crop&w=960&h=500",
        "https://i.ytimg.com/vi/VHXo9hAgeas/mqdefault.jpg",
        "https://i.ytimg.com/vi/YQu4B_igZkU/maxresdefault.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_g7-9UH8Sc9jihFXiuY1SEu_a_ykS1afBA&usqp=CAU",
        "https://cmcdistribution.com.vn/en/wp-content/uploads/2021/02/FUNNIEST-MOMENTS-IN-VALORANT-2.jpg",
        "https://i.ytimg.com/vi/wEzW2kudO9g/maxresdefault.jpg"
    ];

    // Add all images (from array) to the div
    function addGallery() {
        for (let galleryIndex = 0; galleryIndex < galleryImages.length; galleryIndex++){
            let divImage = document.createElement("div");
            let image = document.createElement("img");
            let deleteImage = document.createElement("button");

            image.setAttribute("src", galleryImages[galleryIndex]);
            image.setAttribute("class", "galleryImage");
            image.setAttribute("id", "galleryImage" + galleryIndex);
            
            divImage.setAttribute("class", "galleryImageDiv");
            divImage.setAttribute("id", "galleryImageDiv" + galleryIndex);

            deleteImage.setAttribute("id", "deleteImage" + galleryIndex);
            deleteImage.setAttribute("class", "deleteImage");            

            if (isGalleryColumn == true) {
                $("#galleryIMGColumn").append(divImage);
                $("#galleryImageDiv" + galleryIndex).append(image);
            } else {
                $("#galleryIMGRow").append(divImage);
                $("#galleryImageDiv" + galleryIndex).append(image);
            }
            
            let hoverButtonDeleteImage = false;
            if (hoverButtonDeleteImage == false) {
                image.onmouseover = function() {
                    $("#galleryImageDiv" + galleryIndex).append(deleteImage);
                }
            }
            
            deleteImage.onmouseout = function() {
                hoverButtonDeleteImage = true;
                deleteImage.remove();
            }
            image.onmouseout = function() {
                hoverButtonDeleteImage = false;
                deleteImage.remove();
            }
            
            deleteImage.onclick = function() {
                clearChildren('galleryIMGColumn');
                clearChildren('galleryIMGRow');
                galleryImages.splice(galleryIndex, 1);
                addGallery();
            };
        };
        galleryIndex = 0;
        
        for (galleryIndex; galleryIndex < galleryImagesUser.length; galleryIndex++){
            let divImageUser = document.createElement("div");
            let imageUser = document.createElement("img");
            let deleteImageUser = document.createElement("button");

            imageUser.setAttribute("src", galleryImagesUser[galleryIndex]);
            imageUser.setAttribute("class", "galleryImageUser");
            imageUser.setAttribute("id", "galleryImageUser" + galleryIndex);
            
            divImageUser.setAttribute("class", "galleryImageDivUser");
            divImageUser.setAttribute("id", "galleryImageDivUser" + galleryIndex);

            deleteImageUser.setAttribute("id", "deleteImageUser" + galleryIndex);
            deleteImageUser.setAttribute("class", "deleteImageUser");            

            if (isGalleryColumn == true) {
                $("#galleryIMGColumn").append(divImageUser);
                $("#galleryImageDivUser" + galleryIndex).append(imageUser);
            } else {
                $("#galleryIMGRow").append(divImageUser);
                $("#galleryImageDivUser" + galleryIndex).append(imageUser);
            }

            let hoverButtonDeleteImageUser = false;
            if (hoverButtonDeleteImageUser == false) {
                imageUser.onmouseover = function() {
                    $("#galleryImageDivUser" + galleryIndex).append(deleteImageUser);
                }
            }
            
            deleteImageUser.onmouseout = function() {
                hoverButtonDeleteImageUser = true;
                deleteImageUser.remove();
            }
            imageUser.onmouseout = function() {
                hoverButtonDeleteImageUser = false;
                deleteImageUser.remove();
            }
            
            deleteImageUser.onclick = function() {
                clearChildren('galleryIMGColumn');
                clearChildren('galleryIMGRow');
                galleryImagesUser.splice(galleryIndex, 1);
                addGallery();
            };
        };
    };

    addGallery();    
    
    // Button display gallery row
    $('#rowGallery').click(event => {
        clearChildren('galleryIMGColumn');
        clearChildren('galleryIMGRow');
        isGalleryColumn = false;
        addGallery();
    });

    // Button display gallery column
    $('#columnGallery').click(event => {
        clearChildren('galleryIMGColumn');
        clearChildren('galleryIMGRow');
        isGalleryColumn = true;
        addGallery();
    });

    // Input url for the desire image add to list
    $('#plusGallery').click(event => {
        let newInputImage = document.getElementById("plusInput");
        if (newInputImage.value != "") {
            galleryImages.push(newInputImage.value);
            clearChildren('galleryIMGColumn');
            clearChildren('galleryIMGRow');
            addGallery();
        }        
    });
    /*    
    // --- GAME ---
    let context, controller, playerCharacter, loop;

    // Create the game scene (window)
    context = document.querySelector("canvas").getContext("2d");

    // Enable/disable inputs
    let isInputEnable = true;
    let isInputEnable2 = true;

    // Scene width & height
    context.canvas.height = 600;
    context.canvas.width = 1080;

    // Add images to the scene
    let background = new Image();
    background.src = "Ressources/images/canvasBG.png";

    let characterBubble = new Image();
    characterBubble.src = "";

    let characterBubble2 = new Image();
    characterBubble2.src = "";

    // Add image as playerCharacter
    let characterViper = new Image();
    characterViper.src = "Ressources/images/characterViper.png";  

    // Add image as playerCharacter2
    let characterJett = new Image();
    characterJett.src = "Ressources/images/characterJettFlip.png";

    // Make sure all images are loaded (not mean displayed...)
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
        x: 300,
        x_velocity: 0,
        y: 300,
        y_velocity: 0,
        life: 100,
        choice: false,
        answer: ""
    };

    // Player1 bubble displaying choices
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
        x: 600,
        x_velocity: 0,
        y: 300,
        y_velocity: 0,
        life: 100,
        choice: false,
        answer: ""
    };

    // Player2 bubble displaying choices
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

        if (controller.vandal == true && isInputEnable == true) {
            isInputEnable = false;
            playerCharacter.answer = "Ressources/images/characterBubbleVandal.png";
            playerCharacter.choice = true;
        } else if (controller.spectre == true && isInputEnable == true) {
            isInputEnable = false;
            playerCharacter.answer = "Ressources/images/characterBubbleSpectre.png";
            playerCharacter.choice = true;
        } else if (controller.knife == true && isInputEnable == true) {
            isInputEnable = false;
            playerCharacter.answer = "Ressources/images/characterBubbleKnife.png";
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

        if (controller2.vandal == true && isInputEnable2 == true) {
            isInputEnable2 = false;
            playerCharacter2.answer = "Ressources/images/characterBubbleVandal.png";
            playerCharacter2.choice = true;
        } else if (controller2.spectre == true && isInputEnable2 == true) {
            isInputEnable2 = false;
            playerCharacter2.answer = "Ressources/images/characterBubbleSpectre.png";
            playerCharacter2.choice = true;
        } else if (controller2.knife == true && isInputEnable2 == true) {
            isInputEnable2 = false;
            playerCharacter2.answer = "Ressources/images/characterBubbleKnife.png";
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
        if (playerCharacter.choice == true && playerCharacter2.choice == true && isInputEnable == false && isInputEnable2 == false) {            
            characterBubble.src = playerCharacter.answer;
            characterBubble2.src = playerCharacter2.answer;
            playerCharacter.choice = false;
            playerCharacter2.choice = false;                       
            setTimeout(function() {
                fight(),
                characterBubble.src = "",
                playerCharacter.answer = "", 
                //playerCharacter.choice = false, 
                characterBubble2.src = "",
                playerCharacter2.answer = "", 
                //playerCharacter2.choice = false
                isInputEnable = true,
                isInputEnable2 = true                
                ;}, 2000);                                                                            
        }

        console.log(isInputEnable);
        console.log(isInputEnable2);

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

    // Find fight winner
    function fight() {
        if (playerCharacter.answer === playerCharacter2.answer) {
        } else if (playerCharacter.answer == "Ressources/images/characterBubbleVandal.png"){
            if (playerCharacter2.answer == "Ressources/images/characterBubbleKnife.png") {
                //winner = "Won";
                playerCharacter.life = playerCharacter.life - 20;
            } else {
                //winner = "Lost";
                playerCharacter2.life = playerCharacter2.life - 20;
            }
        } else if (playerCharacter.answer == "Ressources/images/characterBubbleSpectre.png") {
            if (playerCharacter2.answer == "Ressources/images/characterBubbleKnife.png") {
                //winner = "Lost";
                playerCharacter2.life = playerCharacter2.life - 20;
            } else {
                //winner = "Won";
                playerCharacter.life = playerCharacter.life - 20;
            }
        } else if (playerCharacter.answer == "Ressources/images/characterBubbleKnife.png") {
            if (playerCharacter2.answer == "Ressources/images/characterBubbleSpectre.png") {
                //winner = "Won";
                playerCharacter.life = playerCharacter.life - 20;
            } else {
                //winner = "Lost";
                playerCharacter2.life = playerCharacter2.life - 20;
            }
        }
    };

    window.requestAnimationFrame(loop);*/
}); 