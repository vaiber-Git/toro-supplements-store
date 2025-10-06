import DirectoryItem from '../directory-item/directory-item.component';
import './directory.component.styles.scss';

const categories = [
  {
    id : 1,
    title : 'Proteins',
    imgUrl : './src/img/Protein.png',
    route : 'shop/proteins'
  },
  {
    id : 2,
    title : 'Vitamins & Supplements',
    imgUrl : './src/img/Vitamins.jpg',
    route : 'shop/vitamins & supplements'
  },
  {
    id : 3,
    title : 'Skin Care',
    imgUrl : './src/img/Skin.png',
    route : 'shop/skin care'
  },
  {
    id : 4,
    title : "Women's Health",
    imgUrl : './src/img/Woman.jpg',
    route : "shop/women's health"
  },
  {
    id : 5,
    title : "Men's Health",
    imgUrl : './src/img/Man.png',
    route : "shop/men's health"
  }
];

const DirectoryComponent = () => {
  
  return (
    <div className = "directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default DirectoryComponent;