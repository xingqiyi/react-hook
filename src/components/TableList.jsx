import React, {useState, useEffect, useReduce} from 'react'
import {Table, Pagination} from 'antd';
import axios from 'axios'


const List = () => {

  const initUrl = 'http://192.168.14.76/mock/60/test';
  const [url, setUrl] = useState(initUrl);
  const [data, setData] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      // const result = await axios(url)
      const {data} = await axios(url)
      setData(data.data)
    }
    fetchData();

  }, [])

  const columns = [
    {
      title: 'userId',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'completed',
      dataIndex: 'completed',
      key: 'completed',
    },

  ]

  const pagination = {
    current: 1,
    pageSize: 20,
    total: 0,
    showTotal: ((total) => {
      return `共      ${total}      条`
    })
  }

  return (

      <div>
        <Table
            pagination={pagination}
            rowKey="userId"
            columns={columns}
            dataSource={data}>

        </Table>

        {/*<Pagination defaultCurrent={1} total={50}/>*/}

      </div>

  )


}

export default List;
