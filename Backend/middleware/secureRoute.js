import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const secureRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }               

        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        if(!decoded){
            return res.status(401).json({ error: "Invalid token" });
        }
        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }   
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }   
};
export default secureRoute;