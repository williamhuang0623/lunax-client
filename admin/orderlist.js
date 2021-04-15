import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useTable, useSortBy } from 'react-table';
import OrderAPI from '../lib/api/Order';

function OrderList() {
    const [orders, setOrders] = useState([]);

    useLayoutEffect(async () => {
        const orderapi = new OrderAPI();
        const res = await orderapi.getAllOrders();
        setOrders(orders.concat(res));
        return () => {
            setOrders([]);
        };
    }, [orders]);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Product',
                accessor: 'product_image_url',
            },
            {
                Header: 'Name',
                accessor: 'product_name',
            },
            {
                Header: 'Price',
                accessor: 'product_price',
            },
            {
                Header: 'Quantity',
                accessor: 'quantity_ordered',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Updated At',
                accessor: 'updatedAt',
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data: orders,
    });

    return (
        <div className="order-list">
            <table {...getTableProps()}>
                <thead>
                    {
                        // Loop over the header rows
                        headerGroups.map((headerGroup) => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    // Loop over the headers in each row
                                    headerGroup.headers.map((column) => (
                                        // Apply the header cell props
                                        <th {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                {/* Apply the table body props */}
                <tbody {...getTableBodyProps()}>
                    {
                        // Loop over the table rows
                        rows.map((row) => {
                            // Prepare the row for display
                            prepareRow(row);
                            return (
                                // Apply the row props
                                <tr {...row.getRowProps()}>
                                    {
                                        // Loop over the rows cells
                                        row.cells.map((cell) => {
                                            // Apply the cell props
                                            console.log(cell.value);
                                            if (cell.column.Header == 'Product') {
                                                return (
                                                    <img
                                                        src={cell.value}
                                                        width={100}
                                                        height={100}
                                                        alt="Picture of product"
                                                    />
                                                );
                                            } else {
                                                return (
                                                    <td {...cell.getCellProps()}>
                                                        {
                                                            // Render the cell contents
                                                            cell.render('Cell')
                                                        }
                                                    </td>
                                                );
                                            }
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default OrderList;
