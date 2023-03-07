import {useState} from 'react';

import Button from './Button';
import Border from './Border';
import Modal from './Modal';
import Header from './Header';

//style
import './index.css';


let clickNum = 0; // start 클릭 시 초기값
let limitNum = 5; // start 클릭 수 제한값
let txt; // result 버튼 클릭 시 각 팀 총합 비교 후 출력되는 텍스트
let myHistoryTotal; // A팀 총합
let otherHistoryTotal; // B팀 총합
const App = () => {
    const [myHistory, setMyHistory] = useState([]); // A팀 기록
    const [otherHistory, setOtherHistory] = useState([]); // B팀 기록
    const [buttonChange, setButtonChange] = useState('start')
    function playStart(){
        const nextMyNum = random(9); // A팀 랜덤 숫자 뽑기
        const nextOtherNum = random(9); // B팀 랜덤 숫자 뽑기
        
        setMyHistory([...myHistory, nextMyNum]); // A팀 랜덤 숫자 배열로
        setOtherHistory([...otherHistory, nextOtherNum]); // B팀 랜덤 숫자 배열로
        // console.log(set함수를 돌려서)

        clickNum++; // 클릭 수 체크
        if(clickNum === limitNum){ // start 버튼 4번 눌렀을 때 start 버튼 내용 -> result로 변경
            setButtonChange('result');
        }
        if(clickNum > limitNum) { // 클릭 수 체크 후 제한값 넘으면 reset
            // A팀 총합
            myHistoryTotal = myHistory.reduce((prevNum, nextNum) => prevNum + nextNum , 0)
            // B팀 총합
            otherHistoryTotal = otherHistory.reduce((prevNum, nextNum) => prevNum + nextNum , 0)

            // A팀 B팀 비교
            if(myHistoryTotal > otherHistoryTotal){
                txt = 'A팀이 이겼습니다.'
            }else if(myHistoryTotal < otherHistoryTotal){
                txt = 'B팀이 이겼습니다.'
            }else {
                txt = '비겼습니다.'
            }

            playStop(); // 게임 초기화
            setButtonChange('start'); // result 버튼명 변경

            // 결과창
            document.querySelector('.modalWrap').style.display = 'block'


            clickNum = 0;
        }
    }

    function random(n){
        return Math.ceil(Math.random() * n)
    }
    function playStop(){
        setMyHistory([])
        setOtherHistory([])
        clickNum = 0
    }
    return(
        <div>
            <div id="cnt">
                <Header txt="숫자 비교하기 게임" />
                <div id="btn">
                    <Button clickProps={playStart} btnTxt={buttonChange} />
                    <Button clickProps={playStop} btnTxt="reset"></Button>
                </div>
                <div id="container">
                    <Border team="A팀" color="green" history={myHistory} />
                    <Border team="B팀" color="red" history={otherHistory} />
                </div>
            </div>
            <Modal txt={txt} headTxt="게임 결과" myHistoryTotal={myHistoryTotal} otherHistoryTotal={otherHistoryTotal} playStop={playStop} />
        </div>
    )
}

export default App;