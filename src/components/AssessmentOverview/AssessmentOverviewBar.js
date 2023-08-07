import {
    Box,
    Text,
    Divider,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';


export default function AssessmentOverviewBar() {
    return (
        <Box style={{ width: " 100%", height: "40%", marginLeft: "15px", border: "solid rgb(198, 196, 196) 2px", borderRadius: "20px", display: "flex" }}>
            <Box style={{ padding: "25px" }}>
                <Text fontSize='md' style={{ marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >Total Assessment</Text>
                <Box style={{ display: "flex" }} >
                    <Box style={{ padding: "8px", border: "2px solid rgb(198, 196, 196)", background: "rgb(198, 196, 196)", width: "35px", borderRadius: "10px" }} >
                        <FontAwesomeIcon icon={faBars} />
                    </Box>
                    <Text fontSize='lg' style={{ marginTop: "10px", marginBottom: "10px", marginLeft: "10px", color: "rgb(6, 6, 215)", fontWeight: "bold" }} >34</Text>
                </Box>
            </Box>
            <Box style={{ color: "rgb(198, 196, 196)", height: "150px", marginLeft: "20px" }} >
                <Divider orientation='vertical' />
            </Box>
            <Box style={{ padding: "25px" }}>
                <Text fontSize='md' style={{ marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >Candidates</Text>
                <Box style={{ display: "flex" }}>
                    <Box style={{ display: "flex" }} >
                        <Box style={{ padding: "8px", border: "2px solid rgb(198, 196, 196)", background: "rgb(198, 196, 196)", width: "35px", borderRadius: "10px" }} >
                            <FontAwesomeIcon icon={faUser} />
                        </Box>
                        <Box>
                            <Box style={{ display: "flex" }}>
                                <Box>
                                    <Text fontSize='lg' style={{ marginLeft: "10px", color: "rgb(6, 6, 215)", fontWeight: "bold" }} >11,194</Text>
                                </Box>
                                <Box>
                                    <Text fontSize='xs' style={{ marginTop: "5px", marginLeft: "5px", color: "green", fontWeight: "bold" }} >+89</Text>
                                </Box>
                            </Box>
                            <Text fontSize='xs' style={{ marginTop: "5px", marginLeft: "10px", color: "rgb(6, 6, 215)" }} >Total Candidate</Text>
                        </Box>

                    </Box>
                    <Box style={{ color: "rgb(198, 196, 196)", height: "50px", marginLeft: "20px" }} >
                        <Divider orientation='vertical' />
                    </Box>
                    <Box style={{ display: "flex" }} >

                        <Box>
                            <Box style={{ display: "flex" }}>
                                <Box>
                                    <Text fontSize='lg' style={{ marginLeft: "10px", color: "rgb(6, 6, 215)", fontWeight: "bold" }} >1,14</Text>
                                </Box>
                                <Box>
                                    <Text fontSize='xs' style={{ marginTop: "5px", marginLeft: "5px", color: "green", fontWeight: "bold" }} >+89</Text>
                                </Box>
                            </Box>
                            <Text fontSize='xs' style={{ marginTop: "5px", marginLeft: "10px", color: "rgb(6, 6, 215)" }} >Who Attampted</Text>
                        </Box>

                    </Box>
                </Box>
            </Box>
            <Box style={{ color: "rgb(198, 196, 196)", height: "150px", marginLeft: "20px" }} >
                <Divider orientation='vertical' />
            </Box>
            <Box style={{ padding: "25px" }}>
                <Text fontSize='md' style={{ marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >Candidates Source</Text>
                <Box style={{ display: "flex" }}>
                    <Box style={{ display: "flex" }} >
                        <Box style={{ padding: "8px", border: "2px solid rgb(198, 196, 196)", background: "rgb(198, 196, 196)", width: "35px", borderRadius: "10px" }} >
                            <FontAwesomeIcon icon={faGlobe} />
                        </Box>
                        <Box>
                            <Box style={{ display: "flex" }}>
                                <Box>
                                    <Text fontSize='lg' style={{ marginLeft: "10px", color: "rgb(6, 6, 215)", fontWeight: "bold" }} >11,000</Text>
                                </Box>
                                <Box>
                                    <Text fontSize='xs' style={{ marginTop: "5px", marginLeft: "5px", color: "green", fontWeight: "bold" }} >+89</Text>
                                </Box>
                            </Box>
                            <Text fontSize='xs' style={{ marginTop: "5px", marginLeft: "10px", color: "rgb(6, 6, 215)" }} >E-mail</Text>
                        </Box>

                    </Box>
                    <Box style={{ color: "rgb(198, 196, 196)", height: "50px", marginLeft: "20px" }} >
                        <Divider orientation='vertical' />
                    </Box>
                    <Box style={{ display: "flex" }} >

                        <Box>
                            <Box style={{ display: "flex" }}>
                                <Box>
                                    <Text fontSize='lg' style={{ marginLeft: "10px", color: "rgb(6, 6, 215)", fontWeight: "bold" }} >145</Text>
                                </Box>
                                <Box>
                                    <Text fontSize='xs' style={{ marginTop: "5px", marginLeft: "5px", color: "green", fontWeight: "bold" }} >+89</Text>
                                </Box>
                            </Box>
                            <Text fontSize='xs' style={{ marginTop: "5px", marginLeft: "10px", color: "rgb(6, 6, 215)" }} >Social Share</Text>
                        </Box>

                    </Box>
                    <Box style={{ color: "rgb(198, 196, 196)", height: "50px", marginLeft: "20px" }} >
                        <Divider orientation='vertical' />
                    </Box>
                    <Box style={{ display: "flex" }} >

                        <Box>
                            <Box style={{ display: "flex" }}>
                                <Box>
                                    <Text fontSize='lg' style={{ marginLeft: "10px", color: "rgb(6, 6, 215)", fontWeight: "bold" }} >145</Text>
                                </Box>
                                <Box>
                                    <Text fontSize='xs' style={{ marginTop: "5px", marginLeft: "5px", color: "green", fontWeight: "bold" }} >+89</Text>
                                </Box>
                            </Box>
                            <Text fontSize='xs' style={{ marginTop: "5px", marginLeft: "10px", color: "rgb(6, 6, 215)" }} >Unique Link</Text>
                        </Box>

                    </Box>
                </Box>
            </Box>
            <Box style={{ color: "rgb(198, 196, 196)", height: "150px", marginLeft: "20px" }} >
                <Divider orientation='vertical' />
            </Box>
            <Box style={{ padding: "25px" }}>
                <Text fontSize='md' style={{ marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >Total Purpose</Text>
                <Box style={{ display: "flex" }} >
                    <Box style={{ padding: "8px", border: "2px solid rgb(198, 196, 196)", background: "rgb(198, 196, 196)", width: "35px", borderRadius: "10px" }} >
                        <FontAwesomeIcon icon={faLink} />
                    </Box>
                    <Text fontSize='lg' style={{ marginTop: "10px", marginBottom: "10px", marginLeft: "10px", color: "rgb(6, 6, 215)", fontWeight: "bold" }} >11</Text>
                </Box>
            </Box>
        </Box>
    );
}