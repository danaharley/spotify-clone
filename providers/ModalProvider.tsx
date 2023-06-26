"use client";

import React, { useEffect, useState } from "react";

import AuthModal from "@/app/components/AuthModal";
import UploadModal from "@/app/components/UploadModal";
import SubscribeModal from "@/app/components/SubscribeModal";
import { ProductWithPrice } from "@/types/types";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
};

export default ModalProvider;
