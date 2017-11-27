import React from 'react';

const products = [
    {
        name: '农用直埋铝芯线',
        src: require('../../assets/products/1.jpg')
    },
    {
        name: '煤矿用电力电缆',
        src: require('../../assets/products/2.jpg')
    },
    {
        name: '铝合金导体交联聚乙烯',
        src: require('../../assets/products/3.jpg')
    },
    {
        name: '柔性防火电缆',
        src: require('../../assets/products/4.jpg')
    },
    {
        name: '光伏电缆',
        src: require('../../assets/products/5.jpg')
    },
    {
        name: '各类阻燃、耐火电线电',
        src: require('../../assets/products/6.jpg')
    },
    {
        name: '超五类、六类网线',
        src: require('../../assets/products/7.jpg')
    },
    {
        name: '450/750V塑料绝缘控制',
        src: require('../../assets/products/8.jpg')
    },
    {
        name: '交联聚录乙烯绝缘无卤',
        src: require('../../assets/products/9.jpg')
    },
    {
        name: '预分支电缆',
        src: require('../../assets/products/10.jpg')
    },
    {
        name: '电机绕组引接线',
        src: require('../../assets/products/11.jpg')
    },
    {
        name: '橡套电缆',
        src: require('../../assets/products/12.jpg')
    },
    {
        name: '变频电力电缆',
        src: require('../../assets/products/13.jpg')
    },
    {
        name: '各类阻燃、耐火电线电',
        src: require('../../assets/products/14.jpg')
    },
    {
        name: '硅橡胶绝缘电缆',
        src: require('../../assets/products/16.jpg')
    },
    {
        name: '铝包钢绞线及铝包钢芯',
        src: require('../../assets/products/18.jpg')
    },
    {
        name: '双层绝缘电线',
        src: require('../../assets/products/20.jpg')
    },
    {
        name: '额定电压3.6/6KV、25',
        src: require('../../assets/products/21.jpg')
    }
];

export default class ProductPage extends React.Component {
    renderProducts() {
        return products.map(({ name, src }, index) => {
            return (
                <div className="item" key={index}>
                    <img src={src} />
                    <p>{name}</p>
                </div>
            );
        });
    }
    render() {
        return (
            <div className="page product">
                <div className="left">
                    <div className="left-nav">
                        <p>产品展示</p>
                    </div>
                    <div className="details">
                        <p>主营范围：</p>
                        <p>电线电缆、电力器材、PVC材料、电机设备、农用机械、五金工具、劳保用品、电器电料、电缆桥架的批发兼零售。</p>
                    </div>
                </div>
                <div className="right">
                    <div className="product-list">
                        {this.renderProducts()}
                    </div>
                </div>
            </div>
        );
    }
};