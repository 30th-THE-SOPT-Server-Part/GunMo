import { UserInfo } from "../user/UserInfo";

export interface BlogInfo {
    title: string,
    content: string,
    writer: UserInfo,
    createdAt: Date,
    updatedAt: Date,
}