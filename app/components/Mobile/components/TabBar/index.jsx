/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';
import CollectionsIcon from '../../../../assets/img/icon-collections.svg';
import ExpirementIcon from '../../../../assets/img/icon-expirement.svg';
import PostsIcon from '../../../../assets/img/icon-posts.svg';
import SmileIcon from '../../../../assets/img/icon-smile.svg';
import ThunderboltIcon from '../../../../assets/img/icon-thunderbolt.svg';
import Nav from '../Nav';

/**
 * Local variables
 */
const propTypes = {};
const defaultProps = {};

/**
 * <TabBar />
 */
const TabBar = (props) => {
  let classes = cx('tabbar', props.className);

  const items = [
    {
      index: true,
      url: '/',
      children: 'Pens',
      icon: ExpirementIcon,
    },
    {
      url: '/posts',
      children: 'Posts',
      icon: PostsIcon,
    },
    {
      url: '/collections',
      children: 'Collections',
      icon: CollectionsIcon,
    },
    {
      url: '/trending',
      children: 'Trending',
      icon: ThunderboltIcon,
    },
    {
      url: '/profile',
      children: 'Me',
      icon: SmileIcon,
    },
  ];

  return (
    <div className={classes}>
      <Nav items={items} />
    </div>
  );
};

TabBar.propTypes = propTypes;
TabBar.defaultProps = defaultProps;

export default TabBar;
