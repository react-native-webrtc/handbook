import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: 'Simply Modern',
		Svg: require( '@site/static/img/undraw_meditation_re_gll0.svg' ).default,
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</>
		)
	},
	{
		title: 'Multiple Platform Support',
		Svg: require( '@site/static/img/undraw_in_sync_re_jlqd.svg' ).default,
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</>
		)
	},
	{
		title: 'Stable and Standardized',
		Svg: require( '@site/static/img/undraw_add_tasks_re_s5yj.svg' ).default,
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</>
		)
	}
];

function Feature( { Svg, title, description } ) {
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
};

export default function HomepageFeatures() {
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
};