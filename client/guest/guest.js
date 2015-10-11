Template.guest.events({
    'click .debate': function () {
        var debateId = Debates.start($(".topic").val());
        FlowRouter.go("/" + debateId);
    }
})