import { saveArticlesData } from "@/redux/slices/articlesSlice";
import { Articles } from "@/utils/interfaces";
import { addAnArticle } from "@/utils/methods";
import { AddIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, useDisclosure } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import CreateProductModal from "./CreateArticleModal";
import { INITIAL_STATE } from "@/utils/constants";
import { CustomButton } from "@/UI";
export default function CreateProduct() {
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoader, setIsLoader] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [formData, setFormData] = useState<Articles>(INITIAL_STATE);

  const createProductHandler = useCallback(() => {
    setIsLoader(true);
    addAnArticle({
      ...formData,
      createdAt: new Date().toLocaleDateString(),
    })
      .then((res) => {
        dispatch(saveArticlesData([res]));
        setIsLoader(false);
        setShowSuccessMessage(true);
        setFormData(INITIAL_STATE);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
        onClose();
      })
      .catch(() => {
        console.log("Something went wrong.");
      });
  }, [formData]);

  return (
    <>
      <CustomButton
        leftIcon={<AddIcon />}
        color="white"
        onClick={onOpen}
        mx={8}
        bgGradient="linear(to-r, #1f2544, #095379)"
        _hover={{
          bgGradient: "linear(to-r, #1f2544, #095379)",
        }}
        width="50%"
      >
        Post Your Article
      </CustomButton>
      <CreateProductModal
        isLoader={isLoader}
        isOpen={isOpen}
        onClose={onClose}
        submitHandler={createProductHandler}
        formData={formData}
        setFormData={setFormData}
      />
      {showSuccessMessage && (
        <Alert
          status="success"
          position="fixed"
          top="20px"
          right="20px"
          borderRadius="lg"
          zIndex={999}
          width="30%"
        >
          <AlertIcon />
          Article created successfully!
        </Alert>
      )}
    </>
  );
}
