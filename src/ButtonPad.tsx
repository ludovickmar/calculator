import "./ButtonPad.css"
function ButtonPad() {
    return (
        <div>
            <table className="buttonPad">
                <tr>
                    <td><input className="button" type="button" value="C" id="btn"/></td>
                </tr>
                <tr>
                    <td><input className="button" type="button" value="1"/></td>
                    <td><input className="button" type="button" value="2"/></td>
                    <td><input className="button" type="button" value="3"/></td>
                    <td><input className="button" type="button" value="/"/></td>
                </tr>
                <tr>
                    <td><input className="button" type="button" value="4"/></td>
                    <td><input className="button" type="button" value="5"/></td>
                    <td><input className="button" type="button" value="6"/></td>
                    <td><input className="button" type="button" value="-"/></td>
                </tr>
                <tr>
                    <td><input className="button" type="button" value="7"/></td>
                    <td><input className="button" type="button" value="8"/></td>
                    <td><input className="button" type="button" value="9"/></td>
                    <td><input className="button" type="button" value="+"/></td>
                </tr>
                <tr>
                    <td><input className="button" type="button" value="."/></td>
                    <td><input className="button" type="button" value="0"/></td>

                    <td><input className="button" type="button" value="=" id="btn"/></td>
                    <td><input className="button" type="button" value="*"/></td>
                </tr>
            </table>
        </div>
    )
}

export default ButtonPad