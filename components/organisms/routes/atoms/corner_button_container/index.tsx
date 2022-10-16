import styles from './style.module.css';
import Link from 'next/link';

/**
 * Creates a container for a corner cropped top left positioned button container
 * @param {Object} props
 * @param {String} props.href
 * @param {Object} props.children
 * @returns
 */
export default function CornerButtonContainer(props) {
    return (
        <Link
            href={{ pathname: props.href }}
            data-testid={props.testid}
            className={'print ' + styles.ContainerStyle}>
            {props.children}
        </Link>
    );
}
