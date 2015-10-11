Debates = new Mongo.Collection('debates');

Debates.start = function(debate){
    return this.insert(debate)
}