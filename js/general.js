var usernameArray = ['thaomy310702', 'eelcomic2021', 'thaomy310702@gmail.com'];
var passwordArray = ['310702', '123456', '123456'];
// var currUser = "user";

window.onload = function() {baloonLinked(); loadingComic(); hello()};
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
    if(document.querySelector('.hello') != null){
        var item = document.querySelector('.hello');
        if(item != null){
            item.innerHTML = localStorage['currUser'];
        }
        // login
        var login = document.querySelector('.registion').querySelector('.two');
        var signin = document.querySelector('.registion').querySelector('.one');

        console.log(window.localStorage.getItem('currUser'));
        if(window.localStorage.getItem('currUser') != 'user'){
            signin.style.display = 'none';
            login.style.display = 'flex';
            console.log('ok');
        }else{
            signin.style.display = 'flex';
            login.style.display = 'none';
            console.log('ko');
        }
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
        
        console.log(input.length);
        if(input > 0){
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
            document.querySelector('#content-comment').focus;
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

// contact
var flag =  new Array(3).fill(0);
function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
      input.blur();
      return true;
    } else {
    //   alert("Email không hợp lệ");
    //   input.focus();
      return false;
    }
}

function informed(){
    var fm = document.getElementById('contactForm');
    var name = fm.querySelector('#yourname').firstElementChild;
    var mail = fm.querySelector('#yourmail').firstElementChild;
    var content = fm.querySelector('#yourmessage').firstElementChild;
    var warning = fm.querySelectorAll('.warning');

    var tmp = setInterval(() => {
        if(flag.includes(0)){
            if(!ValidateEmail(mail)){
                warning[1].style.display="inline";
                flag[2] = 0;
            }else{
                warning[1].style.display="none";
                flag[1] = 1;
            }
            if(content.value.length == 36){
                warning[2].style.display="inline";
                flag[1] = 0;
            }else{
                warning[2].style.display="none";
                flag[2] = 1;
            }
            if(name.value.length == 0){
                warning[0].style.display="inline";
                flag[0] = 0;
            }else{
                warning[0].style.display="none";
                flag[0] = 1;
            }
        }else{
            console.log(flag);
            clearInterval(tmp);
        }
    }, 50);

    if(!flag.includes(0)){
        console.log('run');
        alert('Thông tin của bạn đã được chúng tôi tiếp nhận, chúng tôi sẽ phản hồi bạn sớm nhất có thể.');
        flag.fill(0);
    }
    console.log(flag.includes(0));
    console.log(flag);
}

// user balloon
function baloonLinked(){
    if(document.getElementById('menu-left-balloon') != null){
        var user = document.getElementById('menu-left-balloon');
        var book = user.querySelector('.one').firstElementChild;
        // var logOut = user.querySelector('.two').firstElementChild;
    
        if(localStorage['currUser'] != 'user'){
            var temp = book.href.replace('login', 'bookshelf');
            book.href = temp;
        }
    }
}

//follow
function follow(){
    if(localStorage['currUser'] !== 'user'){
        //ảnh bìa
        var i = document.querySelector('.cover-img').firstElementChild.src.substring(22);
        //tiêu đề truyện
        var tl = document.querySelector('.cover-title').innerHTML;
        //chap mới nhất hiện tại của truyện
        var chapterNew = document.querySelector('#episode_list').lastElementChild.querySelector('.no').innerHTML;
        var url = window.location.href;
        //ink ảnh
        var link = url.substring(21); //khi web được bật thông qua file trong folder zip
        
        //trường hợp web được host lên
        if(url.includes('eelcomic')){
            link = url.splice(url.indexOf('eelcomic') + 8, url.length-1, '');
            console.log(link);
        }else{
            console.log('nope');
        }
    
        var comics = [];
        comics = JSON.parse(localStorage.getItem('followComics')) || [];
        const tmp = {image: i, title: tl, chap: chapterNew, url: link};
    
        //kiểm tra xem truyện đã lưu vào tủ sách chưa
        var exists = 0;
        for(var i = 0; i < comics.length; i++){
            if(comics[i].title == tl){
                exists = 1;
            }
        }
        if(exists == 0){
            comics.push(tmp);
            localStorage.setItem("followComics", JSON.stringify(comics)); 
            
            var count = parseInt(document.getElementById('count_bookmark').innerHTML, 10);
            count++;
            document.getElementById('count_bookmark').innerHTML = count;

        }else{
            alert("Truyện đã được lưu vào tủ sách");
        }
    }else{
        //yêu cầu người dùng đăng nhập
        window.location.href = "../../../../login.html";
    }    
}

// bookshelf
// insert a string into a string with index
String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function loadingComic(){
    if(document.querySelector('.genre-list') != null){
        var item = document.querySelector('.genre-list').querySelector('#form');
        var comics = [];
        comics = JSON.parse(localStorage.getItem('followComics')) || [];

        var list = document.querySelector('.cw-list');
        list.innerHTML = '';

        if(localStorage['currUser'] != 'user'){
            for(var i = 0; i < comics.length; i++){
                var li = document.createElement('li'); 
                li = item.cloneNode(true);  
    
                var content = comics[i];
                var tl = li.querySelector('.infor');
                var chap = li.querySelector('.link-chapter');
                var img = li.querySelector('.comic--img');
    
                tl.innerHTML = content.title;
                img.src = './' + content.image;
                chap.innerHTML = content.chap;

                // link chapter
                var chapterNum = chap.innerHTML;
                var comicLinkContainer = li.querySelector('.cw-list-item');
                comicLinkContainer.href = content.url; 

                li.querySelectorAll('.link-chapter').forEach(button => {
                    button.addEventListener('click', e => {
                        var comicLinkContainer = li.querySelector('.cw-list-item');
                        var temp = '_chap_' + chapterNum[chapterNum.length - 1];
                        var chapterLink = comicLinkContainer.href.splice(comicLinkContainer.href.length - 5, 0, temp);
                        
                        comicLinkContainer.href = chapterLink;
                    });
                });
                
                // remove
                li.querySelectorAll('.remove').forEach(button => {
                    button.addEventListener('click', () => {
                        var comics = [];
                        comics = JSON.parse(localStorage.getItem('followComics')) || [];
    
                        var item = button.parentElement.parentElement;
                        var parent = item.parentElement;
                        var tl = item.querySelector('.infor');
    
                        for(var i = 0; i < comics.length; i++)
                        {
                            if(comics[i].title == tl.innerHTML){
                                comics.splice(i, 1);
                            }
                        }
                        parent.removeChild(item);
                        localStorage.setItem("followComics", JSON.stringify(comics)); 
                    });
                });
    
                list.appendChild(li);
            }
            localStorage.setItem("followComics", JSON.stringify(comics));
        }
    }
}


//registion
// for(var i = 0; i < usernameArray.length; i++){
//     if(usernameArray[i] in localStorage){
//     }else{
//         localStorage.setItem(usernameArray[i],passwordArray[i]);
//     }
// }

localStorage.setItem('thaomy310702','310702');
localStorage.setItem('eelcomic2021','123456');
// localStorage.setItem('currUser','user');

if(document.getElementsByClassName('pw-container') != null){
    var begin = setInterval(() => {
        var pwC = document.getElementsByClassName('pw-container');
        for(var i = 0; i < pwC.length; i++){
            if(pwC[i].classList.contains('valid')){
                pwC[i].classList.remove('valid');
            }
        }
    
        var ps = document.getElementById("pss");
        var rp = document.getElementById("rp-pss");
        if(rp != null){
            if(ps.value.length > 5){
                var temp = ps.parentElement;
                temp.classList.add('valid');
            }
            if(rp.value.length > 5){
                var temp = rp.parentElement;
                temp.classList.add('valid');
            }
        }
    }, 1000);
}
