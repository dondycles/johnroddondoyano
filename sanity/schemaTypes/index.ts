import blog from './blog'
import comment from './comment'
export type Blog = typeof blog
export const schemaTypes = [blog, comment]
