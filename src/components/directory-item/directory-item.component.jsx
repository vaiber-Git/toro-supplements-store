import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({category}) => {

    const {title, imgUrl, route} = category;
    const navigate = useNavigate();

    const onClickHandler = () => navigate(route);

    return (
        <div className = "directory-item-container" onClick={onClickHandler}>
              <div className = "background-image" style = {{
                backgroundImage : `url(${imgUrl})`  
              }} />
              <div className = "directory-item-body-container">
                <h2>{title}</h2>
                <p>SHOP NOW</p>
              </div>
        </div>
    )
}

export default DirectoryItem;