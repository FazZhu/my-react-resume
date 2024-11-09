import React from 'react';
import { FaEnvelope, FaGit, FaGithub, FaPhone } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4 flex justify-center">

      {/* 简历内容 */}
      <div className="w-full max-w-4xl grid grid-cols-3 gap-4">

        {/* 左侧栏 */}
        <div className="col-span-1 space-y-4">

          {/* Header */}
          <div className="bg-white rounded-lg shadow p-5 text-center">
            <h1 className="text-3xl font-bold text-gray-800">李景骏</h1>
            <p className="text-md text-gray-500 mt-1">学历 - 本科</p>
            <p className="text-lg text-gray-600">前端开发 | 测试开发</p>
          </div>

          {/* 联系方式 */}
          <div className="bg-white rounded-lg shadow p-5 text-gray-700 space-y-2 text-center">
            <div className="flex items-center justify-center space-x-1">
              <FaEnvelope className="text-blue-500" />
              <a href="mailto:lijingjun466@163.com" className="hover:text-blue-700 text-md">lijingjun466@163.com</a>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <FaPhone className="text-blue-500" />
              <span className="text-md">17612068443</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <FaGithub className="text-blue-500" />
              <span className="text-sm">https://github.com/FazZhu</span>
            </div>
          </div>

          {/* 专业技能 */}
          <div className="bg-white rounded-lg shadow p-5">
            <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-500 pb-1 mb-3">专业技能</h2>
            <div className="text-gray-700 space-y-3">
              <SkillProgress skill="数据结构与算法" level="70%" />
              <SkillProgress skill="Python" level="80%" />
              <SkillProgress skill="React.js" level="80%" />
              <SkillProgress skill="Vue.js" level="70%" />
              <SkillProgress skill="Node.js" level="70%" />
              <SkillProgress skill="GoLang" level="40%" />
              <SkillProgress skill="SpringBoot" level="40%" />
              <SkillProgress skill="Linux 运维" level="60%" />
              <SkillProgress skill="Git & GitHub" level="70%" />
              <SkillProgress skill="Docker" level="40%" />
            </div>
          </div>
        </div>

        {/* 右侧栏 */}
        <div className="col-span-2 space-y-4">

          {/* 个人优势 */}
          <section className="bg-white rounded-lg shadow p-5">
            <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-500 pb-1 mb-3">个人优势</h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
              <li><span className="font-bold text-blue-500">•</span> 乐于学习：积极参加比赛，展示了强大的学习能力。</li>
              <li><span className="font-bold text-blue-500">•</span> 对人友善：良好的团队合作和沟通能力。</li>
              <li><span className="font-bold text-blue-500">•</span> 认真负责：高度责任感，具备时间管理能力。</li>
              <li><span className="font-bold text-blue-500">•</span> 动手能力强：丰富的项目实践经验，善于解决问题。</li>
              <li><span className="font-bold text-blue-500">•</span> 英语能力佳：能熟练阅读英文文献和技术文档。</li>
              <li><span className="font-bold text-blue-500">•</span> 自我驱动：主动探索新技术，具备创新思维。</li>
            </ul>
          </section>

          {/* 项目经历 */}
          <section className="bg-white rounded-lg shadow p-5">
            <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-500 pb-1 mb-3">项目经历</h2>
            
            {/* 项目1 */}
            <div className="bg-gray-50 rounded-lg p-4 mb-3 shadow-sm">
              <h3 className="text-md font-bold text-gray-700">学生约拼车平台 - 全栈开发工程师</h3>
              <p className="text-gray-600 mt-1 text-sm">
                本项目为学生提供便捷的拼车信息发布和匹配平台，采用前后端分离架构。前端使用 <strong>Vue.js</strong>，后端使用 <strong>Koa.js</strong>，数据库为 <strong>MongoDB</strong>。
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 text-sm">
                <li>前端：设计多种 Vue 组件，提供直观的用户界面。</li>
                <li>数据交互：使用 Axios 实现前后端交互。</li>
                <li>后端：基于 Koa.js 构建 API 服务，设计 RESTful 接口。</li>
                <li>部署：项目部署在阿里云，确保平台在公网的高效访问和稳定性。</li>
              </ul>
            </div>

            {/* 项目2 */}
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <h3 className="text-md font-bold text-gray-700">基于 React+Electron 的即时通讯软件 - 全栈开发工程师</h3>
              <p className="text-gray-600 mt-1 text-sm">
                开发一个满足高校学术交流需求的即时通讯软件，支持 <strong>Markdown</strong> 格式展示笔记、代码片段等内容。前端使用 <strong>React 和 Electron</strong>，后端使用 <strong>Koa.js</strong>。
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 text-sm">
                <li>消息系统：实现实时聊天功能，支持文字和文件传输。</li>
                <li>富文本支持：实现 Markdown 格式消息展示，适用于学术讨论。</li>
                <li>群组管理：支持普通群组和班级群组，管理员可一键下载全班文件。</li>
                <li>用户管理：包括用户注册、登录、好友管理等核心功能。</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// 单独的技能进度条组件
const SkillProgress = ({ skill, level }) => {
  // 计算对应的字符数
  const bars = Math.round(parseInt(level) / 10);
  const progressBar = '■'.repeat(bars) + '□'.repeat(10 - bars);

  return (
    <div className="flex justify-between items-center">
      <p className="font-semibold text-sm text-gray-700">{skill}</p>
      <div className="font-mono text-blue-600">[{progressBar}]</div>
    </div>
  );
};



export default Resume;
