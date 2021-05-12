import React from 'react'
import { ChakraProvider, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import Productos from './Productos'
import {categories} from '../utils/mocks/Categories'

const CategoriaProductos = (props) => {
    return (
        <ChakraProvider>
            <Tabs isFitted variant="enclosed" style={{ marginTop: "40px" }} color="#9A9A9D">
                <TabList borderBottom="none">
                {categories.map(categoria => {
                        return (
                            <Tab _selected={{ color: "#FA4A0C", borderBottomColor: "#FA4A0C" }} 
                            key={`${props.section}-${categoria.name}`} 
                            onClick={(e)=> {
                                localStorage.setItem('productCategorie' , categoria.name)
                                props.onClick(e, categoria.name)
                            }}>
                                {categoria.name}
                            </Tab>
                        )
                    })}
                </TabList>
                <TabPanels>
                    <TabPanel paddingLeft="0" paddingRight="0">
                        <Productos section={props.categorie} productos={props.productos}/>
                    </TabPanel>
                    <TabPanel paddingLeft="0" paddingRight="0">
                        <Productos section={props.categorie} productos={props.productos}/>
                    </TabPanel>
                    <TabPanel paddingLeft="0" paddingRight="0">
                        <Productos section={props.categorie} productos={props.productos}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </ChakraProvider>
    )
}

export default CategoriaProductos
 /*
                    
                    
                    <Productos section="Tamales" productos={this.state.data}/>*/