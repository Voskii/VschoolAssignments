import React, {useState, useEffect} from "react";
import axios from "axios";
import Bounty from "./components/Bounty";
import BountyForm from "./components/BountyForm";

export default function App () {
    const [bounties, setBounties] = useState([])
    const [errors, setErrors] = useState({
        items: [],
        errorMessage: ''
    })

    function getBounties(){
        axios.get('/bounty')
            .then(res => setBounties(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addBounty (newBounty){
        axios.post('/bounty', newBounty)
            .then(res => {
                setBounties(prev => [...prev, res.data])
            })
            .catch(err => {
                setErrors({errorMessage: err.response.data.errMsg})
            })
    }

    function delBounty(bountyId){
        axios.delete(`/bounty/${bountyId}`)
            .then(res => {
                setBounties(prev => prev.filter(bountyy => bountyy._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId){
        axios.put(`/bounty/${bountyId}`, updates)
            .then(res => {
                setBounties(prev => prev.map(bountyy => bountyy._id !== bountyId ? bountyy : res.data))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()

    }, [])

    function handleFilter(e){
        if (e.target.value === 'reset'){
            getBounties()
        } else {
            axios.get(`/bounty/search/type?type=${e.target.value}`)
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
        }
        
    }

    return (
        <div className="bounty-container">
            <BountyForm submit={addBounty} btnText='Add Bounty'/>
            <h4>Filter by Type</h4>
            <select onChange={handleFilter} className='filter-form'>
                <option value='reset'>- No Filter -</option>
                <option value='jedi'>Jedi</option>
                <option value='sith'>Sith</option>
            </select>
            {errors.errorMessage ? 
                <h3 className="delete-btn">{errors.errorMessage}</h3>
            :
            ''}
            {bounties.map(bountyy => <Bounty {...bountyy} key={bountyy.fname} delBounty={delBounty} editBounty={editBounty}/>)}
        </div>
    )
}