import { ChangeEvent, useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <div>
      <h1>这是一个一级标题</h1>
      <h2>这是一个二级标题</h2>

      <p>这是一个段落。段落内容可以是一些文字、图片或其他元素。</p>
      <p>这是另一个段落。</p>

      <a href="https://www.example.com">这是一个链接</a>

      <img src="https://via.placeholder.com/150" alt="示例图片" />

      <h3>无序列表</h3>
      <ul>
        <li>项目 1</li>
        <li>项目 2</li>
        <li>项目 3</li>
      </ul>

      <h3>有序列表</h3>
      <ol>
        <li>第一项</li>
        <li>第二项</li>
        <li>第三项</li>
      </ol>

      <h3>表格</h3>
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>城市</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>张三</td>
            <td>25</td>
            <td>北京</td>
          </tr>
          <tr>
            <td>李四</td>
            <td>30</td>
            <td>上海</td>
          </tr>
          <tr>
            <td>王五</td>
            <td>28</td>
            <td>广州</td>
          </tr>
        </tbody>
      </table>

      <h3>表单</h3>
      <form></form>
      <form>
        <label aria-label="name">姓名:</label>
        <input type="text" id="name" name="name" />

        <label aria-label="email">电子邮件:</label>
        <input type="email" id="email" name="email" />

        <label aria-label="password">密码:</label>
        <input type="password" id="password" name="password" />

        <input type="submit" value="提交" />
        <button>按钮</button>
      </form>
    </div>
  );
}

export default App;
