import { UserRole } from './user-role';

export interface User {
    username: string;
    password: string;
    email: string;
    nickname: string;
    role: UserRole;
}