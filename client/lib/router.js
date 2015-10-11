FlowRouter.route('/:debateId', {
    subscriptions: function (params, queryParams) {
        this.register('debate', Meteor.subscribe('debate', params.debateId));
    },
    action: function (params) {
        BlazeLayout.render("layout", {
            content: "debate"
        });
    }
});

FlowRouter.route('/', {
    action: function (params) {
        BlazeLayout.render("layout", {
            content: "guest"
        });
    }
});