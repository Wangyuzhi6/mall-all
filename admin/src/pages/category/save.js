import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Breadcrumb, Form, Input, Button, Select } from 'antd';
const { Content } = Layout;
const { Option } = Select;
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 6,
        span: 6,
    },
};

import CustomLayout from 'components/custom-layout'
import UploadImage from 'components/upload-image'

import { CATEGORY_ICON_UPLOAD } from 'api/config'
import { actionCreator } from './store';

import api from 'api'

class CategorySave extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.categoryId,
            icon: '',
            iconValidate: {
                help: '',
                validateStatus: ''
            }
        }
        this.handleIcon = this.handleIcon.bind(this)
        this.handleFinish = this.handleFinish.bind(this)
        this.handleValidate = this.handleValidate.bind(this)
        this.formRef = React.createRef()
    }
    async componentDidMount(){
        this.props.handleLevelCategories()    
        if (this.state.id){
            const result = await api.getCategoriesDetail({ id: this.state.id})
            if(result.code == 0){
                const data = result.data
                this.formRef.current.setFieldsValue({
                    pid:data.pid,
                    name: data.name,
                    mobileName:data.mobileName
                })
                this.setState({
                    icon:data.icon
                })
            }
        }else{
            this.setState({
                icon: ''
            })
        }
    }
    handleIcon(icon){
        this.setState({
            icon: icon,
            iconValidate: {
                help: '',
                validateStatus: ''
            }
        })
    }
    handleFinish(values){
        const { icon,id} = this.state
        this.handleValidate()
        if(icon){
            values.icon = icon
            values.id = id
            this.props.handleSave(values)
        }
    }
    handleValidate(){
        const { icon } = this.state
        if(!icon){
            this.setState({
                iconValidate: {
                    help: '?????????????????????',
                    validateStatus: 'error'
                }
            })
        }
    }
    render() {    
        const { 
            categories,
        } = this.props
        const { iconValidate, icon}  = this.state
        const options = categories.map(category => <Option key={category._id} value={category._id}>{category.name}</Option>)  
        let fileList = []
        if(icon){
            fileList.push({
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: icon,
            })
        }else{
            fileList = []
        }
        return (
            <div className="CategorySave">
                <CustomLayout>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>??????</Breadcrumb.Item>
                        <Breadcrumb.Item>??????</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.id ? '????????????' : '????????????'}</Breadcrumb.Item>                                                
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Form 
                            {...layout} 
                            name="control-hooks" 
                            onFinish={this.handleFinish}
                            onFinishFailed={this.handleValidate}
                            ref={this.formRef}
                        >
                            <Form.Item
                                name="pid"
                                label="????????????"
                                rules={[
                                    {
                                        required: true,
                                        message:'?????????????????????'
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="?????????????????????"
                                >
                                    <Option value="0">?????????</Option>
                                    {options}
                                </Select>
                            </Form.Item>                            
                            <Form.Item
                                name="name"
                                label="????????????"
                                rules={[
                                    {
                                        required: true,
                                        message: '?????????????????????'
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="mobileName"
                                label="??????????????????"
                                rules={[
                                    {
                                        required: true,
                                        message: '???????????????????????????'
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="??????????????????"
                                required={true}
                                {...iconValidate}
                            >
                                <UploadImage 
                                    max={1}
                                    action={CATEGORY_ICON_UPLOAD}
                                    getImageUrlList={this.handleIcon}
                                    fileList={fileList}
                                />
                            </Form.Item>                                                         
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    ??????
                                </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                </CustomLayout>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    categories: state.get('category').get('categories'),
})
const mapDispatchToProps = (dispatch) => ({
    handleSave:(values)=>{
        dispatch(actionCreator.getSaveAction(values))
    },
    handleLevelCategories:()=>{
        dispatch(actionCreator.getLevelCategoriesAction())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(CategorySave)