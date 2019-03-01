import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { Header as _Header } from './Header'
import { Body as _Body } from './Body'

const TableLayout = ({ children }) => (
    <Table responsive striped>
        { children }
    </Table>
)

TableLayout.Header = _Header
TableLayout.Body = _Body

export default TableLayout 