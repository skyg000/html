
function dataChange(pageUrl){
    $('main').removeClass('active')
    
    setTimeout(()=>{
        $('main').load(pageUrl,function(){
                $('main').addClass('active')
            });
        },1000)
}
dataChange('./main.html')

$('header a').on('click',function(e){
    e.preventDefault();
    let url = $(this).attr('href')
    history.pushState({num:$(this).index()},'',url); /* history에 값을 쌓는명령 */
    dataChange(url)
})
$(window).on('popstate',function(){
    let num = history.state?.num || 0; /* ? = 존재하지않을때는 앞까지 */
    let url = $('header a').eq(num).attr('href');
    dataChange(url);
})
/* 단점: 리소스가 계속 쌓여 처리속도가 높아짐 */