"use client";

import React, { useState } from "react";
import TextInputWithIcon from "./TextInputWithIcon";
import {
  HiCurrencyDollar,
  HiMail,
  HiPhone,
  HiQuestionMarkCircle,
  HiUser,
} from "react-icons/hi";
import ContactMethod from "./ContactMethod";
import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import TextArea from "./TextArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sendContactUs } from "../actions";
import { Spinner } from "flowbite-react";
import { useToast } from "@chakra-ui/react";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [phone, setPhone] = useState("");
  const toast = useToast();
  function clearInputs() {
    setEmail("");
    setName("");
    setSubject("");
    setPhone("");
    setMessage("");
  }
  return (
    <div
      className="min-h-[50vh] flex flex-col justify-center my-4"
      id="contactus"
    >
      <div className="flex flex-col gap-4 lg:items-center">
        <p className="font-bold text-2xl lg:text-[40px] tracking-wide">
          Let's Discuss Your <span className="text-[#6C63FF]">Project</span>{" "}
        </p>
        <p className="text-sm lg:text-md lg:max-w-[400px] lg:text-center">
          {" "}
          Let's make something new, different and more meaningful or make thing
          more visual or conceptual
        </p>
      </div>
      <div className="flex mt-4 lg:flex-row-reverse flex-col lg:justify-between lg:gap-5 relative">
        <form
          action={async (e) => {
            setLoading(true);
            await sendContactUs(e);
            setTimeout(() => {
              clearInputs();
              setLoading(false);
              toast({
                title: "Email sent.",
                description:
                  "We've sent an email for Daniel, he'll analyse and answer your email.",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            }, 1000);
          }}
          className="mt-5 flex flex-col gap-2 w-full"
        >
          <div className=" flex sm:flex-row flex-col w-full gap-2">
            <div className="w-full flex flex-col gap-2">
              <TextInputWithIcon
                placeholder="Email"
                id="from"
                type="email"
                setValue={setEmail}
                value={email}
                icon={HiMail}
              />
              <TextInputWithIcon
                placeholder="Phone"
                id="phone"
                type=""
                setValue={setPhone}
                value={phone}
                icon={HiPhone}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              {" "}
              <TextInputWithIcon
                placeholder="Name"
                id="name"
                name="name"
                type=""
                setValue={setName}
                value={name}
                icon={HiUser}
              />
              <TextInputWithIcon
                placeholder="Subject"
                id="subject"
                type=""
                setValue={setSubject}
                value={subject}
                icon={HiQuestionMarkCircle}
              />
            </div>
          </div>
          <div className="w-full">
            <TextArea value={message} setValue={setMessage} />
          </div>
          <div className="flex justify-end">
            {" "}
            <button
              type="submit"
              className="bg-[#6C63FF] text-sm py-2.5 px-6 rounded-md text-white"
            >
              {loading ? <Spinner /> : "Submit message"}
            </button>
          </div>
        </form>
        <hr className="flex flex-grow border-[1px] mt-4 lg:hidden border-zinc-200 dark:!border-zinc-600" />
        <div className="mt-5 flex flex-col gap-2">
          <ContactMethod
            icon={faPhone}
            title="Call Me"
            description="+351 910723748"
          />
          <ContactMethod
            icon={faEnvelope}
            title="Email Me"
            description="moraisalexandre01@hotmail.com"
          />
          <ContactMethod
            icon={faLocationDot}
            title="Address"
            description="Pinhal Novo, Setúbal"
            iconClassName="px-3.5"
          />
        </div>
      </div>
    </div>
  );
}
