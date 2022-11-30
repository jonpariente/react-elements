import data from './../data.json';
import Element from './Element';

const PeriodicTable = () => {
    const elementsList = data.elements.map(element => {
        return (
            <Element
                key={element.atomicNumber}
                atomicNumber={element.atomicNumber}
                atomicMass={element.atomicMass}
                symbol={element.symbol}
                name={element.name}
                category={element.category}
                row={element.row}
                column={element.column}
            />
        )
    })

    // const buttons = Array.from(new Set(data.elements.map(element => element.category)))
    // const buttonElements = buttons.map(button => <button className={`btn ${button}`}>{button}</button>)

    return (
        <>
            {/* {buttonElements} */}
            <div className="periodic-table">
                {elementsList}
            </div>
        </>
    )
}

export default PeriodicTable;
