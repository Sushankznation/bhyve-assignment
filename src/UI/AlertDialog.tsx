"use client"
import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
 
} from "@chakra-ui/react";
import { CustomButton } from ".";
interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onCancel: () => void;
  onConfirm: () => void;
  header: string;
  message: string;
  cancelLabel?: string;
  confirmLabel?: string;
}

const CustomAlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  onClose,
  onCancel,
  onConfirm,
  header,
  message,
  cancelLabel = "No",
  confirmLabel = "Yes",
}) => {
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{header}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{message}</AlertDialogBody>
          <AlertDialogFooter>
            <CustomButton ref={cancelRef} onClick={onCancel}>
              {cancelLabel}
             </CustomButton>
            <CustomButton colorScheme="red" ml={3} onClick={onConfirm}>
              {confirmLabel}
             </CustomButton>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CustomAlertDialog;
