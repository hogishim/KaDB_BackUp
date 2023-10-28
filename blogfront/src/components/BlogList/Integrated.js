import styled from "styled-components";

import Input from "./Input/Input";
import Banner from "./Banner";
import List from "./List";

const BlogListDiv = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin-top : 3rem;
    background-color:#F2F2F2;
`

function BlogList(){
    return(
        <BlogListDiv>
            <Input/>
            <Banner/>
            <List/>
        </BlogListDiv>
    )
}

export default BlogList;