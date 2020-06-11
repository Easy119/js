var dataJson = {
    "status_code": 200,
    "time": 1591700474,
    "message": "请求成功!",
    "data": {
        "field": [
            {
                "id": 6,
                "type_key": "employment_info",
                "name": "应聘信息",
                "introduce": "",
                "is_multiple": 2,
                "is_delete": 1,
                "is_enable": 1,
                "group_flex_0": 12,
                "group_count":1,
                "group_0": [
                    {
                        "item_id": 89,
                        "item_key": "expected_salary",
                        "item_reference": "",
                        "type_id": 6,
                        "name": "期望月薪",
                        "introduce": "请输入",
                        "operate_type": 1,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 4
                    },
                    {
                        "item_id": 90,
                        "item_key": "current_working_status",
                        "item_reference": "[\"在职\",\"离职\",\"应届毕业生\"]",
                        "type_id": 6,
                        "name": "目前工作状态",
                        "introduce": "请选择",
                        "operate_type": 2,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 4
                    },
                    {
                        "item_id": 96,
                        "item_key": "report_date",
                        "item_reference": "[\"随时\",\"1周内\",\"2周内\",\"2周-1个月\",\"1-3个月\",\"3个月以上\"]",
                        "type_id": 6,
                        "name": "可到岗时间",
                        "introduce": "请选择",
                        "operate_type": 2,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 6
                    }
                ]
            },
            {
                "id": 1,
                "type_key": "person_base_info",
                "name": "基本信息",
                "introduce": "",
                "is_multiple": 2,
                "is_delete": 2,
                "is_enable": 1,
                "group_flex_0": 12,
                "group_0": [
                    {
                        "item_id": 1,
                        "item_key": "candidate_name",
                        "item_reference": "",
                        "type_id": 1,
                        "name": "姓名",
                        "introduce": "请输入",
                        "operate_type": 1,
                        "is_required": 1,
                        "is_delete": 2,
                        "is_enable": 1,
                        "print_flex": 4
                    },
                    {
                        "item_id": 6,
                        "item_key": "sex",
                        "item_reference": "[\"男\",\"女\"]",
                        "type_id": 1,
                        "name": "性别",
                        "introduce": "请选择",
                        "operate_type": 2,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 4
                    },
                    {
                        "item_id": 7,
                        "item_key": "birthday",
                        "item_reference": "",
                        "type_id": 1,
                        "name": "出生日期",
                        "introduce": "请选择",
                        "operate_type": 4,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 6
                    }
                ],
                "group_flex_1": 12,
                "group_1": [
                    {
                        "item_id": 9,
                        "item_key": "native_city",
                        "item_reference": "",
                        "type_id": 1,
                        "name": "籍贯",
                        "introduce": "请选择",
                        "operate_type": 5,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 4
                    },
                    {
                        "item_id": 148,
                        "item_key": "relative_politics_status",
                        "item_reference": "[\"中共党员\",\"共青团员\",\"普通居民/群众\"]",
                        "type_id": 14,
                        "name": "政治面貌",
                        "introduce": "请选择",
                        "operate_type": 2,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 4
                    },
                    {
                        "item_id": 4,
                        "item_key": "credentials_type",
                        "item_reference": "[\"身份证\",\"港澳居民来往内地通行证\",\"台湾人民来往大陆通行证\",\"外国护照\",\"其他\"]",
                        "type_id": 1,
                        "name": "证件类型",
                        "introduce": "请选择",
                        "operate_type": 2,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 6
                    }
                ],
                "group_flex_2": 12,
                "group_2": [
                    {
                        "item_id": 5,
                        "item_key": "credentials_no",
                        "item_reference": "",
                        "type_id": 1,
                        "name": "证件号码",
                        "introduce": "请输入",
                        "operate_type": 1,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 4
                    },
                    {
                        "item_id": 8,
                        "item_key": "is_married",
                        "item_reference": "[\"是\",\"否\"]",
                        "type_id": 1,
                        "name": "是否已婚",
                        "introduce": "请选择",
                        "operate_type": 2,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 4
                    },
                    {
                        "item_id": 12,
                        "item_key": "first_work_date",
                        "item_reference": "",
                        "type_id": 1,
                        "name": "首次参加工作",
                        "introduce": "请选择",
                        "operate_type": 4,
                        "is_required": 2,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 6
                    }
                ],
                "group_flex_3": 12,
                "group_3": [
                    {
                        "item_id": 39,
                        "item_key": "personal_evaluation",
                        "item_reference": "",
                        "type_id": 1,
                        "name": "自我评价",
                        "introduce": "请输入",
                        "operate_type": 3,
                        "is_required": 2,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 14
                    }
                ],
                "group_count":4
            },
            {
                "id": 2,
                "type_key": "contact_info",
                "name": "联系信息",
                "introduce": "",
                "is_multiple": 2,
                "is_delete": 2,
                "is_enable": 1,
                "group_flex_0": 8,
                "group_0": [
                    {
                        "item_id": 40,
                        "item_key": "mobile",
                        "item_reference": "",
                        "type_id": 2,
                        "name": "手机号码",
                        "introduce": "请输入",
                        "operate_type": 1,
                        "is_required": 1,
                        "is_delete": 2,
                        "is_enable": 1,
                        "print_flex": 4
                    },
                    {
                        "item_id": 41,
                        "item_key": "email",
                        "item_reference": "",
                        "type_id": 2,
                        "name": "个人邮箱",
                        "introduce": "请输入",
                        "operate_type": 1,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 10
                    }
                ],
                "group_flex_1": 12,
                "group_1": [
                    {
                        "item_id": 43,
                        "item_key": "residential_address",
                        "item_reference": "",
                        "type_id": 2,
                        "name": "现居住地址",
                        "introduce": "请输入",
                        "operate_type": 3,
                        "is_required": 2,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 14
                    }
                ],
                "group_flex_2": 12,
                "group_2": [
                    {
                        "item_id": 44,
                        "item_key": "family_address",
                        "item_reference": "",
                        "type_id": 2,
                        "name": "家庭地址",
                        "introduce": "请输入",
                        "operate_type": 3,
                        "is_required": 2,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 14
                    }
                ],
                "group_count":3
            },
            {
                "id": 3,
                "type_key": "work_experience",
                "name": "工作经历",
                "introduce": "请从最近工作经历填起，应届毕业生可不填",
                "is_multiple": 1,
                "is_delete": 1,
                "is_enable": 1,
                "group_flex_0": 11,
                "group_0": [
                    {
                        "item_id": 52,
                        "item_key": "work_start_dt",
                        "item_reference": "",
                        "type_id": 3,
                        "name": "工作开始时间",
                        "introduce": "请选择",
                        "operate_type": 4,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 2
                    },
                    {
                        "item_id": 53,
                        "item_key": "work_end_dt",
                        "item_reference": "",
                        "type_id": 3,
                        "name": "工作结束时间",
                        "introduce": "请选择",
                        "operate_type": 4,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 2
                    },
                    {
                        "item_id": 54,
                        "item_key": "work_name",
                        "item_reference": "",
                        "type_id": 3,
                        "name": "工作单位",
                        "introduce": "请输入",
                        "operate_type": 1,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 2
                    },
                    {
                        "item_id": 55,
                        "item_key": "work_duty",
                        "item_reference": "",
                        "type_id": 3,
                        "name": "职务",
                        "introduce": "请输入",
                        "operate_type": 1,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 2
                    },
                    {
                        "item_id": 56,
                        "item_key": "work_detail",
                        "item_reference": "",
                        "type_id": 3,
                        "name": "工作内容",
                        "introduce": "请输入",
                        "operate_type": 3,
                        "is_required": 2,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 6
                    }
                ],
                "group_count":1
            },
            {
                "id": 4,
                "type_key": "education_experience",
                "name": "教育经历",
                "introduce": "请从最高学历填起",
                "is_multiple": 1,
                "is_delete": 1,
                "is_enable": 1,
                "group_flex_0": 10,
                "group_0": [
                    {
                        "item_id": 67,
                        "item_key": "enrollment_dt",
                        "item_reference": "",
                        "type_id": 4,
                        "name": "教育开始时间",
                        "introduce": "请选择",
                        "operate_type": 4,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 2
                    },
                    {
                        "item_id": 68,
                        "item_key": "graduation_dt",
                        "item_reference": "",
                        "type_id": 4,
                        "name": "教育结束时间",
                        "introduce": "请选择",
                        "operate_type": 4,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 2
                    },
                    {
                        "item_id": 69,
                        "item_key": "school",
                        "item_reference": "",
                        "type_id": 4,
                        "name": "毕业院校",
                        "introduce": "请输入",
                        "operate_type": 1,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 2
                    },
                    {
                        "item_id": 70,
                        "item_key": "profession",
                        "item_reference": "",
                        "type_id": 4,
                        "name": "毕业专业",
                        "introduce": "请输入",
                        "operate_type": 1,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 2
                    },
                    {
                        "item_id": 71,
                        "item_key": "education",
                        "item_reference": "[\"小学\",\"初中\",\"高中\",\"中专\",\"技校\",\"职高\",\"大专\",\"本科\",\"硕士\",\"博士\",\"其他\"]",
                        "type_id": 4,
                        "name": "学历",
                        "introduce": "请选择",
                        "operate_type": 2,
                        "is_required": 2,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 6
                    }
                ],
                "group_count":1
            },
            {
                "id": 5,
                "type_key": "emergency_contact",
                "name": "紧急联系人",
                "introduce": "请填写紧急情况下的联系人、联系电话",
                "is_multiple": 1,
                "is_delete": 1,
                "is_enable": 1,
                "group_flex_0": 9,
                "group_0": [
                    {
                        "item_id": 83,
                        "item_key": "contact_name",
                        "item_reference": "",
                        "type_id": 5,
                        "name": "联系人姓名",
                        "introduce": "请输入",
                        "operate_type": 1,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 2
                    },
                    {
                        "item_id": 84,
                        "item_key": "contact_relationship",
                        "item_reference": "[\"父母\",\"配偶\",\"子女\",\"亲属\",\"朋友\",\"同事\"]",
                        "type_id": 5,
                        "name": "关系",
                        "introduce": "请选择",
                        "operate_type": 2,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 2
                    },
                    {
                        "item_id": 85,
                        "item_key": "contact_phone",
                        "item_reference": "",
                        "type_id": 5,
                        "name": "联系人电话",
                        "introduce": "请输入",
                        "operate_type": 1,
                        "is_required": 1,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 2
                    },
                    {
                        "item_id": 86,
                        "item_key": "contact_address",
                        "item_reference": "",
                        "type_id": 5,
                        "name": "联系人地址",
                        "introduce": "请输入",
                        "operate_type": 3,
                        "is_required": 2,
                        "is_delete": 1,
                        "is_enable": 1,
                        "print_flex": 8
                    }
                ],
                "group_count":1
            }
        ],
        "data": {
            "employment_info": {
                "itemName": [],
                "expected_salary": "面议",
                "current_working_status": "在职",
                "report_date": "随时"
            },
            "person_base_info": {
                "itemName": [],
                "candidate_name": "周九",
                "sex": "男",
                "birthday": "1988-01-01",
                "native_city": "北京市北京市东城区",
                "relative_politics_status": "中共党员",
                "credentials_type": "台湾人民来往大陆通行证",
                "credentials_no": "1521465",
                "is_married": "否",
                "first_work_date": null,
                "personal_evaluation": ""
            },
            "contact_info": {
                "itemName": [],
                "mobile": "17621720306",
                "email": "760127422@qq.com",
                "residential_address": "",
                "family_address": ""
            },
            "work_experience": {
                "itemName": [],
                "list": []
            },
            "education_experience": {
                "itemName": [],
                "list": []
            },
            "emergency_contact": {
                "itemName": [],
                "list": [
                    {
                        "contact_name": "5",
                        "contact_relationship": "朋友",
                        "contact_phone": "15612341234",
                        "contact_address": ""
                    }
                ]
            }
        }
    }
}
export { dataJson }