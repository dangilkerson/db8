Template.debate.helpers({
    debate: function () {
        return Debates.findOne({_id: FlowRouter.getParam('debateId')});
    },
    url: function () {
        return window.location.href;
    }
});

Template.debate.onRendered(function () {
    this.$('.ui.dropdown').dropdown()
});