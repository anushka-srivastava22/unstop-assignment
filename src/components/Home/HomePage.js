import MathBlock1 from "../Maths/MathBlock1";
import MathBlock from "../Maths/MathBlock";
import SideNavBlock from "../SideNav/SideNavBlock";
import AssesmentCard from "../Assesment/AssessmentCard";
import AssessmentOverviewBar from "../AssessmentOverview/AssessmentOverviewBar";
import FormCard from "../Form/FormCard";

import {
    Box,
    Text,
    Divider,

    Grid,
    GridItem,
} from "@chakra-ui/react";

export default function HomePage() {
    return (
        <div>
            <Grid style={{ display: "flex" }}>

                <Box style={{ width: "15%" }}>
                    <SideNavBlock />
                </Box>
                <Box style={{ width: "70%" }}>
                    <Box style={{ display: "flex" }}>
                        <Box style={{ border: "white 2px solid", padding: "10px" }}>
                            <Text fontSize='xl' style={{ marginTop: "10px", marginBottom: "5px", color: "rgb(6, 6, 215)", fontWeight: "bold" }} > Assessment</Text>
                        </Box>
                        <Box style={{ color: "black", height: "20px", marginTop: "30px", marginBottom: "5px", marginLeft: "10px" }} >
                            <Divider orientation='vertical' />
                        </Box>
                        <Box style={{ border: "white 2px solid", padding: "10px" }}>
                            <Text fontSize='xl' style={{ marginTop: "10px", marginBottom: "5px", color: "rgb(6, 6, 215)", fontWeight: "bold" }} >My Assessment</Text>
                        </Box>

                    </Box>
                    <Box style={{ color: "black", width: "100%", marginBottom: "20px", marginLeft: "10px" }} >
                        <Divider orientation='horizontal' />
                    </Box>
                    <Box>
                        <Text fontSize='xl' style={{ marginTop: "10px", marginBottom: "5px", color: "rgb(6, 6, 215)", marginLeft: "10px" }} > Assessment Overview</Text>
                        <AssessmentOverviewBar />
                    </Box>
                    <Grid style={{display:"flex"}}>
                        <GridItem>
                            <AssesmentCard />
                        </GridItem>
                        <GridItem>
                            <MathBlock />
                        </GridItem>
                        <GridItem>
                            <MathBlock />
                        </GridItem>
                    </Grid>
                </Box>

            </Grid>

        </div>
    );
}