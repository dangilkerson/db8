Debates = new Mongo.Collection('debates');

Debates.attachBehaviour('timestampable');

Debates.start = function(debate){
    return this.insert(debate)
}