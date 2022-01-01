function preChapter(){
    var thisHref = window.location.href;
    var url;

    if(thisHref.includes('eelcomic')){
        url = thisHref.splice(0, thisHref.indexOf('eelcomic') + 8, '');
    }else{
        url = thisHref.substring(21);
    }

    var head = thisHref.splice(thisHref.indexOf('eelcomic') + 8, thisHref.length - 1, '');

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
    var url;

    if(thisHref.includes('eelcomic')){
        url = thisHref.splice(0, thisHref.indexOf('eelcomic') + 8, '');
    }else{
        url = thisHref.substring(21);
    }

    var head = thisHref.splice(thisHref.indexOf('eelcomic') + 8, thisHref.length - 1, '');
    console.log(url);
    console.log(head);

    var chapters = document.getElementsByClassName('danh-sach-chuong')[0].options.length;

    var match = url.match(/chap_(\d+)/)
    if (match) {
        if(match[1] < chapters){
            var next = parseInt(match[1]) + 1;
            var newUrl = url.replace(match[1], next);

            var go = head + newUrl;
            window.location.href = go;
        }
    }
}