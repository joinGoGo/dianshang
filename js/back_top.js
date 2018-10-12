 
       var _scroll = (function(){
           var $up = document.querySelector('.back_top');
           return {
               init: function() {
                   
                   this.event()
               },
               event: function() {
                    //  单击按钮回到顶部
                   $up.onclick = function() {
                       var time = setInterval(function() {
                           var _top = document.documentElement.scrollTop - 10;
                           if(_top <= 0) {
                              _top = 0;
                              clearInterval(time);
                           }
                           document.documentElement.scrollTop =  _top;
                       }, 10);
                   }
                   window.onscroll = function() {
                        // 获取滚动距离
                       var top = document.documentElement.scrollTop;
                       console.log(top);
                       if(top >= 100) {
                         $up.style.display = 'block';
                       } else {
                         $up.style.display = 'none';
                       }
                   }
               }
           }
       }())
    //    作用域查找，是以函数定义时的作用域为主。
     //  _scroll.init();

   