import {
    Box,
    Text,
    Divider,
    Select,
    Input,
    FormControl,
    FormLabel,
    Button,
} from "@chakra-ui/react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


export default function FormCard() {
    return (
        <Box style={{ marginLeft: "30px", width: "85%", border: "2px gray "  }}>
            <Text fontSize='xl' style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >Create new Assessment</Text>
            <Box style={{ color: "black", width: "100%", marginTop: "10px", marginBottom: "10px", borderStyle: "dotted" }} >
                <Divider orientation='horizontal' />
            </Box>
            <Box style={{ marginLeft: "15px", marginRight: "15px", marginBottom: "15px" }} >
                <FormControl>
                    <FormLabel fontSize='md' style={{ marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }}>Name of assessment</FormLabel>
                    <Input placeholder='Type Here' size='lg' />
                    <FormLabel fontSize='md' style={{ marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }}>Purpose of the Test is</FormLabel>
                    <Select placeholder='Select'></Select>
                    <FormLabel fontSize='md' style={{ marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }}>Description</FormLabel>
                    <Select placeholder='Select'></Select>
                    <FormLabel fontSize='md' style={{ marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }}>Skills</FormLabel>
                    <Box style={{padding:"5px",border:"2px solid rgb(198, 196, 196)", borderRadius:"10px"}}>
                        <Box style={{ display: "flex" }}>
                            <Button style={{ display: "flex", marginLeft: "4px", border: "2px solid rgb(106, 106, 244)", background: "rgb(106, 106, 244)", borderRadius: "20px" }} >
                                <Text fontSize='xs' style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >UI/UX Design</Text>
                                <Box style={{ marginTop: "5px", marginLeft: "5px" }} >
                                    <FontAwesomeIcon icon={faTimes} />
                                </Box>
                            </Button>
                            <Button style={{ display: "flex", marginLeft: "4px", border: "2px solid rgb(106, 106, 244)", background: "rgb(106, 106, 244)", borderRadius: "20px" }} >
                                <Text fontSize='xs' style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >No of Questions</Text>
                                <Box style={{ marginTop: "5px", marginLeft: "5px" }} >
                                    <FontAwesomeIcon icon={faTimes} />
                                </Box>
                            </Button>
                            <Button style={{ display: "flex", marginLeft: "4px", border: "2px solid rgb(106, 106, 244)", background: "rgb(106, 106, 244)", borderRadius: "20px" }} >
                                <Text fontSize='xs' style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >Web Development</Text>
                                <Box style={{ marginTop: "5px", marginLeft: "5px" }} >
                                    <FontAwesomeIcon icon={faTimes} />
                                </Box>
                            </Button>
                        </Box>
                        <Box style={{ display: "flex", marginTop: "10px" }}>
                            <Button style={{ display: "flex", marginLeft: "4px", border: "2px solid rgb(106, 106, 244)", background: "rgb(106, 106, 244)", borderRadius: "20px" }} >
                                <Text fontSize='xs' style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >UI/UX Design</Text>
                                <Box style={{ marginTop: "5px", marginLeft: "5px" }} >
                                    <FontAwesomeIcon icon={faTimes} />
                                </Box>
                            </Button>
                            <Button style={{ display: "flex", marginLeft: "4px", border: "2px solid rgb(106, 106, 244)", background: "rgb(106, 106, 244)", borderRadius: "20px" }} >
                                <Text fontSize='xs' style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >Web Development</Text>
                                <Box style={{ marginTop: "5px", marginLeft: "5px" }} >
                                    <FontAwesomeIcon icon={faTimes} />
                                </Box>
                            </Button>
                        </Box>
                    </Box>
                    <Input placeholder='Type Here' size='lg' />
                    <FormLabel fontSize='md' style={{ marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }}>Duration of assessment</FormLabel>
                    <Input placeholder='HH:MM:SS' size='lg' />
                    <Button style={{marginTop:"10px",textAlign:"center",width:"100%", border: "2px solid blue",color:"white", background: "blue", borderRadius: "10px" }}>Next</Button>
                </FormControl>

            </Box>
        </Box>


    );
}