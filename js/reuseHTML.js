class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `   
        <script src="../js/linkToHomePage.js"></script>
        <script src="../js/linkToLogInPage.js"></script>
          <div style="cursor: pointer;" id="header">
          <div id="name">
         <a class="center" id="owner">Maya's Website</a></div>
          
         <div id="tabs">
         <a class="center" href="../index.html">
         <button class="center" id="home" onclick="Logout()" style="cursor: pointer;">Logout</button></a>
         <button class="center" id="home" onclick="homeLink()" style="cursor: pointer;">Home</button>
          <a class="center" href="../html/aboutMe.html">About Me</a>
          
          
         </div>
      
          </div>
        
        <style>
            #header{
                background-image: linear-gradient(#649455,#94b16c);
                background-size: cover;
                position: fixed;
                top: 0px;
                left: 0px;
                height: 10%;
                width: 100%;
                display: flex;
                flex-direction: row;
            }
            
            .center{
                margin-top: auto;
                margin-bottom: auto;
                margin-right: 20px;
                font-size: 26.666666666666664px;
                font-weight: bold;
                transition: color 0.3s ease-out 0.4ms;
                color: black;
            }
            
            a {
                text-decoration: none;
            }
            
            .center:hover{
                color: bisque;
                
            }
            
            #tabs{
                width: 80%;
                display: flex;
                justify-content: flex-end;
                
            }
            
            #name{
                display: flex;
                width: 20%;
            }
            
            #owner{
                margin-left: 20%;
            
            }
            
            #home{
                font-size: 26.666666666666664px;
                padding: 5px;
                border: none;
                border-radius: 5px;
                font-family: "Montserrat", sans-serif;
                font-weight: bold;
                background-color: #0c7c4a;
                color: white;
                transition: background-color 0.5s ease-out 0.5ms;
            }
            
            #home:hover{
                background-color: #1e4f44;
                color: whitesmoke;
        }</style>

        `
    }

}

customElements.define('header-component', Header)