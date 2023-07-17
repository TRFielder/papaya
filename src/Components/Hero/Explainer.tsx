import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

interface ExplainerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Explainer = ({ isOpen, onClose }: ExplainerProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#1A202C">About Papaya</ModalHeader>
        <ModalCloseButton />
        <ModalBody color="#1A202C">
          Papaya is a recipe storage site because all the ones I&apos;ve tried
          haven&apos;t quite done what I wanted
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Explainer;
