import './category-item.styles.scss'

const CategoryItem = ({category}) => {

    const {title,imgUrl} = category;
    return (
        <div className = "category-container">
              <div className = "background-image" style = {{
                backgroundImage : `url(${imgUrl})`  
              }} />
              <div className = "category-body-container">
                <h2>{title}</h2>
                <p>SHOP NOW</p>
              </div>
        </div>
    )
}

export default CategoryItem;