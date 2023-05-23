import userService from "../service/userService";
import {Request, Response} from "express";

class UserController {

    register = async (req: Request, res: Response) => {
        try {
            let check = await userService.checkUsedUsername(req.body.username)
            if (!check) {
                await userService.createUser(req.body);
                await res.status(201).json({
                    success: true,
                    data: req.body.username
                });
            } else {
                await res.status(409).json({
                    success: false,
                    message: 'Used username'
                });
            }
        } catch (e) {
            console.log("error in signup:", e)
            await res.status(500).json({
                message: 'error in signup',
                success: false
            })
        }

    }
    showUser = async (req: Request, res: Response) => {
        try {
            let userId = req.params.id;
            let user = await userService.findUserById(userId)
            res.status(201).json({
                success: true,
                data: user
            });
        } catch (e) {
            console.log("error in showUser:", e)
            res.status(500).json({
                message: 'error in showUser',
                success: false
            })
        }
    }

    editUser = async (req: Request, res: Response) => {
        try {
            let user = req.body;
            let id = req.params.id
            let newUser = await userService.updateUser(id, user);
            res.status(201).json(newUser);
        } catch (e) {
            console.log("error in editUser")
            res.status(500).json({
                message: 'error in editUser',
                success: false
            })
        }
    }


    login = async (req: Request, res: Response) => {
        try {
            let userData = req.body;
            let user = await userService.checkUser(userData);
            res.status(200).json(user);
        } catch (e) {
            console.log("error in login")
            res.status(400).json({
                message: 'error in login',
                success: false
            })
        }


    }

}

export default new UserController();