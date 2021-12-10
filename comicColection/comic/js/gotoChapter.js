function preChapter(){
    var thisHref = window.location.pathname;
    var chapters = document.getElementsByClassName('danh-sach-chuong')[0].options.length;
    // console.log(chapters);

    var match = thisHref.match(/chap_(\d+)/)
    if (match) {
        if(match[1] > 1){
            var pre = parseInt(match[1]) - 1;
            var tmp = thisHref.replace(match[1], pre);
            window.location.href = tmp;
        }
    }

}

function nextChapter(){
    var thisHref = window.location.pathname;
    var chapters = document.getElementsByClassName('danh-sach-chuong')[0].options.length;
    // console.log(chapters);

    var match = thisHref.match(/chap_(\d+)/)
    if (match) {
        if(match[1] < chapters){
            var next = parseInt(match[1]) + 1;
            var tmp = thisHref.replace(match[1], next);
            window.location.href = tmp;
        }
    }

}