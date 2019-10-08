export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      * {
        font-family: Roboto, curier, sans-serif;
      }
      {/* body {
        margin: 10px;
        padding: 25px 50px;
        color: black;
      }
      a {
        color: #22bad9;
      }
      p {
        font-size: 14px;
        line-height: 24px;
       
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #22bad9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
      }
      button:active {
        background-color: #1b9db7;
        transition: background-color 0.3s;
      }
      button:focus {
        outline: none;
      }

  */}
header {
  
  z-index: 1000;
  color: black;
  display: flex;
  padding: 10px 0px 28px 10px; 
  z-index: 10;   
  position: fixed;
  width: 100%;
  justify-content: space-between;
  background-color: #fffff60;
  height: 62px;
}
  
.headerbuffer {
height: 60px;
} 

.bottombuffer {
height: 20px;
} 

.blackbox {
      height: 81px;
      background-color: #000000;
      position: absolute;
      top: 0px;
      width: 100%;
      z-index: 1;
    }

.sub {
  display: flex;
  
  flex: 2 1 600px; 
  justify-content: space-around;
  transform: translateY(1px);
  
}


body {

  margin: 0;
  padding: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;

  color: black;

  flex: 0 1 auto; 
  background-color: #FFFFFF;
  //margin: $header-height 0 $header-height 0;
  min-height: 100vh;
  width: 100%;
}


.checkbox_addon p{
  font-size: 12px;
}
p {

  letter-spacing: 0.04em;

}


.content { 
  flex: 1 0 auto; 
  overflow: hidden;
 
  min-height: 100vh;
  width: 100%;
 
  color: #3f3f3f;
}


footer {
  flex-shrink: 0;
  color: black;
  margin-top:auto;
  z-index: 20;
  background-color: #ffffff;
  font-size: 20px;
  padding: 4px;
  
}



    `}</style>
  </main>
)
