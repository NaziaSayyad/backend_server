import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react'
import { useState } from 'react'
import MyModal from '../Components/Modal'
import {useSelector,useDispatch} from "react-redux"
import { GetBugs } from '../Fetch/Fetch';
import { useEffect } from 'react';
import { GetBugSuccess } from '../Redux/Action';
import MajorServerity from '../Components/MajorServrity';

export default function DashBoardPage() {
    const [VisibleModal, setVisibleModal] = useState(false);
    const {BugsCritical,isLoading,isError} = useSelector((s) =>{
        return {
            BugsCritical : s.BugsCritical,
            isError : s.isError,
            isLoading : s.isLoading
        }
    })
    const Dispatch = useDispatch( );

    const openModle = () => {
        setVisibleModal(true)
    }

    const handleCriticalBugs = ( ) =>{
        GetBugs( ).then((res)=>{
            Dispatch(GetBugSuccess(res.data))
        })
    } 

    useEffect(( ) =>{
        handleCriticalBugs( );
    },[ ])
    return (
        <>
            <SimpleGrid columns={[2, 2, 2, 4]} border='1px solid black' gap='40px'>
                <Box border='1px solid red' color='white'>
                    <Button color='black' onClick={openModle}>Report Bug<MyModal isOpen={VisibleModal} setIsopen={setVisibleModal} category={'critical'} /></Button>
                    <Text align='center' bg='#E53E3E'>Critical Serverity</Text>
                    {BugsCritical.length > 0 && BugsCritical.map((elem)=>{
                        return <Box bg='#E53E3E' textAlign='center' lineHeight='35px'>
                            <Text>{elem.bug}</Text>
                        </Box>
                    })}
                </Box>

                <MajorServerity/>

                <Box border='1px solid red' color='white'>
                    <Button color='black' onClick={openModle}>Report Bug<MyModal isOpen={VisibleModal} setIsopen={setVisibleModal} category={'medium'} /></Button>
                    <Text align='center' bg='#2C5282'>Medium Serverity</Text>
                </Box>

                <Box border='1px solid red' color='white'>
                    <Button color='black' onClick={openModle}>Report Bug<MyModal isOpen={VisibleModal} setIsopen={setVisibleModal} category={'low'} /></Button>
                    <Text  align='center' bg='#48BB78'>Low Serverity</Text>
                </Box>
            </SimpleGrid>   
        </>
    )
}