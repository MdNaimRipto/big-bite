import { colorConfig } from "@/configs/colorConfig";
import { Button } from "@mui/material";
import React from "react";
import ReserveFormInput from "./ReserveFormInput";
import SweetAlert from "sweetalert2";

const ReserveForm = () => {
  const inputContent = [
    { id: 1, type: "text", name: "userName", placeholder: "Your Name" },
    { id: 2, type: "phone", name: "phone", placeholder: "Phone" },
    { id: 3, type: "email", name: "email", placeholder: "Email Address" },
    { id: 4, type: "date", name: "date", placeholder: "Date" },
    { id: 5, type: "number", name: "persons", placeholder: "Persons" },
    { id: 6, type: "time", name: "time", placeholder: "Time" },
  ];

  const handleReservation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userName = form.userName.value;
    const date = form.date.value;
    const persons = form.persons.value;
    const time = form.time.value;

    SweetAlert.fire({
      position: "center",
      icon: "success",
      showConfirmButton: true,
      title: `Reservation Booked Successfully`,
      html: `<p>Reservation booked for ${userName}<br/><br/> at ${time}, ${date} for ${persons} peoples</p>`,
      timer: 5000,
      color: colorConfig.black,
      iconColor: colorConfig.secondary,
    });

    form.reset();
  };

  return (
    <form
      onSubmit={handleReservation}
      className="p-6 mt-6 lg:mt-0 md:p-8 rounded reserveFormBg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {inputContent.map(data => (
          <ReserveFormInput
            key={data.id}
            type={data.type}
            name={data.name}
            placeholder={data.placeholder}
          />
        ))}
      </div>
      <Button
        type="submit"
        className="commonButtonBg font-semibold tracking-tighter w-full mt-4"
        sx={{
          py: "12px",
          fontWeight: "600px",
          color: colorConfig.white,
        }}
      >
        Conform Reservation
      </Button>
    </form>
  );
};

export default ReserveForm;
