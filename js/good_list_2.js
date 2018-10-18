var index_js = (function(){
    var $ul = $('.tbox');
    var shopList = localStorage.shopList || '[]';
    shopList = JSON.parse(shopList);
    return {
        init() {
            this.events();
            this.getData()
        },
        getData() {
            $.get('json/shop.json',this.insertData , "json")
        },
        insertData(data) {
            var str = []
            var li = `<tr id="${data[1].id}">
                            <td>${data[1].name}</td>
                            <td>${data[1].price}</td>
                            <td><input type='number' value='1' /></td>
                            <td><button class='btn btn-danger'>添加购物车</button></td>
                            </tr>`
                str.push(li);
            $ul.html(str.join(''));
        },
        addShop(obj) {
            var add = true;
            for(var i= 0; i<shopList.length; i++) {
                if(obj.id == shopList[i].id) {
                    add = false
                    shopList[i].count += obj.count;
                    break;
                } 
            }
            if(add) {
                shopList.push(obj);
            }
            localStorage.shopList= JSON.stringify(shopList);
            console.log(localStorage.shopList)
        },
        events() {
            var _this = this;
            $ul.on('click', '.btn', function() {
                var tr = $(this).closest('tr');
                var tdAll = tr.children('td');
                var obj = {
                    
                    id: tr.attr('id'),
                  
                    count: Number(tdAll.find('input').val()),
                   
                    name: tdAll.eq(0).html(),
                  
                    price: tdAll.eq(1).html()
                }
                _this.addShop(obj);
            })
        }
    }
})()
index_js.init()