exports.routes = function (map) {
    map.get('/', 'welcome#index', {as: 'root'});
    map.get('welcome', 'welcome#index', {as: 'welcome'});
    map.resources('posts');
    // Generic routes. Add all your routes below this line
    // feel free to remove generic routes
    map.all(':controller/:action');
    map.all(':controller/:action/:id');
};