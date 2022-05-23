import React from 'react';
import styles from './choose_templates.module.css';
import Button from '../../button';

const ChooseTemplates = (props) => {
    return (
        <div className={styles.choose_box}>
            <h3 className={styles.page_title}>컬라피가 추천하는 템플릿들</h3>
            <div className={styles.templates_box}>
                <ul className={styles.templates_list}>
                    <li className={styles.templates_item}>
                        <img className={styles.templates_image} src="/images/template_image/pattern.png" />
                    </li>
                    <li className={styles.templates_item}>
                        <img className={styles.templates_image} src="/images/template_image/pattern.png" />
                    </li>
                    <li className={styles.templates_item}>
                        <img className={styles.templates_image} src="/images/template_image/pattern.png" />

                    </li>
                </ul>
            </div>
            <Button content={'새로고침'} />
        </div>
    )
}

export default ChooseTemplates;