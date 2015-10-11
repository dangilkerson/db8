Debates = new Mongo.Collection('debates');

Debates.attachBehaviour('timestampable');

Debates.start = function(debate){
    debate.sidea.id = 'sidea';
    debate.sideb.id = 'sideb';
    return this.insert(debate)
}

Debates.addPro = function(id, side, pro) {
    Meteor.call('addPro', id, side, pro);
}