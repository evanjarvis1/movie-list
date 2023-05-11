import "./PageButtons.css"

const PageButtons = (props) => {

    let page = props.page

    let setPage = props.setPage

    const increment = () => {
        setPage(page + 1)
        console.log(page)
    }

    const decrement = () => {
        setPage(page - 1)
    }

    return (
        <div className="button-container">
            <button onClick={page !== 1 && decrement}>{`<=`}</button>
            <p> &nbsp; Results &nbsp;</p>
            <button onClick={increment}>{`=>`}</button>
    </div>
    )
}

export default PageButtons;