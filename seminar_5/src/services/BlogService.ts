import { BlogCreateDto } from "../interfaces/blog/BlogCreateDto";
import { BlogUpdateDto } from "../interfaces/blog/BlogUpdateDto";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import Blog from "../models/Blog";

const createPost = async (blogCreateDto: BlogCreateDto): Promise<PostBaseResponseDto> => {
    try {
        const post = new Blog({
            title: blogCreateDto.title,
            content: blogCreateDto.content,
            writer: blogCreateDto.writer
        })

        await post.save()

        const data = {
            _id: post.id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updatePost = async (blogId: string, blogUpdateDto: BlogUpdateDto): Promise<void> => {
    try {
        await Blog.findByIdAndUpdate(blogId, blogUpdateDto);
    } catch (error) {
        console.log(error);
        throw error
    }
}

const findPostById = async (blogId: string) => {
    try {
        const post = await Blog.findById(blogId)

        if (!post) {
            return null;
        }

        return post;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deletePost = async (blogId: string) => {
    try {
        await Blog.findByIdAndDelete(blogId);
    } catch (error) {
        console.log(error);
        throw error
    }
}

export default {
    createPost,
    updatePost,
    findPostById,
    deletePost,
}