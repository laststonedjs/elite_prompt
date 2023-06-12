"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// components
import Form from "@components/Form";

const CreatePrompt = () => {
  const [submiting, setSubmiting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {};

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submiting={submiting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
