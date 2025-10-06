import DirectoryItem from '../directory-item/directory-item.component';
import './directory.component.styles.scss';

const categories = [
  {
    id : 1,
    title : 'Proteins',
    imgUrl : 'https://i.ibb.co/CKh78cfQ/Protein.png',
    route : 'shop/proteins'
  },
  {
    id : 2,
    title : 'Vitamins & Supplements',
    imgUrl : 'https://i.ibb.co/YTF9Y6Gs/Vitamins.jpg',
    route : 'shop/vitamins & supplements'
  },
  {
    id : 3,
    title : 'Skin Care',
    imgUrl : 'https://i.ibb.co/TDT3XN71/Skin.png',
    route : 'shop/skin care'
  },
  {
    id : 4,
    title : "Women's Health",
    imgUrl : 'https://i.ibb.co/Zp7cPbNh/close-up-portrait-brunette-fitness-woman-taking-dietary-supplements-vitamins-glass-water-1258-189573.jpg',
    route : "shop/women's health"
  },
  {
    id : 5,
    title : "Men's Health",
    imgUrl : 'https://i.ibb.co/k70c2Gt/Man.png',
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