import mongoose from "mongoose";

export interface MovieInfo {
    title: string;
    director: string;
    startDate: Date;
    thumbnail: string;
    stroy: string;
  }

  export interface MovieCommentInfo {
    writer: mongoose.Types.ObjectId | string;
    comment: string;
  }