import Styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button type="button" className={Styles.loadMoreButton} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
