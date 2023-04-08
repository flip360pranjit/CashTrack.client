import React from 'react'
import styles from "./Categories.css";
function Categories() {
  return (
    <div className='categories-div'>
        
        <div>
            <h1 class="heading">Category Section</h1>
        </div>
        <div class="flex-container">
            <div class="card">
                <h2 class="pp">BALANCE</h2>
            </div>
            <div class="card">
                <h2 class="pp">EXPENSES</h2>
            </div>
            <div class="card">
                <h2 class="pp">LIMIT AMOUNT</h2>
            </div>
        </div>
        <table class="container">
  <thead >
    <tr >
      <th>
        <h1> Type of Payment</h1>
      </th>
      <th>
        <h1>Amount Spent</h1>
      </th>
      <th>
        <h1>Last Updated</h1>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Shopping</td>
      <td>9518</td>
      <td>45 minutes ago</td>
    </tr>
    <tr>
      <td>Food</td>
      <td>7326</td>
      <td>45 minutes ago</td>
    </tr>
    <tr>
      <td>Stationary</td>
      <td>4162</td>
      <td>45 minutes ago</td>
    </tr>
    <tr>
      <td>Travelling</td>
      <td>3654</td>
      <td>45 minutes ago</td>
    </tr>
    <tr>
      <td>Entertainment</td>
      <td>2002</td>
      <td>45 minutes ago</td>
    </tr>
    <tr>
      <td>Others</td>
      <td>4623</td>
      <td>45 minutes ago</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Categories