import  React from "react"; //"react"，如果r写成大写的话，浏览器里会出现警告
//如果不写export default，外部将访问不到
export default class ComponentHeader extends React.Component{ //class名开头必须大写
  render(){ //render解析类的输出
    return(
      <header>
        <h1>我是头部</h1>
      </header>
    )
  }
}