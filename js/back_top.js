 
       var _scroll = (function(){
           var $up = document.querySelector('.back_top');
           return {
               init: function() {
                   
                   this.event()
               },
               event: function() {
                    //  ������ť�ص�����
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
                        // ��ȡ��������
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
    //    ��������ң����Ժ�������ʱ��������Ϊ����
     //  _scroll.init();

   