import React, { Component } from 'react'
import printJS from 'print-js'
import Table from "./table"
import HookEffect from "./hookEffect"

export default class print extends Component {
    printFun = () => {
        printJS(
            {
                printable: ["http://pdt-beidiao.oss-cn-hangzhou.aliyuncs.com/orderimgs/background_img_20200601_1216_5ed506f6493b03918.png?OSSAccessKeyId=LTAI4FwdbShVJt9rKC2WuJ1p&Expires=1654091261&Signature=%2Ft7db7T4eG0ux7kNhNN6tgRxkws%3D"],
                type: 'image',
                imageStyle: 'width:80%',
                documentTitle: '易招聘打印文档',
                honorColor: true
            }
        );
        // printJS({ printable: ["add"], type: 'html', imageStyle: 'width:80%' ,css: require("./table.css") });
    }
    render() {
        return (
            <div id="add">
                <button onClick={this.printFun} id="btn">打印</button>
                <HookEffect />
                <Table />
            </div>
        )
    }
}
