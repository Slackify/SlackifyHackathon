$(document).ready(function() {
    $('#convert').on('click', function() {
      convertMessage($('#textInput').val());
     $.get('/emoji/' + $('#textInput').val(), function(response) {
        $.ajax({
            url:'https://slack.com/api/chat.postMessage',
            type: "POST",
            data: {
                "token" : 'xoxp-140168250439-479776639701-734857237043-997ce44f79add25b19bbdc5cc6ebe670',
                "channel": "GK08B28MQ",
                 "text": response
            },
            dataType: 'text',
            success: function(data) {
                console.log("success: " +data)
            },
            error: function(xhr, status, error) {
                console.log(error)
            } 
        })
     }) 
    })

    $('#tryAgain').on('click', function() {
       convertMessage($('#textInput').val());

    })

    function convertMessage(message) {
        $.get('/emoji/' + message, function(response) {
            $('#emojiMessage').html(response)
        });
    }
})
