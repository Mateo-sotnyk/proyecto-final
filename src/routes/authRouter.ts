import { Router } from "express"
import AuthController from "../controllers/authController"
import rateLimitMiddleware from "../middleware/rateLimitMiddleware"

const authRouter = Router()

authRouter.use(rateLimitMiddleware)

// http://localhost:3000/auth/register
authRouter.post("/register", AuthController.register)
// http://localhost:3000/auth/login
authRouter.post("/login", AuthController.login)

export default authRouter