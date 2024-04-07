import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
  Spinner,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { CustomButton } from "@/UI";
interface newProductProps {
  isOpen: boolean;
  onClose: () => void;
  formData: Articles;
  setFormData: React.Dispatch<React.SetStateAction<Articles>>;
  submitHandler: () => void;
  isLoader: boolean;
  isEditForm?: boolean;
}

export default function CreateProductModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  submitHandler,
  isLoader,
  isEditForm,
}: newProductProps) {
  const setDataFromInput = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      field: string
    ) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    },
    [formData, setFormData]
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      bg="teal.500"
      shadow="dark-lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a new Article</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing="24px">
            <Box>
              <FormLabel htmlFor="username">Name</FormLabel>
              <Input
                id="username"
                placeholder="Please enter user name"
                onChange={(e) => setDataFromInput(e, "name")}
                value={formData.name}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="prod_name">Product Name</FormLabel>
              <Input
                id="productname"
                placeholder="Please enter Product name"
                onChange={(e) => setDataFromInput(e, "productName")}
                value={formData.productName}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="prod_price">Product Price</FormLabel>
              <Input
                id="productprice"
                placeholder="Please enter Product price"
                onChange={(e) => setDataFromInput(e, "productPrice")}
                value={formData.productPrice}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="prod_description">
                Product Description
              </FormLabel>
              <Textarea
                id="productdescription"
                placeholder="Please enter Product description"
                onChange={(e) => setDataFromInput(e, "description")}
                value={formData.description}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="url">Avatar Url</FormLabel>
              <InputGroup>
                <InputLeftAddon>https://</InputLeftAddon>
                <Input
                  type="url"
                  id="url"
                  placeholder="Enter Url Here"
                  onChange={(e) => setDataFromInput(e, "avatar")}
                  value={formData.avatar}
                />
              </InputGroup>
            </Box>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <CustomButton variant="outline" mr={3} onClick={onClose}>
            Cancel
          </CustomButton>
          <CustomButton
            colorScheme="blue"
            backgroundColor="#222"
            _hover={{ backgroundColor: "#333" }}
            onClick={submitHandler}
          >
            {isLoader ? <Spinner /> : isEditForm ? "Update" : "Create"}
          </CustomButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
