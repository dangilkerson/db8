Template.debate.helpers({
    debate: function() {
        return Debates.findOne({_id: FlowRouter.getParam('debateId')});
    }
});