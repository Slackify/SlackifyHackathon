$(document).ready(function() {

    function sendToSlack(){
     $.get('/emoji/' + $('#textInput').val(), function(response) {
        $.ajax({
            url:'https://slack.com/api/chat.postMessage',
            type: "POST",
            data: {
                "token" : '',
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
    }

    $('#tryAgain').on('click', function() {
       convertMessage($('#textInput').val());

    })

    $('#convert').on('click', function() {
         console.log('{{SlackAuthKey}}')
        var text = $('#textInput').val()
        $('#resultTitle').html("Your message in slack talk:")
        $('#convert').html("Try again")
        $('#submitButton').html("<button type='submit' class='btn btn-primary' id='sendToSlack'>I like it, send to slack!</button>")
        $.get('/emoji/' + text, function(response) {
            $('#emojiMessage').html(response)
        });
        $('#sendToSlack').on('click', function() {
            sendToSlack()
        })
    })

    function convertMessage() {
        var message = $('#textInput').val();
        $.get('/emoji/' + message, function(response) {
            $('#emojiMessage').html(response)
        });
    }
})
