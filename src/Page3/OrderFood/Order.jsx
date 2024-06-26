import { useState } from 'react';
import orderCover from '../../assets/menu-img/image-5.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab';
import Cover from '../../Pages2/Cover/Cover';

const Order = () => {
    const categories = ['dessert', 'soup','salad', 'pizza' , 'drinks']

    const { category } = useParams();
    console.log(category);
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();



    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');



    return (
        <div>
            <Helmet>
                <title>Fancy Restu | Order Food</title>
            </Helmet>
            <Cover img={orderCover} title='Order Food'></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Drinks</Tab>
                   
                </TabList>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>

                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;