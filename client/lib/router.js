FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("layout", {
            content: "guest"
        });
    }
});