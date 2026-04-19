const { UserModel } = require("../models/UserModel");
const { verifyJwt } = require("../utils/jwtUtils");
const log = require('smallog');

async function checkForUserJwt (request, response, next) {
	// Read the Authorization header from the incoming request
	// Because the frontend should've put the auth token in a header
	let bearerToken = request.headers["authorization"];
	log(request.headers);

	// Server receives "Bearer aoljscvnsalognsldgksndgslkn"
	// To have a usable token variable, remove "Bearer " from the auth header
  if (bearerToken == undefined) {
    return response.status(401).json({
      message: "Log in to view this resource"
    })
  }
	bearerToken = bearerToken.substring(7);
	log(bearerToken); // this is very insecure, use for testing only

	try {
		// Pass the provided token into our verify function
		let decodedToken = verifyJwt(bearerToken);
		// if we haven't thrown an error by this line,
		// the user is logged in and allowed to proceed
		log(decodedToken); // this is very insecure, use for testing only

		// Find the user and attach them to the request
		// let loggedInUser = await UserModel.findById(decodedToken.payload.userId);
    let loggedInUser = await UserModel.findById(decodedToken.userId);

		request.customData.user = loggedInUser;


		next();
	} catch (error) {
		response.status(403).json({
			message:"You are not logged in!"
		});
	}
}

module.exports = {
	checkForUserJwt
}