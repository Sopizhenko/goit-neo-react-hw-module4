import Styles from "./ErrorMessage.module.css"

const ErrorMessage = () => {
    return (
      <p className={Styles.errorMessage}>
          Something went wrong. Please try again later.
      </p>
    );
}

export default ErrorMessage