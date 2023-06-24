import React from 'react'
import styled from 'styled-components';





function Trick() {
    var txt = "Haha, you thought I was feeling you,<br> but that link is just for laughs :P <br>Don't worry though, you can use the contact links at the top of the page to get in touch with me and please do, I'd love to hear from you!.";
  document.getElementById("demo").innerHTML = txt;

  var email = "Email dupe"
  document.getElementById("email").innerHTML = email;
  }




function Detail() {

  return (
    <DetailStyle>
    <p>Hey there!<br /> Don't hesitate to reach out to me for anything!<br /> Whether you have questions or just want to share your thoughts about this site, feel free to hit me up.<br /> Or if you're feeling spontaneous, you can always just drop a 'hi'!</p>
    <br />
    <p><a onClick={Trick} id='email'>Email</a></p>
    <br />
    <p id='demo'></p>
  </DetailStyle>
  
  )
}

export default Detail



const DetailStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&display=swap');
  position:relative;
  display: flex;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  width: 100%;
  transform: skewY(5deg);
  border-box: content-box;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  overflow-wrap: break-word;
  white-space: wrap;
  z-index: 5;
  color:white;
  font-family: 'Inconsolata', monospace;
  font-size:15px;
  font-weight:40px;
  margin-top:40px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  


.sqr > p {
  position:relative;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  overflow-wrap: break-word;
}

a {
  text-align: left;
  text-decoration: underline;
  pointer-events:click;
}

a:hover {
 
}
`