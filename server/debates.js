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
})