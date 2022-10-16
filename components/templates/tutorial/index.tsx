import styles from './style.module.css';
import Title from '../../organisms/title';
import CSSConfigurator from '../../organisms/css_configurator';
import AppButton from '../../organisms/routes/molecules/app_button';

/**
 * Template page for tutorial
 * @param {Object} props
 * @param {Object} props.children
 * @returns
 */
export default function TutorialTemplate(props) {
    const theme = {
        primary: '#ffffff',
        accent: '#212529',
    };

    return (
        <main className={styles.ContainerStyle}>
            <CSSConfigurator theme={theme}></CSSConfigurator>
            <Title></Title>
            <AppButton></AppButton>
            <article className={styles.ArticleStyle}>{props.children}</article>
        </main>
    );
}
