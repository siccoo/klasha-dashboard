import "./Main.css";

const Main = () => {
    return (
        <main>
            <div className="main__cards">
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
                </div>
            </div>
        </main>
    )
}

export default Main
