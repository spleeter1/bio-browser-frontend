import { Box, TextField } from "@mui/material";
import InputUploadUI from "../../components/InputUploadUI";
import { ChangeEvent, useState } from "react";
import BtnRunTool from "../../components/BtnRunTool";
import axios from "axios";
import { ContentUploadFileGRUD } from "./ContentGRUD";

type FormGRUDProps = {
  onResponse: (response: any) => void; // Prop để truyền phản hồi lên component cha
  onSubmitting: (isSubmitting: boolean) => void;
};
const FormGRUD: React.FC<FormGRUDProps> = ({ onResponse, onSubmitting }) => {
  const fileKeys = ["Files", "Files", "Files"];
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [region, setRegion] = useState<string>("");

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
    }
  };
  const handleStringParam = (e: ChangeEvent<HTMLInputElement>) => {
    setRegion(e.target.value);
  };
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitting(true);

    const formData = new FormData();
    selectedFiles.map((file, index) => {
      formData.append(fileKeys[index], file);
      console.log(selectedFiles);
    });
    formData.append("region", region);
    // for (const [key, value] of formData.entries()) {
    //     console.log(key, value);
    // }
    try {
      const response = await axios.post(
        "http://192.168.1.135:32100/grud",
        formData
      );
      console.log(response);
      onResponse(response);
    } catch (error) {
      onSubmitting(false);
      console.error("Error uploading files:", error);
      onResponse(null);
    } finally {
      onSubmitting(false);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <div style={{ paddingLeft: "2%", paddingTop: "3%" }}>
          <InputUploadUI onChange={handleChangeFile} />
        </div>

        <ContentUploadFileGRUD />

        <div style={{ padding: "2%" }}>
          <TextField
            id="input-region"
            label="Region"
            onChange={handleStringParam}
          />
        </div>

        <div style={{ padding: "2%" }}>
          <BtnRunTool />
        </div>
      </form>
    </Box>
  );
};
export default FormGRUD;
