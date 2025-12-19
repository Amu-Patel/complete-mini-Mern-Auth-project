import jwt from "jsonwebtoken";

const userAuth = async(req, res, next)=>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            success: false,
            message: "Not Authorized, Login Again",
        });
    }

    try {

        const tokenDecode =jwt.verify(token, process.env.JWT_SECRET);

        if(!tokenDecode.id){
            return res.status(401).json({
                success: false,
                message: "Not Authorized, Login Again",
            });
        }
        
        req.user = { id: decoded.id }

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};

export default userAuth;