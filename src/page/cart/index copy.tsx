import React, { useState, useEffect } from "react";
import { ListView } from "antd-mobile";
const data = [
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
    header: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    title: "McDonald's invites you",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",
    title: "Eat the week",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
];
const ds = new ListView.DataSource({
  rowHasChanged: () => true,
});
export default function Cart() {
  const [dataSource, setDataSource] = useState(ds);
  useEffect(() => {
    setDataSource(dataSource.cloneWithRows([...data]));
  }, []);
  function onRequestMore() {
    console.log(123);
    let newDate = [...data, ...data];
    setDataSource(dataSource.cloneWithRows(newDate));
  }
  function renderItem(rowData: any, sectionID: any, rowID: any) {
    return (
      <div key={rowID} style={{ padding: "0 15px" }}>
        <div
          style={{
            lineHeight: "50px",
            color: "#888",
            fontSize: 18,
            borderBottom: "1px solid #F6F6F6",
          }}
        >
          {rowData.title}
        </div>

        <div style={{ display: "flex", padding: "15px 0" }}>
          <img
            style={{ height: "64px", marginRight: "15px" }}
            src={rowData.img}
            alt=""
          />
          <div style={{ lineHeight: 1 }}>
            <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
              {rowData.des}
            </div>
            <div>
              <span style={{ fontSize: "30px", color: "#FF6E27" }}>35</span>¥{" "}
              {rowID}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <ListView
      dataSource={dataSource}
      renderRow={renderItem}
      initialListSize={20}
      pageSize={20}
      onEndReached={(event) => {
        onRequestMore();
      }}
      onEndReachedThreshold={10}
      style={{
        height: "100%",
      }}
    />
  );
}
