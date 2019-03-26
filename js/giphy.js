require("./../secrets");
var GphApiClient = require("giphy-js-sdk-core");
client = GphApiClient(process.env.GIPHY_API);
export default client;
