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
                <div className="content">
                    <div className="left">
                        <div className="contact">
                            <p>联系我们</p>
                        </div>
                        <div className="details">
                            <p>地址：陕西省宝鸡市金台区中山东路292号工业品市场中区123号</p>
                            <p>联系人： 张先生 郑女士</p>
                            <p>手机： 13239170381 13279188234</p>
                            <p>电话： 0917-3238468</p>
                        </div>

                    </div>
                    <div className="right"></div>
                </div>
            </div>
        );
    }
}

export default MainContent;
