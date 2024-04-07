"use client";
import {
  Avatar,
  Flex,
  Wrap,
  Text,
  WrapItem,
  List,
  ListItem,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@chakra-ui/react";
import CreateProductModal from "../CreateArticle/CreateArticleModal";
import { INITIAL_STATE } from "@/utils/constants";
import { CustomButton, AlertDialog } from "@/UI";
import {
  removeArticle,
  saveCurrentArticle,
  updateArticleInList,
} from "@/redux/slices/articlesSlice";
import { deleteAnArticle, updateAnArticle } from "@/utils/methods";
import { RootType } from "@/redux/store";
import Link from "next/link";
export default function ArticleDetails() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentArticle } = useSelector(
    (state: RootType) => state.articlesSlice
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isFormLoader, setIsFormLoader] = useState(false);
  const [dialogOpen, setdialogOpen] = useState(false);

  const [formData, setFormData] = useState(currentArticle ?? INITIAL_STATE);

  const handleOpen = () => {
    setdialogOpen(true);
  };

  const handleClose = () => {
    setdialogOpen(false);
  };

  const handleConfirm = async () => {
    if (currentArticle) {
      try {
        await deleteAnArticle(currentArticle.id);
        // Dispatch action to update the Redux store after deletion
        dispatch(removeArticle(currentArticle.id)); // Clear the current article from the state
        router.push("/");
      } catch (error) {
        alert("Error deleting article: " + error);
      }
    }
  };
  const handleCancel = () => {
    setdialogOpen(false);
  };

  const editProductHandler = useCallback(() => {
    setIsFormLoader(true);
    updateAnArticle(formData.id, formData)
      .then((updatedArticle) => {
        setIsFormLoader(false);
        dispatch(saveCurrentArticle(formData));
        dispatch(updateArticleInList(updatedArticle));
        onClose();
      })
      .catch((error) => {
        console.error("Error updating article:", error);
      });
  }, [formData]);

  return (
    <Flex
      mx={8}
      justifyContent="space-between"
      flexDirection={{ base: "column", lg: "row" }}
      m="2rem 2rem -1rem 2rem"
      display="inline-flex"
      alignItems="center"
      height="60vh"
    >
      <Wrap
        justifyContent="flex-end"
        spacing={4}
        flexWrap="wrap"
        alignItems="center"
        justifyItems="center"
      >
        <WrapItem textAlign="center">
          <Avatar
            name={currentArticle?.name}
            src={currentArticle?.avatar}
            boxSize="300px"
          />
        </WrapItem>
      </Wrap>{" "}
      <List spacing={2} pl="3rem">
        <ListItem>
          <Text textDecoration="underline">ID #{currentArticle?.id}</Text>
        </ListItem>
        <ListItem>
          <Text color="blue"> Price : ${currentArticle?.productPrice}</Text>
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">{currentArticle?.productName}</Text>
        </ListItem>
        <ListItem>
          <Text fontStyle="italic">Subtitle: {currentArticle?.name}</Text>
        </ListItem>
        <ListItem>
          <Text>{currentArticle?.description}</Text>
        </ListItem>
        <Flex>
          {" "}
          <WrapItem textAlign="center" p="5px">
            <CustomButton variant="solid" size="lg" onClick={onOpen}>
              <EditIcon />
            </CustomButton>
          </WrapItem>
          <WrapItem textAlign="center" p="5px">
            <CustomButton
              variant="solid"
              size="lg"
              onClick={handleOpen}
              _hover={{
                background: "red",
                color: "white",
              }}
            >
              <DeleteIcon />
            </CustomButton>
          </WrapItem>
        </Flex>
        <Link href="/">
          <CustomButton
            variant="outlined"
            backgroundColor="#3C415C"
            color="#e9e9e9"
            borderRadius="md"
            mt="2rem"
            _hover={{
              background: "#B4A5A5",
              color: "white",
            }}
          >
            <ArrowLeftIcon mr="2px" pr="5px" /> All Articles
          </CustomButton>
        </Link>
      </List>
      <CreateProductModal
        isLoader={isFormLoader}
        isOpen={isOpen}
        onClose={onClose}
        submitHandler={editProductHandler}
        formData={formData}
        setFormData={setFormData}
        isEditForm
      />
      <AlertDialog
        isOpen={dialogOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        header="Discard Changes?"
        message="Are you sure you want Delete ?"
        cancelLabel="Nope"
        confirmLabel="Yes, Delete"
      />
    </Flex>
  );
}
