import React from 'react';

class MainContent extends React.Component {

    render() {
        return (
            <div className="main">
                <div className="menu">
                    <ul>
                        <li><a href="index.php">首页</a></li>
                        <li><a href="/index.php?m=Product&amp;a=index&amp;id=3">产品展示</a></li>
                        <li><a href="/index.php?m=Page&amp;a=index&amp;id=1">公司简介</a></li>
                        <li><a href="/index.php?m=Page&amp;a=index&amp;id=6">联系我们</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainContent;
