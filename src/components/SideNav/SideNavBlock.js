import {
    Box,
    Text,
    Divider,
    Button,
    Avatar,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard , faPen, faQuestion, faLink } from '@fortawesome/free-solid-svg-icons';

export default function SideNavBlock() {
    return (
        <Box style={{width:"100%"}}>
            <Box style={{  border: "white solid 2px", alignContent: "center",padding:"10px" }}>
                <Box style={{ marginTop: "5px", marginLeft: "30%", color: "rgb(6, 6, 215)" }} >
                    <FontAwesomeIcon icon={faDashboard} />
                </Box>
                <Text fontSize='xs' style={{ fontWeight: "bold", marginTop: "5px", marginLeft: "20%", color: "rgb(6, 6, 215)" }} >Dashboard</Text>
            </Box>
            <Box style={{  border: "white solid 2px", alignContent: "center",padding:"10px" }}>
                <Box style={{ marginTop: "5px", marginLeft: "30%", color: "rgb(6, 6, 215)" }} >
                    <FontAwesomeIcon icon={faPen} />
                </Box>
                <Text fontSize='xs' style={{ fontWeight: "bold", marginTop: "5px", marginLeft: "20%", color: "rgb(6, 6, 215)" }} >Assessment</Text>
            </Box>
            <Box style={{  border: "white solid 2px", alignContent: "center",padding:"10px" }}>
                <Box style={{ marginTop: "5px", marginLeft: "30%", color: "rgb(6, 6, 215)" }} >
                    <FontAwesomeIcon icon={faQuestion} />
                </Box>
                <Text fontSize='xs' style={{ fontWeight: "bold", marginTop: "5px", marginLeft: "20%", color: "rgb(6, 6, 215)" }} >My Library</Text>
            </Box>
            <Box style={{ color: "rgb(198, 196, 196)", width:"70%", marginLeft: "20px" }} >
                <Divider orientation='horizontal' />
            </Box>
            <Box style={{ color: "rgb(198, 196, 196)", width:"80px", marginLeft: "30px" }} >
                <Button size='sm' style={{marginTop: "10px", marginLeft: "15%",width:"70%",color:"red",background:"white", border:"red 2px solid" , borderRadius:"20px"}} >Admin</Button>
            </Box>
            <Box style={{ border: "white solid 2px", alignContent: "center",padding:"10px" }}>
                <Box style={{ marginTop: "5px", marginLeft: "22%", color: "rgb(6, 6, 215)" }} >
                    <FontAwesomeIcon icon={faLink} />
                </Box>
                <Text fontSize='xs' style={{ fontWeight: "bold", marginTop: "5px", marginLeft: "20%", color: "rgb(6, 6, 215)" }} >Round <br/>Status</Text>
            </Box>
        </Box>
    );
}
