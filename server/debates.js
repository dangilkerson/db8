Debates.allow({
    insert: function (userId, doc, fields) {
        return userId;
    },

    update: function (userId, doc, fields) {
        return false;
    },

    remove: function (userId, doc) {
        return false;
    }
});

Meteor.publish("debate", function(id){
    return Debates.find({_id : id});
});

Meteor.methods({
    'addPro': function(id, side, pro) {
        var proForSide = {};
        proForSide[side + ".pros"] = pro;
        Debates.update({_id: id}, {
            $push: proForSide
        })
    }
});