Template.addPro.events({
    'change': function(e) {
        e.preventDefault();
        var id = Template.parentData()._id;
        var pro = $(e.currentTarget).val();
        var side = Template.currentData().id;
        $(e.currentTarget).val("")
        Debates.addPro(id, side, pro);
    }
})