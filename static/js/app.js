// 画像のサーバーへのPOST
function sendImage() {
    $('#answer').html("")

    var count = 0
    var num = document.getElementById("iter-input").valueAsNumber
    var img = document.getElementById("testimage").toDataURL('image/png');
    img = img.replace('image/png', 'image/octet-stream');
    $.ajax({
        type: "POST",
        url: "/api",
        data: {
            "img": img
        }
    })
    .done( (data) => {
        $('#answer').html('predict = <span class="answer">'+data['ans']+'</span>')
        $('ul#anslist').append('<li>0: '+data['c0']+'</li>');
        $('ul#anslist').append('<li>1: '+data['c1']+'</li>');
        $('ul#anslist').append('<li>2: '+data['c2']+'</li>');
        $('ul#anslist').append('<li>3: '+data['c3']+'</li>');
        $('ul#anslist').append('<li>4: '+data['c4']+'</li>');
        $('ul#anslist').append('<li>5: '+data['c5']+'</li>');
        $('ul#anslist').append('<li>6: '+data['c6']+'</li>');
        $('ul#anslist').append('<li>7: '+data['c7']+'</li>');
        $('ul#anslist').append('<li>8: '+data['c8']+'</li>');
        $('ul#anslist').append('<li>9: '+data['c9']+'</li>');
    });
    for(var ii=0; ii<num; ii++){
      $('#answer').html('predict = <span class="answer">'+ii+'</span>')
    }
}


