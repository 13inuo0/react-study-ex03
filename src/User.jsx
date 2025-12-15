import { useParams } from "react-router-dom"

export default function User(){
    const {usename} = useParams() //주소에서 name
    return(
        <div>
            <h1>유저 페이지</h1>
            <p>당신의 이름은 {usename}입니다.</p>
        </div>
    )
}