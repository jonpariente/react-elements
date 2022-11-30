const Element = (props) => {
    return (
        <div className={`element ${props.category} row-start-${props.row} col-start-${props.column}`}>
            <div className="element-atomic-number">{props.atomicNumber}</div>
            <div className="element-molar-mass">{Math.round(props.atomicMass * 1000 + Number.EPSILON ) / 1000}</div>
            <div className="element-symbol">{props.symbol}</div>
            <div className="element-name">{props.name}</div>
        </div>
    )
}

export default Element;
