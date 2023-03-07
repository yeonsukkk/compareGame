import Dics from './Dics';

const Border = ({team, color, history}) => {
    let total = history.reduce((prevNum, nextNum) => prevNum + nextNum, 0);
    let historyLast = (history[history.length - 1] === undefined) ? 1 : history[history.length - 1];
    return(
        <>
            <div className="box">
                <h1>&#60; {team} &#62;</h1>
                <figure>
                    <Dics color={color} historyLast={historyLast} />
                    <figcaption>
                        <dl>
                            <dt>기록</dt>
                            <dd>{history.join(', ')}</dd>
                            <dt>총합</dt>
                            <dd>{total}</dd>
                        </dl>
                    </figcaption>
                </figure>
            </div>
        </>
    )
}

export default Border;