import React, { useState } from "react";
import { useBlogPosts } from "../../contexts/BlogPostsContext";
import { Button } from "../ui/button";
import { deleteFile, uploadBlogFile } from "../../services/blogServices";
import { Loader2 } from "lucide-react";
import { Input } from "../ui/input";

const CDNFiles = () => {
  const { fileList, setFileList, setShouldRefresh } = useBlogPosts();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  return (
    <div className="flex flex-col gap-2 border p-2 rounded-md">
      <div className="flex gap-2">
        <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <Button
          disabled={!file || uploading}
          onClick={async () => {
            setUploading(true);
            await uploadBlogFile(file);
            setShouldRefresh(true);
            setUploading(false);
          }}
          variant="outline"
        >
          {uploading && <Loader2 className="animate-spin" />}
          Upload
        </Button>
      </div>
      {fileList.length > 0 &&
        fileList.map((file, index) => {
          return (
            <div className="flex items-center gap-2" key={index}>
              <p className="text-sm">{file.name}</p>
              <Button
                variant="destructive"
                size="sm"
                onClick={async () => {
                  await deleteFile(file.name);
                  setFileList(fileList.filter((f) => f.name !== file.name));
                }}
              >
                Delete
              </Button>
            </div>
          );
        })}
    </div>
  );
};

export default CDNFiles;
