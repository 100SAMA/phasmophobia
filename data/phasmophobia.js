/*
菜单
 */
(function ($){
    "use strict";
    // 运行
    html_menu();
})(window.jQuery);

/*
菜单栏触发
 */
function html_menu(){
    "use-strict";


// 自变量
let header = document.querySelector('.toggle');
let section = document.querySelector('#header');

header.addEventListener('click', function (){
    header.classList.toggle('active');
    section.classList.toggle('active');
})
}