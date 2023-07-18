import {encode} from "jwt-simple";
import {serialize} from "cookie";



function authenticateUser(email, password) {
    // Authenticate user
    // Return user object if authenticated
    // Return null if not authenticated
    const validEmail = "johndoe@company.com"
    const validPassword = "admin1234"

    if (email === validEmail && password === validPassword) {
        return encode({
            id: 1,
            name: "John Doe",
            email: validEmail,
        });
    }
    return null;
}


export default (req, res) => {
    const { method } = req;
    const { email, password } = req.body;
    if (method !== "POST") {
        return res.status(404).end();
    }
    if (!email || !password) {
        return res.status(400).json({
            error: "Email and password are required",
        });
    }
    const user = authenticateUser(email, password);
    if (user) {
        res.setHeader(
            "Set-Cookie", 
            (serialize("auth", user, {path: "/", httpOnly: true}));
        
        return res.status(200).json({success: true});
    } else {
        return res.status(401).json({
            error: "Invalid email or password",
        });
    }
}


