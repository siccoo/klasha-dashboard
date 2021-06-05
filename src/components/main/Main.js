import "./Main.css";
import Table from "../table/Table";

const Main = () => {
    return (
        <main>
            <div className="main__card">
                <div className="card one">
                    <div>
                        <p>Total account balance</p>
                        <form action="#">
                            <select name="currency" id="currency">
                                <option value="usd">USD</option>
                                <option value="kes">KES</option>
                                <option value="ngn">NGN</option>
                                <option value="ghc">GHC</option>
                            </select>
                        </form>
                    </div>
                    <hr/>
                    <h3>$5,332.18</h3>
                    <p>1 USD = 381.97 NGN</p>
                </div>
                <div className="card two">
                    <div>
                        <p>Funds on hold</p>
                    </div>
                    <hr/>
                    <h3>$5,332.18</h3>
                </div>
            </div>
            <div className="table">
                <Table />
            </div>
        </main>
    )
}

export default Main
