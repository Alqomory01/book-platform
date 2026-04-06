import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',       // Keycloak server
  realm: 'myapp',                     // Your Realm name
  clientId: 'nextjs-app',             // Your Client ID
});

export default keycloak;