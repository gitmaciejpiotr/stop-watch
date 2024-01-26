import styles from './ButtonContainer.module.scss';

const ButtonContainer = props => {
    return (
        <div className={styles.buttonContainer}>
            {props.children}
        </div>
    );
};

export default ButtonContainer;