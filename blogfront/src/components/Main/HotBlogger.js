import styled from "styled-components";

const HotBloggerlist = styled.div`
    display: flex;
    justify-content: space-around;
`
const HotBloggerDiv = styled.div`
    text-align: center;
`
const BloggerImg = styled.img`
    width: 5rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
`
const BloggerName = styled.div`
    h4{
        margin-top: 0.5rem;
        margin-bottom : 1rem;
    }
`
function HotBlogger(props) {

    
    return (
        <>
            <h1>HOT Blogger</h1>
            <HotBloggerlist>
                {
                    props.hotbloggers.map((blogger, id) => {
                        return (
                            <HotBloggerDiv key={id} onClick = {props.onClick}>
                                <BloggerImg src={blogger.img} />
                                <BloggerName>
                                    <h4>{blogger.name}</h4>
                                    <h4>{blogger.followers.toLocaleString('ko-KR')}</h4>
                                </BloggerName>
                            </HotBloggerDiv>
                        )
                    })
                }
            </HotBloggerlist>
        </>
    )
}

export default HotBlogger;