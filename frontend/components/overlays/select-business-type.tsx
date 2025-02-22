"use client";

import React, { useState } from "react";
import { Box, Modal, TextInput } from "../ui";
import business from "@/data/business";
import { useAuthFlow } from "@/context/auth-flow";
import { closeModal } from "../provider/modal";

const SelectBusiness = () => {
  const [search, setSearch] = useState("");
  const { corporateForm, setCorporateForm } = useAuthFlow();

  const searchedSector = business.filter((sector) => {
    const name = sector.label.toLowerCase();
    const searched = search.toLowerCase();

    return name.includes(searched);
  });

  const selectSector = (sector: string) => {
    setCorporateForm({
      ...corporateForm,
      type_of_business: sector,
    });
    closeModal();
  };

  return (
    <Modal.Root value="select-business-type">
      <Modal.Panel size="lg">
        <Modal.Header>
          <TextInput
            placeholder="Search business type"
            className="mt-5"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Modal.Header>
        <Modal.Content className="p-0">
          {searchedSector.length < 1 ? (
            <Box center fullWidth className="py-6">
              <p className="font-roboto text-neutral-500 text-base">
                Sector &apos;{search}&apos; not found
              </p>
            </Box>
          ) : (
            searchedSector.map((item, index) => (
              <p
                onClick={() => selectSector(item.value)}
                key={index}
                className="font-roboto text-base cursor-pointer hover:bg-gray-50 px-5 py-4"
              >
                {item.label}
              </p>
            ))
          )}
        </Modal.Content>
      </Modal.Panel>
    </Modal.Root>
  );
};

export default SelectBusiness;
