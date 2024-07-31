import React from 'react'
import { Link } from 'react-router-dom'

function DoctorsTable() {
  const recentOrderData = [
    {
      id: 1,
      product_id: "P001",
      customer_id: "C001",
      customer_name: "John Doe",
      order_date: "2023-07-01",
      order_total: 150.75,
      current_order_status: "SHIPPED",
      address: "123 Main St, Anytown, USA"
    },
    {
      id: 2,
      product_id: "P002",
      customer_id: "C002",
      customer_name: "Jane Smith",
      order_date: "2023-07-02",
      order_total: 200.50,
      current_order_status: "CONFIRMED",
      address: "456 Elm St, Othertown, USA"
    },
    {
      id: 3,
      product_id: "P003",
      customer_id: "C003",
      customer_name: "Alice Johnson",
      order_date: "2023-07-03",
      order_total: 99.99,
      current_order_status: "DELIVERED",
      address: "789 Oak St, Sometown, USA"
    },
    {
      id: 4,
      product_id: "P004",
      customer_id: "C004",
      customer_name: "Bob Brown",
      order_date: "2023-07-04",
      order_total: 250.00,
      current_order_status: "CANCELLED",
      address: "101 Pine St, Anycity, USA"
    },
    {
      id: 5,
      product_id: "P005",
      customer_id: "C005",
      customer_name: "Carol White",
      order_date: "2023-07-05",
      order_total: 120.45,
      current_order_status: "PLACED",
      address: "202 Birch St, Newtown, USA"
    },
    {
      id: 6,
      product_id: "P006",
      customer_id: "C006",
      customer_name: "Dave Green",
      order_date: "2023-07-06",
      order_total: 75.99,
      current_order_status: "OUT_FOR_DELIVERY",
      address: "303 Cedar St, Oldtown, USA"
    },
    {
      id: 7,
      product_id: "P007",
      customer_id: "C007",
      customer_name: "Eve Black",
      order_date: "2023-07-07",
      order_total: 89.95,
      current_order_status: "CONFIRMED",
      address: "404 Maple St, Yourtown, USA"
    },
    {
      id: 8,
      product_id: "P008",
      customer_id: "C008",
      customer_name: "Frank Blue",
      order_date: "2023-07-08",
      order_total: 55.75,
      current_order_status: "DELIVERED",
      address: "505 Walnut St, Mytown, USA"
    },
    {
      id: 9,
      product_id: "P009",
      customer_id: "C009",
      customer_name: "Grace Yellow",
      order_date: "2023-07-09",
      order_total: 140.60,
      current_order_status: "CANCELLED",
      address: "606 Ash St, Ourtown, USA"
    },
  ]

  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
      <strong className='text-gray-700 font-medium'>Doctors List</strong>
      <div className='mt-3'>
        <table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
          <thead>
            <tr>
              <td>ID</td>
              <td>Doctor ID</td>
              <td>Doctor Name</td>
              <td>Photo</td>
              <td>qualification</td>
              <td>expreience</td>
              <td>specialization</td>
              <td>price</td>
              <td>isApproved</td>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map(order => (
              <tr key={order.id}>
                <td><Link to={`/orders/${order.id}`}>#{order.id}</Link></td>
                <td><Link to={`/product/${order.product_id}`}>{order.product_id}</Link></td>
                <td><Link to={`/customers/${order.customer_id}`}>{order.customer_name}</Link></td>
                <td>
                  <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center'
                    style={{ background: 'url("https://picsum.photos/200?face")' }}>
                    <span className='sr-only'>Jack sparrow</span>
                  </div>
                </td>
                <td>{order.order_total}</td>
                <td>{order.address}</td>
                <td>{order.current_order_status}</td>
                <td>{order.current_order_status}</td>
                <td>{order.current_order_status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default DoctorsTable