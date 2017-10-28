import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AuthGuardLogin } from './auth-guard-login.service';

export {
    AuthService, 
    UserService,
    AuthGuardLogin,
};

export default [
    AuthService, 
    UserService,
    AuthGuardLogin,
];