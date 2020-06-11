import React, { Component, Fragment } from 'react'
import { dataJson } from "./json"
import "./table.css"
let total;
export default class table extends Component {
    constructor() {
        super()
        this.state = {
            tableItem: 59,
            sortDataJson: [],
            printItems: [],
            total: 14,
            avatarRowspan: 5,
            avatarColspan: 2,
            upStyle: ['work_experience', 'education_experience', 'emergency_contact'],
            resultData: []
        }
    }
    componentWillMount() {
        let sortDataJson = dataJson.data.field;
        let resultData = dataJson.data.data;
        this.setState({
            sortDataJson,
            resultData
        })

    }
    createStyle = (num) => {
        return {
            width: ((num - 0) * this.state.tableItem) + 'px',
        }
    }

    loopData = (num) => {
        let arr = []
        for (let i = 0; i < num; i++) {
            arr.push(i)
        }
        return arr
    }
    render() {
        let { sortDataJson, upStyle, resultData } = this.state;
        return (
            <div className='parents'>
                {
                    sortDataJson.length > 0 && sortDataJson.map((item, index) => {
                        return (
                            <div key={item.type_key}>
                                <table className="printSheet">
                                    <tbody>
                                        <tr>
                                            <td colSpan="14" style={this.createStyle(14)}>
                                                <p className="title">{item.name}</p>
                                            </td>
                                        </tr>
                                        <Fragment>
                                            {
                                                upStyle.indexOf(item.type_key) == -1 ? (
                                                    <Fragment>
                                                        {

                                                            this.loopData(item.group_count).map((i, trIndex) => {
                                                                return (
                                                                    <tr key={trIndex}>
                                                                        {
                                                                            item[`group_${trIndex}`].map(tr => {
                                                                                return <Fragment key={tr.item_key}>
                                                                                    <td colSpan="2" style={this.createStyle(2)}>{tr.name}</td>
                                                                                    <td colSpan={tr.print_flex - 2} style={this.createStyle(tr.print_flex - 2)}>{resultData[item.type_key][tr.item_key]}</td>
                                                                                </Fragment>
                                                                            })
                                                                        }
                                                                    </tr>
                                                                )
                                                            })
                                                        }

                                                    </Fragment>
                                                ) : (
                                                        <Fragment>
                                                            {

                                                                this.loopData(item.group_count).map((i, trIndex) => {
                                                                    return (
                                                                        <tr key={trIndex}>
                                                                            {
                                                                                item[`group_${trIndex}`].map(tr => {
                                                                                    return <Fragment key={tr.item_key}>
                                                                                        <td colSpan={tr.print_flex} style={this.createStyle(tr.print_flex)}>{tr.name}</td>
                                                                                    </Fragment>
                                                                                })
                                                                            }
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                            {
                                                                [1, 2, 3].map(index => {
                                                                    return this.loopData(item.group_count).map((i, trIndex) => {
                                                                        return (
                                                                            <tr key={trIndex}>
                                                                                {
                                                                                    item[`group_${trIndex}`].map(tr => {
                                                                                        return <Fragment key={`${tr.item_key}_${index}`}>
                                                                                            <td colSpan={tr.print_flex} style={this.createStyle(tr.print_flex)}></td>
                                                                                        </Fragment>
                                                                                    })
                                                                                }
                                                                            </tr>
                                                                        )
                                                                    })
                                                                })
                                                            }
                                                        </Fragment>
                                                    )
                                            }
                                        </Fragment>
                                    </tbody>
                                </table>
                            </div>
                        )

                    })
                }
            </div>
        )
    }
}
