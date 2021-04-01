// 关闭功能
$(".close").click(function () {
  $(".app").css({
    "display": "none"
  })
})



var imgCount = 8;
var index = 1;
var intervalId;
var buttonSpan = $('.pointer')[0].children;
autoNextPage();
function autoNextPage() {
  intervalId = setInterval(function () {
    nextPage(true);
  }, 1500);

}
$('.container').mouseover(function () {
  clearInterval(intervalId);
});
$('.container').mouseout(function () {
  autoNextPage();
});
$('.right').click(function () {
  nextPage(true);
});
$('.left').click(function () {
  nextPage(false);
});
clickButtons();


function clickButtons() {
  var length = buttonSpan.length;
  for (var i = 0; i < length; i++) {
    buttonSpan[i].onclick = function () {
      $(buttonSpan[index - 1]).removeClass('on');
      if ($(this).attr('index') == 1) {
        index = 8;

      } else {
        index = $(this).attr('index') - 1;
      }
      nextPage(true);

    };
  }
}
function nextPage(next) {
  var targetLeft = 0;
  $(buttonSpan[index - 1]).removeClass('on');
  if (next) {
    if (index == 8) {
      targetLeft = 0;
      index = 1;
    } else {
      index++;
      targetLeft = -9.6 * (index - 1);
    }
  } else {
    if (index == 1) {
      index = 8;
      targetLeft = 9.6 * (imgCount - 1);
    } else {
      index--;
      targetLeft = -9.6 * (index - 1);
    }
  }
  $('.list').animate({ left: targetLeft + 'rem' });
  $(buttonSpan[index - 1]).addClass('on');
}
//轮播图js结束


// 广告关闭功能  
$(".close").click(function () {
  $(this).css({
    "display": "none"
  })
})
//返回顶部
$(function () {
  $(document).scrollTop(0);
  // var boxTop = $(".back").offset().top;
  // $(window).scroll(function () {
  //   if ($(document).scrollTop() >= boxTop) {
  //     $(".back").style.display = 'none';
  //   } else {
  //     $(".back").style.display = 'block';
  //   }
  // });
  $(".back").click(function () {
    $("body, html").stop().animate({
      scrollTop: 0
    });
  })
})
//搜索框粘性定位
window.onscroll = function () {
  var a = document.documentElement.scrollTop;
  var navs = document.getElementById("navflexds");
  // console.log(a)
  if (a <= 350) {
    navs.style.display = 'none';
  } else {
    navs.style.display = 'block';

  }
  var b = document.documentElement.scrollTop;
  var tops = document.getElementById("back-top");
  console.log(b)
  if (b <= 800) {
    tops.style.display = 'none';
  } else {
    tops.style.display = 'block';

  }
}
