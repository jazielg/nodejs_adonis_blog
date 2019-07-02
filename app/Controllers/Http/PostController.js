'use strict'

const Post = use('App/Models/Post')
const { validate } = use('Validator')

class PostController {
    
    async index({ view }) {
        const posts = await Post.all()
        return view.render('posts.index', {
            title: 'Latest Post',
            posts: posts.toJSON()
        })
    }

    async show({ params, view }) {
        const post = await Post.find(params.id)
        return view.render('posts.show', {
            post
        })
    }

    async create({ view }) {
        return view.render('posts.create')
    }

    async store({ request, response, session }) {
        const validation = await validate(request.all(), {
            title: 'required|min:3|max:255',
            body: 'required|min:3'
        })

        if(validation.fails()) {
            session.withErrors(validation.messages()).flashAll()
            return response.redirect('back')
        }

        const post = new Post()
        post.title = request.input('title')
        post.body = request.input('body')
        await post.save()

        session.flash({ notification: 'Post added!' })

        return response.redirect('/posts')
    } 
}

module.exports = PostController
