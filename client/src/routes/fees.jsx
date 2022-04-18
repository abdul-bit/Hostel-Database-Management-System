import React from 'react'
import Interactive from '../components/Interactive'

function Fees() {
    return (
        <div>
            <Interactive />


            <table class="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th>Block</th>
                        <th>Annual Mess Charges[INR]</th>
                        <th>Annual Room Rent & Maintenance[INR]</th>
                        <th>Caution Deposit</th>
                        <th>Total[INR]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>New Block[NB]</td>
                        <td>41,000</td>
                        <td>79,000</td>
                        <td>30,000</td>
                        <td>1,50,000</td>
                    </tr>
                    <tr>
                        <td>I H Block</td>
                        <td>41,000</td>
                        <td>79,000</td>
                        <td>30,000</td>
                        <td>1,50,000</td>
                    </tr>
                    <tr>
                        <td>M M Block</td>
                        <td>41,000</td>
                        <td>79,000</td>
                        <td>30,000</td>
                        <td>1,50,000</td>
                    </tr>
                    <tr>
                        <td>I T Block</td>
                        <td>41,000</td>
                        <td>64,000</td>
                        <td>30,000</td>
                        <td>1,35,000</td>
                    </tr>
                    <tr>
                        <td>Mess Block[MB]</td>
                        <td>41,000</td>
                        <td>64,000</td>
                        <td>30,000</td>
                        <td>1,35,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Fees
