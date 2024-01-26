import styles from './TimeDisplay.module.scss';

const TimeDisplay = props => {
    return (
        <div className={styles.timeDisplay}>
            {props.children}
        </div>
    );
};

export default TimeDisplay;