"use client";

import { TextInput } from "flowbite-react";

export default function TextInputWithIcon({
  placeholder,
  icon,
  value,
  setValue,
  type = "text",
  id,
}: any) {
  return (
    <div className="">
      <TextInput
        icon={icon}
        id={id}
        name={id}
        placeholder={placeholder}
        required
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
