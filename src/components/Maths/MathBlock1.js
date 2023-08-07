import {
    Box,
    Text,
    Divider,
    Button,
    Avatar,
    AvatarGroup,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLink, faCalendar, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


export default function MathBlock1() {
    return (
        <Box style={{ marginTop: "10px", border: "rgb(198, 196, 196) solid 2px", width: "400px", borderRadius: "10px", marginLeft: "10px", padding: "10px" }}>
            <Box style={{ display: "flex", justifyContent: "space-between" }} >
                <Box style={{ padding: "8px", border: "2px solid rgb(198, 196, 196)", background: "rgb(198, 196, 196)", width: "35px", borderRadius: "10px" }} >
                    <FontAwesomeIcon icon={faBriefcase} />
                </Box>
                <Box>
                    <FontAwesomeIcon icon={faEllipsisV} />
                </Box>
            </Box>
            <Text fontSize='xl' style={{ marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >Math Assessment</Text>
            <Box style={{ display: "flex" }} >
                <Text fontSize='md' style={{ marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >Job</Text>
                <Box style={{ color: "black", height: "20px", marginTop: "10px", marginBottom: "10px", marginLeft: "10px" }} >
                    <Divider orientation='vertical' />
                </Box>
                <Box style={{ marginTop: "10px", marginBottom: "10px", display: "flex", marginLeft: "10px" }} >
                    <Box style={{ marginTop: "1px" }} >
                        <FontAwesomeIcon icon={faCalendar} />
                    </Box>
                    <Text fontSize='md' style={{ color: "grey", marginLeft: "7px" }} >20 Apr 2023</Text>
                </Box>

            </Box>
            <Box style={{ color: "black", width: "380px", marginTop: "10px", marginBottom: "10px", borderStyle: "dotted" }} >
                <Divider orientation='horizontal' />
            </Box>
            <Box style={{ display: "flex", marginTop: "10px", justifyContent: "space-between" }} >
                <Box style={{ display: "flex" }}>
                    <Box>
                        <Text fontSize='md' style={{ marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >00 <br /> Duration</Text>
                    </Box>
                    <Box>
                        <Text fontSize='md' style={{ marginTop: "10px", marginBottom: "10px", marginLeft: "10px", color: "rgb(6, 6, 215)" }} >00 <br /> Questions</Text>
                    </Box>
                </Box>
                <Box style={{ display: "flex" }}>
                    <Box>

                        <Button size='sm' style={{ color: "rgb(6, 6, 215)", padding: "10px", background: "white", borderRadius: "20px", border: "rgb(6, 6, 215) solid 2px", marginTop: "15px" }} >
                            <Box >
                                <FontAwesomeIcon icon={faLink} />
                            </Box>
                            Share
                        </Button>

                    </Box>
                    <Box style={{ marginLeft: "8px", marginTop: "5px" }}>
                        <AvatarGroup size='md' max={3}>
                            <Avatar name='Love Pal' />
                            <Avatar name='Love Pal' />
                        </AvatarGroup>

                    </Box>
                </Box>
            </Box>

        </Box>

    );
}