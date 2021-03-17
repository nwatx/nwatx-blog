const rehypeKatex = require('rehype-katex')
const remarkMath = require('remark-math')

const withMDX = require('@next/mdx')({
    extension: /\.mdx$/,
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex]
    }
})

module.exports = withMDX({
    images: {
        loader: 'cloudinary',
        path: 'https://res.cloudinary.com/dcg5b3jpt/image/upload/v1615871692/blog/'
    },
})