const express = require("express");
const {
  checkIfUserIsAdmin,
  checkIfUserIsTargetingThemselves,
} = require("../middleware/UserAuthorisation.js");
const { checkForUserJwt } = require("../middleware/UserAuthentication.js");
const { UserModel } = require("../models/UserModel.js");
const { generateJwt } = require("../utils/jwtUtils.js");
const userRouter = express.Router();


// localhost:3000/users/admin/dashboard
userRouter.get(
  "/admin/dashboard",
  checkForUserJwt,
  checkIfUserIsAdmin,
  async (request, response) => {
    const allUsers = await UserModel.find({}, {
      password: 0,
      salt: 0,
      __v: 0
    });
// admin power excludes password, salt and mongo internal fields
    response.json({
      data: {
        users: allUsers,
      },
    });
  },
);

// admin GET methods
// GET specific user
// GET all users

// localhost:3000/users/
userRouter.get("/", checkForUserJwt, checkIfUserIsAdmin, async (request, response) => {
  try {
    const allUsers = await UserModel.find({}, {
      password: 0,
      salt: 0,
      __v: 0
    }).sort({ createdAt: -1 });

    response.json({
      data: allUsers,
      count: allUsers.length
    });
  } catch (error) {
    response.status(500).json({ message: "Error retrieving users" });
  }
});

// GET specific user (admin only)
userRouter.get("/:userId", checkForUserJwt, checkIfUserIsAdmin, async (request, response) => {
  try {
    const user = await UserModel.findById(request.params.userId, {
      password: 0,
      salt: 0,
      __v: 0
    });

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    response.json({
      data: user
    });
  } catch (error) {
    if (error.name === "CastError") {
      return response.status(400).json({ message: "Invalid user ID" });
    }
    response.status(500).json({ message: "Error retrieving user" });
  }
});


// POST register/signup route
userRouter.post("/signup", async (request, response) => {
  try {
    //process request.body for username email and password
    let { username, email, password } = request.body;

    // validate required fields
    if (!username || !email || !password) {
      return response.status(400).json({
        message: "Username, email, and password are required"
      });
    }

    // check if user already exists
    let existingUser = await UserModel.findOne({
      $or: [{ email: email }, { username: username }]
    });

    if (existingUser) {
      return response.status(409).json({
        message: "Email or username already in use"
      });
    }

    let newUser = new UserModel({ //create new user
      username: username,
      email: email,
      password: password
    });

    //save to db and triggers password hashing in
    await newUser.save();
    let newJwt = generateJwt(newUser); // login immediately

    // return success
    response.status(201).json({
      message: "Welcome",
      result: newJwt,
      data: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        theme: newUser.theme
      }
    });

  } catch (error) {

    if (error.name === "ValidationError") {//handle validation errors from model
      return response.status(400).json({
        message: Object.values(error.errors).map(e => e.message).join(", ")
      });
    }

    if (error.code === 11000) { //if username already exists
      return response.status(409).json({
        message: "Email or username already in use"
      });
    }

    response.status(500).json({
      message: "Error creating account"
    });
  }
});


// POST login/signin route
userRouter.post("/login", async (request, response) => {
  // process request.body for email and password
  let { email, password } = request.body;

  // use the email to find the relevant user in the db
  let foundUser = await UserModel.findOne({email: email});

  if (foundUser == undefined){
    response.json({
      message: "Create an account!"
    })
  }

		// Compare the provided password to the found relevant user 
		let doPasswordsMatch = foundUser.comparePassword(password);
		if (!doPasswordsMatch){
			response.json({
				message:"Invalid email or password."
			});
		}

		// If the user matches, make a JWT and return that JWT 
		let newJwt = generateJwt(foundUser);

		response.json({
			result: newJwt
		});
});


// PATCH specific user
// localhost:3000/users/aosdnalkandva
// can use this for password, email, username, theme updates
userRouter.patch(
  "/:userId",
  checkForUserJwt,
  checkIfUserIsTargetingThemselves,
  async (request, response) => {
    let updatedUser = await UserModel.findOneAndUpdate(
      // arg 1 the search query/ filter
      {
        _id: request.customData.user._id,
      },
      // arg 2 the data to apply to the doc to update it
      {
        ...request.body,
      },
    );
    response.json({
      data: updatedUser,
      message: "Update successful",
    });
  },
);


// User DELETE Account /users/:userId
userRouter.delete(
  "/:userId",
  checkForUserJwt,
  checkIfUserIsTargetingThemselves,
  async (request, response) => {
    try {
      await UserModel.findByIdAndDelete(request.params.userId);
      response.json({
        message: "User account deleted successfully",
      });
    } catch (error) {
      response.status(500).json({ message: "Error deleting user account" });
    }
  },
);

// Admin DELETE User /users/:userId
// ...

module.exports = {
  userRouter,
};
