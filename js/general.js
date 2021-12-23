window.onload = function() {gohome(); hello()};
window.onscroll = function() {scrollFunction(); fixedNav()};


function scrollFunction(){
    var tmp = (document.body.scrollHeight - 1000);

    if((document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) && document.documentElement.scrollTop < tmp){
        document.getElementById("btn_top").style.display = "block";
        document.getElementById("side-slideshow").style.display = "block";
    }else{
        document.getElementById("btn_top").style.display = "none";
        document.getElementById("side-slideshow").style.display = "none";
    }
}

function topFunction(){
    $('html, body').animate({scrollTop:0}, 'slow');
}

function fixedNav(){
    var nav = document.querySelector('.main-nav');
    var lastScrollTop = 0;
    // console.log('run');
    
    var st = window.pageYOffset || document.documentElement.scroll; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop ){
        // downscroll code
        nav.style.position = "relative";
        nav.style.height = "150px";
        nav.style.boxShadow = "none";
        // console.log('down');
    } else{
        // upscroll code
        if(document.documentElement.scrollTop > 500){
        nav.style.position = "fixed";
        nav.style.height = "110px";
        nav.style.zIndex = "200";
        nav.style.boxShadow = "2px 2px 20px 1px black";
        // console.log('up');
        }
    }
    lastScrollTop = st <= 0 ? 0 : st;
}

function gohome(){
    var home = document.querySelectorAll('.home');

    for(var i = 0; i < home.length; i++){
        var link = home[i].firstElementChild;
        if(localStorage["currUser"] != 'user'){
            if(link.href.indexOf('index') > -1){
                var tmp = link.href.replace('index','home');
                // console.log('ok');
                link.href = tmp;
                // console.log(link);
            }else{
                // console.log("don't need to change");
            }
    
        }else{
            // console.log('false');
        }
    }
}

function hello(){
    var item = document.querySelector('.hello');
    if(item != null){
        item.innerHTML = localStorage['currUser'];
    }
    // login
    var login = document.querySelector('.registion').querySelector('.two');
    var signin = document.querySelector('.registion').querySelector('.one');
    if(localStorage['currUser'] != 'user'){
        signin.style.display = 'none';
        login.style.display = 'flex';
    }else{
        signin.style.display = 'flex';
        login.style.display = 'none';
    }
}

// comment
function upComment(){
    if(localStorage['currUser'] != 'user'){
        var input = document.querySelector('#content-comment').value;
        var list = document.querySelector('#showComments');
        var childs = list.children;
        var name = localStorage['currUser'];

        var tmp = childs[childs.length-1];
        var nameC = tmp.querySelector('.detail-list-comment-title').firstElementChild;
        var content = tmp.querySelector('.detail-list-comment-content');
        var time = tmp.querySelector('.detail-list-comment-title').lastElementChild;
        // change infor of last comment
        content.innerHTML = input;
        nameC.innerHTML = name;
        time.innerHTML = "1 giây trước";
        document.querySelector('#content-comment').value = '';
        // remove last child from list
        list.removeChild(childs[childs.length-1]);
        // add list to temp array to reverse
        var t = []; 
        for(var i = 0; i < childs.length; i++){
            t.push(childs[i]);
        }

        // clear all DOM curr in list
        while(list.firstElementChild){
            list.removeChild(list.firstChild);
        }
        // append child form array to list DOM .. and done :333 (lam lan 2 trong bat luc)
        list.appendChild(tmp);
        for(var i = 0; i < t.length; i++){
            list.appendChild(t[i]);
        }
    }else{
        window.location.href = 'login.html';
    }
}
function comment_reaction(val, ele){
    var tmp = ele.parentNode;
    var target = "comment_reaction_" + val;
    var child = tmp.children;

    for(var i = 0; i < child.length; i++){
        if(child[i].id == target){
        var get = parseInt(child[i].innerHTML, 10);
        get++;
        child[i].innerHTML = get;
        break; 
        }
    }
}