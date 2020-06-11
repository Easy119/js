import React, { Component } from 'react'
import { jsonToHTMLTable } from "nested-json-to-table"
import "./table.css"
export default class a extends Component {
    constructor() {
        super();
        this.state = {
            tableHTML: ''
        }
    }
    componentDidMount() {
        const data = [
            {
                name: 'Jim',
                age: 18,
                courses: [
                    { title: 'English', score: 87 },
                    { title: 'Chinese', score: 67 }
                ]
            },
            {
                name: 'Lucy',
                age: 17,
                courses: [
                    { title: 'Math', score: 97 },
                    { title: 'Music', score: 77 },
                    { title: 'Gym', score: 57 }
                ]
            }
        ]
        const tableHTML = jsonToHTMLTable(data);
        this.setState({
            tableHTML: this.HTMLDOMtoString(tableHTML)
        })
    }
    HTMLDOMtoString = (HTMLDOM) => {
        const div = document.createElement("div")
        div.appendChild(HTMLDOM)
        return div.innerHTML
    }
    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: this.state.tableHTML }}></div>
            </div>
        )
    }
}
