/* prepend(선택자앞) append(선택자뒤) */
$('body').prepend('<header></header');
$('header').load('./inc.html nav', menu);
function menu(){
    $('header nav a').eq(localStorage.num).css('color','yellow')
    $('header nav a').on('click',function(e){
        e.preventDefault();
        localStorage.setItem('num',$(this).index());
        location.href = $(this).attr('href')
})
}








