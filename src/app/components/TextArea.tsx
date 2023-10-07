"use client";

import { Textarea as TextAreaFlowbite } from "flowbite-react";

export default function TextArea({ value, setValue }: any) {
  return (
    <div className="" id="textarea">
      <TextAreaFlowbite
        id="comment"
        placeholder="Message"
        required
        rows={4}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
