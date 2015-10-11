Debates = new Mongo.Collection('debates');

Debates.start = function(topic){
    return this.insert({
        topic: topic
    })
}