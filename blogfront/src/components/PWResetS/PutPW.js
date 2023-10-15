
function PutPW(props    ) {

    let str = ["기존 비밀번호", "새로운 비밀번호", "새로운 비밀번호 확인"]

    return (


        <div className="put-pw">

            <input type="password" id="pw" placeholder={str[Number(props.id)]}/>

        </div>



    )


}
export default PutPW;