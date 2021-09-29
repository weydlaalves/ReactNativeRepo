import React from "react";
import { SafeAreaView,Text } from "react-native";
import { Container, Title,Title2} from "./styles"
import {Button} from "../../components/Button"
import {TextInput} from "../../components/TextInput"
import {List,ListIten,ListDescription} from "./styles"

export function TelaPrincipal (){
    return(

        <Container>
            <Title>Olá Weydla</Title>
            <TextInput/>
            <Button></Button>
            <Title2> My Skill</Title2>
            <List>
                <ListIten>
                    <ListDescription>HTML</ListDescription>
                </ListIten>

                <ListIten>
                    <ListDescription>CSS</ListDescription>
                </ListIten>
            </List>
        </Container>
        
    )
}