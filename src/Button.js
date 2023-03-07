const Button = ({btnTxt, clickProps}) => {
    return(
        <>
            <button onClick={clickProps}><span>{btnTxt}</span></button>
        </>
    )
}

export default Button;