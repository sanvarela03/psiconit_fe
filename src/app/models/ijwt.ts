export interface IJWT {
    token_type: string;
    exp : number;
    iat : number;
    jti : string;
    user_id : number;
}