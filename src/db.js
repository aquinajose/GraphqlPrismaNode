
let users = [{
    id: '1',
    name: 'Aquina',
    age: 27,
    email: 'aquina@example.com'
}, {
    id: '2',
    name: 'Pipps',
    email: 'pippa@example.com'
}, {
    id: '3',
    name: 'Aby',
    age: 27,
    email: 'aby@example.com'
}]
let comments = [{
    id: 'com1',
    text: 'comment1',
    author: '2',
    post: 'p1'
},
{
    id: 'com2',
    text: 'comment2',
    author: '2',
    post: 'p2'
},
{
    id: 'com3',
    text: 'comment3',
    author: '3',
    post: 'p3'
}]
let posts = [{
    id: 'p1',
    title: 'first post',
    published: true,
    body: 'first post content',
    author: '1'
}, {
    id: 'p2',
    title: 'second post',
    published: false,
    body: 'second post content',
    author: '1'
}, {
    id: 'p3',
    title: '3rd post',
    published: true,
    body: '3rd post content',
    author: '2'
}]

const db={
    users,
    posts,
    comments
}
export {db as default}