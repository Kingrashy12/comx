"use client";

import React from "react";
import { Modal } from "../ui";
import DatePicker from "../ui/DatePicker";
import { useAuthFlow } from "@/context/auth-flow";
import { closeModal } from "../provider/modal";

const DateOfInCorporation = () => {
  const { corporateForm, setCorporateForm } = useAuthFlow();

  const handleDate = (date_: Date) => {
    setCorporateForm({ ...corporateForm, date_of_incorporation: date_ });
    closeModal();
  };

  return (
    <Modal.Root value="date-of-incorporation">
      <Modal.Panel size="lg" className="bg-transparent shadow-none">
        <Modal.Content>
          <DatePicker onChange={handleDate} />
        </Modal.Content>
      </Modal.Panel>
    </Modal.Root>
  );
};

export default DateOfInCorporation;
