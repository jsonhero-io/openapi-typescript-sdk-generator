/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Post } from '../models/Post';
import type { PostsList } from '../models/PostsList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostsService {

    /**
     * Returns all posts
     * @returns PostsList Successful response
     * @throws ApiError
     */
    public static getPosts(): CancelablePromise<PostsList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts',
        });
    }

    /**
     * Returns a post by id
     * @param id The user id.
     * @returns Post Successful response
     * @throws ApiError
     */
    public static getPost(
        id: number,
    ): CancelablePromise<Post> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Post not found`,
            },
        });
    }

}
