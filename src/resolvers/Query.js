const Query = {
    posts(parent, args, {db}, info) {
        if (!args.query) {
            return db.posts
        }
        return db.posts.filter(post =>
            post.title.toLowerCase().includes(args.query.toLowerCase()))
    },
    users(parent, args, {db}, info) {
        if (!args.query) {
            return db.users
        }
        return db.users.filter((user) =>
            user.name.toLowerCase().includes(args.query.toLowerCase()))
    },
    me() {
        return {
            id: 'abc123',
            name: 'Aquina',
            email: null,
            age: 23
        }
    },
    comments(parent, args, {db}, info) {
        return db.comments

    },
    post() {
        return {
            id: '234dgf',
            title: 'China War',
            body: null,
            published: true
        }
    }
}

export {Query as default}