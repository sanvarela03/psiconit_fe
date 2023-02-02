import { Account } from './account';
export interface IUser {

    username: string;
    password: string;
    name: string;
    email: string;
    accounts: Account[];
}
