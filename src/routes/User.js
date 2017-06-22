import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './User.css';
import Main from '../components/User/Main'
import { Table, Icon } from 'antd'

class User extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'users/fetch',
      payload: {
        method: 'POST',
         url: 'crmContMain/list',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: 'pageNum=1&pageSize=10'
      }
    })
  }
  render() {
    const data = this.props.data
    const columns = [{
      title: '工具',
      dataIndex: 'name',
      render: () => (<div><a style={{ marginRight: '5px' }} href="#">查看详情</a><a href="#">查看更多</a></div>),
    }, {
      title: '合同编号',
      dataIndex: 'conno',
      render: (text) => {
        if (text == null) {
          return '无'
        }
      }
    }, {
      title: '业务类型',
      dataIndex: 'categoryname',
    },
    {
      title: '客户',
      dataIndex: 'custName',
    },
    {
      title: '是否涉及违约条款',
      dataIndex: 'isDefaultClause',
      render: (text) => {
        if (text == null) {
          return '否'
        }
      }
    },
    {
      title: '合同金额',
      dataIndex: 'conamount',
      render: (text) => {
        if (text == null) {
          return '￥0'
        }

      }
    }, {
      title: '跟进人',
      dataIndex: 'followUserName',
    },
    {
      title: '合同领出时间',
      dataIndex: 'conouttime',
      render: (text) => {
        if (text == null) {
          return '无'
        }

      }
    },
    {
      title: '合同归还时间',
      dataIndex: 'conreturndatetime',
      render: (text) => {
        if (text == null) {
          return '无'
        }

      }
    },
    {
      title: '合同状态',
      dataIndex: 'constatename',
    }];


    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };
    return (
      <div className={styles.normal}>
        <Main >
          <h1>合同列表</h1>
          <div className="ct_list">
            <Table rowSelection={rowSelection} rowKey={(record) => record.conid} columns={columns} dataSource={data} />
          </div>
        </Main>
      </div>
    );
  }

}

function mapStateToProps(state) {
  const { list } = state.users
  return {
    data: list
  };
}

export default connect(mapStateToProps)(User);
