const Modal = ({headTxt, txt, myHistoryTotal, otherHistoryTotal, playStop}) => {
    function closed(e){
        e.target.parentNode.parentNode.style.display = 'none';

        //초기화
        playStop()
    }
    return(
        <div className="modalWrap">
            <div className="modalCnt">
                <h2>{headTxt}</h2>
                <div className="box">
                    <div>
                        <h3>A팀</h3>
                        <p>{myHistoryTotal}</p>
                    </div>
                    <div className="verse">VS</div>
                    <div>
                        <h3>B팀</h3>
                        <p>{otherHistoryTotal}</p>
                    </div>
                </div>
                <p className="resultTxt">{txt}</p>
                <button className="btnClosed" type="button" onClick={closed}>닫기</button>
            </div>
        </div>
    )
}

export default Modal;