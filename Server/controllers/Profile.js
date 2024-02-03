const User = require("../models/User");

exports.updateProfile = async (req, res) => {
	try {
		const fieldsToUpdate = ["dateOfBirth", "gender", "firstName", "lastName", "contactNumber"];
		const id = req.user.id;

		// Find the profile by id
		const userDetails = await User.findById(id);

		// Update the profile fields dynamically
		fieldsToUpdate.forEach(field => {
			if (req.body[field] !== undefined) {
				userDetails[field] = req.body[field];
			}
		});

		// Save the updated profile
		await userDetails.save();
		

		return res.json({
			success: true,
			message: "Profile updated successfully",
			userDetails,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};

exports.getAllUserDetails = async (req, res) => {
	try {
		const id = req.user.id;
		const userDetails = await User.findById(id);
		res.status(200).json({
			success: true,
			message: "User Data fetched successfully",
			data: userDetails,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};