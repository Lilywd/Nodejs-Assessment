const User = require("../models/user");

// User registration endpoint
exports.registerUser = (req, res) => {
    // Validate the user's credentials
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json({message: "Please provide a username and password."})
    }

    // Create a new user
    const newUser = new User({
        username,
        password
    });
    newUser.save((err, user) => {
        if (err) {
            return res.status(500).json({message: err});
        } else {
            // Generate a JWT for the user
            const token = jwt.sign({
                username,
                userId: user._id
            }, secret, {expiresIn: '1h'});

            // Return the JWT to the user
            res.status(200).json({token});
        }
    });
};

// User login endpoint
exports.loginUser = (req, res) => {
    // Validate the user's credentials
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json({message: "Please provide a username and password."})
    }

    // Find the user by their username
    User.findOne({username}, (err, user) => {
        if (err) {
            return res.status(500).json({message: err});
        } else if (!user) {
            return res.status(401).json({message: "Invalid username or password."})
        } else if (user.password !== password) {
            return res.status(401).json({message: "Invalid username or password."})
        } else {
            // Generate a JWT for the user
            const token = jwt.sign({
                username,
                userId: user._id
            }, secret, {expiresIn: '1h'});

            // Return the JWT to the user
            res.status(200).json({token});
        }
    });
};