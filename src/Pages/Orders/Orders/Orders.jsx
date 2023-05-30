import Cover from '../../../Components/Cover/Cover'
import MenuTabs from '../MenuTabs/MenuTabs';

const Orders = () => {
    return (
        <div>
            
            <Cover from='order' title={'OUR SHOP'} url={'/src/assets/shop/banner2.jpg'}></Cover>
            <MenuTabs></MenuTabs>
        </div>
    );
};

export default Orders;