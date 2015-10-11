Template.guest.events({
    'submit form': function (e) {
        e.preventDefault();

        var data = form2js(e.currentTarget);
        var debateId = Debates.start(data);
        FlowRouter.go("/" + debateId);
    }
})