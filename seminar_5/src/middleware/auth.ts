import express, {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";

export default (req: Request, res: Response, next: NextFunction)=>{
    const token = req.headers["authorization"]?.split(' ').reverse()[0];

    if(!token){
        return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, message.NULL_VALUE_TOKEN))
    }

    try{
        const decode = jwt.verify(token, config.jwtSecret);

        req.body.user = (decoded as any).user;

        next();
    } catch(error){
        console.log(error);
        if(error.name === 'TokenExpiredError') {
            return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, message.INTERNAL_SERVER_ERROR));
        }
    }
}