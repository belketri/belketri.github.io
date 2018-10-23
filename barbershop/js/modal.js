$(document).ready(function(){
    $('a#open-map').click(function(event){
        event.preventDefault();
        $('#modal-map')
        .css('display','block')
        .animate({opacity: 1, top: '31%'}, 200);
    });
});
$('#map-close').click(function(){
    $('#modal-map')
    .animate({opacity: 0, top: '45%'}, 200,
            function(){
        $(this).css('display','none');
        
    })
})
$(document).ready(function(){
    $('a#open-login').click(function(event){
        event.preventDefault();
        $('#modal-login')
        .css('display','block')
        .animate({opacity: 1, top: '6%'}, 200);
    });
});
$('#login-close').click(function(){
    $('#modal-login')
    .animate({opacity: 0, top: '45%'}, 200,
            function(){
        $(this).css('display','none');
        
    })
})