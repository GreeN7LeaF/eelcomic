function openMore(){
    var tb = document.getElementById('infor-content');
    var moreBtn = document.getElementById('see-more');

    if(tb.style.height === "100px"){
      tb.style.height = "auto";
      moreBtn.innerHTML = "Rút gọn";
    }else{
      tb.style.height = "100px";
      moreBtn.innerHTML = "Xem thêm";
    }
  }