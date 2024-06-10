import React from 'react';
import {Button} from 'primereact/button'

function H5() {
  return (
    <>
    <div>
      <button>aaa</button>
    </div>
      <header>
          <h1>我的网站</h1>
          <nav>
              <ul>
                  <li><a href="#home">首页</a></li>
                  <li><a href="#about">关于我们</a></li>
                  <li><a href="#services">服务</a></li>
                  <li><a href="#contact">联系我们</a></li>
              </ul>
          </nav>
      </header>
      <main>
          <section id="home">
              <h2>欢迎来到我的网站</h2>
              <p>这是一个示例网页，展示了常用的HTML元素。</p>
              <img src="example.jpg" alt="示例图片"/>
          </section>
          <section id="about">
              <h2>关于我们</h2>
              <p>我们是一家提供高质量服务的公司。</p>
          </section>
          <section id="services">
              <h2>我们的服务</h2>
              <ul>
                  <li>服务一</li>
                  <li>服务二</li>
                  <li>服务三</li>
              </ul>
          </section>
          <section id="contact">
              <h2>联系我们</h2>
              <form action="/submit-form" method="post">
                  <label>姓名：</label>
                  <input type="text" id="name" name="name" required/>
                  <label>电子邮件：</label>
                  <input type="email" id="email" name="email" required/>
                  <label>信息：</label>
                  <textarea id="message" name="message" required></textarea>
                  <button type="submit">提交</button>
              </form>
          </section>

          <section id="table">
              <h2>示例表格</h2>
              <table>
                  <thead>
                      <tr>
                          <th>名称</th>
                          <th>年龄</th>
                          <th>城市</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>张三</td>
                          <td>28</td>
                          <td>北京</td>
                      </tr>
                      <tr>
                          <td>李四</td>
                          <td>32</td>
                          <td>上海</td>
                      </tr>
                      <tr>
                          <td>王五</td>
                          <td>24</td>
                          <td>广州</td>
                      </tr>
                  </tbody>
              </table>
          </section>
      </main>
      <footer>
          <p>&copy; 2024 我的公司. 保留所有权利。</p>
      </footer>
    </>
  );
}

export default H5;
