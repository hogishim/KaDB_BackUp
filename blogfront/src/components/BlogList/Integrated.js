import styled from "styled-components";
import qs from 'qs';

import Input from "./Input/Input";
import Banner from "./Banner";
import List from "./List";
import { useLocation } from "react-router-dom";

const BlogListDiv = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin-top : 3rem;
`

function BlogList(){
    const location = useLocation();
    const searchInput = qs.parse(location.search,{ignoreQueryPrefix:true})
    return(
        <BlogListDiv>
            <Input searchValue={searchInput.search}/>
            <Banner/>
            <List/>
        </BlogListDiv>
    )
}

export default BlogList;