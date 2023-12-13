
/*import { createAuth0Client } from "@auth0/auth0-spa-js";
import 'dotenv/config'
const auth0  = createAuth0Client({
    domain: process.env.authDomain,
    clientId: process.env.authID,
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  });


const loginButton = document.getElementById("login");
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    auth0Client.loginWithRedirect();
});  

if (location.search.includes("state=") && 
      (location.search.includes("code=") || 
      location.search.includes("error="))) {
    await auth0Client.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/");
    }

const logout = () => {
  auth0Client.logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  });
};
*/
  