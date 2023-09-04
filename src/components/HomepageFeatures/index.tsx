import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Find TODO-Comments',
    Svg: require('@site/static/img/holey-todo.svg').default,
    description: (
      <>
        Holey's core idea is to replace TODO-comments with executable counterparts.
        This lifts comments into compilation space and prevents them from rotting away.
      </>
    ),
  },
  {
    title: 'Introduce Holes',
    Svg: require('@site/static/img/holey-holes.svg').default,
    description: (
      <>
        <code>Hole.&lt;Type&gt;(description[, effect | value])</code> enables
        you to write incomplete code that is still executable.
      </>
    ),
  },
  {
    title: 'Extend Holey',
    Svg: require('@site/static/img/holey-extension.svg').default,
    description: (
      <>
        An extension system allows you to extend Holey and use its Devtool.
        This means that you can treat I/O as dummy data during development and focus on the important parts.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
