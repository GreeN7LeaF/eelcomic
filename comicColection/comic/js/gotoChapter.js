function preChapter(){
    var thisHref = window.location.href;
    var url = thisHref.substring(21);
    var head = "../../../..";
    // console.log(url);
    // console.log(head);

    var chapters = document.getElementsByClassName('danh-sach-chuong')[0].options.length;

    var match = url.match(/chap_(\d+)/)
    if (match) {
        if(match[1] < chapters){
            var pre = parseInt(match[1]) - 1;
            var tmp = url.replace(match[1], pre);

            var go = head + tmp;
            window.location.href = go;
        }
    }
}

function nextChapter(){
    var thisHref = window.location.href;
    var url = thisHref.substring(21);
    var head = "../../../..";
    console.log(url);
    console.log(head);

    var chapters = document.getElementsByClassName('danh-sach-chuong')[0].options.length;

    var match = url.match(/chap_(\d+)/)
    if (match) {
        if(match[1] < chapters){
            var next = parseInt(match[1]) + 1;
            var tmp = url.replace(match[1], next);

            var go = head + tmp;
            window.location.href = go;
        }
    }

}