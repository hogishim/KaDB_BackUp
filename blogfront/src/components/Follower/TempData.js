import img1 from './temp1.png'



    let follower_data = [

        {img: img1, name: ' 소사'}, 
        {img: img1, name: '주키치'}, 
        {img: img1, name: '리즈'},  
        {img: img1, name: '봉중근'}, 
        {img: img1, name: '이대형'}, 
        {img: img1, name: '이진영'},  
        {img: img1, name: '박용택'}, 
        {img: img1, name: '정성훈'}, 
        {img: img1, name: '조인성'},  
        {img: img1, name: '이택근'},
        {img: img1, name: '이병규'}, 
        {img: img1, name: '윤진호'}, 
        {img: img1, name: '김일경'}, 
        {img: img1, name: '백창수'}, 
        {img: img1, name: '김용의'}, 
        {img: img1, name: '문선재'}, 



    ]


  


export default follower_data;

export function updateTempData(updatedData) {
    console.log(updatedData);
    follower_data = [...updatedData];
    return follower_data;
}

export function getTempData() {
    return follower_data;
}