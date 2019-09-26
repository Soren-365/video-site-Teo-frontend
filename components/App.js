export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      * {
        font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
          'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
          monospace, serif;
      }
      body {
        margin: 10px;
        padding: 25px 50px;
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

 
header {
  
  z-index: 1000;
  color: white;
  display: flex;
  padding: 10px 0px 28px 10px; 
  z-index: 10;   
  position: fixed;
  width: 100%;
  justify-content: space-between;
  background-color: #00000060;
  height: 50px;
}
  
.headerbuffer {
height: 80px;
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

  color: white;
}

body  { 
  flex: 0 1 auto; 
  background-color: #000000;
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
  //margin: $header-height 0 $header-height 0;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 57px; 
  color: #3f3f3f;
}



footer {
  flex-shrink: 0;
  color: black;
  margin-top:auto;
  z-index: 20;
  background-color: #ff9d00;
  font-size: 20px;
  padding: 20px;
  
}



    `}</style>
  </main>
)
