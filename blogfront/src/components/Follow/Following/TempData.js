import img1 from './temp1.png'

//temporary data for following user

    let following_data = [

        {img: img1, name: '제라드'}, 
        {img: img1, name: '토레스'},  
        {img: img1, name: '알론소'}, 
        {img: img1, name: '아게르'}, 
        {img: img1, name: '슈크르텔'},  
        {img: img1, name: '케러거'}, 
        {img: img1, name: '엔리케'}, 
        {img: img1, name: '레이나'},  
        {img: img1, name: '리세'},
        {img: img1, name: '카윗'}, 
        {img: img1, name: '크라우치'}, 
        {img: img1, name: '파울러'}, 
        {img: img1, name: '러시'}, 
        {img: img1, name: '달글리시'}, 
        {img: img1, name: '마네'}, 



    ]


  


export default following_data;

export function updateTempData(updatedData) {
    console.log(updatedData);
    following_data = [...updatedData];
    return following_data;
}

export function getTempData() {
    return following_data;
}