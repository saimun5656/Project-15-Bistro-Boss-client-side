import useTittle from "../../../Hooks/useTitle"
import Cover from "../../../Components/Cover/Cover";
import Offer from "../Offer/Offer";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import pizzaimg  from '../../../assets/menu/pizza-bg.jpg'

const Menu = () => {
  // useEffect(() => {
  //     document.title = 'Bisstro||Menu';
  //     console.log(document)
       
  //   }, []);
  useTittle('BISTRO|menu')
  const [menu] = useMenu()
  const  offers = menu.filter(mn=>mn.category==='offered');
  const desserts = menu.filter(mn=>mn.category==='dessert');
  const pizzas = menu.filter(mn=>mn.category==='pizza');
  const salads =menu.filter(mn=>mn.category==='salad');
  const soups = menu.filter(mn=>mn.category==='soup');

  
    
  // document.title='biss'
  // console.log('biss');
    return (
        <div>

          <Cover from={'menu'} url='/src/assets/menu/banner3.jpg' title ='OUR MENU' subTitle={'Would you like to try a dish?'}></Cover>
          <Offer></Offer>
          <MenuCategory title={'DESSERT'} url ={'/src/assets/menu/dessert-bg.jpeg'}  menu={desserts}></MenuCategory>
          <MenuCategory title={'PIZZA'} url={pizzaimg}  menu={pizzas}></MenuCategory>
          <MenuCategory title={'SALADS'} url ={'/src/assets/menu/salad-bg.jpg'}  menu={salads}></MenuCategory>
          <MenuCategory title={'SOUPS'} url ={'/src/assets/menu/soup-bg.jpg'}  menu={soups}></MenuCategory>
         
        </div>
    );
};

export default Menu;