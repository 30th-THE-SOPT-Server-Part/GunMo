import mongoose from "mongoose";
import { JwtPayloadInfo } from "../interfaces/common/JwtPayloadInfo";
import config from "../config"
import jwt from "jsonwebtoken";

const getToken = (userId: mongoose.Schema.Types.ObjectId): string => {
    const payload: JwtPayloadInfo = {
        user: {
            id: userId
        },
    };

    const accessToken: string = jwt.sign(
        payload,
        config.jwtSecret,
        { expiresIn: '2h' }
    )

    return accessToken;
}

export default {
    getToken
}