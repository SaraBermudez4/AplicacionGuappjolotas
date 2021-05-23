import React from 'react'
import { ChakraProvider, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import Productos from './Productos'

const CategoriaProductos = (props) => {
    return (
        <ChakraProvider>
            <Tabs isFitted variant="enclosed" style={{ marginTop: "40px" }} color="#9A9A9D">
                <TabList borderBottom="none">
                {props.categorias.map(categoria => {
                        return (
                            <Tab _selected={{ color: "#FA4A0C", borderBottomColor: "#FA4A0C" }} 
                            key={`${props.section}-${categoria.name}`} 
                            onClick={(e)=> {
                                localStorage.setItem('productCategorie' , categoria.name)
                                props.onClick(e, categoria.name)
                            }}>
                                {categoria.section}
                            </Tab>
                        )
                    })}
                </TabList>
                <TabPanels>
                    <TabPanel paddingLeft="0" paddingRight="0">
                        <Productos section={props.section} productos={props.productos}/>
                    </TabPanel>
                    <TabPanel paddingLeft="0" paddingRight="0">
                        <Productos section={props.section} productos={props.productos}/>
                    </TabPanel>
                    <TabPanel paddingLeft="0" paddingRight="0">
                        <Productos section={props.section} productos={props.productos}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </ChakraProvider>
    )
}

export default CategoriaProductos