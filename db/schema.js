/*
 db/schema.js contains database schema description for application models
 by default (when using jugglingdb as ORM) this file uses database connection
 described in config/database.json. But it's possible to use another database
 connections and multiple different schemas, docs available at

 http://railwayjs.com/orm.html

 Example of model definition:

 define('User', function () {
     property('email', String, { index: true });
     property('password', String);
     property('activated', Boolean, {default: false});
 });

 Example of schema configured without config/database.json (heroku redistogo addon):
 schema('redis', {url: process.env.REDISTOGO_URL}, function () {
     // model definitions here
 });

*/

var Post = describe('Post', function () {
    property('title', String, { index: true });
    property('body', String, { index: true });
    set('restPath', pathTo.posts);
});

var User = describe('User', function () {
    property('name', String, { index: true });
    property('email', String, { index: true });
    property('age', Number, { index: true });
    set('restPath', pathTo.users);
});

