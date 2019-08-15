// 画像のサーバーへのPOST
function sendImage() {
    $('#answer').html("")
    $('ul#anslist > li').each(function(){
        $(this).remove();
    });

    var summary = new Map();
    var num = document.getElementById("iter-input").valueAsNumber
    num = Math.round(num)
    var img = document.getElementById("testimage").toDataURL('image/png');
    img = img.replace('image/png', 'image/octet-stream');

    for(var ii=0; ii<num; ii++){
        $.ajax({
            type: "POST",
            url: "/api",
            data: {
                "img": img
            }
        })
        .done( (data) => {
            $('#answer').html('predict = <span class="answer">'+data['ans']+'</span>')
            // backend実行回数の集計・表示
            hostname = data['hostname'];
            if ( summary.has(hostname) == false ){
                summary.set(hostname, 1);
                $('ul#anslist').append('<li id='+hostname+'>host='+hostname+': 1</li>');
            }else{
                var count = summary.get(hostname)+1;
                summary.set(hostname, count);
                if (count % 10 == 0){
                    $('ul#anslist > li').each(function(){
                        $(this).remove();
                    });
                    summary.forEach(function(value, key){
                        $('ul#anslist').append('<li id='+key+'>host='+key+': '+value+'</li>');
                    });
                }
//                // うまくいかねえ
//                var idhost = 'ul#anslist > li#' + hostname;
//                var objhost = $(idhost)
//                $(idhost).outerText = hostname+': '+count;
            }
        });
    }
}
