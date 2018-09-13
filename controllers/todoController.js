var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({extended: false});

var mongoose = require('mongoose');
mongoose.connect('mongodb://genejing:jingxinhao666778@ds155292.mlab.com:55292/my-music');
var todoSchema = new mongoose.Schema({
    item: String
});
var Todo = mongoose.model('Todo',todoSchema);

var data = [{item:'get milk'}, {item: "walk dog"}];

module.exports = function(app) {
    app.get('/todo',function(req, res){
        Todo.find({}, function(err, data){
            if (err) throw err;
            res.render('todo', {todos: data});
        });
        
    });

    app.post('/todo',urlencodeParser,function(req, res){
        var itemOne = Todo(req.body).save(function(err, data){
            if(err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item',function(req, res){
        // data = data.filter(function(todo){
        //     return todo.item.replace(/ /g, "-") != req.params.item;
        // });
        Todo.find({item: req.params.item.replace(/-/g, " ")}).remove(function(err, data){
            if(err) throw err;
            res.json(data);
        });

    });

}