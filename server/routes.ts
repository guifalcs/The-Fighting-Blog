import { error } from "console";
import UserController from "./controllers/userController";

const controller = new UserController();
const router = express.router();

interface GetUserRequest extends Request {
    query: {
        email: String;
    };
}

router.get('/user/getUser', async (req: GetUserRequest, res: Response) => {
    
});

module.exports = router;