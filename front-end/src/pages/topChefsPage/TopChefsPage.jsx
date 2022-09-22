import './topChefsPage.css'
import ChefCard from '../../components/chefCard/ChefCard'

const TopChefsPage = () => {
  const chefs = [
    {
      name: "Giuseppe Ferro",
      img: "/img/top-chefs/img_1.jpg",
      recipeCount: "9",
      cuisine: "Italian"
    },
    {
      name: "Peter Parker",
      img: "/img/top-chefs/img_2.jpg",
      recipeCount: "23",
      cuisine: "French"
    },
    {
      name: "Chin Xi",
      img: "/img/top-chefs/img_3.jpg",
      recipeCount: "4",
      cuisine: "Thai"
    },
    {
      name: "Bob Marley",
      img: "/img/top-chefs/img_4.jpg",
      recipeCount: "14",
      cuisine: "Cuban"
    },
    {
      name: "Lauris Stirna",
      img: "/img/top-chefs/img_5.jpg",
      recipeCount: "2",
      cuisine: "Latvian"
    },
    {
      name: "Mad Max",
      img: "/img/top-chefs/img_6.jpg",
      recipeCount: "7",
      cuisine: "Egyptian"
    },
    {
      name: "Marilyn Monroe",
      img: "/img/top-chefs/img_7.jpg",
      recipeCount: "18",
      cuisine: "Polish"
    },
    {
      name: "Wonder Woman",
      img: "/img/top-chefs/img_8.jpg",
      recipeCount: "100",
      cuisine: "Lithuanian"
    }
  ]
  return (
    <div className='chefs-section'> 
        <h1 className='chefs-section-title'>Our Top Chefs</h1>
        <div className='top-chefs-container'>
            {/* <ChefCard />
            <ChefCard />
            <ChefCard />
            <ChefCard />
            <ChefCard />
            <ChefCard />
            <ChefCard />
            <ChefCard /> */}
            { chefs.map((chef) => <ChefCard key={chef.name} chef={chef}/>) }
        </div>
    </div>
  )
}

export default TopChefsPage