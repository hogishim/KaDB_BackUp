import React, { useState } from 'react';
import styled from 'styled-components'

let Input = styled.input`

`
let FileInput = styled.div`



`

function InputImg({ onImageChange }) {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
            onImageChange(reader.result); 
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImage(null);
            onImageChange(null); 
        }
    };

    const handleImageRemove = () => {
        setImage(null);
        onImageChange(null); 
    };

    return (
        <FileInput>
            <Input type="file" onChange={handleImageChange} 
            placeholder="첨부파일"/>
            
            <button onClick={handleImageRemove}>이미지 삭제</button>
        </FileInput>
    );
}

export default InputImg;
