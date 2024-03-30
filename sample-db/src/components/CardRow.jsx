const CardRow = (props) => {

    const { cardName, color, set, isEven } = props;

    return (
        <div className={`card-row ${isEven ? 'even-row' : 'odd-row'}`}>
            <table>
                <tbody>
                    <tr>
                        <td className="card">{cardName}</td>
                        <td className="color">{color}</td>
                        <td className="set">{set}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default CardRow;