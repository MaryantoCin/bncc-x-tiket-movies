import React, { useEffect, useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  CloseButton,
  useToast,
  propNames,
} from "@chakra-ui/react";

import {
  WarningIcon,
  InfoIcon,
  CheckCircleIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";
import axios from "axios";

function getColor(status) {
  let boxColor = ".100";
  let iconColor = ".500";
  let mainColor;

  switch (status) {
    case "error":
      mainColor = "red";
      break;
    case "info":
      mainColor = "blue";
      break;
    case "success":
      mainColor = "green";
      break;
    default:
      mainColor = "yellow";
      break;
  }

  boxColor = mainColor + boxColor;
  iconColor = mainColor + iconColor;

  return [boxColor, iconColor];
}

const ToastIcon = ({ status }) => {
  let icon;

  const position = "absolute";
  const top = "16px";
  const left = "16px";
  const color = getColor(status)[1];

  switch (status) {
    case "error":
      icon = (
        <WarningIcon position={position} top={top} left={left} color={color} />
      );
      break;
    case "info":
      icon = (
        <InfoIcon position={position} top={top} left={left} color={color} />
      );
      break;
    case "success":
      icon = (
        <CheckCircleIcon
          position={position}
          top={top}
          left={left}
          color={color}
        />
      );
      break;
    default:
      icon = (
        <WarningTwoIcon
          position={position}
          top={top}
          left={left}
          color={color}
        />
      );
      break;
  }

  return icon;
};

export function showToast(
  toast,
  toastIdRef,
  title,
  description,
  status,
  duration,
  isClosable
) {
  function closeToast() {
    toast.close(toastIdRef.current);
  }

  closeToast();
  toastIdRef.current = toast({
    title: title,
    description: description,
    status: status,
    duration: duration,
    isClosable: isClosable,
    render: () => (
      <Box
        position="relative"
        padding="12px 36px 12px 48px"
        color="gray.700"
        bg={getColor(status)[0]}
        lineheight="16px"
        borderRadius="6px"
      >
        <ToastIcon status={status} />
        <CloseButton
          position="absolute"
          top="12px"
          right="12px"
          size="sm"
          onClick={() => closeToast(toast, toastIdRef)}
        />
        <Text fontWeight="bold">{title}</Text>
        <Text>{description}</Text>
      </Box>
    ),
  });
}
