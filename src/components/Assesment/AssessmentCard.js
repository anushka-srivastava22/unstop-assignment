import {
    Box,
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import FormCard from '../Form/FormCard';

export default function AssessmentCard() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box style={{ marginTop: "10px", height:"250px", border: "rgb(198, 196, 196) solid 2px", width: "400px", borderRadius: "10px", marginLeft: "10px", padding: "10px", background: "rgb(198, 196, 196)" }}>
            <Button style={{ marginTop: "30px", marginBottom: "30px", marginLeft: "150px", marginRight: "150px", border: "2px solid rgb(198, 196, 196)", width: "50px", borderRadius: "50px", background: "white" }}  >
                <FontAwesomeIcon icon={faPlus} style={{ padding: "10px", marginLeft: "4px" }} onClick={onOpen} />
            </Button>
            <Text fontSize='xl' style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >New Assessment</Text>
            <Text fontSize='md' style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px", color: "rgb(6, 6, 215)" }} >From here you
                can add questions of multiple types like MCQs,subjective(text or paragraph)!</Text>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    
                        <FormCard />
                    
                </ModalContent>
            </Modal>
        </Box>

    );
}