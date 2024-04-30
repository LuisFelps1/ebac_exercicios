$(document).ready(function () {

    $('form').submit(function (e) {

        e.preventDefault()

        const input = $('input').val().trim()

        const li = $('<li> </li>').html(input)

        $('ul').append(li)

        $('li').click(function() {
            $(this).addClass('checked');
        })

    })
})