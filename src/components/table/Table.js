import "./Table.css";

const Table = () => {
    return (
        <div className="table__responsive">
            <table className="table table__hover">
                <thead className="">
                    <tr>
                        <th scope="col">Payout ID</th>
                        <th scope="col">Source</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>KLA12578DHQ</p>
                        </td>
                        <td>
                            Vel pellentesque ornare
                        </td>
                        <td>
                            <span className="green">25th November, 2020</span>
                        </td>
                        <td>
                            $1,200
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>KLA12578DHQ</p>
                        </td>
                        <td>
                            Vel pellentesque ornare
                        </td>
                        <td>
                            <span className="green">25th November, 2020</span>
                        </td>
                        <td>
                            $1,200
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>KLA12578DHQ</p>
                        </td>
                        <td>
                            Vel pellentesque ornare
                        </td>
                        <td>
                            <span className="green">25th November, 2020</span>
                        </td>
                        <td>
                            $1,200
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>KLA12578DHQ</p>
                        </td>
                        <td>
                            Vel pellentesque ornare
                        </td>
                        <td>
                            <span className="green">25th November, 2020</span>
                        </td>
                        <td>
                            $1,200
                        </td>
                    </tr>   
                </tbody>
            </table>
        </div>
    )
}

export default Table
