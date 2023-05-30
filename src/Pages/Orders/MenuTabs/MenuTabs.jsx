import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const MenuTabs = () => {
    const tabs =['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} =useParams()
    const current = tabs.indexOf(category)
    console.log(current);
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const desserts = menu.filter(mn => mn.category === 'dessert');
    const pizzas = menu.filter(mn => mn.category === 'pizza');
    const salads = menu.filter(mn => mn.category === 'salad');
    const soups = menu.filter(mn => mn.category === 'soup');
    const drinks = menu.filter(mn => mn.category === 'drinks');
    return (





        <div className='max-w-screen-xl	w-11/12 mx-auto my-10'>
            <Tabs defaultIndex={current}  onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            salads.map(salad => <FoodCard key={salad.id} img={salad.image} recipe={salad.recipe} name={salad.name}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            pizzas.map(pizza => <FoodCard key={pizza.id} img={pizza.image} recipe={pizza.recipe} name={pizza.name}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                           soups.map(soupe => <FoodCard key={soupe.id} img={soupe.image} recipe={soupe.recipe} name={soupe.name}></FoodCard>)
                        }
                    </div>   
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            desserts.map(dessert => <FoodCard key={dessert.id} img={dessert.image} recipe={dessert.recipe} name={dessert.name}></FoodCard>)
                        }
                    </div>   
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            drinks.map(drink => <FoodCard key={drink.id} img={drink.image} recipe={drink.recipe} name={drink.name}></FoodCard>)
                        }
                    </div>   
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MenuTabs;