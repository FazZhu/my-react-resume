import React from "react";
import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";

const BaseInfo = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow p-5 text-center">
        <h1 className="text-3xl font-bold text-gray-800">李景骏</h1>
        <p className="text-md text-gray-500 mt-1">学历 - 本科</p>
        <p className="text-lg text-gray-600">前端开发 | 测试开发</p>
        <div className="flex items-center justify-center space-x-1">
          <FaEnvelope className="text-blue-500" />
          <a
            href="mailto:lijingjun466@163.com"
            className="hover:text-blue-700 text-md"
          >
            lijingjun466@163.com
          </a>
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
    </>
  );
};

export default BaseInfo;
