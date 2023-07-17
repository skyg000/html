$.ajax({
    url:"./data.json",
    success:function(data){
        let tag ='';
        /* $('다중선택자').each(function(){}); jquery반복문 */
        $.each(data.items,function(key,vlaue){ /* foreach 와 다르게 each는 key값이 먼저 쓰임 */
            tag += `<div class="thumb">
                        <a href="${vlaue.detail}" class="image">
                            <img src="${vlaue.thumb}" alt="" />
                        </a>
                        <h2>${vlaue.name}/h2>
                    </div>`
        })
        $('#main').html(tag);
        $('.thumb').on('click',function(e){
            e.preventDefault();
            $('.poptrox-overlay').show();
            /* let idx = $(this).index();
                $('.thumb').eq(idx); */
            /* 클릭한 아이템의 값을 가져오기 */
            let detail = $(this).find('>a').attr('href');
            let name = $(this).find('h2').text();

            /* 팝업창의 정보를 바꾸기 */
            $('.pic img').attr('src',detail);
            $('.caption').text(name);
        })
        $('.closer').on(function(){
            e.preventDefault();
            $('.poptrox-overlay').hide();
        })
    },
    error:function(){}
});