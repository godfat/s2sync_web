
$(document).ready(function() {
    $('#content').keyup(function() {
        $('#word_count_indicator').html($('#content').val().length);
    });


    $('#post_content').submit(function(event) {
        event.preventDefault();
        var formdata = $('#post_content').serialize();
        $.ajax({
            type: "POST",
            url: "/post",
            data: formdata,
            success: function(msg) {
                $('#post_result').text(msg).fadeIn("slow");
                $('#content').val('');
                $('#word_count_indicator').html('0');
            }
        });
    });
});

function getTitle() {
    $.get('/get_page_title/' + encodeURIComponent($('#link_url').val()),
        function(data) {
            $('#content').val($('#link_url').val() + ' (' + data +') ' + $('#content').val());
        }); 
}