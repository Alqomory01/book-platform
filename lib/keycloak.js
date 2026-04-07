import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',       
  realm: 'myapp',                     
  clientId: 'nextjs-app',             // Your Client ID
});

export default keycloak;