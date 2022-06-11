import { UserInfo } from "../user/UserInfo";

export interface BlogCreateDto {
    title:string,
    content:string,
    writer: UserInfo
}