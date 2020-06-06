import React, { Component } from 'react'
import { connect } from 'dva';
        // var promoid = location.href.replace(/(.*)promoid=(\d+)(.*)/gi, "$1");
        // 简历来源渠道 1:BOSS直聘,2:猎聘网,3:拉勾网,4:前程无忧,5:智联招聘,6:其他,7:58同城,8:赶集网,9:大街网,10:中华英才网,11:中国人才热线

class Count extends Component {
    componentDidMount() {
        console.log(this.getUrlParams('position_id'))
        let position_id = this.getUrlParams('position_id');
        let channel_id = this.getUrlParams('channel_id');
        this.is_chrome(position_id, channel_id)
    }
    is_chrome(position_id, channel_id) {
        let channel_json = [
            {
                id: 1,
                url: 'https://www.zhipin.com/chat/im?mu=%2Fvue%2Findex%2F%23%2Fdashboard%2Fjob-manage%2Fjob-edit%2F0',
            },
            {
                id: 2,
                url: 'https://lpt.liepin.com/ejobedit/editsocietyejob',
            },
            {
                id: 3,
                url: 'https://easy.lagou.com/position/multiChannel/createPosition.htm',
            }
        ]
        const formData = {
            jobName: "",
            jobDesc: "",
            job_description_notags: '',
            department: "",
            job_highlights: '',
            hireType: '',
            hireTypeText: "",
            workAge: '',
            workAgeText: "",
            eduGrade: '',
            eduGradeText: "",
            minSalary: '',
            maxSalary: '',
            hireNum: '',
        };
        let chrome = window.chrome;
        let jumpUrl = channel_json.find(item => item.id == channel_id).url;
        let timer = setInterval(() => {
            let base_url = 'https://da.hire66.com/';
            let dom = document.querySelector("#extensionYzpXrxs");
            if (dom) {
                clearInterval(timer)
                var id = dom.getAttribute("data-extensionId");
                console.log(id)
                var version = dom.getAttribute("data-version");
                // 数据请求
                if (id) {
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", `${base_url}apiweb/position/extendPositionDetail?position_id=${position_id}`, false);
                    xhr.setRequestHeader("Content-type", 'application/json');
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState && xhr.status == 200) {
                            if (xhr.responseText) {
                                let data = JSON.parse(xhr.responseText);
                                if (data.status_code == 200) {
                                    let { name, department_name, education_req, job_description, job_highlights, salary_range, work_num, job_description_notags } = data.data;
                                    salary_range = salary_range.replace(/K/g, '000');
                                    formData.jobName = name;
                                    formData.jobDesc = job_description;
                                    formData.department = department_name;
                                    formData.job_highlights = job_highlights;
                                    formData.eduGradeText = education_req;
                                    formData.minSalary = salary_range.split("-")[0] - 0;
                                    formData.maxSalary = salary_range.split("-")[1] - 0;
                                    formData.workAgeText = work_num;
                                    formData.job_description_notags = job_description_notags;
                                    chrome.runtime.sendMessage(
                                        id,
                                        {
                                            type: "POSITION_SAVE_PBULIC_DATA",
                                            pubilcData: {
                                                position_id: position_id,
                                                channel_id: channel_id,
                                                fromData: formData
                                            }
                                        },
                                        function (e) {
                                            console.log(e, "POSITION_SAVE_PBULIC_DATA response");
                                            if (e.status == 'success') {
                                                window.open(jumpUrl);
                                                return
                                            }
                                        }
                                    );
                                }
                            }
                        }

                    }
                    xhr.send();
                }
            } else {
                console.log("暂无插件")
            }
        }, 1000)
    }
    getUrlParams(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); //定义正则表达式 
        var r = this.props.location.search.substr(1).match(reg);
        console.log(window.location.href.split("?")[1])
        if (r != null) return unescape(r[2]);
        return null;
    }
    getUrlKey(name) {
        return (
            decodeURIComponent(
                (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(window.location.href) || [, ""])[1].replace(/\+/g, "%20")) || null
        );
    }
    render() {
        return <div>
            <h2>{this.props.count}</h2>
            <button key="add" onClick={() => { this.props.dispatch({ type: 'count/add' }) }}>+</button>
            <button key="minus" onClick={() => { this.props.dispatch({ type: 'count/minus' }) }}>-</button>
            <button key="minus" onClick={this.sendMessage}>发送message</button>
        </div>
    }
}
const mapStateToProps = ({ count }) => ({
    count
})
export default connect(mapStateToProps)(Count);