import React from "react";
import SectionFrame from "./SectionFrame";

const Skills = () => {
  return (
    <section className="bg-white rounded-lg shadow p-5">
    <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-500 pb-1 mb-3">
      个人技能
    </h2>
    <div className="bg-gray-50 rounded-lg p-4 mb-3 shadow-sm">
      
      <ul className="list-disc list-inside text-gray-600 mt-2 text-sm">
        <li>熟练运用<strong>HTML/CSS/JS</strong>前端技术，熟悉掌握<strong>TypeScript</strong>语法</li>
        <li>掌握<strong>Vue.js/React.js</strong>框架技术，有基础框架搭建经验，有个人项目开发经历</li>
        <li>熟悉<strong>数据结构与算法</strong>，<strong>计算机网络</strong></li>
        <li>熟悉<strong>Git</strong>，了解CI/CD部署流程</li>
        <li>熟悉<strong>Linux操作系统</strong>基础操作，有日常使用GNU/Linux发行版的经历</li>
        <li>熟悉<strong>Python</strong>开发，了解selenium测试框架</li>
        <li>了解<strong>Mysql</strong>和<strong>MongoDB</strong>，有项目使用经历</li>
        <li>了解<strong>Golang</strong>和<strong>Springboot</strong>后端技术，有过学习经历</li>
      </ul>
    </div>
  </section>
  );
  
};

export default Skills;
