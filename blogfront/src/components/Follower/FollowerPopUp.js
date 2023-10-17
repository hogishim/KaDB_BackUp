import './Styles/Styles.css';
import SearchBar from './SearchBar';
import FollowerComponent from './FollowerComponent';
import data from './TempData';
import { useState } from 'react';
import { updateTempData, getTempData } from './TempData';

function FollowerPopUp() {
    let [userData, setUserData] = useState([...data]);
    let [search, setSearch] = useState('');

    const handleSearchChange = (searchTerm) => {
        setSearch(searchTerm);

        const filteredData = data.filter(item => item.name.includes(searchTerm));
        setUserData(filteredData);
    };

    const handleBlockUser = (updatedData) => {
        setUserData(updatedData);
        updateTempData(updatedData);
    };


    return (
        <>
            <div className="fr-pop-container">
                <div className="follower-box">
                    <h3>팔로워 리스트</h3>
                    <SearchBar onSearchChange={handleSearchChange} />
                    <FollowerComponent data={userData} 
                    onButtonClick={handleBlockUser}/>
                </div>
            </div>
        </>
    );
}

export default FollowerPopUp;
