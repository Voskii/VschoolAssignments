import React, {useState, useEffect} from "react";
import axios from "axios";
import Bounty from "./components/Bounty";
import BountyForm from "./components/BountyForm";

export default function App () {
    const [bounties, setBounties] = useState([])

    function getBounties(){
        axios.get('/bounty')
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    function addBounty (newBounty){
        axios.post('/bounty', newBounty)
            .then(res => {
                setBounties(prev => [...prev, res.data])
            })
            .catch(err => console.log(err))
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

    return (
        <div className="bounty-container">
            <BountyForm submit={addBounty} btnText='Add Bounty'/>
            {bounties.map(bountyy => <Bounty {...bountyy} key={bountyy.fname} delBounty={delBounty} editBounty={editBounty}/>)}
        </div>
    )
}