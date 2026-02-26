import React, { useState, memo } from 'react';
import withUtilities from '../../utilitiesHOC';
import { classResolver, PREFIX } from '../../utils/utils';
import type { UtilitiesProps } from '../../types';
import './tabs.scss';

export interface TabTitle {
  title?: string;
  subtitle?: string;
  disabled?: boolean;
}

export interface TabsContentProps {
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Content = (props: TabsContentProps) => {
  const {
    active = false,
    children,
    className = '',
  } = props;

  return (
    <div className={`tab-content ${active ? '-active' : ''} ${className}`}>
      <div className="tab-inner-content">
        {children}
      </div>
    </div>
  );
};

export interface TabsProps extends UtilitiesProps {
  children?: React.ReactElement<TabsContentProps>[];
  titles: (string | TabTitle)[];
  bgWhite?: boolean;
  centered?: boolean;
  useNavigation?: boolean;
  activeTab?: number;
  onTabClick?: (e: React.MouseEvent, idx: number, title: string | TabTitle) => void;
  noStroke?: boolean;
}

const Tabs = memo(withUtilities((props: TabsProps) => {
  const {
    className = '',
    children = [],
    titles = [],
    bgWhite = false,
    centered = false,
    useNavigation = false,
    activeTab = 0,
    onTabClick = () => {},
    noStroke = false,
  } = props;

  const [active, setActive] = useState(activeTab);
  const [left, setLeft] = useState(0);

  const classes = classResolver({
    '-bg-white': !!bgWhite,
    '-centered': !!centered,
    '-no-stroke': !!noStroke,
    '-first': useNavigation && left === 0,
    '-last': useNavigation && left !== 0,
  });

  const finalTitles = titles.map((title, idx) => (
    <li
      role="presentation"
      key={JSON.stringify(title)}
      className={`tabs-nav-item ${active === idx ? '-active' : ''} ${typeof title !== 'string' && title.subtitle ? '-subtitle' : ''} ${typeof title !== 'string' && title.disabled ? '-disabled' : ''}`}
      onClick={(e) => {
        setActive(idx);
        onTabClick(e, idx, title);
      }}
      tabIndex={0}
    >
      {typeof title === 'string' ? title : (
        <>
          <span className="tab-label">{title.title}</span>
          <span className="tab-label">{title.subtitle}</span>
        </>
      )}
    </li>
  ));

  return (
    <div className={`${PREFIX}-3-tabs ${className} ${classes}`}>
      <div className="tabs-nav-corners-container">
        {useNavigation && (
          <div
            className={`tabs-nav-arrow-${left !== 0 ? 'first -left' : 'last -right'}`}
            role="presentation"
            onClick={() => setLeft((l) => (l === 0 ? -270 : 0))}
          />
        )}
        <div className="tabs-nav-container">
          <ul className="tabs-nav" style={{ left }}>
            {finalTitles}
          </ul>
        </div>
      </div>
      <div className="tabs-container">
        {(children as React.ReactElement[]).filter((child) => child)
          .map((comp, i) => React.cloneElement(comp, {
            active: i === active,
            key: `content-${JSON.stringify(titles[i])}`,
          }))}
      </div>
    </div>
  );
}));

(Tabs as any).Content = Content;

export default Tabs;
