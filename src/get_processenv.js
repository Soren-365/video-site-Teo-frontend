


let processenv = {}
  
if (process.env.STAGING === 'dev') {
     processenv = {
     corsOrigin: process.env.CLIENT_DEVELOPMENT,
     graphqlPath: process.env.GRAPHQL_CLIENT_ENDPOINT_DEVELOPMENT,
     graphqlEndpoint: process.env.GRAPHQL_CLIENT_ENDPOINT_DEVELOPMENT,
     fileserverPort: process.env.FILESERVER_PORT,
     fileserverEndpoint: process.env.FILESERVER_CLIENT_ENDPOINT_DEVELOPMENT
    }
    }
    else if (process.env.STAGING  === 'prod') {
     processenv = {
     corsOrigin: process.env.CLIENT_PRODUCTION,
     graphqlPath: process.env.GRAPHQL_CLIENT_PATH_PRODUCTION,
     graphqlEndpoint: process.env.GRAPHQL_CLIENT_ENDPOINT_PRODUCTION,
     fileserverPort: process.env.FILESERVER_PORT,
     fileserverEndpoint: process.env.FILESERVER_CLIENT_ENDPOINT_PRODUCTION
    }
    }
    else {
     Error("In root server folder .env file: index DEPLOYMENT value must be \"dev\" or \"prod\"");
    }
  

 export default processenv