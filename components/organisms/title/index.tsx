import styles from './style.module.css';

/**
 * A text used as a title for the application
 * @param {Object} props
 * @param {Boolean} props.isAnimated - animates title when it is mounted
 * @returns
 */
export default function Title(props) {
    return (
        <div>
            <div
                className={
                    'print ' +
                    styles.TitleStyle +
                    ' ' +
                    (props.className || '') +
                    (props.isAnimated ? styles.AnimatedStyle : '')
                }>
                <h1 className={styles.TimelineStyle}>Timeline</h1>
                <span className={styles.BubblesStyle}>Bubbles</span>
            </div>
        </div>
    );
}
