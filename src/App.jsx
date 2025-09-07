import DirectoryComponent from './components/directory/directory.component';

const App = () => {

  const categories = [
    {
      id : 1,
      title : 'Proteins',
      imgUrl : './src/img/Protein.webp'
    },
    {
      id : 2,
      title : 'Vitamins & Supplements',
      imgUrl : './src/img/Vitamins.jpg'
    },
    {
      id : 3,
      title : 'Skin Care',
      imgUrl : './src/img/Skin.webp'
    },
    {
      id : 4,
      title : "Women's Health",
      imgUrl : './src/img/Woman.jpg'
    },
    {
      id : 5,
      title : "Men's Health",
      imgUrl : './src/img/Man.png'
    }
  ]

  return (
      <>
        <DirectoryComponent categories={categories} />
      </>
  )
}

export default App
