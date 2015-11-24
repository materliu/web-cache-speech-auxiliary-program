/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './CachePage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class CachePage extends Component {

  static propTypes = {
    title: PropTypes.string,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className="CachePage">
        <div className="CachePage-container">
          <div>
            <div>
              <h3>HTTP Cache-Control</h3>
              <dl>
                <dt><a href="https://facebook.github.io/react/">Cache-Control: no-store</a></dt>
                <dd>网络资源不缓存,每次都到服务器上拉取.</dd>
              </dl>
              <img src={require('./minions-1.jpg')} alt=""/><span>minions-1.jpg</span>
              <dl>
                <dt><a href="http://facebook.github.io/flux/">Cache-Control: no-cache</a></dt>
                <dd>网络资源可以缓存一份,但使用前,必须询问服务器,此资源是不是最新的.</dd>
              </dl>
              <img src={require('./minions-2.jpg')} alt=""/><span>minions-2.jpg</span>
              <dl>
                <dt><a href="http://webpack.github.io/">Cache-Control: max-age=31536000</a></dt>
                <dd>max-age以s为单位,31536000指定相关资源缓存一年, max-age=0 的效果等同于 Cache-Control: no-cache</dd>
              </dl>
              <img src={require('./minions-3.jpg')} alt=""/><span>minions-3.jpg</span>
              <dl>
                <dt><a href="http://www.browsersync.io/">No Cache-Control</a></dt>
                <dd>http RFC 中说在server 返回头中没有 cache control 和 expires 信息时， 浏览器有权利自主决定到底用什么缓存策略， 一般是LM-Factor 算法</dd>
              </dl>
            </div>
            <div>
              <h3>Fork me on GitHub</h3>
              <p>
                <a href="https://github.com/materliu/web-cache-speech-auxiliary-program">github.com/materliu/web-cache-speech-auxiliary-program</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }


  componentDidMount() {
    if (window.location.href.search(/3000/gi) !== -1) {
      window.location.href = 'http://localhost:5000/http-cache';
    }
  }

}

export default CachePage;
