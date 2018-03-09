import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import {
  Row,
  Button,
  Table,
  Checkbox
} from 'tinper-bee';
import { getCookie, lintAppListData} from '../components/util';
import './one.css';

class ShowOne extends React.Component {
  render() {
    return <div>ding: 丁</div>
  }
}

import multiSelect from "tinper-bee/lib/multiSelect.js";;
import sort from "tinper-bee/lib/sort.js";;
import sum from "tinper-bee/lib/sum.js";;

const columns13 = [
  {
    title: "名字",
    dataIndex: "a",
    key: "a",
    width: 200
  },
  {
    title: "性别",
    dataIndex: "b",
    key: "b",
    width: 200
  },
  {
    title: "年龄",
    dataIndex: "c",
    key: "c",
    width: 200,
    sumCol: true,
    sorter: (a, b) => a.c - b.c
  },
  {
    title: "武功级别",
    dataIndex: "d",
    key: "d",
    width: 200
  }
];

const data13 = [
  { a: "杨过", b: "男", c: 30, d: "内行", key: "2" },
  { a: "令狐冲", b: "男", c: 41, d: "大侠", key: "1" },
  { a: "郭靖", b: "男", c: 25, d: "大侠", key: "3" }
];
const data13_1 = [
  { a: "杨过", b: "男", c: 30, d: "内行", key: "2" },
  { a: "杨过", b: "男", c: 30, d: "内行", key: "22" },
  { a: "杨过", b: "男", c: 30, d: "内行", key: "222" },
  { a: "令狐冲", b: "男", c: 41, d: "大侠", key: "1" },
  { a: "郭靖", b: "男", c: 25, d: "大侠", key: "3" }
];
//拼接成复杂功能的table组件不能在render中定义，需要像此例子声明在组件的外侧，不然操作state会导致功能出现异常
let ComplexTable = multiSelect(sum(sort(Table)));

class Demo13 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data13: data13,
      selectedRow: this.selectedRow,
      selectDisabled: this.selectDisabled
    };
  }
  getSelectedDataFunc = data => {
    console.log(data);
  };
  selectDisabled = (record, index) => {
    console.log(record);
    if (index === 1) {
      return true;
    }
    return false;
  };
  selectedRow = (record, index) => {
    console.log(record);
    if (index === 0) {
      return true;
    }
    return false;
  };
  onClick = () => {
    this.setState({
      selectedRow: function() {}
    });
  };
  onClick1 = () => {
    this.setState({
      selectDisabled: (record, index) => {
        console.log(record);
        if (index === 2) {
          return true;
        }
        return false;
      }
    });
  };
  render() {
    let multiObj = {
      type: "checkbox"
    };
    return (
      <div>
        <Button className="editable-add-btn" onClick={this.onClick}>
          change selectedRow
        </Button>
        <Button
          className="editable-add-btn"
          style={{ marginLeft: "5px" }}
          onClick={this.onClick1}
        >
          change selectDisabled
        </Button>
        <ComplexTable
          selectDisabled={this.state.selectDisabled}
          selectedRow={this.state.selectedRow}
          columns={columns13}
          data={this.state.data13}
          multiSelect={multiObj}
          getSelectedDataFunc={this.getSelectedDataFunc}
        />
      </div>
    );
  }
}

export default Demo13;