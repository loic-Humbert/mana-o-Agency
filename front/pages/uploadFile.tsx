import { ChangeEvent, useState } from 'react';

function FileUploadSingle() {
    const [file, setFile] = useState<FormData>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log(e.target.files);
            const formData: FormData = new FormData();
            formData.append("file", e.target.files[0]);

            setFile(formData);
        }
    };

    const handleUploadClick = () => {
        if (!file) {
            return;
        }

        // 👇 Uploading the file using the fetch API to the server
        fetch( process.env.API_URL +'/api/apply/1/upload/', {
            method: 'POST',
            body: file,
            // 👇 Set headers manually for single file upload
            //   headers: {
            //     'content-type': file.type,
            //     'content-length': `${file.size}`, // 👈 Headers need to be a string
            //   },
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    };

    return true
}

export default FileUploadSingle;