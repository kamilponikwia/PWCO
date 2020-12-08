const config = {};

config.host = process.env.HOST || "https://pwco-app-cosmo.documents.azure.com:443/";
config.authKey =
  process.env.AUTH_KEY || "F3J3srtVqg35YJET4NgWIXb2ak4S4BjMCwnL1WwPzxJcE3H43nF9idCaCX9o80XTY7T84NxSK29zftGJIKTPQA==";
config.databaseId = "ToDoList";
config.containerId = "Items";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}

module.exports = config;