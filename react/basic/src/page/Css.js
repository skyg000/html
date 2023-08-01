
function Css(){
    return(
        <>
        <h2> css </h2>
            % class = jsx문법에서 className으로 입력해줘야함<br/>
            % jsx문법에서 스크립트를 적용시킬려면 &#123; &#125; 기호를 반드시 사용<br/>
            % style = &#123; &#125; <br/>
                &#123;border:'1px solid white' &#125; 객체 형태를 사용하여서 &#123; &#125;가 두번 쓰임<br/>
            % style = &#123;  &#123;border:'1px solid white' &#125; &#125;
        <hr/>
        <h2> scss </h2>
            # sass install(npm install sass) sass install하는 명령어<br/>
            # js 문서 안에서 scss파일 호출방법 (import './App,scss')<br/>
            # 작성방법은 기존과 동일
        </>
    );
}
export default Css;